(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7091,5711],{61706:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});let s={};const i={bind(t,e){e.hasOwnProperty("value")&&!e.value||(t.dataset.resizeSensorId=Math.random().toString(36).substring(7),s[t.dataset.resizeSensorId]=new ResizeSensor(t,e.value))},unbind(t){s[t.dataset.resizeSensorId]&&s[t.dataset.resizeSensorId].detach(),delete s[t.dataset.resizeSensorId]}}},85711:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>g});var s=o(99437),i=o(31624);const a=new(o(64438).Z)("tab.focus.emptySave",.01),d=new(s.Z.extend({name:"FocusDataService",mixins:[i.X],unreactive:()=>({type:"focus",mode:localStorage.getItem("token")?"sync":"cache"}),defaultPath:"focus",methods:{add(t,e){return e.focus?i.X.methods.add.apply(this,arguments):(a.info("Focus data service add with no focus",{userUuid:localStorage.getItem("userId"),stackTrace:m.utils.getStackTrace()}),Promise.reject())}}}));var c=o(2770);const n=s.Z.extend({name:"FocusModel",mixins:[c.Z],data:()=>({id:null,archived:!1,completed:!1,createdDate:m.now(),focus:null,forDate:null,todoId:null,props:["focus","completed","archived","forDate","createdDate","todoId"]}),methods:{updateData(t){c.Z.methods.updateData.call(this,t),this.completed=!!t.completed}}});var l=o(94234),h=o(20144),u=o(40531);const r=new(h.ZP.extend({name:"AutoFocusManager",data:()=>({activeFocus:null,loaded:!1}),computed:{autoFocusEnabled:()=>u.ax.autoFocus&&m.conditionalFeatures.featureEnabled("pinfocus")},watch:{autoFocusEnabled:{handler(t){t?this.getTopTodo().then((t=>this.activeFocus=this.createFocusFromTodo(t))):this.activeFocus=null},immediate:!0},"activeFocus.focus"(t){this.activeFocus&&m.trigger("todo:set:title",this.activeFocus.todoId,t)}},created(){m.on("todo:globalChange",this.onTodoChange),m.on("todo:loadingStateChange",this.onLoadingStateChange),m.on("todo:activeListLoaded",this.setLoaded),this.getInitialLoadedState()},destroyed(){m.off("todo:globalChange",this.onTodoChange),m.off("todo:loadingStateChange",this.onLoadingStateChange),m.off("todo:activeListLoaded",this.setLoaded)},methods:{getInitialLoadedState(){return m.widgetManager.getWidgetAsync("todo").then((t=>{var e,o;"Done"===(null===(e=t.manager.activeProvider.selectedList())||void 0===e||null===(o=e.itemCollection)||void 0===o?void 0:o.listStatus)&&(this.loaded=!0)}))},setLoaded(){this.loaded=!0},toggleComplete(){this.activeFocus&&(this.activeFocus.completed=!this.activeFocus.completed,m.trigger("todo:set:done",this.activeFocus.todoId,this.activeFocus.completed))},onLoadingStateChange(){this.autoFocusEnabled&&this.getTopTodo().then((t=>{var e;!t||this.activeFocus&&(t.get("id")||t.id)===this.activeFocus.todoId?t||null!==(e=this.activeFocus)&&void 0!==e&&e.completed||(this.activeFocus=null):this.activeFocus=this.createFocusFromTodo(t)}))},getTopTodo:()=>m.widgetManager.getWidgetAsync("todo").then((t=>t.getTopTodo())),onTodoChange(...t){var e,o,s;const i=t[0];if(t.find((t=>t&&(t.ignoreRender||t.silent)))||!this.autoFocusEnabled||null==i||!i.changed||!Object.keys(i.changed).length||!1===(null===(e=i.changed)||void 0===e?void 0:e.isLoading))return;const a=(null===(o=i.changed)||void 0===o?void 0:o.completedDate)||(null===(s=i.changed)||void 0===s?void 0:s.modifiedServer);this.getTopTodo().then((t=>{var e,o;t?this.activeFocus=this.createFocusFromTodo(t):null!==(e=this.activeFocus)&&void 0!==e&&e.todoId&&(i.get("id")||i.id).includes(null===(o=this.activeFocus)||void 0===o?void 0:o.todoId)&&(this.activeFocus.completed=i.get("done"),a||(this.activeFocus=null))}))},createFocusFromTodo(t){if(!t)return null;let e=new n;return e.updateData({focus:t.get("title"),archived:!1,completed:t.get("done"),createdDate:m.now(),id:m.utils.uuidv4(),todoId:t.get("id")||t.id,forDate:m.utils.getDateString()}),e}}}));var v=o(81405);const g=new(s.Z.extend({name:"FocusCollection",mixins:[l.FZ,l.mX],unreactive:()=>({type:"focus",Model:n,dataService:d,newModel:null,analytics:new v.ZP({feature:"focus"})}),computed:{emptyFocus(){return!this.activeFocus.focus},activeFocusInCollection(){const t=m.utils.getDateString(),e=Object.values(this.data.items).filter((e=>!e.archived&&e.forDate===t)).sort(((t,e)=>e.createdDate-t.createdDate));return e.length?e[0]:null},activeFocus(){return r.activeFocus||this.activeFocusInCollection||this.newModel},loaded(){return(!r.autoFocusEnabled||r.loaded)&&this.data.loaded}},created(){this.instantiateNewModel(),m.on("focus:pin",this.onFocusPin),m.on("todo:globalChange",this.onTodoChange),m.on("newDay",this.archiveAll)},destroyed(){m.off("focus:pin",this.onFocusPin),m.off("todo:globalChange",this.onTodoChange),m.off("newDay",this.archiveAll)},methods:{instantiateNewModel(){this.newModel=new this.Model,this.newModel.copyProperties()},async save(){const t=this.emptyFocus;r.activeFocus||this.activeFocus.editProps.focus&&await this[this.emptyFocus?"add":"update"](this.activeFocus),t&&this.instantiateNewModel(),this.analytics.capture("focus "+(t?"add":"edit"),{position:localStorage.getItem("pomodoro-showing")?"pomodoro":"default"}),this.activeFocus.commitChanges(),this.activeFocus.todoId&&m.trigger("todo:set:title",this.activeFocus.todoId,this.activeFocus.focus)},archive(){this.analytics.capture("focus clear",{completed:this.activeFocus.completed}),r.activeFocus?u.ax.autoFocus=!1:l.FZ.methods.archive.call(this,this.activeFocus)},archiveAll(){Object.values(this.data.items).forEach((t=>this.archive(t)))},toggleComplete(){const t=this.activeFocus.completed;this.analytics.capture("focus "+(t?"uncomplete":"complete"),Object.assign({position:localStorage.getItem("pomodoro-showing")?"pomodoro":"default"},t?{}:{autofocus:r.autoFocusEnabled})),r.activeFocus?r.toggleComplete():(this.activeFocus.completed=!t,this.dataService.update(this.activeFocus.id,{completed:!t}).then((()=>{this.activeFocus.todoId&&m.trigger("todo:set:done",this.activeFocus.todoId,!t)})).catch((e=>{throw this.activeFocus.completed=t,e})))},onFocusPin(t){u.ax.autoFocus=!1;let e=r.createFocusFromTodo(t);e&&e.focus&&(e.copyProperties(),this.add(e))},onTodoChange(...t){var e,o;const s=t[0];if(t.find((t=>t&&(t.ignoreRender||t.silent)))||!this.activeFocus||!Object.keys(this.data.items).length||null==s||!s.changed)return;let i=Object.values(this.data.items).find((t=>{var e;return t.todoId&&t.todoId===((null===(e=s.get)||void 0===e?void 0:e.call(s,"id"))||(null==s?void 0:s.id))}));if(!i)return;if(null!==(e=t[0])&&void 0!==e&&null!==(o=e.changed)&&void 0!==o&&o.deleted)return void this.archive();const a=s.get("done"),d=s.get("title");i.completed===a&&i.focus===d||(i.completed=a,i.focus=d,this.dataService.update(i.id,{completed:a,focus:d}))}}}))},30827:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var s=o(99437);const i=m.showAnyway=new(s.Z.extend({name:"ShowAnyway",data:()=>({widgets:[]}),methods:{show(t){this.includes(t)||this.widgets.push(t)},hide(t){const e=this.widgets.indexOf(t);~e&&this.widgets.splice(e,1)},includes(t){return this.widgets.includes(t)}}}))},72252:(t,e,o)=>{(t.exports=o(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.has-3-col[data-v-b71e343c] { padding: 0 15px; align-items: center; justify-content: center;\n}\n.has-3-col.match-width .side-col[data-v-b71e343c] { flex: 1 0 auto;\n}\n.slot-wrapper[data-v-b71e343c] { display: inline-flex; align-items: center;\n}\n.center-col[data-v-b71e343c] { min-width: 0; flex-shrink: 1;\n}\n",""])},41490:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-3-col",class:{"match-width":t.matchWidth}},[e("div",{staticClass:"side-col left",style:t.styles.left},[e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:"left"===t.matchWidth&&t.onResize,expression:"matchWidth === 'left' && onResize"}],ref:"left",staticClass:"slot-wrapper"},[t._t("left")],2)]),t._v(" "),e("div",{staticClass:"center-col"},[t._t("center")],2),t._v(" "),e("div",{staticClass:"side-col right",style:t.styles.right},[e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:"right"===t.matchWidth&&t.onResize,expression:"matchWidth === 'right' && onResize"}],ref:"right",staticClass:"slot-wrapper"},[t._t("right")],2)])])};s._withStripped=!0;var i=o(61706);const a={left:"right",right:"left"},d={name:"ThreeColLayout",doNotWaitForMount:!0,directives:{ResizeSensor:i.Z},props:{matchWidth:{type:String,default:null}},data:()=>({styles:{left:{},right:{}}}),mounted(){this.matchWidth&&this.onResize({width:this.$refs[this.matchWidth].clientWidth})},methods:{onResize(t){this.$set(this.styles[a[this.matchWidth]],"flex-basis",t.width+"px")}}};o(4990);const c=(0,o(51900).Z)(d,s,[],!1,null,"b71e343c",null).exports},4990:(t,e,o)=>{var s=o(72252);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,o(45346).Z)("5ab6c6c4",s,!1,{ssrId:!0})}}]);