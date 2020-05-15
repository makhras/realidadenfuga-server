

var http = require('http');
var cors = require('cors')
var express = require('express');
var richText = require('rich-text');
var ShareDB = require('sharedb');
var WebSocket = require('ws');
var WebSocketJSONStream = require('@teamwork/websocket-json-stream');

ShareDB.types.register(richText.type);
var backend = new ShareDB({ enablePresence: true });

startServer();

// Create initial document then fire callback

function getIdeas (request, response) {
  console.log('GETTING IDEAS..//..//..//..//..');
  let connection = backend.connect()
  let doc = connection.get('ideas', 'lluvia')
  doc.fetch(err=>{
    if (err) throw err
    if (doc.type===null) {
      console.log('Oops made a doc: ', doc);
      doc.create({ideas: []})
      return;
    } else {
      console.log('DOC! ', doc.data.list);
    }
  })
  response.send('All is well.')
}

function getScript(request, response) {
  console.log('GETTING SCRIPT..---..---..---..---..');
  
  var connection = backend.connect();
  var doc = connection.get('temporada1', 'episodio1');
  doc.fetch(function(err) {
    if (err) throw err;
    if (doc.type === null) {
      doc.create([{insert: 'Hi!'}], 'rich-text');
      return;
    }
  });
  response.send('DATABASED SCRIPT!!!')
}

function startServer() {
  // Create a web server to serve files and listen to WebSocket connections
  var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  };
  var app = express();
  // app.use(express.static('static'));
  app.use(allowCrossDomain)
  app.use(cors({origin:true}))
  app.use(express.json());
  app.use(express.static('public'));
  app.use(express.static('node_modules/quill/dist'));
  var server = http.createServer(app);

  var wss = new WebSocket.Server({server: server});
  wss.on('connection', function(ws) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
  });

  app.get('/lluvia', cors(), getIdeas)

  // app.get('/:temporada/:episodio', cors(), getScript)
  app.get('/guion', cors(), getScript)

  server.listen(8083);
  console.log('Listening on http://localhost:8083');
}
