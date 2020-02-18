var http = require('http');
var cors = require('cors')
var express = require('express');
var ShareDB = require('sharedb');
var richText = require('rich-text');
var WebSocket = require('ws');
var WebSocketJSONStream = require('@teamwork/websocket-json-stream');

ShareDB.types.register(richText.type);
var backend = new ShareDB({ enablePresence: true });

startServer();

// Create initial document then fire callback
function createDoc(ep) {
  var connection = backend.connect();
  var doc = connection.get(ep.lang, ep.id);
  doc.fetch(function(err) {
    if (err) throw err;
    if (doc.type === null) {
      // doc.create([{insert: 'Created '+ep.id+'!'}], 'rich-text');
      console.log('NEW DOC! ', doc)
      doc.create(ep.cont, 'rich-text');
      return;
    }else {
      console.log('DOC: ', doc)
    }
  });
}

function createCursor(ca) {
  
}

function startServer() {
  // Create a web server to serve files and listen to WebSocket connections
  var app = express();
  app.use(express.json())
  app.use(express.static('public/pwa'));
  app.use(express.static('node_modules/quill/dist'));
  app.use(cors({origin:true}))
  var server = http.createServer(app);

  // Connect any incoming WebSocket connection to ShareDB
  var wss = new WebSocket.Server({server: server});
  wss.on('connection', function(ws) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
  });


  // server.listen(process.env.PORT || 80);
  // console.log('Listening on port 80');
  server.listen(process.env.PORT || 8083);
  console.log('Listening on port 8083');

  // app.post('/:lang/:id', cors(), function(request, response){
  //   console.log(request.body);      // your JSON
  //    response.send(request.body);    // echo the result back
  // });
  
  app.post('/:lang/:id', cors(), getEditingEpisode)
  
  function getEditingEpisode (request, response) {
    let contenido = JSON.parse(request.body.content).ops
    console.log('CONTENT:', typeof contenido, ' :', contenido);
    // console.log('ID: ', request.params.id);
    createDoc({lang: request.params.lang, id: request.params.id, cont: contenido})
    response.send('Created ShareDB')
  }

  // app.get('/newcaret/:caret', cors(), getCaretPose)
  // function getCaretPose(req, res) {
  //   console.log('CARET: ', request.params.caret);
  //   createCursor(request.params.caret)
  //   res.send('Created Caret')
  // }
}

