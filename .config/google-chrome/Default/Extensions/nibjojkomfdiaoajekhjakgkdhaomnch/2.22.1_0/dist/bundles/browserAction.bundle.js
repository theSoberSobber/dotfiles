(()=>{"use strict";var e,t={6929:(e,t,n)=>{n.d(t,{SH:()=>r,iG:()=>i});n(9670);var s=n(4981);n(8531);function i(e,t){if(t=t||{},e&&e.toString().startsWith("ip")&&(e=e.replace(/^(ip[n|f]s):\/\//,"/$1/")),!s.urlOrPath(e))return null;s.path(e)&&(e=`https://localhost${e}`);let n="string"==typeof e?new URL(e):e;if(s.subdomain(e)){let{id:e,ns:t}=a(n);e=function(e){e&&!e.includes(".")&&e.includes("-")&&!s.cid(e)&&(e=e.replace(/--/g,"@").replace(/-/g,".").replace(/@/g,"-"));return e}(e),n=new URL(`https://localhost/${t}/${e}${n.pathname}${n.search}${n.hash}`)}const i=decodeURI(n.pathname);return s.path(i)?t.keepURIParams?`${i}${n.search}${n.hash}`:i:null}function a(e){"string"==typeof e&&(e=new URL(e));const t=e.toString().match(s.subdomainGatewayPattern);if(!t||t.length<3)return!1;return{id:t[1],ns:t[2]}}function r(e,t){if("string"==typeof e&&(e=new URL(e)),"string"==typeof t&&(t=new URL(t)),"ipfs.io"===e.hostname)return e.hostname===t.hostname;if("0.0.0.0"===e.hostname&&((e=new URL(e.toString())).hostname="127.0.0.1"),!(s.url(e.toString())||s.subdomain(e.toString())||e.pathname.startsWith("/api/v0/")||e.pathname.startsWith("/webui")))return!1;const n=[t.host];"localhost"===t.hostname&&n.push(`127.0.0.1:${t.port}`),"127.0.0.1"!==t.hostname&&"[::1]"!==t.hostname||n.push(`localhost:${t.port}`);for(const t of n)if(e.host.endsWith(t))return!0;return!1}},4694:(e,t,n)=>{var s=n(2490),i=n(6566),a=n(5623),r=n(3150);function o({svg:e,title:t,active:n,action:s,className:a}){return i`
    <button class="header-icon pa0 ma0 dib bn bg-transparent transition-all ${a} ${s?"pointer":null} ${n?"aqua":"gray"}"
      style="outline:none;"
      title="${r.i18n.getMessage(t)||t}"
      onclick=${s}>
      ${e}
    </button>
  `}function l({gatewayVersion:e}){return i`
  ${function({label:e,labelLegend:t,title:n,value:s,check:a,valueClass:o=""}){const l=r.i18n.getMessage("panel_statusOffline");return e=e?r.i18n.getMessage(e):null,t=t?r.i18n.getMessage(t):e,i`
      <div title="${t}" class="ma0 pa0" style="line-height: 0.25">
        <span class="f7 tr monospace force-select-all ${o}" title="${n}">${(s=s||0===s?s:l).substring(0,13)}</span>
      </div>
    `}({label:"panel_statusGatewayVersion",title:r.i18n.getMessage("panel_statusGatewayVersionTitle"),value:e,check:e})}
  `}function c({label:e,labelLegend:t,value:n,check:s,itemClass:a="",valueClass:o=""}){const l=r.i18n.getMessage("panel_statusOffline");return e=e?r.i18n.getMessage(e):null,t=t?r.i18n.getMessage(t):e,i`
      <div class="flex mb1 ${s?"":"o-60"} ${a}" title="${t}">
        <span class="w-40 f7 ttu no-user-select">${e}</span>
        <span class="w-60 f7 tr monospace truncate force-select-all ${o}" title="${n=n||0===n?n:l}">${n}</span>
      </div>
    `}function p(e){const{ipfsNodeType:t,active:n,onToggleActive:s,onOpenPrefs:r,onOpenReleaseNotes:p,isIpfsOnline:u,onOpenWelcomePage:d,newVersion:g}=e;return i`
    <div>
      <div class="pt3 pr3 pb2 pl3 no-user-select flex justify-between items-center">
        <div class="inline-flex items-center">
        <div
          onclick=${d}
          class="transition-all pointer ${n?"":"o-40"}"
          style="${n?"":"filter: blur( .15em )"}">
  ${(0,a.Z)({size:54,path:"../../../icons",ipfsNodeType:t,isIpfsOnline:n&&u})}
        </div>
          <div class="flex flex-column ml2 white ${n?"":"o-40"}">
            <div>
              <h1 class="inter fw6 f2 ttu ma0 pa0">
                IPFS
              </h1>
            </div>
            <span class="${n?"":"o-0"}">${l(e)}</span>
          </div>
        </div>
        <div class="tr ma0 pb1">
          ${g?function({action:e,active:t,className:n,newVersion:s,size:a="1.8rem",title:r}){let l=i`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
        class="fill-yellow-muted mr1"
        style="width:${a}; height:${a}">
        <path xmlns="http://www.w3.org/2000/svg" d="M71.13 28.87a29.88 29.88 0 100 42.26 29.86 29.86 0 000-42.26zm-18.39 37.6h-5.48V44.71h5.48zm0-26.53h-5.48v-5.49h5.48z"/>
      </svg>
    `;return s.match(/\./g).length>2&&(l=i`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
          class="fill-red-muted mr1"
          style="width:${a}; height:${a}">
          <path d="M82.84 71.14L55.06 23a5.84 5.84 0 00-10.12 0L17.16 71.14a5.85 5.85 0 005.06 8.77h55.56a5.85 5.85 0 005.06-8.77zm-30.1-.66h-5.48V65h5.48zm0-10.26h-5.48V38.46h5.48z"/>
      </svg>
    `,r="Beta channel is deprecated, please switch to regular releases",n=`${n} blink`),o({svg:l,title:r,active:t,action:e,className:n})}({newVersion:g,active:n,title:"panel_headerNewVersionTitle",action:p}):null}
          ${function({action:e,active:t,size:n="1.8rem",title:s}){return o({svg:i`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
        class="fill-current-color mr1"
        style="width:${n}; height:${n}">
        <path d="M50 20.11A29.89 29.89 0 1 0 79.89 50 29.89 29.89 0 0 0 50 20.11zm-3.22 17a3.22 3.22 0 0 1 6.44 0v6.43a3.22 3.22 0 0 1-6.44 0zM50 66.08a16.14 16.14 0 0 1-11.41-27.49 3.28 3.28 0 0 1 1.76-.65 2.48 2.48 0 0 1 2.42 2.41 2.58 2.58 0 0 1-.77 1.77A10.81 10.81 0 0 0 38.59 50a11.25 11.25 0 0 0 22.5 0 10.93 10.93 0 0 0-3.21-7.88 3.37 3.37 0 0 1-.65-1.77 2.48 2.48 0 0 1 2.42-2.41 2.16 2.16 0 0 1 1.76.65A16.14 16.14 0 0 1 50 66.08z"/>
      </svg>
    `,title:s,active:t,action:e})}({active:n,title:"panel_headerActiveToggleTitle",action:s})}
          ${function({action:e,active:t,size:n="1.8rem",title:s}){return o({svg:i`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
        class="fill-current-color"
        style="width:${n}; height:${n}">
        <path d="M74.05 50.23c-.07-3.58 1.86-5.85 5.11-7.1-.2-2-2.48-7.45-3.63-8.76-3.11 1.46-6.06 1.23-8.54-1.22s-2.72-5.46-1.26-8.64a29.24 29.24 0 0 0-8.8-3.63c-1.06 3.08-3.12 5-6.35 5.25-3.82.29-6.29-1.69-7.61-5.22a30.11 30.11 0 0 0-8.77 3.67c1.5 3.16 1.3 6.1-1.15 8.6s-5.45 2.76-8.64 1.29a29.33 29.33 0 0 0-3.58 8.79C24 44.43 25.94 46.62 26 50s-1.82 5.84-5.1 7.12a29.21 29.21 0 0 0 3.68 8.71c3.09-1.38 6-1.15 8.42 1.22s2.79 5.33 1.41 8.49a29.72 29.72 0 0 0 8.76 3.57 1.46 1.46 0 0 0 .11-.21 7.19 7.19 0 0 1 13.53-.16c.13.33.28.32.55.25a29.64 29.64 0 0 0 8-3.3 4 4 0 0 0 .37-.25c-1.27-2.86-1.15-5.57.88-7.94 2.44-2.84 5.5-3.26 8.91-1.8a29.23 29.23 0 0 0 3.65-8.7c-3.17-1.22-5.05-3.38-5.12-6.77zM50 59.54a8.57 8.57 0 1 1 8.59-8.31A8.58 8.58 0 0 1 50 59.54z"/>
      </svg>
    `,title:s,active:t,action:e})}({active:n,title:"panel_openPreferences",action:r})}
        </div>
      </div>
      <div class="pb1 ${n?"":"o-40"}">
        ${function({gatewayAddress:e,gatewayVersion:t,ipfsApiUrl:n,ipfsNodeType:s,swarmPeers:a}){const r=n&&"embedded"===s?"js-ipfs":n;return i`
    <ul class="fade-in list mv0 pt2 ph3 white">
    ${c({label:"panel_statusSwarmPeers",labelLegend:"panel_statusSwarmPeersTitle",value:a,check:a})}
    ${c({label:"panel_statusGatewayAddress",labelLegend:"panel_statusGatewayAddressTitle",value:e,check:e})}
    ${c({label:"panel_statusApiAddress",labelLegend:"panel_statusApiAddressTitle",value:r,check:t})}
    </ul>
  `}(e)}
      </div>
    </div>
  `}var u=n(9159);function d({disabled:e,helperText:t,onClick:n,style:s,switchValue:a,text:r,title:o}){let l="black button-reset db w-100 bg-white b--none outline-0--focus pt2 ph3 f6 tl";return l+=e?" o-40":" pointer bg-near-white--hover",s&&(l+=` ${s}`),e&&(o=""),i`

    <button class="${l}"
            onclick=${e?null:n}  title="${o||""}" ${e?"disabled":""}>
      <div class="flex flex-row items-center justify-between"><div class="truncate">${r}</div>${(0,u.Z)({checked:a,disabled:e,style:"fr ml2"})}</div>
      <div class="f7 o-40 w-80 truncate mv1">${t}</div>
    </button>
  `}var g=n(6929),v=n(1227);n(8637);const w=v("ipfs-companion:import");w.error=v("ipfs-companion:import:error");function h(e){e=(e=e.replace(/\/$|$/,"/")).replace(/(\/)\/+/g,"$1");const t=new Date,n=[t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()].map((e=>String(e).padStart(2,"0")));return[/%Y/g,/%M/g,/%D/g,/%h/g,/%m/g,/%s/g].forEach(((t,s)=>{e=e.replace(t,n[s])})),e}const f=v("ipfs-companion:context-menus");f.error=v("ipfs-companion:context-menus:error");const b="contextMenu_importToIpfs",m="panelCopy_currentIpfsAddress",y="panelCopy_currentIpnsAddress",$="panelCopy_copyRawCid",x="panel_copyCurrentPublicGwUrl",O="panel_contextMenuViewOnGateway",C="panel_copyCurrentPermalink";new Set([$,y,b]),new Set,new Set;const T=r.i18n.getMessage("panelCopy_notReadyHint");function M({active:e,redirect:t,isRedirectContext:n,pubGwURLString:s,gwURLString:a,currentTab:o,currentFqdn:l,currentDnslinkFqdn:c,currentTabIntegrationsOptOut:p,currentTabContentPath:u=T,currentTabImmutablePath:v=T,currentTabCid:w=T,currentTabPublicUrl:f=T,currentTabPermalink:b=T,ipfsNodeType:M,isIpfsContext:k,isIpfsOnline:I,isApiAvailable:U,onToggleSiteIntegrations:A,onViewOnGateway:S,onCopy:_,importDir:P,onFilesCpImport:R}){const L=e&&I&&U&&w,V=e&&I&&U&&!M.startsWith("embedded"),G=u.startsWith("/ipns/");return i`
    <div class='fade-in pv1'>
  ${(()=>{if(n)return i`
  ${d({text:r.i18n.getMessage("panel_activeTabSiteIntegrationsToggle",l),title:r.i18n.getMessage("panel_activeTabSiteIntegrationsToggleTooltip",l),style:"truncate",disabled:!e,switchValue:e&&!p,onClick:A})}
      `})()}
  ${(()=>{if(k)return i`<div>
  ${(e=>{if(!e)return!1;const{url:t}=e;return!(t.startsWith("ip")||(0,g.SH)(t,a)||(0,g.SH)(t,s))})(o)?d({text:r.i18n.getMessage(O),onClick:()=>S(O)}):null}
  ${d({text:r.i18n.getMessage(x),title:r.i18n.getMessage("panel_copyCurrentPublicGwUrlTooltip"),helperText:f,onClick:()=>_(x)})}
  ${G?d({text:r.i18n.getMessage(C),title:r.i18n.getMessage("panel_copyCurrentPermalinkTooltip"),helperText:b,onClick:()=>_(C)}):""}
  ${G?d({text:r.i18n.getMessage(y),title:r.i18n.getMessage("panelCopy_currentIpnsAddressTooltip"),helperText:u,onClick:()=>_(y)}):""}
  ${d({text:r.i18n.getMessage(m),title:r.i18n.getMessage("panelCopy_currentIpfsAddressTooltip"),helperText:v,onClick:()=>_(m)})}
  ${d({text:r.i18n.getMessage($),title:r.i18n.getMessage("panelCopy_copyRawCidTooltip"),helperText:w,disabled:!L,onClick:()=>_($)})}
  ${d({text:r.i18n.getMessage("panel_importCurrentIpfsAddress"),title:r.i18n.getMessage("panel_importCurrentIpfsAddressTooltip"),helperText:h(P),disabled:!V,onClick:R})}
  </div>
    `})()}
    </div>
  `}function k(e){var t;if(e.isRedirectContext||e.isIpfsContext)return i`
      <div class="mb1">
      ${t="panel_activeTabSectionHeader",i`
    <div class="no-select w-100 outline-0--focus tl ph3 pt2 mt1 pb1 o-40 f6">
      ${r.i18n.getMessage(t)}
    </div>
  `}
      <div class="fade-in pv0">
        ${M(e)}      </div>
      </div>
  `}function I({disabled:e,iconD:t,iconSize:n,onClick:s,style:a,text:r,title:o}){let l="header-icon fade-in w-50 ba bw1 snow b--snow bg-transparent f7 ph1 pv0 br4 ma1 flex justify-center items-center truncate";return l+=e?" o-60":" pointer",a&&(l+=` ${a}`),e&&(o=""),i`

    <div class="${l}" onclick=${e?null:s}  title="${o||""}" ${e?"disabled":""}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="mr1" width="${n}" height="${n}"><path fill="currentColor" d="${t}"/></svg>
      <div class="flex flex-row items-center justify-between"><div class="truncate">${r}</div></div>
    </div>
  `}var U=n(4981),A=n(8583);const S=s();S.use(((e,t)=>{let n;Object.assign(e,{active:!0,redirect:!0,isIpfsContext:!1,isRedirectContext:!1,ipfsNodeType:"external",isIpfsOnline:!1,ipfsApiUrl:null,publicGatewayUrl:null,publicSubdomainGatewayUrl:null,gatewayAddress:null,swarmPeers:null,gatewayVersion:null,isApiAvailable:!1,currentTab:null,currentFqdn:null,currentDnslinkFqdn:null,enabledOn:[],disabledOn:[]}),t.on("DOMContentLoaded",(async()=>{r.runtime.sendMessage({telemetry:{trackView:"browser-action"}}),t.emit("render"),n=r.runtime.connect({name:"browser-action-port"}),n.onMessage.addListener((async n=>{if(n.statusUpdate){const s=n.statusUpdate;console.log("In browser action, received message from background:",n),await async function(t){t?(Object.assign(e,t),e.active&&t.redirect&&"embedded"!==t.ipfsNodeType?e.gatewayAddress=t.gwURLString:e.gatewayAddress=t.pubGwURLString,e.isApiAvailable=e.active&&!!await r.runtime.getBackgroundPage()&&!r.extension.inIncognitoContext,e.swarmPeers=e.active&&-1!==t.peerCount?t.peerCount:null,e.isIpfsOnline=e.active&&t.peerCount>-1,e.gatewayVersion=e.active&&t.gatewayVersion?t.gatewayVersion:null,e.ipfsApiUrl=e.active?t.apiURLString:null):(e.ipfsNodeType="external",e.swarmPeers=null,e.isIpfsOnline=!1,e.gatewayVersion=null,e.isIpfsContext=!1,e.isRedirectContext=!1)}(s),t.emit("render")}})),setTimeout((()=>{document.body.style.height=window.innerHeight+1+"px",setTimeout((()=>document.body.style.removeProperty("height")),50)}),100)})),t.on("viewOnGateway",(async()=>{n.postMessage({event:O}),window.close()})),t.on("copy",(function(e){switch(e){case y:n.postMessage({event:y});break;case m:n.postMessage({event:m});break;case $:n.postMessage({event:$});break;case x:n.postMessage({event:x});break;case C:n.postMessage({event:C})}window.close()})),t.on("filesCpImport",(()=>{n.postMessage({event:"browserActionFilesCpImportCurrentTab"}),window.close()})),t.on("quickImport",(()=>{r.tabs.create({url:r.runtime.getURL("dist/popup/quick-import.html")}),window.close()})),t.on("openWelcomePage",(async()=>{try{await r.tabs.create({url:A.O_}),window.close()}catch(e){console.error(`Unable Open WelcomePage (${A.O_})`,e)}})),t.on("openWebUi",(async(t="/")=>{const n=`${e.webuiRootUrl}#${t}`;try{await r.tabs.create({url:n}),window.close()}catch(e){console.error(`Unable Open Web UI (${n})`,e)}})),t.on("openReleaseNotes",(async()=>{const{version:e}=r.runtime.getManifest(),t=2===e.match(/\./g).length;let n;try{t?(n=`https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v${e}`,await r.storage.local.set({dismissedUpdate:e})):n="https://github.com/ipfs-shipyard/ipfs-companion/issues/964",await r.tabs.create({url:n}),window.close()}catch(e){console.error(`Unable to open release notes (${n})`,e)}})),t.on("openPrefs",(()=>{r.runtime.openOptionsPage().then((()=>window.close())).catch((e=>{console.error("runtime.openOptionsPage() failed, opening options page in tab instead.",e),r.tabs.create({url:r.runtime.getURL(A.hO)})}))})),t.on("toggleGlobalRedirect",(async()=>{const n=e.redirect;e.redirect=!n,e.gatewayAddress=e.redirect?e.gwURLString:e.pubGwURLString,t.emit("render");try{await r.storage.local.set({useCustomGateway:!n})}catch(s){console.error(`Unable to update redirect state due to ${s}`),e.redirect=n,t.emit("render")}})),t.on("toggleSiteIntegrations",(async()=>{const n=e.currentTabIntegrationsOptOut;e.currentTabIntegrationsOptOut=!n,t.emit("render");try{let{enabledOn:t,disabledOn:s,currentTab:i,currentDnslinkFqdn:a,currentFqdn:o}=e;const l=a||o;n?(s=s.filter((e=>e!==l)),t.push(l)):(t=t.filter((e=>e!==l)),s.push(l)),await r.storage.local.set({disabledOn:s,enabledOn:t});const c=(0,g.iG)(i.url,{keepURIParams:!0});if(a&&U.ipnsPath(c)){const e=c.replace(/^.*\/ipns\//,"http://");await r.tabs.update(i.id,{url:e})}else await r.tabs.reload(i.id)}catch(e){console.error(`Unable to update integrations state due to ${e}`),t.emit("render")}})),t.on("toggleActive",(async()=>{const n=e.active;e.active=!n,e.active||(e.gatewayAddress=e.pubGwURLString,e.ipfsApiUrl=null,e.gatewayVersion=null,e.swarmPeers=null,e.isIpfsOnline=!1);try{await r.storage.local.set({active:e.active})}catch(t){console.error(`Unable to update global Active flag due to ${t}`),e.active=n}t.emit("render")}))})),S.route("*",(function(e,t){const n=Object.assign({onToggleActive:()=>t("toggleActive"),onOpenPrefs:()=>t("openPrefs"),onOpenReleaseNotes:()=>t("openReleaseNotes"),onOpenWelcomePage:()=>t("openWelcomePage")},e),s=Object.assign({onViewOnGateway:()=>t("viewOnGateway"),onToggleSiteIntegrations:()=>t("toggleSiteIntegrations"),onCopy:e=>t("copy",e),onFilesCpImport:()=>t("filesCpImport")},e),a=Object.assign({onQuickImport:()=>t("quickImport"),onOpenWebUi:()=>t("openWebUi","/"),onToggleGlobalRedirect:()=>t("toggleGlobalRedirect")},e);return i`
    <div class="sans-serif" style="text-rendering: optimizeLegibility;">
      <div class="ba bw1 b--white ipfs-gradient-0">
        ${p(n)}
        ${function({active:e,ipfsNodeType:t,isApiAvailable:n,isIpfsOnline:s,onOpenWebUi:a,onQuickImport:o}){const l=e&&s&&n,c=e&&s&&"embedded"!==t;return i`
    <div class="flex pb2 ph2 justify-between">
  ${I({text:r.i18n.getMessage("panel_quickImport"),title:r.i18n.getMessage("panel_quickImportTooltip"),disabled:!l,onClick:o,iconSize:20,iconD:"M71.13 28.87a29.88 29.88 0 100 42.26 29.86 29.86 0 000-42.26zm-18.39 37.6h-5.48V52.74H33.53v-5.48h13.73V33.53h5.48v13.73h13.73v5.48H52.74z"})}
  ${I({text:r.i18n.getMessage("panel_openWebui"),title:r.i18n.getMessage("panel_openWebuiTooltip"),disabled:!c,onClick:a,iconSize:18,iconD:"M69.69 20.57c-.51-.51-1.06-1-1.62-1.47l-.16-.1c-.56-.46-1.15-.9-1.76-1.32l-.5-.35c-.25-.17-.52-.32-.79-.48A28.27 28.27 0 0050 12.23h-.69a28.33 28.33 0 00-27.52 28.36c0 13.54 19.06 37.68 26 46a3.21 3.21 0 005 0c6.82-8.32 25.46-32.25 25.46-45.84a28.13 28.13 0 00-8.56-20.18zM51.07 49.51a9.12 9.12 0 119.13-9.12 9.12 9.12 0 01-9.13 9.12z"})}
    </div>
  `}(a)}
      </div>
      ${k(s)}
    </div>
  `})),S.mount("#root")}},n={};function s(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,s),a.exports}s.m=t,e=[],s.O=(t,n,i,a)=>{if(!n){var r=1/0;for(p=0;p<e.length;p++){for(var[n,i,a]=e[p],o=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((e=>s.O[e](n[l])))?n.splice(l--,1):(o=!1,a<r&&(r=a));if(o){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,i,a]},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.j=666,(()=>{var e={666:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var i,a,[r,o,l]=n,c=0;if(r.some((t=>0!==e[t]))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(l)var p=l(s)}for(t&&t(n);c<r.length;c++)a=r[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(p)},n=self.webpackChunkipfs_companion=self.webpackChunkipfs_companion||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=s.O(void 0,[297],(()=>s(4694)));i=s.O(i)})();