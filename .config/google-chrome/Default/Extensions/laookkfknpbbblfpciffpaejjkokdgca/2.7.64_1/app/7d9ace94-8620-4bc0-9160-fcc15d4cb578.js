var fn_addin=function(s,a,e){var t=t||{};return t.styles=t.styles||{},t.commands=t.commands||{},t.dependencies=e||t.dependencies||{},t.styles.style=function(){},t.views=t.views||{},t.collect=t.collect||{},t.models=t.models||{},t.templates=t.templates||{},t.info={widget:!0,placeholderType:"metric",id:"dashlinks",class:"app-container dashlinks",region:"top-left",order:"prepend",after:".team-logo",addin:"7d9ace94-8620-4bc0-9160-fcc15d4cb578"},s.console.log(s.elapsed()+": "+t.info.id+" started"),t.templates=t.templates||{},t.templates.dashlinks=Handlebars.template({compiler:[8,">= 4.3.0"],main:function(e,a,t,s,i){var n,l,o=null!=a?a:e.nullContext||{},r=e.hooks.helperMissing,d=e.lookupProperty||function(e,a){if(Object.prototype.hasOwnProperty.call(e,a))return e[a]};return'<span class="app-dash dashlinks-icon-wrapper" data-momo-id="chromeTab" data-analytics-id="browser tab" data-place="dash" data-url="chrome-search://local-ntp/local-ntp.html" title="'+e.escapeExpression("function"==typeof(l=null!=(l=d(t,"browserName")||(null!=a?d(a,"browserName"):a))?l:r)?l.call(o,{name:"browserName",hash:{},data:i,loc:{start:{line:1,column:180},end:{line:1,column:195}}}):l)+' Tab">'+(null!=(n=(d(t,"browserIcon")||a&&d(a,"browserIcon")||r).call(o,"dashlinks-icon",{name:"browserIcon",hash:{},data:i,loc:{start:{line:1,column:201},end:{line:1,column:235}}}))?n:"")+'</span>\x3c!--\n--\x3e<span class="app-dash dashlinks-icon-wrapper" data-momo-id="apps" data-analytics-id="chrome apps" data-place="dash" data-url="chrome://apps" title="Apps"><svg class="dashlinks-icon icon-apps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3 3h6v6H3V3zm10 0h6v6h-6V3zm10 0h6v6h-6V3zM3 13h6v6H3v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6zM3 23h6v6H3v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6z"/></svg></span>\n'},useData:!0}),t.styles=t.styles||{},t.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML=".dashlinks{flex:0 0 auto;order:5}.dashlinks-icon-wrapper{height:100%;min-height:60px;max-height:var(--max-height);padding:0 var(--side-padding);display:inline-flex;flex-direction:row;align-items:center;opacity:.85;cursor:pointer;filter:drop-shadow(0 1px 5px rgba(0, 0, 0, .1));transition:opacity .1s ease}.dashlinks-icon-wrapper:hover{opacity:1}.dashlinks-icon-wrapper:active{opacity:.9;transition-duration:0s}.dashlinks .dashlinks-icon{height:18px;width:18px;margin:0;fill:#fff!important;vertical-align:-4%}",document.getElementsByTagName("head")[0].appendChild(e)},t.views.DashLinks=Backbone.View.extend({template:t.templates.dashlinks,events:{"click .dashlinks-icon-wrapper":"handleClick"},initialize:function(){this.listenTo(s.models.bookmarksSettings,"change:appsLocation",this.checkOptionalLinks),this.listenTo(s.models.bookmarksSettings,"change:chromeTabLocation",this.checkOptionalLinks),this.render()},checkInclusion:function(e){var a=s.models.bookmarksSettings.get(e.data("momo-id")+"Location")===e.data("place");return a&&!e.is(":visible")?this.$el.append(e):a||e.remove(),a},checkOptionalLinks:function(){var a=this,t=!1;this.dashItems&&this.dashItems.forEach(function(e){t=a.checkInclusion(e)||t}),this.$el.toggleClass("app-container",t)},render:function(){if(!s.utils.isChromium())return this.triggerLoaded(),this;this.$el.html(this.template()),this.dashItems=[];var e=this;return this.$(".app-dash").each(function(){e.dashItems.push(a(this))}),this.checkOptionalLinks(),this.triggerLoaded(),this},triggerLoaded:function(){this.loadTriggered||(s.widgetManager.appReady(t.info.id),this.loadTriggered=!0)},handleClick:function(e){e.stopPropagation(),e.preventDefault();var a=e.delegatedTarget.getAttribute("data-analytics-id");a&&s.Analytics.capture(a+" click",{feature:"dashlinks"});var t=e.delegatedTarget.dataset.url||e.delegatedTarget.href;s.models.bookmarksSettings.get("openInNewTab")||e.metaKey?s.utils.getBrowser().tabs.create({url:t,active:!1}):s.utils.getBrowser().tabs.update({url:t})}}),t.styles.style(),t.views.dashlinks=s.widgetManager.handover("dashlinks",t.views.DashLinks,{region:"top-left",order:"prepend"}),t};m.addinManager&&m.addinManager.registerAddinFn("7d9ace94-8620-4bc0-9160-fcc15d4cb578",fn_addin);