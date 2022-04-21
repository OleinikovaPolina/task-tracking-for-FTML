(function(){"use strict";var t={3863:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app-background"},[n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Task tracking")])],1),n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",{staticClass:"my-purple",style:{height:t.$vuetify.breakpoint.mdAndUp?"64px":"56px"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-bold"},[t._v(" Special ")]),n("v-list-item-subtitle",[t._v(" for FTML ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.navbar,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",to:e.link}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])],1)],1)})),1)],1),n("v-main",[n("v-container",{staticStyle:{"z-index":"1",position:"relative"}},[n("router-view")],1)],1),t._l(t.items,(function(e,i){return n("div",{key:i,staticStyle:{position:"fixed","z-index":"0"},style:{top:e.y,left:e.x,transform:"rotate("+e.rotate+")"}},[n("v-icon",{attrs:{small:e.small,color:"rgba(175,77,214,0.5)"}},[t._v(" mdi-"+t._s(e.type)+" ")])],1)}))],2)},a=[],s=n(6133),o=n(2751),u=n(3263),c=n(796),l=n(6035),f=n(3796),d=n(9726),p=(n(5003),n(1539),n(1299),n(2222),n(140)),m=function(t,e,n,i){var r,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(s=(a<3?r(s):a>3?r(e,n,s):r(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},h=function(t){(0,c.Z)(n,t);var e=(0,l.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r)),(0,f.Z)((0,u.Z)(t),"navbar",[{title:"Backlogs",icon:"mdi-format-list-bulleted",link:"/"},{title:"Sprints",icon:"mdi-rotate-right",link:"/sprints"},{title:"Relax",icon:"mdi-dog",link:"/relax"}]),(0,f.Z)((0,u.Z)(t),"drawer",!1),(0,f.Z)((0,u.Z)(t),"items",[]),t}return(0,o.Z)(n,[{key:"mounted",value:function(){for(var t=0;t<20;t++)this.items.push(this.getXY())}},{key:"getXY",value:function(){var t=document.documentElement,e=t.clientWidth,n=t.clientHeight,i=Math.round(Math.random()*(e-30)),r=Math.round(Math.random()*(n-30)),a=Math.round(45*Math.random()),s=Math.round(2*Math.random()),o=Math.round(2*Math.random());return{x:i+"px",y:r+"px",rotate:a+"deg",small:0===o,type:0===s?"circle-outline":"close"}}}]),n}(p.w3);h=m([(0,p.wA)({name:"App"})],h);var v=h,g=v,k=n(1001),y=n(3453),S=n.n(y),Z=n(7524),b=n(8320),T=n(5206),_=n(9846),w=n(1418),A=n(6428),I=n(6816),N=n(7620),O=n(352),E=n(459),P=n(7877),x=n(5132),R=n(7921),C=(0,k.Z)(g,r,a,!1,null,null,null),D=C.exports;S()(C,{VApp:Z.Z,VAppBar:b.Z,VAppBarNavIcon:T.Z,VContainer:_.Z,VDivider:w.Z,VIcon:A.Z,VList:I.Z,VListItem:N.Z,VListItemContent:O.km,VListItemIcon:E.Z,VListItemSubtitle:O.oZ,VListItemTitle:O.V9,VMain:P.Z,VNavigationDrawer:x.Z,VToolbarTitle:R.qW});var M=n(5205);(0,M.z)("".concat("https://oleinikovapolina.github.io/task-tracking-for-FTML/dist/","service-worker.js"),{});n(8783),n(3948);var F=n(8345);i.Z.use(F.Z);var L=[{path:"/",name:"backlogs",component:function(){return Promise.all([n.e(355),n.e(980),n.e(381)]).then(n.bind(n,8381))}},{path:"/sprints",name:"sprints",component:function(){return n.e(750).then(n.bind(n,7750))}},{path:"/sprint/:id",name:"sprint",component:function(){return n.e(46).then(n.bind(n,1046))}},{path:"/relax",name:"relax",component:function(){return Promise.all([n.e(168),n.e(212)]).then(n.bind(n,212))}},{path:"*",name:"notFound",component:function(){return n.e(717).then(n.bind(n,8717))}}],V=new F.Z({mode:"hash",routes:L}),j=V,K=n(4583),J=n(9132);i.Z.use(J.Z);var H=new J.Z({theme:{dark:!0,themes:{dark:{primary:"#9e4dd6"}}}}),B=n(2513),G=n.n(B);i.Z.use(G()),i.Z.config.productionTip=!1,new i.Z({router:j,store:K.ZP,vuetify:H,render:function(t){return t(D)}}).$mount("#app")},4583:function(t,e,n){n.d(e,{Yh:function(){return M},Wz:function(){return C},tC:function(){return x},ZP:function(){return P},BD:function(){return D},r0:function(){return R}});var i=n(144),r=n(629),a=n(8948),s=n(796),o=n(6035),u=n(2751),c=n(6133),l=n(3796),f=(n(7327),n(1539),n(8862),n(1249),(0,u.Z)((function t(){(0,c.Z)(this,t),(0,l.Z)(this,"tasks",JSON.parse(localStorage.getItem("tasks")||"[]"))}))),d=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,u.Z)(n,[{key:"tasks",get:function(){return this.state.tasks}},{key:"task",value:function(t){return this.state.tasks[t]}}]),n}(a.f7),p=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,u.Z)(n,[{key:"ADD_TASK",value:function(t){this.state.tasks.unshift(t)}},{key:"DELETE_TASK",value:function(t){this.state.tasks=this.state.tasks.filter((function(e){return e.id!==t}))}},{key:"CHANGE_TASKS",value:function(t){this.state.tasks=t}}]),n}(a.PQ),m=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,u.Z)(n,[{key:"addTask",value:function(t){t.id=(new Date).getTime(),this.commit("ADD_TASK",t),localStorage.setItem("tasks",JSON.stringify(this.state.tasks))}},{key:"deleteTask",value:function(t){this.commit("DELETE_TASK",t),localStorage.setItem("tasks",JSON.stringify(this.state.tasks))}},{key:"changeTasks",value:function(t){this.commit("CHANGE_TASKS",t),localStorage.setItem("tasks",JSON.stringify(this.state.tasks))}},{key:"changeTask",value:function(t){var e=this.state.tasks.map((function(e){return e.id===t.id?t:e}));this.commit("CHANGE_TASKS",e),localStorage.setItem("tasks",JSON.stringify(this.state.tasks))}}]),n}(a.eX),h=new a.Yl({state:f,getters:d,mutations:p,actions:m}),v=h,g=n(2032),k=n(8932),y=(n(9826),n(561),(0,u.Z)((function t(){(0,c.Z)(this,t),(0,l.Z)(this,"sprints",JSON.parse(localStorage.getItem("sprints")||"[]"))}))),S=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,u.Z)(n,[{key:"sprints",get:function(){return this.state.sprints}},{key:"sprint",value:function(t){return this.state.sprints.find((function(e){return e.id===t}))||null}},{key:"sprintTaskBoard",value:function(t){var e,n=null===(e=this.state.sprints.find((function(e){return e.id===t})))||void 0===e?void 0:e.tasks,i=(0,k.Z)(Array(C.state.status.length)).map((function(){return[]}));if(n){var r,a=(0,g.Z)(n);try{for(a.s();!(r=a.n()).done;){var s=r.value;i[s.status-1].push(s)}}catch(o){a.e(o)}finally{a.f()}}return i}}]),n}(a.f7),Z=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,u.Z)(n,[{key:"ADD_SPRINT",value:function(t){this.state.sprints.unshift(t)}},{key:"DELETE_SPRINT",value:function(t){this.state.sprints=this.state.sprints.filter((function(e){return e.id!==t}))}},{key:"CHANGE_SPRINT",value:function(t){this.state.sprints=this.state.sprints.map((function(e){return e.id===t.id?t:e}))}},{key:"DELETE_TASK_FROM_SPRINT",value:function(t){var e=this.state.sprints.find((function(e){return e.id===t.sprintId}));e&&(e.tasks=e.tasks.filter((function(e){return e.id!==t.taskId})))}},{key:"ADD_TASK_FOR_SPRINT",value:function(t){var e;null===(e=this.state.sprints.find((function(e){return e.id===t.sprintId})))||void 0===e||e.tasks.splice(t.newIndex,0,t.task)}},{key:"MOVE_TASK_FROM_SPRINT",value:function(t){var e=this.state.sprints.find((function(e){return e.id===t.sprintId}));e&&e.tasks.splice(t.newIndex,0,e.tasks.splice(t.oldIndex,1)[0])}},{key:"CHANGE_TASK_FROM_SPRINT",value:function(t){var e=this.state.sprints.find((function(e){return e.id===t.sprintId}));e&&(e.tasks=e.tasks.map((function(e){return e.id===t.task.id?t.task:e})))}}]),n}(a.PQ),b=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,u.Z)(n,[{key:"addSprint",value:function(t){t.id=(new Date).getTime(),t.tasks=[],this.commit("ADD_SPRINT",t),localStorage.setItem("sprints",JSON.stringify(this.state.sprints))}},{key:"deleteSprint",value:function(t){this.commit("DELETE_SPRINT",t),localStorage.setItem("sprints",JSON.stringify(this.state.sprints))}},{key:"changeSprint",value:function(t){this.commit("CHANGE_SPRINT",t),localStorage.setItem("sprints",JSON.stringify(this.state.sprints))}},{key:"deleteTaskFromSprint",value:function(t){this.commit("DELETE_TASK_FROM_SPRINT",t),localStorage.setItem("sprints",JSON.stringify(this.state.sprints))}},{key:"moveTaskFromSprint",value:function(t){this.commit("MOVE_TASK_FROM_SPRINT",t),localStorage.setItem("sprints",JSON.stringify(this.state.sprints))}},{key:"changeTaskFromSprint",value:function(t){this.commit("CHANGE_TASK_FROM_SPRINT",t),localStorage.setItem("sprints",JSON.stringify(this.state.sprints))}},{key:"addTaskForSprint",value:function(t){this.commit("ADD_TASK_FOR_SPRINT",t),localStorage.setItem("sprints",JSON.stringify(this.state.sprints))}}]),n}(a.eX),T=new a.Yl({state:y,getters:S,mutations:Z,actions:b}),_=T,w=(0,u.Z)((function t(){(0,c.Z)(this,t),(0,l.Z)(this,"priority",[{id:1,name:"low",color:"#7c63e8",icon:"mdi-speedometer-slow"},{id:2,name:"medium",color:"#7932a8",icon:"mdi-speedometer-medium"},{id:3,name:"high",color:"#d00379",icon:"mdi-speedometer"}]),(0,l.Z)(this,"status",[{id:1,name:"to do",color:"#7c63e8",icon:"mdi-message"},{id:2,name:"research",color:"#6432bb",icon:"mdi-message-question"},{id:3,name:"in progress",color:"#7932a8",icon:"mdi-message-processing"},{id:4,name:"review",color:"#3749b5",icon:"mdi-message-draw"},{id:5,name:"complete",color:"#3e793b",icon:"mdi-message-star"}])})),A=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,u.Z)(n,[{key:"priority",get:function(){return this.state.priority}},{key:"status",get:function(){return this.state.status}},{key:"getPriority",value:function(t){return this.state.priority[t-1]}},{key:"getStatus",value:function(t){return this.state.status[t-1]}}]),n}(a.f7),I=new a.Yl({state:w,getters:A}),N=I;i.Z.use(r.ZP);var O=new a.Yl({modules:{backlog:v,sprint:_,application:N}}),E=(0,a.MT)(O),P=E,x=v.context(E),R=_.context(E),C=N.context(E),D=((0,a.g6)(v),(0,a.g6)(_)),M=(0,a.g6)(N)}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,a){if(!i){var s=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],a=t[l][2];for(var o=!0,u=0;u<i.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(o=!1,a<s&&(s=a));if(o){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[i,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{31:"c5fe938a",46:"2fac012e",118:"293ba65a",168:"296069bf",200:"f686ea06",212:"b0c4ee0f",261:"8464cfa6",355:"5fab1428",362:"90a7cf38",381:"398ec996",485:"49ae886c",497:"f4ab6abb",543:"6d6faa03",616:"20a9997c",633:"d1ed1eaa",717:"0a0d560d",744:"67fa4941",750:"e8c65c2e",912:"73b759e8",947:"c4d72392",957:"79bc334a",960:"3c0e69f7",974:"ed980cc9",980:"2eceb897"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{46:"8bca0c76",118:"f966a35a",261:"6d6cb329",485:"cfa0d556",543:"772443f1",633:"ddb02466",744:"f966a35a",912:"44732c24",947:"f966a35a",957:"f966a35a",960:"f966a35a",974:"dc46ccb4"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="tracking.ftml:";n.l=function(i,r,a,s){if(t[i])t[i].push(r);else{var o,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==i||f.getAttribute("data-webpack")==e+a){o=f;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+a),o.src=i),t[i]=[r];var d=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var r=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="https://oleinikovapolina.github.io/task-tracking-for-FTML/dist/"}(),function(){var t=function(t,e,n,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=o,r.parentNode.removeChild(r),i(u)}};return r.onerror=r.onload=a,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){r=s[i],a=r.getAttribute("data-href");if(a===t||a===e)return r}},i=function(i){return new Promise((function(r,a){var s=n.miniCssF(i),o=n.p+s;if(e(s,o))return r();t(i,o,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={46:1,118:1,261:1,485:1,543:1,633:1,744:1,912:1,947:1,957:1,960:1,974:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=i(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else if(974!=e){var a=new Promise((function(n,i){r=t[e]=[n,i]}));i.push(r[2]=a);var s=n.p+n.u(e),o=new Error,u=function(i){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",o.name="ChunkLoadError",o.type=a,o.request=s,r[1](o)}};n.l(s,u,"chunk-"+e,e)}else t[e]=0},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,s=i[0],o=i[1],u=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(u)var l=u(n)}for(e&&e(i);c<s.length;c++)a=s[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},i=self["webpackChunktracking_ftml"]=self["webpackChunktracking_ftml"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3863)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.e13e00ee.js.map