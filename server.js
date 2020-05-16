var http = require('http');
var express = require('express');
var ShareDB = require('sharedb');
var richText = require('rich-text');
var WebSocket = require('ws');
var WebSocketJSONStream = require('@teamwork/websocket-json-stream');
import firebase from 'firebase'


ShareDB.types.register(richText.type);
var backend = new ShareDB();

startServer()

function saveScript () {
  var saveScriptData = firebase.functions().httpsCallable('saveScriptData'); 

  saveScriptData().then(function(resp) {
    console.log('EXITO! ', resp.data.result);
  }).catch(function(error) {
    console.log('ERROR CALLING CLOUD FUNCTION... : ', error);
  });
}

function getScript(callback) {
  console.log('GETTING SCRIPT..--..--..--..--..');
  var connection = backend.connect();
  var doc = connection.get('temporada1', 'episodio1');
  doc.fetch(function(err) {
    if (err) throw err;
    if (doc.type === null) {
      // doc.create([{insert: '\n \n ESC'}, {attributes: {scriptScene: {type: 'script'}}}, {insert: '\n'}], 'rich-text', callback);
      doc.create([{insert: 'ESCENA'}], 'rich-text', callback);
      return;
    }
  });
}

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
    }
    getIdeas()
  })
}

function startServer() {
  var app = express();
  app.use(express.static('static'));
  app.use(express.static('node_modules/quill/dist'));
  var server = http.createServer(app);

  // Connect any incoming WebSocket connection to ShareDB
  var wss = new WebSocket.Server({server: server});
  wss.on('connection', function(ws) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
  });

  getScript();
  getIdeas();

  const port = process.env.PORT || 8083
  server.listen(port);
  console.log('Listening on http://localhost:' + port);
}
