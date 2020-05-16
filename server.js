var http = require('http');
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
  var doc = connection.get('temporada1', 'episodio1');
  doc.fetch(function(err) {
    if (err) throw err;
    if (doc.type === null) {
      doc.create([{insert: 'Hi!'}], 'rich-text', callback);
      return;
    }
    callback();
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
    } else {
      console.log('DOC! ', doc.data);
    }
  })
  // response.send('All is well.')
}

function startServer() {
  // Create a web server to serve files and listen to WebSocket connections
  
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

  getIdeas()

  server.listen(8083);
  console.log('Listening on http://localhost:8083');
}



// var http = require('http');
// var cors = require('cors')
// var express = require('express');
// var richText = require('rich-text');
// var ShareDB = require('sharedb');
// var WebSocket = require('ws');
// var WebSocketJSONStream = require('@teamwork/websocket-json-stream');

// ShareDB.types.register(richText.type);
// var backend = new ShareDB({ enablePresence: true });

// startServer();

// function getIdeas (request, response) {
//   console.log('GETTING IDEAS..//..//..//..//..');
//   let connection = backend.connect()
//   let doc = connection.get('ideas', 'lluvia')
//   doc.fetch(err=>{
//     if (err) throw err
//     if (doc.type===null) {
//       console.log('Oops made a doc: ', doc);
//       doc.create({list: [{idea: 'Primera idea...', order: 0}]})
//       return;
//     } else {
//       console.log('DOC! ', doc.data);
//     }
//   })
//   response.send('All is well.')
// }


// function startServer() {
//   // var allowCrossDomain = function(req, res, next) {
//   //   res.header('Access-Control-Allow-Origin', '*');
//   //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   //   next();
//   // };
//   var app = express();
//   // app.use(allowCrossDomain)
//   // app.use(function(req, res, next) {

//   //   res.header("Access-Control-Allow-Origin", "https://realidadenfuga.web.app"); // update to match the domain you will make the request from
//   //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   //   next();
//   // });

//   var host = process.env.HOST || '0.0.0.0';
//   // Listen on a specific port via the PORT environment variable
//   var port = process.env.PORT || 8080;

//   var cors_proxy = require('cors-anywhere');
//   cors_proxy.createServer({
//       originWhitelist: [], // Allow all origins
//       requireHeader: ['origin', 'x-requested-with'],
//       removeHeaders: ['cookie', 'cookie2']
//   }).listen(port, host, function() {
//       console.log('Running CORS Anywhere on ' + host + ':' + port);
//   });

//   app.use(express.json());
//   app.use(express.static('public/pwa'));
//   app.use(express.static('node_modules/quill/dist'));
//   app.use(cors({origin:true}))
//   var server = http.createServer(app);

//   var wss = new WebSocket.Server({server: server});
//   wss.on('connection', function(ws) {
//     var stream = new WebSocketJSONStream(ws);
//     backend.listen(stream);
//   });

//   app.get('/lluvia', cors(), getIdeas)

//   app.get('/guion', cors(), getScript)
//   function getScript(request, response) {
//     console.log('GETTING SCRIPT..---..---..---..---..');
    
//     var connection = backend.connect();
//     var doc = connection.get('temporada1', 'episodio1');
//     doc.fetch(function(err) {
//       if (err) throw err;
//       if (doc.type === null) {
//         doc.create([{insert: 'INT/EXT - '},{insert: '\n', attributes: {scriptScene: { type: 'script' }}}], 'rich-text');
//         return;
//       }
//     });
//     response.send('DATABASED SCRIPT!!!')
//   }

//   server.listen(8080);
//   console.log('Listening on http://localhost:8080');
// }












// var http = require('http');
// var cors = require('cors')
// var express = require('express');
// var ShareDB = require('sharedb');
// // var json1 = require('ot-json1');
// var WebSocket = require('ws');
// var WebSocketJSONStream = require('@teamwork/websocket-json-stream');

// // ShareDB.types.register(json1.type);
// // var backend = new ShareDB({ enablePresence: true });
// var backend = new ShareDB();


// startServer();

// // Create initial document then fire callback
// // function createDoc(ep) {
// //   var connection = backend.connect();
// //   var doc = connection.get('ideas', ep.title);
// //   doc.fetch(function(err) {
// //     if (err) throw err;
// //     if (doc.type === null) {
// //       // doc.create([{insert: 'Created '+ep.id+'!'}], 'ot-json1');
// //       console.log('NEW DOC! ', doc)
// //       // doc.create(ep.cont, 'ot-json1');
// //       doc.create(ep.cont);
// //       return;
// //     }else {
// //       console.log('DOC: ', doc)
// //     }
// //   });
// // }

// function createCursor(ca) {
  
// }

// function startServer() {
//   // Create a web server to serve files and listen to WebSocket connections
//   var app = express();
//   app.use(express.json())
//   app.use(express.static('public/pwa'));
//   app.use(express.static('node_modules/quill/dist'));
//   app.use(cors({origin:true}))
//   var server = http.createServer(app);

//   // Connect any incoming WebSocket connection to ShareDB
//   var wss = new WebSocket.Server({server: server});
//   wss.on('connection', function(ws) {
//     var stream = new WebSocketJSONStream(ws);
//     backend.listen(stream);
//   });


//   // server.listen(process.env.PORT || 80);
//   // console.log('Listening on port 80');
//   server.listen(process.env.PORT || 8083);
//   console.log('Listening on port 8083');

//   // app.post('/:lang/:id', cors(), function(request, response){
//   //   console.log(request.body);      // your JSON
//   //    response.send(request.body);    // echo the result back
//   // });
  
//   app.post('/lluvia', cors(), getEditingEpisode)
  
//   function getEditingEpisode (request, response) {
//     var connection = backend.connect();
//     var doc = connection.get('ideas', 'lluvia');
//     doc.fetch(function(err) {
//       console.log('err: ', err);
      
//       if (err) throw err;
//       if (doc.type === null) {
//         // doc.create([{insert: 'Created '+ep.id+'!'}], 'ot-json1');
//         console.log('NEW DOC! ', doc)
//         doc.create({list: [{idea: 'Primera idea...', order: 0}]})
//         return;
//       }else {
//         console.log('DOC: ', doc)
//       }
//     });
//     response.send('Created ShareDB')
//   }

//   app.get('/guion', cors(), getScript)
//   function getScript(request, response) {
//     console.log('GETTING SCRIPT..---..---..---..---..');
    
//     var connection = backend.connect();
//     var doc = connection.get('temporada1', 'episodio1');
//     doc.fetch(function(err) {
//       if (err) throw err;
//       if (doc.type === null) {
//         doc.create([{insert: 'INT/EXT - '},{insert: '\n', attributes: {scriptScene: { type: 'script' }}}], 'rich-text');
//         return;
//       }
//     });
//     response.send('DATABASED SCRIPT!!!')
//   }

//   // app.get('/newcaret/:caret', cors(), getCaretPose)
//   // function getCaretPose(req, res) {
//   //   console.log('CARET: ', request.params.caret);
//   //   createCursor(request.params.caret)
//   //   res.send('Created Caret')
//   // }
// }


