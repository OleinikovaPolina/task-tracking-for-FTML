"use strict";(self["webpackChunktracking_ftml"]=self["webpackChunktracking_ftml"]||[]).push([[909],{8909:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"text-capitalize px-1 font-weight-bold",attrs:{tile:"",text:""},on:{click:function(e){return t.openForm()}}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Add Task ")],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[t.tasks.length?t._e():n("div",[t._v(" You don't have any tasks yet ")]),n("draggable",{staticStyle:{"min-height":"100px"},attrs:{"delay-on-touch-only":300,group:"id"},model:{value:t.tasks,callback:function(e){t.tasks=e},expression:"tasks"}},t._l(t.tasks,(function(e){return n("TheBacklogTaskComponent",{key:e.id,attrs:{task:e},on:{openForm:t.openForm,openDialog:t.openDialog}})})),1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("SprintsComponent")],1)],1),n("TaskDialogFormComponent",{attrs:{dialog:t.dialogForm,"form-prop":t.activeTask},on:{changeDialog:t.changeDialogForm,submit:t.addOrChangeTask}}),n("TaskDialogComponent",{attrs:{dialog:t.dialog,task:t.activeTask},on:{changeDialog:t.changeDialog,openForm:t.openForm}})],1)},a=[],i=n(6133),r=n(2751),l=n(3263),s=n(796),c=n(6035),u=n(3796),g=n(9726),k=(n(5003),n(1539),n(1299),n(2222),n(8783),n(3948),n(140)),d=n(4583),f=n(9980),h=n.n(f),p=function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"===typeof Reflect?"undefined":(0,g.Z)(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},m=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;(0,i.Z)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a)),(0,u.Z)((0,l.Z)(t),"dialog",!1),(0,u.Z)((0,l.Z)(t),"dialogForm",!1),(0,u.Z)((0,l.Z)(t),"activeTask",{}),t}return(0,r.Z)(n,[{key:"tasks",get:function(){return d.tC.getters.tasks},set:function(t){d.tC.actions.changeTasks(t)}},{key:"changeDialog",value:function(t){this.dialog=t}},{key:"changeDialogForm",value:function(t){this.dialogForm=t}},{key:"openDialog",value:function(t){this.activeTask=t,this.changeDialog(!0)}},{key:"openForm",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.activeTask=t,this.changeDialogForm(!0)}},{key:"addOrChangeTask",value:function(t){t.id?(d.tC.actions.changeTask(t),this.activeTask=t):d.tC.actions.addTask(t)}}]),n}(k.w3);m=p([(0,k.wA)({name:"BacklogsView",components:{draggable:h(),TheBacklogTaskComponent:function(){return n.e(744).then(n.bind(n,3744))},TaskDialogComponent:function(){return Promise.all([n.e(497),n.e(633)]).then(n.bind(n,7510))},TaskDialogFormComponent:function(){return Promise.all([n.e(168),n.e(912),n.e(497),n.e(432),n.e(433)]).then(n.bind(n,5432))},SprintsComponent:function(){return n.e(287).then(n.bind(n,2287))}}})],m);var v=m,T=v,y=n(1001),C=n(3453),D=n.n(C),Z=n(3150),b=n(2102),F=n(6428),w=n(2877),_=(0,y.Z)(T,o,a,!1,null,null,null),x=_.exports;D()(_,{VBtn:Z.Z,VCol:b.Z,VIcon:F.Z,VRow:w.Z})}}]);
//# sourceMappingURL=909-legacy.40e7aa1f.js.map