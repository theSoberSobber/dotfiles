(self.webpackChunk=self.webpackChunk||[]).push([[4382],{8482:(e,t,n)=>{n.d(t,{$:()=>o,EA:()=>r,QK:()=>a,SV:()=>s,Td:()=>c,x:()=>g});var i,s,r,o,a,c,l,u=n(73975),h=n(22232),d=n(16105);!function(e){e.isNoop=function(e){return 0===e.startOffset&&0===e.endOffset}}(i||(i={})),function(e){function t(e){return{start:Math.min(e.start,e.end),end:Math.max(e.start,e.end)}}e.eq=u.MW({start:u.lr,end:u.lr}),e.normalize=t,e.mergeAdjacent=function(e){return t=>{if(0===t.length)return[];const n=[t[0]];for(let i=1;i<t.length;++i){const s=n[n.length-1];e(s,t[i])?n[n.length-1]={start:s.start,end:t[i].end}:n.push(t[i])}return n}},e.create=function(e,n){return t({start:e,end:null!=n?n:e})},e.translate=function(e,t){return 0===t?e:{start:e.start+t,end:e.end+t}},e.transform=function(e,t){return i.isNoop(t)?e:{start:e.start+t.startOffset,end:e.end+t.endOffset}},e.rebase=function(e,t){return t.reduce(((e,t)=>{const n=d.q.getTransformOffset(t);return{start:t.pos<=e.start?Math.max(t.pos,e.start+n):e.start,end:t.pos<e.end?Math.max(t.pos,e.end+n):e.end}}),e)},e.contains=function(e,t,n){const i=n?t.start<=e.end:t.start<e.end;return t.start>=e.start&&i&&t.end>=e.start&&t.end<=e.end},e.isAdjacent=function(e,t){return e.end===t.start||t.end===e.start},e.intersects=function(e,t){return e.start>=t.start&&e.start<t.end||t.start>=e.start&&t.start<e.end},e.equals=function(t,n){return e.eq.equals(t,n)},e.toString=function(e){return`[${e.start}, ${e.end}]`},e.isCollapsed=function(e){return e.start===e.end},e.convertFromRawTransform=function(e){return{start:e.s,end:e.e}},e.length=function(e){return e.end-e.start}}(s||(s={})),function(e){e.hasTransformJSON=function(e){return"transformJSON"in e}}(r||(r={})),function(e){function t(e,t,n){return e.slice(t.start,t.end)===n}function n(e){return"transformJSON"in e&&Boolean(e.transformJSON)}function i(e){return"subalerts"in e&&e.subalerts&&"labels"in e&&Boolean(e.labels)}function s(e){return!n(e)&&!i(e)}function r({withPosition:e,withTransformJSON:t,withSubAlerts:r}){return o=>s(o)?e(o):n(o)?t(o):i(o)?r(o):void(0,h.vE)(o)}e.isConsistentWithText=function(n,i){let s;if(e.isWithSubAlerts(n))s=n.highlightRanges.every(((e,s)=>t(i,e,n.highlightTexts[s])));else{const e=n.highlightRanges.find((e=>"enclosing"===e.type))||n.highlightRanges[0];s=t(i,e,n.highlightTexts[0])}return s&&(!e.isRegular(n)||t(i,n.transformRange,n.transformText))},e.isWithTransformJson=n,e.isWithSubAlerts=i,e.isWithPosition=s,e.isRegular=function(e){return s(e)||n(e)},e.match=r,e.map=function({withPosition:e,withTransformJSON:t,withSubAlerts:n}){return r({withPosition:e,withTransformJSON:t,withSubAlerts:n})}}(o||(o={})),function(e){e.waitingForConnection="waitingForConnection",e.waitingForReconnection="waitingForReconnection",e.startingConnection="startingConnection",e.newSessionStarted="newSessionStarted",e.existingSessionStarted="existingSessionStarted"}(a||(a={})),function(e){e.ready="ready",e.inProgress="inProgress",e.reconnectRequired="reconnectRequired"}(c||(c={})),function(e){e.unknown="unknown",e.clientQueueNonEmpty="clientQueueNonEmpty",e.noSuchSession="noSuchSession",e.cannotReconnectToSelf="cannotReconnectToSelf",e.differentUsers="differentUsers",e.sessionClosed="sessionClosed",e.messageCountIncorrect="messageCountIncorrect"}(l||(l={}));const g=(e,t)=>{if(!e)return l.clientQueueNonEmpty;if(!t)return l.unknown;const{reconnectFailedReason:n}=t;if("no such session"===n)return l.noSuchSession;if("cannot reconnect to self"===n)return l.cannotReconnectToSelf;if("different users"===n)return l.differentUsers;if("session is closed"===n)return l.sessionClosed;return n&&/(client send|server send|no such message in buffer)/.test(n)?l.messageCountIncorrect:l.unknown}},95572:(e,t,n)=>{n.d(t,{DD:()=>v,Hq:()=>y,J8:()=>S,TC:()=>r,kQ:()=>w,uM:()=>s,wF:()=>_});var i,s,r,o=n(40327),a=n(90361),c=n(8482),l=n(5114),u=n(63513),h=n(73353),d=n(80800),g=n(49524),p=n(22232),f=n(89943);!function(e){e.synonym="Synonym",e.plagiarism="Plagiarism",e.grammar="Grammar",e.contextualSpelling="ContextualSpelling",e.sentenceStructure="SentenceStructure",e.punctuation="Punctuation",e.style="Style",e.enhancement="Enhancement",e.spelling="Spelling",e.voxStyle="VoxStyle",e.snippets="Snippets",e.other="Other"}(i||(i={})),function(e){e.sales_crm="sales_crm",e.sales_engagement="sales_engagement",e.sales_enablement="sales_enablement",e.marketing_email_automation="marketing_email_automation",e.marketing_content="marketing_content",e.customer_service="customer_service",e.customer_surveys_surveys="customer_surveys_surveys",e.recruiting="recruiting",e.training_learning="training_learning",e.project_management="project_management",e.legal="legal",e.contractors="contractors",e.human_resources="human_resources",e.email="email",e.business_chat="business_chat"}(s||(s={})),function(e){e.correctness="correctness",e.clarity="clarity",e.engagement="engagement",e.tone="tone",e.vox="vox",e.knowledgeHub="knowledgeHub",e.other="other"}(r||(r={}));const m=[r.clarity,r.correctness,r.engagement,r.tone],_=e=>m.includes(e);var v,S,b,y,w;!function(e){function t({withPosition:t,withTransformJSON:n,withSubAlerts:i}){return s=>e.isWithPosition(s)?t(s):e.isWithTransformJson(s)?n(s):e.isWithSubAlerts(s)?i(s):void(0,p.vE)(s)}e.isWithTransformJson=e=>c.$.isWithTransformJson(e),e.isWithSubAlerts=e=>c.$.isWithSubAlerts(e),e.isWithPosition=e=>c.$.isWithPosition(e),e.isRegular=e=>c.$.isRegular(e),e.match=t;const n={Correctness:r.correctness,Clarity:r.clarity,Engagement:r.engagement,Tone:r.tone,"Style guide":r.vox,"Knowledge Hub":r.knowledgeHub};e.createOutcomeType=function(e){return e&&n[e]||r.other},e.ordering={greaterThanOrEqual:(e,t)=>e.isEthicalAIStandWithUkraine||t.isEthicalAIStandWithUkraine?e.isEthicalAIStandWithUkraine:e.isShortenIt&&t.isShortenIt?e.priority>=t.priority:!(e.isShortenIt&&!t.isShortenIt)&&(!(e.isShortenIt||!t.isShortenIt)||(e.isSuggestedSnippet||t.isSuggestedSnippet?e.priority>=t.priority:!e.isFree&&t.isFree||e.isFree&&!t.isFree?e.isVox||t.isVox?e.isVox:e.isFree:e.group===i.spelling&&t.group===i.spelling||e.group===i.contextualSpelling&&t.group===i.contextualSpelling||e.isVox&&t.isVox?e.priority>=t.priority:e.group===i.spelling||t.group!==i.spelling&&e.priority<=t.priority)),areConflicting:(t,n)=>(!t.isFree&&!n.isFree||t.isFree&&n.isFree||t.isVox||n.isVox)&&(!t.isTakeaway&&!n.isTakeaway||t.isTakeaway&&n.isTakeaway)&&!e.isMuted(t)&&!e.isMuted(n)&&(e.isRegular(t)&&e.isRegular(n)&&c.SV.equals(t.transformRange,n.transformRange)||f.Hx(t.highlightRanges,n.highlightRanges,c.SV.equals)),areSame:(e,n)=>{const i=e=>{const n=e=>({highlights:e.highlights,alternatives:(0,o.pipe)(e.alternatives,l.map((e=>({alternatives:e.alternatives}))))}),i=(0,o.pipe)(e,t({withPosition:e=>({highlightTexts:e.highlightTexts,highlightRanges:e.highlightRanges,transformText:e.transformText,transformRange:e.transformRange,replacements:e.replacements}),withTransformJSON:e=>n(e.transformJSON),withSubAlerts:e=>n(e.subalerts)}));return Object.assign(i,{priority:e.priority,isFree:e.isFree,group:e.group,outcome:e.outcome,category:e.category}),i};return(0,a.fS)(i(e),i(n))}},e.isInline=e=>e.inline===u.wQ.Inline.inline,e.isMuted=e=>void 0!==e.muted&&e.muted!==u.JW.MutedByType.NOT_MUTED,e.isFreePremiumLocked=e=>"locked_transform"===e.freePremium,e.isFreePremiumUnlocked=e=>"unlocked"===e.freePremium,e.isHidden=e=>e.isHidden}(v||(v={})),function(e){let t;!function(e){e.start="start",e.add="add",e.changed="changed",e.remove="remove",e.finished="finished",e.emogenie="emogenie",e.autocomplete="autocomplete",e.attentionHeatmap="attention_heatmap",e.attentionInfo="attention_info",e.shortenItFinished="shorten_it_finished",e.textInfo="text_info",e.submitOtAck="submit_ot_ack",e.proofitAvailability="realtime_proofit_availability",e.proofitCancelResponse="realtime_proofit_cancel_resp",e.proofitCompleted="realtime_proofit_completed",e.proofitProgress="realtime_proofit_in_progress",e.proofitProgressError="realtime_proofit_progress_error",e.proofitProgressRejected="realtime_proofit_progress_rejected",e.proofitSubmitResponse="realtime_proofit_submit_resp",e.feedback="feedback",e.error="error",e.publishedAck="published_ack",e.submitSurveyResultAck="submit_survey_result_ack",e.showSurvey="show_survey",e.sduiAdd="sdui_add",e.sduiUpdate="sdui_update",e.sduiRemove="sdui_remove",e.cheetahSetContext="cheetah:setContext",e.cheetahChunk="cheetah:chunk",e.cheetahResult="cheetah:result",e.cheetahError="cheetah:error",e.cheetahAck="cheetah:ack"}(t=e.Type||(e.Type={})),e.start=function(e){return{_tag:t.start,isEnterprise:e.isEnterprise,domainName:e.domainName,domainCategory:e.domainCategory,userMutedCategories:e.userMutedCategories,defaultDocumentContext:h.R$.serializeDefault((0,o.pipe)(e.defaultDocumentContext,l.fold((()=>h.R$.defaultContextFallback),g.y))),sessionUuid:e.sessionUuid,isNewSession:e.isNewSession,allowedFeatures:e.allowedFeatures,cheetahUsage:e.cheetahUsage}},e.add=function(e){return{_tag:t.add,alert:e}},e.change=function(e){return{_tag:t.changed,changed:e}},e.remove=function(e){return{_tag:t.remove,removedId:e}},e.finished=function(e){return{_tag:t.finished,finished:e}},e.emogenie=function(e){return{_tag:t.emogenie,emogenieReport:{emotions:e.emotions,hidden:e.hidden,institutionLogo:e.institutionLogo,brandTonesEnabled:e.brandTonesEnabled,brandTonesConfigured:e.brandTonesConfigured}}},e.textInfo=function(e){return{_tag:t.textInfo,...e}},e.submitOtAck=function(e){return{_tag:t.submitOtAck,data:e}},e.feedbackAck=function({scores:e,scoreStatus:n}){return{_tag:t.feedback,scores:e?d.v0.OutcomeScores.normalize(e):void 0,scoreStatus:n}},e.autocomplete=function(e,n,i){return{_tag:t.autocomplete,data:e,revision:n,connId:i}},e.attentionHeatmap=function(e,n){return{_tag:t.attentionHeatmap,heatmap:e,connectionId:n}},e.attentionInfo=function(e){return{_tag:t.attentionInfo,info:e}},e.shortenItFinished=function(e){return{_tag:t.shortenItFinished,alertId:e}},e.proofitAvailability=function(e){return{_tag:t.proofitAvailability,info:e}},e.proofitSubmitResponse=function(e){return{_tag:t.proofitSubmitResponse,info:e}},e.proofitProgress=function(e){return{_tag:t.proofitProgress,info:e}},e.proofitCompleted=function(e){return{_tag:t.proofitCompleted,info:e}},e.proofitProgressError=function(e){return{_tag:t.proofitProgressError,info:e}},e.proofitProgressRejected=function(e){return{_tag:t.proofitProgressRejected,info:e}},e.proofitCancelResponse=function(e){return{_tag:t.proofitCancelResponse,info:e}},e.error=function(e){return{_tag:t.error,error:"not_authorized"===e.error?"not_authorized":"unknown",raw_error:e.error,event:e}},e.publishedAck=function(e){return{_tag:t.publishedAck,survey:e.survey}},e.submitSurveyResultAck=function(){return{_tag:t.submitSurveyResultAck}},e.showSurvey=function(e){return{_tag:t.showSurvey,survey:e.survey}},e.sduiAdd=function(e){return{_tag:t.sduiAdd,event:e}},e.sduiUpdate=function(e){return{_tag:t.sduiUpdate,event:e}},e.sduiRemove=function(e){return{_tag:t.sduiRemove,event:e}},e.cheetahSetContext=function(e){return{_tag:t.cheetahSetContext,event:e}},e.cheetahChunk=function(e){return{_tag:t.cheetahChunk,event:e}},e.cheetahResult=function(e){return{_tag:t.cheetahResult,event:e}},e.cheetahError=function(e){return{_tag:t.cheetahError,event:e}},e.cheetahAck=function(e){return{_tag:t.cheetahAck,event:e}},e.isCheetahMessage=function(e){switch(e._tag){case t.cheetahSetContext:case t.cheetahChunk:case t.cheetahResult:case t.cheetahError:case t.cheetahAck:return!0;default:return!1}},e.isSDUIMessage=function(e){switch(e._tag){case t.sduiAdd:case t.sduiRemove:case t.sduiUpdate:return!0;default:return!1}}}(S||(S={})),function(e){e.british="british",e.american="american",e.australian="australian",e.canadian="canadian"}(b||(b={})),function(e){e.idle="idle",e.inProgress="inProgress"}(y||(y={})),function(e){e.notReady="notReady",e.ready="ready",e.firstTextCheckCompleted="firstTextCheckCompleted",e.disconnected="disconnected"}(w||(w={}))},57594:(e,t,n)=>{n.r(t),n.d(t,{CheetahFeatureImpl:()=>xe});var i=n(17771),s=n(17889),r=n(75668),o=n(57050),a=n(27378),c=n(8482),l=n(74850),u=n(14601),h=n(32952),d=n(85985),g=n(77176),p=n(66310),f=n(50628),m=n(98403),_=n(76974),v=n(2834),S=n(78674),b=n(97425),y=n(23063),w=n(60797),R=n(2844),I=n(24209),x=n(17343),C=n(80544),k=n(79692),E=n(67434),A=n(5114),U=n(8125),P=n(22232),M=n(83078),B=n(62965),F=n(95574),O=n(95195),T=n(38983),N=n(34217),z=n(58541),G=n.n(z);const q=({width:e,height:t,top:n,left:i})=>a.createElement("div",{"data-grammarly-part":"cheetah-highlight-rect",className:G().highlightRect,style:{width:e,height:t,top:n,left:i}});var H=n(53386),W=n(74229);const D=a.forwardRef((function({onClick:e,onMouseEnter:t,onMouseLeave:n},i){return a.createElement(H.u,{message:"Open GrammarlyGO"},a.createElement("button",{onClick:e,"data-grammarly-part":"cheetah-ideate-button",className:W.ideateButton,ref:i,onMouseEnter:t,onMouseLeave:n},a.createElement("div",{className:W.ideateButtonIcon})))}));var V=n(30877),j=n(86620),Q=n(92132),$=n(49468),J=n(89894),L=n(33678),Y=n(15073),Z=n(42103),K=n(51369);const X=J.ux.style({fontStyle:"normal",fontWeight:"normal",fontFamily:"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, Arial",$nest:{"button, input, textarea":{fontFamily:"inherit"}}}),ee=({env:e,children:t})=>a.createElement($.o,null,a.createElement(L.a.Context.Provider,{value:new j.C(e)},a.createElement(Q.Q,{remSize:_.of(16),setter:e=>Y.u.setRootCssVar(document.documentElement,e)},a.createElement(Z.G.DefaultProvider,null,a.createElement("div",{className:X},t,a.createElement(K.X,null))))));var te=n(74204),ne=n(62810);const ie=({referenceElement:e,placement:t,offset:n,disabled:i,onClick:s})=>{const[r,o]=a.useState(null),{styles:c,attributes:l}=(0,te.D)(e,r,{placement:t,modifiers:n?[{name:"offset",options:{offset:n}}]:[]});return a.createElement("button",{ref:o,style:c.popper,...l.popper,onClick:s,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},"data-grammarly-part":"cheetah-reply-button",className:ne.replyButton,"data-disabled":i},a.createElement("div",{className:ne.icon}),a.createElement("span",null,"Reply quickly"))};var se=n(73734);const re=({referenceElement:e,placement:t,offset:n,disabled:i,onMagicRewriteClick:s,onOpenRewriteClick:r})=>{const[o,c]=a.useState(null),{styles:l,attributes:u}=(0,te.D)(e,o,{placement:t,modifiers:n?[{name:"offset",options:{offset:n}}]:[]});return a.createElement("div",{ref:c,style:l.popper,...u.popper,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},"data-grammarly-part":"cheetah-entry-button",className:se.entryButton,"data-disabled":i},s?a.createElement(H.u,{message:"Improve this text"},a.createElement("button",{onClick:s,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},className:se.entryButtonItem,"data-disabled":i},a.createElement("i",{className:se.rewriteIcon}))):null,a.createElement(H.u,{message:"Open GrammarlyGO"},a.createElement("button",{onClick:r,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},className:se.entryButtonItem,"data-disabled":i},a.createElement("i",{className:se.openIcon}))))};var oe=n(90845),ae=n(49708),ce=n(93508),le=n(19703),ue=n(60688);const he=()=>a.createElement("svg",{className:ue.icon,viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round"},a.createElement("path",{d:"M8,16C12.418,16 16,12.418 16,8C16,3.582 12.418,0 8,0C3.582,0 0,3.582 0,8C0,12.418 3.582,16 8,16Z",fill:"#0A9A78"}),a.createElement("path",{d:"M4,8L12,8M8,4L8,12",fill:"none",fillRule:"nonzero",stroke:"white",strokeWidth:"1.5px"})),de=({overflow:e,...t})=>e?a.createElement(pe,{...t}):a.createElement(ge,{...t}),ge=({left:e,top:t,height:n})=>a.createElement(a.Fragment,null,a.createElement("div",{"data-grammarly-part":"cheetah-quasi-caret",className:ue.quasiCaret,style:{left:e,top:t+n,height:n+8}},a.createElement(he,null))),pe=({left:e,top:t,height:n})=>{const{ref:s,onMount:r}=oe.P.useElWatcher(),c=a.useMemo((()=>T.h.create(A.none)),[]),{rect:l,onMount:u}=oe.P.useRectWatcher(),h=a.useCallback((e=>{e.style.pointerEvents="all",c.set((0,o.zG)(i.Y(A.option)({rect:A.some(e.getBoundingClientRect()),goodParent:(0,o.zG)(e.getBoundingClientRect(),(e=>({x:e.x+e.width/2,y:e.y+e.height/2})),(({x:e,y:t})=>{var n,i;return A.fromNullable(null===(i=null===(n=document.elementFromPoint(e,t))||void 0===n?void 0:n.shadowRoot)||void 0===i?void 0:i.elementFromPoint(e,t))}),A.filter((t=>t===e||e.contains(t||null))))}),A.fold((()=>A.none),(({rect:e})=>A.some({x:e.x,y:e.y}))))),e.style.pointerEvents="none"}),[]),d=a.useMemo((()=>ae.R(document,"scroll",{capture:!0}).pipe(ce.O(null))),[]);return oe.P.useSubscriptionTo(R.aj([s.pipe(w.oA),d,l]).pipe(v.b((([e])=>h(e))))),a.createElement(a.Fragment,null,a.createElement("div",{"data-grammarly-part":"cheetah-quasi-caret",className:ue.quasiCaret,style:{left:e,top:t+n,height:n+8},ref:e=>{r(e),u(e)}},a.createElement(le.F.div,{style:c.pipe(g.U((e=>(0,o.zG)(e,A.fold((()=>({opacity:1})),(()=>({opacity:0})))))))},a.createElement(he,null))),a.createElement(le.F.Fragment,null,c.pipe(g.U((e=>(0,o.zG)(e,A.fold(o.gn,(e=>a.createElement("div",{"data-grammarly-part":"cheetah-quasi-caret-fixed-bro",className:ue.quasiCaret,style:{transform:"none",position:"fixed",left:e.x,top:e.y,height:n+8}},a.createElement(he,null))))))))))};var fe=n(95572),me=n(64015),_e=n(55073),ve=n(37421),Se=n(77993),be=n(93846),ye=n(4120),we=n(39464),Re=n(70391);var Ie=n(62111);class xe{constructor(e,t,n,i,s,r,a,c,m,v,S,b){this._integration=e,this._textChangeBuffer=t,this._checkingService=n,this._textStats=i,this._dapiActions=s,this._dapiSettings=r,this._closeGrammarlyAssistant=a,this._getEnv=c,this._featureFlags=m,this._user=v,this._gnar=S,this._sessionStartedUsageInfo=b,this._subs=new u.w,this._log=l.Y.create("CheetahFeatureImpl"),this._inlineButtonUI=T.h.create(null),this._ideateButtonUI=T.h.create(null),this._expandedIdeateButtonUI=T.h.create(null),this._assistantUI=T.h.create(null),this._highlightUI=T.h.create(null),this._quasiCaretUI=T.h.create(null),this._onboardingUI=T.h.create(null),this._nativeCursorHider=T.h.create(A.none),this.inlineButtonUI=this._inlineButtonUI.view(),this.ideateButtonUI=this._ideateButtonUI.view(),this.expandedIdeateButtonUI=this._expandedIdeateButtonUI.view(),this.assistantUI=this._assistantUI.view(),this.highlightUI=this._highlightUI.view(),this.quasiCaretUI=this._quasiCaretUI.view(),this.onboardingUI=this._onboardingUI.view(),this._relevantCAPIEvents=new h.xQ,this._assistantFocused=T.h.create(!1),this._inlineButtonRecentlyPressed=T.h.create(!1),this._ideateButtonRecentlyHovered=T.h.create(!1),this._selectionRange=T.h.create(A.none),this._highlightRects=T.h.create([]),this._quasiCaretRect=T.h.create(A.none),this._assistantSession=T.h.create(A.none),this._onboardingViewModel=T.h.create(A.none),this._assistantDragging=T.h.create(!1),this._ideateButtonRefChange=new h.xQ,this._cheetahServices=function(e,t,n,i,s,r,a,c,l,u,f,m,v,S){const b=new h.xQ,y=new h.xQ,w=new ve.c3((()=>(0,o.zG)(e.get(),A.map((e=>({sendUserAction:(t,n)=>B.fj((()=>F.vM((()=>e.sendUserAction(t,n)))))}))),A.toNullable))),I=new ve.O5(n.view((e=>({isFree:ye.n5.isFree(e)})))),x=new ve.$C(_.of(a),t.pipe(d.h(Se.Q.isCheetahSetContext)),t.pipe(d.h(Se.Q.isCheetahResult))),U=i.pipe(p.w(A.fold((()=>_.of(A.none)),(e=>e.sessionService.session.view(A.some))))),P=new Set;m.rewrite&&v||P.add(be.TG.StepName.rewrite);m.compose||P.add(be.TG.StepName.initial);const M=new ve.fE(b,y,U,r,x.availability.view(be.a8.isAvailable),u,f,w,P,"extension"),O=c.pipe(C.QV(k.E),E.R(((e,t)=>{const n=e.filter(Ae);return t&&Ae(t)?[...n,t]:n}),[]),g.U(me.Z$)),T=R.aj([O,l]).pipe(g.U((([e,t])=>(0,o.zG)(e,A.filter((()=>t)),A.fold((()=>({})),(e=>({[be.nF.initialPopupAnchor]:{reference:e,placement:"top",offset:8,boundaryAreaPadding:10},[be.nF.rewriteTooltipAnchor]:{reference:e,placement:"top",offset:8,boundaryAreaPadding:10}})))))));return{userService:I,availabilityService:x,onboardingService:M,trackingService:w,createOnboardingViewModel:()=>new Re.oy(i.view(A.isSome),M.activeStep,b.pipe(d.h(be.ix.is(be.ix.Kind.mount))),T,s,x.promptsAllocated,(e=>{y.next(e),be.lG.is(be.lG.Kind.tryItOut)(e)&&S()})),notifyAssistantUIAction:e=>b.next(e),notifyOnboardingUIAction:e=>y.next(e),dispose:()=>{x.dispose(),M.dispose()}}}(this._checkingService,this._relevantCAPIEvents,this._user,this._assistantSession,this._assistantDragging,this._textStats,this._sessionStartedUsageInfo,this._ideateButtonRefChange,this._integration.canShowIdeateButtonPopups,this._dapiSettings.view("cheetah:onboardingState").pipe(d.h(U.$K),g.U(ke)),(e=>{this._dapiActions.setCheetahOnboardingState(Ee(e))}),this._featureFlags,this._integration.enableInlineRewrites,(()=>this._startNewAssistantSession(be.z_.Mode.ideation))),this._subs.add(this._checkingService.pipe(d.h(A.isSome),p.w((e=>e.value.readyState)),d.h((e=>e===fe.kQ.ready)),f.P()).subscribe((()=>this._init()))),this._subs.add(ve.gz.getInstance().events.subscribe((e=>{this._log.info("received monitoring event",{ev:e}),be._H.isError(e)?(0,Ie.T)().cheetah.error(e.name,e):be._H.isInfo(e)?(0,Ie.T)().cheetah.info(e.name,e):(0,P.L0)(e)}))),function(e){const t=self;t&&(t.cheetahDebug=t.cheetahDebug||{},Object.assign(t.cheetahDebug,e))}({services:this._cheetahServices,clearOnboarding:()=>this._dapiActions.setCheetahOnboardingState(Ee(be.Zq.State.empty))})}get isAssistantOpened(){return this._assistantSession.view(A.isSome)}get isOnboardingPopupVisible(){return this._cheetahServices.onboardingService.activeStep.view(A.fold(o.jv,(e=>e===be.TG.StepName.initial)))}onRelevantCAPIEvent(e){this._relevantCAPIEvents.next(e)}closeAssistant(e){this._terminateAssistantSession(e)}_init(){this._subs.add(this._assistantFocused.subscribe((e=>this._log.debug("Assistant "+(e?"focused":"blurred"))))),this._subs.add(this._getInlineButtonUI().subscribe(m.wW(this._inlineButtonUI))),this._subs.add(this._getIdeateButtonUI().subscribe(m.wW(this._ideateButtonUI))),this._subs.add(this._getExpandedIdeateButtonUI().subscribe(m.wW(this._expandedIdeateButtonUI))),this._subs.add(this._getAssistantUI().subscribe(m.wW(this._assistantUI))),this._subs.add(this._getHighlightUI().subscribe(m.wW(this._highlightUI))),this._subs.add(this._getQuasiCaretUI().subscribe(m.wW(this._quasiCaretUI))),this._subs.add(this._getOnboardingUI().subscribe(m.wW(this._onboardingUI))),this._subs.add(this._updateSelectionRange().subscribe(m.wW(this._selectionRange))),this._subs.add(this._updateHighlightRects().subscribe(m.wW(this._highlightRects))),this._subs.add(this._updateQuasiCaretRect().subscribe(m.wW(this._quasiCaretRect))),this._subs.add(this._isAssistanDragging().subscribe(m.wW(this._assistantDragging))),this._subs.add(this._updateNativeCursor().subscribe()),this._subs.add(this._closeRewriteAssistantWhenUnfocused().subscribe()),this._subs.add(this._assistantSession.view(A.isSome).subscribe((e=>{e&&this._closeGrammarlyAssistant()}))),this._subs.add(this._createOnboardingViewModelWhenCheetahAvailable().subscribe())}_isAssistanDragging(){return this._assistantSession.pipe(p.w(A.fold((()=>_.of(!1)),(e=>e.viewModels.position.state.view((e=>"dragged"===e.kind&&e.dragging))))))}_createOnboardingViewModelWhenCheetahAvailable(){return this._cheetahServices.availabilityService.availability.view(be.a8.isAvailable).pipe(v.b((e=>{this._onboardingViewModel.modify((t=>((0,o.zG)(t,M.bw((e=>e.dispose()))),e?A.some(this._cheetahServices.createOnboardingViewModel()):A.none)))})))}_closeRewriteAssistantWhenUnfocused(){return this._assistantFocused.pipe(S.b(100),d.h((e=>!e&&(0,o.zG)(this._assistantSession.get(),A.fold(o.jv,(e=>e.sessionService.session.view((e=>"started"===e.kind&&be.z_.Mode.isRewriteOrQuickRewrite(e.mode)&&A.isNone(e.inProgressResult)&&0===e.resultHistory.length)).get()))))),v.b((()=>this._terminateAssistantSession(be.z_.EndReason.assistantBlurred))))}_onClickIdeateButton(e){A.isSome(this._assistantSession.get())?this._terminateAssistantSession(be.z_.EndReason.closed):this._startNewAssistantSession(e)}_updateSelectionRange(){return this._integration.selectionRange.pipe(g.U((e=>({selectionRange:e,assistantIsFocused:this._assistantFocused.get(),inlineButtonRecentlyPressed:this._inlineButtonRecentlyPressed.get(),ideateButtonRecentlyHovered:this._ideateButtonRecentlyHovered.get(),initialPopupOnboardingStepIsActive:this.isOnboardingPopupVisible.get()}))),v.b((({inlineButtonRecentlyPressed:e,ideateButtonRecentlyHovered:t})=>{e&&this._inlineButtonRecentlyPressed.set(!1),t&&this._ideateButtonRecentlyHovered.set(!1)})),d.h((({selectionRange:e,assistantIsFocused:t,inlineButtonRecentlyPressed:n,ideateButtonRecentlyHovered:i,initialPopupOnboardingStepIsActive:s})=>!A.isNone(e)||!(t||n||i||s))),g.U((({selectionRange:e})=>e)))}_updateHighlightRects(){return this._selectionRange.pipe(p.w(A.fold((()=>_.of([])),(e=>this._integration.getHighlightRects(e)))))}_updateQuasiCaretRect(){return this._selectionRange.pipe(p.w((e=>(0,o.zG)(e,A.filter(c.SV.isCollapsed),A.fold((()=>_.of([])),(e=>this._integration.getHighlightRects(e)))))),g.U((e=>(0,o.zG)(e,s.c2,A.map((e=>e[e.length-1]))))))}_updateNativeCursor(){return T.h.combine(this._quasiCaretRect,this._assistantSession.view(A.isSome),((e,t)=>(0,o.zG)(i.Y(A.option)({nativeUIHider:A.fromNullable(this._integration.createNativeUIHider),quasiCaretRect:e}),A.filter((()=>t)),M.ew((()=>{this._nativeCursorHider.modify((e=>((0,o.zG)(e,M.bw((e=>e.dispose()))),A.none)))})),M.bw((({nativeUIHider:e})=>{this._nativeCursorHider.modify((t=>((0,o.zG)(t,M.bw((e=>e.dispose()))),A.some(e()))))})))))}_terminateAssistantSession(e){this._assistantSession.modify(A.chain((t=>(t.dispose(e),A.none)))),e!==be.z_.EndReason.closed&&e!==be.z_.EndReason.textInserted&&e!==be.z_.EndReason.assistantBlurred||this._integration.focusTextField()}_startNewAssistantSession(e){this._assistantFocused.set(!0);const t=be.z_.Mode.isIdeation(e)?{mode:e}:be.z_.Mode.isRewriteOrQuickRewrite(e)?{mode:e,selectedRange:(0,o.zG)(this._selectionRange.get(),A.getOrElseW((()=>({start:0,end:0}))))}:be.z_.Mode.isQuickReply(e)?{mode:e,quickReplyContext:(0,o.zG)(this._integration.quickReplyContext.get(),A.fold((()=>be.H3.empty),Ce))}:(0,P.vE)(e),n=new ve.ZP(t,{getText:e=>this._integration.getText(e),flush:()=>new Promise((e=>{this._textChangeBuffer.empty.get()?e():(this._textChangeBuffer.flush(),(0,o.zG)(this._checkingService.get(),M.bw((t=>{t.messages.pipe(d.h((e=>e._tag===fe.J8.Type.submitOtAck)),b.L(500,_.of(null)),v.b((()=>{e()})),y.q(1)).subscribe()}))))}))},(()=>(0,o.zG)(this._checkingService.get(),A.map((e=>({cheetahStartSession:t=>B.fj((()=>F.vM((()=>e.cheetahStartSession(t))))),cheetahAction:t=>B.fj((()=>F.vM((()=>e.cheetahAction(t))))),cheetahInterrupt:t=>B.fj((()=>F.vM((()=>e.cheetahInterrupt(t))))),cheetahSetVoice:t=>B.fj((()=>F.vM((()=>e.cheetahSetVoice(t))))),cheetahEndSession:()=>B.fj((()=>F.vM((()=>e.cheetahEndSession())))),setSessionOption:t=>B.fj((()=>F.vM((()=>e.setSessionOption(t)))))}))),A.toNullable)),this._relevantCAPIEvents.asObservable(),this._dapiSettings.view((({dialectWeak:e,dialectStrong:t})=>t?be.LA.Dialect.Value.fromString(t):e?be.LA.Dialect.Value.fromString(e):be.LA.Dialect.Value.american)),(e=>{this._dapiActions.changeStrongDialect(e)}),this._cheetahServices.trackingService),i=V.TB.create({notify:e=>this._cheetahServices.notifyAssistantUIAction(e),onFocus:e=>this._assistantFocused.set(e),close:e=>this._terminateAssistantSession(e),insertText:e=>{this._insertText(e),this._terminateAssistantSession(be.z_.EndReason.textInserted)},submitAction:e=>n.submitAction(e),setVoiceProfile:e=>n.setVoiceProfile(e),stopInProgressResult:()=>n.stopInProgressResult(),dismissResult:e=>n.dismissResult(e),dismissError:()=>n.dismissError(),regenerateResult:e=>n.regenerateResult(e),trackResultInsert:e=>n.trackResultInsert(e),trackResultOffensive:e=>n.trackResultOffensive(e),trackActionsOffensive:()=>n.trackActionsOffensive(),trackVoiceProfileOpen:e=>this._cheetahServices.trackingService.trackVoiceProfileOpen(e),trackVoiceProfileSkip:()=>this._cheetahServices.trackingService.trackVoiceProfileSkip(),trackActionsOpenStore:()=>this._cheetahServices.trackingService.trackActionsOpenStore(),trackPromptSearch:()=>this._cheetahServices.trackingService.trackPromptSearch(),trackUsageInfoClick:()=>this._cheetahServices.trackingService.trackUsageInfoClick(),trackUsageInfoHover:()=>this._cheetahServices.trackingService.trackUsageInfoHover(),trackAssistantClose:()=>this._cheetahServices.trackingService.trackAssistantClose(),onClickGetMorePrompts:e=>{e?(this._gnar.getPremiumButtonClick("grammarlyGoPrompts",void 0,!1,void 0,void 0,"grammarlyGoPrompts","grammarlyGo"),(0,we.wW)("upHook","grammarlyGoPrompts")):self.open(r.Rd().appConfig.url.support)},onShowGetMorePrompts:e=>{e&&this._gnar.getPremiumButtonShow("grammarlyGoPrompts",void 0,!1,void 0,void 0,"grammarlyGoPrompts","grammarlyGo")}},this._cheetahServices.userService.user,this._cheetahServices.availabilityService.availability,n.session,this._integration.assistantPlacement.pipe(w.oA)),s={sessionService:n,viewModels:i,dispose:e=>{n.dispose(e),i.dispose(),this._assistantFocused.set(!1)}};this._assistantSession.set(A.some(s))}_getInlineButtonUI(){return R.aj([this._integration.inlineButtonPlacement,this._selectionRange,I.T(this._integration.selectionRange.pipe(g.U((e=>(0,o.zG)(e,A.isSome)))),this._integration.selectionRange.pipe(S.b(100),x.h(!1))),this._assistantSession.view(A.isNone),this._integration.textMapIsEmpty,this._integration.quickReplyContext]).pipe(g.U((([e,t,n,i,s,r])=>(0,o.zG)(e,A.filter((()=>i)),A.fold(o.gn,(e=>(0,o.zG)(t,A.fold(o.gn,(t=>s&&A.isSome(r)&&this._featureFlags.quickReply?a.createElement(ie,{disabled:!1,referenceElement:e.referenceElement,placement:e.placement,offset:A.toNullable(e.offset),onClick:()=>{this._inlineButtonRecentlyPressed.set(!0),this._startNewAssistantSession(be.z_.Mode.quickReply)}}):Ue(t)&&this._featureFlags.rewrite&&this._integration.enableInlineRewrites?a.createElement(re,{disabled:n,referenceElement:e.referenceElement,placement:e.placement,offset:A.toNullable(e.offset),onOpenRewriteClick:()=>{this._inlineButtonRecentlyPressed.set(!0),this._startNewAssistantSession(be.z_.Mode.rewrite)},onMagicRewriteClick:this._featureFlags.magicRewrite?()=>{this._inlineButtonRecentlyPressed.set(!0),this._startNewAssistantSession(be.z_.Mode.quickRewrite)}:void 0}):null)))))))))}_getAssistantUI(){return this._assistantSession.view(A.fold(o.gn,(e=>a.createElement(ee,{env:this._getEnv()},N.UI.mount(V.Dg,(0,V.WY)(e.viewModels))))))}_getOnboardingUI(){return this._onboardingViewModel.view(A.fold(o.gn,(e=>a.createElement(ee,{env:this._getEnv()},N.UI.mount(Re.gy,(0,Re.Bx)(e))))))}_getHighlightUI(){return T.h.combine(this._highlightRects,this._assistantSession.view(A.isSome),this._assistantFocused,((e,t,n)=>t&&n?e.map(((e,t)=>a.createElement(q,{key:`cheetah-highlight-rect-${t}`,top:e.top,left:e.left,width:e.width,height:e.height}))):null))}_getQuasiCaretUI(){return T.h.combine(this._quasiCaretRect,this._assistantSession.view(A.isSome),((e,t)=>(0,o.zG)(e,A.filter((()=>t)),A.fold((()=>null),(e=>a.createElement(de,{left:e.left,top:e.top,height:e.height,overflow:this._integration.allowCustomCaretOverflow}))))))}_getIdeateButtonUI(){return R.aj([this._inlineButtonUI,this._selectionRange]).pipe(g.U((([e,t])=>(0,o.zG)(e,A.fromPredicate((e=>null===e)),A.fold(o.gn,(()=>this._getIdeateButtonForSelectionRange(t)))))))}_getExpandedIdeateButtonUI(){return this._selectionRange.view((e=>this._getIdeateButtonForSelectionRange(e)))}_getIdeateButtonForSelectionRange(e){return(0,o.zG)(e,A.filter((e=>Ue(e)&&this._featureFlags.rewrite)),A.fold((()=>this._featureFlags.compose?a.createElement(D,{onMouseEnter:()=>this._ideateButtonRecentlyHovered.set(!0),onMouseLeave:()=>this._ideateButtonRecentlyHovered.set(!1),onClick:()=>this._onClickIdeateButton(be.z_.Mode.ideation)}):null),(()=>a.createElement(D,{onMouseEnter:()=>this._ideateButtonRecentlyHovered.set(!0),onMouseLeave:()=>this._ideateButtonRecentlyHovered.set(!1),onClick:()=>this._onClickIdeateButton(be.z_.Mode.rewrite)}))))}_insertText(e){""!==e?this._integration.insertText(e,this._selectionRange.get()):this._log.warn("insert() - attempting to insert empty response, skipping insert.")}dispose(){var e;this._terminateAssistantSession(be.z_.EndReason.disposed),null===(e=A.toUndefined(this._onboardingViewModel.get()))||void 0===e||e.dispose(),this._cheetahServices.dispose(),this._subs.unsubscribe(),(0,o.zG)(this._nativeCursorHider.get(),M.bw((e=>e.dispose()))),this._integration.dispose()}}function Ce(e){var t,n,i,s,r,a,c,l,u,h,d,g,p,f,m,_,v;const S=e=>{var t;return null!==(t=null==e?void 0:e.reduce(((e,t)=>{var n;return t.email&&!e.has(t.email)&&e.set(t.email,{name:null!==(n=t.name)&&void 0!==n?n:"",email:t.email}),e}),new Map))&&void 0!==t?t:new Map},b=S(null===(i=null===(n=null===(t=e.parents)||void 0===t?void 0:t[0])||void 0===n?void 0:n.audience)||void 0===i?void 0:i.indirectRecipients),y=S(null===(a=null===(r=null===(s=e.parents)||void 0===s?void 0:s[0])||void 0===r?void 0:r.audience)||void 0===a?void 0:a.undisclosedRecipients),w=S(null===(h=null===(u=null===(l=null===(c=e.parents)||void 0===c?void 0:c[0])||void 0===l?void 0:l.audience)||void 0===u?void 0:u.recipients)||void 0===h?void 0:h.filter((({email:e})=>void 0!==e&&!b.has(e)&&!y.has(e)))),R=S(null===(d=e.audience)||void 0===d?void 0:d.indirectRecipients),I=S(null===(g=e.audience)||void 0===g?void 0:g.undisclosedRecipients),x=S(null===(f=null===(p=e.audience)||void 0===p?void 0:p.recipients)||void 0===f?void 0:f.filter((({email:e})=>void 0!==e&&!R.has(e)&&!I.has(e))));return{previousMessageInfo:(0,o.zG)(me.YM(null!==(m=e.parents)&&void 0!==m?m:[]),A.fold((()=>be.H3.PreviousMessageInfo.empty),(e=>{var t;return{author:(0,o.zG)(me.YM(null!==(t=e.authors)&&void 0!==t?t:[]),A.fold((()=>be.H3.Person.empty),(e=>{var t,n;return{name:null!==(t=e.name)&&void 0!==t?t:"",email:null!==(n=e.email)&&void 0!==n?n:""}}))),directRecipients:Array.from(w.values()),text:e.delta?(0,_e.l)(e.delta,""):""}}))),title:null!==(_=e.title)&&void 0!==_?_:"",author:(0,o.zG)(me.YM(null!==(v=e.authors)&&void 0!==v?v:[]),A.fold((()=>be.H3.Person.empty),(e=>{var t,n;return{name:null!==(t=e.name)&&void 0!==t?t:"",email:null!==(n=e.email)&&void 0!==n?n:""}}))),directRecipients:Array.from(x.values()),indirectRecipients:Array.from(R.values()),undisclosedRecipients:Array.from(I.values())}}function ke(e){return(0,o.zG)(decodeURIComponent(e),(e=>be.Zq.codec.decode(JSON.parse(e))),O.fS((()=>be.Zq.State.empty)))}function Ee(e){return encodeURIComponent(JSON.stringify(be.Zq.codec.encode(e)))}function Ae(e){return e.isConnected&&null!==e.offsetParent}function Ue(e){const t=e.end-e.start;return t>=10&&t<5e3}},16105:(e,t,n)=>{n.d(t,{k:()=>s,q:()=>i});var i,s,r=n(19744),o=n(90361);!function(e){let t;function n(e){return e._tag===t.ins}function i(e){return e._tag===t.del}!function(e){e.ins="ins",e.del="del"}(t=e.Type||(e.Type={})),e.isIns=n,e.ins=function(e,n){return{_tag:t.ins,pos:e,text:n}},e.isDel=i,e.del=function(e,n){return{_tag:t.del,pos:e,length:n}},e.applyChanges=function(e,t){return t.reduce(((e,t)=>n(t)?e.slice(0,t.pos)+t.text+e.slice(t.pos):i(t)?e.slice(0,t.pos)+e.slice(t.pos+t.length):(0,o.vE)(t)),e)},e.getTransformOffset=function(e){return n(e)?e.text.length:i(e)?-e.length:(0,o.vE)(e)},e.getRange=function(e){return{start:e.pos,end:e.pos+(n(e)?e.text.length:e.length)}}}(i||(i={})),function(e){e.fromDiff=function(e,t,n){const s=r(e,t,n);let o=0;const a=[];for(const e of s)e[0]===r.EQUAL?o+=e[1].length:e[0]===r.INSERT?(a.push(i.ins(o,e[1])),o+=e[1].length):a.push(i.del(o,e[1].length));return a}}(s||(s={}))},86620:(e,t,n)=>{n.d(t,{C:()=>l,U:()=>i});var i,s=n(27378),r=n(29511),o=n(33678),a=n(88056),c=n(95574);!function(e){let t;!function(e){e.isAppleSystem="isAppleSystem"}(t=e.SidebarFlag||(e.SidebarFlag={})),e.Flag={...t,...o.a.Flag},e.Context=s.createContext(a.Y.invariantContent("Environment"))}(i||(i={}));class l{constructor(e=(0,r.O)()){this._flags=new Set,this.actions={openUrl:e=>c.vM((()=>{document.location.href=e.toString()})),openPopup:e=>c.vM((()=>{const t=self.open(e.toString(),void 0,"noreferrer");t&&(t.opener=null)}))},e.config.systemInfo.os.isMac&&this._flags.add(i.Flag.isAppleSystem),this._flags.add(i.Flag.supportsSVGDominantBaseline),this._flags.add(i.Flag.onlyTrustedEvents)}has(e){return this._flags.has(e)}}},92132:(e,t,n)=>{n.d(t,{Q:()=>c});var i=n(27378),s=n(15073),r=n(60797),o=n(95300),a=n(5114);const c=({children:e,remSize:t,setter:n})=>(l+=1,i.useEffect((()=>{const e=t.subscribe((e=>{u.next(a.some(e)),n(a.some(e))}));return()=>{e.unsubscribe(),l-=1,0===l&&(u.next(a.none),n(a.none))}}),[t]),i.createElement(s.u.Context.Provider,{value:u.pipe(r.oA)},e));let l=0;const u=new o.X(a.none)},55073:(e,t,n)=>{if(n.d(t,{AQ:()=>d,SO:()=>u,l:()=>g,n:()=>h}),1307!=n.j)var i=n(57050);if(1307!=n.j)var s=n(16105);if(1307!=n.j)var r=n(90361);if(1307!=n.j)var o=n(5114);if(1307!=n.j)var a=n(25938);if(1307!=n.j)var c=n(8709);var l=n(36991);function u(e,t){return(0,i.zG)(function(e){return 2===e.length&&e[0].pos===e[1].pos?e[0]._tag===s.q.Type.del&&e[1]._tag===s.q.Type.ins?o.some([e[0],e[1]]):e[0]._tag===s.q.Type.ins&&e[1]._tag===s.q.Type.del?o.some([e[1],e[0]]):o.none:o.none}(e),o.fold((()=>e),(e=>{const n=t.slice(e[0].pos,e[0].pos+e[0].length);return e[1].text===n?[]:e[1].text.startsWith(n)?[s.q.ins(e[0].pos+n.length,e[1].text.slice(n.length))]:n.startsWith(e[1].text)?[s.q.del(e[1].pos+e[1].text.length,n.length-e[1].text.length)]:e})))}function h(e){return e.reduce(((e,t)=>{switch(t._tag){case s.q.Type.ins:return e.compose(a.RI.ins(t.pos,t.text));case s.q.Type.del:return e.compose(a.RI.del(t.pos,t.length));default:return(0,r.vE)(t)}}),a.RI.delta(new c.i)).delta}function d(e){return e.reduce(((e,t)=>{if(l.s.isInsert(t)&&"string"==typeof t.insert){const n=t.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return e.insert(n,t.attributes)}return e.push(t)}),new c.i)}function g(e,t){return e.reduce(((e,t)=>(l.s.isInsertString(t)?(e.text=`${e.text.substring(0,e.index)}${t.insert}${e.text.substring(e.index)}`,e.index+=t.insert.length):l.s.isDelete(t)?e.text=`${e.text.substring(0,e.index)}${e.text.substring(e.index+t.delete)}`:l.s.isRetain(t)?e.index+=t.retain:function(e){var t;return l.s.isInsertEmbed(e)&&!0===(null===(t=e.insert)||void 0===t?void 0:t.linebreak)}(t)&&(e.text=`${e.text.substring(0,e.index)}\n${e.text.substring(e.index)}`,e.index+=1),e)),{text:t,index:0}).text}},58541:e=>{e.exports={highlightRect:"QY8r6"}},74229:e=>{e.exports={ideateButton:"uvaxX",ideateButtonIcon:"FxRsU",spin:"Dl_cd"}},73734:e=>{e.exports={entryButton:"NpkKC",entryButtonItem:"qkhc6",rewriteIcon:"KF9IT",openIcon:"wnIMZ",spin:"VCOho"}},62810:e=>{e.exports={replyButton:"d5jYx",icon:"wJ_DO",spin:"N20SX"}},60688:e=>{e.exports={quasiCaret:"W8Ec1",icon:"wlLHd"}}}]);