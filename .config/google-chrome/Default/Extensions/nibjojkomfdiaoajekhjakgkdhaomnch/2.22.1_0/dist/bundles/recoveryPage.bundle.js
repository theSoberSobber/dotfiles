(()=>{"use strict";var e,r={5279:(e,r,n)=>{var o=n(2490),a=n(6566),t=n(3150);n(5623);n(5034);const s=(e=130)=>a`
<svg x="0px" y="0px" viewBox="0 0 100 100" width="${e}">
  <path fill="${"#f39021"}" d="M82.84 71.14L55.06 23a5.84 5.84 0 00-10.12 0L17.16 71.14a5.85 5.85 0 005.06 8.77h55.56a5.85 5.85 0 005.06-8.77zm-30.1-.66h-5.48V65h5.48zm0-10.26h-5.48V38.46h5.48z"/>
</svg>
`;var l=n(1991),i=n(8583);const c=o(),p=a`<a class="navy link underline-under hover-aqua" href="https://docs.ipfs.tech/how-to/companion-node-types/" target="_blank" rel="noopener noreferrer">${t.i18n.getMessage("recovery_page_learn_more")}</a>`,f=a`<a class="navy link underline-under hover-aqua" id="learn-more" href="${i.hO}" target="_blank" rel="noopener noreferrer">${t.i18n.getMessage("recovery_page_update_preferences")}</a>`;c.use((0,l.Z)(t.i18n,t.runtime)),c.route("*",(e=>{t.runtime.sendMessage({telemetry:{trackView:"recovery"}});const{hash:r}=window.location,{href:n}=new URL(decodeURIComponent(r.slice(1)));if(!n)return;const o=()=>{try{console.log("Opening URL from hash:",n),window.location.replace(n)}catch(e){console.error("Failed to open URL from hash:",e)}};if(!e.isIpfsOnline)return a`<div class="flex flex-column flex-row-l">
    <div id="left-col" class="min-vh-100 flex flex-column justify-center items-center bg-navy white">
      <div class="mb4 flex flex-column justify-center items-center">
        ${s(200)}
        <p class="mt0 mb0 f3 tc">${t.i18n.getMessage("recovery_page_sub_header")}</p>
      </div>
    </div>

    <div id="right-col" class="pt7 mt5 w-100 flex flex-column justify-around items-center">
      <p class="f3 fw5">${t.i18n.getMessage("recovery_page_message_p1")}</p>
      <p class="f4 fw4">${t.i18n.getMessage("recovery_page_message_p2")}</p>
      <p class="f4 fw4 w-100"><span class="b-ns">Public URL:</span> <a class="no-underline no-underline navy link hover-aqua" href="${n}" rel="noopener noreferrer" target="_blank">${n}</a></p>
      <button
        class="fade-in ba bw1 b--teal bg-teal snow f7 ph2 pv3 br2 ma4 pointer"
        onclick=${o}
        href="${n}"
      >
        <span class="f5 fw6">${t.i18n.getMessage("recovery_page_button")}</span>
      </button>
      <p class="f5 fw2 pt5">
        ${p} | ${f}
      </span>
    </div>
  </div>`;o()})),c.mount("#root"),document.title=t.i18n.getMessage("recovery_page_title")}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var t=n[e]={exports:{}};return r[e].call(t.exports,t,t.exports,o),t.exports}o.m=r,e=[],o.O=(r,n,a,t)=>{if(!n){var s=1/0;for(p=0;p<e.length;p++){for(var[n,a,t]=e[p],l=!0,i=0;i<n.length;i++)(!1&t||s>=t)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(l=!1,t<s&&(s=t));if(l){e.splice(p--,1);var c=a();void 0!==c&&(r=c)}}return r}t=t||0;for(var p=e.length;p>0&&e[p-1][2]>t;p--)e[p]=e[p-1];e[p]=[n,a,t]},o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=708,(()=>{var e={708:0};o.O.j=r=>0===e[r];var r=(r,n)=>{var a,t,[s,l,i]=n,c=0;if(s.some((r=>0!==e[r]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(i)var p=i(o)}for(r&&r(n);c<s.length;c++)t=s[c],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(p)},n=self.webpackChunkipfs_companion=self.webpackChunkipfs_companion||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var a=o.O(void 0,[297],(()=>o(5279)));a=o.O(a)})();