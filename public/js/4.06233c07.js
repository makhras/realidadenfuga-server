(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0283":function(t,e,n){},"36d3b":function(t,e,n){"use strict";var s=n("0283"),a=n.n(s);a.a},"56b4":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"authContainer"},[n("div",{staticClass:"form-container"},[n("q-card",{staticClass:"auth-form q-pa-md"},[n("div",{staticClass:"logo-container q-pb-md"},[n("img",{attrs:{src:"statics/rf-white.png",alt:"Agua Viva Logo"}})]),n("q-card-section",{staticClass:"text-subtitle1 text-center text-uppercase text-white"},[t._v("\r\n          Crear Nueva Cuenta\r\n        ")]),n("q-form",{staticClass:"q-gutter-md",attrs:{autofocus:""},on:{submit:t.onSubmitRegister}},[n("q-input",{staticClass:"auth-input text-black",attrs:{dense:"",autofocus:"",rounded:"",outlined:"",placeholder:"Nombre"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"account_circle"}})]},proxy:!0}]),model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("q-input",{staticClass:"auth-input",attrs:{dense:"",rounded:"",outlined:"",placeholder:"Email"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("q-input",{staticClass:"auth-input",attrs:{dense:"",rounded:"",outlined:"",type:"password",placeholder:"Contraseña"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("q-slide-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.formFilled(),expression:"formFilled()"}]},[n("q-card-actions",{staticClass:"q-pt-lg",attrs:{align:"right"}},[n("q-btn",{staticClass:"col",attrs:{rounded:"",label:t.loading?"Verificando...":"Crear Cuenta",color:"primary"},on:{click:t.onSubmitRegister}})],1)],1)]),n("q-card-actions",{staticClass:"q-mt-md",attrs:{align:"right"}},[n("q-btn",{staticClass:"q-px-sm text-white",attrs:{rounded:"",flat:"",dense:"",label:"Ta tengo cuenta",icon:"mdi-chevron-left"},on:{click:function(e){return t.$router.push({name:"auth"})}}}),n("q-space")],1),n("q-inner-loading",{attrs:{showing:t.loading}},[n("q-spinner",{attrs:{size:"50px",color:"primary",thickness:5}})],1)],1)],1)])},a=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("9523")),r=n.n(o),i=n("2f62"),c=n("fd47"),u=n("5b3b");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=l({data:function(){return{name:"",email:"",password:""}},components:{Backdrop:u["a"]},computed:l({},Object(i["c"])(["loading"])),methods:{formFilled:function(){return this.email&&this.password},errorMessage:function(t){switch(t){case"auth/invalid-email":return"Email incorrecto";case"auth/invalid-password":return"Contraseña incorrecta";case"auth/argument-error":return"Error al ingresar";default:return"ERROR FATAL. AUTODESTRUCCIÓN INMINENTE"}},onSubmitRegister:function(){var t=this;c["a"].createUserWithEmailAndPassword(this.email,this.password).then((function(e){console.log("new user: ",e),console.log("new user user: ",e.user),console.log("firebase user: ",c["a"].currentUser),e.user.updateProfile({displayName:t.name}).then((function(n){console.log("usr: ",n),c["b"].collection("users").doc(e.user.uid).set({name:t.name}).then((function(){t.updateUsername(t.name)}))}))})).catch((function(e){t.$q.notify({position:"top",color:"red-6",textColor:"white",icon:"cloud_done",message:t.errorMessage(e.code)})}))}}},Object(i["b"])(["updateUsername","setLoading"])),m=p,h=n("2877"),g=n("eebe"),f=n.n(g),b=n("f09f"),_=n("a370"),w=n("0378"),v=n("27f9"),y=n("0016"),j=n("e9c1"),k=n("4b7e"),q=n("9c40"),C=n("2c91"),O=n("74f7"),x=n("0d59"),P=Object(h["a"])(m,s,a,!1,null,null,null);e["default"]=P.exports;f()(P,"components",{QCard:b["a"],QCardSection:_["a"],QForm:w["a"],QInput:v["a"],QIcon:y["a"],QSlideTransition:j["a"],QCardActions:k["a"],QBtn:q["a"],QSpace:C["a"],QInnerLoading:O["a"],QSpinner:x["a"]})},"5b3b":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bgs"},[n("div",{style:"background-image: url('"+t.currentPicture+"')",attrs:{id:"bg"}})])},a=[],o={data:function(){return{timer:null,currentPicture:"",pictures:["https://images.unsplash.com/photo-1564836663277-c4aa761b9882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80","https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2017/11/nonobject-vr-headset-designs-4-1021x580.jpg","https://i.insider.com/5aba86227f0a8319008b47c9?width=700&format=jpeg&auto=webp","https://66.media.tumblr.com/3114c013f4efadb8846469d45c8d02a2/tumblr_p6mkmywo8R1qjac96o1_1280.jpg","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/0-30.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_40665640_2212970408948039_1724446505963438320_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_43985181_335000470619780_658125392447259506_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_56828262_641493052958442_4739349624605231051_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_56218131_407022579861100_2694429560611265138_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_58454188_371254006837891_5020125050324226673_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_66362478_130981251483570_3024757830282033509_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_66821647_897601297242245_9118914977841068485_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_67060819_129039668325151_4726210316317649396_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_69621606_1190600441131901_1861443773380900484_n.jpg?iv=143","https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2019/10/skiegraphicstudio_72106469_163471274713515_8164090930225797321_n.jpg?iv=143","https://66.media.tumblr.com/c92a82d988eb3c9bd34f4d0e9719b41e/tumblr_p87ykiIubO1wucl3to1_500.gifv","https://66.media.tumblr.com/122d15860b013ad6e2e6331776920b62/tumblr_p8i3rsYh7k1qjac96o1_1280.jpg"]}},mounted:function(){this.selectRandomPicture()},methods:{selectRandomPicture:function(t){this.currentPicture=this.pictures[Math.floor(Math.random()*this.pictures.length)]}},watch:{$route:function(t,e,n){this.selectRandomPicture()}}},r=o,i=(n("36d3b"),n("2877")),c=Object(i["a"])(r,s,a,!1,null,null,null);e["a"]=c.exports}}]);