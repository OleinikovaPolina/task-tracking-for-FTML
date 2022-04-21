"use strict";(self["webpackChunktracking_ftml"]=self["webpackChunktracking_ftml"]||[]).push([[960,200,616],{3237:function(t,e,s){s.d(e,{Z:function(){return o}});var r=s(5648),i=s(1226),a=s(6505),n=s(3325),o=(0,n.Z)(i.Z,a.Z,r.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...r.Z.options.computed.classes.call(this)}},styles(){const t={...r.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,s){s.d(e,{EB:function(){return l},ZB:function(){return o},h7:function(){return a}});var r=s(3237),i=s(4589);const a=(0,i.Ji)("v-card__actions"),n=(0,i.Ji)("v-card__subtitle"),o=(0,i.Ji)("v-card__text"),l=(0,i.Ji)("v-card__title");r.Z},9762:function(t,e,s){s(8582);var r=s(4589);e["Z"]=(0,r.Ji)("spacer","div","v-spacer")},1226:function(t,e,s){s.d(e,{Z:function(){return p}});var r=s(144),i=s(5827),a=s(8083),n=s(6952),o=s(3536),l=s(1431),c=s(8085),d=s(4589),h=s(3325);const u=(0,h.Z)(n.Z,(0,o.d)(["absolute","fixed","top","bottom"]),l.Z,c.Z);var g=u.extend({name:"v-progress-linear",directives:{intersect:a.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,d.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,d.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,d.kb)(this.normalizedValue,"%"),width:(0,d.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?i.Z5:i.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,d.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,d.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,s){this.isVisible=s},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,d.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=g,p=r.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},7960:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mt-2",attrs:{tile:"",outlined:""}},[s("v-card-title",{class:t.small?"pb-0":""},[s("div",{staticClass:"d-flex pr-8"},[s("div",{staticClass:"d-flex align-start"},[s("v-icon",{staticClass:"pt-1",attrs:{left:"",small:t.small,color:t.getPriority(t.task.priority).color}},[t._v(" "+t._s(t.getPriority(t.task.priority).icon)+" ")]),s("span",{class:t.small?"text-body-1":"text-h6",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.changeDialog(!0)}}},[t._v(t._s(t.task.name))])],1),s("v-btn",{attrs:{icon:"",small:!t.small,"x-small":t.small},on:{click:function(e){return t.changeDialogForm(!0)}}},[s("v-icon",{staticClass:"ml-1",attrs:{"x-small":t.small}},[t._v(" mdi-pencil ")])],1)],1),s("v-btn",{staticStyle:{position:"absolute",top:"16px",right:"16px"},attrs:{icon:"",small:!t.small,"x-small":t.small},on:{click:function(e){return t.deleteTaskInSprint(t.task)}}},[s("v-icon",{attrs:{small:t.small}},[t._v(" mdi-close ")])],1)],1),t.full?s("v-card-text",{class:t.small?"pb-0":""},[t._v(" "+t._s(t.task.descriptionShort)+" ")]):t._e(),t.full?s("v-card-actions",{staticClass:"px-4"},[t.small?t._e():s("div",[s("v-icon",{attrs:{small:t.small,left:"",color:t.getStatus(t.task.status).color}},[t._v(" "+t._s(t.getStatus(t.task.status).icon)+" ")]),s("span",[t._v(t._s(t.getStatus(t.task.status).name))])],1),s("v-spacer"),s("v-icon",{staticClass:"mr-1",attrs:{small:t.small,color:"red"}},[t._v(" mdi-fire ")]),s("span",{staticClass:"text-body-2"},[t._v(t._s(t.$moment(t.task.deadline).format("DD.MM.YYYY")))])],1):t._e(),s("TaskDialogComponent",{attrs:{dialog:t.dialog,task:t.task},on:{changeDialog:t.changeDialog,openForm:function(e){return t.changeDialogForm(!0)}}}),s("TaskDialogFormComponent",{attrs:{dialog:t.dialogForm,"form-prop":t.task},on:{changeDialog:t.changeDialogForm,submit:t.changeTaskInSprint}})],1)},i=[],a=s(3796),n=s(140),o=s(4583),l=function(t,e,s,r){var i,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(a<3?i(n):a>3?i(e,s,n):i(e,s))||n);return a>3&&n&&Object.defineProperty(e,s,n),n};let c=class extends n.w3{constructor(...t){super(...t),(0,a.Z)(this,"task",void 0),(0,a.Z)(this,"sprintId",void 0),(0,a.Z)(this,"small",void 0),(0,a.Z)(this,"full",void 0),(0,a.Z)(this,"dialogForm",!1),(0,a.Z)(this,"dialog",!1)}changeDialogForm(t){this.dialogForm=t}changeDialog(t){this.dialog=t}deleteTaskInSprint(t){o.tC.actions.addTask(t),o.r0.actions.deleteTaskFromSprint({sprintId:this.sprintId,taskId:t.id||0})}changeTaskInSprint(t){o.r0.actions.changeTaskFromSprint({sprintId:this.sprintId,task:t})}};l([(0,n.fI)()],c.prototype,"task",void 0),l([(0,n.fI)()],c.prototype,"sprintId",void 0),l([(0,n.fI)()],c.prototype,"small",void 0),l([(0,n.fI)()],c.prototype,"full",void 0),c=l([(0,n.wA)({name:"SprintTaskComponent",components:{TaskDialogComponent:()=>Promise.all([s.e(497),s.e(485)]).then(s.bind(s,7510)),TaskDialogFormComponent:()=>Promise.all([s.e(912),s.e(497),s.e(432),s.e(589)]).then(s.bind(s,5432))},computed:o.Yh.mapGetters({getPriority:"getPriority",getStatus:"getStatus"})})],c);var d=c,h=d,u=s(1001),g=s(3453),m=s.n(g),p=s(3150),v=s(3237),f=s(7118),_=s(6428),k=s(9762),b=(0,u.Z)(h,r,i,!1,null,null,null),y=b.exports;m()(b,{VBtn:p.Z,VCard:v.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB,VIcon:_.Z,VSpacer:k.Z})}}]);
//# sourceMappingURL=960.015cfdb9.js.map