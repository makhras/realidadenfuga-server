

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

function getIdeas (request, response) {
  console.log('GETTING IDEAS..//..//..//..//..');
  let connection = backend.connect()
  let doc = connection.get('ideas', 'lluvia')
  doc.fetch(err=>{
    if (err) throw err
    if (doc.type===null) {
      console.log('Oops made a doc: ', doc);
      doc.create({list: [{idea: 'Primera idea...', order: 0}]})
      return;
    } else {
      console.log('DOC! ', doc.data);
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
      doc.create([{insert: 'INT/EXT - '},{insert: '\n', attributes: {scriptScene: { type: 'script' }}}], 'rich-text');
      return;
    }
  });
  response.send('DATABASED SCRIPT!!!')
}

function startServer() {
  // var allowCrossDomain = function(req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  //   next();
  // };
  var app = express();
  // app.use(allowCrossDomain)
  // app.use(function(req, res, next) {

  //   res.header("Access-Control-Allow-Origin", "https://realidadenfuga.web.app"); // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });
  app.use(express.json());
  app.use(cors({origin:true}))
  app.use(express.static('public/pwa'));
  app.use(express.static('node_modules/quill/dist'));
  var server = http.createServer(app);

  var wss = new WebSocket.Server({server: server});
  wss.on('connection', function(ws) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
  });

  app.get('/lluvia', cors(), getIdeas)

  app.get('/guion', cors(), getScript)

  server.listen(8083);
  console.log('Listening on http://localhost:8083');
}
