(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[6451,282],{99437:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var i=n(20144),o=n(88026),a=n(51726),r=n.n(a),s=n(34952),u=n(7838),l=n(81452);let c={};const d={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};var M=n(28692);i.ZP.use(o.Z,{name:"unreactive"}),i.ZP.use(r()),i.ZP.use(s.InlineSvgPlugin),i.ZP.use(M.og),i.ZP.prototype.$xhr=l.Z,i.ZP.prototype.$e=u.Z,i.ZP.directive("mobile-click",d),new i.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),i.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const g=i.ZP},26451:(e,t,n)=>{"use strict";n.r(t);var i=n(99437),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container show-anyway",attrs:{id:"template"}},[t("div",{staticClass:"app-dash app-dash-icon add-shadow toggle topics-toggle",on:{click:e.toggleApp}},[t("inline-svg",{attrs:{src:n(52633)}}),e._v(" "),t("span",{staticClass:"app-dash-icon-label"},[e._v("Template")])],1),e._v(" "),e.containerOpen?t("div",[e._v("Hello")]):e._e()])};o._withStripped=!0;const a={name:"TemplatePlaceholder",data:()=>({containerOpen:!1}),mounted(){setTimeout((()=>this.toggleApp()),1),m.on("globalEvent:key:Z",this.toggleApp)},destroyed(){m.off("globalEvent:key:Z",this.toggleApp)},methods:{toggleApp(){this.containerOpen=!this.containerOpen,this.containerOpen?(m.trigger("notification:hide"),this.addListeners(),m.trigger("template:open")):(m.widgetManager.showApps(),m.trigger("template:closed"),this.removeListeners())},addListeners(){m.on("globalEvent:esc",this.toggleApp),m.on("globalEvent:click",this.handleGlobalClick)},removeListeners(){m.off("globalEvent:esc",this.toggleApp),m.off("globalEvent:click",this.handleGlobalClick)}}};n(59333);const r=(0,n(51900).Z)(a,o,[],!1,null,"81171d7c",null).exports;m.widgetManager.handover("template-placeholder",null,{order:"append",bootstrap:function(e){new i.Z({render:e=>e(r)}).$mount(e)}})},14751:(e,t,n)=>{(e.exports=n(23645)(!1)).push([e.id,"\n/* stylelint-disable */\n.app-container[data-v-81171d7c] { order: 3;\n}\n\n",""])},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,i=e[1]||"",o=e[3];if(!o)return i;if(t&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),r=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[i].concat(r).concat([a]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(o=0;o<e.length;o++){var r=e[o];null!=r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},52633:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0zLjU3OCAyLjU4NmEuMjk5LjI5OSAwIDAgMC0uMDc4LjIyNHYyMC45MDNhLjI4LjI4IDAgMCAwIC4wNzcuMi4yNzMuMjczIDAgMCAwIC4xNzMuMDg3aDIuOTc2YS4yOC4yOCAwIDAgMCAuMTk3LS4wODZjLjA1Mi0uMDU0LjA4LS4xMjcuMDc3LS4yMzRWMi43ODVhLjI4LjI4IDAgMCAwLS4wNzgtLjIuMjczLjI3MyAwIDAgMC0uMTcyLS4wODVIMy43NjdhLjI4LjI4IDAgMCAwLS4xOS4wODZ6TTMuNzI2IDBoMy4wNDhBMi43OCAyLjc4IDAgMCAxIDkuNSAyLjgxdjIwLjgzN0EyLjc4IDIuNzggMCAwIDEgNi43NSAyNi41SDMuNzI2YTIuNzggMi43OCAwIDAgMS0xLjk1Ny0uODZBMi43NiAyLjc2IDAgMCAxIDEgMjMuNjhWMi44MzVBMi43OCAyLjc4IDAgMCAxIDMuNzI2IDB6TTEzLjU3OCA5LjU5Yy0uMDUzLjA1Ny0uMDgxLjEzMi0uMDc4LjI1djEzLjg2MWEuMjkuMjkgMCAwIDAgLjA3OC4yMDkuMjg1LjI4NSAwIDAgMCAuMTcyLjA5aDIuOTY4YS4yOS4yOSAwIDAgMCAuMjA0LS4wOWMuMDUzLS4wNTcuMDgxLS4xMzIuMDc4LS4yNVY5Ljc5OWEuMjkuMjkgMCAwIDAtLjA3OC0uMjA5LjI4NS4yODUgMCAwIDAtLjE3Mi0uMDloLTIuOTc4YS4yOS4yOSAwIDAgMC0uMTk0LjA5em0uMTQtMi41OWgzLjA2NGEyLjc5IDIuNzkgMCAwIDEgMS45NTguODc1Yy41MS41NC43ODQgMS4yNjMuNzYgMS45NjV2MTMuNzc5YTIuNzkgMi43OSAwIDAgMS0uNzYgMi4wMDZjLS41MS41NC0xLjIxNS44NTYtMS45OS44NzVoLTMuMDMyYTIuNzkgMi43OSAwIDAgMS0xLjk1OC0uODc1QTIuNzY0IDIuNzY0IDAgMCAxIDExIDIzLjY2VjkuODgxYTIuNzkgMi43OSAwIDAgMSAyLjcxOC0yLjg4ek0zMS40NzMgMjIuNmEyLjg0IDIuODQgMCAwIDEtLjQwMyAyLjE1IDIuODY1IDIuODY1IDAgMCAxLTEuODYgMS4yMzRsLTIuOTc2LjQ4MmEyLjc2IDIuNzYgMCAwIDEtMi4wNy0uNTI4IDIuNzM3IDIuNzM3IDAgMCAxLTEuMDY4LTEuODExTDIwLjAyIDQuODUxYTIuODM0IDIuODM0IDAgMCAxIDIuMjU4LTMuMjgxbDIuOTc4LS41MzZhMi43NSAyLjc1IDAgMCAxIDMuMTMxIDIuMzU3bDMuMDg2IDE5LjIwOHpNMjUuOTE2IDMuNzY3Yy0uMDE1LS4xMTItLjA1LS4xNzMtLjEwMy0uMjEzYS4yNTMuMjUzIDAgMCAwLS4xNTEtLjA1NWwtMi45Mi41MjZjLS4xNzcuMDM1LS4yOTQuMjA1LS4yNTguNDA3TDI1LjU3IDIzLjc3YS4yNi4yNiAwIDAgMCAuMS4xNzRjLjA1Ni4wNDIuMTI3LjA2LjE4LjA1MmwyLjkxMi0uNDcxYS4zNC4zNCAwIDAgMCAuMjE3LS4xNDdjLjA1LS4wNzYuMDY3LS4xNjkuMDM3LS4zMmwtMy4xLTE5LjI5eiIgLz48cmVjdCB4PSIxLjA1IiB5PSIyOC43NSIgd2lkdGg9IjMwLjUiIGhlaWdodD0iMi41IiByeD0iMS4yNSIgLz48L2c+PC9zdmc+Cg=="},51900:(e,t,n)=>{"use strict";function i(e,t,n,i,o,a,r,s){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=u):o&&(u=s?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(e,t){return u.call(t),c(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:l}}n.d(t,{Z:()=>i})},59333:(e,t,n)=>{var i=n(14751);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,n(45346).Z)("dd3262a8",i,!1,{ssrId:!0})},45346:(e,t,n)=>{"use strict";function i(e,t){for(var n=[],i={},o=0;o<t.length;o++){var a=t[o],r=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};i[r]?i[r].parts.push(s):n.push(i[r]={id:r,parts:[s]})}return n}n.d(t,{Z:()=>I});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},r=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},d=null,M="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function I(e,t,n,o){l=n,d=o||{};var r=i(e,t);return p(r),function(t){for(var n=[],o=0;o<r.length;o++){var s=r[o];(u=a[s.id]).refs--,n.push(u)}for(t?p(r=i(e,t)):r=[],o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete a[u.id]}}}}function p(e){for(var t=0;t<e.length;t++){var n=e[t],i=a[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(D(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(D(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:r}}}}function m(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function D(e){var t,n,i=document.querySelector("style["+M+'~="'+e.id+'"]');if(i){if(l)return c;i.parentNode.removeChild(i)}if(g){var o=u++;i=s||(s=m()),t=L.bind(null,i,o,!1),n=L.bind(null,i,o,!0)}else i=m(),t=h.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var j,A=(j=[],function(e,t){return j[e]=t,j.filter(Boolean).join("\n")});function L(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=A(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function h(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),d.ssrId&&e.setAttribute(M,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);