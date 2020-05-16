var http = require('http');
var express = require('express');
var ShareDB = require('sharedb');
var richText = require('rich-text');
var WebSocket = require('ws');
var WebSocketJSONStream = require('@teamwork/websocket-json-stream');


ShareDB.types.register(richText.type);

startServer()

// function getScript() {
//   let connection = backend.connect();
//   let doc = connection.get('temporada1', 'episodio1');
//   doc.fetch(function(err) {
//     if (err) throw err;
//     if (doc.type === null) {
//       // doc.create([{insert: '\n \n ESC'}, {attributes: {scriptScene: {type: 'script'}}}, {insert: '\n'}], 'rich-text', callback);
//       doc.create([{insert: 'ESCENA'}], 'rich-text');
//       console.log('CREATED SCRIPT..--..--..--..--..');
//       // return;
//     }
//   });
// }

// function getIdeas (request, response) {
//   let connection = backend.connect()
//   let doc = connection.get('ideas', 'lluvia')
//   doc.fetch(err=>{
//     if (err) throw err
//     if (doc.type===null) {
//       console.log('Oops made a doc: ', doc);
//       doc.create({list: [{idea: 'Primera idea...', order: 0}]})
//       console.log('CREATED IDEAS..//..//..//..//..');
//       return;
//     }
//   })
// }

function startServer() {
  let app = express();
  app.use(express.static('static'));
  app.use(express.static('node_modules/quill/dist'));
  let server = http.createServer(app);
  let backend = new ShareDB();

  // Connect any incoming WebSocket connection to ShareDB
  var wss = new WebSocket.Server({server: server});
  wss.on('connection', function(ws) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
  });


  
  let connection = backend.connect();

  let scriptDoc = connection.get('temporada1', 'episodio1');
  scriptDoc.fetch(function(err) {
    if (err) throw err;
    if (scriptDoc.type === null) {
      // scriptDoc.create([{insert: '\n \n ESC'}, {attributes: {scriptScene: {type: 'script'}}}, {insert: '\n'}], 'rich-text', callback);
      scriptDoc.create([{insert: 'ESCENA'}], 'rich-text');
      console.log('CREATED SCRIPT..--..--..--..--..');
      // return;
    }
  });
  

  let ideasDoc = connection.get('ideas', 'lluvia');
  ideasDoc.fetch(err=>{
    if (err) throw err
    if (ideasDoc.type===null) {
      // console.log('Oops made a DOC: ', ideasDoc);
      ideasDoc.create({list: [{idea: 'Primera idea...', order: 0}]});
      console.log('CREATED IDEAS..//..//..//..//..');
      return;
    }
  });

  // getScript();
  // getIdeas();

  const port = process.env.PORT || 8083
  server.listen(port);
  console.log('Listening on http://localhost:' + port);
}
