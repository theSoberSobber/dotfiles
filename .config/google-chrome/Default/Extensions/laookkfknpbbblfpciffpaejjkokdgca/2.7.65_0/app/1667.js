(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1667,282],{99437:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var s=n(20144),a=n(88026),i=n(51726),o=n.n(i),r=n(34952),c=n(7838),d=n(81452);let l={};const u={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),l[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",l[e.dataset.mobileClickHandlerId]),delete l[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};var M=n(28692);s.ZP.use(a.Z,{name:"unreactive"}),s.ZP.use(o()),s.ZP.use(r.InlineSvgPlugin),s.ZP.use(M.og),s.ZP.prototype.$xhr=d.Z,s.ZP.prototype.$e=c.Z,s.ZP.directive("mobile-click",u),new s.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),s.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const g=s.ZP},11667:(e,t,n)=>{"use strict";n.r(t);var s=n(99437),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flash-message-container"},[t("transition",{attrs:{name:"slide-down-fade",mode:"out-in"}},[e.activeMessage?t("div",{key:e.activeMessage.id,staticClass:"flash-message",attrs:{"data-test":"flash-message"}},[e.activeMessage.error?t("inline-svg",{staticClass:"icon icon-alert",attrs:{src:n(76449)}}):e._e(),e._v(" "),t("div",{staticClass:"message"},[e._v("\n\t\t\t\t"+e._s(e.activeMessage.message)+"\n\t\t\t\t"),e.activeMessage.error?t("span",[e._v(e._s(e.preContactLinkMessage)),t("a",{attrs:{href:"https://momentumdash.com/contact",target:"_blank"}},[e._v(e._s(e.contactLinkMessage))])]):e._e()]),e._v(" "),e.activeMessage.error?t("div",{staticClass:"icon-wrapper close",attrs:{"data-test":"close"},on:{click:e.dismiss}},[t("inline-svg",{staticClass:"icon icon-close",attrs:{src:n(83401)}})],1):e._e()],1):e._e()])],1)};a._withStripped=!0;var i=n(97605);const o={name:"FlashMessage",computed:{activeMessage:()=>(0,i.eU)(),preContactLinkMessage(){const e=this.activeMessage.contact;return e?e.slice(0,e.indexOf("{")):"If the problem persists, please "},contactLinkMessage(){const e=this.activeMessage.contact;return e?e.slice(e.indexOf("{")+1,e.indexOf("}")):"contact us."}},watch:{activeMessage(e){clearTimeout(this.timeout),!e||e.error||e.persist||(this.timeout=setTimeout(this.dismiss,4e3))}},methods:{dismiss(){var e;(0,i.f2)(null===(e=this.activeMessage)||void 0===e?void 0:e.id)}}};n(15451);const r=(0,n(51900).Z)(o,a,[],!1,null,"ee29c008",null).exports,c=document.querySelector(".top-row"),d=document.createElement("div");c.appendChild(d),new s.Z({render:e=>e(r)}).$mount(d)},58243:(e,t,n)=>{(e.exports=n(23645)(!1)).push([e.id,"\n/* stylelint-disable */\n.flash-message-container[data-v-ee29c008] { position: absolute; inset: 1.5em 0 auto; z-index: 10; display: flex; justify-content: center; pointer-events: none;\n}\n.flash-message[data-v-ee29c008] { max-width: 600px; padding: 16px 20px; display: flex; gap: 16px; align-items: center; background-color: var(--color-bg); border-radius: 100px; color: var(--color-text); pointer-events: all; text-shadow: none;\n}\n.icon-alert[data-v-ee29c008] { --icon-size: 20px; flex-shrink: 0;\n}\n.message a[data-v-ee29c008] { color: var(--color-text); text-decoration: underline; transition: opacity 0.05s ease;\n}\n.message a[data-v-ee29c008]:hover { opacity: 0.8;\n}\n.message a[data-v-ee29c008]:hover:active { opacity: 1; transition-duration: 0s;\n}\n.close[data-v-ee29c008] { margin-right: -4px; margin-left: 3px;\n}\n.close[data-v-ee29c008]:after { --icon-wrapper-size: 30px;\n}\n.icon-close[data-v-ee29c008] { --icon-size: 10px;\n}\n",""])},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,s=e[1]||"",a=e[3];if(!a)return s;if(t&&"function"==typeof btoa){var i=(n=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[s].concat(o).concat([i]).join("\n")}return[s].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(s[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];null!=o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},83401:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K"},76449:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQgMzJDNjQgNDkuNjczMSA0OS42NzMxIDY0IDMyIDY0QzE0LjMyNjkgNjQgMCA0OS42NzMxIDAgMzJDMCAxNC4zMjY5IDE0LjMyNjkgMCAzMiAwQzQ5LjY3MzEgMCA2NCAxNC4zMjY5IDY0IDMyWk0yOCA0NkMyOCA0My43OTA5IDI5Ljc5MDkgNDIgMzIgNDJDMzQuMjA5MSA0MiAzNiA0My43OTA5IDM2IDQ2QzM2IDQ4LjIwOTEgMzQuMjA5MSA1MCAzMiA1MEMyOS43OTA5IDUwIDI4IDQ4LjIwOTEgMjggNDZaTTMyIDE1QzI5Ljc5MDkgMTUgMjggMTYuNzkwOSAyOCAxOVYzM0MyOCAzNS4yMDkxIDI5Ljc5MDkgMzcgMzIgMzdDMzQuMjA5MSAzNyAzNiAzNS4yMDkxIDM2IDMzVjE5QzM2IDE2Ljc5MDkgMzQuMjA5MSAxNSAzMiAxNVoiIC8+Cjwvc3ZnPgo="},51900:(e,t,n)=>{"use strict";function s(e,t,n,s,a,i,o,r){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=c):a&&(c=r?function(){a.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}n.d(t,{Z:()=>s})},15451:(e,t,n)=>{var s=n(58243);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,n(45346).Z)("0f041996",s,!1,{ssrId:!0})},45346:(e,t,n)=>{"use strict";function s(e,t){for(var n=[],s={},a=0;a<t.length;a++){var i=t[a],o=i[0],r={id:e+":"+a,css:i[1],media:i[2],sourceMap:i[3]};s[o]?s[o].parts.push(r):n.push(s[o]={id:o,parts:[r]})}return n}n.d(t,{Z:()=>p});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=a&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,d=!1,l=function(){},u=null,M="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,a){d=n,u=a||{};var o=s(e,t);return m(o),function(t){for(var n=[],a=0;a<o.length;a++){var r=o[a];(c=i[r.id]).refs--,n.push(c)}for(t?m(o=s(e,t)):o=[],a=0;a<n.length;a++){var c;if(0===(c=n[a]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete i[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],s=i[n.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](n.parts[a]);for(;a<n.parts.length;a++)s.parts.push(f(n.parts[a]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(f(n.parts[a]));i[n.id]={id:n.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function f(e){var t,n,s=document.querySelector("style["+M+'~="'+e.id+'"]');if(s){if(d)return l;s.parentNode.removeChild(s)}if(g){var a=c++;s=r||(r=v()),t=y.bind(null,s,a,!1),n=y.bind(null,s,a,!0)}else s=v(),t=z.bind(null,s),n=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else n()}}var h,I=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function y(e,t,n,s){var a=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=I(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function z(e,t){var n=t.css,s=t.media,a=t.sourceMap;if(s&&e.setAttribute("media",s),u.ssrId&&e.setAttribute(M,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);