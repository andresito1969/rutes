System.register(["jimu-core","jimu-layouts/layout-runtime"],(function(e,t){var s={},r={};return{setters:[function(e){s.AbstractMessageAction=e.AbstractMessageAction,s.MessageType=e.MessageType,s.WidgetState=e.WidgetState,s.appActions=e.appActions,s.getAppStore=e.getAppStore},function(){}],execute:function(){e((()=>{"use strict";var e={79244:e=>{e.exports=s},41496:e=>{e.exports=r}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{default:()=>t});var e=o(79244);o(41496);class t extends e.AbstractMessageAction{constructor(){super(...arguments),this.supportedMessageTypes=[e.MessageType.ButtonClick,e.MessageType.DataRecordsSelectionChange]}filterMessageDescription(e){return this.supportedMessageTypes.includes(e.messageType)}filterMessage(e){return!0}onExecute(t,s){var r,o;const n=t.type===e.MessageType.DataRecordsSelectionChange&&0===(t.records||[]).length;if(!s||n)return Promise.resolve(!0);let i=null==s?void 0:s.widgetIds.asMutable();const a=null==s?void 0:s.controllerId,p=(0,e.getAppStore)().getState(),c=p.appConfig.widgets[a].config;if(null===(r=null==c?void 0:c.behavior)||void 0===r?void 0:r.onlyOpenOne){const t=null!==(o=p.widgetsRuntimeInfo)&&void 0!==o?o:{},s=Object.keys(t).filter((s=>{const r=t[s];return r.controllerWidgetId===a&&(t=>[e.WidgetState.Opened,e.WidgetState.Active].includes(t.state))(r)}));s.length>0&&(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(s)),i.length>1&&(i=i.slice(0,1))}return(0,e.getAppStore)().dispatch(e.appActions.openWidgets(i,a)),Promise.resolve(!0)}}})(),n})())}}}));