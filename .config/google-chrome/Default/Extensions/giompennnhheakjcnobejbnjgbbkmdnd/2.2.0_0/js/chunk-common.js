(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{4360:function(e,t,o){"use strict";o("2532"),o("2ca0");var c=o("2b0e"),a=o("bc3a"),s=o.n(a),i=o("aced");o("0481"),o("4069"),o("b680"),o("a1f0"),o("ddb0");function n(e){if(e.startsWith("[")||e.startsWith("{")){try{return JSON.parse(e),!0}catch(t){}return!1}return!1}function l(e){const t=/%[0-9a-fA-F]{2}/g,o=[...e.matchAll(t)].flat();if(0===o.length)return!1;try{return o.forEach(e=>{decodeURIComponent(e)}),!0}catch(c){return!1}}function r(e){const t=e.map(e=>[e.key,e.value]).flat().join(""),o=new Blob([t]).size,c=(o/1024).toFixed(2),a=(o/1024/1024).toFixed(2);return a>1?a+"Mb":c+"kb"}function u(e){try{const t={};t[e.origin]={favorites:e.favorites,checked:e.checked,protection:e.protection},chrome.storage.sync.set(t,(function(){}))}catch(t){}}function d(e){let t=e.secure?"https://":"http://";return"."===e.domain.charAt(0)&&(t+="www"),t+e.domain+e.path}function p(e,t,o,c){e.forEach(e=>{e._canBeDeleted=!0}),t.forEach(t=>{const o=e.findIndex(e=>e.key===t.key&&"local"===e.type);-1!==o?e[o].value!==t.value?e.splice(o,1,t):delete e[o]._canBeDeleted:e.splice(0,0,t)}),o.forEach(t=>{const o=e.findIndex(e=>e.key===t.key&&"session"===e.type);-1!==o?e[o].value!==t.value?e.splice(o,1,t):delete e[o]._canBeDeleted:e.splice(0,0,t)}),c.forEach(t=>{const o=e.findIndex(e=>e.key===t.key&&"cookie"===e.type);-1!==o?e[o].value!==t.value?e.splice(o,1,t):delete e[o]._canBeDeleted:e.splice(0,0,t)});for(let a=0;a<e.length;a++)!0===e[a]._canBeDeleted&&(delete e[a]._canBeDeleted,e.splice(a,1),a--)}function k(e,t){return t?e.filter(e=>-1!==e.key.indexOf(t)||-1!==e.value.indexOf(t)):e}let y=0,h=!1;const m=[];t["a"]={state:{origin:"",domain:"",cookie:[],local:[],session:[],favorites:{},decodeUrl:{},protection:{},checked:["local"],checkedRows:[],keyword:"",isPopup2:!1,tabId:"",status:{action:null,key:null,type:null,value:null,json:null,cookie:null,isSearching:!1},club:{activated:!1,expiration:null}},getters:{tableData:e=>{if(0===m.length){if(e.checked.includes("local")){const t=k(e.local,e.keyword);t.forEach(e=>{m.push(e)})}if(e.checked.includes("session")){const t=k(e.session,e.keyword);t.forEach(e=>{m.push(e)})}if(e.checked.includes("cookie")){const t=k(e.cookie,e.keyword);t.forEach(e=>{m.push(e)})}}else p(m,e.checked.includes("local")?k(e.local,e.keyword):[],e.checked.includes("session")?k(e.session,e.keyword):[],e.checked.includes("cookie")?k(e.cookie,e.keyword):[]);return m.forEach(t=>{const o=t.type,c=t.key;t._value=e.decodeUrl[`${o}_${c}`]?decodeURIComponent(t.value):t.value,t._json=n(t._value),t._urlEncoded=l(t.value)}),m.sort((e,t)=>e.key<t.key?-1:e.key>t.key?1:0).sort((e,t)=>{const o=e.type,c=t.type;return"local"===o&&"session"===c?-1:"session"===o&&"local"===c?1:"local"===o&&"cookie"===c?-2:"cookie"===o&&"local"===c?2:"session"===o&&"cookie"===c?-1:"cookie"===o&&"session"===c?1:0}).sort((t,o)=>{const c=e.favorites[`${t.type}_${t.key}`],a=e.favorites[`${o.type}_${o.key}`];return c&&!a?-1:!c&&a?1:0}),m},local:e=>e.local,session:e=>e.session,cookie:e=>e.cookie,favorites:e=>e.favorites,decodeUrl:e=>e.decodeUrl,localSize:e=>r(e.local),sessionSize:e=>r(e.session),cookieSize:e=>r(e.cookie),filterItem:e=>t=>{const{type:o,key:c}=t;return e[o].filter(e=>e.key===c)},displayType:e=>"cookie"===e.status.type?e.status.type:e.status.type+" storage",isClub:e=>!0===e.club.activated&&null!==e.club.expiration&&e.club.expiration>Date.now()&&e.club.expiration<Date.now()+6048e5,clubExpired:e=>!0===e.club.activated&&null!==e.club.expiration&&e.club.expiration<Date.now(),isLocking:e=>t=>{const{key:o,type:c}=t;return Object.prototype.hasOwnProperty.call(e.protection,`${c}_${o}`)}},mutations:{setStorage:(e,t)=>{const{local:o,session:c}=t;e.local=o,e.session=c},enableUrlDecoding:(e,t)=>{const{type:o,key:a,enable:s}=t;!0===s?c["a"].set(e.decodeUrl,`${o}_${a}`,!0):c["a"].delete(e.decodeUrl,`${o}_${a}`)},addFavorites:(e,t)=>{const{type:o,key:a}=t;c["a"].set(e.favorites,`${o}_${a}`,!0)},removeFavorites:(e,t)=>{const{type:o,key:a}=t;c["a"].delete(e.favorites,`${o}_${a}`)},activateClub:e=>{e.club.activated=!0,e.club.expiration=Date.now()+6048e5;try{chrome.storage.sync.set({club:e.club},()=>{})}catch(t){}},deactivateClub:e=>{e.club.activated=!1,e.club.expiration=null;try{chrome.storage.sync.set({club:e.club},()=>{})}catch(t){}},lock:(e,t)=>{const{type:o,key:c}=t;e.protection[`${o}_${c}`]=e[o].filter(e=>e.key===c)[0].value},unlock:(e,t)=>{const{type:o,key:a}=t;c["a"].delete(e.protection,`${o}_${a}`)},deleteCookie:(e,t)=>{c["a"].delete(e.cookie,t)},insertCookie:(e,t)=>{const{index:o,key:c,value:a,cookie:s}=t;e.cookie.splice(o,0,{key:c,value:a,type:"cookie",cookie:s})},updateCookie:(e,t)=>{const{key:o,value:c,cookie:a,index:s}=t;e.cookie[s].key=o,e.cookie[s].value=c,e.cookie[s].cookie=a}},actions:{setStorage:({commit:e},t)=>{const{timestamp:o,local:c,session:a}=t;(c||a)&&o>y&&(e("setStorage",t),y=o)},chromeSetStorage:({state:e})=>{u(e)},toggleFavorites:({state:e,commit:t},o)=>{const{type:c,key:a}=o;e.favorites[`${c}_${a}`]?t("removeFavorites",o):t("addFavorites",o),u(e)},toggleLock:({state:e,commit:t},o)=>{const{type:c,key:a}=o;Object.prototype.hasOwnProperty.call(e.protection,`${c}_${a}`)?t("unlock",o):t("lock",o),u(e)},verifyClubReceipt:async({commit:e},t)=>{const o=document.referrer.startsWith("http://localhost")?"http://localhost:8968/api/swoosh-storage-specialist/club?receipt=":"http://steampunck.herokuapp.com/api/swoosh-storage-specialist/club?receipt=";try{const c=await s.a.put(`${o}${t}`);c.data.result?e("activateClub"):e("deactivateClub")}catch(c){e("deactivateClub")}finally{location.hash=""}},chromeUpdate:({dispatch:e,state:t},o)=>{const{origin:c}=o,a={active:!0,currentWindow:!0};chrome.tabs.query(a,a=>{a.length&&a[0].url?a.length&&a[0].url.startsWith(c)&&e("setStorage",o):t.origin===c&&e("setStorage",o)})},chromeInitStorage:({state:e})=>{h||chrome.storage.sync.get([e.origin,"club"],t=>{t&&(t[e.origin]?(e.favorites=t[e.origin].favorites||e.favorites,e.checked=t[e.origin].checked||["local","session","cookie"],e.protection=t[e.origin].protection||e.protection):e.checked=["local","session","cookie"],t.club&&(e.club=t.club)),h=!0})},chromeRemove:({state:e},t)=>{const{key:o,type:c}=t;try{if("cookie"===c){const t=e.cookie.filter(e=>e.key===o)[0].cookie;chrome.cookies.remove({name:t.name,url:d(t)},e=>{})}else chrome.tabs.query({active:!0,currentWindow:!0},t=>{if(t.length){const a=t[0],s=e.isPopup2?e.tabId:a.id;chrome.tabs.sendMessage(s,{source:"popup",event:"remove",type:c,key:o})}})}catch(a){}e.status.action=null,e.status.key=null,e.status.type=null},chromeRemoveChecked:({dispatch:e},t)=>{t.forEach(t=>{e("chromeRemove",t)})},chromeRemoveAll:({state:e},t)=>{const{type:o}=t;try{"cookie"===o?e.cookie.map(e=>e).forEach(e=>{chrome.cookies.remove({name:e.cookie.name,url:d(e.cookie)},e=>{})}):chrome.tabs.query({active:!0,currentWindow:!0},t=>{if(t.length){const c=t[0],a=e.isPopup2?e.tabId:c.id;chrome.tabs.sendMessage(a,{source:"popup",event:"removeAll",type:o})}})}catch(c){}e.status.action=null,e.status.key=null,e.status.type=null},chromeEdit:({state:e},t)=>{const{key:o,type:c,value:a,domain:s,path:n,secure:l,httpOnly:r,sameSite:u,expirationDate:p}=t;try{if("cookie"===c){const t=e.cookie.filter(e=>e.key===o)[0].cookie;chrome.cookies.set({name:o,value:a,domain:s,path:n,secure:l,httpOnly:r,sameSite:u,expirationDate:p,storeId:t.storeId,url:d(t)},e=>{e?i["a"].open({message:`Cookie ${e.name} updated`,type:"is-success"}):i["a"].open({message:"Error: "+chrome.runtime.lastError.message,type:"is-danger"})})}else chrome.tabs.query({active:!0,currentWindow:!0},t=>{if(t.length){const s=t[0],i=e.isPopup2?e.tabId:s.id;chrome.tabs.sendMessage(i,{source:"popup",event:"edit",type:c,key:o,value:a})}})}catch(k){}e.status.action=null,e.status.key=null,e.status.type=null,e.status.value=null,e.status.index=null},chromeAdd:({state:e},t)=>{const{addKey:o,addValue:c,addType:a}=t;if(o){try{const t=o,s=c,i=a;"cookie"===i?chrome.cookies.set({name:t,value:s,domain:-1===e.domain.indexOf(".")?e.domain:"."+e.domain,url:d({secure:!1,domain:e.domain,path:"/"})},e=>{}):chrome.tabs.query({active:!0,currentWindow:!0},o=>{if(o.length){const c=o[0],a=e.isPopup2?e.tabId:c.id;chrome.tabs.sendMessage(a,{source:"popup",event:"add",type:i,key:t,value:s})}})}catch(s){}e.status.action=null,e.status.key=null,e.status.type=null,e.status.value=null}},chromeInitCookies:({state:e,commit:t},o)=>{const{domain:c,hostname:a}=o,s=[c,a,"."+c,"."+a];chrome.cookies.getAll({},t=>{e.cookie=t.filter(e=>s.includes(e.domain)).map(e=>({key:e.name,value:e.value,type:"cookie",cookie:e})).sort((e,t)=>e.key<t.key?-1:e.key>t.key?1:0)}),chrome.cookies.onChanged.addListener(({cookie:o,cause:c,removed:a})=>{if(s.includes(o.domain)){const s=e.cookie.findIndex(e=>e.key===o.name&&e.cookie.path===o.path&&e.cookie.domain===o.domain),i=-1===s?e.cookie.map(e=>e.key).concat([o.name]).sort().findIndex(e=>e===o.name):null;a&&["evicted","expired","explicit"].includes(c)?t("deleteCookie",s):-1!==s?t("updateCookie",{index:s,key:o.name,value:o.value,cookie:o}):t("insertCookie",{index:i,key:o.name,value:o.value,cookie:o})}})}}}},4369:function(e,t,o){},4570:function(e,t,o){"use strict";var c=o("ec26");t["a"]={init:()=>{let e;(function(e,t,o,c,a,s,i){e["GoogleAnalyticsObject"]=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,s=t.createElement(o),i=t.getElementsByTagName(o)[0],s.async=!0,s.src=c,i.parentNode.insertBefore(s,i)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");try{chrome.storage.local.get(["uuid"],(function(t){t.uuid?e=t.uuid:(e=Object(c["a"])(),chrome.storage.local.set({uuid:e})),window.ga("create","UA-8332254-6",{storage:"none",clientId:e}),window.ga("set","checkProtocolTask",null)}))}catch(t){window.ga("create","UA-8332254-6",{storage:"none"}),window.ga("set","checkProtocolTask",null)}},page:e=>{setTimeout(()=>{window.ga("send","pageview",e,{title:e})},800)},event:(e,t,o,c)=>{window.ga("send","event",e,t,o,c)}}},f22e:function(e,t,o){"use strict";var c=o("4369"),a=o.n(c);a.a}}]);