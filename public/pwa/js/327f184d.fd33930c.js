(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["327f184d"],{2710:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-layout",{attrs:{view:"lHr LpR lfr"}},[a("q-drawer",{attrs:{"show-if-above":"","content-class":e.dark?"drawer-dark":"drawer-light"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("div",{staticClass:"drawer-section"},[a("div",[a("q-toolbar",{class:e.dark?"toolbar-dark":"toolbar-light"},[a("q-btn",{staticClass:"q-pa-sm",attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){return e.$router.push("/")}}},[a("q-avatar",{staticClass:"logo",attrs:{rounded:!1}},[a("img",{staticStyle:{"border-radius":"0px"},attrs:{src:e.dark?"/statics/AB_white.png":"/statics/AB_black.png",alt:"Menu Button"}})])],1),a("q-space"),e.user?a("q-btn",{attrs:{rounded:"",flat:"",label:e.optionUsername},on:{click:function(t){e.userPrompt=!0}}}):a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"vpn_key"},on:{click:function(t){e.loginPrompt=!0}}}),a("q-space"),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"chevron_left"},on:{click:e.toggleDrawerOpen}})],1)],1),a("div",{staticClass:"drawer-scrollable"},[e.user?a("q-list",{attrs:{separator:""}},e._l(e.episodes,(function(t,n){return a("q-item",{key:t.id,class:e.isActive(t)?"q-py-md linkActive":"q-py-md",attrs:{clickable:!e.isActive(t),tag:"span"},on:{click:function(n){return e.goEdit(t.id,t.title)}}},[a("q-item-section",[a("q-item-label",[e._v("\n                  "+e._s(n)+"\n                  "),a("b",[e._v(e._s(t.title))])]),a("q-item-label",{staticClass:"q-pl-md",attrs:{caption:""}},[e._v("\n                  "+e._s(t.id)+"\n                  "),t.draft?a("q-badge",{attrs:{color:"info",align:"middle"}},[e._v("\n                    draft\n                  ")]):e._e(),e.isQueued(t.id)?a("q-badge",{attrs:{outline:"",color:"positive",align:"middle"}},[e._v("\n                    local\n                  ")]):e._e()],1)],1),e.isActive(t)?a("q-item-section",{attrs:{avatar:""}},[a("q-btn-dropdown",{attrs:{rounded:"",flat:"",icon:"more_horiz"},on:{click:function(n){return e.updateDraftToggle(t.draft)}}},[a("q-list",[e.isQueued(t.id)?a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"bg-secondary",attrs:{dense:"",clickable:""},on:{click:function(t){return t.preventDefault(),e.uploadEpisode(t)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{dense:"",round:"",flat:"",name:"cloud_upload"}})],1)],1),a("q-item-section",[a("q-item-label",[e._v("Upload")])],1)],1):e._e(),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",clickable:""},on:{click:function(t){e.renamePrompt=!0}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{dense:"",round:"",flat:"",name:"edit"}})],1)],1),a("q-item-section",[a("q-item-label",[e._v("Rename")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",clickable:""},on:{click:e.openIdPrompt}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{dense:"",round:"",flat:"",name:"edit"}})],1)],1),a("q-item-section",[a("q-item-label",[e._v("Set ID")])],1)],1),a("q-item",{attrs:{dense:"",clickable:""}},[a("q-item-section",[a("q-toggle",{attrs:{"checked-icon":"check",color:"info",label:"Draft","unchecked-icon":"clear"},on:{input:e.setDraft},model:{value:e.isDraft,callback:function(t){e.isDraft=t},expression:"isDraft"}})],1)],1),e.user.uid===t.creator?a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",clickable:""},on:{click:e.confirmDelete}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{dense:"",round:"",flat:"",name:"delete"}})],1)],1),a("q-item-section",[a("q-item-label",[e._v("Delete")])],1)],1):e._e()],1)],1)],1):e._e()],1)})),1):a("div",{staticStyle:{height:"100%",display:"flex"}},[a("div",{staticStyle:{margin:"auto"}},[e._v("\n              Chapters Loaded\n            ")])])],1),a("div",[a("q-toolbar",{class:e.dark?"toolbar-dark":"toolbar-light"},[a("q-btn-dropdown",{class:"english"===e.language?"lang-icon en":"lang-icon es",attrs:{flat:"",rounded:"",label:"english"===e.language?"EN":"ES"}},[a("q-list",["english"===e.language?a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.setLanguage("spanish")}}},[a("q-item-section",{attrs:{avatar:""}},[a("img",{staticStyle:{height:"28px"},attrs:{src:n("452d")}})]),a("q-item-section",[a("q-item-label",[a("b",[e._v("Español")])])],1)],1):a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.setLanguage("english")}}},[a("q-item-section",{attrs:{avatar:""}},[a("img",{staticStyle:{height:"28px"},attrs:{src:n("50b7")}})]),a("q-item-section",[a("q-item-label",[a("b",[e._v("English")])])],1)],1)],1)],1),a("q-space"),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:e.dark?"wb_sunny":"brightness_3","aria-label":"Dark Mode"},on:{click:function(t){return e.toggleDarkMode(e.dark)}}}),a("q-space"),e.user?a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"post_add"},on:{click:e.openNewPrompt}}):e._e()],1)],1)])]),a("q-page-container",[a("router-view"),a("q-btn",{staticStyle:{position:"absolute",top:"5px",left:"5px"},attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu",color:e.dark?"white":"black"},on:{click:e.toggleDrawerOpen}})],1)],1),a("q-dialog",{model:{value:e.newPrompt,callback:function(t){e.newPrompt=t},expression:"newPrompt"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("New Episode")])]),a("q-card-section",[a("q-input",{staticClass:"col",attrs:{standout:"bg-white text-black",dense:"",rounded:"",autofocus:"",placeholder:"Title",hint:"New Episode Title","aria-label":"Message"},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.newEpisodeTitle?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.newEpisodeTitle=""}}}):e._e()]},proxy:!0}]),model:{value:e.newEpisodeTitle,callback:function(t){e.newEpisodeTitle=t},expression:"newEpisodeTitle"}})],1),a("q-card-section",[a("q-input",{staticClass:"col idInput",attrs:{dense:"",rounded:"",borderless:"",placeholder:"Doubles as episode URL","aria-label":"Message"},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("h6",[e._v("ID")])]},proxy:!0},{key:"append",fn:function(){return[""!==e.newEpisodeId?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.newEpisodeId=""}}},[a("q-tooltip",{attrs:{delay:600,anchor:"top middle",self:"center middle"}},[e._v("\n                Clear ID field\n              ")])],1):e._e(),a("q-btn",{attrs:{round:"",dense:"",flat:"","aria-label":"Send",icon:"settings_backup_restore"},on:{click:function(t){return t.preventDefault(),e.generateEpId(t)}}},[a("q-tooltip",{attrs:{delay:600,anchor:"top middle",self:"center middle"}},[e._v("\n                Generate new ID\n              ")])],1)]},proxy:!0}]),model:{value:e.newEpisodeId,callback:function(t){e.newEpisodeId=t},expression:"newEpisodeId"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Create"},on:{click:e.goCreate}})],1)],1)],1),a("q-dialog",{model:{value:e.userPrompt,callback:function(t){e.userPrompt=t},expression:"userPrompt"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("q-input",{staticStyle:{"font-size":"1.5em"},attrs:{rounded:"",borderless:"",dense:"",label:"Username"},model:{value:e.optionUsername,callback:function(t){e.optionUsername=t},expression:"optionUsername"}})],1),a("q-card-section",[a("q-input",{attrs:{rounded:"",borderless:"",dense:"",label:"Email"},model:{value:e.optionEmail,callback:function(t){e.optionEmail=t},expression:"optionEmail"}})],1),a("q-card-section",[a("q-btn",{attrs:{flat:"",rounded:"",dense:"",label:"Change Password"},on:{click:function(t){e.passwordPrompt=!0}}})],1),a("q-card-section",[a("q-btn",{attrs:{flat:"",rounded:"",dense:"",label:"Log Out",icon:"cloud_off"},on:{click:function(t){return e.logout()}}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",label:"New"},on:{click:function(t){e.signupPrompt=!0}}}),a("q-space"),e.currentUsername===e.optionUsername&&e.currentEmail===e.optionEmail?a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",label:"OK"}}):a("div",[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticStyle:{"margin-right":"5px"},attrs:{flat:"",rounded:"",label:"Revert"},on:{click:e.restoreUserOptions}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"text-black",attrs:{unelevated:"",rounded:"",color:"grey",label:"Save"},on:{click:function(t){return e.updateUser()}}})],1)],1),a("q-inner-loading",{attrs:{showing:e.authLoading}},[a("q-spinner-grid",{attrs:{size:"50px"}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.passwordPrompt,callback:function(t){e.passwordPrompt=t},expression:"passwordPrompt"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("q-input",{attrs:{rounded:"",standout:"bg-grey text-white",autofocus:"",dense:"",label:"Current Password",type:e.visiblePass?"text":"password"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{dense:"",flat:"",round:"",icon:"remove_red_eye"},on:{click:function(t){e.visiblePass=!e.visiblePass}}})]},proxy:!0}]),model:{value:e.currentPassword,callback:function(t){e.currentPassword=t},expression:"currentPassword"}})],1),a("q-card-section",[a("q-input",{attrs:{rounded:"",standout:"bg-grey text-white",dense:"",label:"New Password",type:e.visiblePass?"text":"password"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"remove_red_eye"},on:{click:function(t){e.visiblePass=!e.visiblePass}}})]},proxy:!0}]),model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",label:"Forgot?"},on:{click:function(t){e.signupPrompt=!0}}}),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",label:"Cancel"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",label:"Submit"},on:{click:function(t){return e.updatePassword()}}})],1),a("q-inner-loading",{attrs:{showing:e.authLoading}},[a("q-spinner-grid",{attrs:{size:"50px"}})],1)],1)],1),a("q-dialog",{model:{value:e.renamePrompt,callback:function(t){e.renamePrompt=t},expression:"renamePrompt"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Rename")])]),a("q-card-section",[a("q-input",{attrs:{standout:"bg-grey text-white",dense:"",autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.renameEpisode()}},model:{value:e.newEpisodeTitle,callback:function(t){e.newEpisodeTitle=t},expression:"newEpisodeTitle"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Rename"},on:{click:function(t){return e.renameEpisode()}}})],1)],1)],1),a("q-dialog",{model:{value:e.newIdPrompt,callback:function(t){e.newIdPrompt=t},expression:"newIdPrompt"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Set Episode ID")])]),a("q-card-section",[a("q-input",{attrs:{standout:"bg-grey text-white",dense:"",autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateEpisodeID()}},model:{value:e.newEpisodeId,callback:function(t){e.newEpisodeId=t},expression:"newEpisodeId"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Rename"},on:{click:function(t){return e.updateEpisodeID()}}})],1)],1)],1),a("q-dialog",{model:{value:e.loginPrompt,callback:function(t){e.loginPrompt=t},expression:"loginPrompt"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("q-input",{attrs:{rounded:"",standout:"bg-grey text-white",dense:"",hint:"Email",autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("q-card-section",[a("q-input",{attrs:{rounded:"",standout:"bg-grey text-white",dense:"",hint:"Password",type:e.visiblePass?"text":"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{dense:"",flat:"",round:"",borderless:"",icon:"remove_red_eye"},on:{click:function(t){e.visiblePass=!e.visiblePass}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",label:"New"},on:{click:function(t){e.signupPrompt=!0}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Submit"},on:{click:function(t){return e.login()}}})],1),a("q-inner-loading",{attrs:{showing:e.authLoading}},[a("q-spinner-grid",{attrs:{size:"50px"}})],1)],1)],1),a("q-dialog",{model:{value:e.signupPrompt,callback:function(t){e.signupPrompt=t},expression:"signupPrompt"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("New Creator")])]),a("q-card-section",[a("q-input",{attrs:{rounded:"",standout:"bg-grey text-white",hint:"Username",type:"text",dense:"",autofocus:""},model:{value:e.newUsername,callback:function(t){e.newUsername=t},expression:"newUsername"}})],1),a("q-card-section",[a("q-input",{attrs:{rounded:"",standout:"bg-grey text-white",hint:"Email",type:"email",dense:""},model:{value:e.newEmail,callback:function(t){e.newEmail=t},expression:"newEmail"}})],1),a("q-card-section",[a("q-input",{attrs:{rounded:"",standout:"bg-grey text-white",dense:"",hint:"Password",type:e.visiblePass?"text":"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{dense:"",flat:"",round:"",borderless:"",icon:"remove_red_eye"},on:{click:function(t){e.visiblePass=!e.visiblePass}}})]},proxy:!0}]),model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Submit"},on:{click:function(t){return e.signup()}}})],1),a("q-inner-loading",{attrs:{showing:e.authLoading}},[a("q-spinner",{attrs:{size:"50px"}})],1)],1)],1)],1)},o=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("a481"),n("c47a")),s=n.n(i),r=(n("28a5"),n("2f62")),l=n("8aa5"),c=n.n(l),d=n("9e67"),p=n.n(d);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={name:"HomeLayout",data:function(){return{lang:"english",languages:[{handle:"english",name:"english",id:"EN"},{handle:"spanish",name:"Español",id:"ES"}],darkMode:!0,leftDrawerOpen:!1,loginPrompt:!1,userPrompt:!1,loadingEpisode:!1,signupPrompt:!1,renamePrompt:!1,passwordPrompt:!1,isDraft:!0,newID:"",username:"",email:"",password:"",newUsername:"",newEmail:"",newPassword:"",currentEmail:"",currentPassword:"",currentUsername:"",optionUsername:"",optionEmail:"",authLoading:!1,newPrompt:!1,newIdPrompt:!1,newEpisodeTitle:"",newEpisodeId:"",createBtn:!0,visiblePass:!1,routeIsEdit:!1}},mounted:function(){console.log("%cMOUNTED","color:white; background:orange; padding:1em 3em; border-radius:1em;");var e=this;c.a.auth().onAuthStateChanged((function(t){if(console.log("AUTH STATE CHANGED"),t){var n={displayName:t.displayName,email:t.email,emailVerified:t.emailVerified,photoURL:t.photoURL,isAnonymous:t.isAnonymous,uid:t.uid,providerData:t.providerData,username:t.email.split("@")[0]};e.setUser(n),e.optionEmail=n.email,e.optionUsername=n.displayName,e.currentEmail=n.email,e.currentUsername=n.displayName,e.email="",e.password="",console.log("LOGGED IN as ",n.username)}else e.setUser(null),console.log("NO USER")})),this.setDrawerOpen(!0),this.setDarkMode(JSON.parse(localStorage.getItem("darkMode"))||!1),this.setLanguage(localStorage.getItem("lang")||"english"),this.getEpisodes(this.language)},computed:m({},Object(r["c"])("settings",["language","dark","user","drawerOpen"]),{},Object(r["c"])("story",["episodes"])),methods:m({login:function(){this.authLoading=!0;var e=this;try{c.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){e.authLoading=!1,e.loginPrompt=!1})).catch((function(t){console.log("ERROR AUTHENTICATING: ",t),e.authLoading=!1;var n="";switch(t.code){case"auth/user-not-found":n="Wrong User";break;case"auth/wrong-password":n="Wrong Password";break;default:n="Wrong Credentials";break}e.showNotif(n,"red",1e3,"top","warning")}))}catch(t){console.log("ERROR! ERROR! ",t),e.showNotif("INCORRECTO","red",1e3,"top","warning"),e.authLoading=!1}},signup:function(){var e=this;this.authLoading=!0,c.a.auth().createUserWithEmailAndPassword(this.newEmail,this.newPassword).then((function(t){t.user.updateProfile({displayName:e.newUsername}).then((function(){e.authLoading=!1,e.signupPrompt=!1,e.newUsername="",e.newEmail="",e.newPassword=""})).catch((function(e){console.log("cannot update username, ",e)}))})).catch((function(t){console.log("ERROR AUTHENTICATING: ",t),e.authLoading=!1,e.newPassword=""}))},logout:function(){var e=this;c.a.auth().signOut().then((function(){e.setUser(null),e.userPrompt=!1,console.log("signed out")}))},updateUser:function(){console.log("this.optionUsername",this.optionUsername),console.log("this.optionEmail",this.optionEmail),console.log("NEW DATA! ");var e=this;this.optionUsername!==this.currentUsername&&c.a.auth().currentUser.updateProfile({displayName:this.optionUsername}).then((function(){e.currentUsername=e.optionUsername,console.log("NEW USERNAME: ",e.currentUsername)})).catch((function(e){console.log("ERROR setting username: !!!! ",e)})),this.optionEmail!==this.currentEmail&&c.a.auth().currentUser.updateProfile({email:this.optionEmail}).then((function(){e.currentEmail=e.optionEmail,console.log("NEW EMAIL: ",e.currentEmail)})).catch((function(e){console.log("ERROR setting email: !!!! ",e)}))},updatePassword:function(){console.log("UPDATE PASS?")},restoreUserOptions:function(){this.optionUsername=this.currentUsername,this.optionEmail=this.currentEmail},openNewPrompt:function(){this.newPrompt=!0,this.generateEpId()},openIdPrompt:function(){this.newIdPrompt=!0,this.newID=this.$route.params.id},isActive:function(e){return this.$route.params.id===e.id},isQueued:function(e){var t=localStorage.getItem("updateList")||null,n=!1;return t&&(n=!!JSON.parse(t).some((function(t){return t.id===e}))),n},goCreate:function(){this.goEdit(this.newEpisodeId,this.newEpisodeTitle,this.user.uid),this.newEpisodeTitle=""},goEdit:function(e,t,n){n?this.$router.push({name:"edit",params:{id:e,title:t,creator:n}}):this.$router.push({name:"edit",params:{id:e,title:t}}),this.newPrompt=!1},generateEpId:function(){var e=new p.a;this.newEpisodeId=e.word({length:8})},uploadEpisode:function(){this.$root.$emit("uploadEp")},deleteEpisode:function(){var e=this;c.a.firestore().collection(this.language).doc(this.$route.params.id).delete().then((function(){c.a.firestore().collection("english"===this.language?"spanish":"english").doc(this.$route.params.id).delete().then((function(){e.showNotif("Episode Deleted","green",2e3,"top","check"),e.updateVersion()}))}))},renameEpisode:function(){var e=this;c.a.firestore().collection(this.language).doc(this.$route.params.id).update({title:this.newEpisodeTitle}).then((function(){e.updateVersion()}))},updateEpisodeID:function(){var e=this;c.a.firestore().collection(this.language).doc(this.$route.params.id).update({id:this.newEpisodeId}).then((function(){c.a.firestore().collection("english"===e.language?"spanish":"english").doc(e.$route.params.id).update({id:e.newEpisodeId}).then((function(){e.updateVersion(),e.$router.replace("/"+e.newEpisodeId)}))}))},setDraft:function(e){var t=this;console.log("Draft: ",e),c.a.firestore().collection(this.language).doc(this.$route.params.id).update({draft:e}).then((function(){c.a.firestore().collection("english"===t.language?"spanish":"english").doc(t.$route.params.id).update({draft:e}).then((function(){t.updateVersion(),e?t.showNotif("Episode set to Draft","orange",2e3,"top","edit"):t.showNotif("Published Episode","green",2e3,"top","check")}))}))},updateDraftToggle:function(e){this.isDraft=e},updateVersion:function(){var e=this,t=new p.a,n=t.string({length:6,pool:"abcdefghijklnpqrstuvz123456789"});c.a.database().ref("/version").set(n).then((function(){console.log("UPDATED DATABASE VERSION TO ",n),e.getEpisodes(e.language)})).catch((function(e){console.log("%cERR","color: red",e)}))},showNotif:function(e,t,n,a,o){this.$q.notify({message:e,color:t,timeout:n,position:a,icon:o})},confirmDelete:function(){var e,t=this;this.$q.dialog((e={title:"Delete episode?",cancel:!0,ok:{push:!0,color:"positive"}},s()(e,"cancel",{push:!0,color:"primary"}),s()(e,"persistent",!0),e)).onOk((function(){t.deleteEpisode()}))},toggleDarkMode:function(){this.setDarkMode(!this.dark)},toggleDrawerOpen:function(){var e=!this.leftDrawerOpen;this.leftDrawerOpen=e,this.setDrawerOpen(e)}},Object(r["b"])("settings",["setLanguage","setDarkMode","setUser","setDrawerOpen"]),{},Object(r["b"])("story",["getEpisodes"])),watch:{$route:function(e){this.getEpisodes(this.language),console.log("%cROUTE NAME: ","padding:5em",e.name),"edit"===e.name?this.routeIsEdit=!0:this.routeIsEdit=!1},language:function(e){this.getEpisodes(e),"edit"===this.$route.name?this.routeIsEdit=!0:this.routeIsEdit=!1}}},f=g,h=(n("56e3"),n("2877")),w=n("fe09"),b=Object(h["a"])(f,a,o,!1,null,null,null);t["default"]=b.exports;b.options.components=Object.assign({QLayout:w["v"],QDrawer:w["l"],QToolbar:w["E"],QBtn:w["e"],QAvatar:w["b"],QSpace:w["A"],QList:w["w"],QItem:w["s"],QItemSection:w["u"],QItemLabel:w["t"],QBadge:w["c"],QIcon:w["p"],QBtnDropdown:w["f"],QToggle:w["D"],QPageContainer:w["z"],QDialog:w["k"],QCard:w["g"],QCardSection:w["i"],QInput:w["r"],QTooltip:w["F"],QCardActions:w["h"],QInnerLoading:w["q"],QSpinnerGrid:w["C"],QSpinner:w["B"]},b.options.components||{}),b.options.directives=Object.assign({ClosePopup:w["a"]},b.options.directives||{})},"452d":function(e,t,n){e.exports=n.p+"img/ES_flag.82c56776.png"},"50b7":function(e,t,n){e.exports=n.p+"img/EN_flag.63185412.png"},"56e3":function(e,t,n){"use strict";var a=n("f745"),o=n.n(a);o.a},f745:function(e,t,n){}}]);