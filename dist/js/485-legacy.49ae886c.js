"use strict";(self["webpackChunktracking_ftml"]=self["webpackChunktracking_ftml"]||[]).push([[485],{7510:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[Object.keys(t.task).length?a("v-dialog",{attrs:{value:t.dialog,"max-width":"700"},on:{input:function(e){return t.$emit("changeDialog",e)}}},[a("v-card",[a("v-card-title",{style:{borderBottom:"3px solid "+t.getStatus(t.task.status).color}},[a("v-sheet",{staticClass:"rounded mr-1",attrs:{color:t.getStatus(t.task.status).color,width:"15",height:"15"}}),a("span",{staticClass:"text-h6"},[t._v(t._s(t.task.name))]),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("openForm",t.task)}}},[a("v-icon",[t._v("mdi-pencil")])],1)],1),a("v-card-text",{staticClass:"mt-2"},[a("div",[a("v-icon",{attrs:{left:"",color:t.getPriority(t.task.priority).color}},[t._v(" "+t._s(t.getPriority(t.task.priority).icon)+" ")]),t._v(" Priority: "+t._s(t.getPriority(t.task.priority).name)+" ")],1),a("div",[a("v-icon",{attrs:{left:"",color:t.getStatus(t.task.status).color}},[t._v(" "+t._s(t.getStatus(t.task.status).icon)+" ")]),t._v(" Status: "+t._s(t.getStatus(t.task.status).name)+" ")],1),a("div",[a("v-icon",{attrs:{left:""}},[t._v(" mdi-clock-plus-outline ")]),t._v(" Date creation: "+t._s(t.$moment(t.task.dateCreation).format("DD.MM.YYYY"))+" ")],1),a("div",[a("v-icon",{attrs:{left:"",color:"red"}},[t._v(" mdi-fire ")]),t._v(" Deadline: "+t._s(t.$moment(t.task.deadline).format("DD.MM.YYYY"))+" ")],1),a("div",{staticClass:"ql-editor px-0",staticStyle:{"min-height":"0"},domProps:{innerHTML:t._s(t.task.descriptionLong)}})])],1)],1):t._e()],1)},i=[],o=a(2751),s=a(6133),n=a(3263),c=a(796),l=a(6035),d=a(3796),u=a(9726),v=(a(5003),a(1539),a(1299),a(2222),a(140)),f=a(4583),g=function(t,e,a,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,u.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,a,r);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(s=(o<3?i(s):o>3?i(e,a,s):i(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s},p=function(t){(0,c.Z)(a,t);var e=(0,l.Z)(a);function a(){var t;(0,s.Z)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i)),(0,d.Z)((0,n.Z)(t),"task",void 0),(0,d.Z)((0,n.Z)(t),"dialog",void 0),t}return(0,o.Z)(a)}(v.w3);g([(0,v.fI)()],p.prototype,"task",void 0),g([(0,v.fI)()],p.prototype,"dialog",void 0),p=g([(0,v.wA)({name:"TaskDialogComponent",computed:f.Yh.mapGetters({getPriority:"getPriority",getStatus:"getStatus"})})],p);var m=p,k=m,_=a(1001),h=a(3453),y=a.n(h),Z=a(3150),C=a(3237),D=a(7118),S=a(4497),P=a(6428),Y=a(3385),b=(0,_.Z)(k,r,i,!1,null,null,null),w=b.exports;y()(b,{VBtn:Z.Z,VCard:C.Z,VCardText:D.ZB,VCardTitle:D.EB,VDialog:S.Z,VIcon:P.Z,VSheet:Y.Z})}}]);
//# sourceMappingURL=485-legacy.49ae886c.js.map