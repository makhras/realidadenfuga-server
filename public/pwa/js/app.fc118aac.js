(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({fastclick:"fastclick"}[e]||e)+"."+{"7389feae":"7d0a296b","2d0e8be2":"dbe56d87","4b47640d":"15b816f9",bda7f694:"fe99b9b7","327f184d":"fd33930c",b4652998:"610e09a1","3bcd951b":"cd679149",a6577cf2:"b611b320",fastclick:"5251028d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"327f184d":1,"3bcd951b":1,a6577cf2:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({fastclick:"fastclick"}[e]||e)+"."+{"7389feae":"31d6cfe0","2d0e8be2":"31d6cfe0","4b47640d":"31d6cfe0",bda7f694:"31d6cfe0","327f184d":"5fb7645e",b4652998:"31d6cfe0","3bcd951b":"09493a4a",a6577cf2:"57a1a9f2",fastclick:"31d6cfe0"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;u.push([0,"vendor"]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"setEpisodes",(function(){return A}));var a={};n.r(a),n.d(a,"setLanguage",(function(){return T})),n.d(a,"setDarkMode",(function(){return D})),n.d(a,"setUser",(function(){return N})),n.d(a,"setDrawerOpen",(function(){return I}));var o={};n.r(o),n.d(o,"updateLanguage",(function(){return L})),n.d(o,"updateDarkMode",(function(){return M})),n.d(o,"updateUser",(function(){return _})),n.d(o,"updateDrawerOpen",(function(){return C}));var u=n("967e"),i=n.n(u),c=(n("a481"),n("96cf"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),s=n("b05d"),f=n("2a19"),d=n("436b");c["default"].use(s["a"],{config:{},plugins:{Notify:f["a"],Dialog:d["a"]}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},p=[],b={name:"App"},m=b,h=n("2877"),g=Object(h["a"])(m,l,p,!1,null,null,null),v=g.exports,w=n("2f62"),y={episodes:[]},S={},k=(n("6b54"),n("06db"),n("8aa5")),E=n.n(k),O={getEpisodes:function(e,t){var n=localStorage.getItem(t)||null,r=localStorage.getItem(t+"-version")||null;E.a.database().ref("/version/").once("value").then((function(a){var o=[];a.val().toString()===r&&n?e.commit("setEpisodes",JSON.parse(n)):(localStorage.setItem(t+"-version",a.val().toString()),E.a.firestore().collection(t).get().then((function(n){n.forEach((function(e){o.push(e.data())})),localStorage.setItem(t,JSON.stringify(o)),e.commit("setEpisodes",o),console.log("%c QUERIED DATABASE ","background:red; color:white ;border-radius:3px; padding: 2em;","V: ",a.val())})))}))}};function A(e,t){e.episodes=[],e.episodes=t,console.log("SET CHAPTERS: ",t)}var P={namespaced:!0,state:y,actions:O,getters:S,mutations:r},x={language:"english",dark:!0,user:null,drawerOpen:!1},j=n("ff52");function T(e,t){e.commit("updateLanguage",t),localStorage.setItem("lang",t)}function D(e,t){e.commit("updateDarkMode",t),localStorage.setItem("darkMode",t),j["a"].set(t)}function N(e,t){e.commit("updateUser",t)}function I(e,t){console.log("LEFT DRAWER OPEN: ",t),e.commit("updateDrawerOpen",t)}function L(e,t){e.language=t}function M(e,t){e.dark=t}function _(e,t){e.user=t}function C(e,t){console.log("MUTATION LDO: ",t),e.drawerOpen=t}var U={namespaced:!0,state:x,actions:a,mutations:o};c["default"].use(w["a"]);var R=function(){var e=new w["a"].Store({modules:{settings:U,story:P},strict:!1});return e},q=n("8c4f"),B=[{path:"/",component:function(){return Promise.all([n.e("7389feae"),n.e("bda7f694"),n.e("327f184d")]).then(n.bind(null,"2710"))},children:[{path:"",component:function(){return Promise.all([n.e("7389feae"),n.e("2d0e8be2")]).then(n.bind(null,"8b24"))}},{path:"/:id",name:"edit",component:function(){return Promise.all([n.e("7389feae"),n.e("bda7f694"),n.e("b4652998"),n.e("3bcd951b")]).then(n.bind(null,"70e2"))},meta:{requiresAuth:!0}},{path:"/chat/:id",name:"chat",component:function(){return Promise.all([n.e("7389feae"),n.e("bda7f694"),n.e("b4652998"),n.e("a6577cf2")]).then(n.bind(null,"ab55"))}}]}];B.push({path:"*",component:function(){return Promise.all([n.e("7389feae"),n.e("4b47640d")]).then(n.bind(null,"e51e"))}});var J=B;c["default"].use(q["a"]);var V=function(){var e=new q["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:J,mode:"history",base:"/"});return e.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?E.a.auth().onAuthStateChanged((function(e){e?(console.log("%cUSER: ","color:green",e),n()):(console.log("%cNO USER","color:red"),n({path:"/"}))})):n()})),e},Q=function(){var e="function"===typeof R?R({Vue:c["default"]}):R,t="function"===typeof V?V({Vue:c["default"],store:e}):V;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(v)}};return{app:n,store:e,router:t}},z=n("9483");Object(z["a"])("/service-worker.js",{ready:function(){0},registered:function(){0},cached:function(){0},updatefound:function(){0},updated:function(){0},offline:function(){0},error:function(e){0}});var F=n("59ca"),G=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyAMsS01rTdsQGTN-kjRWxhAAeNEfjeGeNA",authDomain:"mente-media.firebaseapp.com",databaseURL:"https://mente-media.firebaseio.com",projectId:"mente-media",storageBucket:"mente-media.appspot.com",messagingSenderId:"158607275702",appId:"1:158607275702:web:c2ea1d993ad04385341817"});F["initializeApp"](G);var H=Q(),K=H.app,W=H.store,$=H.router;function X(){var e,t,n,r,a;return i.a.async((function(o){while(1)switch(o.prev=o.next){case 0:e=!0,t=function(t){e=!1,window.location.href=t},n=window.location.href.replace(window.location.origin,""),r=[void 0],a=0;case 5:if(!(!0===e&&a<r.length)){o.next=23;break}if("function"===typeof r[a]){o.next=8;break}return o.abrupt("continue",20);case 8:return o.prev=8,o.next=11,i.a.awrap(r[a]({app:K,router:$,store:W,Vue:c["default"],ssrContext:null,redirect:t,urlPath:n}));case 11:o.next=20;break;case 13:if(o.prev=13,o.t0=o["catch"](8),!o.t0||!o.t0.url){o.next=18;break}return window.location.href=o.t0.url,o.abrupt("return");case 18:return console.error("[Quasar] boot error:",o.t0),o.abrupt("return");case 20:a++,o.next=5;break;case 23:if(!1!==e){o.next=25;break}return o.abrupt("return");case 25:new c["default"](K);case 26:case"end":return o.stop()}}),null,null,[[8,13]])}/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e("fastclick").then(n.t.bind(null,"a0db",7)),X()},"31cd":function(e,t,n){}});