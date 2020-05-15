(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// var ReconnectingWebSocket = require('reconnecting-websocket');
// var sharedb = require('sharedb/lib/client');
// var richText = require('rich-text');
// var Quill = require('quill');
// sharedb.types.register(richText.type);

// // Open WebSocket connection to ShareDB server
// // var socket = new ReconnectingWebSocket('wss://' + window.location.host);
// var socket = new ReconnectingWebSocket('ws://' + window.location.host);
// console.log('window location host: ', window.location.host);

// var connection = new sharedb.Connection(socket);

// // For testing reconnection
// window.disconnect = function() {
//   connection.close();
// };
// window.connect = function() {
//   // var socket = new ReconnectingWebSocket('wss://' + window.location.host);
//   var socket = new ReconnectingWebSocket('ws://' + window.location.host);
//   connection.bindToSocket(socket);
// };

// // Create local Doc instance mapped to 'examples' collection document with id 'richtext'
// var doc = connection.get('examples', 'richtext');
// doc.subscribe(function(err) {
//   if (err) throw err;
//   var quill = new Quill('#editor', {theme: 'snow'});
//   quill.setContents(doc.data);
//   quill.on('text-change', function(delta, oldDelta, source) {
//     if (source !== 'user') return;
//     doc.submitOp(delta, {source: quill});
//   });
//   doc.on('op', function(op, source) {
//     if (source === quill) return;
//     quill.updateContents(op);
//   });
// });

console.log('%cREALIDAD EN FUGA', 'color: purple; font-size:20px')
},{}]},{},[1]);
