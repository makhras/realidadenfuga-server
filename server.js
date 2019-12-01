var http = require('http');
var cors = require('cors')
var express = require('express');
var ShareDB = require('sharedb');
var richText = require('rich-text');
var WebSocket = require('ws');
var WebSocketJSONStream = require('@teamwork/websocket-json-stream');

ShareDB.types.register(richText.type);
var backend = new ShareDB();
createDoc(startServer);

// Create initial document then fire callback
function createDoc(callback) {
  var connection = backend.connect();
  var doc = connection.get('examples', 'richtext');
  doc.fetch(function(err) {
    if (err) throw err;
    if (doc.type === null) {
      doc.create([{insert: 'Hi!'}], 'rich-text', callback);
      return;
    }
    callback();
  });
}

function startServer() {
  // Create a web server to serve files and listen to WebSocket connections
  var app = express();

  app.use(express.static('public'));
  app.use(express.static('node_modules/quill/dist'));
  app.use(cors)
  var server = http.createServer(app);

  // Connect any incoming WebSocket connection to ShareDB
  var wss = new WebSocket.Server({server: server});
  wss.on('connection', function(ws) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
  });


  server.listen(8080);
  console.log('Listening on port 8080');
  
  app.get('/episodes', getEditingEpisode)

  function getEditingEpisode (request, response) {
    console.log('REQUESTED: ', request);
    response.send('cool')
    
  }
}
