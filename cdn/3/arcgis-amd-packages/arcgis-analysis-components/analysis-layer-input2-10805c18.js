define(["exports","./index-4ba3e564","./index2-929c934e","./utils-170619d9","./helpmap_enterprise-5daf6e11","./analysis-item-browser2-90d48785","./analysis-label2-d915c3e1","./analysis-layer-input-popover2-047da354","./analysis-sketch2-5affb5dd","./isEqual-9b8f87d3"],(function(e,t,s,a,i,r,l,o,n,h){"use strict";const d=e=>!("isConnected"in e)||e.isConnected,c=((e,t)=>{let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(d))})(...e)}),2e3)}})(),y=e=>"function"==typeof e?e():e,p=((e,s)=>{const a=((e,t=((e,t)=>e!==t))=>{const s=y(e);let a=new Map(Object.entries(null!=s?s:{}));const i={dispose:[],get:[],set:[],reset:[]},r=()=>{var t;a=new Map(Object.entries(null!==(t=y(e))&&void 0!==t?t:{})),i.reset.forEach((e=>e()))},l=e=>(i.get.forEach((t=>t(e))),a.get(e)),o=(e,s)=>{const r=a.get(e);t(s,r,e)&&(a.set(e,s),i.set.forEach((t=>t(e,s,r))))},n="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>l(t),ownKeys:e=>Array.from(a.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>a.has(t),set:(e,t,s)=>(o(t,s),!0)}),h=(e,t)=>(i[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(i[e],t)});return{state:n,get:l,set:o,on:h,onChange:(t,s)=>{const a=h("set",((e,a)=>{e===t&&s(a)})),i=h("reset",(()=>s(y(e)[t])));return()=>{a(),i()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),r()},reset:r,forceUpdate:e=>{const t=a.get(e);i.set.forEach((s=>s(e,t,t)))}}})({activeSketchToolName:""},void 0);return a.use((()=>{if("function"!=typeof t.getRenderingRef)return{};const e=new Map;return{dispose:()=>e.clear(),get:s=>{const a=t.getRenderingRef();a&&((e,t,s)=>{const a=e.get(t);a?a.includes(s)||a.push(s):e.set(t,[s])})(e,s,a)},set:s=>{const a=e.get(s);a&&e.set(s,a.filter(t.forceUpdate)),c(e)},reset:()=>{e.forEach((e=>e.forEach(t.forceUpdate))),c(e)}}})()),a})(),u=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisLayerInputChange=t.createEvent(this,"analysisLayerInputChange",7),this.analysisLayerInputClose=t.createEvent(this,"analysisLayerInputClose",7),this.analysisHelpClick=t.createEvent(this,"analysisHelpClick",7),this.replaceId=null,this.filteredMapLayers=[],this.filteredModelVariableLayers=[],this.showNoticeMessage=!1,this.noticeMessage=[],this.warningMessageForPopover=[],this.filterFeatureLayers=e=>e.filter((e=>void 0!==e&&s.isFeatureLayer(e)&&e.loaded)),this.updateWarningMessage=(e,t)=>{const a=t.length-e.length;if(this.warningMessage=void 0,a>0){const i=new Map(this.mapLayers.map((e=>[e.id,e]))),r=t.find((t=>!e.includes(t)))??"",l=i.get(r)?.title??"",o=1===a?this.strings.layerNotAvailable:this.strings.multipleLayersNotAvailable;this.warningMessage=s.formatMessage(o,{layerName:l})}},this.filterInternalLayers=async e=>{const t=e.map((e=>s.getProxyServiceInfo(e,this.user?.portal?.url)));let a=await Promise.all(t);return a=a.filter((e=>void 0!==e)),e.filter((e=>a.includes(e.id)))},this.syncValueWithIds=async()=>{const e=[...this.browsedLayers??[],...this.mapLayers??[],...this.modelVariableLayers??[]],t=[],a=[],i="multi"!==this.selectionMode;for(const i of this.selectedLayerIds??[]){const r=e.find((e=>i===e.id)),l=this.modelVariableLayers?.some((e=>i===e.id));if(void 0!==r){let e;a.push(r),s.isFeatureLayer(r)?e=await s.getGPFeatureRecordSetLayerValue(r,this.mapView):s.isImageryLayer(r)||s.isImageryTileLayer(r)?e=s.getImageryLayerValue(r):s.isTileLayer(r)&&(e=s.getTileLayerValue(r)),void 0!==e&&(!0===l&&(e.variable=i),t.push(e))}}if(this.value=i?t[0]:t,this.selectedLayers=i?a[0]:a,this.processedLayerProperties={},i||Array.isArray(this.selectedLayers)&&1===this.selectedLayers.length){const e=a[0];if(void 0!==e&&(s.isImageryLayer(e)||s.isImageryTileLayer(e)))this.processedLayerProperties=await s.processImageryLayer(e);else if(void 0!==e&&s.isFeatureLayer(e)){const t=e.fields,s=t?.map((e=>e.name));this.processedLayerProperties.fieldNames=s}}this.analysisLayerInputChange.emit()},this.renderInitialMode=()=>(this.removeTooltip(),t.h("section",null,void 0!==this.label&&""!==this.label?t.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit(),hideHelp:this.hideHelp}):null,this.renderButton())),this.renderErrorMessage=()=>{const e=!1===s.isEmptyDataItem(this.validationParams?.message)||void 0!==this.errorMessage,i=s.formatValidationParamsMessage(s.getValidationParamsMessageFromErrorKey(this.strings,this.validationParams)),r=void 0!==this.validationParams?s.getUIInputStatusFromMessageType(this.validationParams.type):s.UIInputStatus.INVALID;return t.h("calcite-input-message",{status:r,hidden:!e,scale:a.UIDefaults.Scale,icon:"exclamationMarkTriangle"},i??this.errorMessage)},this.renderWarningMessage=()=>void 0!==this.warningMessage?t.h("calcite-input-message",{icon:"exclamationMarkTriangle",scale:a.UIDefaults.Scale},t.h("div",{class:"warning-message"},this.warningMessage)):null,this.renderSketchLoadingMessage=()=>!0===this.canCreateAnalysisSketch&&!0===this.isSketchLoading&&t.h("div",{class:"loading-message-wrapper"},t.h("calcite-loader",{class:"loader",scale:a.UIDefaults.Scale,label:this.strings.loadingSketch}),t.h("p",{class:"loading-sketch-message"},this.strings.loadingSketch)),this.handleAnalysisSketchToolsRendered=()=>{this.isSketchLoading=!1,this.setupOutsideSketchClickListener()},this.handleAnalysisSketchLayerChange=e=>{const t=e.detail;!1===s.isEmptyDataItem(t)&&(this.currentSketchLayerId=t.detail[0],this.layerSelectionChange(t))},this.handleAnalysisSketchRemove=async()=>{await this.removeAnalysisSketch()},this.renderCreateSketchButton=()=>t.h(t.Fragment,null,t.h("calcite-button",{ref:e=>{void 0!==e&&(this.createSketchButton=e)},scale:a.UIDefaults.Scale,appearance:"outline",kind:"neutral",iconStart:"pencil-mark",onClick:this.onCreateSketchButtonClicked,label:this.strings.createSketch}),t.h("calcite-tooltip",{dir:this.dir,referenceElement:this.createSketchButton,label:this.strings.drawInputFeatures,placement:"top"},this.strings.drawInputFeatures)),this.removeAnalysisSketch=async()=>{void 0!==this.analysisSketch&&(document.removeEventListener("click",this.handleClickedOutsideSketch),await(this.analysisSketch?.removeSketch()),this.analysisSketch?.remove(),this.analysisSketch=void 0,this.canCreateAnalysisSketch=!1,this.isSketchLoading=!0)},this.setupOutsideSketchClickListener=()=>{document.addEventListener("click",this.handleClickedOutsideSketch),p.onChange("activeSketchToolName",(async e=>{this.analysisSketchToolName!==e&&await this.removeAnalysisSketch()}))},this.handleClickedOutsideSketch=async e=>{e.target.tagName.includes("ANALYSIS-")&&await this.removeAnalysisSketch()},this.onCreateSketchButtonClicked=e=>{e.stopPropagation(),this.analysisSketchToolName=`${this.toolTitle?.trim()??""} ${this.label}`,p.state.activeSketchToolName=this.analysisSketchToolName,this.canCreateAnalysisSketch=!0},this.renderButton=()=>t.h("div",{class:"flex-container"},t.h("calcite-button",{class:"primary-button",appearance:"outline",kind:"neutral",scale:a.UIDefaults.Scale,iconStart:"add-layer",onClick:this.primaryButtonClicked},this.strings.layer),!0===this.enableSketch&&this.renderCreateSketchButton()),this.renderListMode=()=>{const e=Array.isArray(this.selectedLayers)?this.selectedLayers:[this.selectedLayers];return t.h("section",null,t.h("calcite-label",null,void 0!==this.label&&""!==this.label?t.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):null,t.h("calcite-list",{class:"border",selectionMode:"none",onClick:this.replaceLayer,onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},e.map((e=>this.renderListModeItem(e))))),"multi"===this.selectionMode?this.renderButton():null)},this.renderListModeItem=e=>{let a="";if(s.isFeatureLayer(e)&&"featureCount"===this.descriptionDisplay)a=s.formatMessage(this.strings.numberFeatures,{featureCount:this.featureCounts.get(e.id)??this.strings.numberFeaturesLoading});else if("spatialReference"===this.descriptionDisplay){const t=e.fullExtent.spatialReference.latestWkid;a=this.wkidMap.get(t)??""}const i=s.formatMessage(this.strings.layerAction,{layerName:e.title});return t.h("calcite-list-item",{key:e.id,value:e.id,label:s.getLayerLabel(e),description:a},void 0!==this.selectedLayerIcon&&t.h("calcite-icon",{icon:this.selectedLayerIcon,slot:"content-start"}),t.h("calcite-action",{"data-layerId":e.id,text:i,slot:"actions-end",label:i,appearance:"transparent",icon:"x",onClick:this.actionClicked}))},this.layerSelectionChange=async e=>{"multi"!==this.selectionMode&&(a.removeOpenableDomElement(this.layerInputPopover),this.layerInputPopover=void 0);const t=e.detail;if(null===this.replaceId){const e=(this.selectedLayerIds??[]).filter((e=>this.browsedLayers.some((t=>t.id===e))));this.selectedLayerIds=[...t,...e]}else this.browsedLayers=this.browsedLayers.map((t=>this.replaceId===t.id?e.detail[0]:t)).filter((e=>void 0!==e)),this.selectedLayerIds=this.selectedLayerIds?.map((e=>e===this.replaceId?t?.[0]:e)),this.replaceId=null;const s=this.selectedLayerIds?.find((e=>e===this.currentSketchLayerId));void 0===s&&await this.removeAnalysisSketch(),await this.syncValueWithIds(),this.validate()},this.handleLayerBrowsed=e=>{"multi"!==this.selectionMode?(this.browsedLayers=e.detail,this.selectedLayers=this.browsedLayers):null===this.replaceId?(this.browsedLayers=[...this.browsedLayers,...e.detail],this.selectedLayers=[...this.selectedLayers??[],...this.browsedLayers]):(this.browsedLayers=this.browsedLayers.map((t=>this.replaceId===t.id?e.detail[0]:t)),this.selectedLayers=this.selectedLayers?.map((t=>this.replaceId===t.id?e.detail[0]:t)),this.replaceId=null),this.validate(),this.updateFeatureCounts(this.browsedLayers)},this.primaryButtonClicked=e=>{this.createLayerPopover(e.target)},this.replaceLayer=e=>{const t=e.target;"calcite-list-item"===t?.localName&&(this.replaceId=t.value,this.createLayerPopover(t),void 0!==this.layerInputPopover&&null!==this.replaceId&&(this.layerInputPopover.selectedLayerIds=[this.replaceId]))},this.actionClicked=async e=>{const t=e.target?.getAttribute("data-layerId");this.selectedLayerIds=this.selectedLayerIds?.filter((e=>e!==t)),this.browsedLayers=this.browsedLayers.filter((e=>e.id!==t)),this.analysisLayerInputClose.emit(),await this.removeAnalysisSketch(),await this.syncValueWithIds(),this.validate()},this.mouseOver=e=>{const t=e.target;"calcite-list-item"===t?.localName&&(void 0===this.replaceTooltip&&(this.replaceTooltip=document.createElement("calcite-tooltip"),this.replaceTooltip.placement="bottom",this.replaceTooltip.innerText=this.strings.replaceLayer),this.replaceTooltip.referenceElement=t,a.addOpenableDomElement(document,this.replaceTooltip))},this.mouseOut=()=>{this.removeTooltip()},this.layerPopoverClose=()=>{this.replaceId=null,a.removeOpenableDomElement(this.layerInputPopover),this.layerInputPopover=void 0,this.validate()},this.validate=()=>{this.warningMessage=void 0,this.errorMessage=void 0;const e=s.formatValidationParamsMessage(s.getValidationParamsMessageFromErrorKey(this.strings,this.validationParams));!1!=(!this.required||void 0!==this.selectedLayers&&(!Array.isArray(this.selectedLayers)||this.selectedLayers.length>0))?void 0!==this.selectedLayerFeatureCount&&(void 0!==this.minimumFeatureCount&&this.selectedLayerFeatureCount<this.minimumFeatureCount&&(this.errorMessage=void 0!==this.validationParams?.message?e:s.formatMessage(this.strings.featureCountBelowMinimum,{label:this.label,minimum:this.minimumFeatureCount.toString()})),void 0!==this.maximumFeatureCount&&this.selectedLayerFeatureCount>this.maximumFeatureCount&&(this.errorMessage=void 0!==this.validationParams?.message?e:s.formatMessage(this.strings.featureCountAboveMaximum,{label:this.label,maximum:this.maximumFeatureCount.toString()}))):this.errorMessage=void 0!==this.validationParams?.message?e:s.formatMessage(this.strings.isRequired,{label:this.label??this.strings.layer})},this.removeTooltip=()=>{a.removeOpenableDomElement(this.replaceTooltip)},this.updateFeatureCounts=e=>{const{mapView:t}=this,a=this.filterFeatureLayers(e).map((async e=>{let a;try{a=(await s.queryCount(e,t)).toString()}catch{}return[e.id,a]}));return Promise.all(a).then((e=>{const t=e.filter((([,e])=>void 0!==e)),s=[...this.featureCounts].filter((([e])=>this.selectedLayerIds?.includes(e)));this.featureCounts=new Map([...s,...t])})).catch((()=>{}))},this.hideAddToMap=!1,this.value=void 0,this.label=void 0,this.required=!1,this.validationParams=void 0,this.user=void 0,this.portalHelpMap=void 0,this.enableSketch=!1,this.mapLayers=[],this.modelVariableLayers=void 0,this.mapView=void 0,this.selectionMode=void 0,this.selectedLayers=void 0,this.selectedLayerIds=void 0,this.toolTitle=void 0,this.selectedLayerFeatureCount=void 0,this.minimumFeatureCount=void 0,this.maximumFeatureCount=void 0,this.processedLayerProperties={},this.layerFilterType=void 0,this.descriptionDisplay="featureCount",this.hideBrowseButton=!1,this.selectedLayerIcon=void 0,this.hideHelp=!1,this.popoverWidth=void 0,this.canCreateAnalysisSketch=!1,this.isSketchLoading=!0,this.featureCounts=new Map,this.browsedLayers=[],this.errorMessage=void 0}async mapLayersChange(e,t){let i=e;const r=void 0!==this.selectedLayerIds?.find((e=>e===this.currentSketchLayerId)),l=void 0===e.find((e=>e?.id===this.currentSketchLayerId));e.length!==t?.length&&!0===r&&!0===l&&(this.selectedLayerIds=this.selectedLayerIds?.filter((e=>e!==this.currentSketchLayerId)),await this.syncValueWithIds()),!1===s.isEmptyDataItem(this.user?.portal)&&!1===this.user?.portal.isPortal&&(i=await this.filterInternalLayers(e));const{validLayers:o}=await a.filterLayersByType({layers:i,layerFilterTypes:this.layerFilterType,user:this.user}),n=s.filterLayersAllowAnalysis(o,this.user?.orgId);if(n.length<e.length){this.noticeMessage=[];const t=i.length<e.length,s=n.length<o.length;t&&this.warningMessageForPopover.push("proxyReason"),s&&this.warningMessageForPopover.push("allowAnalysisReason")}this.showNoticeMessage=this.warningMessageForPopover.length>0,this.filteredMapLayers=n.filter((e=>e.loaded)),void 0!==this.layerInputPopover&&(this.layerInputPopover.mapLayers=this.filteredMapLayers),"featureCount"===this.descriptionDisplay&&this.updateFeatureCounts(e)}async modelVariableLayersChange(e){const{validLayers:t}=await a.filterLayersByType({layers:e,layerFilterTypes:this.layerFilterType,user:this.user});this.filteredModelVariableLayers=t,void 0!==this.layerInputPopover&&(this.layerInputPopover.modelVariableLayers=this.filteredModelVariableLayers),"featureCount"===this.descriptionDisplay&&this.updateFeatureCounts(e)}async selectedLayersChange(e,t){if(void 0!==e&&!h.isEqual(e,t)){let t=Array.isArray(e)?e:[e];const s=t.map((e=>e.id)),a=await Promise.allSettled(t.map((e=>e.loaded?Promise.resolve(e):e.load())));t=a.filter((e=>"fulfilled"===e.status)).map((e=>e.value));const i=t.filter((e=>e.loaded)).map((e=>e.id));this.updateWarningMessage(i,s),this.selectedLayerIds=Array.from(new Set(i));const r=this.featureCounts.get(this.selectedLayerIds?.[0]??"");void 0!==r&&"multi"!==this.selectionMode&&(this.selectedLayerFeatureCount=parseInt(r)),await this.syncValueWithIds(),void 0===this.warningMessage&&this.validate()}}async layerFilterTypeChange(e,t){h.isEqual(e,t)||await this.mapLayersChange(this.mapLayers)}onFeatureCountChange(){if(void 0!==this.selectedLayerIds&&this.selectedLayerIds.length>0&&"multi"!==this.selectionMode){const e=this.featureCounts.get(this.selectedLayerIds[0]);void 0!==e&&this.selectedLayerFeatureCount!==parseInt(e)&&(this.selectedLayerFeatureCount=parseInt(e),this.analysisLayerInputChange.emit())}}async checkValidity(){this.validate();const e=void 0===this.errorMessage&&(void 0===this.validationParams?.message||"informative"===this.validationParams.type);return Promise.resolve(e)}disconnectedCallback(){a.removeOpenableDomElement(this.layerInputPopover),a.removeOpenableDomElement(this.replaceTooltip),document.removeEventListener("click",this.handleClickedOutsideSketch)}async componentWillLoad(){({strings:this.strings,dir:this.dir}=await s.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),this.wkidMap=s.getWkidMap(),void 0!==this.mapLayers&&this.mapLayersChange(this.mapLayers),void 0!==this.modelVariableLayers&&this.modelVariableLayersChange(this.modelVariableLayers),await this.selectedLayersChange(this.selectedLayers,void 0)}get isInitialMode(){return void 0===this.selectedLayerIds||0===this.selectedLayerIds.length||void 0===this.selectedLayers}render(){return t.h(t.Host,{key:"e53a0983d1260677e10c643cc6fc6ea1c4701ee0"},t.h(t.Fragment,{key:"0b1f0a80cf8a33e0c349e6bec7f2fe91ecff28ca"},!0===this.canCreateAnalysisSketch&&t.h("analysis-sketch",{key:"e1a2181c8a6bc50a9698fcdfc0120054072db7a5",ref:e=>{void 0!==e&&(this.analysisSketch=e)},referenceElement:this.hostElement,label:this.label,toolTitle:this.toolTitle,layerFilterType:this.layerFilterType,mapView:this.mapView,mapLayers:this.filteredMapLayers,onAnalysisSketchToolsRendered:this.handleAnalysisSketchToolsRendered,onAnalysisSketchLayerChange:this.handleAnalysisSketchLayerChange,onAnalysisSketchRemove:this.handleAnalysisSketchRemove}),this.isInitialMode?this.renderInitialMode():this.renderListMode(),this.renderErrorMessage(),this.renderWarningMessage(),this.renderSketchLoadingMessage()))}createLayerPopover(e){void 0===this.layerInputPopover&&(this.layerInputPopover=document.createElement("analysis-layer-input-popover"),this.layerInputPopover.addEventListener("analysisLayerInputPopoverClose",this.layerPopoverClose),this.layerInputPopover.addEventListener("analysisLayerInputPopoverSelectionChange",this.layerSelectionChange),this.layerInputPopover.addEventListener("analysisLayerInputPopoverLayerBrowsed",this.handleLayerBrowsed)),!0===this.isInitialMode||"calcite-button"===e.localName?(this.layerInputPopover.selectionMode=this.selectionMode,void 0!==this.selectedLayerIds&&(this.layerInputPopover.selectedLayerIds=[...this.selectedLayerIds])):this.layerInputPopover.selectionMode="single",this.layerInputPopover.mapLayers=this.filteredMapLayers,this.layerInputPopover.modelVariableLayers=this.filteredModelVariableLayers,this.layerInputPopover.hideAddToMap=this.hideAddToMap,this.layerInputPopover.itemBrowserFilter=a.makePortalSearchFilterByType(this.layerFilterType),this.layerInputPopover.itemBrowserQ=a.makePortalSearchQByType(this.layerFilterType,this.user?.orgId),this.layerInputPopover.itemBrowserAllowedGeometries=a.makeAllowedGeometriesByType(this.layerFilterType),this.layerInputPopover.layerFilterType=this.layerFilterType,this.layerInputPopover.showNoticeMessage=this.showNoticeMessage;const t=this.warningMessageForPopover.map((e=>{const t="allowAnalysisReason"===e?"allowAnalysis":"supportedData",a=!0===this.user?.portal?.isPortal&&void 0!==this.portalHelpMap?this.portalHelpMap?.m[i.helpMapEnterprise.map.OtherHelpLinks[t]]:i.helpMap.map.OtherHelpLinks[t],r=s.formatLearnMoreHelpUrl({url:a,basePath:s.getHelpBaseUrl(this.user?.portal),portalUrl:this.user?.portal?.restUrl});return s.formatMessage(this.strings[e],{docLink:r})}));this.layerInputPopover.noticeMessage=[...this.noticeMessage,...t],this.layerInputPopover.placement="leading",this.layerInputPopover.dir=this.dir,this.layerInputPopover.hideBrowseButton=this.hideBrowseButton,this.layerInputPopover.referenceElement=e.parentElement??e,this.layerInputPopover.popoverWidth=this.popoverWidth??e.parentElement?.offsetWidth,this.layerInputPopover.mapView=this.mapView,void 0!==this.user&&(this.layerInputPopover.user=this.user,this.layerInputPopover.portal=this.user?.portal),a.addOpenableDomElement(document,this.layerInputPopover)}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{mapLayers:["mapLayersChange"],modelVariableLayers:["modelVariableLayersChange"],selectedLayers:["selectedLayersChange"],layerFilterType:["layerFilterTypeChange"],featureCounts:["onFeatureCountChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;flex-direction:column;width:var(--analysis-component-default-width);margin-bottom:var(--analysis-half-spacing);--calcite-label-margin-bottom:0;--layer-selected-margin-bottom:var(--analysis-half-spacing)}:host([hidden]){display:none}.flex-container{display:flex;width:var(--analysis-component-default-width);column-gap:3%}.primary-button{flex:1 1 auto}.secondary-button{flex:auto 1 auto}.text{padding-bottom:var(--analysis-quarter-spacing);margin-block-start:0;margin-block-end:0}.border{border:1px solid var(--calcite-color-border-input);margin-bottom:var(--layer-selected-margin-bottom)}.warning-message{word-wrap:break-word;overflow-wrap:anywhere}.loading-message-wrapper{margin-top:var(--analysis-half-spacing);display:flex;justify-content:center;gap:1rem}.loading-message-wrapper .loading-sketch-message{margin:0}.loading-message-wrapper .loader{--calcite-loader-size:1rem;margin:0;padding:0}"}},[1,"analysis-layer-input",{hideAddToMap:[4,"hide-add-to-map"],value:[1040],label:[513],required:[516],validationParams:[16],user:[16],portalHelpMap:[16],enableSketch:[516,"enable-sketch"],mapLayers:[16],modelVariableLayers:[16],mapView:[16],selectionMode:[513,"selection-mode"],selectedLayers:[1040],selectedLayerIds:[1040],toolTitle:[1,"tool-title"],selectedLayerFeatureCount:[1026,"selected-layer-feature-count"],minimumFeatureCount:[2,"minimum-feature-count"],maximumFeatureCount:[2,"maximum-feature-count"],processedLayerProperties:[1040],layerFilterType:[1,"layer-filter-type"],descriptionDisplay:[513,"description-display"],hideBrowseButton:[516,"hide-browse-button"],selectedLayerIcon:[513,"selected-layer-icon"],hideHelp:[516,"hide-help"],popoverWidth:[514,"popover-width"],canCreateAnalysisSketch:[32],isSketchLoading:[32],featureCounts:[32],browsedLayers:[32],errorMessage:[32],checkValidity:[64]},void 0,{mapLayers:["mapLayersChange"],modelVariableLayers:["modelVariableLayersChange"],selectedLayers:["selectedLayersChange"],layerFilterType:["layerFilterTypeChange"],featureCounts:["onFeatureCountChange"]}]);function m(){"undefined"!=typeof customElements&&["analysis-layer-input","analysis-item-browser","analysis-label","analysis-layer-input-popover","analysis-sketch"].forEach((e=>{switch(e){case"analysis-layer-input":customElements.get(e)||customElements.define(e,u);break;case"analysis-item-browser":customElements.get(e)||r.defineCustomElement();break;case"analysis-label":customElements.get(e)||l.defineCustomElement();break;case"analysis-layer-input-popover":customElements.get(e)||o.defineCustomElement();break;case"analysis-sketch":customElements.get(e)||n.defineCustomElement()}}))}m(),e.AnalysisLayerInput=u,e.defineCustomElement=m}));