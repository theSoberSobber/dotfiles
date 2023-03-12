(()=>{"use strict";var e,t={4222:(e,t,s)=>{var n=s(3150),i=s(2490),o=s(6566),a=s(9159);function l({active:e,onOptionChange:t}){const s=t("active");return o`
    <form class="db b mb3 bg-aqua-muted charcoal">
      <label for="active" class="dib pa3 flex items-center pointer ${e?"":"charcoal bg-gray-muted br2"}">
        ${(0,a.Z)({id:"active",checked:e,onchange:s,style:"mr3"})}
        ${n.i18n.getMessage("panel_headerActiveToggleTitle")}
      </label>
    </form>
  `}var d=s(5034);var r=s(3637);const p=/^https:\/\/|^http:\/\/localhost|^http:\/\/127.0.0.1|^http:\/\/\[::1\]/;async function c(e){const{name:t,version:s}=await function(e){return e&&e.runtime&&e.runtime.getBrowserInfo?e.runtime.getBrowserInfo():Promise.resolve({})}(e),n=t&&(t.includes("Firefox")||t.includes("Fennec")),i=!!(e&&e.protocol&&e.protocol.registerStringProtocol),o=await function(e){return e&&e.runtime&&e.runtime.getPlatformInfo?e.runtime.getPlatformInfo():Promise.resolve()}(e),a=!!o&&"android"===o.os;return Object.freeze({browser:e,brave:d.DD,isFirefox:n,isAndroid:a,requiresXHRCORSfix:!!(n&&s&&s.startsWith("68")),hasNativeProtocolHandler:i})}const g=i();g.use((function(e,t){e.options=r.wH;const s=async()=>{const s=await c(n);e.withNodeFromBrave=s.brave&&await s.brave.getIPFSEnabled(),e.options=await async function(){const e=await n.storage.local.get();return Object.keys(r.wH).reduce(((t,s)=>(t[s]=null==e[s]?r.wH[s]:e[s],t)),{})}(),t.emit("render")};t.on("DOMContentLoaded",(async()=>{n.runtime.sendMessage({telemetry:{trackView:"options"}}),s(),n.storage.onChanged.addListener(s)})),t.on("optionChange",(({key:e,value:t})=>n.storage.local.set({[e]:t}))),t.on("optionsReset",(()=>n.storage.local.set(r.wH)))})),g.route("*",(function(e,t){const s=(e,s)=>n=>{n.preventDefault();const i="checkbox"===n.target.type?n.target.checked:n.target.value;if(!n.target.reportValidity())return console.warn(`[ipfs-companion] Invalid value for ${e}: ${i}`);t("optionChange",{key:e,value:s?s(i):i}),s&&t("render")};return e.options.active?o`
    <div class="sans-serif">
  ${l({active:e.options.active,onOptionChange:s})}
  ${function({ipfsNodeType:e,ipfsNodeConfig:t,onOptionChange:s,withNodeFromBrave:i}){const a=s("ipfsNodeType"),l=s("ipfsNodeConfig"),r=e===d.E8?"brave":"";return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${n.i18n.getMessage("option_header_nodeType")}</h2>
        <div class="flex-row-ns pb0-ns">
          <label for="ipfsNodeType">
            <dl>
              <dt>${n.i18n.getMessage("option_ipfsNodeType_title")}</dt>
              <dd>
                <p>${n.i18n.getMessage("option_ipfsNodeType_external_description")}</p>
                ${i?o`<p>${n.i18n.getMessage("option_ipfsNodeType_brave_description")}</p>`:null}
                <p>${n.i18n.getMessage("option_ipfsNodeType_embedded_description")}</p>
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/companion-node-types/" target="_blank">
                  ${n.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <select id="ipfsNodeType" name='ipfsNodeType' class="self-center-ns bg-white navy ${r}" onchange=${a}>
            <option
              value='external'
              selected=${"external"===e}>
              ${n.i18n.getMessage("option_ipfsNodeType_external")}
            </option>
            ${i?o`<option
                  value='external:brave'
                  selected=${"external:brave"===e}>
                  ${n.i18n.getMessage("option_ipfsNodeType_brave")}
                </option>`:null}
            <option
              value='embedded'
              selected=${"embedded"===e}>
              ${n.i18n.getMessage("option_ipfsNodeType_embedded")} (${n.i18n.getMessage("option_experimental")})
            </option>
          </select>
        </div>
        ${e.startsWith("embedded")?o`<div class="flex-row-ns pb0-ns">
            <label for="ipfsNodeConfig">
              <dl>
                <dt>${n.i18n.getMessage("option_ipfsNodeConfig_title")}</dt>
                <dd>${n.i18n.getMessage("option_ipfsNodeConfig_description")}</dd>
              </dl>
            </label>
            <textarea
              class="bg-white navy self-center-ns"
              spellcheck="false"
              id="ipfsNodeConfig"
              rows="${Math.min((t.match(/\n/g)||[]).length+1,30)}"
              onchange=${l}>${t}</textarea>
          </div>`:null}
      </fieldset>
    </form>
  `}({ipfsNodeType:e.options.ipfsNodeType,ipfsNodeConfig:e.options.ipfsNodeConfig,withNodeFromBrave:e.withNodeFromBrave,onOptionChange:s})}
  ${e.options.ipfsNodeType.startsWith("external")?function({ipfsNodeType:e,ipfsApiUrl:t,ipfsApiPollMs:s,automaticMode:i,onOptionChange:l}){const p=l("ipfsApiUrl",(e=>(0,r.EK)(e,{useLocalhostName:!1}))),c=l("ipfsApiPollMs"),g=l("automaticMode"),f="external"===e,u=e===d.E8?"brave":"";return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${n.i18n.getMessage("option_header_api")}</h2>
        <div class="flex-row-ns pb0-ns">
          <label for="ipfsApiUrl">
            <dl>
              <dt>${n.i18n.getMessage("option_ipfsApiUrl_title")}</dt>
              <dd>${n.i18n.getMessage("option_ipfsApiUrl_description")}</dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns ${u}"
            id="ipfsApiUrl"
            type="url"
            inputmode="url"
            required
            pattern="^https?://[^/]+/?$"
            spellcheck="false"
            title="${n.i18n.getMessage(f?"option_hint_url":"option_hint_readonly")}"
            onchange=${p}
            ${f?"":"disabled"}
            value=${t} />
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="ipfsApiPollMs">
            <dl>
              <dt>${n.i18n.getMessage("option_ipfsApiPollMs_title")}</dt>
              <dd>${n.i18n.getMessage("option_ipfsApiPollMs_description")}</dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="ipfsApiPollMs"
            type="number"
            inputmode="numeric"
            min="1000"
            max="60000"
            step="1000"
            required
            onchange=${c}
            value=${s} />
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="automaticMode">
            <dl>
              <dt>${n.i18n.getMessage("option_automaticMode_title")}</dt>
              <dd>${n.i18n.getMessage("option_automaticMode_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"automaticMode",checked:i,onchange:g})}</div>
        </div>
      </fieldset>
    </form>
  `}({ipfsNodeType:e.options.ipfsNodeType,ipfsApiUrl:e.options.ipfsApiUrl,ipfsApiPollMs:e.options.ipfsApiPollMs,automaticMode:e.options.automaticMode,onOptionChange:s}):null}
  ${function({ipfsNodeType:e,customGatewayUrl:t,useCustomGateway:s,useSubdomains:i,disabledOn:l,enabledOn:c,publicGatewayUrl:g,publicSubdomainGatewayUrl:f,onOptionChange:u}){const b=u("customGatewayUrl",(e=>(0,r.EK)(e,{useLocalhostName:i}))),m=u("useCustomGateway"),h=u("useSubdomains"),_=u("publicGatewayUrl",r.EK),v=u("publicSubdomainGatewayUrl",r.EK),y=u("disabledOn",r.W7),$=u("enabledOn",r.W7),w=!p.test(t),M="embedded"!==e,k="external"===e,P=e===d.E8?"brave":"";return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${n.i18n.getMessage("option_header_gateways")}</h2>
          <div class="flex-row-ns pb0-ns">
            <label for="publicGatewayUrl">
              <dl>
                <dt>${n.i18n.getMessage("option_publicGatewayUrl_title")}</dt>
                <dd>${n.i18n.getMessage("option_publicGatewayUrl_description")}</dd>
              </dl>
            </label>
            <input
              class="bg-white navy self-center-ns"
              id="publicGatewayUrl"
              type="url"
              inputmode="url"
              required
              pattern="^https?://[^/]+/?$"
              spellcheck="false"
              title="${n.i18n.getMessage("option_hint_url")}"
              onchange=${_}
              value=${g} />
          </div>
          <div class="flex-row-ns pb0-ns">
            <label for="publicSubdomainGatewayUrl">
              <dl>
                <dt>${n.i18n.getMessage("option_publicSubdomainGatewayUrl_title")}</dt>
                <dd>
                  ${n.i18n.getMessage("option_publicSubdomainGatewayUrl_description")}
                  <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/address-ipfs-on-web/#subdomain-gateway" target="_blank">
                    ${n.i18n.getMessage("option_legend_readMore")}
                  </a></p>
                </dd>
              </dl>
            </label>
            <input
              class="bg-white navy self-center-ns"
              id="publicSubdomainGatewayUrl"
              type="url"
              inputmode="url"
              required
              pattern="^https?://[^/]+/?$"
              spellcheck="false"
              title="${n.i18n.getMessage("option_hint_url")}"
              onchange=${v}
              value=${f} />
          </div>
          ${M?o`<div class="flex-row-ns pb0-ns">
              <label for="customGatewayUrl">
                <dl>
                  <dt>${n.i18n.getMessage("option_customGatewayUrl_title")}</dt>
                  <dd>${n.i18n.getMessage("option_customGatewayUrl_description")}
                    ${w?o`<p class="red i">${n.i18n.getMessage("option_customGatewayUrl_warning")}</p>`:null}
                  </dd>
                </dl>
              </label>
              <input
                class="bg-white navy self-center-ns ${P}"
                id="customGatewayUrl"
                type="url"
                inputmode="url"
                required
                pattern="^https?://[^/]+/?$"
                spellcheck="false"
                title="${n.i18n.getMessage(k?"option_hint_url":"option_hint_readonly")}"
                onchange=${b}
                ${k?"":"disabled"}
                value=${t} />
            </div>`:null}
          ${M?o`<div class="flex-row-ns pb0-ns">
              <label for="useCustomGateway">
                <dl>
                  <dt>${n.i18n.getMessage("option_useCustomGateway_title")}</dt>
                  <dd>${n.i18n.getMessage("option_useCustomGateway_description")}</dd>
                </dl>
              </label>
              <div class="self-center-ns">${(0,a.Z)({id:"useCustomGateway",checked:s,onchange:m})}</div>
            </div>`:null}
          ${M?o`<div class="flex-row-ns pb0-ns">
              <label for="useSubdomains">
                <dl>
                  <dt>${n.i18n.getMessage("option_useSubdomains_title")}</dt>
                  <dd>
                    ${n.i18n.getMessage("option_useSubdomains_description")}
                    <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/address-ipfs-on-web/#subdomain-gateway" target="_blank">
                      ${n.i18n.getMessage("option_legend_readMore")}
                    </a></p>
                  </dd>
                </dl>
              </label>
              <div class="self-center-ns">${(0,a.Z)({id:"useSubdomains",checked:i,onchange:h})}</div>
            </div>`:null}
          ${M?o`<div class="flex-row-ns pb0-ns">
              <label for="disabledOn">
                <dl>
                  <dt>${n.i18n.getMessage("option_disabledOn_title")}</dt>
                  <dd>${n.i18n.getMessage("option_disabledOn_description")}</dd>
                </dl>
              </label>
              <textarea
                class="bg-white navy self-center-ns"
                id="disabledOn"
                spellcheck="false"
                onchange=${y}
                rows="${Math.min(l.length+1,10)}"
                >${(0,r.qA)(l)}</textarea>
            </div>
            <div class="flex-row-ns pb0-ns">
              <label for="enabledOn">
                <dl>
                  <dt>${n.i18n.getMessage("option_enabledOn_title")}</dt>
                  <dd>${n.i18n.getMessage("option_enabledOn_description")}</dd>
                </dl>
              </label>
              <textarea
                class="bg-white navy self-center-ns"
                id="enabledOn"
                spellcheck="false"
                onchange=${$}
                rows="${Math.min(c.length+1,10)}"
                >${(0,r.qA)(c)}</textarea>
            </div>`:null}

      </fieldset>
    </form>
  `}({ipfsNodeType:e.options.ipfsNodeType,customGatewayUrl:e.options.customGatewayUrl,useCustomGateway:e.options.useCustomGateway,useSubdomains:e.options.useSubdomains,publicGatewayUrl:e.options.publicGatewayUrl,publicSubdomainGatewayUrl:e.options.publicSubdomainGatewayUrl,disabledOn:e.options.disabledOn,enabledOn:e.options.enabledOn,onOptionChange:s})}
  ${function({importDir:e,openViaWebUI:t,preloadAtPublicGateway:s,onOptionChange:i}){const l=i("importDir"),d=i("openViaWebUI"),r=i("preloadAtPublicGateway");return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${n.i18n.getMessage("option_header_fileImport")}</h2>
        <div class="flex-row-ns pb0-ns">
          <label for="importDir">
            <dl>
              <dt>${n.i18n.getMessage("option_importDir_title")}</dt>
              <dd>
                ${n.i18n.getMessage("option_importDir_description")}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/concepts/file-systems/#mutable-file-system-mfs" target="_blank">
                  ${n.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="importDir"
            type="text"
            pattern="^\/(.*)"
            required
            onchange=${l}
            value=${e} />
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="openViaWebUI">
            <dl>
              <dt>${n.i18n.getMessage("option_openViaWebUI_title")}</dt>
              <dd>${n.i18n.getMessage("option_openViaWebUI_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"openViaWebUI",checked:t,onchange:d})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="preloadAtPublicGateway">
            <dl>
              <dt>${n.i18n.getMessage("option_preloadAtPublicGateway_title")}</dt>
              <dd>${n.i18n.getMessage("option_preloadAtPublicGateway_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"preloadAtPublicGateway",checked:s,onchange:r})}</div>
        </div>
      </fieldset>
    </form>
  `}({importDir:e.options.importDir,openViaWebUI:e.options.openViaWebUI,preloadAtPublicGateway:e.options.preloadAtPublicGateway,onOptionChange:s})}
  ${function({dnslinkPolicy:e,dnslinkDataPreload:t,dnslinkRedirect:s,onOptionChange:i}){const l=i("dnslinkPolicy"),d=i("dnslinkRedirect"),r=i("dnslinkDataPreload");return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${n.i18n.getMessage("option_header_dnslink")}</h2>
        <div class="flex-row-ns pb0-ns">
          <label for="dnslinkPolicy">
            <dl>
              <dt>${n.i18n.getMessage("option_dnslinkPolicy_title")}</dt>
              <dd>
                ${n.i18n.getMessage("option_dnslinkPolicy_description")}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/dnslink-companion/" target="_blank">
                  ${n.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <select id="dnslinkPolicy" name='dnslinkPolicy' class="self-center-ns bg-white navy" onchange=${l}>
            <option
              value='false'
              selected=${"false"===String(e)}>
              ${n.i18n.getMessage("option_dnslinkPolicy_disabled")}
            </option>
            <option
              value='best-effort'
              selected=${"best-effort"===e}>
              ${n.i18n.getMessage("option_dnslinkPolicy_bestEffort")}
            </option>
            <option
              value='enabled'
              selected=${"enabled"===e}>
              ${n.i18n.getMessage("option_dnslinkPolicy_enabled")}
            </option>
          </select>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="dnslinkDataPreload">
            <dl>
              <dt>${n.i18n.getMessage("option_dnslinkDataPreload_title")}</dt>
              <dd>${n.i18n.getMessage("option_dnslinkDataPreload_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"dnslinkDataPreload",checked:t,disabled:s,onchange:r})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="dnslinkRedirect">
            <dl>
              <dt>${n.i18n.getMessage("option_dnslinkRedirect_title")}</dt>
              <dd>
                ${n.i18n.getMessage("option_dnslinkRedirect_description")}
                ${s?o`<p class="red i">${n.i18n.getMessage("option_dnslinkRedirect_warning")}</p>`:null}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/address-ipfs-on-web/#subdomain-gateway" target="_blank">
                  ${n.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"dnslinkRedirect",checked:s,onchange:d})}</div>
        </div>
      </fieldset>
    </form>
  `}({dnslinkPolicy:e.options.dnslinkPolicy,dnslinkDataPreload:e.options.dnslinkDataPreload,dnslinkRedirect:e.options.dnslinkRedirect,onOptionChange:s})}
  ${function({useLatestWebUI:e,displayNotifications:t,displayReleaseNotes:s,catchUnhandledProtocols:i,linkify:l,recoverFailedHttpRequests:d,detectIpfsPathHeader:r,logNamespaces:p,onOptionChange:c}){const g=c("displayNotifications"),f=c("displayReleaseNotes"),u=c("useLatestWebUI"),b=c("catchUnhandledProtocols"),m=c("linkify"),h=c("recoverFailedHttpRequests"),_=c("detectIpfsPathHeader");return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${n.i18n.getMessage("option_header_experiments")}</h2>
        <div class="mb2">${n.i18n.getMessage("option_experiments_warning")}</div>
        <div class="flex-row-ns pb0-ns">
          <label for="useLatestWebUI">
            <dl>
              <dt>${n.i18n.getMessage("option_useLatestWebUI_title")}</dt>
              <dd>${n.i18n.getMessage("option_useLatestWebUI_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"useLatestWebUI",checked:e,onchange:u})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="displayNotifications">
            <dl>
              <dt>${n.i18n.getMessage("option_displayNotifications_title")}</dt>
              <dd>${n.i18n.getMessage("option_displayNotifications_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"displayNotifications",checked:t,onchange:g})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="displayReleaseNotes">
            <dl>
              <dt>${n.i18n.getMessage("option_displayReleaseNotes_title")}</dt>
              <dd>${n.i18n.getMessage("option_displayReleaseNotes_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"displayReleaseNotes",checked:s,onchange:f})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="catchUnhandledProtocols">
            <dl>
              <dt>${n.i18n.getMessage("option_catchUnhandledProtocols_title")}</dt>
              <dd>${n.i18n.getMessage("option_catchUnhandledProtocols_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"catchUnhandledProtocols",checked:i,onchange:b})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="recoverFailedHttpRequests">
            <dl>
              <dt>${n.i18n.getMessage("option_recoverFailedHttpRequests_title")}</dt>
              <dd>${n.i18n.getMessage("option_recoverFailedHttpRequests_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"recoverFailedHttpRequests",checked:d,onchange:h})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="linkify">
            <dl>
              <dt>${n.i18n.getMessage("option_linkify_title")}</dt>
              <dd>${n.i18n.getMessage("option_linkify_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"linkify",checked:l,onchange:m})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="detectIpfsPathHeader">
            <dl>
              <dt>${n.i18n.getMessage("option_detectIpfsPathHeader_title")}</dt>
              <dd>${n.i18n.getMessage("option_detectIpfsPathHeader_description")}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/companion-x-ipfs-path-header/" target="_blank">
                  ${n.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"detectIpfsPathHeader",checked:r,onchange:_})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="logNamespaces">
            <dl>
              <dt>${n.i18n.getMessage("option_logNamespaces_title")}</dt>
              <dd>${n.i18n.getMessage("option_logNamespaces_description")}</dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="logNamespaces"
            type="text"
            required
            onchange=${c("logNamespaces")}
            value=${p} />
        </div>
      </fieldset>
    </form>
  `}({useLatestWebUI:e.options.useLatestWebUI,displayNotifications:e.options.displayNotifications,displayReleaseNotes:e.options.displayReleaseNotes,catchUnhandledProtocols:e.options.catchUnhandledProtocols,linkify:e.options.linkify,recoverFailedHttpRequests:e.options.recoverFailedHttpRequests,detectIpfsPathHeader:e.options.detectIpfsPathHeader,logNamespaces:e.options.logNamespaces,onOptionChange:s})}
  ${function({onOptionChange:e,...t}){return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${n.i18n.getMessage("option_header_telemetry")}</h2>
        <div class="mb2">
          <p>${n.i18n.getMessage("option_telemetry_disclaimer")}</p>
          <p>
            <a class="link underline hover-aqua" href="https://github.com/ipfs-shipyard/ignite-metrics/blob/main/docs/telemetry/COLLECTION_POLICY.md" target="_blank">
              ${n.i18n.getMessage("option_legend_readMore")}
            </a>
          </p>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="telemetryGroupMinimal">
            <dl>
              <dt>${n.i18n.getMessage("option_telemetryGroupMinimal_title")}</dt>
              <dd>
                <p>${n.i18n.getMessage("option_telemetryGroupMinimal_description")}</p>
              </dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,a.Z)({id:"telemetryGroupMinimal",checked:t.telemetryGroupMinimal,onchange:e("telemetryGroupMinimal")})}</div>
        </div>
      </fieldset>
    </form>
  `}({telemetryGroupMinimal:e.options.telemetryGroupMinimal,telemetryGroupMarketing:e.options.telemetryGroupMarketing,telemetryGroupPerformance:e.options.telemetryGroupPerformance,telemetryGroupTracking:e.options.telemetryGroupTracking,onOptionChange:s})}
  ${function({onOptionsReset:e}){return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${n.i18n.getMessage("option_header_reset")}</h2>
        <div class="flex-row-ns pb0-ns">
          <label for="resetAllOptions">
            <dl>
              <dt>${n.i18n.getMessage("option_resetAllOptions_title")}</dt>
              <dd>${n.i18n.getMessage("option_resetAllOptions_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns"><button id="resetAllOptions" class="Button transition-all sans-serif v-mid fw5 nowrap lh-copy bn br1 pa2 pointer focus-outline white bg-red white" onclick=${e}>${n.i18n.getMessage("option_resetAllOptions_title")}</button></div>
        </div>
      </fieldset>
    </form>
  `}({onOptionsReset:e=>{e.preventDefault(),t("optionsReset")}})}
    </div>
  `:o`
    <div class="sans-serif">
  ${l({active:e.options.active,onOptionChange:s})}
    </div>
    `})),g.mount("#root"),document.getElementById("header-text").innerText=n.i18n.getMessage("option_page_header"),document.title=n.i18n.getMessage("option_page_title")},6028:(e,t,s)=>{function n(e){const t=(...t)=>e(...t);return Object.defineProperty(t,"name",{value:`functionTimeout(${e.name||"<anonymous>"})`,configurable:!0}),t}function i(){return!1}s.d(t,{Z:()=>n,q:()=>i})}},s={};function n(e){var i=s[e];if(void 0!==i)return i.exports;var o=s[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,s,i,o)=>{if(!s){var a=1/0;for(p=0;p<e.length;p++){for(var[s,i,o]=e[p],l=!0,d=0;d<s.length;d++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](s[d])))?s.splice(d--,1):(l=!1,o<a&&(a=o));if(l){e.splice(p--,1);var r=i();void 0!==r&&(t=r)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[s,i,o]},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=407,(()=>{var e={407:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var i,o,[a,l,d]=s,r=0;if(a.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(d)var p=d(n)}for(t&&t(s);r<a.length;r++)o=a[r],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},s=self.webpackChunkipfs_companion=self.webpackChunkipfs_companion||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var i=n.O(void 0,[297],(()=>n(4222)));i=n.O(i)})();