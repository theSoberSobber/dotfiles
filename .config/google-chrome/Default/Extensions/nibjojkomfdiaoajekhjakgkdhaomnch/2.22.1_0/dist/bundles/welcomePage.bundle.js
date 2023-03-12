(()=>{"use strict";var e,t={6550:(e,t,s)=>{var l=s(3150),a=s(2490),i=s(1991),n=s(6566),o=s(5623);const c=(e,t,s)=>{const a=/<\d+>(.+?)<\/\d+>/gm,i=/<(\d+)>/gm,n=l.i18n.getMessage(e);let o=n,c=a.exec(n);for(;null!==c;){let e=i.exec(c[0]);for(;null!==e;)o=o.replace(c[0],`<a href="${t[parseInt(e[1])]}" ${s}>${c[1]}</a>`),e=i.exec(n);c=a.exec(n)}const p=document.createElement("template");return p.innerHTML=o,p.content};var p=s(5034),r=s(8583);const g="#ffffff";const m=(e,t,s=!0)=>n`
    <div class="mt4 mb2 flex flex-column justify-center items-center transition-all ${null===t&&"state-unknown"}">
      ${((e,t=128)=>n`
    ${(0,o.Z)({path:"../../../icons",size:t,isIpfsOnline:e})}
  `)(t)}
      ${s?n`<p class="montserrat mt3 mb0 f2">${e.getMessage("page_landingWelcome_logo_title")}</p>`:""}
    </div>
  `,u=(e,t,s)=>n`
    <div class="w-80 flex flex-column justify-center">
      <div class="mb3 flex flex-column justify-center items-center">
        ${n`
    <svg x="0px" y="0px" viewBox="0 0 100 100" width="${130}">
      <path fill="${"#57cbd0"}" d="M52.42 18.81A31.19 31.19 0 1083.6 50a31.22 31.22 0 00-31.18-31.19zm0 59.78A28.59 28.59 0 1181 50a28.62 28.62 0 01-28.58 28.59z"/>
      <path fill="${g}" d="M66.49 35.87a.75.75 0 00-1.06 0L46.6 54.7l-7.2-7.2a.75.75 0 00-1.06 0l-3.92 3.92a.75.75 0 000 1.06l11.65 11.65a.75.75 0 001.06 0l23.28-23.28a.74.74 0 000-1.06zM46.6 62.54L36 52l2.86-2.86 7.2 7.2a.75.75 0 001.06 0L66 37.46l2.86 2.86z"/>
    </svg>
  `}
        <p class="mt0 mb0 f3 tc">${((e,t,s)=>{const a=/<\d+>(.+?)<\/\d+>/gm,i=/<(\d+)>/gm,n=l.i18n.getMessage(e,t);let o=n,c=a.exec(n);for(;null!==c;){let e=i.exec(c[0]);for(;null!==e;)o=o.replace(c[0],`<span ${s}>${c[1]}</span>`),e=i.exec(n);c=a.exec(n)}const p=document.createElement("template");return p.innerHTML=o,p.content})("page_landingWelcome_welcome_peers",[t],'class="aqua fw6"')}</p>
      </div>
      <div class="mt3 f5 flex justify-center items-center">
        <button class="pv3 ph4 mh2 b navy br2 bn bg-white hover-bg-white-90 pointer" onclick=${s("/")}>${e.getMessage("page_landingWelcome_welcome_statusButton_text")}</button>
        <button class="pv3 ph4 mh2 b navy br2 bn bg-white hover-bg-white-90 pointer" onclick=${s("/files")}>${e.getMessage("page_landingWelcome_welcome_filesButton_text")}</button>
        <button class="pv3 ph4 mh2 b navy br2 bn bg-white hover-bg-white-90 pointer" onclick=${s("/peers")}>${e.getMessage("page_landingWelcome_welcome_peersButton_text")}</button>
      </div>
    </div>
  `,_=(e,t)=>{const s="mv0 white f5 lh-copy",a="aqua hover-white",i=null===t,o=l.runtime.getURL(r.hO);return n`
    <div class="w-80 mt0 flex flex-column transition-all ${i&&"state-unknown"}">
      <div class="mb4 flex flex-column justify-center items-center">
        ${((e=130)=>n`
<svg x="0px" y="0px" viewBox="0 0 100 100" width="${e}">
  <path fill="${"#f39021"}" d="M82.84 71.14L55.06 23a5.84 5.84 0 00-10.12 0L17.16 71.14a5.85 5.85 0 005.06 8.77h55.56a5.85 5.85 0 005.06-8.77zm-30.1-.66h-5.48V65h5.48zm0-10.26h-5.48V38.46h5.48z"/>
</svg>
`)()}
        <p class="mt0 mb0 f3 tc">${e.getMessage("page_landingWelcome_installSteps_notRunning_title")}</p>
      </div>
      ${p.DD?n`
          <p class="mb2 aqua b f4 lh-title">${e.getMessage("page_landingWelcome_installSteps_brave_title")}</p>
          <p class="${s}">${c("page_landingWelcome_installSteps_brave_install",[o],`target="_blank" class="${a}"`)}</p>`:null}
      <p class="mb2 aqua b f4 lh-title">${e.getMessage("page_landingWelcome_installSteps_desktop_title")}</p>
      <p class="${s}">${c("page_landingWelcome_installSteps_desktop_install",["https://github.com/ipfs-shipyard/ipfs-desktop#ipfs-desktop"],`target="_blank" class="${a}"`)}</p>
      <p class="mb2 aqua b f4 lh-title">${e.getMessage("page_landingWelcome_installSteps_cli_title")}</p>
      <p class="${s}">${c("page_landingWelcome_installSteps_cli_install",["https://docs.ipfs.tech/how-to/command-line-quick-start/"],`target="_blank" class="${a}"`)}</p>
    </div>
  `},f=e=>{const t="ttu tracked f6 fw4 teal mt0 mb3",s="mt0 mb4 lh-copy",l="link underline-under hover-aqua";return n`
    <div class="w-80 mt4 mb0 navy f5">

      <p class="${t}">${e.getMessage("page_landingWelcome_resources_title_new_ipfs")}</p>
      <ul class="${s}">
        <li>${c("page_landingWelcome_resources_new_ipfs_companion_features",["https://github.com/ipfs-shipyard/ipfs-companion#ipfs-companion-features"],`target="_blank" class="${l}"`)}</li>
        <li>${c("page_landingWelcome_resources_new_ipfs_concepts",["https://docs.ipfs.tech/concepts/how-ipfs-works/"],`target="_blank" class="${l}"`)}</li>
        <li>${c("page_landingWelcome_resources_new_ipfs_docs",["https://docs.ipfs.tech"],`target="_blank" class="${l}"`)}</li>
      </ul>

      <p class="${t}">${e.getMessage("page_landingWelcome_resources_title_build")}</p>
      <ul class="${s}">
        <li>${c("page_landingWelcome_resources_build_tutorials",["https://docs.ipfs.tech/how-to/"],`target="_blank" class="${l}"`)}</li>
        <li>${c("page_landingWelcome_resources_build_examples",["https://awesome.ipfs.tech"],`target="_blank" class="${l}"`)}</li>
      </ul>

      <p class="${t}">${e.getMessage("page_landingWelcome_resources_title_get_help")}</p>
      <ul class="${s}">
        <li>${c("page_landingWelcome_resources_get_help",["https://discuss.ipfs.tech"],`target="_blank" class="${l}"`)}</li>
      </ul>

      <p class="${t}">${e.getMessage("page_landingWelcome_resources_title_community")}</p>
      <ul class="${s}">
        <li>${c("page_landingWelcome_resources_community_contribute",["https://docs.ipfs.tech/community/contribute/ways-to-contribute/"],`target="_blank" class="${l}"`)}</li>
        <li>${c("page_landingWelcome_resources_community_translate",["https://www.transifex.com/ipfs/public/"],`target="_blank" class="${l}"`)}</li>
        <li>${c("page_landingWelcome_resources_community_resources",["https://docs.ipfs.tech/community/"],`target="_blank" class="${l}"`)}</li>
    </ul>
    </div>
  `},d=e=>{const t="relative overflow-hidden br2 o-70 glow",s=180,l=()=>n`
    <div class="absolute absolute--fill bg-navy o-70"></div>
  `,a=()=>n`
    <svg class="aspect-ratio--object" x="0px" y="0px" viewBox="-90 -60 ${240} ${s}">
      <g fill="${g}">
        <polygon points="43,30 23,40 23,20" />
      </g>
    </svg>
  `;return n`
    <div class="w-80 flex flex-column flex-row-ns justify-between-ns aqua f5">
      <div class="flex flex-column mr1">
        <p class="ttu tracked f6 fw4 teal mt0 mb3">${e.getMessage("page_landingWelcome_videos_why_ipfs")}</p>
        <a class="${t}" style="height: ${s}px" href="https://www.youtube.com/watch?feature=player_embedded&v=zE_WSLbqqvo" target="_blank">
          <img width="${240}" height="${s}" src="https://ipfs.io/ipfs/QmS4Ae3WBzkaANSPD82Dsax8QuJQpS4TEfaC53FMPkdxMA" alt="${e.getMessage("page_landingWelcome_videos_why_ipfs")}" />
          ${l()}
          ${a()}
        </a>
      </div>

      <div class="flex flex-column">
        <p class="ttu tracked f6 fw4 teal mt0 mb3">${e.getMessage("page_landingWelcome_videos_how_ipfs_works")}</p>
        <a class="${t}" style="height: ${s}px" href="https://www.youtube.com/watch?feature=player_embedded&v=0IGzEYixJHk" target="_blank">
          <img width="${240}" height="${s}" src="https://ipfs.io/ipfs/QmP5uNwDjYZmoLxw8zJeeheSJEnBKYpFn4uuEQQWFYGKvM" alt="${e.getMessage("page_landingWelcome_videos_how_ipfs_works")}" />
          ${l()}
          ${a()}
        </a>
      </div>
    </div>
  `},h=e=>{const t="flex flex-column items-center navy link underline-under hover-aqua";return n`
    <div class="w-80 mv4 navy f6">
      <p class="ttu tracked f6 fw4 teal mt0 mb3">${e.getMessage("page_landingWelcome_projects_title")}</p>

      <div class="flex justify-between-ns">
        <a class="${t}" href="https://multiformats.io/" target="_blank">
          <img width="${80}" src="${"../../../images/multiformats.svg"}" alt="Multiformats Logo">
          <p>Multiformats</p>
        </a>

        <a class="${t}" href="https://ipld.io/" target="_blank">
          <img width="${80}" src="${"../../../images/ipld.svg"}" alt="IPLD Logo">
          <p>IPLD</p>
        </a>

        <a class="${t}" href="https://libp2p.io/" target="_blank">
        <img width="${80}" src="${"../../../images/libp2p.svg"}" alt="libp2p Logo">
          <p>libp2p</p>
        </a>
      </div>
    </div>
  `},$=a();var b;$.use((0,i.Z)(l.i18n,l.runtime)),$.route("*",(b=l.i18n,function(e,t){const{isIpfsOnline:s,peerCount:l}=e;return document.title=b.getMessage("page_landingWelcome_title"),n`
      <div class="flex flex-column flex-row-l">
        <div id="left-col" class="min-vh-100 flex flex-column justify-center items-center bg-navy white">
          ${m(b,s)}
          ${s?u(b,l,(e=>()=>t("openWebUi",e))):_(b,s)}
        </div>

        <div id="right-col" class="min-vh-100 w-100 flex flex-column justify-around items-center">
          ${f(b)}
          ${d(b)}
          ${h(b)}
        </div>
      </div>
    `})),$.mount("#root")}},s={};function l(e){var a=s[e];if(void 0!==a)return a.exports;var i=s[e]={exports:{}};return t[e].call(i.exports,i,i.exports,l),i.exports}l.m=t,e=[],l.O=(t,s,a,i)=>{if(!s){var n=1/0;for(r=0;r<e.length;r++){for(var[s,a,i]=e[r],o=!0,c=0;c<s.length;c++)(!1&i||n>=i)&&Object.keys(l.O).every((e=>l.O[e](s[c])))?s.splice(c--,1):(o=!1,i<n&&(n=i));if(o){e.splice(r--,1);var p=a();void 0!==p&&(t=p)}}return t}i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[s,a,i]},l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=516,(()=>{var e={516:0};l.O.j=t=>0===e[t];var t=(t,s)=>{var a,i,[n,o,c]=s,p=0;if(n.some((t=>0!==e[t]))){for(a in o)l.o(o,a)&&(l.m[a]=o[a]);if(c)var r=c(l)}for(t&&t(s);p<n.length;p++)i=n[p],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(r)},s=self.webpackChunkipfs_companion=self.webpackChunkipfs_companion||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var a=l.O(void 0,[297],(()=>l(6550)));a=l.O(a)})();