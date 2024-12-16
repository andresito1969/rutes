System.register(["jimu-core","calcite-components","jimu-core/react","jimu-ui","esri/rest/locator","esri/widgets/Search","esri/widgets/Search/LocatorSearchSource.js","esri/widgets/Search/LayerSearchSource.js","esri/geometry/Point","esri/request.js","jimu-theme","jimu-ui/basic/color-picker","jimu-arcgis","esri/layers/GraphicsLayer","esri/layers/FeatureLayer","esri/Graphic","esri/layers/support/LabelClass","esri/symbols/TextSymbol.js","esri/layers/GroupLayer","esri/widgets/Sketch/SketchViewModel","jimu-core/react-dom"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE__esri_calcite_components_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_locator__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search_LocatorSearchSource_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search_LayerSearchSource_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_request_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_support_LabelClass__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_TextSymbol_js__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GroupLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Sketch_SketchViewModel__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__esri_calcite_components_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_locator__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search_LocatorSearchSource_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search_LayerSearchSource_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_request_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_support_LabelClass__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_TextSymbol_js__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GroupLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Sketch_SketchViewModel__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__esri_calcite_components_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_locator__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search_LocatorSearchSource_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search_LayerSearchSource_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_request_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_support_LabelClass__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_TextSymbol_js__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GroupLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Sketch_SketchViewModel__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/automaticRouteStyle.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/automaticRouteStyle.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.automatic-route .automatic-route-container {
  padding: 0 20px 0 20px;
}
.automatic-route .waypoint-table {
  margin: 20px 0 20px 0;
  row-gap: 10px;
}
.automatic-route .waypoint-table-body {
  background-color: #D0D0D0;
}
.automatic-route .center-text {
  text-align: center;
}
.automatic-route .search-marker-icon {
  position: relative;
  width: 25px;
  height: 25px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #000;
  cursor: pointer;
}
.automatic-route .search-marker-icon.active {
  background-color: #ccffcc;
}
.automatic-route .search-marker-icon::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 7px solid #000;
}
.automatic-route .row-btn {
  justify-content: flex-end;
}
.automatic-route .direction-trash-icon {
  cursor: pointer;
}
.automatic-route .direction-common-icons {
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
}

.execute-btn {
  background-color: var(--ref-palette-primary-600);
  color: white;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/automaticRouteStyle.css"],"names":[],"mappings":"AACE;EACE,sBAAA;AAAJ;AAGE;EACE,qBAAA;EACA,aAAA;AADJ;AAGE;EACE,yBAAA;AADJ;AAGE;EACE,kBAAA;AADJ;AAIE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;AAFJ;AAKE;EACE,yBAAA;AAHJ;AAME;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;EACA,QAAA;EACA,SAAA;EACA,kCAAA;EACA,mCAAA;EACA,0BAAA;AAJJ;AAOE;EACE,yBAAA;AALJ;AAQE;EACE,eAAA;AANJ;AASE;EACE,6BAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;AAPJ;;AAWA;EACE,gDAAA;EACA,YAAA;AARF","sourcesContent":[".automatic-route {\n  .automatic-route-container {\n    padding: 0 20px 0 20px;\n  }\n\n  .waypoint-table {\n    margin: 20px 0 20px 0;\n    row-gap: 10px;\n  }\n  .waypoint-table-body {\n    background-color: #D0D0D0;\n  }\n  .center-text {\n    text-align: center;\n  }\n\n  .search-marker-icon {\n    position: relative;\n    width: 25px;\n    height: 25px;\n    border: 2px solid #000;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    color: #000;\n    cursor: pointer;\n  }\n\n  .search-marker-icon.active {\n    background-color: #ccffcc;\n  }\n\n  .search-marker-icon::after {\n    content: '';\n    position: absolute;\n    bottom: -8px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 0;\n    height: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-top: 7px solid #000;\n  }\n\n  .row-btn {\n    justify-content: flex-end;\n  }\n\n  .direction-trash-icon {\n    cursor: pointer;\n  }\n\n  .direction-common-icons {\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    margin: 0;\n    outline: none;\n  }\n}\n\n.execute-btn{\n  background-color: var(--ref-palette-primary-600);\n  color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/popper.css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/popper.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Popper Style Layer*/
.geoprocessor-cad-layer-style-popper .add-data-popper-content {
  position: relative;
  height: calc(100% - 56px);
}
.geoprocessor-cad-layer-style-popper .tab-content {
  overflow: hidden;
}
.geoprocessor-cad-layer-style-popper .jimu-nav {
  border-bottom: 1px solid var(--light-400);
}
.geoprocessor-cad-layer-style-popper .multiple-lines-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
  word-wrap: break-word;
}
.geoprocessor-cad-layer-style-popper .item-selector-search .text-input-prefix svg {
  margin-left: 0 !important;
  color: var(--light-800) !important;
}
.geoprocessor-cad-layer-style-popper .custom-button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid black;
}
.geoprocessor-cad-layer-style-popper .custom-radio-icon:checked ~ .custom-button {
  background-color: #bbb;
}
.geoprocessor-cad-layer-style-popper .radio-container {
  display: flex;
}
.geoprocessor-cad-layer-style-popper .custom-button calcite-icon {
  position: relative;
  top: 2px;
}

/* FORM */
.geoprocessor-cad-layer-form-popper .data-file-upload {
  position: relative;
  color: var(--dark-500);
}
.geoprocessor-cad-layer-form-popper .popper-container {
  overflow: auto;
  width: 240px;
  height: 800px;
}
.geoprocessor-cad-layer-form-popper .font-14 {
  font-size: 14px;
}
.geoprocessor-cad-layer-form-popper .font-16 {
  font-size: 16px;
  font-weight: 500;
}
.geoprocessor-cad-layer-form-popper .upload-loading-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--white);
  z-index: 2;
}
.geoprocessor-cad-layer-form-popper .upload-loading-content {
  position: absolute;
  top: 0;
  bottom: 60px;
  right: 0;
  left: 0;
}
.geoprocessor-cad-layer-form-popper .upload-loading-file-name {
  position: absolute;
  width: 200px;
  height: 100px;
  right: calc(50% - 100px);
  top: 80px;
  word-break: break-all;
  overflow: hidden;
}
.geoprocessor-cad-layer-form-popper .upload-loading-btn {
  position: absolute;
  width: 200px;
  height: 32px;
  right: calc(50% - 100px);
  top: calc(50% + 80px);
}
.geoprocessor-cad-layer-form-popper .upload-loading-btn button.btn-danger {
  background-color: var(--danger-500);
  border: 0;
}
.geoprocessor-cad-layer-form-popper .supported-types {
  font-size: 13px;
}
.geoprocessor-cad-layer-form-popper .drag-area-container {
  width: 100%;
  height: 150px;
}
.geoprocessor-cad-layer-form-popper .drag-area {
  border: 1px dashed var(--light-400);
  padding-top: 20%;
  width: 100%;
  height: 100%;
  user-select: none;
}
.geoprocessor-cad-layer-form-popper .upload-btn {
  border: 1px solid var(--light-400);
  color: var(--dark-800);
  background-color: var(--white);
  border-radius: 2px;
  line-height: 28px;
  padding-left: 16px;
  padding-right: 16px;
  height: 30px;
  user-select: none;
  max-width: 100%;
}
.geoprocessor-cad-layer-form-popper .upload-btn-container:hover .upload-btn {
  background-color: var(--light-200) !important;
}
.geoprocessor-cad-layer-form-popper .drag-area-container,
.geoprocessor-cad-layer-form-popper .upload-btn-container {
  position: relative;
  display: inline-block;
  z-index: 1;
}
.geoprocessor-cad-layer-form-popper .upload-btn-file-input,
.geoprocessor-cad-layer-form-popper .drag-area-file-input {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}
.geoprocessor-cad-layer-form-popper .input-select-radio-projection,
.geoprocessor-cad-layer-form-popper .input-select-radio-character-codification {
  padding-top: 10px;
}
.geoprocessor-cad-layer-form-popper .upload-btn-file-input {
  cursor: pointer;
}
.geoprocessor-cad-layer-form-popper .data-error {
  padding-left: 0 !important;
  padding-right: 0 !important;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/popper.css"],"names":[],"mappings":"AAAA,sBAAA;AAEE;EACE,kBAAA;EACA,yBAAA;AAAJ;AAGE;EACE,gBAAA;AADJ;AAIE;EACE,yCAAA;AAFJ;AAKE;EACE,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,sBAAA;EACA,qBAAA;AAHJ;AAQM;EACE,yBAAA;EACA,kCAAA;AANR;AAWE;EACE,qBAAA;EACA,eAAA;EACA,uBAAA;AATJ;AAYE;EACE,sBAAA;AAVJ;AAaE;EACE,aAAA;AAXJ;AAcE;EACE,kBAAA;EACA,QAAA;AAZJ;;AAgBA,SAAA;AAEE;EACE,kBAAA;EACA,sBAAA;AAdJ;AAiBE;EACE,cAAA;EACA,YAAA;EACA,aAAA;AAfJ;AAkBE;EACE,eAAA;AAhBJ;AAmBE;EACE,eAAA;EACA,gBAAA;AAjBJ;AAoBE;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,OAAA;EACA,8BAAA;EACA,UAAA;AAlBJ;AAqBE;EACE,kBAAA;EACA,MAAA;EACA,YAAA;EACA,QAAA;EACA,OAAA;AAnBJ;AAsBE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,wBAAA;EACA,SAAA;EACA,qBAAA;EACA,gBAAA;AApBJ;AAuBE;EACE,kBAAA;EACA,YAAA;EACA,YAAA;EACA,wBAAA;EACA,qBAAA;AArBJ;AAuBI;EACE,mCAAA;EACA,SAAA;AArBN;AAyBE;EACE,eAAA;AAvBJ;AA0BE;EACE,WAAA;EACA,aAAA;AAxBJ;AA2BE;EACE,mCAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAzBJ;AA4BE;EACE,kCAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AA1BJ;AA8BI;EACE,6CAAA;AA5BN;AAgCE;;EAEE,kBAAA;EACA,qBAAA;EACA,UAAA;AA9BJ;AAiCE;;EAEE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;AA/BJ;AAkCE;;EAEE,iBAAA;AAhCJ;AAmCE;EACE,eAAA;AAjCJ;AAoCE;EACE,0BAAA;EACA,2BAAA;AAlCJ","sourcesContent":["/* Popper Style Layer*/\n.geoprocessor-cad-layer-style-popper {\n  .add-data-popper-content {\n    position: relative;\n    height: calc(100% - 56px);\n  }\n\n  .tab-content {\n    overflow: hidden;\n  }\n\n  .jimu-nav {\n    border-bottom: 1px solid var(--light-400);\n  }\n\n  .multiple-lines-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    word-break: break-word;\n    word-wrap: break-word;\n  }\n\n  .item-selector-search {\n    .text-input-prefix {\n      svg {\n        margin-left: 0 !important;\n        color: var(--light-800) !important;\n      }\n    }\n  }\n\n  .custom-button {\n    display: inline-block;\n    cursor: pointer;\n    border: 1px solid black;\n  }\n\n  .custom-radio-icon:checked~.custom-button {\n    background-color: #bbb;\n  }\n\n  .radio-container {\n    display: flex;\n  }\n\n  .custom-button calcite-icon {\n    position: relative;\n    top: 2px;\n  }\n}\n\n/* FORM */\n.geoprocessor-cad-layer-form-popper {\n  .data-file-upload {\n    position: relative;\n    color: var(--dark-500);\n  }\n\n  .popper-container {\n    overflow: auto;\n    width: 240px;\n    height: 800px;\n  }\n\n  .font-14 {\n    font-size: 14px;\n  }\n\n  .font-16 {\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  .upload-loading-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: var(--white);\n    z-index: 2;\n  }\n\n  .upload-loading-content {\n    position: absolute;\n    top: 0;\n    bottom: 60px;\n    right: 0;\n    left: 0;\n  }\n\n  .upload-loading-file-name {\n    position: absolute;\n    width: 200px;\n    height: 100px;\n    right: calc(50% - 100px);\n    top: 80px;\n    word-break: break-all;\n    overflow: hidden;\n  }\n\n  .upload-loading-btn {\n    position: absolute;\n    width: 200px;\n    height: 32px;\n    right: calc(50% - 100px);\n    top: calc(50% + 80px);\n\n    button.btn-danger {\n      background-color: var(--danger-500);\n      border: 0;\n    }\n  }\n\n  .supported-types {\n    font-size: 13px;\n  }\n\n  .drag-area-container {\n    width: 100%;\n    height: 150px;\n  }\n\n  .drag-area {\n    border: 1px dashed var(--light-400);\n    padding-top: 20%;\n    width: 100%;\n    height: 100%;\n    user-select: none;\n  }\n\n  .upload-btn {\n    border: 1px solid var(--light-400);\n    color: var(--dark-800);\n    background-color: var(--white);\n    border-radius: 2px;\n    line-height: 28px;\n    padding-left: 16px;\n    padding-right: 16px;\n    height: 30px;\n    user-select: none;\n    max-width: 100%;\n  }\n\n  .upload-btn-container:hover {\n    .upload-btn {\n      background-color: var(--light-200) !important;\n    }\n  }\n\n  .drag-area-container,\n  .upload-btn-container {\n    position: relative;\n    display: inline-block;\n    z-index: 1;\n  }\n\n  .upload-btn-file-input,\n  .drag-area-file-input {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    opacity: 0;\n  }\n\n  .input-select-radio-projection,\n  .input-select-radio-character-codification {\n    padding-top: 10px;\n  }\n\n  .upload-btn-file-input {\n    cursor: pointer;\n  }\n\n  .data-error {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/style.css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/style.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.geoprocess-cad .widget-add-data {
  background-color: var(--white);
  position: relative;
}
.geoprocess-cad .no-data-placeholder {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.geoprocess-cad .no-data-placeholder .no-data-placeholder-text,
.geoprocess-cad .no-data-placeholder .no-data-placeholder-icon,
.geoprocess-cad .no-data-placeholder .no-data-placeholder-btn {
  display: table;
  margin: 0 auto;
}
.geoprocess-cad .no-data-placeholder .no-data-placeholder-text {
  color: var(--dark-500);
  font-size: 0.8125rem;
  margin-top: 1rem;
  text-align: center;
}
.geoprocess-cad .no-data-placeholder .no-data-placeholder-icon {
  color: var(--dark-800);
}
.geoprocess-cad .no-data-placeholder .no-data-placeholder-btn {
  margin-top: 1rem;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/style.css"],"names":[],"mappings":"AACE;EACE,8BAAA;EACA,kBAAA;AAAJ;AAGE;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AADJ;AAGI;;;EAGE,cAAA;EACA,cAAA;AADN;AAII;EACE,sBAAA;EACA,oBAAA;EACA,gBAAA;EACA,kBAAA;AAFN;AAKI;EACE,sBAAA;AAHN;AAMI;EACE,gBAAA;AAJN","sourcesContent":[".geoprocess-cad {\n  .widget-add-data {\n    background-color: var(--white);\n    position: relative;\n  }\n\n  .no-data-placeholder {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n\n    .no-data-placeholder-text,\n    .no-data-placeholder-icon,\n    .no-data-placeholder-btn {\n      display: table;\n      margin: 0 auto;\n    }\n\n    .no-data-placeholder-text {\n      color: var(--dark-500);\n      font-size: 0.8125rem;\n      margin-top: 1rem;\n      text-align: center;\n    }\n\n    .no-data-placeholder-icon {\n      color: var(--dark-800);\n    }\n\n    .no-data-placeholder-btn {\n      margin-top: 1rem;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/style.css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/style.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.row-buttons {
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 7%;
  margin-left: 10%;
}

.button-item {
  padding: 10px 20px;
  cursor: pointer;
  height: 60px;
  width: 60px;
  background-color: var(--sys-color-primary-main);
  border-radius: 8px;
}

.button-item:hover {
  background-color: var(--sys-color-primary-main);
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/route-edition/src/runtime/style.css"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sCAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,kBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,+CAAA;EACA,kBAAA;AACF;;AAEA;EACE,+CAAA;AACF","sourcesContent":[".row-buttons { \n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  margin-top: 7%;\n  margin-left: 10%;\n}\n\n.button-item {\n  padding: 10px 20px;\n  cursor: pointer;\n  height: 60px;\n  width: 60px;\n  background-color: var(--sys-color-primary-main); // Color definit al configurador de tema d'experience builder\n  border-radius: 8px;\n}\n\n.button-item:hover {\n  background-color: var(--sys-color-primary-main); // Color definit al configurador de tema d'experience builder\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/automaticRouteStyle.css":
/*!*************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/automaticRouteStyle.css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_automaticRouteStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./automaticRouteStyle.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/automaticRouteStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_automaticRouteStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_automaticRouteStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_automaticRouteStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_automaticRouteStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/popper.css":
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/popper.css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_popper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./popper.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/popper.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_popper_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_popper_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_popper_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_popper_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/style.css":
/*!********************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/style.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/style.css":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/style.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/route-edition/src/runtime/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/empty.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/empty.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M7.5 1.5a.5.5 0 0 1 1 0v2.8a.5.5 0 0 1-1 0zm6.028.874a.5.5 0 0 1 .062.705l-1.414 1.685a.5.5 0 1 1-.766-.643l1.414-1.685a.5.5 0 0 1 .704-.062m-10.352.062a.5.5 0 1 0-.766.643l1.414 1.685a.5.5 0 0 0 .766-.643zM6.244 10.6H5.43zM.961 9.8h4.88c.211 0 .359.19.359.4q0 .207.045.4a1.8 1.8 0 0 0 3.51 0h.814a2.6 2.6 0 0 1-5.139 0H.8v3.6h14.4v-3.6H9.755q.045-.194.045-.4c0-.21.148-.4.358-.4h4.881l-2.267-3.4H3.228zm11.81-4.2a.8.8 0 0 1 .666.356l2.429 3.642a.8.8 0 0 1 .134.444V14.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8v-4.158a.8.8 0 0 1 .134-.444l2.429-3.642a.8.8 0 0 1 .665-.356z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/setting.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/setting.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M9.438.994c.213 0 .397.146.44.35q.227 1.084.316 1.852.562.242 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 22 22 0 0 1-1.49 1.194q.03.27.03.552 0 .32-.038.63l1.465 1.12a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 23 23 0 0 1-1.807-.66q-.49.35-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21 21 0 0 1-.317-1.853 5.3 5.3 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546q.85-.735 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196q1.078.35 1.807.66c.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19q-.353.144-.672.34l-.207.136-.42.293-.476-.197q-.492-.205-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4 4 0 0 0-.021.816l.014.144.058.492-.419.294q-.433.304-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29q.307.219.645.384l.228.103.474.199.059.49q.06.507.19 1.177l.043.219h2.088l.282-1.867.466-.19q.354-.144.672-.34l.207-.136.419-.293.476.198q.495.204 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4 4 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18 18 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.5 4.5 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49q-.049-.405-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/close.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/close.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/plus.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/plus.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/trash.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/trash.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1m0 3V1H5v2zm1.895 1h-9.79l.8 11h8.19z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/application/empty.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/application/empty.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyOutlined: () => (/* binding */ EmptyOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_empty_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/empty.svg */ "./jimu-icons/svg/outlined/application/empty.svg");
/* harmony import */ var _svg_outlined_application_empty_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_empty_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const EmptyOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_empty_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/application/setting.tsx":
/*!*****************************************************!*\
  !*** ./jimu-icons/outlined/application/setting.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingOutlined: () => (/* binding */ SettingOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/setting.svg */ "./jimu-icons/svg/outlined/application/setting.svg");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const SettingOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/close.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/close.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseOutlined: () => (/* binding */ CloseOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/close.svg */ "./jimu-icons/svg/outlined/editor/close.svg");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const CloseOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/plus.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/plus.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlusOutlined: () => (/* binding */ PlusOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/plus.svg */ "./jimu-icons/svg/outlined/editor/plus.svg");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const PlusOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/trash.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/trash.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrashOutlined: () => (/* binding */ TrashOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/trash.svg */ "./jimu-icons/svg/outlined/editor/trash.svg");
/* harmony import */ var _svg_outlined_editor_trash_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_trash_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const TrashOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_trash_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/assets/index.ts":
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/assets/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutomaticRouteIcon: () => (/* reexport module object */ _automatic_route_svg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   NewInterestPointIcon: () => (/* reexport module object */ _new_interest_point_svg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   NewManualRouteIcon: () => (/* reexport module object */ _new_route_svg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   SelectRouteIcon: () => (/* reexport module object */ _select_route_svg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   TrashIcon: () => (/* reexport module object */ _trash_svg__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _select_route_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-route.svg */ "./your-extensions/widgets/route-edition/src/runtime/assets/select-route.svg");
/* harmony import */ var _select_route_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_select_route_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _new_route_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-route.svg */ "./your-extensions/widgets/route-edition/src/runtime/assets/new-route.svg");
/* harmony import */ var _new_route_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_new_route_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _new_interest_point_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-interest-point.svg */ "./your-extensions/widgets/route-edition/src/runtime/assets/new-interest-point.svg");
/* harmony import */ var _new_interest_point_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_new_interest_point_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _automatic_route_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./automatic-route.svg */ "./your-extensions/widgets/route-edition/src/runtime/assets/automatic-route.svg");
/* harmony import */ var _automatic_route_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_automatic_route_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trash.svg */ "./your-extensions/widgets/route-edition/src/runtime/assets/trash.svg");
/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_trash_svg__WEBPACK_IMPORTED_MODULE_4__);







/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AppSelectorComponent.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AppSelectorComponent.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSelector: () => (/* binding */ AppSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @esri/calcite-components-react */ "@esri/calcite-components-react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets */ "./your-extensions/widgets/route-edition/src/runtime/assets/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./your-extensions/widgets/route-edition/src/runtime/types/index.ts");





const AppSelector = (props) => {
    const { setSelectedApp } = props;
    const handleSelectedApp = (selectedApp) => {
        return () => setSelectedApp(selectedApp);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__.CalciteFlowItem, { heading: "Selecciona" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "row-buttons" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "default", className: 'button-item', onClick: handleSelectedApp(_types__WEBPACK_IMPORTED_MODULE_4__.SelectedAppEnum.RouteSelector) },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { color: "orange", icon: _assets__WEBPACK_IMPORTED_MODULE_3__.SelectRouteIcon, rotate: 0, size: "l", title: "Icon" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "default", className: 'button-item', onClick: handleSelectedApp(_types__WEBPACK_IMPORTED_MODULE_4__.SelectedAppEnum.NewInterestPoint) },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { color: "orange", icon: _assets__WEBPACK_IMPORTED_MODULE_3__.NewInterestPointIcon, rotate: 0, size: "l", title: "Icon" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "default", className: 'button-item', onClick: handleSelectedApp(_types__WEBPACK_IMPORTED_MODULE_4__.SelectedAppEnum.NewManualRoute) },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { color: "orange", icon: _assets__WEBPACK_IMPORTED_MODULE_3__.NewManualRouteIcon, rotate: 0, size: "l", title: "Icon" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "default", className: 'button-item', onClick: handleSelectedApp(_types__WEBPACK_IMPORTED_MODULE_4__.SelectedAppEnum.AutomaticRoute) },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { color: "orange", icon: _assets__WEBPACK_IMPORTED_MODULE_3__.AutomaticRouteIcon, rotate: 0, size: "l", title: "Icon" })))));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/AutomaticRouteComponent.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/AutomaticRouteComponent.tsx ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutomaticRouteComponent: () => (/* binding */ AutomaticRouteComponent)
/* harmony export */ });
/* harmony import */ var _esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @esri/calcite-components-react */ "@esri/calcite-components-react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translations/default */ "./your-extensions/widgets/route-edition/src/runtime/translations/default.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/translations/default.ts");
/* harmony import */ var esri_rest_locator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/rest/locator */ "esri/rest/locator");
/* harmony import */ var _constants_hardcodedWaypoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/hardcodedWaypoint */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/constants/hardcodedWaypoint.ts");
/* harmony import */ var _automaticRouteStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./automaticRouteStyle.css */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/automaticRouteStyle.css");
/* harmony import */ var _WaypointRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WaypointRow */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/WaypointRow.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context */ "./your-extensions/widgets/route-edition/src/runtime/context/index.ts");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers/ReducerWaypointList */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/reducers/ReducerWaypointList.ts");
/* harmony import */ var _shared_code_GenericModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared-code/GenericModal */ "./your-extensions/widgets/shared-code/GenericModal.tsx");
/* harmony import */ var _constants_urlConstants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants/urlConstants */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/constants/urlConstants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/route-edition/src/runtime/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















const AutomaticRouteComponent = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"], _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const [currentActiveRow, setCurrentActiveRow] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
    const [waypointList, dispatchWaypointList] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useReducer)(_reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_11__.waypointListReducer, (0,_constants_hardcodedWaypoint__WEBPACK_IMPORTED_MODULE_5__.InitialWaypointListConstructor)());
    const [isReorderingList, setIsReorderingList] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [isOpenResetValuesModal, setIsOpenResetValuesModal] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { jimuMapView, drawSelectedCoordinateInMap, removePreviousDrawnGraph, sketchViewModel, } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_context__WEBPACK_IMPORTED_MODULE_9__.MapContext);
    const isDisabledAddStopsProps = waypointList.length >= _constants_hardcodedWaypoint__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS ? {
        disabled: true
    } : {};
    const isDisabledProps = waypointList.find((waypoint) => {
        return !(waypoint.address && waypoint.title && waypoint.lat && waypoint.lon);
    }) ? {
        disabled: true
    } : {};
    // * Evento de reordenado de puntos en el mapa (cuando reordenamos la tabla arrastrando)
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
        if (isReorderingList) {
            waypointList.forEach((waypoint) => {
                if (waypoint.lat && waypoint.lon) {
                    const point = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_10__["default"]({ latitude: waypoint.lat, longitude: waypoint.lon });
                    drawSelectedCoordinateInMap({
                        point: point,
                        currentModelConfig: waypoint,
                        index: waypoint.index,
                    });
                    setIsReorderingList(false);
                }
            });
        }
    }, [isReorderingList, waypointList]);
    // * Evento de click para añdir puntos de parada en el mapa
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
        const mapClickEvent = jimuMapView.view.on('click', handleClickEventInMap);
        return () => {
            mapClickEvent.remove();
        };
    }, [jimuMapView, currentActiveRow]);
    const handleClickEventInMap = (evt) => __awaiter(void 0, void 0, void 0, function* () {
        if (!currentActiveRow)
            return;
        const point = jimuMapView.view.toMap({
            x: evt.x,
            y: evt.y
        });
        try {
            const { address } = yield (0,esri_rest_locator__WEBPACK_IMPORTED_MODULE_4__.locationToAddress)(_constants_urlConstants__WEBPACK_IMPORTED_MODULE_13__.REVERSE_GEOCODE_URL, { location: point });
            drawSelectedCoordinateInMap({
                point: point,
                currentModelConfig: currentActiveRow,
                index: currentActiveRow.index,
            });
            dispatchWaypointList({
                type: _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_11__.ActionType.updatePoint,
                payload: {
                    point: point,
                    id: currentActiveRow.id,
                    address: address,
                }
            });
            setCurrentActiveRow(null);
        }
        catch (error) {
            _utils__WEBPACK_IMPORTED_MODULE_14__.WidgetUtils.createAlert({
                info: {
                    title: translate('errorSearchNotAvailableAreaPointTitle'),
                    message: translate('errorSearchNotAvailableAreaPointMessage')
                },
                kind: 'danger',
                enableAutoClose: false,
            });
        }
    });
    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('rowIndex', index);
        e.target.classList.add("dragging");
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDragEnd = (e) => {
        e.target.classList.remove("dragging");
    };
    const handleDrop = (e, targetDragIndex) => {
        const originDraggedIndex = e.dataTransfer.getData('rowIndex');
        if (originDraggedIndex == targetDragIndex)
            return; // Clause guard si se arrastra hacia donde ya estaba anteriormente...
        setIsReorderingList(true);
        dispatchWaypointList({
            type: _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_11__.ActionType.reorderRows,
            payload: {
                originDragged: waypointList[originDraggedIndex],
                originIndex: Number(originDraggedIndex),
                targetIndex: Number(targetDragIndex),
                targetDragged: waypointList[targetDragIndex],
            }
        });
    };
    const handleAddStops = () => {
        if (waypointList.length < _constants_hardcodedWaypoint__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS) {
            dispatchWaypointList({
                type: _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_11__.ActionType.addRow,
            });
        }
    };
    const handleRemoveStop = (waypoint) => {
        removePreviousDrawnGraph(waypoint.id);
        dispatchWaypointList({
            type: _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_11__.ActionType.removeRow,
            payload: {
                id: waypoint.id,
            }
        });
        // * Reordenem els punts al mapa
        setIsReorderingList(true);
    };
    const handleResetAutomaticRoute = () => {
        dispatchWaypointList({ type: _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_11__.ActionType.reset });
        sketchViewModel.layer.removeAll();
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__.CalciteFlowItem, { heading: translate('automaticRouteTitle'), beforeBack: props.onBackToList, loading: false, className: 'automatic-route' },
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'automatic-route-container' },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("table", { className: 'waypoint-table' },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("thead", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("tr", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("th", null),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("th", null, translate('title')),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("th", null, translate('address')),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("th", null, translate('stop')),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("th", null))),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("tbody", { className: "waypoint-table-body" }, waypointList.map((waypoint, index) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_WaypointRow__WEBPACK_IMPORTED_MODULE_7__.WaypointRowComponent, { key: waypoint.id, waypoint: waypoint, setCurrentActiveRow: setCurrentActiveRow, dispatchWaypointList: dispatchWaypointList, isActiveRow: (currentActiveRow === null || currentActiveRow === void 0 ? void 0 : currentActiveRow.id) === waypoint.id, dragStart: (e) => handleDragStart(e, index), dragEnd: handleDragEnd, dragOver: handleDragOver, dropElement: (e) => handleDrop(e, index), handleRemoveStop: handleRemoveStop }));
                }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "row ml-0 mr-0 mt-3 row-btn" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { style: { marginRight: 'auto' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__.CalciteButton, Object.assign({}, isDisabledAddStopsProps, { className: "execute-btn", loading: false, width: 'auto', onClick: handleAddStops, appearance: 'outline-fill', kind: 'brand' }), translate('add_stop'))),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { style: { display: 'flex', gap: '10px' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__.CalciteButton, { className: "execute-btn", loading: false, width: 'auto', onClick: () => { setIsOpenResetValuesModal(true); }, kind: 'danger' }, translate('newRoute')),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__.CalciteButton, Object.assign({}, isDisabledProps, { className: "execute-btn", loading: false, width: 'auto', onClick: () => { } }), translate('execute_'))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_shared_code_GenericModal__WEBPACK_IMPORTED_MODULE_12__.GenericModal, { modalCallback: handleResetAutomaticRoute, headerData: `${translate('modalResetStopValuesTitle')}`, bodyData: `${translate('modalResetStopValuesBody')}`, showModalStatus: isOpenResetValuesModal, updateShowModalStatus: setIsOpenResetValuesModal })));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/WaypointRow.tsx":
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/WaypointRow.tsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaypointRowComponent: () => (/* binding */ WaypointRowComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _arcgis_core_widgets_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/widgets/Search */ "@arcgis/core/widgets/Search");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./your-extensions/widgets/route-edition/src/runtime/context/index.ts");
/* harmony import */ var _arcgis_core_widgets_Search_LocatorSearchSource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/widgets/Search/LocatorSearchSource.js */ "@arcgis/core/widgets/Search/LocatorSearchSource.js");
/* harmony import */ var _arcgis_core_widgets_Search_LayerSearchSource_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @arcgis/core/widgets/Search/LayerSearchSource.js */ "@arcgis/core/widgets/Search/LayerSearchSource.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets */ "./your-extensions/widgets/route-edition/src/runtime/assets/index.ts");
/* harmony import */ var _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/ReducerWaypointList */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/reducers/ReducerWaypointList.ts");
/* harmony import */ var _shared_code_GenericModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared-code/GenericModal */ "./your-extensions/widgets/shared-code/GenericModal.tsx");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../translations/default */ "./your-extensions/widgets/route-edition/src/runtime/translations/default.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/translations/default.ts");
/* harmony import */ var esri_rest_locator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! esri/rest/locator */ "esri/rest/locator");
/* harmony import */ var _constants_urlConstants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants/urlConstants */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/constants/urlConstants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/route-edition/src/runtime/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















const WaypointRowComponent = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_11__["default"], _translations_default__WEBPACK_IMPORTED_MODULE_12__["default"]);
    const [isOpenDeleteRowModal, setIsOpenDeleteRowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        console.log("se monta el componente");
        return () => {
            console.log("se desmonta el componente");
        };
    }, []);
    const { SettingConfig, appConfig, } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.RouteEditionContext);
    const { jimuMapView, drawSelectedCoordinateInMap, sketchViewModel, } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.MapContext);
    const { waypoint, setCurrentActiveRow, isActiveRow, dispatchWaypointList, dragStart, dragOver, dragEnd, dropElement, handleRemoveStop, } = props;
    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    if (searchInput && (waypoint === null || waypoint === void 0 ? void 0 : waypoint.address))
        searchInput.searchTerm = waypoint.address;
    // * Event d'actualització drag and drop de punts del mapa
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        const sketchUpdateHandler = sketchViewModel.on("update", (event) => __awaiter(void 0, void 0, void 0, function* () {
            const currentGraphic = event.graphics[0];
            const point = currentGraphic.geometry;
            if (event.state === "complete" && currentGraphic.attributes.id === waypoint.id) {
                try {
                    const { address } = yield (0,esri_rest_locator__WEBPACK_IMPORTED_MODULE_13__.locationToAddress)(_constants_urlConstants__WEBPACK_IMPORTED_MODULE_14__.REVERSE_GEOCODE_URL, { location: point });
                    dispatchWaypointList({
                        type: _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_9__.ActionType.updatePoint,
                        payload: {
                            point: point,
                            id: waypoint.id,
                            address: address,
                        }
                    });
                }
                catch (error) {
                    _utils__WEBPACK_IMPORTED_MODULE_15__.WidgetUtils.createAlert({
                        info: {
                            title: translate('errorSearchNotAvailableAreaPointTitle'),
                            message: translate('errorSearchNotAvailableAreaPointMessage')
                        },
                        kind: 'danger',
                        enableAutoClose: false,
                    });
                }
            }
        }));
        return () => {
            sketchUpdateHandler.remove();
        };
    }, []);
    // * Event de search widget
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        const searchWidget = mountSearchWidget();
        setSearchInput(searchWidget);
        return () => {
            searchInput === null || searchInput === void 0 ? void 0 : searchInput.destroy();
        };
    }, []);
    const mountSearchWidget = () => {
        if (!(SettingConfig === null || SettingConfig === void 0 ? void 0 : SettingConfig.datasourceConfig) || !(SettingConfig === null || SettingConfig === void 0 ? void 0 : SettingConfig.datasourceConfig.length)) {
            _utils__WEBPACK_IMPORTED_MODULE_15__.WidgetUtils.createAlert({
                info: {
                    title: translate('errorSearchNotConfiguredTitle'),
                    message: translate('errorSearchNotConfiguredMessage')
                },
                kind: 'danger',
                enableAutoClose: false,
            });
            return;
        }
        const dataSourceConfigList = Array.from(SettingConfig.datasourceConfig);
        const dataSourceList = dataSourceConfigList.reduce((accum, ds) => {
            console.log(jimuMapView.view.spatialReference.wkid);
            if (ds.searchServiceType === 'GeocodeService') {
                const utilityId = ds.useUtility.utilityId;
                const geocodeServiceUrl = appConfig.appConfig.utilities[utilityId].url;
                if (geocodeServiceUrl) {
                    const locatorSearch = new _arcgis_core_widgets_Search_LocatorSearchSource_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        url: geocodeServiceUrl,
                        name: ds.label || 'Localizador',
                        placeholder: ds.hint,
                    });
                    accum.push(locatorSearch);
                }
            }
            else if (ds.searchServiceType === 'FeatureService') {
                const layerId = ds.useDataSource.mainDataSourceId;
                const layer = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view.map.findLayerById(layerId);
                if (layer) {
                    const layerSearch = new _arcgis_core_widgets_Search_LayerSearchSource_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
                        layer: layer,
                        searchFields: ds.searchFields.map(field => field.name),
                        displayField: ds.displayFields[0].name,
                        exactMatch: false,
                        outFields: ['*'],
                        name: ds.label || 'Capa de entidad',
                    });
                    accum.push(layerSearch);
                }
            }
            return accum;
        }, []);
        const newSearchWidget = new _arcgis_core_widgets_Search__WEBPACK_IMPORTED_MODULE_4__["default"]({
            container: searchRef.current,
            view: jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view,
            popupEnabled: false,
            resultGraphicEnabled: false,
            includeDefaultSources: false,
            sources: dataSourceList,
        });
        newSearchWidget.on('select-result', function (event) {
            const point = event.result.feature.geometry;
            console.log(point, event.result.name);
            drawSelectedCoordinateInMap({
                point: point,
                currentModelConfig: waypoint,
                index: waypoint.index,
            });
            dispatchWaypointList({
                type: _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_9__.ActionType.updatePoint,
                payload: {
                    point: point,
                    id: waypoint.id,
                    address: event.result.name,
                }
            });
        });
        return newSearchWidget;
    };
    const enableClickInMap = () => {
        setCurrentActiveRow((prev) => {
            return (prev === null || prev === void 0 ? void 0 : prev.id) !== waypoint.id ? waypoint : null;
        });
    };
    const activeClass = isActiveRow ? 'active' : '';
    const handleChangeInputValues = (key) => {
        return (event) => {
            var _a, _b;
            const newValue = (_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : event;
            dispatchWaypointList({
                type: _reducers_ReducerWaypointList__WEBPACK_IMPORTED_MODULE_9__.ActionType.updateFilterValue,
                payload: {
                    key: key,
                    value: newValue,
                    id: waypoint.id,
                }
            });
        };
    };
    const onRemoveRow = () => {
        handleRemoveStop(waypoint);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { className: 'center-text' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `search-marker-icon ${activeClass}`, onClick: enableClickInMap }, waypoint.index)),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { type: "text", value: waypoint.title, htmlSize: 14, onChange: handleChangeInputValues('title') })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { ref: searchRef })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { showHandlers: false, defaultValue: waypoint.stop, onChange: handleChangeInputValues('stop'), title: "set a number" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { className: 'center-text', draggable: true, onDragStart: dragStart, onDragEnd: dragEnd, onDragOver: dragOver, onDrop: dropElement, style: {
                    cursor: "grab",
                    transition: "all 0.2s ease",
                }, onMouseDown: (e) => e.target.closest("tr").setAttribute("draggable", "true"), onMouseUp: (e) => e.target.closest("tr").setAttribute("draggable", "false") },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: _assets__WEBPACK_IMPORTED_MODULE_2__.VerticalDotsIcon })),
            // * Si son els 2 primers punts no permetim esborrar el punt del mapa
            waypoint.index > 2 && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { className: 'center-text' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => { setIsOpenDeleteRowModal(true); }, className: 'direction-common-icons' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { width: 20, height: 20, className: 'direction-trash-icon', icon: _assets__WEBPACK_IMPORTED_MODULE_8__.TrashIcon, rotate: 0, title: "Icon" })))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_shared_code_GenericModal__WEBPACK_IMPORTED_MODULE_10__.GenericModal, { modalCallback: onRemoveRow, headerData: `${translate('modalDeleteStopPointTitle')}`, bodyData: `${translate('modalDeleteStopPointBody')} ${waypoint.index}?`, showModalStatus: isOpenDeleteRowModal, updateShowModalStatus: setIsOpenDeleteRowModal })));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/index.ts":
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/index.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexMarker1: () => (/* reexport module object */ _map_index_markers_marker_black_1_svg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   IndexMarker10: () => (/* reexport module object */ _map_index_markers_marker_black_10_svg__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   IndexMarker11: () => (/* reexport module object */ _map_index_markers_marker_black_11_svg__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   IndexMarker2: () => (/* reexport module object */ _map_index_markers_marker_black_2_svg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   IndexMarker3: () => (/* reexport module object */ _map_index_markers_marker_black_3_svg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   IndexMarker4: () => (/* reexport module object */ _map_index_markers_marker_black_4_svg__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   IndexMarker5: () => (/* reexport module object */ _map_index_markers_marker_black_5_svg__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   IndexMarker6: () => (/* reexport module object */ _map_index_markers_marker_black_6_svg__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   IndexMarker7: () => (/* reexport module object */ _map_index_markers_marker_black_7_svg__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   IndexMarker8: () => (/* reexport module object */ _map_index_markers_marker_black_8_svg__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   IndexMarker9: () => (/* reexport module object */ _map_index_markers_marker_black_9_svg__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   VerticalDotsIcon: () => (/* reexport module object */ _dots_3_vertical_svg__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _dots_3_vertical_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dots-3-vertical.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/dots-3-vertical.svg");
/* harmony import */ var _dots_3_vertical_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dots_3_vertical_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_index_markers_marker_black_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-index-markers/marker_black_1.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_1.svg");
/* harmony import */ var _map_index_markers_marker_black_1_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_1_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map_index_markers_marker_black_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-index-markers/marker_black_2.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_2.svg");
/* harmony import */ var _map_index_markers_marker_black_2_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_2_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map_index_markers_marker_black_3_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-index-markers/marker_black_3.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_3.svg");
/* harmony import */ var _map_index_markers_marker_black_3_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_3_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _map_index_markers_marker_black_4_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-index-markers/marker_black_4.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_4.svg");
/* harmony import */ var _map_index_markers_marker_black_4_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_4_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _map_index_markers_marker_black_5_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-index-markers/marker_black_5.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_5.svg");
/* harmony import */ var _map_index_markers_marker_black_5_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_5_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _map_index_markers_marker_black_6_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-index-markers/marker_black_6.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_6.svg");
/* harmony import */ var _map_index_markers_marker_black_6_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_6_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _map_index_markers_marker_black_7_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-index-markers/marker_black_7.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_7.svg");
/* harmony import */ var _map_index_markers_marker_black_7_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_7_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _map_index_markers_marker_black_8_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-index-markers/marker_black_8.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_8.svg");
/* harmony import */ var _map_index_markers_marker_black_8_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_8_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _map_index_markers_marker_black_9_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-index-markers/marker_black_9.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_9.svg");
/* harmony import */ var _map_index_markers_marker_black_9_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_9_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _map_index_markers_marker_black_10_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-index-markers/marker_black_10.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_10.svg");
/* harmony import */ var _map_index_markers_marker_black_10_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_10_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _map_index_markers_marker_black_11_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map-index-markers/marker_black_11.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_11.svg");
/* harmony import */ var _map_index_markers_marker_black_11_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_map_index_markers_marker_black_11_svg__WEBPACK_IMPORTED_MODULE_11__);














/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/constants/hardcodedWaypoint.ts":
/*!********************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/constants/hardcodedWaypoint.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitialWaypointListConstructor: () => (/* binding */ InitialWaypointListConstructor),
/* harmony export */   MAX_ROWS: () => (/* binding */ MAX_ROWS),
/* harmony export */   WaypointRowConstructor: () => (/* binding */ WaypointRowConstructor)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const MAX_ROWS = 20;
const INITIAL_ROWS = 2;
const WaypointRowConstructor = (index) => {
    return {
        id: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.uuidv1)(),
        title: '',
        stop: 0,
        index: index + 1,
        lat: null,
        lon: null,
        address: null,
    };
};
const InitialWaypointListConstructor = () => {
    return Array.from({ length: INITIAL_ROWS }, (_, index) => {
        return WaypointRowConstructor(index);
    });
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/constants/urlConstants.ts":
/*!***************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/constants/urlConstants.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REVERSE_GEOCODE_URL: () => (/* binding */ REVERSE_GEOCODE_URL)
/* harmony export */ });
const REVERSE_GEOCODE_URL = 'https://geoportal.tarragona.cat/server/rest/services/Topografia/localitzador_adreces/GeocodeServer';


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/reducers/ReducerWaypointList.ts":
/*!*********************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/reducers/ReducerWaypointList.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   waypointListReducer: () => (/* binding */ waypointListReducer)
/* harmony export */ });
/* harmony import */ var _constants_hardcodedWaypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/hardcodedWaypoint */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/constants/hardcodedWaypoint.ts");

var ActionType;
(function (ActionType) {
    ActionType["updatePoint"] = "update-point";
    ActionType["reorderRows"] = "reorder-rows";
    ActionType["addRow"] = "add-row";
    ActionType["updateFilterValue"] = "update-filter-row-value";
    ActionType["removeRow"] = "remove-row";
    ActionType["reset"] = "reset-values";
})(ActionType || (ActionType = {}));
const waypointListReducer = (state, action) => {
    if (action.type === ActionType.updatePoint) {
        const { id, point, address, } = action.payload;
        const { latitude, longitude } = point;
        const index = state.findIndex(getIndexInList(id));
        const newState = [...state];
        newState[index] = Object.assign(Object.assign({}, newState[index]), { lat: latitude, lon: longitude, address: address });
        return newState;
    }
    if (action.type === ActionType.reorderRows) {
        const { originDragged, targetIndex, originIndex, } = action.payload;
        const newWaypointList = [...state];
        newWaypointList.splice(originIndex, 1);
        newWaypointList.splice(targetIndex, 0, originDragged);
        const updatedWaypointList = newWaypointList.map((waypoint, index) => (Object.assign(Object.assign({}, waypoint), { index: index + 1 })));
        return updatedWaypointList;
    }
    if (action.type === ActionType.addRow) {
        return [...state, (0,_constants_hardcodedWaypoint__WEBPACK_IMPORTED_MODULE_0__.WaypointRowConstructor)(state.length)];
    }
    if (action.type === ActionType.updateFilterValue) {
        const { id, key, value, } = action.payload;
        const index = state.findIndex(getIndexInList(id));
        const newWaypointList = [...state];
        newWaypointList[index] = Object.assign(Object.assign({}, newWaypointList[index]), { [key]: value });
        return newWaypointList;
    }
    if (action.type === ActionType.removeRow) {
        const { id, } = action.payload;
        const filteredState = state.filter(waypoint => waypoint.id !== id);
        return filteredState.map((waypoint, index) => {
            const newWaypoint = Object.assign({}, waypoint);
            newWaypoint.index = index + 1;
            return newWaypoint;
        });
    }
    if (action.type === ActionType.reset) {
        return (0,_constants_hardcodedWaypoint__WEBPACK_IMPORTED_MODULE_0__.InitialWaypointListConstructor)();
    }
};
const getIndexInList = id => {
    return (currState) => id === currState.id;
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/translations/default.ts":
/*!*************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/translations/default.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    modalDeleteStopPointTitle: 'Borra el punt de parada',
    modalDeleteStopPointBody: 'Està segur que vol borrar el punt de pas número ',
    modalResetStopValuesTitle: 'Netejar valors.',
    modalResetStopValuesBody: 'Està segur de que vol netejar els valors del formulari i del mapa?',
});


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/InterestPoint/InterestPointComponent.tsx":
/*!***************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/InterestPoint/InterestPointComponent.tsx ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestComponent: () => (/* binding */ InterestComponent)
/* harmony export */ });
/* harmony import */ var _esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @esri/calcite-components-react */ "@esri/calcite-components-react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translations/default */ "./your-extensions/widgets/route-edition/src/runtime/translations/default.ts");



const InterestComponent = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__.CalciteFlowItem, { heading: translate('interestPointTitle'), beforeBack: props.onBackToList, loading: false }, "hey2"));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/Loading.tsx":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/Loading.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLoading: () => (/* binding */ DataLoading)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/route-edition/src/runtime/translations/default.ts");



const DataLoading = (props) => {
    var _a, _b;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const { uploadingFileInfo, onFileCancel } = props;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'upload-loading-container', title: translate('fileIsUploading', { fileName: (_a = uploadingFileInfo.current) === null || _a === void 0 ? void 0 : _a.name }) },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'upload-loading-content' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { className: 'upload-loading', type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingType.Primary, width: 30, height: 28 }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'upload-loading-file-name d-flex justify-content-center align-items-center' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 font-14 text-center' }, translate('fileIsUploading', { fileName: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 multiple-lines-truncate font-16' }, (_b = uploadingFileInfo.current) === null || _b === void 0 ? void 0 : _b.name) }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'upload-loading-btn d-flex justify-content-center' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'danger', onClick: onFileCancel }, translate('cancel'))))));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/EditLayersForm.tsx":
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/EditLayersForm.tsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditLayersForm: () => (/* binding */ EditLayersForm)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/translations/default.ts");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _popper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popper.css */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/popper.css");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/types/index.ts");








const EditLayersForm = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const { isOpen, togglePopper, currentEditGeometry, popperReference, currentLayer } = props;
    const renderedForm = () => {
        switch (currentEditGeometry) {
            case _types__WEBPACK_IMPORTED_MODULE_6__.GeoJSONType.point:
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(PointEditStyleForm, { currentLayer: currentLayer, currentEditGeometry: currentEditGeometry });
            case _types__WEBPACK_IMPORTED_MODULE_6__.GeoJSONType.polygon:
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(PolygonEditStyleForm, { currentLayer: currentLayer });
            case _types__WEBPACK_IMPORTED_MODULE_6__.GeoJSONType.polyline:
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(LineEditStyleForm, { currentLayer: currentLayer });
            default:
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, "Aquesta geometria no t\u00E9 un formulari assignat");
        }
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { open: isOpen, toggle: togglePopper, reference: popperReference, placement: 'right-start', "aria-label": translate('addData'), className: 'geoprocessor-cad-layer-style-popper' },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { width: '240px', height: '230px' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.PanelHeader, { showClose: true, onClose: () => togglePopper(currentLayer, currentEditGeometry), level: 1, className: 'p-4', title: translate("addStyles") }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'add-data-popper-content' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'data-file-upload w-100 h-100 pb-4 pt-6 px-4' }, renderedForm())))));
};
const LineEditStyleForm = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const { currentLayer } = props;
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(currentLayer.renderer.symbol.width);
    const handleSize = (event) => {
        const size = event.target.value;
        setSize(size);
        currentLayer.renderer.symbol.width = size;
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(ColorPickerInput, { currentLayer: currentLayer, changeColorCallback: (selectedColor) => { currentLayer.renderer.symbol.color = selectedColor; } },
            translate('color'),
            ":"),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { paddingTop: '10px' } },
            translate('thickness'),
            ":",
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "number", style: { width: "40px", left: '77%', position: 'fixed' }, min: "0", onChange: handleSize, value: size, step: "0.1" }))));
};
const PointEditStyleForm = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const { currentLayer, currentEditGeometry } = props;
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(currentLayer.renderer.symbol.style);
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(currentLayer.renderer.symbol.size);
    const [checked, setChecked] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const handleIconChange = (event) => {
        const selectedIcon = event.target.value;
        setSelectedOption(selectedIcon);
        currentLayer.renderer.symbol.style = selectedIcon;
    };
    const handleSize = (event) => {
        const size = event.target.value;
        setSize(size);
        currentLayer.renderer.symbol.size = size;
    };
    const handleToggleAppear = (ev, checkedValue) => {
        currentLayer.renderer.symbol.size = checkedValue ? 0 : size;
        setChecked(checkedValue);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', paddingBottom: '20px' } },
            translate('icon'),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { position: 'absolute', display: 'flex', left: '28%' } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "radio", id: "circle", name: "options", hidden: true, value: "circle", checked: selectedOption === "circle", onChange: handleIconChange, className: "custom-radio-icon" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "circle", className: "custom-button" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-icon", { icon: "circle-area" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "radio", id: "cross", name: "options", hidden: true, value: "cross", checked: selectedOption === "cross", onChange: handleIconChange, className: "custom-radio-icon" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "cross", className: "custom-button" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-icon", { icon: "plus" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "radio", id: "diamond", name: "options", hidden: true, value: "diamond", checked: selectedOption === "diamond", onChange: handleIconChange, className: "custom-radio-icon" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "diamond", className: "custom-button" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-icon", { icon: "diamond" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "radio", id: "square", name: "options", hidden: true, value: "square", checked: selectedOption === "square", onChange: handleIconChange, className: "custom-radio-icon" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "square", className: "custom-button" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-icon", { icon: "square-f" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "radio", id: "triangle", name: "options", hidden: true, value: "triangle", checked: selectedOption === "triangle", onChange: handleIconChange, className: "custom-radio-icon" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "triangle", className: "custom-button" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-icon", { icon: "triangle" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "radio", id: "x", name: "options", hidden: true, value: "x", checked: selectedOption === "x", onChange: handleIconChange, className: "custom-radio-icon" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "x", className: "custom-button" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-icon", { icon: "x" }))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(ColorPickerInput, { currentLayer: currentLayer, changeColorCallback: (selectedColor) => { currentLayer.renderer.symbol.color = selectedColor; } }, translate('color')),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { paddingTop: '10px', paddingBottom: '20px' } },
            translate('size'),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "number", min: "1", onChange: handleSize, value: size, style: { position: 'absolute', left: '77%', width: "40px" } })),
        currentEditGeometry === "JSON_ANNOTATION" &&
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { onChange: handleToggleAppear, checked: checked }),
                " ",
                translate("noSymbol"))));
};
const PolygonEditStyleForm = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const { currentLayer } = props;
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(currentLayer.renderer.symbol.outline.width);
    const handleSize = (event) => {
        const size = event.target.value;
        setSize(size);
        currentLayer.renderer.symbol.outline.width = size;
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(ColorPickerInput, { currentLayer: currentLayer, changeColorCallback: (selectedColor) => { currentLayer.renderer.symbol.outline.color = selectedColor; } },
            translate('outlineColor'),
            ":"),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', paddingBottom: '20px', paddingTop: '10px', verticalAlign: 'center' } },
            translate('thickness'),
            ":",
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "number", style: { width: "40px", position: 'fixed', left: '77%' }, min: "0", onChange: handleSize, value: size, step: "0.1" })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(ColorPickerInput, { currentLayer: currentLayer, changeColorCallback: (selectedColor) => { currentLayer.renderer.symbol.color = selectedColor; } },
            translate('insideColor'),
            ":")));
};
const ColorPickerInput = (props) => {
    const { currentLayer, changeColorCallback, children } = props;
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(currentLayer.renderer.symbol.color.toHex());
    const handleColorChange = (selectedColor) => {
        setColor(selectedColor);
        changeColorCallback(selectedColor);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', paddingBottom: '8px' } },
        children,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: color, width: 30, height: 30, placement: "auto-start", onChange: handleColorChange, style: { position: 'fixed', left: '81%' } })));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/LayerList.tsx":
/*!************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/LayerList.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerList: () => (/* binding */ LayerList)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_trash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/trash */ "./jimu-icons/outlined/editor/trash.tsx");
/* harmony import */ var jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/application/setting */ "./jimu-icons/outlined/application/setting.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/translations/default.ts");
/** @jsx jsx */





const { useMemo } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;

const LayerList = (props) => {
    const { multiDataOptions, onRemoveData, togglePopperLayerStyle, hashedLayerList } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages, _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"]);
    const theme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const dataListStyle = useDataListStyle(theme);
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'geoprocess-cad-widget-data-list', css: dataListStyle, role: "list" }, multiDataOptions.map((dataOptions, index) => {
        const hashId = dataOptions.dataSourceJson.id;
        const currentLayer = hashedLayerList[hashId];
        const label = dataOptions.dataSourceJson.label || dataOptions.dataSourceJson.sourceLabel;
        const fileType = dataOptions.dataSourceJson.type;
        const isAnnotation = dataOptions.dataSourceJson.geoType === "JSON_ANNOTATION";
        const geometryType = isAnnotation ? translate("Annotation") : translate(dataOptions.dataSourceJson.geometryType);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: hashId, className: 'd-flex justify-content-between align-items-center data-item pt-3', role: "listitem", "aria-label": label },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 d-flex justify-content-start align-items-center' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 d-flex align-items-center', title: 'kml' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-shrink-0 d-flex justify-content-center align-items-center geoprocess-cad-data-thumbnail' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDsIcon((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(dataOptions.dataSourceJson)), color: '#FFFFFF', size: '12' })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 data-label pl-2', title: `${label}.${fileType} - ${geometryType}` }, `${label}.${fileType} - ${geometryType}`))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-shrink-0 d-flex justify-content-end align-items-center data-item-operations' },
                !isAnnotation && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: 'jimu-outline-inside', type: 'tertiary', size: 'sm', icon: true, title: translate('editLayerStyles'), "aria-label": translate('editLayerStyles'), onClick: () => togglePopperLayerStyle(currentLayer, dataOptions.dataSourceJson.geoType) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_3__.SettingOutlined, { size: 'm' })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: 'jimu-outline-inside', type: 'tertiary', size: 'sm', icon: true, onClick: () => { onRemoveData(currentLayer); }, title: translate('removeLayer'), "aria-label": translate('removeLayer') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_trash__WEBPACK_IMPORTED_MODULE_2__.TrashOutlined, { size: 'm' })))));
    }));
};
const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  max-height: calc(100% - 35px);
  overflow: auto;

  .geoprocess-cad-widget-data-list .data-item {
    width: 100%;
    overflow: hidden;
  }
  .geoprocess-cad-widget-data-list .data-item-loading {
    position: relative;
    width: 24px;
    height: 24px;
    border: 1px solid #0095DB;
  }
  .geoprocess-cad-data-thumbnail {
    width:  26px;
    height:  26px;
    background-color: #0095DB;
  }
  .geoprocess-cad-widget-data-list .data-label {
    font-size: 13px;
    color: var(--dark-800);
  }
`;
const useDataListStyle = (theme) => {
    var _a;
    // add inside outline style to data action dropdown button to avoid cut off of focus ring
    return useMemo(() => {
        var _a;
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    ${style}
    .geoprocess-cad-widget-data-list .data-item-operations .data-action-dropdown .data-action-button{
      &:focus,
      &:focus-visible {
        outline-offset: -${(_a = theme.focusedStyles) === null || _a === void 0 ? void 0 : _a.offset};
      }
      border: 0;
    }
  `;
    }, [(_a = theme.focusedStyles) === null || _a === void 0 ? void 0 : _a.offset]);
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/ManualRouteComponent.tsx":
/*!***********************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/ManualRouteComponent.tsx ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManualRouteComponent: () => (/* binding */ ManualRouteComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @esri/calcite-components-react */ "@esri/calcite-components-react");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/translations/default.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translations/default */ "./your-extensions/widgets/route-edition/src/runtime/translations/default.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_icons_outlined_application_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/application/empty */ "./jimu-icons/outlined/application/empty.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _UploadFileForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UploadFileForm */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/UploadFileForm.tsx");
/* harmony import */ var jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jimu-icons/outlined/editor/plus */ "./jimu-icons/outlined/editor/plus.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/style.css");
/* harmony import */ var _LayerList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayerList */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/LayerList.tsx");
/* harmony import */ var _EditLayersForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EditLayersForm */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/EditLayersForm.tsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../context */ "./your-extensions/widgets/route-edition/src/runtime/context/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













const ManualRouteComponent = (props) => {
    const { getAndDrawMapLayers, jimuMapView, } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_12__.MapContext);
    const { widgetId, } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_12__.RouteEditionContext);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [currentLayer, setCurrentLayer] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const [isOpenLayerStyle, setIsOpenLayerStyle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"], _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const [isOpenForm, setIsOpenForm] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [fileOptions, setFileOptions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const [errorMsg, setErrorMsg] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [currentEditGeometry, setCurrentEditGeometry] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const [hashedLayerList, setHashedLayerList] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const [multiDataOptions, setMultiDataOptions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const rootDomRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const addDataButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const uploadingFileInfo = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const cache = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
        // Init indexed DB and set cached data to state.
        cache.current = new jimu_core__WEBPACK_IMPORTED_MODULE_0__.indexedDBUtils.IndexedDBCache(widgetId, 'add-data', 'added-data');
        cache.current.init().then(() => __awaiter(void 0, void 0, void 0, function* () {
            const cachedDataOptions = yield cache.current.getAll();
            // if (cachedDataOptions.length > 0) {
            //   setIsLoading(true)
            //   createDataSourcesByDataOptions(cachedDataOptions, widgetId).catch(err => {
            //     console.error('Failed to create data source', err)
            //   }).finally(() => {
            //     setIsLoading(false)
            //   })
            //   setMultiDataOptions(cachedDataOptions.sort((d1, d2) => d1.order - d2.order))
            // }
        })).catch(err => {
            console.error('Failed to read cache.', err);
        });
        return () => { cache.current.close(); };
    }, [widgetId]);
    const togglePopperForm = () => {
        const newIsOpen = !isOpenForm;
        setIsOpenForm(newIsOpen);
        // Al tancar el popper fem un reset de dades.
        if (!newIsOpen) {
            if (addDataButtonRef.current) {
                addDataButtonRef.current.focus();
            }
        }
    };
    const removeUploadedFileForm = () => {
        setFileOptions(null);
    };
    const getProjectionValues = (rawProjection) => {
        const isWkid = !rawProjection.includes("|");
        const projectionParts = rawProjection.split("|");
        return {
            wkid: isWkid ? Number(rawProjection) : Number(projectionParts[0].trim()),
            description: isWkid ? rawProjection.toString() : projectionParts[1].trim()
        };
    };
    const togglePopperLayerStyle = (currentLayer, geometryType) => {
        const newIsOpen = !isOpenLayerStyle;
        setIsOpenLayerStyle(newIsOpen);
        setCurrentLayer(newIsOpen ? currentLayer : null);
        setCurrentEditGeometry(newIsOpen ? geometryType : null);
    };
    const onRemoveData = (currentLayer) => {
        const { id } = currentLayer;
        currentLayer.destroy();
        setHashedLayerList(prevHashedList => {
            const currentHashedList = Object.assign({}, prevHashedList);
            delete currentHashedList[id];
            return currentHashedList;
        });
        setMultiDataOptions(prevDataList => {
            return prevDataList.filter(data => data.dataSourceJson.id !== id);
        });
    };
    // const geoProcessFile = async (fileOptions: FileInfo, selectedProjection: string, selectedCharCode: string): Promise<void> => {
    //   try {
    //     setIsLoading(true)
    //     const uploadedFile = await esriRequest(importFileUrl, {
    //       body: fileOptions.data,
    //       method: "post",
    //       responseType: "json"
    //     })
    //     const projection = getProjectionValues(selectedProjection)
    //     const geoprocessResponse = await geoprocessor.execute(importedFileToJsonUrl, {
    //       FITXER_CAD: {
    //         "itemID": uploadedFile.data.item.itemID
    //       },
    //       PROJECCIO_PRJ: projection.description,
    //       CODE_PAGE_FILE: selectedCharCode
    //     })
    //     const promiseList = geoprocessResponse.results.reduce(async (acc, geoprocess, idx) => {
    //       const accumulated = await acc
    //       if (geoprocess?.value?.url) { // Si l'URL que retorna l'endpoint ve null, vol dir que no té dades
    //         const result = await esriRequest(geoprocess.value.url)
    //         const requestData = result.data
    //         const geometryType: GeometryType = getGeometryType(geoprocess.paramName)
    //         accumulated.push({
    //           ...requestData,
    //           dataSourceJson: {
    //             id: `${geometryType}_${fileOptions.id}_${idx}`, // ID tant del map.layer com de la petició formatada (llistat d'accions borrar/editar layer)
    //             type: fileOptions.type,
    //             sourceLabel: fileOptions.name,
    //             geometryType,
    //             geoType: geoprocess.paramName
    //           },
    //         })
    //       }
    //       return accumulated
    //     }, Promise.resolve([]))
    //     const validDataList = await promiseList
    //     if (validDataList.length > 0) {
    //       const newIsLoading = !isLoading
    //       if (newIsLoading) {
    //         // dataList, fileName, projection
    //         const hashedLayers = getAndDrawMapLayers({
    //           dataList: validDataList,
    //           fileName: fileOptions.name,
    //           projection: projection
    //         })
    //         setHashedLayerList(prev => ({ ...prev, ...hashedLayers }))
    //         setMultiDataOptions(prevMultiData => [...prevMultiData, ...validDataList])
    //         setIsOpenForm(false)
    //         setFileOptions(null)
    //         setIsLoading(false)
    //       }
    //     }
    //   } catch (e) {
    //     setIsLoading(false)
    //     setErrorMsg(translate("somethingFailed"))
    //   }
    // }
    const onAddData = (addedMultiDataOptions) => {
        // Creat new data based on diff.
        cache.current.initialized() && cache.current.putAll(addedMultiDataOptions.map(d => ({ key: d.dataSourceJson.id, value: d })));
        setIsLoading(true);
        // createDataSourcesByDataOptions(addedMultiDataOptions, id).catch(err => {
        //   console.error('Failed to create data source', err)
        // }).finally(() => {
        //   setIsLoading(false)
        // })
        const hashedLayers = getAndDrawMapLayers({
            dataList: addedMultiDataOptions,
            fileName: fileOptions.name,
            projection: jimuMapView.view.spatialReference.wkid
        });
        setHashedLayerList(prev => (Object.assign(Object.assign({}, prev), hashedLayers)));
        setMultiDataOptions(prevMultiData => [...prevMultiData, ...addedMultiDataOptions]);
        setIsOpenForm(false);
        setFileOptions(null);
        setIsLoading(false);
        setMultiDataOptions(multiDataOptions.concat(addedMultiDataOptions));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__.CalciteFlowItem, { heading: translate('manualRouteTitle'), beforeBack: props.onBackToList, loading: false },
        !multiDataOptions.length &&
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'geoprocess-cad widget-add-data \n          jimu-widget d-flex align-items-center \n          justify-content-center surface-1 border-0', ref: rootDomRef },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'no-data-placeholder w-100' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'no-data-placeholder-icon' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_application_empty__WEBPACK_IMPORTED_MODULE_5__.EmptyOutlined, { size: 32, color: 'var(--dark-500)' })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'no-data-placeholder-text' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, translate('defaultPlaceholderText'))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'no-data-placeholder-btn' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: 'primary', className: 'flex-grow-1 text-center', "aria-label": translate('clickToAddData'), ref: addDataButtonRef, onClick: togglePopperForm, title: translate('clickToAddData') },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 px-2 d-flex align-items-center justify-content-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_8__.PlusOutlined, { size: 'm' }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'text-truncate' }, translate('clickToAddData'))))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_UploadFileForm__WEBPACK_IMPORTED_MODULE_7__.UploadFileForm, { popperReference: rootDomRef, uploadingFileInfo: uploadingFileInfo, fileOptionsUpdate: (file) => setFileOptions(file), fileOptions: fileOptions, onRemove: removeUploadedFileForm, isLoading: isLoading, setIsLoading: setIsLoading, isOpen: isOpenForm, togglePopper: togglePopperForm, multiDataOptions: multiDataOptions, setErrorMsg: setErrorMsg, errorMsg: errorMsg, onAddData: onAddData }),
        currentLayer && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_EditLayersForm__WEBPACK_IMPORTED_MODULE_11__.EditLayersForm, { popperReference: rootDomRef, currentLayer: currentLayer, currentEditGeometry: currentEditGeometry, isOpen: isOpenLayerStyle, togglePopper: togglePopperLayerStyle }),
        multiDataOptions.length > 0 &&
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 h-100 p-4 geoprocess-cad-list-view', ref: rootDomRef },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_LayerList__WEBPACK_IMPORTED_MODULE_10__.LayerList, { multiDataOptions: multiDataOptions, onRemoveData: onRemoveData, togglePopperLayerStyle: togglePopperLayerStyle, hashedLayerList: hashedLayerList }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 d-flex justify-content-end add-by-search-samll' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: 'primary', className: 'd-flex justify-content-center align-items-center small-add-btn', onClick: togglePopperForm, "aria-label": translate('clickToAddData'), ref: addDataButtonRef, title: translate('clickToAddData'), style: { position: 'absolute', bottom: '1.7%', right: '6%' } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_8__.PlusOutlined, { size: 'm', className: 'm-0' }))))));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/UploadFileForm.tsx":
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/UploadFileForm.tsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFileForm: () => (/* binding */ UploadFileForm)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/translations/default.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/editor/plus */ "./jimu-icons/outlined/editor/plus.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/types/index.ts");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _context_RouteEditionContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/RouteEditionContext */ "./your-extensions/widgets/route-edition/src/runtime/context/RouteEditionContext.ts");
/* harmony import */ var _arcgis_core_request_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @arcgis/core/request.js */ "@arcgis/core/request.js");
/* harmony import */ var _popper_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popper.css */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/popper.css");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/index.ts");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Loading */ "./your-extensions/widgets/route-edition/src/runtime/components/Loading.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// import { DataLoading } from './Loading';











var UploadFileError;
(function (UploadFileError) {
    UploadFileError["NotSupportedType"] = "onlySupportedFiles";
    UploadFileError["FailedToUpload"] = "failedToUploadError";
})(UploadFileError || (UploadFileError = {}));
function getNextAddedDataId(widgetId, order) {
    // Use time stamp since if one data is loading (the data source json hasn't been created yet) and user adds another data at the same time, the data source id will be duplicated.
    return `add-data-${widgetId}-${order}-${new Date().getTime()}`;
}
const UploadFileForm = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const { mapWidgetId, portalUrl, } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_RouteEditionContext__WEBPACK_IMPORTED_MODULE_7__.RouteEditionContext);
    const { uploadingFileInfo, isLoading, setIsLoading, fileOptionsUpdate, fileOptions, onRemove, isOpen, errorMsg, multiDataOptions, onAddData, togglePopper, popperReference, setErrorMsg } = props;
    const [multiDataOptionsFromFile, setMultiDataOptionsFromFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [projectionValue, setProjectionValue] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("etr89");
    const [charCodeValue, setCharCodeValue] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("utf8");
    const [customProjectionValue, setCustomProjectionValue] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [customCharcodeValue, setCustomCharcodeValue] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const dragToUploadBtnId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => `${mapWidgetId}-drag-to-upload`, [mapWidgetId]);
    const clickToUploadBtnId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => `${mapWidgetId}-click-to-upload`, [mapWidgetId]);
    const getFileExtension = (supportedFileType) => {
        return supportedFileType === 'shapefile' ? '.zip' : `.${supportedFileType}`;
    };
    const getFileType = (name) => {
        name = name.toLowerCase();
        return Object.values(_types__WEBPACK_IMPORTED_MODULE_5__.SupportedFileTypes).find(t => name === null || name === void 0 ? void 0 : name.endsWith(getFileExtension(t)));
    };
    const getFileInfo = (file) => {
        const type = getFileType(file.name);
        const name = file.name.replace(`.${type}`, '');
        const data = new FormData();
        data.set('file', file);
        data.set('filetype', type);
        data.set('f', 'json');
        return {
            id: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.uuidv1)(),
            type,
            name,
            data,
            size: file.size
        };
    };
    const onFileChange = (event) => __awaiter(void 0, void 0, void 0, function* () {
        if (!event.target.files) {
            return;
        }
        try {
            setIsLoading(true);
            const file = event.target.files[0];
            const fileInfo = getFileInfo(file);
            if (!fileInfo.type) {
                throw new Error(UploadFileError.NotSupportedType);
            }
            uploadingFileInfo.current = fileInfo;
            const featureCollection = yield generateFeatureCollection(fileInfo, portalUrl);
            const multiData = featureCollection.layers.map((l, i) => {
                var _a;
                const geometryType = getGeometryType(l.featureSet.geometryType);
                return {
                    dataSourceJson: {
                        id: getNextAddedDataId(mapWidgetId, multiDataOptions.length + i),
                        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer,
                        sourceLabel: ((_a = l.layerDefinition) === null || _a === void 0 ? void 0 : _a.name) || (i === 0 ? fileInfo.name : `${fileInfo.name} ${i}`),
                        geometryType: geometryType,
                        geoType: l.featureSet.geometryType,
                    },
                    order: multiDataOptions.length + i,
                    restLayer: Object.assign(Object.assign({}, l), { layerDefinition: Object.assign(Object.assign({}, l.layerDefinition), { capabilities: 'Query, Editing, Create, Delete, Update, Extract' }) })
                };
            });
            setMultiDataOptionsFromFile(multiData);
            fileOptionsUpdate(fileInfo);
        }
        catch (error) {
            if (error.message === UploadFileError.NotSupportedType) {
                setErrorMsg(translate(UploadFileError.NotSupportedType));
            }
            else {
                setErrorMsg(translate('failedToUploadError'));
            }
        }
        finally {
            setIsLoading(false);
        }
    });
    const getGeometryType = (type) => {
        switch (type) {
            // case 'JSON_ANNOTATION':
            case _types__WEBPACK_IMPORTED_MODULE_5__.GeoJSONType.point:
                return 'point';
            case _types__WEBPACK_IMPORTED_MODULE_5__.GeoJSONType.polyline:
                return 'polyline';
            case _types__WEBPACK_IMPORTED_MODULE_5__.GeoJSONType.polygon:
                return 'polygon';
        }
    };
    const handleClickAddFile = (evt) => {
        var _a;
        evt.stopPropagation();
        evt.preventDefault();
        (_a = evt.nativeEvent) === null || _a === void 0 ? void 0 : _a.stopImmediatePropagation();
    };
    const handleProjectionChange = (evt) => {
        setProjectionValue(evt.target.value);
    };
    const handleCharCodeChange = (evt) => {
        setCharCodeValue(evt.target.value);
    };
    const onFileCancel = () => {
        setIsLoading(false);
        setErrorMsg(null);
    };
    const handleProcessFile = () => {
        onAddData(multiDataOptionsFromFile);
    };
    function generateFeatureCollection(fileInfo, portalUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (fileInfo.type === _types__WEBPACK_IMPORTED_MODULE_5__.SupportedFileTypes.KML) {
                const serviceUrl = getKmlServiceUrl();
                const kmlString = yield readFileAsText(fileInfo);
                const res = yield (0,_arcgis_core_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])(serviceUrl, {
                    query: {
                        kmlString: encodeURIComponent(kmlString),
                        model: 'simple',
                        folders: ''
                        // outSR: JSON.stringify(outSpatialReference)
                    },
                    responseType: 'json'
                });
                return (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.featureCollection;
            }
            let publishParameters = {};
            // GPX file does not need publishParameters
            if (fileInfo.type !== _types__WEBPACK_IMPORTED_MODULE_5__.SupportedFileTypes.GPX) {
                const isPortal = (_c = (_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _b === void 0 ? void 0 : _b.portalSelf) === null || _c === void 0 ? void 0 : _c.isPortal;
                // GeoJSON file in portal does not need analyze
                if (isPortal && fileInfo.type === _types__WEBPACK_IMPORTED_MODULE_5__.SupportedFileTypes.GeoJson) {
                    publishParameters = {
                        targetSR: {
                            wkid: 102100,
                            latestWkid: 3857
                        },
                        type: fileInfo.type,
                        maxRecordCount: 4000
                    };
                }
                else {
                    // 1. Use REST API analyze to get `publishParameters` which is needed in REST API generate.
                    const analyzeUrl = `${portalUrl}/sharing/rest/content/features/analyze`;
                    fileInfo.data.set('analyzeParameters', JSON.stringify({
                        enableGlobalGeocoding: true,
                        sourceLocale: (_e = (_d = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext) === null || _d === void 0 ? void 0 : _d.locale) !== null && _e !== void 0 ? _e : 'en' // TODO: use org geocode service
                    }));
                    const analyzeResponse = yield (0,_arcgis_core_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])(analyzeUrl, {
                        body: fileInfo.data,
                        method: 'post'
                    });
                    fileInfo.data.delete('analyzeParameters');
                    publishParameters = (_f = analyzeResponse === null || analyzeResponse === void 0 ? void 0 : analyzeResponse.data) === null || _f === void 0 ? void 0 : _f.publishParameters;
                }
            }
            // 2. Use REST API generate to get features from the uploaded file.
            const generateUrl = `${portalUrl}/sharing/rest/content/features/generate`;
            fileInfo.data.set('publishParameters', JSON.stringify(Object.assign(Object.assign({}, publishParameters), { name: fileInfo.name })));
            const generateResponse = yield (0,_arcgis_core_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])(generateUrl, {
                body: fileInfo.data,
                method: 'post'
            });
            fileInfo.data.delete('publishParameters');
            if ((_g = generateResponse === null || generateResponse === void 0 ? void 0 : generateResponse.data) === null || _g === void 0 ? void 0 : _g.featureCollection) {
                (_k = (_j = (_h = generateResponse === null || generateResponse === void 0 ? void 0 : generateResponse.data) === null || _h === void 0 ? void 0 : _h.featureCollection) === null || _j === void 0 ? void 0 : _j.layers) === null || _k === void 0 ? void 0 : _k.forEach((ly) => {
                    var _a, _b, _c, _d;
                    (_b = (_a = ly.featureSet) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.forEach((feature) => {
                        var _a, _b;
                        (_b = (_a = ly.layerDefinition) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.forEach((field) => {
                            var _a;
                            const attrValue = (_a = feature.attributes) === null || _a === void 0 ? void 0 : _a[field.name];
                            if (field.type === 'esriFieldTypeSmallInteger') {
                                if (typeof attrValue === 'boolean') {
                                    feature.attributes[field.name] = attrValue ? 1 : 0;
                                    return;
                                }
                                if (typeof attrValue !== 'number') {
                                    feature.attributes[field.name] = null;
                                }
                            }
                        });
                    });
                    // for gpx and geojson files, no layerDefinition can be passed when generating feature collection due to the lack of analyze,
                    // which will cause the layer name become general, like: "points", "polygons"
                    // so we can add the file name as prefix here to increase recognition of the layer name
                    if ([_types__WEBPACK_IMPORTED_MODULE_5__.SupportedFileTypes.GPX, _types__WEBPACK_IMPORTED_MODULE_5__.SupportedFileTypes.GeoJson].includes(fileInfo.type) && !((_d = (_c = ly.layerDefinition) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.includes(fileInfo.name))) {
                        ly.layerDefinition.name = `${fileInfo.name} - ${ly.layerDefinition.name}`;
                    }
                });
            }
            return (_l = generateResponse === null || generateResponse === void 0 ? void 0 : generateResponse.data) === null || _l === void 0 ? void 0 : _l.featureCollection;
        });
    }
    function readFileAsText(fileInfo) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                resolve(event.target.result);
            };
            reader.readAsText(fileInfo.data.get('file'));
        });
    }
    function getKmlServiceUrl() {
        var _a, _b, _c;
        const isPortal = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.portalSelf) === null || _b === void 0 ? void 0 : _b.isPortal;
        if (isPortal) {
            const portalUrl = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _c === void 0 ? void 0 : _c.portalUrl;
            return `${portalUrl}/sharing/kml`;
        }
        const env = window.jimuConfig.hostEnv;
        const envHost = env === 'dev' ? 'devext' : env === 'qa' ? 'qa' : '';
        return `https://utility${envHost}.arcgis.com/sharing/kml`;
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { open: isOpen, toggle: togglePopper, reference: popperReference, placement: 'right-start', "aria-label": translate('addData'), className: 'geoprocessor-cad-layer-form-popper' },
        errorMsg &&
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { className: 'w-100', style: { position: 'absolute', left: 0, right: 0, zIndex: 1 }, closable: true, form: 'basic', onClose: () => { setErrorMsg(null); }, open: true, text: errorMsg, type: 'warning', withIcon: true }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popper-container" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.PanelHeader, { showClose: true, onClose: togglePopper, level: 1, className: 'p-4' }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'add-data-popper-content' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'data-file-upload w-100 h-100 pb-4 pt-6 px-4' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'supported-type-icons d-flex justify-content-around align-items-center px-6 mb-4' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { width: 13, height: 16, icon: _assets__WEBPACK_IMPORTED_MODULE_10__.FileIcon }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { width: 24, height: 24, icon: _assets__WEBPACK_IMPORTED_MODULE_10__.GPXIcon }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { width: 32, height: 32, icon: _assets__WEBPACK_IMPORTED_MODULE_10__.KMLIcon }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { width: 24, height: 24, icon: _assets__WEBPACK_IMPORTED_MODULE_10__.SHPIcon }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { width: 13, height: 16, icon: _assets__WEBPACK_IMPORTED_MODULE_10__.FileIcon })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'supported-types' }, translate('supportedTypes')),
                    fileOptions
                        ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SelectedFile, { key: fileOptions.id, onRemove: onRemove, dsJson: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(fileOptions) })
                        : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mt-4 drag-area-container' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { for: dragToUploadBtnId, className: 'drag-area text-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'font-14' }, translate('selectOrDropFile')),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'upload-btn-container w-75', title: translate('upload') },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { for: clickToUploadBtnId, className: 'upload-btn text-center mt-4 mb-0 text-truncate' },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, { size: 15, className: 'mr-2' }),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, translate('upload'))),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Input, { id: clickToUploadBtnId, title: '', className: 'upload-btn-file-input', type: 'file', onChange: onFileChange }))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Input, { id: dragToUploadBtnId, onClick: handleClickAddFile, title: '', className: 'drag-area-file-input', type: 'file', tabIndex: -1, onChange: onFileChange })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mt-4 input-select-radio-projection' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h5", null,
                            translate('projection'),
                            ":"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { role: 'radiogroup', "aria-label": translate("projection") },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'd-flex align-items-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: 'projection', className: 'mr-2', value: "etr89", checked: projectionValue === "etr89", onChange: handleProjectionChange }),
                                "UTM31-ETR89"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'd-flex align-items-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: 'projection', className: 'mr-2', value: "wgs84", checked: projectionValue === "wgs84", onChange: handleProjectionChange }),
                                "UTM31-WGS84"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { check: true, className: 'd-flex align-items-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: 'projection', className: 'mr-2', value: "geographics", checked: projectionValue === "geographics", onChange: handleProjectionChange }),
                                translate("geographics")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { check: true, className: 'd-flex align-items-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: 'projection', className: 'mr-2', value: "custom", checked: projectionValue === "custom", onChange: handleProjectionChange }),
                                translate("projectionOthers"),
                                ":"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: 'radio-input-text', disabled: projectionValue !== "custom", type: "email", value: customProjectionValue, onChange: (event) => setCustomProjectionValue(event.target.value) }))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mt-4 input-select-radio-character-codification' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h5", null,
                            translate('charcodeRadioHeading'),
                            ":"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { role: 'radiogroup', "aria-label": translate('charcodeRadioHeading') },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'd-flex align-items-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: 'charCode', className: 'mr-2', value: "utf8", checked: charCodeValue === "utf8", onChange: handleCharCodeChange }),
                                "UTF-8"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'd-flex align-items-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: 'charCode', className: 'mr-2', value: "windows1252", checked: charCodeValue === "windows1252", onChange: handleCharCodeChange }),
                                "Windows 1252"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { check: true, className: 'd-flex align-items-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: 'charCode', className: 'mr-2', value: "custom", checked: charCodeValue === "custom", onChange: handleCharCodeChange }),
                                translate("charcodeOthers"),
                                ":"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: 'radio-input-text', disabled: charCodeValue !== "custom", type: "email", value: customCharcodeValue, onChange: (event) => setCustomCharcodeValue(event.target.value) }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { check: true, className: 'd-flex align-items-center' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: 'charCode', className: 'mr-2', value: "none", checked: charCodeValue === "none", onChange: handleCharCodeChange }),
                                translate("noneSpecified")))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'big-done-btn w-100', style: { paddingTop: '15px' } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleProcessFile, type: 'primary', className: 'text-truncate w-100', title: translate('processData'), "aria-label": translate('processData'), disabled: !fileOptions }, translate('processData'))),
                    isLoading && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_Loading__WEBPACK_IMPORTED_MODULE_11__.DataLoading, { uploadingFileInfo: uploadingFileInfo, onFileCancel: onFileCancel }))))));
};
const SelectedFile = ({ dsJson, onRemove }) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const ds = [];
    const dsInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state) => { var _a; return (_a = state.dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[dsJson.id]; });
    const isDataError = dsInfo ? dsInfo.instanceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.CreateError : !ds;
    const isDataLoading = dsInfo ? dsInfo.instanceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotCreated : !ds;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex align-items-center justify-content-between w-100 data-item', role: "listitem", "aria-label": dsJson.label || dsJson.name },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex align-items-center flex-grow-1 text-truncate' },
            isDataError &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-center align-items-center flex-shrink-0 data-error' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { className: 'flex-shrink-0', buttonType: 'tertiary', form: 'tooltip', size: 'small', type: 'error', text: translate('dataSourceCreateError') })),
            isDataLoading &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-center align-items-center flex-shrink-0 data-loading' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingType.Donut, width: 16, height: 16 })),
            !isDataError && !isDataLoading &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-center align-items-center flex-shrink-0 data-thumbnail' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDsIcon(dsJson), color: '#FFFFFF', size: '12' })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'flex-grow-1 text-truncate pl-2 data-label', title: dsJson.label || dsJson.name }, dsJson.label || dsJson.name)),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex align-items-center flex-shrink-0' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'tertiary', size: 'sm', icon: true, title: translate('remove'), "aria-label": translate('remove'), onClick: () => { onRemove(dsJson.id); } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_6__.CloseOutlined, { size: 14, color: 'var(--dark-800)' })))));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/index.ts":
/*!**************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/index.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileIcon: () => (/* reexport module object */ _file_svg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   GPXIcon: () => (/* reexport module object */ _ic_GPX_svg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   KMLIcon: () => (/* reexport module object */ _ic_KML_svg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   SHPIcon: () => (/* reexport module object */ _ic_SHP_svg__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _file_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/file.svg");
/* harmony import */ var _file_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ic_GPX_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ic_GPX.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_GPX.svg");
/* harmony import */ var _ic_GPX_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ic_GPX_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ic_KML_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ic_KML.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_KML.svg");
/* harmony import */ var _ic_KML_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ic_KML_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ic_SHP_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ic_SHP.svg */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_SHP.svg");
/* harmony import */ var _ic_SHP_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ic_SHP_svg__WEBPACK_IMPORTED_MODULE_3__);






/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/translations/default.ts":
/*!**********************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/translations/default.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    uploadFile: 'Penja el teu fitxer',
    selectOrDropFile: 'Escull un fitxer o arrossega',
    supportedTypes: 'Formats compatibles: GPX, KML, SHP',
    clickToAddData: 'Clica per afegir dades',
    processData: 'Processar',
    geographics: 'Geogràfiques',
    charcodeOthers: 'Altres (indicar codi de pàgina OEM o ANSI)',
    projectionOthers: 'Altres (indicar WKID de llista)',
    projection: 'Projecció',
    charcodeRadioHeading: 'Joc de caràcters',
    noneSpecified: 'No especificar cap',
    upload: 'Carregar',
    defaultPlaceholderText: 'Clic per afegir dades',
    fileIsUploading: 'S\'està carregant',
    cancel: 'Cancel·la',
    addStyles: 'Afegir estils',
    icon: 'Icona',
    color: 'Color',
    size: 'Mida',
    outlineColor: 'Color contorn',
    insideColor: 'Interior',
    thickness: 'Gruix',
    Annotation: "Anotació",
    point: "Punt",
    polyline: "Línia",
    polygon: "Polígon",
    noSymbol: "Sense símbol",
    onlySupportedFiles: "Només es poden penjar els fitxers de tipus GPX, KML o SHP",
    editLayerStyles: "Edita els estils de la capa",
    removeLayer: "Elimina la capa",
    failedToUploadError: 'No s\'ha pogut carregar correctament',
    somethingFailed: "Vaja algo ha fallat."
});


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/types/index.ts":
/*!*************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/types/index.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoJSONType: () => (/* reexport safe */ _uploadFileTypes__WEBPACK_IMPORTED_MODULE_0__.GeoJSONType),
/* harmony export */   SupportedFileTypes: () => (/* reexport safe */ _uploadFileTypes__WEBPACK_IMPORTED_MODULE_0__.SupportedFileTypes)
/* harmony export */ });
/* harmony import */ var _uploadFileTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadFileTypes */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/types/uploadFileTypes.ts");



/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/types/uploadFileTypes.ts":
/*!***********************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/types/uploadFileTypes.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoJSONType: () => (/* binding */ GeoJSONType),
/* harmony export */   SupportedFileTypes: () => (/* binding */ SupportedFileTypes)
/* harmony export */ });
var SupportedFileTypes;
(function (SupportedFileTypes) {
    SupportedFileTypes["GeoJson"] = "geojson";
    SupportedFileTypes["Shapefile"] = "shapefile";
    SupportedFileTypes["KML"] = "kml";
    SupportedFileTypes["GPX"] = "gpx";
})(SupportedFileTypes || (SupportedFileTypes = {}));
var GeoJSONType;
(function (GeoJSONType) {
    GeoJSONType["point"] = "esriGeometryPoint";
    GeoJSONType["polyline"] = "esriGeometryPolyline";
    GeoJSONType["polygon"] = "esriGeometryPolygon";
})(GeoJSONType || (GeoJSONType = {}));


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/MapComponent.tsx":
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/MapComponent.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapComponent: () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./your-extensions/widgets/route-edition/src/runtime/context/index.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/layers/GraphicsLayer */ "@arcgis/core/layers/GraphicsLayer");
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "@arcgis/core/layers/FeatureLayer");
/* harmony import */ var _ManualRoute_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ManualRoute/types */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/types/index.ts");
/* harmony import */ var _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/Graphic */ "@arcgis/core/Graphic");
/* harmony import */ var esri_layers_support_LabelClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/layers/support/LabelClass */ "esri/layers/support/LabelClass");
/* harmony import */ var _arcgis_core_symbols_TextSymbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @arcgis/core/symbols/TextSymbol.js */ "@arcgis/core/symbols/TextSymbol.js");
/* harmony import */ var esri_layers_GroupLayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/layers/GroupLayer */ "esri/layers/GroupLayer");
/* harmony import */ var _arcgis_core_widgets_Sketch_SketchViewModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @arcgis/core/widgets/Sketch/SketchViewModel */ "@arcgis/core/widgets/Sketch/SketchViewModel");
/* harmony import */ var _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AutomaticRoute/assets */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/index.ts");












const MapComponent = ({ children }) => {
    const { mapWidgetId, } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.RouteEditionContext);
    const sketchLayer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const jimuMapViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const sketchViewModel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // * Evento de pointer up para los puntos sketch añadidos
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!jimuMapViewRef.current)
            return;
        const onPointerUpGeometry = jimuMapViewRef.current.view.on('pointer-up', onDragPointEnd);
        return () => {
            onPointerUpGeometry && onPointerUpGeometry.remove();
        };
    }, [jimuMapViewRef.current]);
    const onDragPointEnd = (event) => {
        jimuMapViewRef.current.view.hitTest(event).then((response) => {
            var _a;
            const graphic = (_a = response.results) === null || _a === void 0 ? void 0 : _a.find(hitResult => {
                return hitResult.type === 'graphic' && hitResult.graphic.layer === sketchLayer.current;
            });
            if (graphic) {
                sketchViewModel.current.complete();
            }
        });
    };
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            jimuMapViewRef.current = jmv;
            const sketchGraphicsLayer = new _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({
                title: 'Sketch points'
            });
            sketchViewModel.current = new _arcgis_core_widgets_Sketch_SketchViewModel__WEBPACK_IMPORTED_MODULE_10__["default"]({
                layer: sketchGraphicsLayer,
                view: jimuMapViewRef.current.view,
            });
            sketchLayer.current = sketchGraphicsLayer;
            jimuMapViewRef.current.view.map.layers.add(sketchGraphicsLayer);
        }
    };
    const getTextSymbol = (feature) => {
        const textAngle = feature.attributes.TxtAngle;
        return new _arcgis_core_symbols_TextSymbol_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
            color: "black",
            haloColor: "white",
            haloSize: "1px",
            font: {
                size: 10,
                family: "Arial",
                weight: "bold"
            },
            angle: textAngle ? -(feature.attributes.TxtAngle) : 0,
            text: feature.attributes.Text || "",
        });
    };
    const getFeatureList = (dataOptions, geometryType, projection) => {
        return dataOptions.features.map((feature) => {
            // let arcgisGeometry = feature.geometry.type ? geojsonToArcGIS(feature.geometry) : feature.geometry
            let arcgisGeometry = feature.geometry;
            arcgisGeometry.spatialReference = arcgisGeometry.spatialReference;
            arcgisGeometry.type = geometryType;
            return new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                geometry: arcgisGeometry,
                attributes: feature.properties || feature.attributes,
            });
        });
    };
    const getAndDrawMapLayers = (config) => {
        const { dataList, fileName, projection } = config;
        const hashedLayers = {};
        const layerList = dataList.map((dataOptions, index) => {
            // const isAnnotation = dataOptions.dataSourceJson.geoType === "JSON_ANNOTATION"
            const isPolygon = dataOptions.dataSourceJson.geoType === _ManualRoute_types__WEBPACK_IMPORTED_MODULE_5__.GeoJSONType.polygon;
            const geometryType = dataOptions.dataSourceJson.geometryType;
            const featureList = getFeatureList(dataOptions.restLayer.featureSet, geometryType, projection);
            const geometryTypeName = geometryType;
            let layer;
            const extraFeatureProps = extraFeatureConfig(geometryType);
            let renderer;
            if (isPolygon) {
                const fillSymbol = {
                    type: "simple-fill",
                    color: [226, 119, 40, 0.3],
                    outline: {
                        color: [226, 119, 40],
                        width: 1
                    }
                };
                renderer = {
                    type: "simple",
                    symbol: fillSymbol
                };
            }
            layer = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"](Object.assign(Object.assign({ id: dataOptions.dataSourceJson.id, source: featureList }, (renderer && { renderer: renderer })), { spatialReference: { wkid: projection }, objectIdField: "OBJECTID", title: `${dataOptions.dataSourceJson.sourceLabel} ${geometryTypeName}`, fields: [{
                        name: "OBJECTID",
                        alias: "OBJECTID",
                        type: "oid"
                    }, {
                        name: "Text",
                        alias: "Text",
                        type: "string"
                    }] }));
            hashedLayers[layer.id] = layer;
            return layer;
        });
        const groupedLayers = new esri_layers_GroupLayer__WEBPACK_IMPORTED_MODULE_9__["default"]({
            title: `fitxer ${fileName}`,
            visibilityMode: "independent",
            layers: layerList
        });
        layerList.forEach((feature, index) => {
            let layerListwidgtOrder = layerList.length - index - 1;
            groupedLayers.reorder(feature, layerListwidgtOrder);
        });
        jimuMapViewRef.current.view.map.layers.add(groupedLayers);
        return hashedLayers;
    };
    const extraFeatureConfig = (geometryType) => {
        if (geometryType === "point") {
            const labelClass = new esri_layers_support_LabelClass__WEBPACK_IMPORTED_MODULE_7__["default"]({
                symbol: {
                    type: "text",
                    color: "black",
                    haloColor: "white",
                    haloSize: "1px",
                    font: {
                        size: 10,
                        family: "Arial",
                        weight: "bold"
                    }
                },
                labelPlacement: "above-center",
                labelExpressionInfo: {
                    expression: 'DefaultValue($feature.Text, "")'
                }
            });
            return {
                labelingInfo: [labelClass]
            };
        }
        return {};
    };
    const drawSelectedCoordinateInMap = (config) => {
        const { point, currentModelConfig, } = config;
        const pointIcon = getUpdatedIconInMap(point, currentModelConfig);
        sketchLayer.current.add(pointIcon);
        // if (pointType.hasTextInMap) {
        //   updatedTextIconInMap(point, currentModelConfig)
        // }
    };
    const getUpdatedIconInMap = (point, currentModelConfig) => {
        const currentModel = currentModelConfig; // TODO: || currentActiveCoordinateFilter
        const textSymbol = {
            type: "picture-marker",
            color: "#7A003C",
            url: getSvgIcon(currentModel.index),
            width: 20,
            height: 23
        };
        removePreviousDrawnGraph(currentModel.id);
        return new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
            attributes: {
                id: currentModel.id
            },
            geometry: point,
            symbol: textSymbol
        });
    };
    const getSvgIcon = (index) => {
        const markers = [
            null,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker1,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker2,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker3,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker4,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker5,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker6,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker7,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker8,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker9,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker10,
            _AutomaticRoute_assets__WEBPACK_IMPORTED_MODULE_11__.IndexMarker11,
        ];
        if (index < 1 || index > 11) {
            throw new Error(`No SVG marker found for index: ${index}`);
        }
        return markers[index];
    };
    const removePreviousDrawnGraph = (idPointToRemove) => {
        const currentGraphicsLayer = sketchLayer.current.graphics;
        const filteredPointToRemove = currentGraphicsLayer.find(filteredpoint => filteredpoint.attributes.id === idPointToRemove);
        filteredPointToRemove && currentGraphicsLayer.remove(filteredPointToRemove);
    };
    const contextValue = {
        jimuMapView: jimuMapViewRef.current,
        getAndDrawMapLayers: getAndDrawMapLayers,
        drawSelectedCoordinateInMap: drawSelectedCoordinateInMap,
        sketchViewModel: sketchViewModel.current,
        removePreviousDrawnGraph: removePreviousDrawnGraph,
    };
    // const updatedTextIconInMap = (point: Point, currentModelConfig?: ModelFilterRoute, index?: number): void => {
    //   const currentModel = currentModelConfig || currentActiveCoordinateFilter
    //   const textSymbol = {
    //     type: "text",
    //     color: "#000000",
    //     text: index,
    //     angle: 0,
    //     font: {
    //       size: 12,
    //       family: "Arial",
    //       weight: "bold"
    //     },
    //     yoffset: '-17px'
    //   };
    //   removePreviousDrawnGraph(currentModel.text_id, true)
    //   const pointTextIcon = new Graphic({
    //     attributes: {
    //       id: currentModel.text_id,
    //       type: 'text',
    //     },
    //     geometry: point,
    //     symbol: textSymbol
    //   });
    //   jimuMapViewRef.current.view.graphics.add(pointTextIcon)
    // }
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_context__WEBPACK_IMPORTED_MODULE_1__.MapContext.Provider, { value: contextValue },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: mapWidgetId, onActiveViewChange: activeViewChangeHandler }),
            children)));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/Notifications/Alert.tsx":
/*!**********************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/Notifications/Alert.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @esri/calcite-components-react */ "@esri/calcite-components-react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");



const defaultKindOptions = {
    success: {
        icon: 'check',
        autoCloseDuration: 'medium'
    },
    danger: {
        icon: 'x',
        autoCloseDuration: 'fast'
    },
    warning: {
        icon: 'exclamation-mark-triangle'
    }
};
const Alert = react__WEBPACK_IMPORTED_MODULE_1__["default"].memo((props) => {
    const { kind, enableAutoClose, autoCloseDuration, icon, label, scale, info } = props.alert;
    const { title, message } = info;
    const mappedOptions = defaultKindOptions[kind];
    const autoCloseTime = autoCloseDuration ||
        (mappedOptions === null || mappedOptions === void 0 ? void 0 : mappedOptions.autoCloseDuration) ||
        'medium';
    const isAutoClosed = !!(autoCloseTime && enableAutoClose);
    const alertRef = react__WEBPACK_IMPORTED_MODULE_1__["default"].useRef(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const detectionInterval = setInterval(() => {
            const alertContainer = alertRef.current.shadowRoot
                .firstChild;
            if (!alertContainer)
                return;
            alertContainer.style.transform =
                'translate(-20px, 4px)';
            clearInterval(detectionInterval);
        }, 50);
        return () => {
            clearInterval(detectionInterval);
        };
    }, []);
    return (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__.CalciteAlert, { kind: kind, open: true, placement: "bottom-end", autoClose: isAutoClosed, autoCloseDuration: autoCloseTime, icon: icon || (mappedOptions === null || mappedOptions === void 0 ? void 0 : mappedOptions.icon), label: label, scale: scale !== null && scale !== void 0 ? scale : 'm', onCalciteAlertClose: props.onCalciteAlertClose, ref: alertRef, style: {
            '--calcite-alert-width': '400px'
        } }, (title || message) && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_1__["default"].Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { slot: "title" }, title),
        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { slot: "message" }, message)))), document.querySelector('body'));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/Notifications/AlertsContainer.tsx":
/*!********************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/Notifications/AlertsContainer.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertsContainer: () => (/* binding */ AlertsContainer)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert */ "./your-extensions/widgets/route-edition/src/runtime/components/Notifications/Alert.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _constants_stateId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/stateId */ "./your-extensions/widgets/route-edition/src/runtime/components/Notifications/constants/stateId.ts");





const AlertsContainer = (props) => {
    const newAlert = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state) => { var _a; return (_a = state.widgetsState[_constants_stateId__WEBPACK_IMPORTED_MODULE_3__.NOTIFICATION_STATE_ID]) === null || _a === void 0 ? void 0 : _a.createAlert; });
    const [alerts, setAlerts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [alertIndex, setAlertIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!newAlert)
            return;
        setAlerts((prev) => [...prev, Object.assign({ id: alertIndex }, newAlert)]);
        setAlertIndex(prev => prev + 1);
    }, [newAlert]);
    const handleAlertClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((alertId) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== alertId));
    }, []);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'jimu-widget' }, alerts.map((alert) => {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__["default"], { key: alert.id, alert: alert, onCalciteAlertClose: () => handleAlertClose(alert.id) }));
    })));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/Notifications/constants/stateId.ts":
/*!*********************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/Notifications/constants/stateId.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOTIFICATION_STATE_ID: () => (/* binding */ NOTIFICATION_STATE_ID)
/* harmony export */ });
const NOTIFICATION_STATE_ID = 'notificationState';


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/RouteSelector/RouteSelectorComponent.tsx":
/*!***************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/RouteSelector/RouteSelectorComponent.tsx ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteSelectorComponent: () => (/* binding */ RouteSelectorComponent)
/* harmony export */ });
/* harmony import */ var _esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @esri/calcite-components-react */ "@esri/calcite-components-react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translations/default */ "./your-extensions/widgets/route-edition/src/runtime/translations/default.ts");



const RouteSelectorComponent = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_0__.CalciteFlowItem, { heading: translate('routeSelectorTitle'), beforeBack: props.onBackToList, loading: false }, "hey"));
};


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/index.ts":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSelector: () => (/* reexport safe */ _AppSelectorComponent__WEBPACK_IMPORTED_MODULE_0__.AppSelector),
/* harmony export */   AutomaticRouteComponent: () => (/* reexport safe */ _AutomaticRoute_AutomaticRouteComponent__WEBPACK_IMPORTED_MODULE_3__.AutomaticRouteComponent),
/* harmony export */   InterestComponent: () => (/* reexport safe */ _InterestPoint_InterestPointComponent__WEBPACK_IMPORTED_MODULE_2__.InterestComponent),
/* harmony export */   ManualRouteComponent: () => (/* reexport safe */ _ManualRoute_ManualRouteComponent__WEBPACK_IMPORTED_MODULE_4__.ManualRouteComponent),
/* harmony export */   RouteSelectorComponent: () => (/* reexport safe */ _RouteSelector_RouteSelectorComponent__WEBPACK_IMPORTED_MODULE_1__.RouteSelectorComponent)
/* harmony export */ });
/* harmony import */ var _AppSelectorComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSelectorComponent */ "./your-extensions/widgets/route-edition/src/runtime/components/AppSelectorComponent.tsx");
/* harmony import */ var _RouteSelector_RouteSelectorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RouteSelector/RouteSelectorComponent */ "./your-extensions/widgets/route-edition/src/runtime/components/RouteSelector/RouteSelectorComponent.tsx");
/* harmony import */ var _InterestPoint_InterestPointComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InterestPoint/InterestPointComponent */ "./your-extensions/widgets/route-edition/src/runtime/components/InterestPoint/InterestPointComponent.tsx");
/* harmony import */ var _AutomaticRoute_AutomaticRouteComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AutomaticRoute/AutomaticRouteComponent */ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/AutomaticRouteComponent.tsx");
/* harmony import */ var _ManualRoute_ManualRouteComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ManualRoute/ManualRouteComponent */ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/ManualRouteComponent.tsx");







/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/context/MapContext.ts":
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/context/MapContext.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapContext: () => (/* binding */ MapContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

const MapContext = react__WEBPACK_IMPORTED_MODULE_0__["default"].createContext({
    jimuMapView: null,
    getAndDrawMapLayers: null,
    drawSelectedCoordinateInMap: null,
    sketchViewModel: null,
    removePreviousDrawnGraph: null,
});


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/context/RouteEditionContext.ts":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/context/RouteEditionContext.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteEditionContext: () => (/* binding */ RouteEditionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

const RouteEditionContext = react__WEBPACK_IMPORTED_MODULE_0__["default"].createContext({
    mapWidgetId: null,
    SettingConfig: null,
    appConfig: null,
    portalUrl: null,
    widgetId: null,
});


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/context/index.ts":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/context/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapContext: () => (/* reexport safe */ _MapContext__WEBPACK_IMPORTED_MODULE_1__.MapContext),
/* harmony export */   RouteEditionContext: () => (/* reexport safe */ _RouteEditionContext__WEBPACK_IMPORTED_MODULE_0__.RouteEditionContext)
/* harmony export */ });
/* harmony import */ var _RouteEditionContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouteEditionContext */ "./your-extensions/widgets/route-edition/src/runtime/context/RouteEditionContext.ts");
/* harmony import */ var _MapContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapContext */ "./your-extensions/widgets/route-edition/src/runtime/context/MapContext.ts");




/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/translations/default.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/translations/default.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    routeSelectorTitle: 'Selecciona',
    interestPointTitle: 'Nou punt d\'interès',
    manualRouteTitle: 'Nova ruta manual',
    automaticRouteTitle: 'Nova ruta automàtica',
    title: 'Titol',
    address: 'Adreça',
    stop: 'Parada',
    add_stop: 'Afegir Parada',
    newRoute: 'Nova Ruta',
    errorSearchNotConfiguredTitle: 'Vaja sembla que et falta configurar el buscador!',
    errorSearchNotConfiguredMessage: 'Necessites accedir al experience builder per configurar els tipus de cerca per al widget.',
    errorSearchNotAvailableAreaPointTitle: 'Punt no permès',
    errorSearchNotAvailableAreaPointMessage: 'Sembla ser que has intentat posar un punt fora de l\'àrea de Tarragona.',
    fileIsUploading: 'S\'està carregant',
    cancel: 'Cancel·la',
    execute_: 'Executa'
});


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/types/index.ts":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/types/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedAppEnum: () => (/* reexport safe */ _selectedAppTypes__WEBPACK_IMPORTED_MODULE_0__.SelectedAppEnum)
/* harmony export */ });
/* harmony import */ var _selectedAppTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectedAppTypes */ "./your-extensions/widgets/route-edition/src/runtime/types/selectedAppTypes.ts");
/* harmony import */ var _mapTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapTypes */ "./your-extensions/widgets/route-edition/src/runtime/types/mapTypes.ts");




/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/types/mapTypes.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/types/mapTypes.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/types/selectedAppTypes.ts":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/types/selectedAppTypes.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedAppEnum: () => (/* binding */ SelectedAppEnum)
/* harmony export */ });
var SelectedAppEnum;
(function (SelectedAppEnum) {
    SelectedAppEnum["AppSelector"] = "AppSelector";
    SelectedAppEnum["RouteSelector"] = "RouteSelector";
    SelectedAppEnum["NewInterestPoint"] = "NewInterestPoint";
    SelectedAppEnum["NewManualRoute"] = "NewManualRoute";
    SelectedAppEnum["AutomaticRoute"] = "AutomaticRoute";
})(SelectedAppEnum || (SelectedAppEnum = {}));


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/utils.ts":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/utils.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetUtils: () => (/* binding */ WidgetUtils)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _components_Notifications_constants_stateId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Notifications/constants/stateId */ "./your-extensions/widgets/route-edition/src/runtime/components/Notifications/constants/stateId.ts");


var WidgetUtils;
(function (WidgetUtils) {
    WidgetUtils.createAlert = (alert) => {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(_components_Notifications_constants_stateId__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_STATE_ID, "createAlert", Object.assign({}, alert)));
    };
})(WidgetUtils || (WidgetUtils = {}));


/***/ }),

/***/ "./your-extensions/widgets/shared-code/GenericModal.tsx":
/*!**************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/GenericModal.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericModal: () => (/* binding */ GenericModal)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/shared-code/translations/default.ts");
/** @jsx jsx */




const GenericModal = (props) => {
    const { modalCallback, updateShowModalStatus, showModalStatus, headerData, bodyData, deleteTitle = 'delete_', } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const handleClose = () => updateShowModalStatus(false);
    const handleRemove = () => {
        handleClose();
        modalCallback();
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, { toggle: handleClose, isOpen: showModalStatus, contentClassName: "remove-modal", css: styles },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, { closeIcon: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>', style: { marginRight: '10px' } }), toggle: handleClose }, headerData),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalBody, null, bodyData),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleClose, type: "secondary" }, translate('cancel_')),
            ' ',
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleRemove, type: "danger" }, translate(deleteTitle)))));
};
const styles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .remove-modal .modal-header .close {
    padding: initial !important;
    margin: initial !important;
  }
`;


/***/ }),

/***/ "./your-extensions/widgets/shared-code/translations/default.ts":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/translations/default.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    cancel_: 'Cancelar',
    delete_: 'Borrar',
    reset_: 'Resetear',
});


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/assets/automatic-route.svg":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/assets/automatic-route.svg ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiAyMS4yNUMxMS43NjIzIDIxLjI1IDExLjUyNjkgMjEuMjAzMyAxMS4zMDczIDIxLjExMjNDMTEuMDg3NyAyMS4wMjE0IDEwLjg4ODEgMjAuODg4MSAxMC43MiAyMC43MkwzLjI4IDEzLjI4QzMuMTExODggMTMuMTExOSAyLjk3ODUzIDEyLjkxMjQgMi44ODc1NCAxMi42OTI4QzIuNzk2NTYgMTIuNDczMSAyLjc0OTczIDEyLjIzNzcgMi43NDk3MyAxMkMyLjc0OTczIDExLjc2MjMgMi43OTY1NiAxMS41MjY5IDIuODg3NTQgMTEuMzA3M0MyLjk3ODUzIDExLjA4NzYgMy4xMTE4OCAxMC44ODgxIDMuMjggMTAuNzJMMTAuNzIgMy4yODAwMUMxMS4wNjU2IDIuOTUyMjQgMTEuNTIzNyAyLjc2OTUzIDEyIDIuNzY5NTNDMTIuNDc2MyAyLjc2OTUzIDEyLjkzNDQgMi45NTIyNCAxMy4yOCAzLjI4MDAxTDIwLjcyIDEwLjcyQzIwLjg4ODEgMTAuODg4MSAyMS4wMjE1IDExLjA4NzYgMjEuMTEyNSAxMS4zMDczQzIxLjIwMzQgMTEuNTI2OSAyMS4yNTAzIDExLjc2MjMgMjEuMjUwMyAxMkMyMS4yNTAzIDEyLjIzNzcgMjEuMjAzNCAxMi40NzMxIDIxLjExMjUgMTIuNjkyOEMyMS4wMjE1IDEyLjkxMjQgMjAuODg4MSAxMy4xMTE5IDIwLjcyIDEzLjI4TDEzLjI4IDIwLjcyQzEzLjExMTkgMjAuODg4MSAxMi45MTIzIDIxLjAyMTQgMTIuNjkyNyAyMS4xMTIzQzEyLjQ3MzEgMjEuMjAzMyAxMi4yMzc3IDIxLjI1IDEyIDIxLjI1Wk0xMiA0LjI1MDAxQzExLjk2MDUgNC4yNDg3NSAxMS45MjEzIDQuMjU2MTYgMTEuODg1IDQuMjcxNzFDMTEuODQ4NyA0LjI4NzI2IDExLjgxNjMgNC4zMTA1NyAxMS43OSA0LjM0MDAxTDQuMzQgMTEuNzlDNC4zMTE1NiAxMS44MTcxIDQuMjg4OTIgMTEuODQ5NyA0LjI3MzQ1IDExLjg4NThDNC4yNTc5OCAxMS45MjE5IDQuMjUgMTEuOTYwNyA0LjI1IDEyQzQuMjUgMTIuMDM5MyA0LjI1Nzk4IDEyLjA3ODIgNC4yNzM0NSAxMi4xMTQzQzQuMjg4OTIgMTIuMTUwMyA0LjMxMTU2IDEyLjE4MjkgNC4zNCAxMi4yMUwxMS43OSAxOS42NkMxMS44MTI3IDE5LjY5NTEgMTEuODQzOCAxOS43MjM5IDExLjg4MDQgMTkuNzQzOUMxMS45MTcxIDE5Ljc2MzkgMTEuOTU4MiAxOS43NzQ0IDEyIDE5Ljc3NDRDMTIuMDQxOCAxOS43NzQ0IDEyLjA4MjkgMTkuNzYzOSAxMi4xMTk2IDE5Ljc0MzlDMTIuMTU2MiAxOS43MjM5IDEyLjE4NzMgMTkuNjk1MSAxMi4yMSAxOS42NkwxOS42NiAxMi4yMUMxOS42ODg0IDEyLjE4MjkgMTkuNzExMSAxMi4xNTAzIDE5LjcyNjYgMTIuMTE0M0MxOS43NDIgMTIuMDc4MiAxOS43NSAxMi4wMzkzIDE5Ljc1IDEyQzE5Ljc1IDExLjk2MDcgMTkuNzQyIDExLjkyMTkgMTkuNzI2NiAxMS44ODU4QzE5LjcxMTEgMTEuODQ5NyAxOS42ODg0IDExLjgxNzEgMTkuNjYgMTEuNzlMMTIuMjEgNC4zNDAwMUMxMi4xODM3IDQuMzEwNTcgMTIuMTUxMyA0LjI4NzI2IDEyLjExNSA0LjI3MTcxQzEyLjA3ODcgNC4yNTYxNiAxMi4wMzk1IDQuMjQ4NzUgMTIgNC4yNTAwMVoiIGZpbGw9IiMwMDAwMDAiLz4NCjxwYXRoIGQ9Ik0xMC43MyAxNC40MkMxMC42MzE1IDE0LjQyMDUgMTAuNTMzOCAxNC40MDEzIDEwLjQ0MjggMTQuMzYzNUMxMC4zNTE4IDE0LjMyNTcgMTAuMjY5MyAxNC4yNzAxIDEwLjIgMTQuMkw4LjAwMDAxIDEyQzcuODU5NTYgMTEuODU5NCA3Ljc4MDY3IDExLjY2ODggNy43ODA2NyAxMS40N0M3Ljc4MDY3IDExLjI3MTMgNy44NTk1NiAxMS4wODA2IDguMDAwMDEgMTAuOTRMMTAuMiA4LjcyMDAxQzEwLjM0MDYgOC41Nzk1NiAxMC41MzEzIDguNTAwNjcgMTAuNzMgOC41MDA2N0MxMC45Mjg4IDguNTAwNjcgMTEuMTE5NCA4LjU3OTU2IDExLjI2IDguNzIwMDFDMTEuNDAwNSA4Ljg2MDY0IDExLjQ3OTMgOS4wNTEyNiAxMS40NzkzIDkuMjUwMDFDMTEuNDc5MyA5LjQ0ODc2IDExLjQwMDUgOS42MzkzOSAxMS4yNiA5Ljc4MDAxTDkuNTYwMDEgMTEuNDZMMTEuMjYgMTMuMTRDMTEuNDAwNSAxMy4yODA2IDExLjQ3OTMgMTMuNDcxMyAxMS40NzkzIDEzLjY3QzExLjQ3OTMgMTMuODY4OCAxMS40MDA1IDE0LjA1OTQgMTEuMjYgMTQuMkMxMS4xOTA4IDE0LjI3MDEgMTEuMTA4MiAxNC4zMjU3IDExLjAxNzIgMTQuMzYzNUMxMC45MjYyIDE0LjQwMTMgMTAuODI4NSAxNC40MjA1IDEwLjczIDE0LjQyWiIgZmlsbD0iIzAwMDAwMCIvPg0KPHBhdGggZD0iTTE1LjUgMTVDMTUuMzAxOSAxNC45OTc0IDE1LjExMjYgMTQuOTE3NiAxNC45NzI1IDE0Ljc3NzVDMTQuODMyNCAxNC42Mzc0IDE0Ljc1MjYgMTQuNDQ4MSAxNC43NSAxNC4yNVYxMi4yNUg4LjVDOC4zMDEwOSAxMi4yNSA4LjExMDMyIDEyLjE3MSA3Ljk2OTY3IDEyLjAzMDNDNy44MjkwMiAxMS44ODk3IDcuNzUgMTEuNjk4OSA3Ljc1IDExLjVDNy43NSAxMS4zMDExIDcuODI5MDIgMTEuMTEwMyA3Ljk2OTY3IDEwLjk2OTdDOC4xMTAzMiAxMC44MjkgOC4zMDEwOSAxMC43NSA4LjUgMTAuNzVIMTUuNUMxNS42OTgxIDEwLjc1MjYgMTUuODg3NCAxMC44MzI0IDE2LjAyNzUgMTAuOTcyNUMxNi4xNjc2IDExLjExMjYgMTYuMjQ3NCAxMS4zMDE5IDE2LjI1IDExLjVWMTQuMjlDMTYuMjM3NCAxNC40ODExIDE2LjE1MzIgMTQuNjYwMyAxNi4wMTQxIDE0Ljc5MkMxNS44NzUxIDE0LjkyMzYgMTUuNjkxNSAxNC45OTc5IDE1LjUgMTVaIiBmaWxsPSIjMDAwMDAwIi8+DQo8L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/assets/new-interest-point.svg":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/assets/new-interest-point.svg ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgLTAuNSAyMSAyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+ZWRpdF9jb3ZlciBbIzE0ODFdPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz4NCg0KPC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iRHJpYmJibGUtTGlnaHQtUHJldmlldyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxOS4wMDAwMDAsIC0zNTkuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+DQogICAgICAgICAgICA8ZyBpZD0iaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zODQsMjA5LjIxMDQ3NSBMMzg0LDIxOSBMMzYzLDIxOSBMMzYzLDE5OS40MjA5NSBMMzczLjUsMTk5LjQyMDk1IEwzNzMuNSwyMDEuMzc4ODU1IEwzNjUuMSwyMDEuMzc4ODU1IEwzNjUuMSwyMTcuMDQyMDk1IEwzODEuOSwyMTcuMDQyMDk1IEwzODEuOSwyMDkuMjEwNDc1IEwzODQsMjA5LjIxMDQ3NSBaIE0zNzAuMzUsMjA5LjUxMzk1IEwzNzguNzczMSwyMDEuNjQ1MTMgTDM4MC40MDQ4LDIwMy42NDMxNzIgTDM3MS44ODE5NSwyMTIuMTQ3MzMyIEwzNzAuMzUsMjEyLjE0NzMzMiBMMzcwLjM1LDIwOS41MTM5NSBaIE0zNjguMjUsMjE0LjEwNTIzNyBMMzcyLjc4MTgsMjE0LjEwNTIzNyBMMzgzLjE4NDE1LDIwMy42NDUxMyBMMzc4LjgyOTgsMTk5IEwzNjguMjUsMjA4LjY4NzcxNCBMMzY4LjI1LDIxNC4xMDUyMzcgWiIgaWQ9ImVkaXRfY292ZXItWyMxNDgxXSI+DQoNCjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/assets/new-route.svg":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/assets/new-route.svg ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguODI5Mjk0MjksMjAgQzguNDE3NDU3ODgsMjEuMTY1MTkyNCA3LjMwNjIxODgzLDIyIDYsMjIgQzQuMzQzMTQ1NzUsMjIgMywyMC42NTY4NTQyIDMsMTkgQzMsMTcuMzQzMTQ1OCA0LjM0MzE0NTc1LDE2IDYsMTYgQzcuMzA2MjE4ODMsMTYgOC40MTc0NTc4OCwxNi44MzQ4MDc2IDguODI5Mjk0MjksMTggTDE3LjUsMTggQzE4Ljg4MDcxMTksMTggMjAsMTYuODgwNzExOSAyMCwxNS41IEMyMCwxNC4xMTkyODgxIDE4Ljg4MDcxMTksMTMgMTcuNSwxMyBMNi41LDEzIEM0LjAxNDcxODYzLDEzIDIsMTAuOTg1MjgxNCAyLDguNSBDMiw2LjAxNDcxODYzIDQuMDE0NzE4NjMsNCA2LjUsNCBMOS41ODU3ODY0NCw0IEw4LjI5Mjg5MzIyLDIuNzA3MTA2NzggTDkuNzA3MTA2NzgsMS4yOTI4OTMyMiBMMTMuNDE0MjEzNiw1IEw5LjcwNzEwNjc4LDguNzA3MTA2NzggTDguMjkyODkzMjIsNy4yOTI4OTMyMiBMOS41ODU3ODY0NCw2IEw2LjUsNiBDNS4xMTkyODgxMyw2IDQsNy4xMTkyODgxMyA0LDguNSBDNCw5Ljg4MDcxMTg3IDUuMTE5Mjg4MTMsMTEgNi41LDExIEwxNy41LDExIEMxOS45ODUyODE0LDExIDIyLDEzLjAxNDcxODYgMjIsMTUuNSBDMjIsMTcuOTg1MjgxNCAxOS45ODUyODE0LDIwIDE3LjUsMjAgTDguODI5Mjk0MjksMjAgWiBNNiwxOCBDNS40NDc3MTUyNSwxOCA1LDE4LjQ0NzcxNTMgNSwxOSBDNSwxOS41NTIyODQ3IDUuNDQ3NzE1MjUsMjAgNiwyMCBDNi41NTIyODQ3NSwyMCA3LDE5LjU1MjI4NDcgNywxOSBDNywxOC40NDc3MTUzIDYuNTUyMjg0NzUsMTggNiwxOCBaIE0xOCwyIEMxOS42NTY4NTQyLDIgMjEsMy4zNDMxNDU3NSAyMSw1IEMyMSw2LjY1Njg1NDI1IDE5LjY1Njg1NDIsOCAxOCw4IEMxNi4zNDMxNDU4LDggMTUsNi42NTY4NTQyNSAxNSw1IEMxNSwzLjM0MzE0NTc1IDE2LjM0MzE0NTgsMiAxOCwyIFogTTE4LDQgQzE3LjQ0NzcxNTMsNCAxNyw0LjQ0NzcxNTI1IDE3LDUgQzE3LDUuNTUyMjg0NzUgMTcuNDQ3NzE1Myw2IDE4LDYgQzE4LjU1MjI4NDcsNiAxOSw1LjU1MjI4NDc1IDE5LDUgQzE5LDQuNDQ3NzE1MjUgMTguNTUyMjg0Nyw0IDE4LDQgWiIvPgo8L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/assets/select-route.svg":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/assets/select-route.svg ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCwxIEwxNCwxIEw4LDEgWiBNMTkuMTg4LDE5LjQ3MiBMMTYsMjIgTDEyLjUsMTcuNSBMOS41LDIxIEw3LDcgTDIwLDEzLjUgTDE1LjUsMTUgTDE5LjE4OCwxOS40NzIgWiBNMTksNCBMMTksMSBMMTYsMSBNNiwxIEwzLDEgTDMsNCBNMywxNCBMMywxNyBMNiwxNyBNMTksNiBMMTksMTAgTDE5LDYgWiBNMywxMiBMMyw2IEwzLDEyIFoiLz4KPC9zdmc+"

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/assets/trash.svg":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/assets/trash.svg ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3J1cG9fMjQiIGRhdGEtbmFtZT0iR3J1cG8gMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MCAtMzc0KSI+CiAgICA8ZyBpZD0iR3J1cG9fMTkiIGRhdGEtbmFtZT0iR3J1cG8gMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjAgMzc0KSI+CiAgICAgIDxyZWN0IGlkPSJSZWN0w6FuZ3Vsb18xMyIgZGF0YS1uYW1lPSJSZWN0w6FuZ3VsbyAxMyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8cGF0aCBpZD0iZGVsZXRlXzI0ZHBfRThFQUVEX0ZJTEwwX3dnaHQyMDBfR1JBRDBfb3BzejI0IiBkPSJNMjAzLjI2MS03NzEuMTA4YTEuOTQyLDEuOTQyLDAsMCwxLTEuNDI2LS41ODksMS45NDMsMS45NDMsMCwwLDEtLjU4OS0xLjQyNnYtMTUuNDQySDIwMHYtMS4yNDdoNC45ODh2LS45NTloNy40ODF2Ljk1OWg0Ljk4N3YxLjI0N2gtMS4yNDd2MTUuNDQyYTEuOTUxLDEuOTUxLDAsMCwxLS41NzcsMS40MzgsMS45NTEsMS45NTEsMCwwLDEtMS40MzguNTc3Wm0xMS43LTE3LjQ1NkgyMDIuNDk0djE1LjQ0MmEuNzQ4Ljc0OCwwLDAsMCwuMjE2LjU1Mi43NDcuNzQ3LDAsMCwwLC41NTIuMjE2SDIxNC4yYS43MzMuNzMzLDAsMCwwLC41MjgtLjI0LjczMy43MzMsMCwwLDAsLjI0LS41MjhabS04Ljk2OCwxMy43MTZoMS4yNDdWLTc4Ni4wN2gtMS4yNDdabTQuMjIsMGgxLjI0N1YtNzg2LjA3aC0xLjI0N1ptLTcuNzIxLTEzLjcxNnYwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1Ni43MjggMTE2Ni45MzkpIiBmaWxsPSJyZWQiLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/dots-3-vertical.svg":
/*!****************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/dots-3-vertical.svg ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNCA1QzE0IDYuMTA0NTcgMTMuMTA0NiA3IDEyIDdDMTAuODk1NCA3IDEwIDYuMTA0NTcgMTAgNUMxMCAzLjg5NTQzIDEwLjg5NTQgMyAxMiAzQzEzLjEwNDYgMyAxNCAzLjg5NTQzIDE0IDVaIiBmaWxsPSIjMDAwMDAwIi8+DQo8cGF0aCBkPSJNMTQgMTJDMTQgMTMuMTA0NiAxMy4xMDQ2IDE0IDEyIDE0QzEwLjg5NTQgMTQgMTAgMTMuMTA0NiAxMCAxMkMxMCAxMC44OTU0IDEwLjg5NTQgMTAgMTIgMTBDMTMuMTA0NiAxMCAxNCAxMC44OTU0IDE0IDEyWiIgZmlsbD0iIzAwMDAwMCIvPg0KPHBhdGggZD0iTTEyIDIxQzEzLjEwNDYgMjEgMTQgMjAuMTA0NiAxNCAxOUMxNCAxNy44OTU0IDEzLjEwNDYgMTcgMTIgMTdDMTAuODk1NCAxNyAxMCAxNy44OTU0IDEwIDE5QzEwIDIwLjEwNDYgMTAuODk1NCAyMSAxMiAyMVoiIGZpbGw9IiMwMDAwMDAiLz4NCjwvc3ZnPg=="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_1.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_1.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj4xPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_10.svg":
/*!**********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_10.svg ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj4xMDwvdGV4dD48cG9seWdvbiBwb2ludHM9IjQwLDkwIDYwLDkwIDUwLDExMCIgZmlsbD0iYmxhY2siIC8+PC9zdmc+"

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_11.svg":
/*!**********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_11.svg ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj4xMTwvdGV4dD48cG9seWdvbiBwb2ludHM9IjQwLDkwIDYwLDkwIDUwLDExMCIgZmlsbD0iYmxhY2siIC8+PC9zdmc+"

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_2.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_2.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj4yPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_3.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_3.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj4zPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_4.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_4.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj40PC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_5.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_5.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj41PC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_6.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_6.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj42PC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_7.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_7.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj43PC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_8.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_8.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj44PC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_9.svg":
/*!*********************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/AutomaticRoute/assets/map-index-markers/marker_black_9.svg ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9IiM4NDgyREMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz48dGV4dCB4PSI1MCIgeT0iNTciIGZvbnQtc2l6ZT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj45PC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNDAsOTAgNjAsOTAgNTAsMTEwIiBmaWxsPSJibGFjayIgLz48L3N2Zz4="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/file.svg":
/*!**************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/file.svg ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNOS40IDBIMFYxNkgxM1YzLjZMOS40IDBaTTEyIDE1SDFWMUg4VjVIMTJWMTVaTTEyIDRIOVYxSDkuMzFMMTIgMy42OVY0WiIgZmlsbD0iIzA3NkZFNSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_GPX.svg":
/*!****************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_GPX.svg ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjE5LjM4NSIKICAgaGVpZ2h0PSIyMiIKICAgdmlld0JveD0iMCAwIDE5LjM4NSAyMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMSIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMSIgLz4KICA8ZwogICAgIGlkPSJHcnVwb180IgogICAgIGRhdGEtbmFtZT0iR3J1cG8gNCIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODkuNjE1LC0xNzE2KSI+CiAgICA8ZwogICAgICAgaWQ9ImltYWdlLTMiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OCwxNzE1KSIKICAgICAgIG9wYWNpdHk9IjAuOCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJUcmF6YWRvXzEiCiAgICAgICAgIGRhdGEtbmFtZT0iVHJhemFkbyAxIgogICAgICAgICBkPSJNIDIxLDYuNzA5IFYgMjMgSCAzIHYgLTQgaCAxIHYgMyBIIDIwIFYgOCBIIDE0IFYgMiBIIDQgdiA4IEggMyBWIDEgSCAxNS4yOSBaIE0gMjAsNi44IDE1LjIsMiBIIDE1IHYgNSBoIDUgeiIKICAgICAgICAgZmlsbD0iIzA3NmZlNSIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iR3J1cG9fMyIKICAgICAgIGRhdGEtbmFtZT0iR3J1cG8gMyIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjM4NSwyMC44ODIpIj4KICAgICAgPHJlY3QKICAgICAgICAgaWQ9IlJlY3TDoW5ndWxvXzMiCiAgICAgICAgIGRhdGEtbmFtZT0iUmVjdMOhbmd1bG8gMyIKICAgICAgICAgd2lkdGg9IjE0LjM4NSIKICAgICAgICAgaGVpZ2h0PSI1LjIzNjAwMDEiCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkwLDE3MDYpIgogICAgICAgICBmaWxsPSJub25lIgogICAgICAgICB4PSIwIgogICAgICAgICB5PSIwIiAvPgogICAgPC9nPgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zaXplOjcuNDg2NzZweDt0ZXh0LWFsaWduOnN0YXJ0O3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzA3NzRlNDtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC42MjM4OTYiCiAgICAgICB4PSI4Mi42OTA5MSIKICAgICAgIHk9IjE4NjguNzg0NyIKICAgICAgIGlkPSJ0ZXh0MSIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMS4wNzg5ODA3LDAuOTI2ODAwNjIpIj48dHNwYW4KICAgICAgICAgaWQ9InRzcGFuMSIKICAgICAgICAgeD0iODIuNjkwOTEiCiAgICAgICAgIHk9IjE4NjguNzg0NyIKICAgICAgICAgc3R5bGU9ImZpbGw6IzA3NzRlNDtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC42MjM4OTYiPkdQWDwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_KML.svg":
/*!****************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_KML.svg ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjI3Ljk2NDAwMSIKICAgaGVpZ2h0PSIyOCIKICAgdmlld0JveD0iMCAwIDI3Ljk2NCAyOCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMSIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMSIgLz4KICA8ZwogICAgIGlkPSJHcnVwb182IgogICAgIGRhdGEtbmFtZT0iR3J1cG8gNiIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE5LC0xNzEzKSI+CiAgICA8cGF0aAogICAgICAgaWQ9ImltYWdlLTIiCiAgICAgICBkPSJNIDI3LDEzLjAxOCBWIDkuNyBMIDE5LjMsMiBIIDUgViAxMy4wMTggSCAyLjAxOCBWIDI3Ljk4MiBIIDUgViAzMCBoIDIyIHYgLTIuMDE4IGggMi45ODIgViAxMy4wMTggWiBNIDE5LDMgMjYsMTAgSCAxOSBaIE0gNiwzIGggMTIgdiA4IGggOCB2IDIuMDE4IEggNiBaIE0gMjYsMjkgSCA2IHYgLTEuMDE4IGggMjAgeiBtIDMuMDE4LC0xLjk4MiBIIDIuOTgyIFYgMTMuOTgyIGggMjYuMDM2IHoiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYuOTgyLDE3MTEpIgogICAgICAgZmlsbD0iIzA3NmZlNSIKICAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz4KICAgIDxnCiAgICAgICBpZD0iR3J1cG9fMSIKICAgICAgIGRhdGEtbmFtZT0iR3J1cG8gMSIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjMxOCwtMTkpIj4KICAgICAgPHJlY3QKICAgICAgICAgaWQ9IlJlY3TDoW5ndWxvXzEiCiAgICAgICAgIGRhdGEtbmFtZT0iUmVjdMOhbmd1bG8gMSIKICAgICAgICAgd2lkdGg9IjIwLjYwMSIKICAgICAgICAgaGVpZ2h0PSI2LjczMTk5OTkiCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNiwxNzQ3KSIKICAgICAgICAgZmlsbD0ibm9uZSIKICAgICAgICAgeD0iMCIKICAgICAgICAgeT0iMCIgLz4KICAgIDwvZz4KICA8L2c+CiAgPHRleHQKICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgIHN0eWxlPSJmb250LXNpemU6OS44NTExNXB4O3RleHQtYWxpZ246c3RhcnQ7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDc3NGU0O3N0cm9rZS13aWR0aDowLjgyMDkyOSIKICAgICB4PSIyLjQ2OTQxMDIiCiAgICAgeT0iMjMuNTUzNTUxIgogICAgIGlkPSJ0ZXh0MSIKICAgICB0cmFuc2Zvcm09InNjYWxlKDEuMDgzOTUxNSwwLjkyMjU1MDUpIj48dHNwYW4KICAgICAgIGlkPSJ0c3BhbjEiCiAgICAgICB4PSIyLjQ2OTQxMDIiCiAgICAgICB5PSIyMy41NTM1NTEiCiAgICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuODIwOTI5Ij5LTUw8L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg=="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_SHP.svg":
/*!****************************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/components/ManualRoute/assets/ic_SHP.svg ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjE5LjUyIgogICBoZWlnaHQ9IjIyIgogICB2aWV3Qm94PSIwIDAgMTkuNTIgMjIiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzEiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczEiIC8+CiAgPGcKICAgICBpZD0iR3J1cG9fNSIKICAgICBkYXRhLW5hbWU9IkdydXBvIDUiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1OS40OCwtMTcxNikiPgogICAgPGcKICAgICAgIGlkPSJpbWFnZS0zIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU4LDE3MTUpIgogICAgICAgb3BhY2l0eT0iMC44Ij4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9IlRyYXphZG9fMSIKICAgICAgICAgZGF0YS1uYW1lPSJUcmF6YWRvIDEiCiAgICAgICAgIGQ9Ik0gMjEsNi43MDkgViAyMyBIIDMgdiAtNCBoIDEgdiAzIEggMjAgViA4IEggMTQgViAyIEggNCB2IDggSCAzIFYgMSBIIDE1LjI5IFogTSAyMCw2LjggMTUuMiwyIEggMTUgdiA1IGggNSB6IgogICAgICAgICBmaWxsPSIjMDc2ZmU1IiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIGlkPSJHcnVwb18yIgogICAgICAgZGF0YS1uYW1lPSJHcnVwbyAyIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40OCwtMTQpIj4KICAgICAgPHJlY3QKICAgICAgICAgaWQ9IlJlY3TDoW5ndWxvXzIiCiAgICAgICAgIGRhdGEtbmFtZT0iUmVjdMOhbmd1bG8gMiIKICAgICAgICAgd2lkdGg9IjEzLjA0IgogICAgICAgICBoZWlnaHQ9IjQuOTk4MDAwMSIKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU4LDE3NDEpIgogICAgICAgICBmaWxsPSJub25lIgogICAgICAgICB4PSIwIgogICAgICAgICB5PSIwIiAvPgogICAgPC9nPgogIDwvZz4KICA8dGV4dAogICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgc3R5bGU9ImZvbnQtc2l6ZTo2Ljk2OTMycHg7dGV4dC1hbGlnbjpzdGFydDt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LWFuY2hvcjpzdGFydDtmaWxsOiMzNDg2ZTU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuNTgwNzc2IgogICAgIHg9Ii0wLjI5ODgwMDg2IgogICAgIHk9IjE2LjQ2ODciCiAgICAgaWQ9InRleHQxIgogICAgIHRyYW5zZm9ybT0ic2NhbGUoMS4wMzY1ODI2LDAuOTY0NzA4NDYpIj48dHNwYW4KICAgICAgIGlkPSJ0c3BhbjEiCiAgICAgICB4PSItMC4yOTg4MDA4NiIKICAgICAgIHk9IjE2LjQ2ODciCiAgICAgICBzdHlsZT0iZmlsbDojMzQ4NmU1O2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjU4MDc3NiI+U0hQPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = React.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/with-selector.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-sync-external-store/with-selector.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-sync-external-store-with-selector.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js");
}


/***/ }),

/***/ "@esri/calcite-components-react":
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__esri_calcite_components_react__;

/***/ }),

/***/ "@arcgis/core/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__;

/***/ }),

/***/ "esri/geometry/Point":
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ }),

/***/ "@arcgis/core/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__;

/***/ }),

/***/ "@arcgis/core/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/layers/GroupLayer":
/*!*****************************************!*\
  !*** external "esri/layers/GroupLayer" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GroupLayer__;

/***/ }),

/***/ "esri/layers/support/LabelClass":
/*!*************************************************!*\
  !*** external "esri/layers/support/LabelClass" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_support_LabelClass__;

/***/ }),

/***/ "@arcgis/core/request.js":
/*!**********************************!*\
  !*** external "esri/request.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_request_js__;

/***/ }),

/***/ "esri/rest/locator":
/*!************************************!*\
  !*** external "esri/rest/locator" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_locator__;

/***/ }),

/***/ "@arcgis/core/symbols/TextSymbol.js":
/*!*********************************************!*\
  !*** external "esri/symbols/TextSymbol.js" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_TextSymbol_js__;

/***/ }),

/***/ "@arcgis/core/widgets/Search":
/*!**************************************!*\
  !*** external "esri/widgets/Search" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search__;

/***/ }),

/***/ "@arcgis/core/widgets/Search/LayerSearchSource.js":
/*!***********************************************************!*\
  !*** external "esri/widgets/Search/LayerSearchSource.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search_LayerSearchSource_js__;

/***/ }),

/***/ "@arcgis/core/widgets/Search/LocatorSearchSource.js":
/*!*************************************************************!*\
  !*** external "esri/widgets/Search/LocatorSearchSource.js" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Search_LocatorSearchSource_js__;

/***/ }),

/***/ "@arcgis/core/widgets/Sketch/SketchViewModel":
/*!******************************************************!*\
  !*** external "esri/widgets/Sketch/SketchViewModel" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Sketch_SketchViewModel__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!**************************************!*\
  !*** external "jimu-core/react-dom" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

/***/ }),

/***/ "./node_modules/react-redux/dist/react-redux.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/dist/react-redux.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* binding */ Provider_default),
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   batch: () => (/* binding */ batch),
/* harmony export */   connect: () => (/* binding */ connect_default),
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch),
/* harmony export */   useSelector: () => (/* binding */ useSelector),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var use_sync_external_store_with_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/with-selector.js */ "./node_modules/use-sync-external-store/with-selector.js");
// src/index.ts



// src/utils/react.ts

var React = (
  // prettier-ignore
  // @ts-ignore
  "default" in react__WEBPACK_IMPORTED_MODULE_0__ ? react__WEBPACK_IMPORTED_MODULE_0__["default"] : react__WEBPACK_IMPORTED_MODULE_0__
);

// src/components/Context.ts
var ContextKey = Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!React.createContext)
    return {};
  const contextMap = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
  let realContext = contextMap.get(React.createContext);
  if (!realContext) {
    realContext = React.createContext(
      null
    );
    if (true) {
      realContext.displayName = "ReactRedux";
    }
    contextMap.set(React.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();

// src/utils/useSyncExternalStore.ts
var notInitialized = () => {
  throw new Error("uSES not initialized!");
};

// src/hooks/useReduxContext.ts
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = React.useContext(context);
    if ( true && !contextValue) {
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    }
    return contextValue;
  };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();

// src/hooks/useSelector.ts
var useSyncExternalStoreWithSelector = notInitialized;
var initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
    const { equalityFn = refEquality, devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }
      if (typeof selector !== "function") {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }
      if (typeof equalityFn !== "function") {
        throw new Error(
          `You must pass a function as an equality function to useSelector`
        );
      }
    }
    const {
      store,
      subscription,
      getServerState,
      stabilityCheck,
      identityFunctionCheck
    } = useReduxContext2();
    const firstRun = React.useRef(true);
    const wrappedSelector = React.useCallback(
      {
        [selector.name](state) {
          const selected = selector(state);
          if (true) {
            const {
              identityFunctionCheck: finalIdentityFunctionCheck,
              stabilityCheck: finalStabilityCheck
            } = {
              stabilityCheck,
              identityFunctionCheck,
              ...devModeChecks
            };
            if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
              const toCompare = selector(state);
              if (!equalityFn(selected, toCompare)) {
                let stack = void 0;
                try {
                  throw new Error();
                } catch (e) {
                  ;
                  ({ stack } = e);
                }
                console.warn(
                  "Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization",
                  {
                    state,
                    selected,
                    selected2: toCompare,
                    stack
                  }
                );
              }
            }
            if (finalIdentityFunctionCheck === "always" || finalIdentityFunctionCheck === "once" && firstRun.current) {
              if (selected === state) {
                let stack = void 0;
                try {
                  throw new Error();
                } catch (e) {
                  ;
                  ({ stack } = e);
                }
                console.warn(
                  "Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.",
                  { stack }
                );
              }
            }
            if (firstRun.current)
              firstRun.current = false;
          }
          return selected;
        }
      }[selector.name],
      [selector, stabilityCheck, devModeChecks.stabilityCheck]
    );
    const selectedState = useSyncExternalStoreWithSelector(
      subscription.addNestedSub,
      store.getState,
      getServerState || store.getState,
      wrappedSelector,
      equalityFn
    );
    React.useDebugValue(selectedState);
    return selectedState;
  };
  Object.assign(useSelector2, {
    withTypes: () => useSelector2
  });
  return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();

// src/utils/react-is.ts
var REACT_ELEMENT_TYPE = Symbol.for("react.element");
var REACT_PORTAL_TYPE = Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
var REACT_CONTEXT_TYPE = Symbol.for("react.context");
var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = Symbol.for("react.memo");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function isValidElementType(type) {
  if (typeof type === "string" || typeof type === "function") {
    return true;
  }
  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE) {
    return true;
  }
  if (typeof type === "object" && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) {
      return true;
    }
  }
  return false;
}
function typeOf(object) {
  if (typeof object === "object" && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE: {
        const type = object.type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;
          default: {
            const $$typeofType = type && type.$$typeof;
            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
          }
        }
      }
      case REACT_PORTAL_TYPE: {
        return $$typeof;
      }
    }
  }
  return void 0;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}

// src/utils/warning.ts
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/connect/verifySubselectors.ts
function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
    if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
      warning(
        `The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`
      );
    }
  }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, "mapStateToProps");
  verify(mapDispatchToProps, "mapDispatchToProps");
  verify(mergeProps, "mergeProps");
}

// src/connect/selectorFactory.ts
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(
      nextState,
      state,
      nextOwnProps,
      ownProps
    );
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, {
  initMapStateToProps,
  initMapDispatchToProps,
  initMergeProps,
  ...options
}) {
  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);
  if (true) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
  }
  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

// src/utils/bindActionCreators.ts
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }
  return boundActionCreators;
}

// src/utils/isPlainObject.ts
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return true;
  let baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}

// src/utils/verifyPlainObject.ts
function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(
      `${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`
    );
  }
}

// src/connect/wrapMapToProps.ts
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, { displayName }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      if (true)
        verifyPlainObject(props, displayName, methodName);
      return props;
    };
    return proxy;
  };
}

// src/connect/invalidArgFactory.ts
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(
      `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`
    );
  };
}

// src/connect/mapDispatchToProps.ts
function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant(
    (dispatch) => (
      // @ts-ignore
      bindActionCreators(mapDispatchToProps, dispatch)
    )
  ) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({
    dispatch
  })) : typeof mapDispatchToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps")
  ) : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}

// src/connect/mapStateToProps.ts
function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps, "mapStateToProps")
  ) : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}

// src/connect/mergeProps.ts
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true)
          verifyPlainObject(mergedProps, displayName, "mergeProps");
      }
      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}

// src/utils/batch.ts
function defaultNoopBatch(callback) {
  callback();
}

// src/utils/Subscription.ts
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}

// src/utils/useIsomorphicLayoutEffect.ts
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var useIsomorphicLayoutEffect = canUseDOM ? React.useLayoutEffect : React.useEffect;

// src/utils/shallowEqual.ts
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// src/utils/hoistStatics.ts
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {
  [ForwardRef]: FORWARD_REF_STATICS,
  [Memo]: MEMO_STATICS
};
function getStatics(component) {
  if (isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      const inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent);
      }
    }
    let keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    const targetStatics = getStatics(targetComponent);
    const sourceStatics = getStatics(sourceComponent);
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}

// src/components/connect.tsx
var useSyncExternalStore = notInitialized;
var initializeConnect = (fn) => {
  useSyncExternalStore = fn;
};
var NO_SUBSCRIPTION_ARRAY = [null, null];
var stringifyComponent = (Comp) => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
  if (!shouldHandleStateChanges)
    return () => {
    };
  let didUnsubscribe = false;
  let lastThrownError = null;
  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      return;
    }
    const latestStoreState = store.getState();
    let newChildProps, error;
    try {
      newChildProps = childPropsSelector(
        latestStoreState,
        lastWrapperProps.current
      );
    } catch (e) {
      error = e;
      lastThrownError = e;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      additionalSubscribeListener();
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
function strictEqual(a, b) {
  return a === b;
}
var hasWarnedAboutDeprecatedPureOption = false;
function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  if (true) {
    if (pure !== void 0 && !hasWarnedAboutDeprecatedPureOption) {
      hasWarnedAboutDeprecatedPureOption = true;
      warning(
        'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
      );
    }
  }
  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);
  const wrapWithConnect = (WrappedComponent) => {
    if (true) {
      const isValid = /* @__PURE__ */ isValidElementType(WrappedComponent);
      if (!isValid)
        throw new Error(
          `You must pass a component to the function returned by connect. Instead received ${stringifyComponent(
            WrappedComponent
          )}`
        );
    }
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };
    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = React.useMemo(() => {
        const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]);
      const ContextToUse = React.useMemo(() => {
        let ResultContext = Context;
        if (propsContext?.Consumer) {
          if (true) {
            const isValid = /* @__PURE__ */ isContextConsumer(
              // @ts-ignore
              /* @__PURE__ */ React.createElement(propsContext.Consumer, null)
            );
            if (!isValid) {
              throw new Error(
                "You must pass a valid React context consumer as `props.context`"
              );
            }
            ResultContext = propsContext;
          }
        }
        return ResultContext;
      }, [propsContext, Context]);
      const contextValue = React.useContext(ContextToUse);
      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(
          `Could not find "store" in the context of "${displayName}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${displayName} in connect options.`
        );
      }
      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = React.useMemo(() => {
        return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = React.useMemo(() => {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        const subscription2 = createSubscription(
          store,
          didStoreComeFromProps ? void 0 : contextValue.subscription
        );
        const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]);
      const overriddenContextValue = React.useMemo(() => {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return {
          ...contextValue,
          subscription
        };
      }, [didStoreComeFromProps, contextValue, subscription]);
      const lastChildProps = React.useRef();
      const lastWrapperProps = React.useRef(wrapperProps);
      const childPropsFromStoreUpdate = React.useRef();
      const renderIsScheduled = React.useRef(false);
      const isProcessingDispatch = React.useRef(false);
      const isMounted = React.useRef(false);
      const latestSubscriptionCallbackError = React.useRef();
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = React.useMemo(() => {
        const selector = () => {
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          }
          return childPropsSelector(store.getState(), wrapperProps);
        };
        return selector;
      }, [store, wrapperProps]);
      const subscribeForReact = React.useMemo(() => {
        const subscribe = (reactListener) => {
          if (!subscription) {
            return () => {
            };
          }
          return subscribeUpdates(
            shouldHandleStateChanges,
            store,
            subscription,
            // @ts-ignore
            childPropsSelector,
            lastWrapperProps,
            lastChildProps,
            renderIsScheduled,
            isMounted,
            childPropsFromStoreUpdate,
            notifyNestedSubs,
            reactListener
          );
        };
        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        wrapperProps,
        childPropsFromStoreUpdate,
        notifyNestedSubs
      ]);
      let actualChildProps;
      try {
        actualChildProps = useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          subscribeForReact,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          actualChildPropsSelector,
          getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector
        );
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
        }
        throw err;
      }
      useIsomorphicLayoutEffect(() => {
        latestSubscriptionCallbackError.current = void 0;
        childPropsFromStoreUpdate.current = void 0;
        lastChildProps.current = actualChildProps;
      });
      const renderedWrappedComponent = React.useMemo(() => {
        return (
          // @ts-ignore
          /* @__PURE__ */ React.createElement(
            WrappedComponent,
            {
              ...actualChildProps,
              ref: reactReduxForwardedRef
            }
          )
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      const renderedChild = React.useMemo(() => {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    const _Connect = React.memo(ConnectFunction);
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      const _forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
        return /* @__PURE__ */ React.createElement(Connect, { ...props, reactReduxForwardedRef: ref });
      });
      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
    }
    return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
  };
  return wrapWithConnect;
}
var connect_default = connect;

// src/components/Provider.tsx
function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = "once",
  identityFunctionCheck = "once"
}) {
  const contextValue = React.useMemo(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0,
      stabilityCheck,
      identityFunctionCheck
    };
  }, [store, serverState, stabilityCheck, identityFunctionCheck]);
  const previousState = React.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ React.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;

// src/hooks/useStore.ts
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
    // @ts-ignore
    createReduxContextHook(context)
  );
  const useStore2 = () => {
    const { store } = useReduxContext2();
    return store;
  };
  Object.assign(useStore2, {
    withTypes: () => useStore2
  });
  return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();

// src/hooks/useDispatch.ts
function createDispatchHook(context = ReactReduxContext) {
  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  const useDispatch2 = () => {
    const store = useStore2();
    return store.dispatch;
  };
  Object.assign(useDispatch2, {
    withTypes: () => useDispatch2
  });
  return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();

// src/exports.ts
var batch = defaultNoopBatch;

// src/index.ts
initializeUseSelector(use_sync_external_store_with_selector_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector);
initializeConnect(react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore);

//# sourceMappingURL=react-redux.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @esri/calcite-components-react */ "@esri/calcite-components-react");
/* harmony import */ var _context_RouteEditionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/RouteEditionContext */ "./your-extensions/widgets/route-edition/src/runtime/context/RouteEditionContext.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./your-extensions/widgets/route-edition/src/runtime/style.css");
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ */ "./your-extensions/widgets/route-edition/src/runtime/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./your-extensions/widgets/route-edition/src/runtime/types/index.ts");
/* harmony import */ var _components_MapComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/MapComponent */ "./your-extensions/widgets/route-edition/src/runtime/components/MapComponent.tsx");
/* harmony import */ var _components_Notifications_AlertsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Notifications/AlertsContainer */ "./your-extensions/widgets/route-edition/src/runtime/components/Notifications/AlertsContainer.tsx");









const appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
const Widget = (props) => {
    const { config: SettingConfig, portalUrl, id: widgetId, } = props;
    const mapWidgetId = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => props.useMapWidgetIds[0], []);
    const [selectedApp, setSelectedApp] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_types__WEBPACK_IMPORTED_MODULE_6__.SelectedAppEnum.AppSelector);
    const backToList = () => {
        return new Promise((resolve) => {
            setSelectedApp(_types__WEBPACK_IMPORTED_MODULE_6__.SelectedAppEnum.AppSelector);
            setTimeout(() => {
                resolve();
            });
        });
    };
    const getSelectedApp = () => {
        switch (selectedApp) {
            case _types__WEBPACK_IMPORTED_MODULE_6__.SelectedAppEnum.AppSelector:
                return;
            case _types__WEBPACK_IMPORTED_MODULE_6__.SelectedAppEnum.RouteSelector:
                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components___WEBPACK_IMPORTED_MODULE_4__.RouteSelectorComponent, { onBackToList: backToList }));
            case _types__WEBPACK_IMPORTED_MODULE_6__.SelectedAppEnum.NewInterestPoint:
                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components___WEBPACK_IMPORTED_MODULE_4__.InterestComponent, { onBackToList: backToList }));
            case _types__WEBPACK_IMPORTED_MODULE_6__.SelectedAppEnum.NewManualRoute:
                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components___WEBPACK_IMPORTED_MODULE_4__.ManualRouteComponent, { onBackToList: backToList }));
            case _types__WEBPACK_IMPORTED_MODULE_6__.SelectedAppEnum.AutomaticRoute:
                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components___WEBPACK_IMPORTED_MODULE_4__.AutomaticRouteComponent, { onBackToList: backToList }));
        }
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_context_RouteEditionContext__WEBPACK_IMPORTED_MODULE_2__.RouteEditionContext.Provider, { value: {
            mapWidgetId, SettingConfig, appConfig, portalUrl,
            widgetId,
        } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_MapComponent__WEBPACK_IMPORTED_MODULE_7__.MapComponent, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__.CalciteShell, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_esri_calcite_components_react__WEBPACK_IMPORTED_MODULE_1__.CalciteFlow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components___WEBPACK_IMPORTED_MODULE_4__.AppSelector, { setSelectedApp: setSelectedApp }),
                    getSelectedApp()))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_Notifications_AlertsContainer__WEBPACK_IMPORTED_MODULE_8__.AlertsContainer, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDakI7QUFDM0csOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0tBQXNLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSwyQ0FBMkMsZ0NBQWdDLDZCQUE2QixLQUFLLHVCQUF1Qiw0QkFBNEIsb0JBQW9CLEtBQUssMEJBQTBCLGdDQUFnQyxLQUFLLGtCQUFrQix5QkFBeUIsS0FBSywyQkFBMkIseUJBQXlCLGtCQUFrQixtQkFBbUIsNkJBQTZCLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0Isa0JBQWtCLHNCQUFzQixLQUFLLGtDQUFrQyxnQ0FBZ0MsS0FBSyxrQ0FBa0Msa0JBQWtCLHlCQUF5QixtQkFBbUIsZ0JBQWdCLGtDQUFrQyxlQUFlLGdCQUFnQix5Q0FBeUMsMENBQTBDLGlDQUFpQyxLQUFLLGdCQUFnQixnQ0FBZ0MsS0FBSyw2QkFBNkIsc0JBQXNCLEtBQUssK0JBQStCLG9DQUFvQyxtQkFBbUIsaUJBQWlCLGdCQUFnQixvQkFBb0IsS0FBSyxHQUFHLGlCQUFpQixxREFBcUQsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQ3A3RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFdkM7QUFDNEg7QUFDakI7QUFDM0csOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRKQUE0SixLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdB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QUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RCxJQUFJO0FBQ0o7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLFFBQVEsYUFBYSwrQ0FBK0MsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZLE1BQU0sTUFBTSxxQ0FBcUMsNkJBQTZCO0FBQ3pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxrREFBa0Qsa0NBQWtDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9BdXRvbWF0aWNSb3V0ZS9hdXRvbWF0aWNSb3V0ZVN0eWxlLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL01hbnVhbFJvdXRlL3BvcHBlci5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvc3R5bGUuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL0F1dG9tYXRpY1JvdXRlL2F1dG9tYXRpY1JvdXRlU3R5bGUuY3NzPzI4Y2YiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9wb3BwZXIuY3NzP2UwN2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9zdHlsZS5jc3M/Njk2YyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9zdHlsZS5jc3M/MjQ0ZCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9lbXB0eS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci90cmFzaC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vZW1wdHkudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci90cmFzaC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvYXNzZXRzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXBwU2VsZWN0b3JDb21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvQXV0b21hdGljUm91dGVDb21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvV2F5cG9pbnRSb3cudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvYXNzZXRzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvY29uc3RhbnRzL2hhcmRjb2RlZFdheXBvaW50LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvY29uc3RhbnRzL3VybENvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL0F1dG9tYXRpY1JvdXRlL3JlZHVjZXJzL1JlZHVjZXJXYXlwb2ludExpc3QudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9BdXRvbWF0aWNSb3V0ZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL0ludGVyZXN0UG9pbnQvSW50ZXJlc3RQb2ludENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL01hbnVhbFJvdXRlL0VkaXRMYXllcnNGb3JtLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL01hbnVhbFJvdXRlL0xheWVyTGlzdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9NYW51YWxSb3V0ZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9VcGxvYWRGaWxlRm9ybS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9hc3NldHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL01hbnVhbFJvdXRlL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvTWFudWFsUm91dGUvdHlwZXMvdXBsb2FkRmlsZVR5cGVzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvTWFwQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvQWxlcnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9BbGVydHNDb250YWluZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9jb25zdGFudHMvc3RhdGVJZC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL1JvdXRlU2VsZWN0b3IvUm91dGVTZWxlY3RvckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb250ZXh0L01hcENvbnRleHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29udGV4dC9Sb3V0ZUVkaXRpb25Db250ZXh0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbnRleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvdHlwZXMvbWFwVHlwZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvdHlwZXMvc2VsZWN0ZWRBcHBUeXBlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2hhcmVkLWNvZGUvR2VuZXJpY01vZGFsLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2hhcmVkLWNvZGUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvYXNzZXRzL2F1dG9tYXRpYy1yb3V0ZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvYXNzZXRzL25ldy1pbnRlcmVzdC1wb2ludC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvYXNzZXRzL25ldy1yb3V0ZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvYXNzZXRzL3NlbGVjdC1yb3V0ZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvYXNzZXRzL3RyYXNoLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL0F1dG9tYXRpY1JvdXRlL2Fzc2V0cy9kb3RzLTMtdmVydGljYWwuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvYXNzZXRzL21hcC1pbmRleC1tYXJrZXJzL21hcmtlcl9ibGFja18xLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL0F1dG9tYXRpY1JvdXRlL2Fzc2V0cy9tYXAtaW5kZXgtbWFya2Vycy9tYXJrZXJfYmxhY2tfMTAuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvYXNzZXRzL21hcC1pbmRleC1tYXJrZXJzL21hcmtlcl9ibGFja18xMS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9BdXRvbWF0aWNSb3V0ZS9hc3NldHMvbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzIuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvYXNzZXRzL21hcC1pbmRleC1tYXJrZXJzL21hcmtlcl9ibGFja18zLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL0F1dG9tYXRpY1JvdXRlL2Fzc2V0cy9tYXAtaW5kZXgtbWFya2Vycy9tYXJrZXJfYmxhY2tfNC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9BdXRvbWF0aWNSb3V0ZS9hc3NldHMvbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzUuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvYXNzZXRzL21hcC1pbmRleC1tYXJrZXJzL21hcmtlcl9ibGFja182LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL0F1dG9tYXRpY1JvdXRlL2Fzc2V0cy9tYXAtaW5kZXgtbWFya2Vycy9tYXJrZXJfYmxhY2tfNy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9BdXRvbWF0aWNSb3V0ZS9hc3NldHMvbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzguc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQXV0b21hdGljUm91dGUvYXNzZXRzL21hcC1pbmRleC1tYXJrZXJzL21hcmtlcl9ibGFja185LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL01hbnVhbFJvdXRlL2Fzc2V0cy9maWxlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL01hbnVhbFJvdXRlL2Fzc2V0cy9pY19HUFguc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvTWFudWFsUm91dGUvYXNzZXRzL2ljX0tNTC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9hc3NldHMvaWNfU0hQLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyb3VwTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL3N1cHBvcnQvTGFiZWxDbGFzc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXF1ZXN0LmpzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3Jlc3QvbG9jYXRvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zeW1ib2xzL1RleHRTeW1ib2wuanNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2gvTGF5ZXJTZWFyY2hTb3VyY2UuanNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2gvTG9jYXRvclNlYXJjaFNvdXJjZS5qc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NrZXRjaC9Ta2V0Y2hWaWV3TW9kZWxcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0LWRvbVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS10aGVtZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9iYXNpYy9jb2xvci1waWNrZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2Rpc3QvcmVhY3QtcmVkdXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hdXRvbWF0aWMtcm91dGUgLmF1dG9tYXRpYy1yb3V0ZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xufVxuLmF1dG9tYXRpYy1yb3V0ZSAud2F5cG9pbnQtdGFibGUge1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gIHJvdy1nYXA6IDEwcHg7XG59XG4uYXV0b21hdGljLXJvdXRlIC53YXlwb2ludC10YWJsZS1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QwRDBEMDtcbn1cbi5hdXRvbWF0aWMtcm91dGUgLmNlbnRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF1dG9tYXRpYy1yb3V0ZSAuc2VhcmNoLW1hcmtlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hdXRvbWF0aWMtcm91dGUgLnNlYXJjaC1tYXJrZXItaWNvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZmNjO1xufVxuLmF1dG9tYXRpYy1yb3V0ZSAuc2VhcmNoLW1hcmtlci1pY29uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtOHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMDAwO1xufVxuLmF1dG9tYXRpYy1yb3V0ZSAucm93LWJ0biB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYXV0b21hdGljLXJvdXRlIC5kaXJlY3Rpb24tdHJhc2gtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hdXRvbWF0aWMtcm91dGUgLmRpcmVjdGlvbi1jb21tb24taWNvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5leGVjdXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZi1wYWxldHRlLXByaW1hcnktNjAwKTtcbiAgY29sb3I6IHdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvcnVudGltZS9jb21wb25lbnRzL0F1dG9tYXRpY1JvdXRlL2F1dG9tYXRpY1JvdXRlU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNFO0VBQ0Usc0JBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBREo7QUFHRTtFQUNFLHlCQUFBO0FBREo7QUFHRTtFQUNFLGtCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRko7QUFLRTtFQUNFLHlCQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtBQUpKO0FBT0U7RUFDRSx5QkFBQTtBQUxKO0FBUUU7RUFDRSxlQUFBO0FBTko7QUFTRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQVBKOztBQVdBO0VBQ0UsZ0RBQUE7RUFDQSxZQUFBO0FBUkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmF1dG9tYXRpYy1yb3V0ZSB7XFxuICAuYXV0b21hdGljLXJvdXRlLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxuICB9XFxuXFxuICAud2F5cG9pbnQtdGFibGUge1xcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICB9XFxuICAud2F5cG9pbnQtdGFibGUtYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMEQwRDA7XFxuICB9XFxuICAuY2VudGVyLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2VhcmNoLW1hcmtlci1pY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtbWFya2VyLWljb24uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmZjYztcXG4gIH1cXG5cXG4gIC5zZWFyY2gtbWFya2VyLWljb246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtOHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMDAwO1xcbiAgfVxcblxcbiAgLnJvdy1idG4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmRpcmVjdGlvbi10cmFzaC1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmRpcmVjdGlvbi1jb21tb24taWNvbnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbi5leGVjdXRlLWJ0bntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZi1wYWxldHRlLXByaW1hcnktNjAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBQb3BwZXIgU3R5bGUgTGF5ZXIqL1xuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItc3R5bGUtcG9wcGVyIC5hZGQtZGF0YS1wb3BwZXItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLXN0eWxlLXBvcHBlciAudGFiLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItc3R5bGUtcG9wcGVyIC5qaW11LW5hdiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodC00MDApO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItc3R5bGUtcG9wcGVyIC5tdWx0aXBsZS1saW5lcy10cnVuY2F0ZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4uZ2VvcHJvY2Vzc29yLWNhZC1sYXllci1zdHlsZS1wb3BwZXIgLml0ZW0tc2VsZWN0b3Itc2VhcmNoIC50ZXh0LWlucHV0LXByZWZpeCBzdmcge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKSAhaW1wb3J0YW50O1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItc3R5bGUtcG9wcGVyIC5jdXN0b20tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItc3R5bGUtcG9wcGVyIC5jdXN0b20tcmFkaW8taWNvbjpjaGVja2VkIH4gLmN1c3RvbS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItc3R5bGUtcG9wcGVyIC5yYWRpby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItc3R5bGUtcG9wcGVyIC5jdXN0b20tYnV0dG9uIGNhbGNpdGUtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG5cbi8qIEZPUk0gKi9cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC5kYXRhLWZpbGUtdXBsb2FkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tZGFyay01MDApO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIgLnBvcHBlci1jb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIgLmZvbnQtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZ2VvcHJvY2Vzc29yLWNhZC1sYXllci1mb3JtLXBvcHBlciAuZm9udC0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC51cGxvYWQtbG9hZGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICB6LWluZGV4OiAyO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIgLnVwbG9hZC1sb2FkaW5nLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiA2MHB4O1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC51cGxvYWQtbG9hZGluZy1maWxlLW5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICB0b3A6IDgwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC51cGxvYWQtbG9hZGluZy1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICByaWdodDogY2FsYyg1MCUgLSAxMDBweCk7XG4gIHRvcDogY2FsYyg1MCUgKyA4MHB4KTtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC51cGxvYWQtbG9hZGluZy1idG4gYnV0dG9uLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItNTAwKTtcbiAgYm9yZGVyOiAwO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIgLnN1cHBvcnRlZC10eXBlcyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC5kcmFnLWFyZWEtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uZ2VvcHJvY2Vzc29yLWNhZC1sYXllci1mb3JtLXBvcHBlciAuZHJhZy1hcmVhIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWxpZ2h0LTQwMCk7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIgLnVwbG9hZC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC00MDApO1xuICBjb2xvcjogdmFyKC0tZGFyay04MDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIgLnVwbG9hZC1idG4tY29udGFpbmVyOmhvdmVyIC51cGxvYWQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtMjAwKSAhaW1wb3J0YW50O1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIgLmRyYWctYXJlYS1jb250YWluZXIsXG4uZ2VvcHJvY2Vzc29yLWNhZC1sYXllci1mb3JtLXBvcHBlciAudXBsb2FkLWJ0bi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogMTtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC51cGxvYWQtYnRuLWZpbGUtaW5wdXQsXG4uZ2VvcHJvY2Vzc29yLWNhZC1sYXllci1mb3JtLXBvcHBlciAuZHJhZy1hcmVhLWZpbGUtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC5pbnB1dC1zZWxlY3QtcmFkaW8tcHJvamVjdGlvbixcbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC5pbnB1dC1zZWxlY3QtcmFkaW8tY2hhcmFjdGVyLWNvZGlmaWNhdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIgLnVwbG9hZC1idG4tZmlsZS1pbnB1dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyIC5kYXRhLWVycm9yIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9wb3BwZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFBO0FBRUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0FBREo7QUFJRTtFQUNFLHlDQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBSEo7QUFRTTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7QUFOUjtBQVdFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFUSjtBQVlFO0VBQ0Usc0JBQUE7QUFWSjtBQWFFO0VBQ0UsYUFBQTtBQVhKO0FBY0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFaSjs7QUFnQkEsU0FBQTtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQWRKO0FBaUJFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBZko7QUFrQkU7RUFDRSxlQUFBO0FBaEJKO0FBbUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBakJKO0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBbEJKO0FBcUJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBbkJKO0FBc0JFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFwQko7QUF1QkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQXJCSjtBQXVCSTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtBQXJCTjtBQXlCRTtFQUNFLGVBQUE7QUF2Qko7QUEwQkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQXhCSjtBQTJCRTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBekJKO0FBNEJFO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBMUJKO0FBOEJJO0VBQ0UsNkNBQUE7QUE1Qk47QUFnQ0U7O0VBRUUsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUE5Qko7QUFpQ0U7O0VBRUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQS9CSjtBQWtDRTs7RUFFRSxpQkFBQTtBQWhDSjtBQW1DRTtFQUNFLGVBQUE7QUFqQ0o7QUFvQ0U7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FBbENKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFBvcHBlciBTdHlsZSBMYXllciovXFxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItc3R5bGUtcG9wcGVyIHtcXG4gIC5hZGQtZGF0YS1wb3BwZXItY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcXG4gIH1cXG5cXG4gIC50YWItY29udGVudCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAuamltdS1uYXYge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtNDAwKTtcXG4gIH1cXG5cXG4gIC5tdWx0aXBsZS1saW5lcy10cnVuY2F0ZSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB9XFxuXFxuICAuaXRlbS1zZWxlY3Rvci1zZWFyY2gge1xcbiAgICAudGV4dC1pbnB1dC1wcmVmaXgge1xcbiAgICAgIHN2ZyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCkgIWltcG9ydGFudDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jdXN0b20tYnV0dG9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcblxcbiAgLmN1c3RvbS1yYWRpby1pY29uOmNoZWNrZWR+LmN1c3RvbS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgfVxcblxcbiAgLnJhZGlvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuY3VzdG9tLWJ1dHRvbiBjYWxjaXRlLWljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMnB4O1xcbiAgfVxcbn1cXG5cXG4vKiBGT1JNICovXFxuLmdlb3Byb2Nlc3Nvci1jYWQtbGF5ZXItZm9ybS1wb3BwZXIge1xcbiAgLmRhdGEtZmlsZS11cGxvYWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLTUwMCk7XFxuICB9XFxuXFxuICAucG9wcGVyLWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICB9XFxuXFxuICAuZm9udC0xNCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG5cXG4gIC5mb250LTE2IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgfVxcblxcbiAgLnVwbG9hZC1sb2FkaW5nLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuXFxuICAudXBsb2FkLWxvYWRpbmctY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDYwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcblxcbiAgLnVwbG9hZC1sb2FkaW5nLWZpbGUtbmFtZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICByaWdodDogY2FsYyg1MCUgLSAxMDBweCk7XFxuICAgIHRvcDogODBweDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgLnVwbG9hZC1sb2FkaW5nLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDEwMHB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSArIDgwcHgpO1xcblxcbiAgICBidXR0b24uYnRuLWRhbmdlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyLTUwMCk7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAuc3VwcG9ydGVkLXR5cGVzIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgfVxcblxcbiAgLmRyYWctYXJlYS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5kcmFnLWFyZWEge1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tbGlnaHQtNDAwKTtcXG4gICAgcGFkZGluZy10b3A6IDIwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB9XFxuXFxuICAudXBsb2FkLWJ0biB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LTQwMCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAudXBsb2FkLWJ0bi1jb250YWluZXI6aG92ZXIge1xcbiAgICAudXBsb2FkLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtMjAwKSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICB9XFxuXFxuICAuZHJhZy1hcmVhLWNvbnRhaW5lcixcXG4gIC51cGxvYWQtYnRuLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgLnVwbG9hZC1idG4tZmlsZS1pbnB1dCxcXG4gIC5kcmFnLWFyZWEtZmlsZS1pbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgLmlucHV0LXNlbGVjdC1yYWRpby1wcm9qZWN0aW9uLFxcbiAgLmlucHV0LXNlbGVjdC1yYWRpby1jaGFyYWN0ZXItY29kaWZpY2F0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAudXBsb2FkLWJ0bi1maWxlLWlucHV0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmRhdGEtZXJyb3Ige1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nZW9wcm9jZXNzLWNhZCAud2lkZ2V0LWFkZC1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2VvcHJvY2Vzcy1jYWQgLm5vLWRhdGEtcGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmdlb3Byb2Nlc3MtY2FkIC5uby1kYXRhLXBsYWNlaG9sZGVyIC5uby1kYXRhLXBsYWNlaG9sZGVyLXRleHQsXG4uZ2VvcHJvY2Vzcy1jYWQgLm5vLWRhdGEtcGxhY2Vob2xkZXIgLm5vLWRhdGEtcGxhY2Vob2xkZXItaWNvbixcbi5nZW9wcm9jZXNzLWNhZCAubm8tZGF0YS1wbGFjZWhvbGRlciAubm8tZGF0YS1wbGFjZWhvbGRlci1idG4ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZ2VvcHJvY2Vzcy1jYWQgLm5vLWRhdGEtcGxhY2Vob2xkZXIgLm5vLWRhdGEtcGxhY2Vob2xkZXItdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLTUwMCk7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ2VvcHJvY2Vzcy1jYWQgLm5vLWRhdGEtcGxhY2Vob2xkZXIgLm5vLWRhdGEtcGxhY2Vob2xkZXItaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XG59XG4uZ2VvcHJvY2Vzcy1jYWQgLm5vLWRhdGEtcGxhY2Vob2xkZXIgLm5vLWRhdGEtcGxhY2Vob2xkZXItYnRuIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9NYW51YWxSb3V0ZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQURKO0FBR0k7OztFQUdFLGNBQUE7RUFDQSxjQUFBO0FBRE47QUFJSTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRk47QUFLSTtFQUNFLHNCQUFBO0FBSE47QUFNSTtFQUNFLGdCQUFBO0FBSk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdlb3Byb2Nlc3MtY2FkIHtcXG4gIC53aWRnZXQtYWRkLWRhdGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5uby1kYXRhLXBsYWNlaG9sZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gICAgLm5vLWRhdGEtcGxhY2Vob2xkZXItdGV4dCxcXG4gICAgLm5vLWRhdGEtcGxhY2Vob2xkZXItaWNvbixcXG4gICAgLm5vLWRhdGEtcGxhY2Vob2xkZXItYnRuIHtcXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgfVxcblxcbiAgICAubm8tZGF0YS1wbGFjZWhvbGRlci10ZXh0IHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay01MDApO1xcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5uby1kYXRhLXBsYWNlaG9sZGVyLWljb24ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICAgIH1cXG5cXG4gICAgLm5vLWRhdGEtcGxhY2Vob2xkZXItYnRuIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnJvdy1idXR0b25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uYnV0dG9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJ1dHRvbi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9ydW50aW1lL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb3ctYnV0dG9ucyB7IFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xcbiAgbWFyZ2luLXRvcDogNyU7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4uYnV0dG9uLWl0ZW0ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluKTsgLy8gQ29sb3IgZGVmaW5pdCBhbCBjb25maWd1cmFkb3IgZGUgdGVtYSBkJ2V4cGVyaWVuY2UgYnVpbGRlclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uYnV0dG9uLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbik7IC8vIENvbG9yIGRlZmluaXQgYWwgY29uZmlndXJhZG9yIGRlIHRlbWEgZCdleHBlcmllbmNlIGJ1aWxkZXJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vYXV0b21hdGljUm91dGVTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL2F1dG9tYXRpY1JvdXRlU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3BvcHBlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3BvcHBlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk03LjUgMS41YS41LjUgMCAwIDEgMSAwdjIuOGEuNS41IDAgMCAxLTEgMHptNi4wMjguODc0YS41LjUgMCAwIDEgLjA2Mi43MDVsLTEuNDE0IDEuNjg1YS41LjUgMCAxIDEtLjc2Ni0uNjQzbDEuNDE0LTEuNjg1YS41LjUgMCAwIDEgLjcwNC0uMDYybS0xMC4zNTIuMDYyYS41LjUgMCAxIDAtLjc2Ni42NDNsMS40MTQgMS42ODVhLjUuNSAwIDAgMCAuNzY2LS42NDN6TTYuMjQ0IDEwLjZINS40M3pNLjk2MSA5LjhoNC44OGMuMjExIDAgLjM1OS4xOS4zNTkuNHEwIC4yMDcuMDQ1LjRhMS44IDEuOCAwIDAgMCAzLjUxIDBoLjgxNGEyLjYgMi42IDAgMCAxLTUuMTM5IDBILjh2My42aDE0LjR2LTMuNkg5Ljc1NXEuMDQ1LS4xOTQuMDQ1LS40YzAtLjIxLjE0OC0uNC4zNTgtLjRoNC44ODFsLTIuMjY3LTMuNEgzLjIyOHptMTEuODEtNC4yYS44LjggMCAwIDEgLjY2Ni4zNTZsMi40MjkgMy42NDJhLjguOCAwIDAgMSAuMTM0LjQ0NFYxNC4yYS44LjggMCAwIDEtLjguOEguOGEuOC44IDAgMCAxLS44LS44di00LjE1OGEuOC44IDAgMCAxIC4xMzQtLjQ0NGwyLjQyOS0zLjY0MmEuOC44IDAgMCAxIC42NjUtLjM1NnpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTkuNDM4Ljk5NGMuMjEzIDAgLjM5Ny4xNDYuNDQuMzVxLjIyNyAxLjA4NC4zMTYgMS44NTIuNTYyLjI0MiAxLjA0OC41OTlsMS43MjgtLjY3NmEuNDU1LjQ1NSAwIDAgMSAuNTU2LjE4OGwxLjQyIDIuMzk0YS40My40MyAwIDAgMS0uMDkxLjU0NyAyMiAyMiAwIDAgMS0xLjQ5IDEuMTk0cS4wMy4yNy4wMy41NTIgMCAuMzItLjAzOC42M2wxLjQ2NSAxLjEyYS40My40MyAwIDAgMSAuMTExLjU2M2wtMS40MiAyLjM5NGEuNDU0LjQ1NCAwIDAgMS0uNTMuMTk3IDIzIDIzIDAgMCAxLTEuODA3LS42NnEtLjQ5LjM1LTEuMDU1LjU4NmwtLjI2MyAxLjc5NGEuNDQ2LjQ0NiAwIDAgMS0uNDQ1LjM3Nkg2LjU3NGEuNDQ2LjQ0NiAwIDAgMS0uNDQtLjM1IDIxIDIxIDAgMCAxLS4zMTctMS44NTMgNS4zIDUuMyAwIDAgMS0xLjA0Ny0uNTk4bC0xLjcyOC42NzVhLjQ1NS40NTUgMCAwIDEtLjU1Ni0uMTg3bC0xLjQyLTIuMzk1YS40My40MyAwIDAgMSAuMDkxLS41NDZxLjg1LS43MzUgMS40OS0xLjE5NGE1LjE2NyA1LjE2NyAwIDAgMSAuMDA4LTEuMTgzTDEuMTkgNi4yNDNhLjQzLjQzIDAgMCAxLS4xMTItLjU2MmwxLjQyLTIuMzk1YS40NTUuNDU1IDAgMCAxIC41MzEtLjE5NnExLjA3OC4zNSAxLjgwNy42NmMuMzI0LS4yMzMuNjc5LS40MyAxLjA1Ni0uNTg3bC4yNjItMS43OTRBLjQ0Ni40NDYgMCAwIDEgNi42Ljk5NHptLS4zNjUgMUg2Ljk4NWwtLjI4IDEuODY2LS40NjcuMTlxLS4zNTMuMTQ0LS42NzIuMzRsLS4yMDcuMTM2LS40Mi4yOTMtLjQ3Ni0uMTk3cS0uNDkyLS4yMDUtMS4xNjktLjQzM2wtLjIyMS0uMDc0LTEuMDQ1IDEuNzE5TDMuNTkgNi45OTlsLS4wNi40NzlhNCA0IDAgMCAwLS4wMjEuODE2bC4wMTQuMTQ0LjA1OC40OTItLjQxOS4yOTRxLS40MzMuMzA0LS45NzkuNzQ2bC0uMTc3LjE0NSAxLjA0MyAxLjcyIDEuODQ1LS43MDMuNDA2LjI5cS4zMDcuMjE5LjY0NS4zODRsLjIyOC4xMDMuNDc0LjE5OS4wNTkuNDlxLjA2LjUwNy4xOSAxLjE3N2wuMDQzLjIxOWgyLjA4OGwuMjgyLTEuODY3LjQ2Ni0uMTlxLjM1NC0uMTQ0LjY3Mi0uMzRsLjIwNy0uMTM2LjQxOS0uMjkzLjQ3Ni4xOThxLjQ5NS4yMDQgMS4xNy40MzNsLjIyLjA3MiAxLjA0NC0xLjcxOC0xLjU2LTEuMTY1LjA2LS40NzlhNCA0IDAgMCAwIC4wMi0uODE1bC0uMDEzLS4xNDQtLjA2LS40OTIuNDItLjI5NWExOCAxOCAwIDAgMCAuOTgtLjc0NmwuMTc2LS4xNDYtMS4wNDMtMS43Mi0xLjg0NC43MDUtLjQwNi0uMjlhNC41IDQuNSAwIDAgMC0uNjQ2LS4zODVsLS4yMjgtLjEwMy0uNDc0LS4xOTktLjA1OC0uNDlxLS4wNDktLjQwNS0uMTQtLjkxNnptLTEuMDY3IDNhMyAzIDAgMSAxIDAgNiAzIDMgMCAwIDEgMC02bTAgMWEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIm04Ljc0NSA4IDYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0NS43NDZMOCA4Ljc0NmwtNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ2LS43NDZsNi4xLTYuMS02LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYtLjc0Nmw2LjEgNi4xIDYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni43NDZ6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk02IDYuNWEuNS41IDAgMCAxIDEgMHY2YS41LjUgMCAwIDEtMSAwek05LjUgNmEuNS41IDAgMCAwLS41LjV2NmEuNS41IDAgMCAwIDEgMHYtNmEuNS41IDAgMCAwLS41LS41XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTEgMEg1YTEgMSAwIDAgMC0xIDF2MkguNWEuNS41IDAgMCAwIDAgMWgxLjZsLjgxIDExLjFhMSAxIDAgMCAwIC45OTUuOWg4LjE5YTEgMSAwIDAgMCAuOTk1LS45TDEzLjkgNGgxLjZhLjUuNSAwIDAgMCAwLTFIMTJWMWExIDEgMCAwIDAtMS0xbTAgM1YxSDV2MnptMS44OTUgMWgtOS43OWwuOCAxMWg4LjE5elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2VtcHR5LnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBFbXB0eU91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldHRpbmdPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3BsdXMuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvdHJhc2guc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYXNoT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImV4cG9ydCAqIGFzIFNlbGVjdFJvdXRlSWNvbiBmcm9tICcuL3NlbGVjdC1yb3V0ZS5zdmcnXG5leHBvcnQgKiBhcyBOZXdNYW51YWxSb3V0ZUljb24gZnJvbSAnLi9uZXctcm91dGUuc3ZnJ1xuZXhwb3J0ICogYXMgTmV3SW50ZXJlc3RQb2ludEljb24gZnJvbSAnLi9uZXctaW50ZXJlc3QtcG9pbnQuc3ZnJ1xuZXhwb3J0ICogYXMgQXV0b21hdGljUm91dGVJY29uIGZyb20gJy4vYXV0b21hdGljLXJvdXRlLnN2ZydcbmV4cG9ydCAqIGFzIFRyYXNoSWNvbiBmcm9tICcuL3RyYXNoLnN2ZyciLCJpbXBvcnQge1xuICBSZWFjdCwganN4LFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBDYWxjaXRlRmxvd0l0ZW0gfSBmcm9tIFwiQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzLXJlYWN0XCJcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gXCJqaW11LXVpXCJcbmltcG9ydCB7IFxuICBBdXRvbWF0aWNSb3V0ZUljb24sIE5ld0ludGVyZXN0UG9pbnRJY29uLCBcbiAgTmV3TWFudWFsUm91dGVJY29uLCBTZWxlY3RSb3V0ZUljb24sXG59IGZyb20gJy4uL2Fzc2V0cydcbmltcG9ydCB7IFNlbGVjdGVkQXBwRW51bSwgU2VsZWN0ZWRBcHBUeXBlIH0gZnJvbSAnLi4vdHlwZXMnXG5cblxuZXhwb3J0IGNvbnN0IEFwcFNlbGVjdG9yID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzZXRTZWxlY3RlZEFwcFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBoYW5kbGVTZWxlY3RlZEFwcCA9IChzZWxlY3RlZEFwcDogU2VsZWN0ZWRBcHBUeXBlKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHNldFNlbGVjdGVkQXBwKHNlbGVjdGVkQXBwKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FsY2l0ZUZsb3dJdGVtIGhlYWRpbmc9XCJTZWxlY2Npb25hXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1idXR0b25zXCI+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cImRlZmF1bHRcIiBjbGFzc05hbWU9J2J1dHRvbi1pdGVtJyBcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZEFwcChTZWxlY3RlZEFwcEVudW0uUm91dGVTZWxlY3Rvcil9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIiBpY29uPXtTZWxlY3RSb3V0ZUljb259XG4gICAgICAgICAgICByb3RhdGU9ezB9IHNpemU9XCJsXCIgdGl0bGU9XCJJY29uXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwiZGVmYXVsdFwiIGNsYXNzTmFtZT0nYnV0dG9uLWl0ZW0nXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWRBcHAoU2VsZWN0ZWRBcHBFbnVtLk5ld0ludGVyZXN0UG9pbnQpfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCIgaWNvbj17TmV3SW50ZXJlc3RQb2ludEljb259XG4gICAgICAgICAgICByb3RhdGU9ezB9IHNpemU9XCJsXCIgdGl0bGU9XCJJY29uXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwiZGVmYXVsdFwiIGNsYXNzTmFtZT0nYnV0dG9uLWl0ZW0nXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0ZWRBcHAoU2VsZWN0ZWRBcHBFbnVtLk5ld01hbnVhbFJvdXRlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiIGljb249e05ld01hbnVhbFJvdXRlSWNvbn1cbiAgICAgICAgICAgIHJvdGF0ZT17MH0gc2l6ZT1cImxcIiB0aXRsZT1cIkljb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHNpemU9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPSdidXR0b24taXRlbSdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3RlZEFwcChTZWxlY3RlZEFwcEVudW0uQXV0b21hdGljUm91dGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCIgaWNvbj17QXV0b21hdGljUm91dGVJY29ufVxuICAgICAgICAgICAgcm90YXRlPXswfSBzaXplPVwibFwiIHRpdGxlPVwiSWNvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhbGNpdGVGbG93SXRlbT5cbiAgKVxufSIsImltcG9ydCB7IENhbGNpdGVCdXR0b24sIENhbGNpdGVGbG93SXRlbSB9IGZyb20gJ0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy1yZWFjdCdcbmltcG9ydCB7XG4gIFJlYWN0LCBob29rcywganN4LFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuaW1wb3J0IGNvbXBvbmVudE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmltcG9ydCB7IGxvY2F0aW9uVG9BZGRyZXNzIH0gZnJvbSBcImVzcmkvcmVzdC9sb2NhdG9yXCI7XG5cbmltcG9ydCB7IE1BWF9ST1dTLCBJbml0aWFsV2F5cG9pbnRMaXN0Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0YW50cy9oYXJkY29kZWRXYXlwb2ludCdcblxuaW1wb3J0ICcuL2F1dG9tYXRpY1JvdXRlU3R5bGUuY3NzJ1xuaW1wb3J0IHsgV2F5cG9pbnRSb3dDb21wb25lbnQgfSBmcm9tICcuL1dheXBvaW50Um93J1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgV2F5cG9pbnRSb3dQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHsgTWFwQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnXG5pbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlLCB3YXlwb2ludExpc3RSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9SZWR1Y2VyV2F5cG9pbnRMaXN0J1xuaW1wb3J0IHsgR2VuZXJpY01vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkLWNvZGUvR2VuZXJpY01vZGFsJ1xuaW1wb3J0IHsgUkVWRVJTRV9HRU9DT0RFX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzL3VybENvbnN0YW50cyc7XG5pbXBvcnQgeyByZWN0VG9YWSB9IGZyb20gJ0BpbnRlcmFjdGpzL3V0aWxzL3JlY3QnO1xuaW1wb3J0IHsgV2lkZ2V0VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBBdXRvbWF0aWNSb3V0ZUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMsIGNvbXBvbmVudE1lc3NhZ2VzKVxuICBjb25zdCBbY3VycmVudEFjdGl2ZVJvdywgc2V0Q3VycmVudEFjdGl2ZVJvd10gPSB1c2VTdGF0ZTxXYXlwb2ludFJvd1Byb3BzPihudWxsKVxuICBjb25zdCBbd2F5cG9pbnRMaXN0LCBkaXNwYXRjaFdheXBvaW50TGlzdF0gPSB1c2VSZWR1Y2VyKHdheXBvaW50TGlzdFJlZHVjZXIsIEluaXRpYWxXYXlwb2ludExpc3RDb25zdHJ1Y3RvcigpKVxuICBjb25zdCBbaXNSZW9yZGVyaW5nTGlzdCwgc2V0SXNSZW9yZGVyaW5nTGlzdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW2lzT3BlblJlc2V0VmFsdWVzTW9kYWwsIHNldElzT3BlblJlc2V0VmFsdWVzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qge1xuICAgIGppbXVNYXBWaWV3LCBkcmF3U2VsZWN0ZWRDb29yZGluYXRlSW5NYXAsIHJlbW92ZVByZXZpb3VzRHJhd25HcmFwaCxcbiAgICBza2V0Y2hWaWV3TW9kZWwsXG4gIH0gPSB1c2VDb250ZXh0KE1hcENvbnRleHQpXG5cbiAgY29uc3QgaXNEaXNhYmxlZEFkZFN0b3BzUHJvcHMgPSB3YXlwb2ludExpc3QubGVuZ3RoID49IE1BWF9ST1dTID8ge1xuICAgIGRpc2FibGVkOiB0cnVlXG4gIH0gOiB7fVxuXG4gIGNvbnN0IGlzRGlzYWJsZWRQcm9wcyA9IHdheXBvaW50TGlzdC5maW5kKCh3YXlwb2ludCkgPT4ge1xuICAgIHJldHVybiAhKHdheXBvaW50LmFkZHJlc3MgJiYgd2F5cG9pbnQudGl0bGUgJiYgd2F5cG9pbnQubGF0ICYmIHdheXBvaW50LmxvbilcbiAgfSkgPyB7XG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfSA6IHt9XG5cbiAgLy8gKiBFdmVudG8gZGUgcmVvcmRlbmFkbyBkZSBwdW50b3MgZW4gZWwgbWFwYSAoY3VhbmRvIHJlb3JkZW5hbW9zIGxhIHRhYmxhIGFycmFzdHJhbmRvKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1Jlb3JkZXJpbmdMaXN0KSB7XG4gICAgICB3YXlwb2ludExpc3QuZm9yRWFjaCgod2F5cG9pbnQpID0+IHtcbiAgICAgICAgaWYgKHdheXBvaW50LmxhdCAmJiB3YXlwb2ludC5sb24pIHtcbiAgICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh7IGxhdGl0dWRlOiB3YXlwb2ludC5sYXQsIGxvbmdpdHVkZTogd2F5cG9pbnQubG9uIH0pXG4gICAgICAgICAgZHJhd1NlbGVjdGVkQ29vcmRpbmF0ZUluTWFwKHtcbiAgICAgICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgICAgIGN1cnJlbnRNb2RlbENvbmZpZzogd2F5cG9pbnQsXG4gICAgICAgICAgICBpbmRleDogd2F5cG9pbnQuaW5kZXgsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZXRJc1Jlb3JkZXJpbmdMaXN0KGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2lzUmVvcmRlcmluZ0xpc3QsIHdheXBvaW50TGlzdF0pXG5cbiAgLy8gKiBFdmVudG8gZGUgY2xpY2sgcGFyYSBhw7FkaXIgcHVudG9zIGRlIHBhcmFkYSBlbiBlbCBtYXBhXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWFwQ2xpY2tFdmVudCA9IGppbXVNYXBWaWV3LnZpZXcub24oJ2NsaWNrJywgaGFuZGxlQ2xpY2tFdmVudEluTWFwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbWFwQ2xpY2tFdmVudC5yZW1vdmUoKTtcbiAgICB9O1xuICB9LCBbamltdU1hcFZpZXcsIGN1cnJlbnRBY3RpdmVSb3ddKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrRXZlbnRJbk1hcCA9IGFzeW5jIChldnQpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRBY3RpdmVSb3cpIHJldHVyblxuICAgIGNvbnN0IHBvaW50OiBQb2ludCA9IGppbXVNYXBWaWV3LnZpZXcudG9NYXAoe1xuICAgICAgeDogZXZ0LngsXG4gICAgICB5OiBldnQueVxuICAgIH0pXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBhd2FpdCBsb2NhdGlvblRvQWRkcmVzcyhSRVZFUlNFX0dFT0NPREVfVVJMLCB7IGxvY2F0aW9uOiBwb2ludCB9KVxuXG4gICAgICBkcmF3U2VsZWN0ZWRDb29yZGluYXRlSW5NYXAoe1xuICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgIGN1cnJlbnRNb2RlbENvbmZpZzogY3VycmVudEFjdGl2ZVJvdyxcbiAgICAgICAgaW5kZXg6IGN1cnJlbnRBY3RpdmVSb3cuaW5kZXgsXG4gICAgICB9KVxuICAgICAgZGlzcGF0Y2hXYXlwb2ludExpc3Qoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLnVwZGF0ZVBvaW50LFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICAgIGlkOiBjdXJyZW50QWN0aXZlUm93LmlkLFxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZXRDdXJyZW50QWN0aXZlUm93KG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFdpZGdldFV0aWxzLmNyZWF0ZUFsZXJ0KHtcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgIHRpdGxlOiB0cmFuc2xhdGUoJ2Vycm9yU2VhcmNoTm90QXZhaWxhYmxlQXJlYVBvaW50VGl0bGUnKSxcbiAgICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGUoJ2Vycm9yU2VhcmNoTm90QXZhaWxhYmxlQXJlYVBvaW50TWVzc2FnZScpXG4gICAgICAgIH0sXG4gICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICBlbmFibGVBdXRvQ2xvc2U6IGZhbHNlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSwgaW5kZXgpID0+IHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdyb3dJbmRleCcsIGluZGV4KVxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJvcCA9IChlLCB0YXJnZXREcmFnSW5kZXgpID0+IHtcbiAgICBjb25zdCBvcmlnaW5EcmFnZ2VkSW5kZXggPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdyb3dJbmRleCcpXG4gICAgaWYgKG9yaWdpbkRyYWdnZWRJbmRleCA9PSB0YXJnZXREcmFnSW5kZXgpIHJldHVybiAvLyBDbGF1c2UgZ3VhcmQgc2kgc2UgYXJyYXN0cmEgaGFjaWEgZG9uZGUgeWEgZXN0YWJhIGFudGVyaW9ybWVudGUuLi5cblxuICAgIHNldElzUmVvcmRlcmluZ0xpc3QodHJ1ZSlcblxuICAgIGRpc3BhdGNoV2F5cG9pbnRMaXN0KHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUucmVvcmRlclJvd3MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG9yaWdpbkRyYWdnZWQ6IHdheXBvaW50TGlzdFtvcmlnaW5EcmFnZ2VkSW5kZXhdLFxuICAgICAgICBvcmlnaW5JbmRleDogTnVtYmVyKG9yaWdpbkRyYWdnZWRJbmRleCksXG4gICAgICAgIHRhcmdldEluZGV4OiBOdW1iZXIodGFyZ2V0RHJhZ0luZGV4KSxcbiAgICAgICAgdGFyZ2V0RHJhZ2dlZDogd2F5cG9pbnRMaXN0W3RhcmdldERyYWdJbmRleF0sXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZFN0b3BzID0gKCkgPT4ge1xuICAgIGlmICh3YXlwb2ludExpc3QubGVuZ3RoIDwgTUFYX1JPV1MpIHtcbiAgICAgIGRpc3BhdGNoV2F5cG9pbnRMaXN0KHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5hZGRSb3csXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZVN0b3AgPSAod2F5cG9pbnQ6IFdheXBvaW50Um93UHJvcHMpID0+IHtcbiAgICByZW1vdmVQcmV2aW91c0RyYXduR3JhcGgod2F5cG9pbnQuaWQpXG4gICAgZGlzcGF0Y2hXYXlwb2ludExpc3Qoe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZS5yZW1vdmVSb3csXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGlkOiB3YXlwb2ludC5pZCxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gKiBSZW9yZGVuZW0gZWxzIHB1bnRzIGFsIG1hcGFcbiAgICBzZXRJc1Jlb3JkZXJpbmdMaXN0KHRydWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVSZXNldEF1dG9tYXRpY1JvdXRlID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoV2F5cG9pbnRMaXN0KHsgdHlwZTogQWN0aW9uVHlwZS5yZXNldCB9KVxuICAgIHNrZXRjaFZpZXdNb2RlbC5sYXllci5yZW1vdmVBbGwoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FsY2l0ZUZsb3dJdGVtXG4gICAgICBoZWFkaW5nPXt0cmFuc2xhdGUoJ2F1dG9tYXRpY1JvdXRlVGl0bGUnKX1cbiAgICAgIGJlZm9yZUJhY2s9e3Byb3BzLm9uQmFja1RvTGlzdH1cbiAgICAgIGxvYWRpbmc9e2ZhbHNlfSBjbGFzc05hbWU9J2F1dG9tYXRpYy1yb3V0ZSdcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXV0b21hdGljLXJvdXRlLWNvbnRhaW5lcic+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3dheXBvaW50LXRhYmxlJz5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICA8dGg+e3RyYW5zbGF0ZSgndGl0bGUnKX08L3RoPlxuICAgICAgICAgICAgICA8dGg+e3RyYW5zbGF0ZSgnYWRkcmVzcycpfTwvdGg+XG4gICAgICAgICAgICAgIDx0aD57dHJhbnNsYXRlKCdzdG9wJyl9PC90aD5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cIndheXBvaW50LXRhYmxlLWJvZHlcIj5cbiAgICAgICAgICAgIHt3YXlwb2ludExpc3QubWFwKCh3YXlwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8V2F5cG9pbnRSb3dDb21wb25lbnQga2V5PXt3YXlwb2ludC5pZH1cbiAgICAgICAgICAgICAgICAgIHdheXBvaW50PXt3YXlwb2ludH1cbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBY3RpdmVSb3c9e3NldEN1cnJlbnRBY3RpdmVSb3d9XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaFdheXBvaW50TGlzdD17ZGlzcGF0Y2hXYXlwb2ludExpc3R9XG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZVJvdz17Y3VycmVudEFjdGl2ZVJvdz8uaWQgPT09IHdheXBvaW50LmlkfVxuICAgICAgICAgICAgICAgICAgZHJhZ1N0YXJ0PXsoZSkgPT4gaGFuZGxlRHJhZ1N0YXJ0KGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgICAgICAgICBkcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XG4gICAgICAgICAgICAgICAgICBkcm9wRWxlbWVudD17KGUpID0+IGhhbmRsZURyb3AoZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlU3RvcD17aGFuZGxlUmVtb3ZlU3RvcH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9XYXlwb2ludFJvd0NvbXBvbmVudD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWwtMCBtci0wIG10LTMgcm93LWJ0blwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIDxDYWxjaXRlQnV0dG9uIHsuLi5pc0Rpc2FibGVkQWRkU3RvcHNQcm9wc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhlY3V0ZS1idG5cIlxuICAgICAgICAgICAgICBsb2FkaW5nPXtmYWxzZX0gd2lkdGg9J2F1dG8nXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZFN0b3BzfVxuICAgICAgICAgICAgICBhcHBlYXJhbmNlPSdvdXRsaW5lLWZpbGwnXG4gICAgICAgICAgICAgIGtpbmQ9J2JyYW5kJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdhZGRfc3RvcCcpfVxuICAgICAgICAgICAgPC9DYWxjaXRlQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIDxDYWxjaXRlQnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4ZWN1dGUtYnRuXCJcbiAgICAgICAgICAgICAgbG9hZGluZz17ZmFsc2V9IHdpZHRoPSdhdXRvJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldElzT3BlblJlc2V0VmFsdWVzTW9kYWwodHJ1ZSkgfX1cbiAgICAgICAgICAgICAga2luZD0nZGFuZ2VyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRlKCduZXdSb3V0ZScpfVxuICAgICAgICAgICAgPC9DYWxjaXRlQnV0dG9uPlxuICAgICAgICAgICAgPENhbGNpdGVCdXR0b24gey4uLmlzRGlzYWJsZWRQcm9wc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhlY3V0ZS1idG5cIlxuICAgICAgICAgICAgICBsb2FkaW5nPXtmYWxzZX0gd2lkdGg9J2F1dG8nXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnZXhlY3V0ZV8nKX1cbiAgICAgICAgICAgIDwvQ2FsY2l0ZUJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEdlbmVyaWNNb2RhbFxuICAgICAgICBtb2RhbENhbGxiYWNrPXtoYW5kbGVSZXNldEF1dG9tYXRpY1JvdXRlfVxuICAgICAgICBoZWFkZXJEYXRhPXtgJHt0cmFuc2xhdGUoJ21vZGFsUmVzZXRTdG9wVmFsdWVzVGl0bGUnKX1gfVxuICAgICAgICBib2R5RGF0YT17YCR7dHJhbnNsYXRlKCdtb2RhbFJlc2V0U3RvcFZhbHVlc0JvZHknKX1gfVxuICAgICAgICBzaG93TW9kYWxTdGF0dXM9e2lzT3BlblJlc2V0VmFsdWVzTW9kYWx9XG4gICAgICAgIHVwZGF0ZVNob3dNb2RhbFN0YXR1cz17c2V0SXNPcGVuUmVzZXRWYWx1ZXNNb2RhbH0gLz5cbiAgICA8L0NhbGNpdGVGbG93SXRlbT5cbiAgKVxufSIsImltcG9ydCB7XG4gIFJlYWN0LCBqc3gsIGhvb2tzLFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIE51bWVyaWNJbnB1dCwgVGV4dElucHV0IH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFZlcnRpY2FsRG90c0ljb24gfSBmcm9tICcuL2Fzc2V0cydcbmltcG9ydCB7IERpc3BhdGNoLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnQGFyY2dpcy9jb3JlL3dpZGdldHMvU2VhcmNoJ1xuaW1wb3J0IHsgTWFwQ29udGV4dCwgUm91dGVFZGl0aW9uQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnXG5pbXBvcnQgTG9jYXRvclNlYXJjaFNvdXJjZSBmcm9tIFwiQGFyY2dpcy9jb3JlL3dpZGdldHMvU2VhcmNoL0xvY2F0b3JTZWFyY2hTb3VyY2UuanNcIjtcbmltcG9ydCBMYXllclNlYXJjaFNvdXJjZSBmcm9tIFwiQGFyY2dpcy9jb3JlL3dpZGdldHMvU2VhcmNoL0xheWVyU2VhcmNoU291cmNlLmpzXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCc7XG5pbXBvcnQgeyBXYXlwb2ludFJvd1Byb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgeyBUcmFzaEljb24gfSBmcm9tICcuLi8uLi9hc3NldHMnXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdAYXJjZ2lzL2NvcmUvR3JhcGhpYydcbmltcG9ydCB7IEFjdGlvblByb3BzLCBBY3Rpb25UeXBlLCBSb3dGaWx0ZXJLZXlUeXBlIH0gZnJvbSAnLi9yZWR1Y2Vycy9SZWR1Y2VyV2F5cG9pbnRMaXN0J1xuaW1wb3J0IHsgR2VuZXJpY01vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkLWNvZGUvR2VuZXJpY01vZGFsJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCBjb250ZXh0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCB7IGxvY2F0aW9uVG9BZGRyZXNzIH0gZnJvbSBcImVzcmkvcmVzdC9sb2NhdG9yXCI7XG5pbXBvcnQgeyBSRVZFUlNFX0dFT0NPREVfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMvdXJsQ29uc3RhbnRzJ1xuaW1wb3J0IHsgV2lkZ2V0VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscydcblxuaW50ZXJmYWNlIFdheXBvaW50Um93Q29tcG9uZW50UHJvcHMge1xuICB3YXlwb2ludDogV2F5cG9pbnRSb3dQcm9wcztcbiAgc2V0Q3VycmVudEFjdGl2ZVJvdzogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248V2F5cG9pbnRSb3dQcm9wcz4+O1xuICBpc0FjdGl2ZVJvdzogYm9vbGVhbjtcbiAgZGlzcGF0Y2hXYXlwb2ludExpc3Q6IERpc3BhdGNoPEFjdGlvblByb3BzPjtcbiAgZHJhZ1N0YXJ0OiAoZTogYW55KSA9PiB2b2lkO1xuICBkcmFnRW5kOiAoZTogYW55KSA9PiB2b2lkO1xuICBkcmFnT3ZlcjogKGU6IGFueSkgPT4gdm9pZDtcbiAgZHJvcEVsZW1lbnQ6IChlOiBhbnkpID0+IHZvaWQ7XG4gIGhhbmRsZVJlbW92ZVN0b3A6ICh3YXlwb2ludDogV2F5cG9pbnRSb3dQcm9wcykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFdheXBvaW50Um93Q29tcG9uZW50ID0gKHByb3BzOiBXYXlwb2ludFJvd0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcywgY29udGV4dE1lc3NhZ2VzKVxuXG4gIGNvbnN0IFtpc09wZW5EZWxldGVSb3dNb2RhbCwgc2V0SXNPcGVuRGVsZXRlUm93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNlIG1vbnRhIGVsIGNvbXBvbmVudGVcIilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzZSBkZXNtb250YSBlbCBjb21wb25lbnRlXCIpXG4gICAgfVxuICB9LCBbXSlcbiAgY29uc3Qge1xuICAgIFNldHRpbmdDb25maWcsIGFwcENvbmZpZyxcbiAgfSA9IHVzZUNvbnRleHQoUm91dGVFZGl0aW9uQ29udGV4dClcblxuICBjb25zdCB7XG4gICAgamltdU1hcFZpZXcsIGRyYXdTZWxlY3RlZENvb3JkaW5hdGVJbk1hcCwgc2tldGNoVmlld01vZGVsLFxuICB9ID0gdXNlQ29udGV4dChNYXBDb250ZXh0KVxuXG4gIGNvbnN0IHtcbiAgICB3YXlwb2ludCwgc2V0Q3VycmVudEFjdGl2ZVJvdyxcbiAgICBpc0FjdGl2ZVJvdywgZGlzcGF0Y2hXYXlwb2ludExpc3QsXG4gICAgZHJhZ1N0YXJ0LCBkcmFnT3ZlciwgZHJhZ0VuZCxcbiAgICBkcm9wRWxlbWVudCwgaGFuZGxlUmVtb3ZlU3RvcCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZTxTZWFyY2g+KG51bGwpXG4gIGNvbnN0IHNlYXJjaFJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSB1c2VSZWYobnVsbCk7XG5cbiAgaWYoc2VhcmNoSW5wdXQgJiYgd2F5cG9pbnQ/LmFkZHJlc3MpIHNlYXJjaElucHV0LnNlYXJjaFRlcm0gPSB3YXlwb2ludC5hZGRyZXNzXG5cbiAgLy8gKiBFdmVudCBkJ2FjdHVhbGl0emFjacOzIGRyYWcgYW5kIGRyb3AgZGUgcHVudHMgZGVsIG1hcGFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBza2V0Y2hVcGRhdGVIYW5kbGVyID0gc2tldGNoVmlld01vZGVsLm9uKFwidXBkYXRlXCIsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEdyYXBoaWMgPSBldmVudC5ncmFwaGljc1swXSBhcyBHcmFwaGljXG4gICAgICBjb25zdCBwb2ludCA9IGN1cnJlbnRHcmFwaGljLmdlb21ldHJ5IGFzIFBvaW50XG4gICAgICBcbiAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gXCJjb21wbGV0ZVwiICYmIGN1cnJlbnRHcmFwaGljLmF0dHJpYnV0ZXMuaWQgPT09IHdheXBvaW50LmlkKSB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGF3YWl0IGxvY2F0aW9uVG9BZGRyZXNzKFJFVkVSU0VfR0VPQ09ERV9VUkwsIHsgbG9jYXRpb246IHBvaW50IH0pXG5cbiAgICAgICAgICBkaXNwYXRjaFdheXBvaW50TGlzdCh7XG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLnVwZGF0ZVBvaW50LFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgICAgICAgIGlkOiB3YXlwb2ludC5pZCxcbiAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIFdpZGdldFV0aWxzLmNyZWF0ZUFsZXJ0KHtcbiAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRyYW5zbGF0ZSgnZXJyb3JTZWFyY2hOb3RBdmFpbGFibGVBcmVhUG9pbnRUaXRsZScpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGUoJ2Vycm9yU2VhcmNoTm90QXZhaWxhYmxlQXJlYVBvaW50TWVzc2FnZScpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgICAgICBlbmFibGVBdXRvQ2xvc2U6IGZhbHNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBza2V0Y2hVcGRhdGVIYW5kbGVyLnJlbW92ZSgpXG4gICAgfVxuICB9LCBbXSlcblxuICAvLyAqIEV2ZW50IGRlIHNlYXJjaCB3aWRnZXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hXaWRnZXQgPSBtb3VudFNlYXJjaFdpZGdldCgpXG5cbiAgICBzZXRTZWFyY2hJbnB1dChzZWFyY2hXaWRnZXQpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNlYXJjaElucHV0Py5kZXN0cm95KClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG1vdW50U2VhcmNoV2lkZ2V0ID0gKCkgPT4ge1xuXG4gICAgaWYgKCFTZXR0aW5nQ29uZmlnPy5kYXRhc291cmNlQ29uZmlnIHx8ICFTZXR0aW5nQ29uZmlnPy5kYXRhc291cmNlQ29uZmlnLmxlbmd0aCkge1xuICAgICAgV2lkZ2V0VXRpbHMuY3JlYXRlQWxlcnQoe1xuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgdGl0bGU6IHRyYW5zbGF0ZSgnZXJyb3JTZWFyY2hOb3RDb25maWd1cmVkVGl0bGUnKSxcbiAgICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGUoJ2Vycm9yU2VhcmNoTm90Q29uZmlndXJlZE1lc3NhZ2UnKVxuICAgICAgICB9LFxuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgZW5hYmxlQXV0b0Nsb3NlOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhU291cmNlQ29uZmlnTGlzdCA9IEFycmF5LmZyb20oU2V0dGluZ0NvbmZpZy5kYXRhc291cmNlQ29uZmlnKSBhcyBhbnlcbiAgICBjb25zdCBkYXRhU291cmNlTGlzdCA9IGRhdGFTb3VyY2VDb25maWdMaXN0LnJlZHVjZSgoYWNjdW0sIGRzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2Uud2tpZClcbiAgICAgIGlmIChkcy5zZWFyY2hTZXJ2aWNlVHlwZSA9PT0gJ0dlb2NvZGVTZXJ2aWNlJykge1xuICAgICAgICBjb25zdCB1dGlsaXR5SWQgPSBkcy51c2VVdGlsaXR5LnV0aWxpdHlJZFxuICAgICAgICBjb25zdCBnZW9jb2RlU2VydmljZVVybCA9IGFwcENvbmZpZy5hcHBDb25maWcudXRpbGl0aWVzW3V0aWxpdHlJZF0udXJsXG5cbiAgICAgICAgaWYgKGdlb2NvZGVTZXJ2aWNlVXJsKSB7XG4gICAgICAgICAgY29uc3QgbG9jYXRvclNlYXJjaCA9IG5ldyBMb2NhdG9yU2VhcmNoU291cmNlKHtcbiAgICAgICAgICAgIHVybDogZ2VvY29kZVNlcnZpY2VVcmwsXG4gICAgICAgICAgICBuYW1lOiBkcy5sYWJlbCB8fCAnTG9jYWxpemFkb3InLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGRzLmhpbnQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhY2N1bS5wdXNoKGxvY2F0b3JTZWFyY2gpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZHMuc2VhcmNoU2VydmljZVR5cGUgPT09ICdGZWF0dXJlU2VydmljZScpIHtcbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IGRzLnVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZDtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldz8udmlldy5tYXAuZmluZExheWVyQnlJZChsYXllcklkKTtcblxuICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICBjb25zdCBsYXllclNlYXJjaCA9IG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgICAgICBzZWFyY2hGaWVsZHM6IGRzLnNlYXJjaEZpZWxkcy5tYXAoZmllbGQgPT4gZmllbGQubmFtZSksXG4gICAgICAgICAgICBkaXNwbGF5RmllbGQ6IGRzLmRpc3BsYXlGaWVsZHNbMF0ubmFtZSxcbiAgICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgICAgIG5hbWU6IGRzLmxhYmVsIHx8ICdDYXBhIGRlIGVudGlkYWQnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWNjdW0ucHVzaChsYXllclNlYXJjaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgbmV3U2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XG4gICAgICBjb250YWluZXI6IHNlYXJjaFJlZi5jdXJyZW50LFxuICAgICAgdmlldzogamltdU1hcFZpZXc/LnZpZXcsXG4gICAgICBwb3B1cEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVzdWx0R3JhcGhpY0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgaW5jbHVkZURlZmF1bHRTb3VyY2VzOiBmYWxzZSxcbiAgICAgIHNvdXJjZXM6IGRhdGFTb3VyY2VMaXN0LFxuICAgIH0pO1xuXG4gICAgbmV3U2VhcmNoV2lkZ2V0Lm9uKCdzZWxlY3QtcmVzdWx0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBwb2ludCA9IGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5IGFzIFBvaW50XG5cbiAgICAgIGNvbnNvbGUubG9nKHBvaW50LCBldmVudC5yZXN1bHQubmFtZSlcblxuICAgICAgZHJhd1NlbGVjdGVkQ29vcmRpbmF0ZUluTWFwKHtcbiAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICBjdXJyZW50TW9kZWxDb25maWc6IHdheXBvaW50LCBcbiAgICAgICAgaW5kZXg6IHdheXBvaW50LmluZGV4LFxuICAgICAgfSlcblxuICAgICAgZGlzcGF0Y2hXYXlwb2ludExpc3Qoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLnVwZGF0ZVBvaW50LFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICAgIGlkOiB3YXlwb2ludC5pZCxcbiAgICAgICAgICBhZGRyZXNzOiBldmVudC5yZXN1bHQubmFtZSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ld1NlYXJjaFdpZGdldFxuICB9XG5cbiAgY29uc3QgZW5hYmxlQ2xpY2tJbk1hcCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50QWN0aXZlUm93KChwcmV2KSA9PiB7XG4gICAgICByZXR1cm4gcHJldj8uaWQgIT09IHdheXBvaW50LmlkID8gd2F5cG9pbnQgOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZUNsYXNzID0gaXNBY3RpdmVSb3cgPyAnYWN0aXZlJyA6ICcnXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXRWYWx1ZXMgPSAoa2V5OiBSb3dGaWx0ZXJLZXlUeXBlKSA9PiB7XG4gICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBldmVudD8udGFyZ2V0Py52YWx1ZSA/PyBldmVudFxuICAgICAgZGlzcGF0Y2hXYXlwb2ludExpc3Qoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLnVwZGF0ZUZpbHRlclZhbHVlLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgIGlkOiB3YXlwb2ludC5pZCxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBvblJlbW92ZVJvdyA9ICgpID0+IHtcbiAgICBoYW5kbGVSZW1vdmVTdG9wKHdheXBvaW50KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J2NlbnRlci10ZXh0Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlYXJjaC1tYXJrZXItaWNvbiAke2FjdGl2ZUNsYXNzfWB9IG9uQ2xpY2s9e2VuYWJsZUNsaWNrSW5NYXB9PlxuICAgICAgICAgICAge3dheXBvaW50LmluZGV4fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPFRleHRJbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt3YXlwb2ludC50aXRsZX0gaHRtbFNpemU9ezE0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUlucHV0VmFsdWVzKCd0aXRsZScpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IHJlZj17c2VhcmNoUmVmfT48L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxOdW1lcmljSW5wdXQgc2hvd0hhbmRsZXJzPXtmYWxzZX1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17d2F5cG9pbnQuc3RvcH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dFZhbHVlcygnc3RvcCcpfVxuICAgICAgICAgICAgdGl0bGU9XCJzZXQgYSBudW1iZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J2NlbnRlci10ZXh0J1xuICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtkcmFnU3RhcnR9XG4gICAgICAgICAgb25EcmFnRW5kPXtkcmFnRW5kfVxuICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVyfVxuICAgICAgICAgIG9uRHJvcD17ZHJvcEVsZW1lbnR9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGN1cnNvcjogXCJncmFiXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjJzIGVhc2VcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VEb3duPXsoZTogYW55KSA9PiBlLnRhcmdldC5jbG9zZXN0KFwidHJcIikuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKX1cbiAgICAgICAgICBvbk1vdXNlVXA9eyhlOiBhbnkpID0+IGUudGFyZ2V0LmNsb3Nlc3QoXCJ0clwiKS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJmYWxzZVwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPXtWZXJ0aWNhbERvdHNJY29ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIHtcbiAgICAgICAgICAvLyAqIFNpIHNvbiBlbHMgMiBwcmltZXJzIHB1bnRzIG5vIHBlcm1ldGltIGVzYm9ycmFyIGVsIHB1bnQgZGVsIG1hcGFcbiAgICAgICAgICB3YXlwb2ludC5pbmRleCA+IDIgJiYgPHRkIGNsYXNzTmFtZT0nY2VudGVyLXRleHQnPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0SXNPcGVuRGVsZXRlUm93TW9kYWwodHJ1ZSl9fSBjbGFzc05hbWU9J2RpcmVjdGlvbi1jb21tb24taWNvbnMnPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2RpcmVjdGlvbi10cmFzaC1pY29uJ1xuICAgICAgICAgICAgICAgIGljb249e1RyYXNoSWNvbn0gcm90YXRlPXswfSB0aXRsZT1cIkljb25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgfVxuICAgICAgPC90cj5cbiAgICAgIDxHZW5lcmljTW9kYWxcbiAgICAgICAgbW9kYWxDYWxsYmFjaz17b25SZW1vdmVSb3d9XG4gICAgICAgIGhlYWRlckRhdGE9e2Ake3RyYW5zbGF0ZSgnbW9kYWxEZWxldGVTdG9wUG9pbnRUaXRsZScpfWB9XG4gICAgICAgIGJvZHlEYXRhPXtgJHt0cmFuc2xhdGUoJ21vZGFsRGVsZXRlU3RvcFBvaW50Qm9keScpfSAke3dheXBvaW50LmluZGV4fT9gfVxuICAgICAgICBzaG93TW9kYWxTdGF0dXM9e2lzT3BlbkRlbGV0ZVJvd01vZGFsfVxuICAgICAgICB1cGRhdGVTaG93TW9kYWxTdGF0dXM9e3NldElzT3BlbkRlbGV0ZVJvd01vZGFsfSAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn0iLCJleHBvcnQgKiBhcyBWZXJ0aWNhbERvdHNJY29uIGZyb20gJy4vZG90cy0zLXZlcnRpY2FsLnN2ZydcblxuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXIxIGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzEuc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXIyIGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzIuc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXIzIGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzMuc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXI0IGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzQuc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXI1IGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzUuc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXI2IGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzYuc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXI3IGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzcuc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXI4IGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzguc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXI5IGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzkuc3ZnJ1xuZXhwb3J0ICogYXMgSW5kZXhNYXJrZXIxMCBmcm9tICcuL21hcC1pbmRleC1tYXJrZXJzL21hcmtlcl9ibGFja18xMC5zdmcnXG5leHBvcnQgKiBhcyBJbmRleE1hcmtlcjExIGZyb20gJy4vbWFwLWluZGV4LW1hcmtlcnMvbWFya2VyX2JsYWNrXzExLnN2ZyciLCJpbXBvcnQgeyB1dWlkdjEgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBXYXlwb2ludFJvd1Byb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBNQVhfUk9XUyA9IDIwXG5cbmNvbnN0IElOSVRJQUxfUk9XUyA9IDJcblxuZXhwb3J0IGNvbnN0IFdheXBvaW50Um93Q29uc3RydWN0b3IgPSAoaW5kZXgpOiBXYXlwb2ludFJvd1Byb3BzID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogdXVpZHYxKCksXG4gICAgdGl0bGU6ICcnLFxuICAgIHN0b3A6IDAsXG4gICAgaW5kZXg6IGluZGV4ICsgMSxcbiAgICBsYXQ6IG51bGwsXG4gICAgbG9uOiBudWxsLFxuICAgIGFkZHJlc3M6IG51bGwsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEluaXRpYWxXYXlwb2ludExpc3RDb25zdHJ1Y3RvciA9ICgpOiBXYXlwb2ludFJvd1Byb3BzW10gPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogSU5JVElBTF9ST1dTIH0sIChfLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiBXYXlwb2ludFJvd0NvbnN0cnVjdG9yKGluZGV4KVxuICB9KVxufVxuIiwiXG5leHBvcnQgY29uc3QgUkVWRVJTRV9HRU9DT0RFX1VSTCA9ICdodHRwczovL2dlb3BvcnRhbC50YXJyYWdvbmEuY2F0L3NlcnZlci9yZXN0L3NlcnZpY2VzL1RvcG9ncmFmaWEvbG9jYWxpdHphZG9yX2FkcmVjZXMvR2VvY29kZVNlcnZlciciLCJpbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCc7XG5pbXBvcnQgeyBXYXlwb2ludFJvd1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvbWFwVHlwZXMnO1xuaW1wb3J0IHsgV2F5cG9pbnRSb3dDb25zdHJ1Y3RvciwgSW5pdGlhbFdheXBvaW50TGlzdENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vY29uc3RhbnRzL2hhcmRjb2RlZFdheXBvaW50JztcblxuZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XG4gIHVwZGF0ZVBvaW50ID0gJ3VwZGF0ZS1wb2ludCcsXG4gIHJlb3JkZXJSb3dzID0gJ3Jlb3JkZXItcm93cycsXG4gIGFkZFJvdyA9ICdhZGQtcm93JyxcbiAgdXBkYXRlRmlsdGVyVmFsdWUgPSAndXBkYXRlLWZpbHRlci1yb3ctdmFsdWUnLFxuICByZW1vdmVSb3cgPSAncmVtb3ZlLXJvdycsXG4gIHJlc2V0ID0gJ3Jlc2V0LXZhbHVlcycsXG59XG5cbnR5cGUgSWQgPSBzdHJpbmc7XG5cbmludGVyZmFjZSBBZGRSb3dBY3Rpb24ge1xuICB0eXBlOiBBY3Rpb25UeXBlLmFkZFJvdyxcbn1cblxuaW50ZXJmYWNlIFJlc2V0VmFsdWVzQWN0aW9uIHtcbiAgdHlwZTogQWN0aW9uVHlwZS5yZXNldCxcbn1cblxuaW50ZXJmYWNlIFVwZGF0ZVBvaW50QWN0aW9uIHtcbiAgdHlwZTogQWN0aW9uVHlwZS51cGRhdGVQb2ludCxcbiAgcGF5bG9hZDoge1xuICAgIGlkOiBJZDtcbiAgICBwb2ludDogUG9pbnQ7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICB9XG59XG5cbmludGVyZmFjZSBVcGRhdGVSb3dBY3Rpb24ge1xuICB0eXBlOiBBY3Rpb25UeXBlLnJlb3JkZXJSb3dzLFxuICBwYXlsb2FkOiB7XG4gICAgb3JpZ2luRHJhZ2dlZDogV2F5cG9pbnRSb3dQcm9wcztcbiAgICBvcmlnaW5JbmRleDogbnVtYmVyO1xuICAgIHRhcmdldEluZGV4OiBudW1iZXI7ICAgIFxuICAgIHRhcmdldERyYWdnZWQ6IFdheXBvaW50Um93UHJvcHM7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUm93RmlsdGVyS2V5VHlwZSA9ICdzdG9wJyB8ICd0aXRsZSdcblxuaW50ZXJmYWNlIFVwZGF0ZUZpbHRlclZhbHVlQWN0aW9uIHtcbiAgdHlwZTogQWN0aW9uVHlwZS51cGRhdGVGaWx0ZXJWYWx1ZSxcbiAgcGF5bG9hZDoge1xuICAgIGtleTogUm93RmlsdGVyS2V5VHlwZSxcbiAgICB2YWx1ZTogYW55LFxuICAgIGlkOiBJZCxcbiAgfVxufVxuXG5pbnRlcmZhY2UgUmVtb3ZlUm93QWN0aW9uIHtcbiAgdHlwZTogQWN0aW9uVHlwZS5yZW1vdmVSb3csXG4gIHBheWxvYWQ6IHtcbiAgICBpZDogSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uUHJvcHMgPSBVcGRhdGVQb2ludEFjdGlvbiB8IFVwZGF0ZVJvd0FjdGlvbiB8IEFkZFJvd0FjdGlvbiBcbiAgfCBVcGRhdGVGaWx0ZXJWYWx1ZUFjdGlvbiB8IFJlbW92ZVJvd0FjdGlvbiB8IFJlc2V0VmFsdWVzQWN0aW9uXG5cbmV4cG9ydCBjb25zdCB3YXlwb2ludExpc3RSZWR1Y2VyID0gKHN0YXRlOiBXYXlwb2ludFJvd1Byb3BzW10sIGFjdGlvbjogQWN0aW9uUHJvcHMpID0+IHtcblxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGUudXBkYXRlUG9pbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCwgcG9pbnQsIGFkZHJlc3MsXG4gICAgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgY29uc3Qge1xuICAgICAgbGF0aXR1ZGUsIGxvbmdpdHVkZVxuICAgIH0gPSBwb2ludFxuXG4gICAgY29uc3QgaW5kZXggPSBzdGF0ZS5maW5kSW5kZXgoZ2V0SW5kZXhJbkxpc3QoaWQpKVxuICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXVxuXG4gICAgbmV3U3RhdGVbaW5kZXhdID0geyBcbiAgICAgIC4uLm5ld1N0YXRlW2luZGV4XSxcbiAgICAgIGxhdDogbGF0aXR1ZGUsXG4gICAgICBsb246IGxvbmdpdHVkZSxcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgfVxuICAgIHJldHVybiBuZXdTdGF0ZVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlLnJlb3JkZXJSb3dzKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3JpZ2luRHJhZ2dlZCwgdGFyZ2V0SW5kZXgsIG9yaWdpbkluZGV4LFxuICAgIH0gPSBhY3Rpb24ucGF5bG9hZFxuXG4gICAgY29uc3QgbmV3V2F5cG9pbnRMaXN0ID0gWy4uLnN0YXRlXVxuXG4gICAgbmV3V2F5cG9pbnRMaXN0LnNwbGljZShvcmlnaW5JbmRleCwgMSlcbiAgICBuZXdXYXlwb2ludExpc3Quc3BsaWNlKHRhcmdldEluZGV4LCAwLCBvcmlnaW5EcmFnZ2VkKVxuXG4gICAgY29uc3QgdXBkYXRlZFdheXBvaW50TGlzdCA9IG5ld1dheXBvaW50TGlzdC5tYXAoKHdheXBvaW50LCBpbmRleCkgPT4gKHtcbiAgICAgIC4uLndheXBvaW50LFxuICAgICAgaW5kZXg6IGluZGV4ICsgMSxcbiAgICB9KSlcblxuICAgIHJldHVybiB1cGRhdGVkV2F5cG9pbnRMaXN0XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGUuYWRkUm93KSB7XG4gICAgcmV0dXJuIFsuLi5zdGF0ZSwgV2F5cG9pbnRSb3dDb25zdHJ1Y3RvcihzdGF0ZS5sZW5ndGgpXVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlLnVwZGF0ZUZpbHRlclZhbHVlKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsIGtleSwgdmFsdWUsXG4gICAgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KGdldEluZGV4SW5MaXN0KGlkKSlcbiAgICBjb25zdCBuZXdXYXlwb2ludExpc3QgPSBbLi4uc3RhdGVdXG4gICAgbmV3V2F5cG9pbnRMaXN0W2luZGV4XSA9IHsgLi4ubmV3V2F5cG9pbnRMaXN0W2luZGV4XSwgW2tleV06IHZhbHVlIH1cbiAgICByZXR1cm4gbmV3V2F5cG9pbnRMaXN0XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGUucmVtb3ZlUm93KSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IHN0YXRlLmZpbHRlcih3YXlwb2ludCA9PiB3YXlwb2ludC5pZCAhPT0gaWQpXG5cbiAgICByZXR1cm4gZmlsdGVyZWRTdGF0ZS5tYXAoKHdheXBvaW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbmV3V2F5cG9pbnQgPSB7Li4ud2F5cG9pbnR9XG4gICAgICBuZXdXYXlwb2ludC5pbmRleCA9IGluZGV4ICsgMVxuICAgICAgcmV0dXJuIG5ld1dheXBvaW50XG4gICAgfSlcbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZS5yZXNldCkge1xuICAgIHJldHVybiBJbml0aWFsV2F5cG9pbnRMaXN0Q29uc3RydWN0b3IoKVxuICB9XG59XG5cbmNvbnN0IGdldEluZGV4SW5MaXN0ID0gaWQgPT4ge1xuICByZXR1cm4gKGN1cnJTdGF0ZSkgPT4gaWQgPT09IGN1cnJTdGF0ZS5pZFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbW9kYWxEZWxldGVTdG9wUG9pbnRUaXRsZTogJ0JvcnJhIGVsIHB1bnQgZGUgcGFyYWRhJyxcbiAgbW9kYWxEZWxldGVTdG9wUG9pbnRCb2R5OiAnRXN0w6Agc2VndXIgcXVlIHZvbCBib3JyYXIgZWwgcHVudCBkZSBwYXMgbsO6bWVybyAnLFxuICBtb2RhbFJlc2V0U3RvcFZhbHVlc1RpdGxlOiAnTmV0ZWphciB2YWxvcnMuJyxcbiAgbW9kYWxSZXNldFN0b3BWYWx1ZXNCb2R5OiAnRXN0w6Agc2VndXIgZGUgcXVlIHZvbCBuZXRlamFyIGVscyB2YWxvcnMgZGVsIGZvcm11bGFyaSBpIGRlbCBtYXBhPycsXG59IiwiaW1wb3J0IHsgQ2FsY2l0ZUZsb3dJdGVtIH0gZnJvbSAnQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzLXJlYWN0J1xuaW1wb3J0IHtcbiAgUmVhY3QsIGhvb2tzLCBqc3gsXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmV4cG9ydCBjb25zdCBJbnRlcmVzdENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FsY2l0ZUZsb3dJdGVtXG4gICAgICBoZWFkaW5nPXt0cmFuc2xhdGUoJ2ludGVyZXN0UG9pbnRUaXRsZScpfVxuICAgICAgYmVmb3JlQmFjaz17cHJvcHMub25CYWNrVG9MaXN0fVxuICAgICAgbG9hZGluZz17ZmFsc2V9XG4gICAgPlxuICAgICAgaGV5MlxuICAgIDwvQ2FsY2l0ZUZsb3dJdGVtPlxuICApXG59IiwiaW1wb3J0IHtcbiAgUmVhY3QsIGhvb2tzLCB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3gsXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IExvYWRpbmcsIExvYWRpbmdUeXBlLCBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuZXhwb3J0IGNvbnN0IERhdGFMb2FkaW5nID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3QgeyB1cGxvYWRpbmdGaWxlSW5mbywgb25GaWxlQ2FuY2VsIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd1cGxvYWQtbG9hZGluZy1jb250YWluZXInIHRpdGxlPXt0cmFuc2xhdGUoJ2ZpbGVJc1VwbG9hZGluZycsIHsgZmlsZU5hbWU6IHVwbG9hZGluZ0ZpbGVJbmZvLmN1cnJlbnQ/Lm5hbWUgfSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3VwbG9hZC1sb2FkaW5nLWNvbnRlbnQnPlxuICAgICAgICA8TG9hZGluZyBjbGFzc05hbWU9J3VwbG9hZC1sb2FkaW5nJyB0eXBlPXtMb2FkaW5nVHlwZS5QcmltYXJ5fSB3aWR0aD17MzB9IGhlaWdodD17Mjh9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cGxvYWQtbG9hZGluZy1maWxlLW5hbWUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgZm9udC0xNCB0ZXh0LWNlbnRlcic+e1xuICAgICAgICAgICAgdHJhbnNsYXRlKCdmaWxlSXNVcGxvYWRpbmcnLCB7IGZpbGVOYW1lOiA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgbXVsdGlwbGUtbGluZXMtdHJ1bmNhdGUgZm9udC0xNic+e3VwbG9hZGluZ0ZpbGVJbmZvLmN1cnJlbnQ/Lm5hbWV9PC9kaXY+IH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VwbG9hZC1sb2FkaW5nLWJ0biBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPSdkYW5nZXInIG9uQ2xpY2s9e29uRmlsZUNhbmNlbH0+e3RyYW5zbGF0ZSgnY2FuY2VsJyl9PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iLCJpbXBvcnQgeyBSZWFjdCwgaG9va3MsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGpzeCxcbiBkZWZhdWx0TWVzc2FnZXMgYXMgamltdUNvcmVNZXNzYWdlc30gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSU1lc3NhZ2VzLCBQb3BwZXIsIFBhbmVsSGVhZGVyIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSAnamltdS11aS9iYXNpYy9jb2xvci1waWNrZXInXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vcG9wcGVyLmNzcydcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBFZGl0TGF5ZXJzRm9ybVByb3BzLCBHZW9KU09OVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgRWRpdExheWVyc0Zvcm0gPSAocHJvcHMgOiBFZGl0TGF5ZXJzRm9ybVByb3BzKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGppbXVVSU1lc3NhZ2VzLCBqaW11Q29yZU1lc3NhZ2VzLCBkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IHsgXG4gICAgaXNPcGVuLCB0b2dnbGVQb3BwZXIsIGN1cnJlbnRFZGl0R2VvbWV0cnksXG4gICAgcG9wcGVyUmVmZXJlbmNlLCBjdXJyZW50TGF5ZXIgXG4gIH0gPSBwcm9wc1xuICBcbiAgY29uc3QgcmVuZGVyZWRGb3JtID0gKCkgPT4ge1xuICAgIHN3aXRjaChjdXJyZW50RWRpdEdlb21ldHJ5KSB7XG4gICAgICBjYXNlIEdlb0pTT05UeXBlLnBvaW50OlxuICAgICAgICByZXR1cm4gPFBvaW50RWRpdFN0eWxlRm9ybSBjdXJyZW50TGF5ZXI9e2N1cnJlbnRMYXllcn0gY3VycmVudEVkaXRHZW9tZXRyeT17Y3VycmVudEVkaXRHZW9tZXRyeX0+PC9Qb2ludEVkaXRTdHlsZUZvcm0+XG4gICAgICBjYXNlIEdlb0pTT05UeXBlLnBvbHlnb246XG4gICAgICAgIHJldHVybiA8UG9seWdvbkVkaXRTdHlsZUZvcm0gY3VycmVudExheWVyPXtjdXJyZW50TGF5ZXJ9PjwvUG9seWdvbkVkaXRTdHlsZUZvcm0+XG4gICAgICBjYXNlIEdlb0pTT05UeXBlLnBvbHlsaW5lOlxuICAgICAgICByZXR1cm4gPExpbmVFZGl0U3R5bGVGb3JtIGN1cnJlbnRMYXllcj17Y3VycmVudExheWVyfT48L0xpbmVFZGl0U3R5bGVGb3JtPlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+QXF1ZXN0YSBnZW9tZXRyaWEgbm8gdMOpIHVuIGZvcm11bGFyaSBhc3NpZ25hdDwvZGl2PlxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8UG9wcGVyIG9wZW49e2lzT3Blbn0gdG9nZ2xlPXt0b2dnbGVQb3BwZXJ9IHJlZmVyZW5jZT17cG9wcGVyUmVmZXJlbmNlfSBcbiAgICBwbGFjZW1lbnQ9J3JpZ2h0LXN0YXJ0JyBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2FkZERhdGEnKX0gY2xhc3NOYW1lPSdnZW9wcm9jZXNzb3ItY2FkLWxheWVyLXN0eWxlLXBvcHBlcic+XG4gICAgICB7LyogRXN0aWxzIGEgbCdhcnhpdSBwb3BwZXIuY3NzICovfVxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMjQwcHgnLCBoZWlnaHQ6ICcyMzBweCd9fT5cbiAgICAgICAgPFBhbmVsSGVhZGVyIHNob3dDbG9zZT17dHJ1ZX0gb25DbG9zZT17KCkgPT4gdG9nZ2xlUG9wcGVyKGN1cnJlbnRMYXllciwgY3VycmVudEVkaXRHZW9tZXRyeSl9IFxuICAgICAgICBsZXZlbD17MX0gY2xhc3NOYW1lPSdwLTQnIHRpdGxlPXt0cmFuc2xhdGUoXCJhZGRTdHlsZXNcIil9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGQtZGF0YS1wb3BwZXItY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtZmlsZS11cGxvYWQgdy0xMDAgaC0xMDAgcGItNCBwdC02IHB4LTQnPlxuICAgICAgICAgICAge3JlbmRlcmVkRm9ybSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUG9wcGVyPlxuICApXG59XG5cbmNvbnN0IExpbmVFZGl0U3R5bGVGb3JtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3Qge2N1cnJlbnRMYXllcn0gPSBwcm9wc1xuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KGN1cnJlbnRMYXllci5yZW5kZXJlci5zeW1ib2wud2lkdGgpXG4gIGNvbnN0IGhhbmRsZVNpemUgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNpemUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICBzZXRTaXplKHNpemUpXG4gICAgY3VycmVudExheWVyLnJlbmRlcmVyLnN5bWJvbC53aWR0aCA9IHNpemVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb2xvclBpY2tlcklucHV0IGN1cnJlbnRMYXllcj17Y3VycmVudExheWVyfVxuICAgICAgICBjaGFuZ2VDb2xvckNhbGxiYWNrPXsoc2VsZWN0ZWRDb2xvcikgPT4ge2N1cnJlbnRMYXllci5yZW5kZXJlci5zeW1ib2wuY29sb3IgPSBzZWxlY3RlZENvbG9yfX0+XG4gICAgICAgIHt0cmFuc2xhdGUoJ2NvbG9yJyl9OiBcbiAgICAgIDwvQ29sb3JQaWNrZXJJbnB1dD5cbiAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAnMTBweCd9fT5cbiAgICAgICAge3RyYW5zbGF0ZSgndGhpY2tuZXNzJyl9OiBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBzdHlsZT17e3dpZHRoOiBcIjQwcHhcIiwgbGVmdDogJzc3JScsIHBvc2l0aW9uOiAnZml4ZWQnfX0gbWluPVwiMFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNpemV9IHZhbHVlPXtzaXplfSBzdGVwPVwiMC4xXCIvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgUG9pbnRFZGl0U3R5bGVGb3JtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3Qge2N1cnJlbnRMYXllciwgY3VycmVudEVkaXRHZW9tZXRyeX0gPSBwcm9wc1xuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oY3VycmVudExheWVyLnJlbmRlcmVyLnN5bWJvbC5zdHlsZSlcbiAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGU8c3RyaW5nPihjdXJyZW50TGF5ZXIucmVuZGVyZXIuc3ltYm9sLnNpemUpXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVJY29uQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgOiB2b2lkID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEljb24gPSBldmVudC50YXJnZXQudmFsdWVcbiAgICBzZXRTZWxlY3RlZE9wdGlvbihzZWxlY3RlZEljb24pXG4gICAgY3VycmVudExheWVyLnJlbmRlcmVyLnN5bWJvbC5zdHlsZSA9IHNlbGVjdGVkSWNvblxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2l6ZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIDogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHNldFNpemUoc2l6ZSlcbiAgICBjdXJyZW50TGF5ZXIucmVuZGVyZXIuc3ltYm9sLnNpemUgPSBzaXplXG4gIH1cblxuICBjb25zdCBoYW5kbGVUb2dnbGVBcHBlYXIgPSAoZXY6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBjaGVja2VkVmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICBjdXJyZW50TGF5ZXIucmVuZGVyZXIuc3ltYm9sLnNpemUgPSBjaGVja2VkVmFsdWUgPyAwIDogc2l6ZVxuICAgIHNldENoZWNrZWQoY2hlY2tlZFZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmdCb3R0b206JzIwcHgnfX0+XG4gICAgICAgIHt0cmFuc2xhdGUoJ2ljb24nKX0gXG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgZGlzcGxheTogJ2ZsZXgnLCBsZWZ0OiAnMjglJ319PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJjaXJjbGVcIiBuYW1lPVwib3B0aW9uc1wiIGhpZGRlbiBcbiAgICAgICAgICAgICAgdmFsdWU9XCJjaXJjbGVcIiBjaGVja2VkPXtzZWxlY3RlZE9wdGlvbiA9PT0gXCJjaXJjbGVcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUljb25DaGFuZ2V9IGNsYXNzTmFtZT1cImN1c3RvbS1yYWRpby1pY29uXCIvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaXJjbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxjYWxjaXRlLWljb24gaWNvbj1cImNpcmNsZS1hcmVhXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImNyb3NzXCIgbmFtZT1cIm9wdGlvbnNcIiBoaWRkZW4gXG4gICAgICAgICAgICAgIHZhbHVlPVwiY3Jvc3NcIiBjaGVja2VkPXtzZWxlY3RlZE9wdGlvbiA9PT0gXCJjcm9zc1wifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSWNvbkNoYW5nZX0gY2xhc3NOYW1lPVwiY3VzdG9tLXJhZGlvLWljb25cIi8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNyb3NzXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPlxuICAgICAgICAgICAgICA8Y2FsY2l0ZS1pY29uIGljb249XCJwbHVzXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImRpYW1vbmRcIiBuYW1lPVwib3B0aW9uc1wiIGhpZGRlblxuICAgICAgICAgICAgICB2YWx1ZT1cImRpYW1vbmRcIiBjaGVja2VkPXtzZWxlY3RlZE9wdGlvbiA9PT0gXCJkaWFtb25kXCJ9IFxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSWNvbkNoYW5nZX0gY2xhc3NOYW1lPVwiY3VzdG9tLXJhZGlvLWljb25cIi8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpYW1vbmRcIiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxjYWxjaXRlLWljb24gaWNvbj1cImRpYW1vbmRcIiAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzcXVhcmVcIiBuYW1lPVwib3B0aW9uc1wiIGhpZGRlbiBcbiAgICAgICAgICAgICAgdmFsdWU9XCJzcXVhcmVcIiBjaGVja2VkPXtzZWxlY3RlZE9wdGlvbiA9PT0gXCJzcXVhcmVcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUljb25DaGFuZ2V9IGNsYXNzTmFtZT1cImN1c3RvbS1yYWRpby1pY29uXCIvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzcXVhcmVcIiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxjYWxjaXRlLWljb24gaWNvbj1cInNxdWFyZS1mXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRyaWFuZ2xlXCIgbmFtZT1cIm9wdGlvbnNcIiBoaWRkZW4gXG4gICAgICAgICAgICAgIHZhbHVlPVwidHJpYW5nbGVcIiBjaGVja2VkPXtzZWxlY3RlZE9wdGlvbiA9PT0gXCJ0cmlhbmdsZVwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSWNvbkNoYW5nZX0gY2xhc3NOYW1lPVwiY3VzdG9tLXJhZGlvLWljb25cIi8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRyaWFuZ2xlXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPlxuICAgICAgICAgICAgICA8Y2FsY2l0ZS1pY29uIGljb249XCJ0cmlhbmdsZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ4XCIgbmFtZT1cIm9wdGlvbnNcIiBoaWRkZW4gXG4gICAgICAgICAgICAgIHZhbHVlPVwieFwiIGNoZWNrZWQ9e3NlbGVjdGVkT3B0aW9uID09PSBcInhcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUljb25DaGFuZ2V9IGNsYXNzTmFtZT1cImN1c3RvbS1yYWRpby1pY29uXCIvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ4XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPlxuICAgICAgICAgICAgICA8Y2FsY2l0ZS1pY29uIGljb249XCJ4XCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29sb3JQaWNrZXJJbnB1dCBjdXJyZW50TGF5ZXI9e2N1cnJlbnRMYXllcn1cbiAgICAgICAgY2hhbmdlQ29sb3JDYWxsYmFjaz17KHNlbGVjdGVkQ29sb3IpID0+IHtjdXJyZW50TGF5ZXIucmVuZGVyZXIuc3ltYm9sLmNvbG9yID0gc2VsZWN0ZWRDb2xvcn19PlxuICAgICAgICB7dHJhbnNsYXRlKCdjb2xvcicpfVxuICAgICAgPC9Db2xvclBpY2tlcklucHV0PlxuICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzIwcHgnfX0+XG4gICAgICAgIHt0cmFuc2xhdGUoJ3NpemUnKX1cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2l6ZX0gdmFsdWU9e3NpemV9XG4gICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzc3JScsIHdpZHRoOiBcIjQwcHhcIn19Lz5cbiAgICAgIDwvZGl2PlxuICAgICAge1xuICAgICAgICBjdXJyZW50RWRpdEdlb21ldHJ5ID09PSBcIkpTT05fQU5OT1RBVElPTlwiICYmIFxuICAgICAgICA8PlxuICAgICAgICAgIDxTd2l0Y2ggb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZUFwcGVhcn0gY2hlY2tlZD17Y2hlY2tlZH0gLz4ge3RyYW5zbGF0ZShcIm5vU3ltYm9sXCIpfVxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBQb2x5Z29uRWRpdFN0eWxlRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IHtjdXJyZW50TGF5ZXJ9ID0gcHJvcHNcbiAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGU8c3RyaW5nPihjdXJyZW50TGF5ZXIucmVuZGVyZXIuc3ltYm9sLm91dGxpbmUud2lkdGgpXG4gIGNvbnN0IGhhbmRsZVNpemUgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNpemUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICBzZXRTaXplKHNpemUpXG4gICAgY3VycmVudExheWVyLnJlbmRlcmVyLnN5bWJvbC5vdXRsaW5lLndpZHRoID0gc2l6ZVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbG9yUGlja2VySW5wdXQgY3VycmVudExheWVyPXtjdXJyZW50TGF5ZXJ9XG4gICAgICAgIGNoYW5nZUNvbG9yQ2FsbGJhY2s9eyhzZWxlY3RlZENvbG9yKSA9PiB7Y3VycmVudExheWVyLnJlbmRlcmVyLnN5bWJvbC5vdXRsaW5lLmNvbG9yID0gc2VsZWN0ZWRDb2xvcn19PlxuICAgICAgICB7dHJhbnNsYXRlKCdvdXRsaW5lQ29sb3InKX06IFxuICAgICAgPC9Db2xvclBpY2tlcklucHV0PlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgcGFkZGluZ0JvdHRvbTogJzIwcHgnLCBwYWRkaW5nVG9wOiAnMTBweCcsIHZlcnRpY2FsQWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgIHt0cmFuc2xhdGUoJ3RoaWNrbmVzcycpfTogXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgc3R5bGU9e3t3aWR0aDogXCI0MHB4XCIsIHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAnNzclJ319IG1pbj1cIjBcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTaXplfSB2YWx1ZT17c2l6ZX0gc3RlcD1cIjAuMVwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbG9yUGlja2VySW5wdXQgY3VycmVudExheWVyPXtjdXJyZW50TGF5ZXJ9XG4gICAgICAgIGNoYW5nZUNvbG9yQ2FsbGJhY2s9eyhzZWxlY3RlZENvbG9yKSA9PiB7Y3VycmVudExheWVyLnJlbmRlcmVyLnN5bWJvbC5jb2xvciA9IHNlbGVjdGVkQ29sb3J9fT5cbiAgICAgICAge3RyYW5zbGF0ZSgnaW5zaWRlQ29sb3InKX06IFxuICAgICAgPC9Db2xvclBpY2tlcklucHV0PlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IENvbG9yUGlja2VySW5wdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjdXJyZW50TGF5ZXIsIGNoYW5nZUNvbG9yQ2FsbGJhY2ssIGNoaWxkcmVuIH0gPSBwcm9wc1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oY3VycmVudExheWVyLnJlbmRlcmVyLnN5bWJvbC5jb2xvci50b0hleCgpKVxuXG4gIGNvbnN0IGhhbmRsZUNvbG9yQ2hhbmdlID0gKHNlbGVjdGVkQ29sb3IgOiBzdHJpbmcpIDogdm9pZCA9PiB7XG4gICAgc2V0Q29sb3Ioc2VsZWN0ZWRDb2xvcilcbiAgICBjaGFuZ2VDb2xvckNhbGxiYWNrKHNlbGVjdGVkQ29sb3IpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZ0JvdHRvbTogJzhweCd9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxDb2xvclBpY2tlciBjb2xvcj17Y29sb3J9IHdpZHRoPXszMH0gaGVpZ2h0PXszMH1cbiAgICAgICAgcGxhY2VtZW50PVwiYXV0by1zdGFydFwiIG9uQ2hhbmdlPXtoYW5kbGVDb2xvckNoYW5nZX1cbiAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ2ZpeGVkJywgbGVmdDogJzgxJSd9fVxuICAgICAgICA+PC9Db2xvclBpY2tlcj5cbiAgICA8L2Rpdj5cbiAgKVxufSIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBcbiAgSW1tdXRhYmxlLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdUNvcmVNZXNzYWdlcywgXG4gIGRhdGFTb3VyY2VVdGlscywgXG4gIHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgaG9va3MgXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEJ1dHRvbiwgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSU1lc3NhZ2VzLFxuICBJY29uIFxufSBmcm9tICdqaW11LXVpJ1xuXG5pbXBvcnQgeyBUcmFzaE91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdHJhc2gnXG5pbXBvcnQgeyBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ2ppbXUtdGhlbWUnXG5jb25zdCB7IHVzZU1lbW8gfSA9IFJlYWN0XG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmludGVyZmFjZSBMYXllckxpc3RQcm9wcyB7XG4gIG11bHRpRGF0YU9wdGlvbnM6IGFueTtcbiAgb25SZW1vdmVEYXRhOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgdG9nZ2xlUG9wcGVyTGF5ZXJTdHlsZTogKGN1cnJlbnRMYXllciwgZ2VvbWV0cnlUeXBlKSA9PiB2b2lkO1xuICBoYXNoZWRMYXllckxpc3Q6IHt9XG59XG5cbmV4cG9ydCBjb25zdCBMYXllckxpc3QgPSAocHJvcHM6IExheWVyTGlzdFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbXVsdGlEYXRhT3B0aW9ucywgb25SZW1vdmVEYXRhLCBcbiAgICB0b2dnbGVQb3BwZXJMYXllclN0eWxlLCBoYXNoZWRMYXllckxpc3RcbiAgfSA9IHByb3BzXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGppbXVVSU1lc3NhZ2VzLCBqaW11Q29yZU1lc3NhZ2VzLCBkZWZhdWx0TWVzc2FnZXMpXG5cbiAgY29uc3QgdGhlbWUgOiBJTVRoZW1lVmFyaWFibGVzID0gdXNlVGhlbWUoKVxuICBjb25zdCBkYXRhTGlzdFN0eWxlID0gdXNlRGF0YUxpc3RTdHlsZSh0aGVtZSlcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2dlb3Byb2Nlc3MtY2FkLXdpZGdldC1kYXRhLWxpc3QnIGNzcz17ZGF0YUxpc3RTdHlsZX0gcm9sZT1cImxpc3RcIj5cbiAgICB7XG4gICAgICBtdWx0aURhdGFPcHRpb25zLm1hcCgoZGF0YU9wdGlvbnMsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc2hJZCA9IGRhdGFPcHRpb25zLmRhdGFTb3VyY2VKc29uLmlkXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IGhhc2hlZExheWVyTGlzdFtoYXNoSWRdXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZGF0YU9wdGlvbnMuZGF0YVNvdXJjZUpzb24ubGFiZWwgfHwgZGF0YU9wdGlvbnMuZGF0YVNvdXJjZUpzb24uc291cmNlTGFiZWxcbiAgICAgICAgY29uc3QgZmlsZVR5cGUgPSBkYXRhT3B0aW9ucy5kYXRhU291cmNlSnNvbi50eXBlXG4gICAgICAgIGNvbnN0IGlzQW5ub3RhdGlvbiA9IGRhdGFPcHRpb25zLmRhdGFTb3VyY2VKc29uLmdlb1R5cGUgPT09IFwiSlNPTl9BTk5PVEFUSU9OXCJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnlUeXBlID0gaXNBbm5vdGF0aW9uID8gdHJhbnNsYXRlKFwiQW5ub3RhdGlvblwiKSA6IHRyYW5zbGF0ZShkYXRhT3B0aW9ucy5kYXRhU291cmNlSnNvbi5nZW9tZXRyeVR5cGUpIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17aGFzaElkfSBcbiAgICAgICAgICBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgZGF0YS1pdGVtIHB0LTMnIFxuICAgICAgICAgIHJvbGU9XCJsaXN0aXRlbVwiIGFyaWEtbGFiZWw9e2xhYmVsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1ncm93LTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3Jvdy0xIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInIHRpdGxlPXsna21sJ30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXNocmluay0wIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBnZW9wcm9jZXNzLWNhZC1kYXRhLXRodW1ibmFpbCc+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj17ZGF0YVNvdXJjZVV0aWxzLmdldERzSWNvbihJbW11dGFibGUoZGF0YU9wdGlvbnMuZGF0YVNvdXJjZUpzb24pKX0gY29sb3I9JyNGRkZGRkYnIHNpemU9JzEyJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3Jvdy0xIGRhdGEtbGFiZWwgcGwtMicgdGl0bGU9e2Ake2xhYmVsfS4ke2ZpbGVUeXBlfSAtICR7Z2VvbWV0cnlUeXBlfWB9PlxuICAgICAgICAgICAgICAgIHsgYCR7bGFiZWx9LiR7ZmlsZVR5cGV9IC0gJHtnZW9tZXRyeVR5cGV9YH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1zaHJpbmstMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBhbGlnbi1pdGVtcy1jZW50ZXIgZGF0YS1pdGVtLW9wZXJhdGlvbnMnPlxuICAgICAgICAgICAgeyFpc0Fubm90YXRpb24gJiYgPEJ1dHRvbiBjbGFzc05hbWU9J2ppbXUtb3V0bGluZS1pbnNpZGUnIHR5cGU9J3RlcnRpYXJ5JyBzaXplPSdzbScgaWNvbiBcbiAgICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZSgnZWRpdExheWVyU3R5bGVzJyl9IGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnZWRpdExheWVyU3R5bGVzJyl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBvcHBlckxheWVyU3R5bGUoY3VycmVudExheWVyLCBkYXRhT3B0aW9ucy5kYXRhU291cmNlSnNvbi5nZW9UeXBlKX0+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgc2l6ZT0nbScgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdqaW11LW91dGxpbmUtaW5zaWRlJyB0eXBlPSd0ZXJ0aWFyeScgc2l6ZT0nc20nIGljb24gXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgb25SZW1vdmVEYXRhKGN1cnJlbnRMYXllcikgfX0gXG4gICAgICAgICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoJ3JlbW92ZUxheWVyJyl9IGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgncmVtb3ZlTGF5ZXInKX0+XG4gICAgICAgICAgICAgIDxUcmFzaE91dGxpbmVkIHNpemU9J20nIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgfSlcbiAgICB9XG4gIDwvZGl2PlxufVxuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzVweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIC5nZW9wcm9jZXNzLWNhZC13aWRnZXQtZGF0YS1saXN0IC5kYXRhLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmdlb3Byb2Nlc3MtY2FkLXdpZGdldC1kYXRhLWxpc3QgLmRhdGEtaXRlbS1sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDk1REI7XG4gIH1cbiAgLmdlb3Byb2Nlc3MtY2FkLWRhdGEtdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogIDI2cHg7XG4gICAgaGVpZ2h0OiAgMjZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NURCO1xuICB9XG4gIC5nZW9wcm9jZXNzLWNhZC13aWRnZXQtZGF0YS1saXN0IC5kYXRhLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLWRhcmstODAwKTtcbiAgfVxuYFxuXG5jb25zdCB1c2VEYXRhTGlzdFN0eWxlID0gKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIC8vIGFkZCBpbnNpZGUgb3V0bGluZSBzdHlsZSB0byBkYXRhIGFjdGlvbiBkcm9wZG93biBidXR0b24gdG8gYXZvaWQgY3V0IG9mZiBvZiBmb2N1cyByaW5nXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGNzc2BcbiAgICAke3N0eWxlfVxuICAgIC5nZW9wcm9jZXNzLWNhZC13aWRnZXQtZGF0YS1saXN0IC5kYXRhLWl0ZW0tb3BlcmF0aW9ucyAuZGF0YS1hY3Rpb24tZHJvcGRvd24gLmRhdGEtYWN0aW9uLWJ1dHRvbntcbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmZvY3VzLXZpc2libGUge1xuICAgICAgICBvdXRsaW5lLW9mZnNldDogLSR7dGhlbWUuZm9jdXNlZFN0eWxlcz8ub2Zmc2V0fTtcbiAgICAgIH1cbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIGAsIFt0aGVtZS5mb2N1c2VkU3R5bGVzPy5vZmZzZXRdKVxufVxuIiwiaW1wb3J0IHtcbiAgUmVhY3QsIGhvb2tzLCBqc3gsIGluZGV4ZWREQlV0aWxzLFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgKiBhcyBnZW9wcm9jZXNzb3IgZnJvbSBcIkBhcmNnaXMvY29yZS9yZXN0L2dlb3Byb2Nlc3Nvci5qc1wiO1xuaW1wb3J0IGVzcmlSZXF1ZXN0IGZyb20gXCJAYXJjZ2lzL2NvcmUvcmVxdWVzdC5qc1wiO1xuaW1wb3J0IHsgQ2FsY2l0ZUZsb3dJdGVtIH0gZnJvbSAnQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzLXJlYWN0J1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuaW1wb3J0IGRlZmF1bHRUZXh0IGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuaW1wb3J0IHsgRGF0YU9wdGlvbnMsIEZpbGVJbmZvLCBHZW9KU09OVHlwZSB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVtcHR5T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2VtcHR5J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFVwbG9hZEZpbGVGb3JtIH0gZnJvbSAnLi9VcGxvYWRGaWxlRm9ybSdcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgaW1wb3J0ZWRGaWxlVG9Kc29uVXJsLCBpbXBvcnRGaWxlVXJsIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgeyBMYXllckxpc3QgfSBmcm9tICcuL0xheWVyTGlzdCc7XG5pbXBvcnQgeyBFZGl0TGF5ZXJzRm9ybSB9IGZyb20gJy4vRWRpdExheWVyc0Zvcm0nO1xuaW1wb3J0IHsgTWFwQ29udGV4dCwgUm91dGVFZGl0aW9uQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5pbnRlcmZhY2UgUHJvamVjdGlvblZhbHVlcyB7XG4gIHdraWQ6IG51bWJlcjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE1hbnVhbFJvdXRlQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBnZXRBbmREcmF3TWFwTGF5ZXJzLCBqaW11TWFwVmlldyxcbiAgfSA9IHVzZUNvbnRleHQoTWFwQ29udGV4dClcblxuICBjb25zdCB7XG4gICAgd2lkZ2V0SWQsXG4gIH0gPSB1c2VDb250ZXh0KFJvdXRlRWRpdGlvbkNvbnRleHQpXG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBbY3VycmVudExheWVyLCBzZXRDdXJyZW50TGF5ZXJdID0gdXNlU3RhdGU8RmVhdHVyZUxheWVyPihudWxsKVxuICBjb25zdCBbaXNPcGVuTGF5ZXJTdHlsZSwgc2V0SXNPcGVuTGF5ZXJTdHlsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzLCBkZWZhdWx0VGV4dClcbiAgY29uc3QgW2lzT3BlbkZvcm0sIHNldElzT3BlbkZvcm1dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtmaWxlT3B0aW9ucywgc2V0RmlsZU9wdGlvbnNdID0gdXNlU3RhdGU8RmlsZUluZm8+KG51bGwpXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihudWxsKVxuICBjb25zdCBbY3VycmVudEVkaXRHZW9tZXRyeSwgc2V0Q3VycmVudEVkaXRHZW9tZXRyeV0gPSB1c2VTdGF0ZTxHZW9KU09OVHlwZT4obnVsbClcbiAgY29uc3QgW2hhc2hlZExheWVyTGlzdCwgc2V0SGFzaGVkTGF5ZXJMaXN0XSA9IHVzZVN0YXRlPEZlYXR1cmVMYXllcltdPihudWxsKVxuICBjb25zdCBbbXVsdGlEYXRhT3B0aW9ucywgc2V0TXVsdGlEYXRhT3B0aW9uc10gPSB1c2VTdGF0ZTxEYXRhT3B0aW9uc1tdPihbXSlcblxuICBjb25zdCByb290RG9tUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBhZGREYXRhQnV0dG9uUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PigpXG4gIGNvbnN0IHVwbG9hZGluZ0ZpbGVJbmZvID0gdXNlUmVmPEZpbGVJbmZvPihudWxsKVxuICBjb25zdCBjYWNoZSA9IHVzZVJlZjxpbmRleGVkREJVdGlscy5JbmRleGVkREJDYWNoZT4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEluaXQgaW5kZXhlZCBEQiBhbmQgc2V0IGNhY2hlZCBkYXRhIHRvIHN0YXRlLlxuICAgIGNhY2hlLmN1cnJlbnQgPSBuZXcgaW5kZXhlZERCVXRpbHMuSW5kZXhlZERCQ2FjaGUod2lkZ2V0SWQsICdhZGQtZGF0YScsICdhZGRlZC1kYXRhJylcbiAgICBjYWNoZS5jdXJyZW50LmluaXQoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGNhY2hlZERhdGFPcHRpb25zID0gYXdhaXQgY2FjaGUuY3VycmVudC5nZXRBbGwoKVxuICAgICAgLy8gaWYgKGNhY2hlZERhdGFPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICAvLyAgIGNyZWF0ZURhdGFTb3VyY2VzQnlEYXRhT3B0aW9ucyhjYWNoZWREYXRhT3B0aW9ucywgd2lkZ2V0SWQpLmNhdGNoKGVyciA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBkYXRhIHNvdXJjZScsIGVycilcbiAgICAgIC8vICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICBzZXRNdWx0aURhdGFPcHRpb25zKGNhY2hlZERhdGFPcHRpb25zLnNvcnQoKGQxLCBkMikgPT4gZDEub3JkZXIgLSBkMi5vcmRlcikpXG4gICAgICAvLyB9XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byByZWFkIGNhY2hlLicsIGVycilcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHsgY2FjaGUuY3VycmVudC5jbG9zZSgpIH1cbiAgfSwgW3dpZGdldElkXSlcblxuICBjb25zdCB0b2dnbGVQb3BwZXJGb3JtID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG5ld0lzT3BlbiA9ICFpc09wZW5Gb3JtXG4gICAgc2V0SXNPcGVuRm9ybShuZXdJc09wZW4pXG4gICAgLy8gQWwgdGFuY2FyIGVsIHBvcHBlciBmZW0gdW4gcmVzZXQgZGUgZGFkZXMuXG4gICAgaWYgKCFuZXdJc09wZW4pIHtcbiAgICAgIGlmIChhZGREYXRhQnV0dG9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgYWRkRGF0YUJ1dHRvblJlZi5jdXJyZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdmVVcGxvYWRlZEZpbGVGb3JtID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldEZpbGVPcHRpb25zKG51bGwpXG4gIH1cblxuICBjb25zdCBnZXRQcm9qZWN0aW9uVmFsdWVzID0gKHJhd1Byb2plY3Rpb246IHN0cmluZyk6IFByb2plY3Rpb25WYWx1ZXMgPT4ge1xuICAgIGNvbnN0IGlzV2tpZCA9ICFyYXdQcm9qZWN0aW9uLmluY2x1ZGVzKFwifFwiKVxuXG4gICAgY29uc3QgcHJvamVjdGlvblBhcnRzID0gcmF3UHJvamVjdGlvbi5zcGxpdChcInxcIilcbiAgICByZXR1cm4ge1xuICAgICAgd2tpZDogaXNXa2lkID8gTnVtYmVyKHJhd1Byb2plY3Rpb24pIDogTnVtYmVyKHByb2plY3Rpb25QYXJ0c1swXS50cmltKCkpLFxuICAgICAgZGVzY3JpcHRpb246IGlzV2tpZCA/IHJhd1Byb2plY3Rpb24udG9TdHJpbmcoKSA6IHByb2plY3Rpb25QYXJ0c1sxXS50cmltKClcbiAgICB9XG4gIH1cblxuICBjb25zdCB0b2dnbGVQb3BwZXJMYXllclN0eWxlID0gKGN1cnJlbnRMYXllcjogRmVhdHVyZUxheWVyLCBnZW9tZXRyeVR5cGU6IEdlb0pTT05UeXBlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbmV3SXNPcGVuID0gIWlzT3BlbkxheWVyU3R5bGVcbiAgICBzZXRJc09wZW5MYXllclN0eWxlKG5ld0lzT3BlbilcbiAgICBzZXRDdXJyZW50TGF5ZXIobmV3SXNPcGVuID8gY3VycmVudExheWVyIDogbnVsbClcbiAgICBzZXRDdXJyZW50RWRpdEdlb21ldHJ5KG5ld0lzT3BlbiA/IGdlb21ldHJ5VHlwZSA6IG51bGwpXG4gIH1cblxuICBjb25zdCBvblJlbW92ZURhdGEgPSAoY3VycmVudExheWVyOiBhbnkpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBjdXJyZW50TGF5ZXJcbiAgICBjdXJyZW50TGF5ZXIuZGVzdHJveSgpXG4gICAgc2V0SGFzaGVkTGF5ZXJMaXN0KHByZXZIYXNoZWRMaXN0ID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRIYXNoZWRMaXN0ID0geyAuLi5wcmV2SGFzaGVkTGlzdCB9XG4gICAgICBkZWxldGUgY3VycmVudEhhc2hlZExpc3RbaWRdXG4gICAgICByZXR1cm4gY3VycmVudEhhc2hlZExpc3RcbiAgICB9KVxuXG4gICAgc2V0TXVsdGlEYXRhT3B0aW9ucyhwcmV2RGF0YUxpc3QgPT4ge1xuICAgICAgcmV0dXJuIHByZXZEYXRhTGlzdC5maWx0ZXIoZGF0YSA9PiBkYXRhLmRhdGFTb3VyY2VKc29uLmlkICE9PSBpZClcbiAgICB9KVxuICB9XG5cbiAgLy8gY29uc3QgZ2VvUHJvY2Vzc0ZpbGUgPSBhc3luYyAoZmlsZU9wdGlvbnM6IEZpbGVJbmZvLCBzZWxlY3RlZFByb2plY3Rpb246IHN0cmluZywgc2VsZWN0ZWRDaGFyQ29kZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAvLyAgICAgY29uc3QgdXBsb2FkZWRGaWxlID0gYXdhaXQgZXNyaVJlcXVlc3QoaW1wb3J0RmlsZVVybCwge1xuICAvLyAgICAgICBib2R5OiBmaWxlT3B0aW9ucy5kYXRhLFxuICAvLyAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAvLyAgICAgICByZXNwb25zZVR5cGU6IFwianNvblwiXG4gIC8vICAgICB9KVxuXG4gIC8vICAgICBjb25zdCBwcm9qZWN0aW9uID0gZ2V0UHJvamVjdGlvblZhbHVlcyhzZWxlY3RlZFByb2plY3Rpb24pXG5cbiAgLy8gICAgIGNvbnN0IGdlb3Byb2Nlc3NSZXNwb25zZSA9IGF3YWl0IGdlb3Byb2Nlc3Nvci5leGVjdXRlKGltcG9ydGVkRmlsZVRvSnNvblVybCwge1xuICAvLyAgICAgICBGSVRYRVJfQ0FEOiB7XG4gIC8vICAgICAgICAgXCJpdGVtSURcIjogdXBsb2FkZWRGaWxlLmRhdGEuaXRlbS5pdGVtSURcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgUFJPSkVDQ0lPX1BSSjogcHJvamVjdGlvbi5kZXNjcmlwdGlvbixcbiAgLy8gICAgICAgQ09ERV9QQUdFX0ZJTEU6IHNlbGVjdGVkQ2hhckNvZGVcbiAgLy8gICAgIH0pXG5cbiAgLy8gICAgIGNvbnN0IHByb21pc2VMaXN0ID0gZ2VvcHJvY2Vzc1Jlc3BvbnNlLnJlc3VsdHMucmVkdWNlKGFzeW5jIChhY2MsIGdlb3Byb2Nlc3MsIGlkeCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBhY2N1bXVsYXRlZCA9IGF3YWl0IGFjY1xuICAvLyAgICAgICBpZiAoZ2VvcHJvY2Vzcz8udmFsdWU/LnVybCkgeyAvLyBTaSBsJ1VSTCBxdWUgcmV0b3JuYSBsJ2VuZHBvaW50IHZlIG51bGwsIHZvbCBkaXIgcXVlIG5vIHTDqSBkYWRlc1xuICAvLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGVzcmlSZXF1ZXN0KGdlb3Byb2Nlc3MudmFsdWUudXJsKVxuICAvLyAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0gcmVzdWx0LmRhdGFcbiAgLy8gICAgICAgICBjb25zdCBnZW9tZXRyeVR5cGU6IEdlb21ldHJ5VHlwZSA9IGdldEdlb21ldHJ5VHlwZShnZW9wcm9jZXNzLnBhcmFtTmFtZSlcbiAgLy8gICAgICAgICBhY2N1bXVsYXRlZC5wdXNoKHtcbiAgLy8gICAgICAgICAgIC4uLnJlcXVlc3REYXRhLFxuICAvLyAgICAgICAgICAgZGF0YVNvdXJjZUpzb246IHtcbiAgLy8gICAgICAgICAgICAgaWQ6IGAke2dlb21ldHJ5VHlwZX1fJHtmaWxlT3B0aW9ucy5pZH1fJHtpZHh9YCwgLy8gSUQgdGFudCBkZWwgbWFwLmxheWVyIGNvbSBkZSBsYSBwZXRpY2nDsyBmb3JtYXRhZGEgKGxsaXN0YXQgZCdhY2Npb25zIGJvcnJhci9lZGl0YXIgbGF5ZXIpXG4gIC8vICAgICAgICAgICAgIHR5cGU6IGZpbGVPcHRpb25zLnR5cGUsXG4gIC8vICAgICAgICAgICAgIHNvdXJjZUxhYmVsOiBmaWxlT3B0aW9ucy5uYW1lLFxuICAvLyAgICAgICAgICAgICBnZW9tZXRyeVR5cGUsXG4gIC8vICAgICAgICAgICAgIGdlb1R5cGU6IGdlb3Byb2Nlc3MucGFyYW1OYW1lXG4gIC8vICAgICAgICAgICB9LFxuICAvLyAgICAgICAgIH0pXG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkXG4gIC8vICAgICB9LCBQcm9taXNlLnJlc29sdmUoW10pKVxuXG4gIC8vICAgICBjb25zdCB2YWxpZERhdGFMaXN0ID0gYXdhaXQgcHJvbWlzZUxpc3RcblxuICAvLyAgICAgaWYgKHZhbGlkRGF0YUxpc3QubGVuZ3RoID4gMCkge1xuICAvLyAgICAgICBjb25zdCBuZXdJc0xvYWRpbmcgPSAhaXNMb2FkaW5nXG4gIC8vICAgICAgIGlmIChuZXdJc0xvYWRpbmcpIHtcbiAgLy8gICAgICAgICAvLyBkYXRhTGlzdCwgZmlsZU5hbWUsIHByb2plY3Rpb25cbiAgLy8gICAgICAgICBjb25zdCBoYXNoZWRMYXllcnMgPSBnZXRBbmREcmF3TWFwTGF5ZXJzKHtcbiAgLy8gICAgICAgICAgIGRhdGFMaXN0OiB2YWxpZERhdGFMaXN0LFxuICAvLyAgICAgICAgICAgZmlsZU5hbWU6IGZpbGVPcHRpb25zLm5hbWUsXG4gIC8vICAgICAgICAgICBwcm9qZWN0aW9uOiBwcm9qZWN0aW9uXG4gIC8vICAgICAgICAgfSlcbiAgLy8gICAgICAgICBzZXRIYXNoZWRMYXllckxpc3QocHJldiA9PiAoeyAuLi5wcmV2LCAuLi5oYXNoZWRMYXllcnMgfSkpXG4gIC8vICAgICAgICAgc2V0TXVsdGlEYXRhT3B0aW9ucyhwcmV2TXVsdGlEYXRhID0+IFsuLi5wcmV2TXVsdGlEYXRhLCAuLi52YWxpZERhdGFMaXN0XSlcbiAgLy8gICAgICAgICBzZXRJc09wZW5Gb3JtKGZhbHNlKVxuICAvLyAgICAgICAgIHNldEZpbGVPcHRpb25zKG51bGwpXG4gIC8vICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfSBjYXRjaCAoZSkge1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAvLyAgICAgc2V0RXJyb3JNc2codHJhbnNsYXRlKFwic29tZXRoaW5nRmFpbGVkXCIpKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbnN0IG9uQWRkRGF0YSA9IChhZGRlZE11bHRpRGF0YU9wdGlvbnM6IERhdGFPcHRpb25zW10pID0+IHtcbiAgICAvLyBDcmVhdCBuZXcgZGF0YSBiYXNlZCBvbiBkaWZmLlxuICAgIGNhY2hlLmN1cnJlbnQuaW5pdGlhbGl6ZWQoKSAmJiBjYWNoZS5jdXJyZW50LnB1dEFsbChhZGRlZE11bHRpRGF0YU9wdGlvbnMubWFwKGQgPT4gKHsga2V5OiBkLmRhdGFTb3VyY2VKc29uLmlkLCB2YWx1ZTogZCB9KSkpXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgLy8gY3JlYXRlRGF0YVNvdXJjZXNCeURhdGFPcHRpb25zKGFkZGVkTXVsdGlEYXRhT3B0aW9ucywgaWQpLmNhdGNoKGVyciA9PiB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGRhdGEgc291cmNlJywgZXJyKVxuICAgIC8vIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgIC8vICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIC8vIH0pXG4gICAgY29uc3QgaGFzaGVkTGF5ZXJzID0gZ2V0QW5kRHJhd01hcExheWVycyh7XG4gICAgICBkYXRhTGlzdDogYWRkZWRNdWx0aURhdGFPcHRpb25zLFxuICAgICAgZmlsZU5hbWU6IGZpbGVPcHRpb25zLm5hbWUsXG4gICAgICBwcm9qZWN0aW9uOiBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2Uud2tpZFxuICAgIH0pXG4gICAgc2V0SGFzaGVkTGF5ZXJMaXN0KHByZXYgPT4gKHsgLi4ucHJldiwgLi4uaGFzaGVkTGF5ZXJzIH0pKVxuICAgIHNldE11bHRpRGF0YU9wdGlvbnMocHJldk11bHRpRGF0YSA9PiBbLi4ucHJldk11bHRpRGF0YSwgLi4uYWRkZWRNdWx0aURhdGFPcHRpb25zXSlcbiAgICBzZXRJc09wZW5Gb3JtKGZhbHNlKVxuICAgIHNldEZpbGVPcHRpb25zKG51bGwpXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuXG4gICAgc2V0TXVsdGlEYXRhT3B0aW9ucyhtdWx0aURhdGFPcHRpb25zLmNvbmNhdChhZGRlZE11bHRpRGF0YU9wdGlvbnMpKVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxDYWxjaXRlRmxvd0l0ZW1cbiAgICAgIGhlYWRpbmc9e3RyYW5zbGF0ZSgnbWFudWFsUm91dGVUaXRsZScpfVxuICAgICAgYmVmb3JlQmFjaz17cHJvcHMub25CYWNrVG9MaXN0fVxuICAgICAgbG9hZGluZz17ZmFsc2V9XG4gICAgPlxuICAgICAge1xuICAgICAgICAhbXVsdGlEYXRhT3B0aW9ucy5sZW5ndGggJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dlb3Byb2Nlc3MtY2FkIHdpZGdldC1hZGQtZGF0YSBcbiAgICAgICAgICBqaW11LXdpZGdldCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIFxuICAgICAgICAgIGp1c3RpZnktY29udGVudC1jZW50ZXIgc3VyZmFjZS0xIGJvcmRlci0wJyByZWY9e3Jvb3REb21SZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduby1kYXRhLXBsYWNlaG9sZGVyIHctMTAwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduby1kYXRhLXBsYWNlaG9sZGVyLWljb24nPlxuICAgICAgICAgICAgICA8RW1wdHlPdXRsaW5lZCBzaXplPXszMn0gY29sb3I9J3ZhcigtLWRhcmstNTAwKScgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vLWRhdGEtcGxhY2Vob2xkZXItdGV4dCc+XG4gICAgICAgICAgICAgIDxzcGFuPnt0cmFuc2xhdGUoJ2RlZmF1bHRQbGFjZWhvbGRlclRleHQnKX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vLWRhdGEtcGxhY2Vob2xkZXItYnRuJz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdwcmltYXJ5JyBjbGFzc05hbWU9J2ZsZXgtZ3Jvdy0xIHRleHQtY2VudGVyJ1xuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnY2xpY2tUb0FkZERhdGEnKX0gcmVmPXthZGREYXRhQnV0dG9uUmVmfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBvcHBlckZvcm19IHRpdGxlPXt0cmFuc2xhdGUoJ2NsaWNrVG9BZGREYXRhJyl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBweC0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICA8UGx1c091dGxpbmVkIHNpemU9J20nIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZSc+XG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2NsaWNrVG9BZGREYXRhJyl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8VXBsb2FkRmlsZUZvcm0gcG9wcGVyUmVmZXJlbmNlPXtyb290RG9tUmVmfSB1cGxvYWRpbmdGaWxlSW5mbz17dXBsb2FkaW5nRmlsZUluZm99XG4gICAgICAgIGZpbGVPcHRpb25zVXBkYXRlPXsoZmlsZTogRmlsZUluZm8pID0+IHNldEZpbGVPcHRpb25zKGZpbGUpfSBmaWxlT3B0aW9ucz17ZmlsZU9wdGlvbnN9XG4gICAgICAgIG9uUmVtb3ZlPXtyZW1vdmVVcGxvYWRlZEZpbGVGb3JtfSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gc2V0SXNMb2FkaW5nPXtzZXRJc0xvYWRpbmd9XG4gICAgICAgIGlzT3Blbj17aXNPcGVuRm9ybX0gdG9nZ2xlUG9wcGVyPXt0b2dnbGVQb3BwZXJGb3JtfSBtdWx0aURhdGFPcHRpb25zPXttdWx0aURhdGFPcHRpb25zfVxuICAgICAgICBzZXRFcnJvck1zZz17c2V0RXJyb3JNc2d9IGVycm9yTXNnPXtlcnJvck1zZ30gb25BZGREYXRhPXtvbkFkZERhdGF9Lz5cblxuICAgICAge2N1cnJlbnRMYXllciAmJiA8RWRpdExheWVyc0Zvcm0gcG9wcGVyUmVmZXJlbmNlPXtyb290RG9tUmVmfVxuICAgICAgICBjdXJyZW50TGF5ZXI9e2N1cnJlbnRMYXllcn0gY3VycmVudEVkaXRHZW9tZXRyeT17Y3VycmVudEVkaXRHZW9tZXRyeX1cbiAgICAgICAgaXNPcGVuPXtpc09wZW5MYXllclN0eWxlfSB0b2dnbGVQb3BwZXI9e3RvZ2dsZVBvcHBlckxheWVyU3R5bGV9IC8+fVxuXG4gICAgICB7XG4gICAgICAgIG11bHRpRGF0YU9wdGlvbnMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAgcC00IGdlb3Byb2Nlc3MtY2FkLWxpc3QtdmlldycgcmVmPXtyb290RG9tUmVmfT5cbiAgICAgICAgICA8TGF5ZXJMaXN0IG11bHRpRGF0YU9wdGlvbnM9e211bHRpRGF0YU9wdGlvbnN9IG9uUmVtb3ZlRGF0YT17b25SZW1vdmVEYXRhfVxuICAgICAgICAgICAgdG9nZ2xlUG9wcGVyTGF5ZXJTdHlsZT17dG9nZ2xlUG9wcGVyTGF5ZXJTdHlsZX0gaGFzaGVkTGF5ZXJMaXN0PXtoYXNoZWRMYXllckxpc3R9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFkZC1ieS1zZWFyY2gtc2FtbGwnID5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgc21hbGwtYWRkLWJ0bidcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUG9wcGVyRm9ybX0gYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdjbGlja1RvQWRkRGF0YScpfVxuICAgICAgICAgICAgICByZWY9e2FkZERhdGFCdXR0b25SZWZ9IHRpdGxlPXt0cmFuc2xhdGUoJ2NsaWNrVG9BZGREYXRhJyl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206ICcxLjclJywgcmlnaHQ6ICc2JScgfX0+XG4gICAgICAgICAgICAgIDxQbHVzT3V0bGluZWQgc2l6ZT0nbScgY2xhc3NOYW1lPSdtLTAnIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9DYWxjaXRlRmxvd0l0ZW0+XG4gIClcbn0iLCJpbXBvcnQge1xuICBSZWFjdCwgaG9va3MsIHV1aWR2MSxcbiAgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVDb3JlTWVzc2FnZXMsXG4gIEltbXV0YWJsZSwgdHlwZSBJTVN0YXRlLFxuICBnZXRBcHBTdG9yZSwgRGF0YVNvdXJjZVR5cGVzLFxuICBEYXRhU291cmNlU3RhdHVzLCBkYXRhU291cmNlVXRpbHNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSU1lc3NhZ2VzLFxuICBQb3BwZXIsIFBhbmVsSGVhZGVyLCBBbGVydCwgQnV0dG9uLCBcbiAgSWNvbiwgSW5wdXQsIExhYmVsLCBMb2FkaW5nLCBSYWRpbywgXG4gIExvYWRpbmdUeXBlLCBcbn0gZnJvbSAnamltdS11aSdcbi8vIGltcG9ydCB7IERhdGFMb2FkaW5nIH0gZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCB7IHVzZU1lbW8sIENoYW5nZUV2ZW50LCBNb3VzZUV2ZW50LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXMnXG5pbXBvcnQgeyBcbiAgRGF0YU9wdGlvbnMsIFN1cHBvcnRlZEZpbGVUeXBlcywgVXBsb2FkRmlsZUZvcm1Qcm9wcyxcbiAgRmlsZUluZm8sIEdlb0pTT05UeXBlLCBGb3JtYXR0ZWRHZW9tZXRyeVR5cGUsXG59IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2UnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZUVkaXRpb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9Sb3V0ZUVkaXRpb25Db250ZXh0J1xuaW1wb3J0IGVzcmlSZXF1ZXN0IGZyb20gXCJAYXJjZ2lzL2NvcmUvcmVxdWVzdC5qc1wiO1xuXG5pbXBvcnQgJy4vcG9wcGVyLmNzcydcbmltcG9ydCB7IEdQWEljb24sIEtNTEljb24sIFNIUEljb24sIEZpbGVJY29uIH0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IHsgRm9ybVZhbHVlc01hcHBlciB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEdlb21ldHJ5VHlwZSwgSUZlYXR1cmVTZXQsIElMYXllckRlZmluaXRpb24gfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YUxvYWRpbmcgfSBmcm9tICcuLi9Mb2FkaW5nJztcblxuaW50ZXJmYWNlIExheWVySW5GZWF0dXJlQ29sbGVjdGlvbiB7XG4gIGxheWVyRGVmaW5pdGlvbjogSUxheWVyRGVmaW5pdGlvblxuICBmZWF0dXJlU2V0OiBJRmVhdHVyZVNldFxufVxuXG5pbnRlcmZhY2UgRmVhdHVyZUNvbGxlY3Rpb24ge1xuICBsYXllcnM6IExheWVySW5GZWF0dXJlQ29sbGVjdGlvbltdXG59XG5cbmVudW0gVXBsb2FkRmlsZUVycm9yIHtcbiAgTm90U3VwcG9ydGVkVHlwZSA9ICdvbmx5U3VwcG9ydGVkRmlsZXMnLFxuICBGYWlsZWRUb1VwbG9hZCA9ICdmYWlsZWRUb1VwbG9hZEVycm9yJyxcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dEFkZGVkRGF0YUlkKHdpZGdldElkOiBzdHJpbmcsIG9yZGVyOiBudW1iZXIpOiBzdHJpbmcge1xuICAvLyBVc2UgdGltZSBzdGFtcCBzaW5jZSBpZiBvbmUgZGF0YSBpcyBsb2FkaW5nICh0aGUgZGF0YSBzb3VyY2UganNvbiBoYXNuJ3QgYmVlbiBjcmVhdGVkIHlldCkgYW5kIHVzZXIgYWRkcyBhbm90aGVyIGRhdGEgYXQgdGhlIHNhbWUgdGltZSwgdGhlIGRhdGEgc291cmNlIGlkIHdpbGwgYmUgZHVwbGljYXRlZC5cbiAgcmV0dXJuIGBhZGQtZGF0YS0ke3dpZGdldElkfS0ke29yZGVyfS0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfWBcbn1cblxuZXhwb3J0IGNvbnN0IFVwbG9hZEZpbGVGb3JtID0gKHByb3BzOiBVcGxvYWRGaWxlRm9ybVByb3BzKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGppbXVVSU1lc3NhZ2VzLCBqaW11Q29yZU1lc3NhZ2VzLCBkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IHtcbiAgICBtYXBXaWRnZXRJZCwgcG9ydGFsVXJsLFxuICB9ID0gdXNlQ29udGV4dChSb3V0ZUVkaXRpb25Db250ZXh0KVxuICBcbiAgY29uc3Qge1xuICAgIHVwbG9hZGluZ0ZpbGVJbmZvLCBpc0xvYWRpbmcsIHNldElzTG9hZGluZyxcbiAgICBmaWxlT3B0aW9uc1VwZGF0ZSwgZmlsZU9wdGlvbnMsXG4gICAgb25SZW1vdmUsIGlzT3BlbiwgZXJyb3JNc2csXG4gICAgbXVsdGlEYXRhT3B0aW9ucywgb25BZGREYXRhLFxuICAgIHRvZ2dsZVBvcHBlciwgcG9wcGVyUmVmZXJlbmNlLCBzZXRFcnJvck1zZ1xuICB9ID0gcHJvcHNcblxuICBjb25zdCBbbXVsdGlEYXRhT3B0aW9uc0Zyb21GaWxlLCBzZXRNdWx0aURhdGFPcHRpb25zRnJvbUZpbGVdID0gdXNlU3RhdGU8RGF0YU9wdGlvbnNbXT4obnVsbClcbiAgY29uc3QgW3Byb2plY3Rpb25WYWx1ZSwgc2V0UHJvamVjdGlvblZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJldHI4OVwiKVxuICBjb25zdCBbY2hhckNvZGVWYWx1ZSwgc2V0Q2hhckNvZGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwidXRmOFwiKVxuICBjb25zdCBbY3VzdG9tUHJvamVjdGlvblZhbHVlLCBzZXRDdXN0b21Qcm9qZWN0aW9uVmFsdWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKVxuICBjb25zdCBbY3VzdG9tQ2hhcmNvZGVWYWx1ZSwgc2V0Q3VzdG9tQ2hhcmNvZGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXG4gIGNvbnN0IGRyYWdUb1VwbG9hZEJ0bklkOiBzdHJpbmcgPSB1c2VNZW1vKCgpID0+IGAke21hcFdpZGdldElkfS1kcmFnLXRvLXVwbG9hZGAsIFttYXBXaWRnZXRJZF0pXG4gIGNvbnN0IGNsaWNrVG9VcGxvYWRCdG5JZDogc3RyaW5nID0gdXNlTWVtbygoKSA9PiBgJHttYXBXaWRnZXRJZH0tY2xpY2stdG8tdXBsb2FkYCwgW21hcFdpZGdldElkXSlcblxuICBjb25zdCBnZXRGaWxlRXh0ZW5zaW9uID0gKHN1cHBvcnRlZEZpbGVUeXBlOiBTdXBwb3J0ZWRGaWxlVHlwZXMpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBzdXBwb3J0ZWRGaWxlVHlwZSA9PT0gJ3NoYXBlZmlsZScgPyAnLnppcCcgOiBgLiR7c3VwcG9ydGVkRmlsZVR5cGV9YFxuICB9XG5cbiAgY29uc3QgZ2V0RmlsZVR5cGUgPSAobmFtZTogc3RyaW5nKTogU3VwcG9ydGVkRmlsZVR5cGVzID0+IHtcbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoU3VwcG9ydGVkRmlsZVR5cGVzKS5maW5kKHQgPT4gbmFtZT8uZW5kc1dpdGgoZ2V0RmlsZUV4dGVuc2lvbih0KSkpXG4gIH1cblxuICBjb25zdCBnZXRGaWxlSW5mbyA9IChmaWxlOiBGaWxlKTogRmlsZUluZm8gPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBnZXRGaWxlVHlwZShmaWxlLm5hbWUpXG4gICAgY29uc3QgbmFtZSA9IGZpbGUubmFtZS5yZXBsYWNlKGAuJHt0eXBlfWAsICcnKVxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGRhdGEuc2V0KCdmaWxlJywgZmlsZSlcbiAgICBkYXRhLnNldCgnZmlsZXR5cGUnLCB0eXBlKVxuICAgIGRhdGEuc2V0KCdmJywgJ2pzb24nKVxuICAgIHJldHVybiB7XG4gICAgICBpZDogdXVpZHYxKCksXG4gICAgICB0eXBlLFxuICAgICAgbmFtZSxcbiAgICAgIGRhdGEsXG4gICAgICBzaXplOiBmaWxlLnNpemVcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSBhc3luYyAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuZmlsZXMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCBmaWxlOiBGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICBjb25zdCBmaWxlSW5mbyA9IGdldEZpbGVJbmZvKGZpbGUpXG4gICAgICBpZighZmlsZUluZm8udHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoVXBsb2FkRmlsZUVycm9yLk5vdFN1cHBvcnRlZFR5cGUpXG4gICAgICB9XG4gICAgICB1cGxvYWRpbmdGaWxlSW5mby5jdXJyZW50ID0gZmlsZUluZm9cbiAgICAgIGNvbnN0IGZlYXR1cmVDb2xsZWN0aW9uID0gYXdhaXQgZ2VuZXJhdGVGZWF0dXJlQ29sbGVjdGlvbihmaWxlSW5mbywgcG9ydGFsVXJsKVxuICAgICAgY29uc3QgbXVsdGlEYXRhID0gZmVhdHVyZUNvbGxlY3Rpb24ubGF5ZXJzLm1hcCgobDogTGF5ZXJJbkZlYXR1cmVDb2xsZWN0aW9uLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5VHlwZTogRm9ybWF0dGVkR2VvbWV0cnlUeXBlID0gZ2V0R2VvbWV0cnlUeXBlKGwuZmVhdHVyZVNldC5nZW9tZXRyeVR5cGUpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YVNvdXJjZUpzb246IHtcbiAgICAgICAgICAgIGlkOiBnZXROZXh0QWRkZWREYXRhSWQobWFwV2lkZ2V0SWQsIG11bHRpRGF0YU9wdGlvbnMubGVuZ3RoICsgaSksXG4gICAgICAgICAgICB0eXBlOiBEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyIGFzIGFueSxcbiAgICAgICAgICAgIHNvdXJjZUxhYmVsOiBsLmxheWVyRGVmaW5pdGlvbj8ubmFtZSB8fCAoaSA9PT0gMCA/IGZpbGVJbmZvLm5hbWUgOiBgJHtmaWxlSW5mby5uYW1lfSAke2l9YCksXG4gICAgICAgICAgICBnZW9tZXRyeVR5cGU6IGdlb21ldHJ5VHlwZSxcbiAgICAgICAgICAgIGdlb1R5cGU6IGwuZmVhdHVyZVNldC5nZW9tZXRyeVR5cGUsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9yZGVyOiBtdWx0aURhdGFPcHRpb25zLmxlbmd0aCArIGksXG4gICAgICAgICAgcmVzdExheWVyOiB7IC4uLmwsIGxheWVyRGVmaW5pdGlvbjogeyAuLi5sLmxheWVyRGVmaW5pdGlvbiwgY2FwYWJpbGl0aWVzOiAnUXVlcnksIEVkaXRpbmcsIENyZWF0ZSwgRGVsZXRlLCBVcGRhdGUsIEV4dHJhY3QnIH0gfVxuICAgICAgICB9XG4gICAgICB9KSBhcyBEYXRhT3B0aW9uc1tdXG4gICAgICBcbiAgICAgIHNldE11bHRpRGF0YU9wdGlvbnNGcm9tRmlsZShtdWx0aURhdGEpXG5cbiAgICAgIGZpbGVPcHRpb25zVXBkYXRlKGZpbGVJbmZvKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gVXBsb2FkRmlsZUVycm9yLk5vdFN1cHBvcnRlZFR5cGUpIHtcbiAgICAgICAgc2V0RXJyb3JNc2codHJhbnNsYXRlKFVwbG9hZEZpbGVFcnJvci5Ob3RTdXBwb3J0ZWRUeXBlKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yTXNnKHRyYW5zbGF0ZSgnZmFpbGVkVG9VcGxvYWRFcnJvcicpKVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0R2VvbWV0cnlUeXBlID0gKHR5cGU6IEdlb21ldHJ5VHlwZSk6IEZvcm1hdHRlZEdlb21ldHJ5VHlwZSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAvLyBjYXNlICdKU09OX0FOTk9UQVRJT04nOlxuICAgICAgY2FzZSBHZW9KU09OVHlwZS5wb2ludDpcbiAgICAgICAgcmV0dXJuICdwb2ludCdcbiAgICAgIGNhc2UgR2VvSlNPTlR5cGUucG9seWxpbmU6XG4gICAgICAgIHJldHVybiAncG9seWxpbmUnXG4gICAgICBjYXNlIEdlb0pTT05UeXBlLnBvbHlnb246XG4gICAgICAgIHJldHVybiAncG9seWdvbidcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGlja0FkZEZpbGUgPSAoZXZ0OiBNb3VzZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICBldnQubmF0aXZlRXZlbnQ/LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gIH1cblxuICBjb25zdCBoYW5kbGVQcm9qZWN0aW9uQ2hhbmdlID0gKGV2dDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRQcm9qZWN0aW9uVmFsdWUoZXZ0LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFyQ29kZUNoYW5nZSA9IChldnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0Q2hhckNvZGVWYWx1ZShldnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmlsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgc2V0RXJyb3JNc2cobnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVByb2Nlc3NGaWxlID0gKCkgPT4ge1xuICAgIG9uQWRkRGF0YShtdWx0aURhdGFPcHRpb25zRnJvbUZpbGUpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUZlYXR1cmVDb2xsZWN0aW9uKGZpbGVJbmZvOiBGaWxlSW5mbywgcG9ydGFsVXJsOiBzdHJpbmcpOiBQcm9taXNlPEZlYXR1cmVDb2xsZWN0aW9uPiB7XG5cbiAgICBpZiAoZmlsZUluZm8udHlwZSA9PT0gU3VwcG9ydGVkRmlsZVR5cGVzLktNTCkge1xuICAgICAgY29uc3Qgc2VydmljZVVybCA9IGdldEttbFNlcnZpY2VVcmwoKVxuICAgICAgY29uc3Qga21sU3RyaW5nID0gYXdhaXQgcmVhZEZpbGVBc1RleHQoZmlsZUluZm8pXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBlc3JpUmVxdWVzdChzZXJ2aWNlVXJsLCB7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAga21sU3RyaW5nOiBlbmNvZGVVUklDb21wb25lbnQoa21sU3RyaW5nKSxcbiAgICAgICAgICBtb2RlbDogJ3NpbXBsZScsXG4gICAgICAgICAgZm9sZGVyczogJydcbiAgICAgICAgICAvLyBvdXRTUjogSlNPTi5zdHJpbmdpZnkob3V0U3BhdGlhbFJlZmVyZW5jZSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcbiAgICAgIH0pXG4gICAgICByZXR1cm4gcmVzPy5kYXRhPy5mZWF0dXJlQ29sbGVjdGlvbiBhcyBGZWF0dXJlQ29sbGVjdGlvblxuICAgIH1cblxuICAgIGxldCBwdWJsaXNoUGFyYW1ldGVycyA9IHt9XG5cbiAgICAvLyBHUFggZmlsZSBkb2VzIG5vdCBuZWVkIHB1Ymxpc2hQYXJhbWV0ZXJzXG4gICAgaWYgKGZpbGVJbmZvLnR5cGUgIT09IFN1cHBvcnRlZEZpbGVUeXBlcy5HUFgpIHtcbiAgICAgIGNvbnN0IGlzUG9ydGFsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5wb3J0YWxTZWxmPy5pc1BvcnRhbFxuICAgICAgLy8gR2VvSlNPTiBmaWxlIGluIHBvcnRhbCBkb2VzIG5vdCBuZWVkIGFuYWx5emVcbiAgICAgIGlmIChpc1BvcnRhbCAmJiBmaWxlSW5mby50eXBlID09PSBTdXBwb3J0ZWRGaWxlVHlwZXMuR2VvSnNvbikge1xuICAgICAgICBwdWJsaXNoUGFyYW1ldGVycyA9IHtcbiAgICAgICAgICB0YXJnZXRTUjoge1xuICAgICAgICAgICAgd2tpZDogMTAyMTAwLFxuICAgICAgICAgICAgbGF0ZXN0V2tpZDogMzg1N1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZTogZmlsZUluZm8udHlwZSxcbiAgICAgICAgICBtYXhSZWNvcmRDb3VudDogNDAwMFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAxLiBVc2UgUkVTVCBBUEkgYW5hbHl6ZSB0byBnZXQgYHB1Ymxpc2hQYXJhbWV0ZXJzYCB3aGljaCBpcyBuZWVkZWQgaW4gUkVTVCBBUEkgZ2VuZXJhdGUuXG4gICAgICAgIGNvbnN0IGFuYWx5emVVcmwgPSBgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb250ZW50L2ZlYXR1cmVzL2FuYWx5emVgXG4gICAgICAgIGZpbGVJbmZvLmRhdGEuc2V0KCdhbmFseXplUGFyYW1ldGVycycsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbmFibGVHbG9iYWxHZW9jb2Rpbmc6IHRydWUsXG4gICAgICAgICAgc291cmNlTG9jYWxlOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29udGV4dD8ubG9jYWxlID8/ICdlbicgLy8gVE9ETzogdXNlIG9yZyBnZW9jb2RlIHNlcnZpY2VcbiAgICAgICAgfSkpXG4gICAgICAgIGNvbnN0IGFuYWx5emVSZXNwb25zZSA9IGF3YWl0IGVzcmlSZXF1ZXN0KGFuYWx5emVVcmwsIHtcbiAgICAgICAgICBib2R5OiBmaWxlSW5mby5kYXRhLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnXG4gICAgICAgIH0pXG4gICAgICAgIGZpbGVJbmZvLmRhdGEuZGVsZXRlKCdhbmFseXplUGFyYW1ldGVycycpXG4gICAgICAgIHB1Ymxpc2hQYXJhbWV0ZXJzID0gYW5hbHl6ZVJlc3BvbnNlPy5kYXRhPy5wdWJsaXNoUGFyYW1ldGVyc1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIFVzZSBSRVNUIEFQSSBnZW5lcmF0ZSB0byBnZXQgZmVhdHVyZXMgZnJvbSB0aGUgdXBsb2FkZWQgZmlsZS5cbiAgICBjb25zdCBnZW5lcmF0ZVVybCA9IGAke3BvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbnRlbnQvZmVhdHVyZXMvZ2VuZXJhdGVgXG4gICAgZmlsZUluZm8uZGF0YS5zZXQoJ3B1Ymxpc2hQYXJhbWV0ZXJzJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucHVibGlzaFBhcmFtZXRlcnMsXG4gICAgICBuYW1lOiBmaWxlSW5mby5uYW1lXG4gICAgfSkpXG4gICAgY29uc3QgZ2VuZXJhdGVSZXNwb25zZSA9IGF3YWl0IGVzcmlSZXF1ZXN0KGdlbmVyYXRlVXJsLCB7XG4gICAgICBib2R5OiBmaWxlSW5mby5kYXRhLFxuICAgICAgbWV0aG9kOiAncG9zdCdcbiAgICB9KVxuICAgIGZpbGVJbmZvLmRhdGEuZGVsZXRlKCdwdWJsaXNoUGFyYW1ldGVycycpXG5cbiAgICBpZiAoZ2VuZXJhdGVSZXNwb25zZT8uZGF0YT8uZmVhdHVyZUNvbGxlY3Rpb24pIHtcbiAgICAgIChnZW5lcmF0ZVJlc3BvbnNlPy5kYXRhPy5mZWF0dXJlQ29sbGVjdGlvbiBhcyBGZWF0dXJlQ29sbGVjdGlvbik/LmxheWVycz8uZm9yRWFjaCgobHkpID0+IHtcbiAgICAgICAgbHkuZmVhdHVyZVNldD8uZmVhdHVyZXM/LmZvckVhY2goKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICBseS5sYXllckRlZmluaXRpb24/LmZpZWxkcz8uZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGZlYXR1cmUuYXR0cmlidXRlcz8uW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVTbWFsbEludGVnZXInKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0clZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLmF0dHJpYnV0ZXNbZmllbGQubmFtZV0gPSBhdHRyVmFsdWUgPyAxIDogMFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0clZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGZlYXR1cmUuYXR0cmlidXRlc1tmaWVsZC5uYW1lXSA9IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gZm9yIGdweCBhbmQgZ2VvanNvbiBmaWxlcywgbm8gbGF5ZXJEZWZpbml0aW9uIGNhbiBiZSBwYXNzZWQgd2hlbiBnZW5lcmF0aW5nIGZlYXR1cmUgY29sbGVjdGlvbiBkdWUgdG8gdGhlIGxhY2sgb2YgYW5hbHl6ZSxcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBjYXVzZSB0aGUgbGF5ZXIgbmFtZSBiZWNvbWUgZ2VuZXJhbCwgbGlrZTogXCJwb2ludHNcIiwgXCJwb2x5Z29uc1wiXG4gICAgICAgIC8vIHNvIHdlIGNhbiBhZGQgdGhlIGZpbGUgbmFtZSBhcyBwcmVmaXggaGVyZSB0byBpbmNyZWFzZSByZWNvZ25pdGlvbiBvZiB0aGUgbGF5ZXIgbmFtZVxuICAgICAgICBpZiAoW1N1cHBvcnRlZEZpbGVUeXBlcy5HUFgsIFN1cHBvcnRlZEZpbGVUeXBlcy5HZW9Kc29uXS5pbmNsdWRlcyhmaWxlSW5mby50eXBlKSAmJiAhbHkubGF5ZXJEZWZpbml0aW9uPy5uYW1lPy5pbmNsdWRlcyhmaWxlSW5mby5uYW1lKSkge1xuICAgICAgICAgIGx5LmxheWVyRGVmaW5pdGlvbi5uYW1lID0gYCR7ZmlsZUluZm8ubmFtZX0gLSAke2x5LmxheWVyRGVmaW5pdGlvbi5uYW1lfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZ2VuZXJhdGVSZXNwb25zZT8uZGF0YT8uZmVhdHVyZUNvbGxlY3Rpb24gYXMgRmVhdHVyZUNvbGxlY3Rpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRGaWxlQXNUZXh0KGZpbGVJbmZvOiBGaWxlSW5mbykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgcmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZUluZm8uZGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRLbWxTZXJ2aWNlVXJsKCkge1xuICAgIGNvbnN0IGlzUG9ydGFsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5wb3J0YWxTZWxmPy5pc1BvcnRhbFxuICAgIGlmIChpc1BvcnRhbCkge1xuICAgICAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5wb3J0YWxVcmxcbiAgICAgIHJldHVybiBgJHtwb3J0YWxVcmx9L3NoYXJpbmcva21sYFxuICAgIH1cbiAgICBjb25zdCBlbnYgPSB3aW5kb3cuamltdUNvbmZpZy5ob3N0RW52XG4gICAgY29uc3QgZW52SG9zdCA9IGVudiA9PT0gJ2RldicgPyAnZGV2ZXh0JyA6IGVudiA9PT0gJ3FhJyA/ICdxYScgOiAnJ1xuICAgIHJldHVybiBgaHR0cHM6Ly91dGlsaXR5JHtlbnZIb3N0fS5hcmNnaXMuY29tL3NoYXJpbmcva21sYFxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxQb3BwZXIgb3Blbj17aXNPcGVufSB0b2dnbGU9e3RvZ2dsZVBvcHBlcn0gcmVmZXJlbmNlPXtwb3BwZXJSZWZlcmVuY2V9XG4gICAgICBwbGFjZW1lbnQ9J3JpZ2h0LXN0YXJ0JyBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2FkZERhdGEnKX0gY2xhc3NOYW1lPSdnZW9wcm9jZXNzb3ItY2FkLWxheWVyLWZvcm0tcG9wcGVyJz5cbiAgICAgIHtcbiAgICAgICAgZXJyb3JNc2cgJiZcbiAgICAgICAgPEFsZXJ0IGNsYXNzTmFtZT0ndy0xMDAnIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCByaWdodDogMCwgekluZGV4OiAxIH19XG4gICAgICAgICAgY2xvc2FibGUgZm9ybT0nYmFzaWMnIG9uQ2xvc2U9eygpID0+IHsgc2V0RXJyb3JNc2cobnVsbCkgfX0gb3BlbiB0ZXh0PXtlcnJvck1zZ31cbiAgICAgICAgICB0eXBlPSd3YXJuaW5nJyB3aXRoSWNvbiAvPlxuICAgICAgfVxuICAgICAgey8qIEVzdGlscyBhIGwnYXJ4aXUgcG9wcGVyLmNzcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wcGVyLWNvbnRhaW5lclwiPlxuICAgICAgICB7PFBhbmVsSGVhZGVyIHNob3dDbG9zZT17dHJ1ZX0gb25DbG9zZT17dG9nZ2xlUG9wcGVyfSBsZXZlbD17MX0gY2xhc3NOYW1lPSdwLTQnIC8+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkLWRhdGEtcG9wcGVyLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhLWZpbGUtdXBsb2FkIHctMTAwIGgtMTAwIHBiLTQgcHQtNiBweC00Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdXBwb3J0ZWQtdHlwZS1pY29ucyBkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZCBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtNiBtYi00Jz5cbiAgICAgICAgICAgICAgPEljb24gd2lkdGg9ezEzfSBoZWlnaHQ9ezE2fSBpY29uPXtGaWxlSWNvbn0gLz5cbiAgICAgICAgICAgICAgPEljb24gd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBpY29uPXtHUFhJY29ufSAvPlxuICAgICAgICAgICAgICA8SWNvbiB3aWR0aD17MzJ9IGhlaWdodD17MzJ9IGljb249e0tNTEljb259IC8+XG4gICAgICAgICAgICAgIDxJY29uIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gaWNvbj17U0hQSWNvbn0gLz5cbiAgICAgICAgICAgICAgPEljb24gd2lkdGg9ezEzfSBoZWlnaHQ9ezE2fSBpY29uPXtGaWxlSWNvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1cHBvcnRlZC10eXBlcyc+e3RyYW5zbGF0ZSgnc3VwcG9ydGVkVHlwZXMnKX08L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmlsZU9wdGlvbnNcbiAgICAgICAgICAgICAgICA/IDxTZWxlY3RlZEZpbGUga2V5PXtmaWxlT3B0aW9ucy5pZH0gb25SZW1vdmU9e29uUmVtb3ZlfSBkc0pzb249e0ltbXV0YWJsZShmaWxlT3B0aW9ucyl9PjwvU2VsZWN0ZWRGaWxlPlxuICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9J210LTQgZHJhZy1hcmVhLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPXtkcmFnVG9VcGxvYWRCdG5JZH0gY2xhc3NOYW1lPSdkcmFnLWFyZWEgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC0xNCc+e3RyYW5zbGF0ZSgnc2VsZWN0T3JEcm9wRmlsZScpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndXBsb2FkLWJ0bi1jb250YWluZXIgdy03NScgdGl0bGU9e3RyYW5zbGF0ZSgndXBsb2FkJyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9e2NsaWNrVG9VcGxvYWRCdG5JZH0gY2xhc3NOYW1lPSd1cGxvYWQtYnRuIHRleHQtY2VudGVyIG10LTQgbWItMCB0ZXh0LXRydW5jYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzT3V0bGluZWQgc2l6ZT17MTV9IGNsYXNzTmFtZT0nbXItMicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0cmFuc2xhdGUoJ3VwbG9hZCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD17Y2xpY2tUb1VwbG9hZEJ0bklkfSB0aXRsZT0nJyBjbGFzc05hbWU9J3VwbG9hZC1idG4tZmlsZS1pbnB1dCcgdHlwZT0nZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD17ZHJhZ1RvVXBsb2FkQnRuSWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQWRkRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9JycgY2xhc3NOYW1lPSdkcmFnLWFyZWEtZmlsZS1pbnB1dCcgdHlwZT0nZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfSBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgaW5wdXQtc2VsZWN0LXJhZGlvLXByb2plY3Rpb24nPlxuICAgICAgICAgICAgICA8aDU+e3RyYW5zbGF0ZSgncHJvamVjdGlvbicpfTo8L2g1PlxuICAgICAgICAgICAgICA8ZGl2IHJvbGU9J3JhZGlvZ3JvdXAnIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZShcInByb2plY3Rpb25cIil9PlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgPFJhZGlvIG5hbWU9J3Byb2plY3Rpb24nIGNsYXNzTmFtZT0nbXItMicgdmFsdWU9e1wiZXRyODlcIn1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvamVjdGlvblZhbHVlID09PSBcImV0cjg5XCJ9IG9uQ2hhbmdlPXtoYW5kbGVQcm9qZWN0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgVVRNMzEtRVRSODlcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgPFJhZGlvIG5hbWU9J3Byb2plY3Rpb24nIGNsYXNzTmFtZT0nbXItMicgdmFsdWU9e1wid2dzODRcIn1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvamVjdGlvblZhbHVlID09PSBcIndnczg0XCJ9IG9uQ2hhbmdlPXtoYW5kbGVQcm9qZWN0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgVVRNMzEtV0dTODRcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjaGVjayBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgPFJhZGlvIG5hbWU9J3Byb2plY3Rpb24nIGNsYXNzTmFtZT0nbXItMicgdmFsdWU9e1wiZ2VvZ3JhcGhpY3NcIn1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvamVjdGlvblZhbHVlID09PSBcImdlb2dyYXBoaWNzXCJ9IG9uQ2hhbmdlPXtoYW5kbGVQcm9qZWN0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZShcImdlb2dyYXBoaWNzXCIpfVxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNoZWNrIGNsYXNzTmFtZT0nZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICA8UmFkaW8gbmFtZT0ncHJvamVjdGlvbicgY2xhc3NOYW1lPSdtci0yJyB2YWx1ZT1cImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb2plY3Rpb25WYWx1ZSA9PT0gXCJjdXN0b21cIn0gb25DaGFuZ2U9e2hhbmRsZVByb2plY3Rpb25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKFwicHJvamVjdGlvbk90aGVyc1wiKX06XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdyYWRpby1pbnB1dC10ZXh0JyBkaXNhYmxlZD17cHJvamVjdGlvblZhbHVlICE9PSBcImN1c3RvbVwifVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2N1c3RvbVByb2plY3Rpb25WYWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEN1c3RvbVByb2plY3Rpb25WYWx1ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00IGlucHV0LXNlbGVjdC1yYWRpby1jaGFyYWN0ZXItY29kaWZpY2F0aW9uJz5cbiAgICAgICAgICAgICAgPGg1Pnt0cmFuc2xhdGUoJ2NoYXJjb2RlUmFkaW9IZWFkaW5nJyl9OjwvaDU+XG4gICAgICAgICAgICAgIDxkaXYgcm9sZT0ncmFkaW9ncm91cCcgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdjaGFyY29kZVJhZGlvSGVhZGluZycpfT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgIDxSYWRpbyBuYW1lPSdjaGFyQ29kZScgY2xhc3NOYW1lPSdtci0yJyB2YWx1ZT17XCJ1dGY4XCJ9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoYXJDb2RlVmFsdWUgPT09IFwidXRmOFwifSBvbkNoYW5nZT17aGFuZGxlQ2hhckNvZGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICBVVEYtOFxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT0nZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICA8UmFkaW8gbmFtZT0nY2hhckNvZGUnIGNsYXNzTmFtZT0nbXItMicgdmFsdWU9e1wid2luZG93czEyNTJcIn1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hhckNvZGVWYWx1ZSA9PT0gXCJ3aW5kb3dzMTI1MlwifSBvbkNoYW5nZT17aGFuZGxlQ2hhckNvZGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICBXaW5kb3dzIDEyNTJcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGNoZWNrIGNsYXNzTmFtZT0nZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICA8UmFkaW8gbmFtZT0nY2hhckNvZGUnIGNsYXNzTmFtZT0nbXItMicgdmFsdWU9XCJjdXN0b21cIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGFyQ29kZVZhbHVlID09PSBcImN1c3RvbVwifSBvbkNoYW5nZT17aGFuZGxlQ2hhckNvZGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKFwiY2hhcmNvZGVPdGhlcnNcIil9OlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncmFkaW8taW5wdXQtdGV4dCcgZGlzYWJsZWQ9e2NoYXJDb2RlVmFsdWUgIT09IFwiY3VzdG9tXCJ9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiB2YWx1ZT17Y3VzdG9tQ2hhcmNvZGVWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEN1c3RvbUNoYXJjb2RlVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGNoZWNrIGNsYXNzTmFtZT0nZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICA8UmFkaW8gbmFtZT0nY2hhckNvZGUnIGNsYXNzTmFtZT0nbXItMicgdmFsdWU9e1wibm9uZVwifVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGFyQ29kZVZhbHVlID09PSBcIm5vbmVcIn0gb25DaGFuZ2U9e2hhbmRsZUNoYXJDb2RlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZShcIm5vbmVTcGVjaWZpZWRcIil9XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiaWctZG9uZS1idG4gdy0xMDAnIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcxNXB4JyB9fT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcm9jZXNzRmlsZX1cbiAgICAgICAgICAgICAgICB0eXBlPSdwcmltYXJ5JyBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgdy0xMDAnXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZSgncHJvY2Vzc0RhdGEnKX0gYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdwcm9jZXNzRGF0YScpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZmlsZU9wdGlvbnN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdwcm9jZXNzRGF0YScpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlzTG9hZGluZyAmJiA8RGF0YUxvYWRpbmcgdXBsb2FkaW5nRmlsZUluZm89e3VwbG9hZGluZ0ZpbGVJbmZvfSBvbkZpbGVDYW5jZWw9e29uRmlsZUNhbmNlbH0+PC9EYXRhTG9hZGluZz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BvcHBlcj5cbiAgKVxufVxuXG5jb25zdCBTZWxlY3RlZEZpbGUgPSAoeyBkc0pzb24sIG9uUmVtb3ZlIH06IHsgZHNKc29uOiBhbnksIG9uUmVtb3ZlOiAoZHNJZDogc3RyaW5nKSA9PiB2b2lkIH0pID0+IHtcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oamltdVVJTWVzc2FnZXMpXG4gIGNvbnN0IGRzID0gW11cbiAgY29uc3QgZHNJbmZvID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0luZm8/Lltkc0pzb24uaWRdKVxuICBjb25zdCBpc0RhdGFFcnJvciA9IGRzSW5mbyA/IGRzSW5mby5pbnN0YW5jZVN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5DcmVhdGVFcnJvciA6ICFkc1xuICBjb25zdCBpc0RhdGFMb2FkaW5nID0gZHNJbmZvID8gZHNJbmZvLmluc3RhbmNlU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdENyZWF0ZWQgOiAhZHNcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGRhdGEtaXRlbScgcm9sZT1cImxpc3RpdGVtXCIgYXJpYS1sYWJlbD17ZHNKc29uLmxhYmVsIHx8IGRzSnNvbi5uYW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xIHRleHQtdHJ1bmNhdGUnPlxuICAgICAgICB7XG4gICAgICAgICAgaXNEYXRhRXJyb3IgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgZGF0YS1lcnJvcic+XG4gICAgICAgICAgICA8QWxlcnQgY2xhc3NOYW1lPSdmbGV4LXNocmluay0wJyBidXR0b25UeXBlPSd0ZXJ0aWFyeScgZm9ybT0ndG9vbHRpcCcgc2l6ZT0nc21hbGwnIHR5cGU9J2Vycm9yJyB0ZXh0PXt0cmFuc2xhdGUoJ2RhdGFTb3VyY2VDcmVhdGVFcnJvcicpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBpc0RhdGFMb2FkaW5nICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIGRhdGEtbG9hZGluZyc+XG4gICAgICAgICAgICA8TG9hZGluZyB0eXBlPXtMb2FkaW5nVHlwZS5Eb251dH0gd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAhaXNEYXRhRXJyb3IgJiYgIWlzRGF0YUxvYWRpbmcgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgZGF0YS10aHVtYm5haWwnPlxuICAgICAgICAgICAgPEljb24gaWNvbj17ZGF0YVNvdXJjZVV0aWxzLmdldERzSWNvbihkc0pzb24pfSBjb2xvcj0nI0ZGRkZGRicgc2l6ZT0nMTInIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3Jvdy0xIHRleHQtdHJ1bmNhdGUgcGwtMiBkYXRhLWxhYmVsJyB0aXRsZT17ZHNKc29uLmxhYmVsIHx8IGRzSnNvbi5uYW1lfT5cbiAgICAgICAgICB7ZHNKc29uLmxhYmVsIHx8IGRzSnNvbi5uYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCc+XG4gICAgICAgIDxCdXR0b24gdHlwZT0ndGVydGlhcnknIHNpemU9J3NtJyBpY29uXG4gICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZSgncmVtb3ZlJyl9IGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgncmVtb3ZlJyl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyBvblJlbW92ZShkc0pzb24uaWQpIH19ID5cbiAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCBzaXplPXsxNH0gY29sb3I9J3ZhcigtLWRhcmstODAwKScgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSIsImV4cG9ydCAqIGFzIEZpbGVJY29uIGZyb20gJy4vZmlsZS5zdmcnXG5leHBvcnQgKiBhcyBHUFhJY29uIGZyb20gJy4vaWNfR1BYLnN2ZydcbmV4cG9ydCAqIGFzIEtNTEljb24gZnJvbSAnLi9pY19LTUwuc3ZnJ1xuZXhwb3J0ICogYXMgU0hQSWNvbiBmcm9tICcuL2ljX1NIUC5zdmcnIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1cGxvYWRGaWxlOiAnUGVuamEgZWwgdGV1IGZpdHhlcicsXG4gIHNlbGVjdE9yRHJvcEZpbGU6ICdFc2N1bGwgdW4gZml0eGVyIG8gYXJyb3NzZWdhJyxcbiAgc3VwcG9ydGVkVHlwZXM6ICdGb3JtYXRzIGNvbXBhdGlibGVzOiBHUFgsIEtNTCwgU0hQJyxcbiAgY2xpY2tUb0FkZERhdGE6ICdDbGljYSBwZXIgYWZlZ2lyIGRhZGVzJyxcbiAgcHJvY2Vzc0RhdGE6ICdQcm9jZXNzYXInLFxuICBnZW9ncmFwaGljczogJ0dlb2dyw6BmaXF1ZXMnLFxuICBjaGFyY29kZU90aGVyczogJ0FsdHJlcyAoaW5kaWNhciBjb2RpIGRlIHDDoGdpbmEgT0VNIG8gQU5TSSknLFxuICBwcm9qZWN0aW9uT3RoZXJzOiAnQWx0cmVzIChpbmRpY2FyIFdLSUQgZGUgbGxpc3RhKScsXG4gIHByb2plY3Rpb246ICdQcm9qZWNjacOzJyxcbiAgY2hhcmNvZGVSYWRpb0hlYWRpbmc6ICdKb2MgZGUgY2Fyw6BjdGVycycsXG4gIG5vbmVTcGVjaWZpZWQ6ICdObyBlc3BlY2lmaWNhciBjYXAnLFxuICB1cGxvYWQ6ICdDYXJyZWdhcicsXG4gIGRlZmF1bHRQbGFjZWhvbGRlclRleHQ6ICdDbGljIHBlciBhZmVnaXIgZGFkZXMnLFxuICBmaWxlSXNVcGxvYWRpbmc6ICdTXFwnZXN0w6AgY2FycmVnYW50JyxcbiAgY2FuY2VsOiAnQ2FuY2VswrdsYScsXG4gIGFkZFN0eWxlczogJ0FmZWdpciBlc3RpbHMnLFxuICBpY29uOiAnSWNvbmEnLFxuICBjb2xvcjogJ0NvbG9yJyxcbiAgc2l6ZTogJ01pZGEnLFxuICBvdXRsaW5lQ29sb3I6ICdDb2xvciBjb250b3JuJyxcbiAgaW5zaWRlQ29sb3I6ICdJbnRlcmlvcicsXG4gIHRoaWNrbmVzczogJ0dydWl4JyxcbiAgQW5ub3RhdGlvbjogXCJBbm90YWNpw7NcIixcbiAgcG9pbnQ6IFwiUHVudFwiLFxuICBwb2x5bGluZTogXCJMw61uaWFcIixcbiAgcG9seWdvbjogXCJQb2zDrWdvblwiLFxuICBub1N5bWJvbDogXCJTZW5zZSBzw61tYm9sXCIsXG4gIG9ubHlTdXBwb3J0ZWRGaWxlczogXCJOb23DqXMgZXMgcG9kZW4gcGVuamFyIGVscyBmaXR4ZXJzIGRlIHRpcHVzIEdQWCwgS01MIG8gU0hQXCIsXG4gIGVkaXRMYXllclN0eWxlczogXCJFZGl0YSBlbHMgZXN0aWxzIGRlIGxhIGNhcGFcIixcbiAgcmVtb3ZlTGF5ZXI6IFwiRWxpbWluYSBsYSBjYXBhXCIsXG4gIGZhaWxlZFRvVXBsb2FkRXJyb3I6ICdObyBzXFwnaGEgcG9ndXQgY2FycmVnYXIgY29ycmVjdGFtZW50JyxcbiAgc29tZXRoaW5nRmFpbGVkOiBcIlZhamEgYWxnbyBoYSBmYWxsYXQuXCJcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdXBsb2FkRmlsZVR5cGVzJyIsIi8vIG9ubHkgdXNlZCBhcyB0eXBlXG5pbXBvcnQgeyB0eXBlIElGZWF0dXJlU2V0LCB0eXBlIElMYXllckRlZmluaXRpb24gfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcbmltcG9ydCB7IE11dGFibGVSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCB7IEdlb21ldHJ5VHlwZSB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LWZlYXR1cmUtc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJJbkZlYXR1cmVDb2xsZWN0aW9uIHtcbiAgbGF5ZXJEZWZpbml0aW9uOiBJTGF5ZXJEZWZpbml0aW9uXG4gIGZlYXR1cmVTZXQ6IElGZWF0dXJlU2V0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZUNvbGxlY3Rpb24ge1xuICBsYXllcnM6IExheWVySW5GZWF0dXJlQ29sbGVjdGlvbltdXG59XG5cbmV4cG9ydCBlbnVtIFN1cHBvcnRlZEZpbGVUeXBlcyB7XG4gIEdlb0pzb24gPSAnZ2VvanNvbicsXG4gIFNoYXBlZmlsZSA9ICdzaGFwZWZpbGUnLFxuICBLTUwgPSAna21sJyxcbiAgR1BYID0gJ2dweCdcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUluZm8ge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB0eXBlOiBTdXBwb3J0ZWRGaWxlVHlwZXNcbiAgZGF0YTogRm9ybURhdGFcbiAgc2l6ZTogbnVtYmVyIC8vYnl0ZXNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRGaWxlRm9ybVByb3BzIHtcbiAgdXBsb2FkaW5nRmlsZUluZm86IE11dGFibGVSZWZPYmplY3Q8RmlsZUluZm8+O1xuICBmaWxlT3B0aW9uc1VwZGF0ZTogKGZpbGU6IEZpbGVJbmZvKSA9PiB2b2lkO1xuICBmaWxlT3B0aW9uczogRmlsZUluZm87XG4gIG11bHRpRGF0YU9wdGlvbnM6IERhdGFPcHRpb25zW107XG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgdG9nZ2xlUG9wcGVyOiAoKSA9PiB2b2lkO1xuICBwb3BwZXJSZWZlcmVuY2U6IE11dGFibGVSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuICBzZXRFcnJvck1zZzogKG1zZzogc3RyaW5nKSA9PiB2b2lkO1xuICBlcnJvck1zZzogc3RyaW5nO1xuICBzZXRJc0xvYWRpbmc6IChsb2FkaW5nOiBib29sZWFuKSA9PiB2b2lkO1xuICBvbkFkZERhdGE6IChhZGRlZE11bHRpRGF0YU9wdGlvbnM6IERhdGFPcHRpb25zW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIEZvcm1hdHRlZEdlb21ldHJ5VHlwZSA9ICdwb2ludCcgfCAnbXVsdGlwb2ludCcgfCAncG9seWxpbmUnIHwgJ3BvbHlnb24nIHwgJ2V4dGVudCcgfCAnbWVzaCdcbmV4cG9ydCBlbnVtIEdlb0pTT05UeXBlIHtcbiAgcG9pbnQgPSAnZXNyaUdlb21ldHJ5UG9pbnQnLFxuICBwb2x5bGluZSA9ICdlc3JpR2VvbWV0cnlQb2x5bGluZScsXG4gIHBvbHlnb24gPSAnZXNyaUdlb21ldHJ5UG9seWdvbicsXG59XG5cbmludGVyZmFjZSBEYXRhU291cmNlSnNvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IFN1cHBvcnRlZEZpbGVUeXBlcztcbiAgc291cmNlTGFiZWw6IHN0cmluZztcbiAgZ2VvbWV0cnlUeXBlPzogRm9ybWF0dGVkR2VvbWV0cnlUeXBlLFxuICBnZW9UeXBlPzogR2VvbWV0cnlUeXBlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YU9wdGlvbnMge1xuICBjcnM/OiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICB9XG4gIH0sXG4gIGdlb21ldHJ5VHlwZTogRm9ybWF0dGVkR2VvbWV0cnlUeXBlLFxuICBvcmRlcjogbnVtYmVyLFxuICByZXN0TGF5ZXI6IGFueSxcbiAgZmVhdHVyZXM/OiBhbnlbXTtcbiAgdHlwZT86IHN0cmluZztcbiAgZGF0YVNvdXJjZUpzb246IERhdGFTb3VyY2VKc29uXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdExheWVyc0Zvcm1Qcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgdG9nZ2xlUG9wcGVyOiAoKGN1cnJlbnRMYXllcjogRmVhdHVyZUxheWVyLCBnZW9tZXRyeVR5cGU6IEdlb0pTT05UeXBlKSA9PiBhbnkpIHwgYW55O1xuICBjdXJyZW50RWRpdEdlb21ldHJ5OiBHZW9KU09OVHlwZTtcbiAgcG9wcGVyUmVmZXJlbmNlOiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcbiAgY3VycmVudExheWVyOiBhbnlcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdldEFuZERyYXdNYXBMYXllcnNQcm9wcywgTWFwQ29udGV4dCwgUm91dGVFZGl0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCJcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XG5pbXBvcnQgeyBEYXRhT3B0aW9ucywgR2VvSlNPTlR5cGUgfSBmcm9tIFwiLi9NYW51YWxSb3V0ZS90eXBlc1wiO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSBcIkBhcmNnaXMvY29yZS9HcmFwaGljXCI7XG5pbXBvcnQgTGFiZWxDbGFzcyBmcm9tIFwiZXNyaS9sYXllcnMvc3VwcG9ydC9MYWJlbENsYXNzXCI7XG5pbXBvcnQgVGV4dFN5bWJvbCBmcm9tIFwiQGFyY2dpcy9jb3JlL3N5bWJvbHMvVGV4dFN5bWJvbC5qc1wiO1xuaW1wb3J0IHsgXG4gIERyYXdQb2ludEluTWFwUHJvcHMsIEdlb21ldHJ5VHlwZSwgZ2V0QW5kRHJhd01hcExheWVyVHlwZSxcbiAgUHJvamVjdGlvblZhbHVlcywgV2F5cG9pbnRSb3dQcm9wcyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgR3JvdXBMYXllciBmcm9tICdlc3JpL2xheWVycy9Hcm91cExheWVyJztcbmltcG9ydCBQb2ludCBmcm9tICdlc3JpL2dlb21ldHJ5L1BvaW50JztcbmltcG9ydCBTa2V0Y2hWaWV3TW9kZWwgZnJvbSAnQGFyY2dpcy9jb3JlL3dpZGdldHMvU2tldGNoL1NrZXRjaFZpZXdNb2RlbCc7XG5pbXBvcnQgKiBhcyBNYXJrZXJzIGZyb20gXCIuL0F1dG9tYXRpY1JvdXRlL2Fzc2V0c1wiO1xuXG5leHBvcnQgY29uc3QgTWFwQ29tcG9uZW50ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIG1hcFdpZGdldElkLFxuICB9ID0gdXNlQ29udGV4dChSb3V0ZUVkaXRpb25Db250ZXh0KVxuXG4gIGNvbnN0IHNrZXRjaExheWVyID0gdXNlUmVmPEdyYXBoaWNzTGF5ZXI+KG51bGwpXG4gIGNvbnN0IGppbXVNYXBWaWV3UmVmID0gdXNlUmVmPEppbXVNYXBWaWV3PihudWxsKVxuICBjb25zdCBza2V0Y2hWaWV3TW9kZWwgPSB1c2VSZWY8U2tldGNoVmlld01vZGVsPihudWxsKVxuXG4gIC8vICogRXZlbnRvIGRlIHBvaW50ZXIgdXAgcGFyYSBsb3MgcHVudG9zIHNrZXRjaCBhw7FhZGlkb3NcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWppbXVNYXBWaWV3UmVmLmN1cnJlbnQpIHJldHVyblxuXG4gICAgY29uc3Qgb25Qb2ludGVyVXBHZW9tZXRyeSA9IGppbXVNYXBWaWV3UmVmLmN1cnJlbnQudmlldy5vbigncG9pbnRlci11cCcsIG9uRHJhZ1BvaW50RW5kKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG9uUG9pbnRlclVwR2VvbWV0cnkgJiYgb25Qb2ludGVyVXBHZW9tZXRyeS5yZW1vdmUoKVxuICAgIH1cbiAgfSwgW2ppbXVNYXBWaWV3UmVmLmN1cnJlbnRdKVxuXG4gIGNvbnN0IG9uRHJhZ1BvaW50RW5kID0gKGV2ZW50KSA9PiB7XG4gICAgamltdU1hcFZpZXdSZWYuY3VycmVudC52aWV3LmhpdFRlc3QoZXZlbnQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBncmFwaGljID0gcmVzcG9uc2UucmVzdWx0cz8uZmluZChoaXRSZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4gaGl0UmVzdWx0LnR5cGUgPT09ICdncmFwaGljJyAmJiBoaXRSZXN1bHQuZ3JhcGhpYy5sYXllciA9PT0gc2tldGNoTGF5ZXIuY3VycmVudFxuICAgICAgfSlcbiAgICAgIGlmIChncmFwaGljKSB7XG4gICAgICAgIHNrZXRjaFZpZXdNb2RlbC5jdXJyZW50LmNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldyk6IHZvaWQgPT4ge1xuICAgIGlmKGptdikge1xuICAgICAgamltdU1hcFZpZXdSZWYuY3VycmVudCA9IGptdlxuICAgICAgY29uc3Qgc2tldGNoR3JhcGhpY3NMYXllciA9IG5ldyBHcmFwaGljc0xheWVyKHtcbiAgICAgICAgdGl0bGU6ICdTa2V0Y2ggcG9pbnRzJ1xuICAgICAgfSlcblxuICAgICAgc2tldGNoVmlld01vZGVsLmN1cnJlbnQgPSBuZXcgU2tldGNoVmlld01vZGVsKHtcbiAgICAgICAgbGF5ZXI6IHNrZXRjaEdyYXBoaWNzTGF5ZXIsXG4gICAgICAgIHZpZXc6IGppbXVNYXBWaWV3UmVmLmN1cnJlbnQudmlldyxcbiAgICAgIH0pXG5cbiAgICAgIHNrZXRjaExheWVyLmN1cnJlbnQgPSBza2V0Y2hHcmFwaGljc0xheWVyXG4gICAgICBqaW11TWFwVmlld1JlZi5jdXJyZW50LnZpZXcubWFwLmxheWVycy5hZGQoc2tldGNoR3JhcGhpY3NMYXllcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRUZXh0U3ltYm9sID0gKGZlYXR1cmUpID0+IHtcbiAgICBjb25zdCB0ZXh0QW5nbGUgPSBmZWF0dXJlLmF0dHJpYnV0ZXMuVHh0QW5nbGU7XG4gICAgcmV0dXJuIG5ldyBUZXh0U3ltYm9sKHtcbiAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICBoYWxvQ29sb3I6IFwid2hpdGVcIixcbiAgICAgIGhhbG9TaXplOiBcIjFweFwiLFxuICAgICAgZm9udDoge1xuICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgZmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIHdlaWdodDogXCJib2xkXCJcbiAgICAgIH0sXG4gICAgICBhbmdsZTogdGV4dEFuZ2xlID8gLShmZWF0dXJlLmF0dHJpYnV0ZXMuVHh0QW5nbGUpIDogMCxcbiAgICAgIHRleHQ6IGZlYXR1cmUuYXR0cmlidXRlcy5UZXh0IHx8IFwiXCIsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGdldEZlYXR1cmVMaXN0ID0gKGRhdGFPcHRpb25zOiBEYXRhT3B0aW9ucywgZ2VvbWV0cnlUeXBlOiBHZW9tZXRyeVR5cGUsIHByb2plY3Rpb246IG51bWJlcik6IEdyYXBoaWNbXSA9PiB7XG4gICAgcmV0dXJuIGRhdGFPcHRpb25zLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4ge1xuICAgICAgLy8gbGV0IGFyY2dpc0dlb21ldHJ5ID0gZmVhdHVyZS5nZW9tZXRyeS50eXBlID8gZ2VvanNvblRvQXJjR0lTKGZlYXR1cmUuZ2VvbWV0cnkpIDogZmVhdHVyZS5nZW9tZXRyeVxuICAgICAgbGV0IGFyY2dpc0dlb21ldHJ5ID0gZmVhdHVyZS5nZW9tZXRyeVxuICAgICAgYXJjZ2lzR2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSA9IGFyY2dpc0dlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2VcbiAgICAgIGFyY2dpc0dlb21ldHJ5LnR5cGUgPSBnZW9tZXRyeVR5cGVcblxuICAgICAgcmV0dXJuIG5ldyBHcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IGFyY2dpc0dlb21ldHJ5LFxuICAgICAgICBhdHRyaWJ1dGVzOiBmZWF0dXJlLnByb3BlcnRpZXMgfHwgZmVhdHVyZS5hdHRyaWJ1dGVzLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QW5kRHJhd01hcExheWVycyA9IChjb25maWc6IEdldEFuZERyYXdNYXBMYXllcnNQcm9wcyk6IGdldEFuZERyYXdNYXBMYXllclR5cGUgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGFMaXN0LCBmaWxlTmFtZSwgcHJvamVjdGlvblxuICAgIH0gPSBjb25maWdcblxuICAgIGNvbnN0IGhhc2hlZExheWVyczogZ2V0QW5kRHJhd01hcExheWVyVHlwZSA9IHt9XG4gICAgY29uc3QgbGF5ZXJMaXN0OiBBcnJheTxHcmFwaGljc0xheWVyIHwgRmVhdHVyZUxheWVyPiA9IGRhdGFMaXN0Lm1hcCgoZGF0YU9wdGlvbnMsIGluZGV4KSA9PiB7XG4gICAgICAvLyBjb25zdCBpc0Fubm90YXRpb24gPSBkYXRhT3B0aW9ucy5kYXRhU291cmNlSnNvbi5nZW9UeXBlID09PSBcIkpTT05fQU5OT1RBVElPTlwiXG4gICAgICBjb25zdCBpc1BvbHlnb24gPSBkYXRhT3B0aW9ucy5kYXRhU291cmNlSnNvbi5nZW9UeXBlID09PSBHZW9KU09OVHlwZS5wb2x5Z29uXG4gICAgICBjb25zdCBnZW9tZXRyeVR5cGUgPSBkYXRhT3B0aW9ucy5kYXRhU291cmNlSnNvbi5nZW9tZXRyeVR5cGVcbiAgICAgIGNvbnN0IGZlYXR1cmVMaXN0OiBHcmFwaGljW10gPSBnZXRGZWF0dXJlTGlzdChkYXRhT3B0aW9ucy5yZXN0TGF5ZXIuZmVhdHVyZVNldCwgZ2VvbWV0cnlUeXBlLCBwcm9qZWN0aW9uKVxuXG4gICAgICBjb25zdCBnZW9tZXRyeVR5cGVOYW1lID0gZ2VvbWV0cnlUeXBlXG4gICAgICBsZXQgbGF5ZXI6IEdyYXBoaWNzTGF5ZXIgfCBGZWF0dXJlTGF5ZXI7XG5cbiAgICAgIGNvbnN0IGV4dHJhRmVhdHVyZVByb3BzID0gZXh0cmFGZWF0dXJlQ29uZmlnKGdlb21ldHJ5VHlwZSlcblxuICAgICAgbGV0IHJlbmRlcmVyO1xuICAgICAgaWYgKGlzUG9seWdvbikge1xuICAgICAgICBjb25zdCBmaWxsU3ltYm9sID0ge1xuICAgICAgICAgIHR5cGU6IFwic2ltcGxlLWZpbGxcIixcbiAgICAgICAgICBjb2xvcjogWzIyNiwgMTE5LCA0MCwgMC4zXSxcbiAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogWzIyNiwgMTE5LCA0MF0sXG4gICAgICAgICAgICB3aWR0aDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVuZGVyZXIgPSB7XG4gICAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgICBzeW1ib2w6IGZpbGxTeW1ib2xcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICAgIGlkOiBkYXRhT3B0aW9ucy5kYXRhU291cmNlSnNvbi5pZCxcbiAgICAgICAgc291cmNlOiBmZWF0dXJlTGlzdCxcbiAgICAgICAgLi4uKHJlbmRlcmVyICYmIHsgcmVuZGVyZXI6IHJlbmRlcmVyIH0pLFxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IHByb2plY3Rpb24gfSxcbiAgICAgICAgb2JqZWN0SWRGaWVsZDogXCJPQkpFQ1RJRFwiLFxuICAgICAgICB0aXRsZTogYCR7ZGF0YU9wdGlvbnMuZGF0YVNvdXJjZUpzb24uc291cmNlTGFiZWx9ICR7Z2VvbWV0cnlUeXBlTmFtZX1gLFxuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgbmFtZTogXCJPQkpFQ1RJRFwiLFxuICAgICAgICAgIGFsaWFzOiBcIk9CSkVDVElEXCIsXG4gICAgICAgICAgdHlwZTogXCJvaWRcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogXCJUZXh0XCIsXG4gICAgICAgICAgYWxpYXM6IFwiVGV4dFwiLFxuICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgfV0sXG4gICAgICAgIC8vIC4uLmV4dHJhRmVhdHVyZVByb3BzLFxuICAgICAgfSk7XG5cbiAgICAgIGhhc2hlZExheWVyc1tsYXllci5pZF0gPSBsYXllclxuICAgICAgcmV0dXJuIGxheWVyXG4gICAgfSlcblxuICAgIGNvbnN0IGdyb3VwZWRMYXllcnMgPSBuZXcgR3JvdXBMYXllcih7XG4gICAgICB0aXRsZTogYGZpdHhlciAke2ZpbGVOYW1lfWAsXG4gICAgICB2aXNpYmlsaXR5TW9kZTogXCJpbmRlcGVuZGVudFwiLFxuICAgICAgbGF5ZXJzOiBsYXllckxpc3RcbiAgICB9KVxuXG4gICAgbGF5ZXJMaXN0LmZvckVhY2goKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgbGF5ZXJMaXN0d2lkZ3RPcmRlciA9IGxheWVyTGlzdC5sZW5ndGggLSBpbmRleCAtIDFcbiAgICAgIGdyb3VwZWRMYXllcnMucmVvcmRlcihmZWF0dXJlLCBsYXllckxpc3R3aWRndE9yZGVyKVxuICAgIH0pXG5cbiAgICBqaW11TWFwVmlld1JlZi5jdXJyZW50LnZpZXcubWFwLmxheWVycy5hZGQoZ3JvdXBlZExheWVycylcblxuICAgIHJldHVybiBoYXNoZWRMYXllcnNcbiAgfVxuXG4gIGNvbnN0IGV4dHJhRmVhdHVyZUNvbmZpZyA9IChnZW9tZXRyeVR5cGUpOiB7fSA9PiB7XG4gICAgaWYgKGdlb21ldHJ5VHlwZSA9PT0gXCJwb2ludFwiKSB7XG4gICAgICBjb25zdCBsYWJlbENsYXNzOiBMYWJlbENsYXNzID0gbmV3IExhYmVsQ2xhc3Moe1xuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgIGhhbG9Db2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIGhhbG9TaXplOiBcIjFweFwiLFxuICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgICAgZmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgICAgICB3ZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsYWJlbFBsYWNlbWVudDogXCJhYm92ZS1jZW50ZXJcIixcbiAgICAgICAgbGFiZWxFeHByZXNzaW9uSW5mbzoge1xuICAgICAgICAgIGV4cHJlc3Npb246ICdEZWZhdWx0VmFsdWUoJGZlYXR1cmUuVGV4dCwgXCJcIiknXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsaW5nSW5mbzogW2xhYmVsQ2xhc3NdXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgY29uc3QgZHJhd1NlbGVjdGVkQ29vcmRpbmF0ZUluTWFwID0gKGNvbmZpZzogRHJhd1BvaW50SW5NYXBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHBvaW50LCBjdXJyZW50TW9kZWxDb25maWcsXG4gICAgfSA9IGNvbmZpZ1xuXG4gICAgY29uc3QgcG9pbnRJY29uID0gZ2V0VXBkYXRlZEljb25Jbk1hcChwb2ludCwgY3VycmVudE1vZGVsQ29uZmlnKVxuICAgIHNrZXRjaExheWVyLmN1cnJlbnQuYWRkKHBvaW50SWNvbilcblxuICAgIC8vIGlmIChwb2ludFR5cGUuaGFzVGV4dEluTWFwKSB7XG4gICAgLy8gICB1cGRhdGVkVGV4dEljb25Jbk1hcChwb2ludCwgY3VycmVudE1vZGVsQ29uZmlnKVxuICAgIC8vIH1cbiAgfVxuXG4gIGNvbnN0IGdldFVwZGF0ZWRJY29uSW5NYXAgPSAocG9pbnQ6IFBvaW50LCBjdXJyZW50TW9kZWxDb25maWc/OiBXYXlwb2ludFJvd1Byb3BzKTogR3JhcGhpYyA9PiB7XG4gICAgY29uc3QgY3VycmVudE1vZGVsID0gY3VycmVudE1vZGVsQ29uZmlnIC8vIFRPRE86IHx8IGN1cnJlbnRBY3RpdmVDb29yZGluYXRlRmlsdGVyXG5cbiAgICBjb25zdCB0ZXh0U3ltYm9sID0ge1xuICAgICAgdHlwZTogXCJwaWN0dXJlLW1hcmtlclwiLFxuICAgICAgY29sb3I6IFwiIzdBMDAzQ1wiLFxuICAgICAgdXJsOiBnZXRTdmdJY29uKGN1cnJlbnRNb2RlbC5pbmRleCksXG4gICAgICB3aWR0aDogMjAsXG4gICAgICBoZWlnaHQ6IDIzXG4gICAgfTtcblxuICAgIHJlbW92ZVByZXZpb3VzRHJhd25HcmFwaChjdXJyZW50TW9kZWwuaWQpXG5cbiAgICByZXR1cm4gbmV3IEdyYXBoaWMoe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZDogY3VycmVudE1vZGVsLmlkXG4gICAgICB9LFxuICAgICAgZ2VvbWV0cnk6IHBvaW50LFxuICAgICAgc3ltYm9sOiB0ZXh0U3ltYm9sXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBnZXRTdmdJY29uID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBtYXJrZXJzID0gW1xuICAgICAgbnVsbCxcbiAgICAgIE1hcmtlcnMuSW5kZXhNYXJrZXIxLFxuICAgICAgTWFya2Vycy5JbmRleE1hcmtlcjIsXG4gICAgICBNYXJrZXJzLkluZGV4TWFya2VyMyxcbiAgICAgIE1hcmtlcnMuSW5kZXhNYXJrZXI0LFxuICAgICAgTWFya2Vycy5JbmRleE1hcmtlcjUsXG4gICAgICBNYXJrZXJzLkluZGV4TWFya2VyNixcbiAgICAgIE1hcmtlcnMuSW5kZXhNYXJrZXI3LFxuICAgICAgTWFya2Vycy5JbmRleE1hcmtlcjgsXG4gICAgICBNYXJrZXJzLkluZGV4TWFya2VyOSxcbiAgICAgIE1hcmtlcnMuSW5kZXhNYXJrZXIxMCxcbiAgICAgIE1hcmtlcnMuSW5kZXhNYXJrZXIxMSxcbiAgICBdO1xuXG4gICAgaWYoaW5kZXggPCAxIHx8IGluZGV4ID4gMTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gU1ZHIG1hcmtlciBmb3VuZCBmb3IgaW5kZXg6ICR7aW5kZXh9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtlcnNbaW5kZXhdO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlUHJldmlvdXNEcmF3bkdyYXBoID0gKGlkUG9pbnRUb1JlbW92ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEdyYXBoaWNzTGF5ZXIgPSBza2V0Y2hMYXllci5jdXJyZW50LmdyYXBoaWNzXG4gICAgY29uc3QgZmlsdGVyZWRQb2ludFRvUmVtb3ZlOiBHcmFwaGljID0gY3VycmVudEdyYXBoaWNzTGF5ZXIuZmluZChmaWx0ZXJlZHBvaW50ID0+IGZpbHRlcmVkcG9pbnQuYXR0cmlidXRlcy5pZCA9PT0gaWRQb2ludFRvUmVtb3ZlKVxuICAgIGZpbHRlcmVkUG9pbnRUb1JlbW92ZSAmJiBjdXJyZW50R3JhcGhpY3NMYXllci5yZW1vdmUoZmlsdGVyZWRQb2ludFRvUmVtb3ZlKVxuICB9XG5cbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xuICAgIGppbXVNYXBWaWV3OiBqaW11TWFwVmlld1JlZi5jdXJyZW50LFxuICAgIGdldEFuZERyYXdNYXBMYXllcnM6IGdldEFuZERyYXdNYXBMYXllcnMsXG4gICAgZHJhd1NlbGVjdGVkQ29vcmRpbmF0ZUluTWFwOiBkcmF3U2VsZWN0ZWRDb29yZGluYXRlSW5NYXAsXG4gICAgc2tldGNoVmlld01vZGVsOiBza2V0Y2hWaWV3TW9kZWwuY3VycmVudCxcbiAgICByZW1vdmVQcmV2aW91c0RyYXduR3JhcGg6IHJlbW92ZVByZXZpb3VzRHJhd25HcmFwaCxcbiAgfVxuXG4gIC8vIGNvbnN0IHVwZGF0ZWRUZXh0SWNvbkluTWFwID0gKHBvaW50OiBQb2ludCwgY3VycmVudE1vZGVsQ29uZmlnPzogTW9kZWxGaWx0ZXJSb3V0ZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgLy8gICBjb25zdCBjdXJyZW50TW9kZWwgPSBjdXJyZW50TW9kZWxDb25maWcgfHwgY3VycmVudEFjdGl2ZUNvb3JkaW5hdGVGaWx0ZXJcbiAgLy8gICBjb25zdCB0ZXh0U3ltYm9sID0ge1xuICAvLyAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gIC8vICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gIC8vICAgICB0ZXh0OiBpbmRleCxcbiAgLy8gICAgIGFuZ2xlOiAwLFxuICAvLyAgICAgZm9udDoge1xuICAvLyAgICAgICBzaXplOiAxMixcbiAgLy8gICAgICAgZmFtaWx5OiBcIkFyaWFsXCIsXG4gIC8vICAgICAgIHdlaWdodDogXCJib2xkXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgICB5b2Zmc2V0OiAnLTE3cHgnXG4gIC8vICAgfTtcblxuICAvLyAgIHJlbW92ZVByZXZpb3VzRHJhd25HcmFwaChjdXJyZW50TW9kZWwudGV4dF9pZCwgdHJ1ZSlcblxuICAvLyAgIGNvbnN0IHBvaW50VGV4dEljb24gPSBuZXcgR3JhcGhpYyh7XG4gIC8vICAgICBhdHRyaWJ1dGVzOiB7XG4gIC8vICAgICAgIGlkOiBjdXJyZW50TW9kZWwudGV4dF9pZCxcbiAgLy8gICAgICAgdHlwZTogJ3RleHQnLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIGdlb21ldHJ5OiBwb2ludCxcbiAgLy8gICAgIHN5bWJvbDogdGV4dFN5bWJvbFxuICAvLyAgIH0pO1xuXG4gIC8vICAgamltdU1hcFZpZXdSZWYuY3VycmVudC52aWV3LmdyYXBoaWNzLmFkZChwb2ludFRleHRJY29uKVxuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWFwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e21hcFdpZGdldElkfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgPC9NYXBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59IiwiaW1wb3J0IHsgQ2FsY2l0ZUFsZXJ0IH0gZnJvbSAnQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzLXJlYWN0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZVRleHRDb250YWluZXIge1xuICB0aXRsZTogc3RyaW5nXG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSUFsZXJ0UHJvcHMge1xuICBpZDogbnVtYmVyXG4gIGtpbmQ6XG4gICAgfCAnc3VjY2VzcydcbiAgICB8ICdkYW5nZXInXG4gICAgfCAnd2FybmluZydcbiAgICB8ICdpbmZvJ1xuICAgIHwgJ2JyYW5kJ1xuICBlbmFibGVBdXRvQ2xvc2U6IGJvb2xlYW5cbiAgYXV0b0Nsb3NlRHVyYXRpb246XG4gICAgfCAnZmFzdCdcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnc2xvdydcbiAgaWNvbj86IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xuICBzY2FsZT86ICdsJyB8ICdtJyB8ICdzJ1xuICBpbmZvPzogU2ltcGxlVGV4dENvbnRhaW5lciB8IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQWxlcnRQcm9wcyB7XG4gIGFsZXJ0OiBJQWxlcnRQcm9wc1xuICBvbkNhbGNpdGVBbGVydENsb3NlOiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IGRlZmF1bHRLaW5kT3B0aW9ucyA9IHtcbiAgc3VjY2Vzczoge1xuICAgIGljb246ICdjaGVjaycsXG4gICAgYXV0b0Nsb3NlRHVyYXRpb246ICdtZWRpdW0nXG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIGljb246ICd4JyxcbiAgICBhdXRvQ2xvc2VEdXJhdGlvbjogJ2Zhc3QnXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBpY29uOiAnZXhjbGFtYXRpb24tbWFyay10cmlhbmdsZSdcbiAgfVxufVxuXG5jb25zdCBBbGVydCA9IFJlYWN0Lm1lbW8oXG4gIChwcm9wczogQWxlcnRQcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGtpbmQsXG4gICAgICBlbmFibGVBdXRvQ2xvc2UsXG4gICAgICBhdXRvQ2xvc2VEdXJhdGlvbixcbiAgICAgIGljb24sXG4gICAgICBsYWJlbCxcbiAgICAgIHNjYWxlLFxuICAgICAgaW5mb1xuICAgIH0gPSBwcm9wcy5hbGVydFxuXG4gICAgY29uc3QgeyB0aXRsZSwgbWVzc2FnZSB9ID1cbiAgICAgIGluZm8gYXMgU2ltcGxlVGV4dENvbnRhaW5lclxuXG4gICAgY29uc3QgbWFwcGVkT3B0aW9ucyA9XG4gICAgICBkZWZhdWx0S2luZE9wdGlvbnNba2luZF1cbiAgICBjb25zdCBhdXRvQ2xvc2VUaW1lID1cbiAgICAgIGF1dG9DbG9zZUR1cmF0aW9uIHx8XG4gICAgICBtYXBwZWRPcHRpb25zPy5hdXRvQ2xvc2VEdXJhdGlvbiB8fFxuICAgICAgJ21lZGl1bSdcbiAgICBjb25zdCBpc0F1dG9DbG9zZWQgPSAhIShcbiAgICAgIGF1dG9DbG9zZVRpbWUgJiYgZW5hYmxlQXV0b0Nsb3NlXG4gICAgKVxuXG4gICAgY29uc3QgYWxlcnRSZWYgPVxuICAgICAgUmVhY3QudXNlUmVmPEhUTUxDYWxjaXRlQWxlcnRFbGVtZW50PihcbiAgICAgICAgbnVsbFxuICAgICAgKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRldGVjdGlvbkludGVydmFsID1cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFsZXJ0Q29udGFpbmVyID1cbiAgICAgICAgICAgIGFsZXJ0UmVmLmN1cnJlbnQuc2hhZG93Um9vdFxuICAgICAgICAgICAgICAuZmlyc3RDaGlsZFxuICAgICAgICAgIGlmICghYWxlcnRDb250YWluZXIpIHJldHVyblxuXG4gICAgICAgICAgOyhcbiAgICAgICAgICAgIGFsZXJ0Q29udGFpbmVyIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgKS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtMjBweCwgNHB4KSdcbiAgICAgICAgICBjbGVhckludGVydmFsKFxuICAgICAgICAgICAgZGV0ZWN0aW9uSW50ZXJ2YWxcbiAgICAgICAgICApXG4gICAgICAgIH0sIDUwKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGRldGVjdGlvbkludGVydmFsKVxuICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICAgIDxDYWxjaXRlQWxlcnRcbiAgICAgICAga2luZD17a2luZH1cbiAgICAgICAgb3BlblxuICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b20tZW5kXCJcbiAgICAgICAgYXV0b0Nsb3NlPXtpc0F1dG9DbG9zZWR9XG4gICAgICAgIGF1dG9DbG9zZUR1cmF0aW9uPXtcbiAgICAgICAgICBhdXRvQ2xvc2VUaW1lXG4gICAgICAgIH1cbiAgICAgICAgaWNvbj17XG4gICAgICAgICAgaWNvbiB8fCBtYXBwZWRPcHRpb25zPy5pY29uXG4gICAgICAgIH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBzY2FsZT17c2NhbGUgPz8gJ20nfVxuICAgICAgICBvbkNhbGNpdGVBbGVydENsb3NlPXtcbiAgICAgICAgICBwcm9wcy5vbkNhbGNpdGVBbGVydENsb3NlXG4gICAgICAgIH1cbiAgICAgICAgcmVmPXthbGVydFJlZn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAnLS1jYWxjaXRlLWFsZXJ0LXdpZHRoJzpcbiAgICAgICAgICAgICc0MDBweCdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyh0aXRsZSB8fCBtZXNzYWdlKSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cInRpdGxlXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzbG90PVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9DYWxjaXRlQWxlcnQ+XG4gICAgLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsImltcG9ydCB7IElNQ29uZmlnLCBJTVN0YXRlLCBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTk9USUZJQ0FUSU9OX1NUQVRFX0lEIH0gZnJvbSAnLi9jb25zdGFudHMvc3RhdGVJZCc7XG5cbmludGVyZmFjZSBTaW1wbGVUZXh0Q29udGFpbmVyIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuaW50ZXJmYWNlIElBbGVydCB7XG4gIGlkOiBudW1iZXI7XG4gIGluZm8/OiBTaW1wbGVUZXh0Q29udGFpbmVyIHwgc3RyaW5nO1xuICBraW5kOiAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdicmFuZCc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBzY2FsZT86ICdsJyB8ICdtJyB8ICdzJztcbiAgYXV0b0Nsb3NlRHVyYXRpb246ICdmYXN0JyB8ICdtZWRpdW0nIHwgJ3Nsb3cnO1xuICBlbmFibGVBdXRvQ2xvc2U6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNvbnN0IEFsZXJ0c0NvbnRhaW5lcjogUmVhY3QuRkM8YW55PiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IG5ld0FsZXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS53aWRnZXRzU3RhdGVbTk9USUZJQ0FUSU9OX1NUQVRFX0lEXT8uY3JlYXRlQWxlcnQpO1xuICBjb25zdCBbYWxlcnRzLCBzZXRBbGVydHNdID0gdXNlU3RhdGU8SUFsZXJ0W10+KFtdKVxuICBjb25zdCBbYWxlcnRJbmRleCwgc2V0QWxlcnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbmV3QWxlcnQpIFxuICAgICAgcmV0dXJuXG5cbiAgICBzZXRBbGVydHMoKHByZXYpID0+IFsuLi5wcmV2LCB7XG4gICAgICBpZDogYWxlcnRJbmRleCxcbiAgICAgIC4uLm5ld0FsZXJ0XG4gICAgfV0pXG4gICAgc2V0QWxlcnRJbmRleChwcmV2ID0+IHByZXYgKyAxKVxuICB9LCBbbmV3QWxlcnRdKTtcblxuICBjb25zdCBoYW5kbGVBbGVydENsb3NlID0gdXNlQ2FsbGJhY2soKGFsZXJ0SWQpID0+IHtcbiAgICBzZXRBbGVydHMoXG4gICAgICAocHJldikgPT4gcHJldi5maWx0ZXIoKGFsZXJ0KSA9PiBhbGVydC5pZCAhPT0gYWxlcnRJZClcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0namltdS13aWRnZXQnPlxuICAgICAge1xuICAgICAgICBhbGVydHMubWFwKChhbGVydCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAga2V5PXthbGVydC5pZH1cbiAgICAgICAgICAgICAgYWxlcnQ9e2FsZXJ0fSAgXG4gICAgICAgICAgICAgIG9uQ2FsY2l0ZUFsZXJ0Q2xvc2U9eygpID0+IGhhbmRsZUFsZXJ0Q2xvc2UoYWxlcnQuaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn0iLCJleHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OX1NUQVRFX0lEID0gJ25vdGlmaWNhdGlvblN0YXRlJ1xuIiwiaW1wb3J0IHsgQ2FsY2l0ZUZsb3dJdGVtIH0gZnJvbSAnQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzLXJlYWN0J1xuaW1wb3J0IHtcbiAgUmVhY3QsIGhvb2tzLCBqc3gsXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmV4cG9ydCBjb25zdCBSb3V0ZVNlbGVjdG9yQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcblxuICByZXR1cm4gKFxuICAgIDxDYWxjaXRlRmxvd0l0ZW1cbiAgICAgIGhlYWRpbmc9e3RyYW5zbGF0ZSgncm91dGVTZWxlY3RvclRpdGxlJyl9XG4gICAgICBiZWZvcmVCYWNrPXtwcm9wcy5vbkJhY2tUb0xpc3R9XG4gICAgICBsb2FkaW5nPXtmYWxzZX1cbiAgICA+XG4gICAgICBoZXlcbiAgICA8L0NhbGNpdGVGbG93SXRlbT5cbiAgKVxufSIsImV4cG9ydCAqIGZyb20gJy4vQXBwU2VsZWN0b3JDb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL1JvdXRlU2VsZWN0b3IvUm91dGVTZWxlY3RvckNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vSW50ZXJlc3RQb2ludC9JbnRlcmVzdFBvaW50Q29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9BdXRvbWF0aWNSb3V0ZS9BdXRvbWF0aWNSb3V0ZUNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vTWFudWFsUm91dGUvTWFudWFsUm91dGVDb21wb25lbnQnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcyc7XG5pbXBvcnQgeyBEYXRhT3B0aW9ucyB9IGZyb20gXCIuLi9jb21wb25lbnRzL01hbnVhbFJvdXRlL3R5cGVzXCI7XG5pbXBvcnQgeyBEcmF3UG9pbnRJbk1hcFByb3BzLCBnZXRBbmREcmF3TWFwTGF5ZXJUeXBlLCBQcm9qZWN0aW9uVmFsdWVzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgU2tldGNoVmlld01vZGVsIGZyb20gXCJAYXJjZ2lzL2NvcmUvd2lkZ2V0cy9Ta2V0Y2gvU2tldGNoVmlld01vZGVsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0QW5kRHJhd01hcExheWVyc1Byb3BzIHtcbiAgZGF0YUxpc3Q6IERhdGFPcHRpb25zW107XG4gIGZpbGVOYW1lOiBzdHJpbmc7XG4gIHByb2plY3Rpb246IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIE1hcENvbnRleHRQcm9wcyB7XG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldztcbiAgZ2V0QW5kRHJhd01hcExheWVyczogKGNvbmZpZzogR2V0QW5kRHJhd01hcExheWVyc1Byb3BzKSA9PiBnZXRBbmREcmF3TWFwTGF5ZXJUeXBlO1xuICBkcmF3U2VsZWN0ZWRDb29yZGluYXRlSW5NYXA6IChjb25maWc6IERyYXdQb2ludEluTWFwUHJvcHMpID0+IHZvaWQ7XG4gIHNrZXRjaFZpZXdNb2RlbDogU2tldGNoVmlld01vZGVsO1xuICByZW1vdmVQcmV2aW91c0RyYXduR3JhcGg6IChpZFBvaW50VG9SZW1vdmU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1hcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE1hcENvbnRleHRQcm9wcz4oe1xuICBqaW11TWFwVmlldzogbnVsbCxcbiAgZ2V0QW5kRHJhd01hcExheWVyczogbnVsbCxcbiAgZHJhd1NlbGVjdGVkQ29vcmRpbmF0ZUluTWFwOiBudWxsLFxuICBza2V0Y2hWaWV3TW9kZWw6IG51bGwsXG4gIHJlbW92ZVByZXZpb3VzRHJhd25HcmFwaDogbnVsbCxcbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XG5cbmludGVyZmFjZSBSb3V0ZUVkaXRpb25Db250ZXh0UHJvcHMge1xuICBtYXBXaWRnZXRJZDogc3RyaW5nIHwgbnVsbDtcbiAgU2V0dGluZ0NvbmZpZzogSU1Db25maWc7XG4gIGFwcENvbmZpZzogYW55O1xuICBwb3J0YWxVcmw6IHN0cmluZztcbiAgd2lkZ2V0SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFJvdXRlRWRpdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFJvdXRlRWRpdGlvbkNvbnRleHRQcm9wcz4oe1xuICBtYXBXaWRnZXRJZDogbnVsbCxcbiAgU2V0dGluZ0NvbmZpZzogbnVsbCxcbiAgYXBwQ29uZmlnOiBudWxsLFxuICBwb3J0YWxVcmw6IG51bGwsXG4gIHdpZGdldElkOiBudWxsLFxufSkiLCJleHBvcnQgKiBmcm9tICcuL1JvdXRlRWRpdGlvbkNvbnRleHQnXG5leHBvcnQgKiBmcm9tICcuL01hcENvbnRleHQnIiwiZXhwb3J0IGRlZmF1bHQge1xuICByb3V0ZVNlbGVjdG9yVGl0bGU6ICdTZWxlY2Npb25hJyxcbiAgaW50ZXJlc3RQb2ludFRpdGxlOiAnTm91IHB1bnQgZFxcJ2ludGVyw6hzJyxcbiAgbWFudWFsUm91dGVUaXRsZTogJ05vdmEgcnV0YSBtYW51YWwnLFxuICBhdXRvbWF0aWNSb3V0ZVRpdGxlOiAnTm92YSBydXRhIGF1dG9tw6B0aWNhJyxcbiAgdGl0bGU6ICdUaXRvbCcsXG4gIGFkZHJlc3M6ICdBZHJlw6dhJyxcbiAgc3RvcDogJ1BhcmFkYScsXG4gIGFkZF9zdG9wOiAnQWZlZ2lyIFBhcmFkYScsXG4gIG5ld1JvdXRlOiAnTm92YSBSdXRhJyxcbiAgZXJyb3JTZWFyY2hOb3RDb25maWd1cmVkVGl0bGU6ICdWYWphIHNlbWJsYSBxdWUgZXQgZmFsdGEgY29uZmlndXJhciBlbCBidXNjYWRvciEnLFxuICBlcnJvclNlYXJjaE5vdENvbmZpZ3VyZWRNZXNzYWdlOiAnTmVjZXNzaXRlcyBhY2NlZGlyIGFsIGV4cGVyaWVuY2UgYnVpbGRlciBwZXIgY29uZmlndXJhciBlbHMgdGlwdXMgZGUgY2VyY2EgcGVyIGFsIHdpZGdldC4nLFxuICBlcnJvclNlYXJjaE5vdEF2YWlsYWJsZUFyZWFQb2ludFRpdGxlOiAnUHVudCBubyBwZXJtw6hzJyxcbiAgZXJyb3JTZWFyY2hOb3RBdmFpbGFibGVBcmVhUG9pbnRNZXNzYWdlOiAnU2VtYmxhIHNlciBxdWUgaGFzIGludGVudGF0IHBvc2FyIHVuIHB1bnQgZm9yYSBkZSBsXFwnw6ByZWEgZGUgVGFycmFnb25hLicsXG4gIGZpbGVJc1VwbG9hZGluZzogJ1NcXCdlc3TDoCBjYXJyZWdhbnQnLFxuICBjYW5jZWw6ICdDYW5jZWzCt2xhJyxcbiAgZXhlY3V0ZV86ICdFeGVjdXRhJ1xufSIsImV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWRBcHBUeXBlcydcbmV4cG9ydCAqIGZyb20gJy4vbWFwVHlwZXMnIiwiaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIjtcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIkBhcmNnaXMvY29yZS9nZW9tZXRyeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Rpb25WYWx1ZXMge1xuICB3a2lkOiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEdlb21ldHJ5VHlwZSA9ICdwb2ludCcgfCAnbXVsdGlwb2ludCcgfCAncG9seWxpbmUnIHwgJ3BvbHlnb24nIHwgJ2V4dGVudCcgfCAnbWVzaCdcblxuZXhwb3J0IHR5cGUgZ2V0QW5kRHJhd01hcExheWVyVHlwZSA9IHsgW2lkOiBzdHJpbmddOiBHcmFwaGljc0xheWVyIHwgRmVhdHVyZUxheWVyIH1cblxuLy8gZXhwb3J0IGludGVyZmFjZSBHcmFwaFBvaW50UGFyYW1zIHtcbi8vICAgZW5jb2RlZEJhc2U2NFVybDogc3RyaW5nO1xuLy8gICBoYXNUZXh0SW5NYXA6IGJvb2xlYW47XG4vLyB9XG5cblxuZXhwb3J0IGludGVyZmFjZSBXYXlwb2ludFJvd1Byb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbGF0OiBudW1iZXI7XG4gIGxvbjogbnVtYmVyO1xuICBzdG9wOiBudW1iZXI7XG4gIGluZGV4OiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuLy8gZXhwb3J0IGludGVyZmFjZSBNb2RlbEZpbHRlclJvdXRlIHtcbi8vICAgLy8gdHlwZTogc3RyaW5nO1xuLy8gICBsYXQ6IG51bWJlcjtcbi8vICAgbG9uOiBudW1iZXI7XG4vLyAgIHRpdGxlOiBzdHJpbmc7XG4vLyAgIC8vIGRpcmVjdGlvbjogc3RyaW5nO1xuLy8gICBpZDogc3RyaW5nO1xuLy8gICAvLyB0ZXh0X2lkPzogc3RyaW5nO1xuLy8gICBpbmRleDogbnVtYmVyO1xuLy8gICAvLyBpc1dheXBvaW50PzogYm9vbGVhbjtcbi8vICAgLy8gZGlyZWN0aW9uVGV4dDogc3RyaW5nO1xuLy8gICAvLyByZXF1ZXN0X2lkOiBudW1iZXI7XG4vLyAgIC8vIGZlYXR1cmU6IGFueTtcbi8vIH1cblxuZXhwb3J0IGludGVyZmFjZSBEcmF3UG9pbnRJbk1hcFByb3BzIHtcbiAgcG9pbnQ6IFBvaW50O1xuICAvLyBwb2ludFR5cGU6IEdyYXBoUG9pbnRQYXJhbXM7XG4gIGN1cnJlbnRNb2RlbENvbmZpZz86IFdheXBvaW50Um93UHJvcHM7XG4gIGluZGV4PzogbnVtYmVyO1xufSIsImV4cG9ydCBlbnVtIFNlbGVjdGVkQXBwRW51bXtcbiAgQXBwU2VsZWN0b3IgPSAnQXBwU2VsZWN0b3InLFxuICBSb3V0ZVNlbGVjdG9yID0gJ1JvdXRlU2VsZWN0b3InLFxuICBOZXdJbnRlcmVzdFBvaW50ID0gJ05ld0ludGVyZXN0UG9pbnQnLFxuICBOZXdNYW51YWxSb3V0ZSA9ICdOZXdNYW51YWxSb3V0ZScsXG4gIEF1dG9tYXRpY1JvdXRlID0gJ0F1dG9tYXRpY1JvdXRlJyxcbn1cblxuZXhwb3J0IHR5cGUgU2VsZWN0ZWRBcHBUeXBlID0gU2VsZWN0ZWRBcHBFbnVtIiwiaW1wb3J0IHsgYXBwQWN0aW9ucywgZ2V0QXBwU3RvcmUgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBOT1RJRklDQVRJT05fU1RBVEVfSUQgfSBmcm9tIFwiLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvY29uc3RhbnRzL3N0YXRlSWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVUZXh0Q29udGFpbmVyIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0UHJvcHMge1xuICBpbmZvPzogU2ltcGxlVGV4dENvbnRhaW5lciB8IHN0cmluZztcbiAga2luZDogJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnYnJhbmQnO1xuICBsYWJlbD86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgc2NhbGU/OiAnbCcgfCAnbScgfCAncyc7XG4gIGF1dG9DbG9zZUR1cmF0aW9uPzogJ2Zhc3QnIHwgJ21lZGl1bScgfCAnc2xvdyc7XG4gIGVuYWJsZUF1dG9DbG9zZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBXaWRnZXRVdGlscyB7XG4gIGV4cG9ydCBjb25zdCBjcmVhdGVBbGVydCA9IChhbGVydDogQWxlcnRQcm9wcykgPT4ge1xuICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goXG4gICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShOT1RJRklDQVRJT05fU1RBVEVfSUQsIFwiY3JlYXRlQWxlcnRcIiwge1xuICAgICAgICAuLi5hbGVydFxuICAgICAgfSlcbiAgICApO1xuICB9O1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBNb2RhbEhlYWRlciB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuaW50ZXJmYWNlIEdlbmVyaWNNb2RhbFByb3BzIHtcbiAgbW9kYWxDYWxsYmFjazogKCkgPT4gdm9pZDsgXG4gIHVwZGF0ZVNob3dNb2RhbFN0YXR1czogKGJvb2xlYW4pID0+IHZvaWQ7XG4gIHNob3dNb2RhbFN0YXR1czogYm9vbGVhbjsgXG4gIGhlYWRlckRhdGE6IHN0cmluZzsgXG4gIGJvZHlEYXRhOiBzdHJpbmc7XG4gIGRlbGV0ZVRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgR2VuZXJpY01vZGFsID0gKHByb3BzOiBHZW5lcmljTW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbW9kYWxDYWxsYmFjaywgdXBkYXRlU2hvd01vZGFsU3RhdHVzLFxuICAgIHNob3dNb2RhbFN0YXR1cywgaGVhZGVyRGF0YSwgYm9keURhdGEsXG4gICAgZGVsZXRlVGl0bGUgPSAnZGVsZXRlXycsXG4gIH0gPSBwcm9wc1xuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB1cGRhdGVTaG93TW9kYWxTdGF0dXMoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpXG4gICAgbW9kYWxDYWxsYmFjaygpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIHRvZ2dsZT17aGFuZGxlQ2xvc2V9XG4gICAgICBpc09wZW49e3Nob3dNb2RhbFN0YXR1c31cbiAgICAgIGNvbnRlbnRDbGFzc05hbWU9XCJyZW1vdmUtbW9kYWxcIlxuICAgICAgY3NzPXtzdHlsZXN9XG4gICAgPlxuICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgIGNsb3NlSWNvbj17PEljb24gaWNvbj0nPHN2ZyB4bWxucz0mcXVvdDtodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyZxdW90OyBmaWxsPSZxdW90O25vbmUmcXVvdDsgdmlld0JveD0mcXVvdDswIDAgMTYgMTYmcXVvdDs+PHBhdGggZmlsbD0mcXVvdDsjMDAwJnF1b3Q7IGQ9JnF1b3Q7bTguNzQ1IDggNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ1Ljc0Nkw4IDguNzQ2bC02LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDYtLjc0Nmw2LjEtNi4xLTYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni0uNzQ2bDYuMSA2LjEgNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2Ljc0NnomcXVvdDs+PC9wYXRoPjwvc3ZnPicgXG4gICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogJzEwcHgnfX0gLz59XG4gICAgICAgIHRvZ2dsZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIHtoZWFkZXJEYXRhfVxuICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgIFxuICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAge2JvZHlEYXRhfVxuICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICBcbiAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAge3RyYW5zbGF0ZSgnY2FuY2VsXycpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX1cbiAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdGUoZGVsZXRlVGl0bGUpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIC5yZW1vdmUtbW9kYWwgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICAgIHBhZGRpbmc6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGluaXRpYWwgIWltcG9ydGFudDtcbiAgfVxuYCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FuY2VsXzogJ0NhbmNlbGFyJyxcbiAgZGVsZXRlXzogJ0JvcnJhcicsXG4gIHJlc2V0XzogJ1Jlc2V0ZWFyJyxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejQ4SVMwdElGVndiRzloWkdWa0lIUnZPaUJUVmtjZ1VtVndieXdnZDNkM0xuTjJaM0psY0c4dVkyOXRMQ0JIWlc1bGNtRjBiM0k2SUZOV1J5QlNaWEJ2SUUxcGVHVnlJRlJ2YjJ4eklDMHRQZzBLUEhOMlp5QjNhV1IwYUQwaU9EQXdjSGdpSUdobGFXZG9kRDBpT0RBd2NIZ2lJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMHhNaUF5TVM0eU5VTXhNUzQzTmpJeklESXhMakkxSURFeExqVXlOamtnTWpFdU1qQXpNeUF4TVM0ek1EY3pJREl4TGpFeE1qTkRNVEV1TURnM055QXlNUzR3TWpFMElERXdMamc0T0RFZ01qQXVPRGc0TVNBeE1DNDNNaUF5TUM0M01rd3pMakk0SURFekxqSTRRek11TVRFeE9EZ2dNVE11TVRFeE9TQXlMamszT0RVeklERXlMamt4TWpRZ01pNDRPRGMxTkNBeE1pNDJPVEk0UXpJdU56azJOVFlnTVRJdU5EY3pNU0F5TGpjME9UY3pJREV5TGpJek56Y2dNaTQzTkRrM015QXhNa015TGpjME9UY3pJREV4TGpjMk1qTWdNaTQzT1RZMU5pQXhNUzQxTWpZNUlESXVPRGczTlRRZ01URXVNekEzTTBNeUxqazNPRFV6SURFeExqQTROellnTXk0eE1URTRPQ0F4TUM0NE9EZ3hJRE11TWpnZ01UQXVOekpNTVRBdU56SWdNeTR5T0RBd01VTXhNUzR3TmpVMklESXVPVFV5TWpRZ01URXVOVEl6TnlBeUxqYzJPVFV6SURFeUlESXVOelk1TlRORE1USXVORGMyTXlBeUxqYzJPVFV6SURFeUxqa3pORFFnTWk0NU5USXlOQ0F4TXk0eU9DQXpMakk0TURBeFRESXdMamN5SURFd0xqY3lRekl3TGpnNE9ERWdNVEF1T0RnNE1TQXlNUzR3TWpFMUlERXhMakE0TnpZZ01qRXVNVEV5TlNBeE1TNHpNRGN6UXpJeExqSXdNelFnTVRFdU5USTJPU0F5TVM0eU5UQXpJREV4TGpjMk1qTWdNakV1TWpVd015QXhNa015TVM0eU5UQXpJREV5TGpJek56Y2dNakV1TWpBek5DQXhNaTQwTnpNeElESXhMakV4TWpVZ01USXVOamt5T0VNeU1TNHdNakUxSURFeUxqa3hNalFnTWpBdU9EZzRNU0F4TXk0eE1URTVJREl3TGpjeUlERXpMakk0VERFekxqSTRJREl3TGpjeVF6RXpMakV4TVRrZ01qQXVPRGc0TVNBeE1pNDVNVEl6SURJeExqQXlNVFFnTVRJdU5qa3lOeUF5TVM0eE1USXpRekV5TGpRM016RWdNakV1TWpBek15QXhNaTR5TXpjM0lESXhMakkxSURFeUlESXhMakkxV2sweE1pQTBMakkxTURBeFF6RXhMamsyTURVZ05DNHlORGczTlNBeE1TNDVNakV6SURRdU1qVTJNVFlnTVRFdU9EZzFJRFF1TWpjeE56RkRNVEV1T0RRNE55QTBMakk0TnpJMklERXhMamd4TmpNZ05DNHpNVEExTnlBeE1TNDNPU0EwTGpNME1EQXhURFF1TXpRZ01URXVOemxETkM0ek1URTFOaUF4TVM0NE1UY3hJRFF1TWpnNE9USWdNVEV1T0RRNU55QTBMakkzTXpRMUlERXhMamc0TlRoRE5DNHlOVGM1T0NBeE1TNDVNakU1SURRdU1qVWdNVEV1T1RZd055QTBMakkxSURFeVF6UXVNalVnTVRJdU1ETTVNeUEwTGpJMU56azRJREV5TGpBM09ESWdOQzR5TnpNME5TQXhNaTR4TVRRelF6UXVNamc0T1RJZ01USXVNVFV3TXlBMExqTXhNVFUySURFeUxqRTRNamtnTkM0ek5DQXhNaTR5TVV3eE1TNDNPU0F4T1M0Mk5rTXhNUzQ0TVRJM0lERTVMalk1TlRFZ01URXVPRFF6T0NBeE9TNDNNak01SURFeExqZzRNRFFnTVRrdU56UXpPVU14TVM0NU1UY3hJREU1TGpjMk16a2dNVEV1T1RVNE1pQXhPUzQzTnpRMElERXlJREU1TGpjM05EUkRNVEl1TURReE9DQXhPUzQzTnpRMElERXlMakE0TWprZ01Ua3VOell6T1NBeE1pNHhNVGsySURFNUxqYzBNemxETVRJdU1UVTJNaUF4T1M0M01qTTVJREV5TGpFNE56TWdNVGt1TmprMU1TQXhNaTR5TVNBeE9TNDJOa3d4T1M0Mk5pQXhNaTR5TVVNeE9TNDJPRGcwSURFeUxqRTRNamtnTVRrdU56RXhNU0F4TWk0eE5UQXpJREU1TGpjeU5qWWdNVEl1TVRFME0wTXhPUzQzTkRJZ01USXVNRGM0TWlBeE9TNDNOU0F4TWk0d016a3pJREU1TGpjMUlERXlRekU1TGpjMUlERXhMamsyTURjZ01Ua3VOelF5SURFeExqa3lNVGtnTVRrdU56STJOaUF4TVM0NE9EVTRRekU1TGpjeE1URWdNVEV1T0RRNU55QXhPUzQyT0RnMElERXhMamd4TnpFZ01Ua3VOallnTVRFdU56bE1NVEl1TWpFZ05DNHpOREF3TVVNeE1pNHhPRE0zSURRdU16RXdOVGNnTVRJdU1UVXhNeUEwTGpJNE56STJJREV5TGpFeE5TQTBMakkzTVRjeFF6RXlMakEzT0RjZ05DNHlOVFl4TmlBeE1pNHdNemsxSURRdU1qUTROelVnTVRJZ05DNHlOVEF3TVZvaUlHWnBiR3c5SWlNd01EQXdNREFpTHo0TkNqeHdZWFJvSUdROUlrMHhNQzQzTXlBeE5DNDBNa014TUM0Mk16RTFJREUwTGpReU1EVWdNVEF1TlRNek9DQXhOQzQwTURFeklERXdMalEwTWpnZ01UUXVNell6TlVNeE1DNHpOVEU0SURFMExqTXlOVGNnTVRBdU1qWTVNeUF4TkM0eU56QXhJREV3TGpJZ01UUXVNa3c0TGpBd01EQXhJREV5UXpjdU9EVTVOVFlnTVRFdU9EVTVOQ0EzTGpjNE1EWTNJREV4TGpZMk9EZ2dOeTQzT0RBMk55QXhNUzQwTjBNM0xqYzRNRFkzSURFeExqSTNNVE1nTnk0NE5UazFOaUF4TVM0d09EQTJJRGd1TURBd01ERWdNVEF1T1RSTU1UQXVNaUE0TGpjeU1EQXhRekV3TGpNME1EWWdPQzQxTnprMU5pQXhNQzQxTXpFeklEZ3VOVEF3TmpjZ01UQXVOek1nT0M0MU1EQTJOME14TUM0NU1qZzRJRGd1TlRBd05qY2dNVEV1TVRFNU5DQTRMalUzT1RVMklERXhMakkySURndU56SXdNREZETVRFdU5EQXdOU0E0TGpnMk1EWTBJREV4TGpRM09UTWdPUzR3TlRFeU5pQXhNUzQwTnpreklEa3VNalV3TURGRE1URXVORGM1TXlBNUxqUTBPRGMySURFeExqUXdNRFVnT1M0Mk16a3pPU0F4TVM0eU5pQTVMamM0TURBeFREa3VOVFl3TURFZ01URXVORFpNTVRFdU1qWWdNVE11TVRSRE1URXVOREF3TlNBeE15NHlPREEySURFeExqUTNPVE1nTVRNdU5EY3hNeUF4TVM0ME56a3pJREV6TGpZM1F6RXhMalEzT1RNZ01UTXVPRFk0T0NBeE1TNDBNREExSURFMExqQTFPVFFnTVRFdU1qWWdNVFF1TWtNeE1TNHhPVEE0SURFMExqSTNNREVnTVRFdU1UQTRNaUF4TkM0ek1qVTNJREV4TGpBeE56SWdNVFF1TXpZek5VTXhNQzQ1TWpZeUlERTBMalF3TVRNZ01UQXVPREk0TlNBeE5DNDBNakExSURFd0xqY3pJREUwTGpReVdpSWdabWxzYkQwaUl6QXdNREF3TUNJdlBnMEtQSEJoZEdnZ1pEMGlUVEUxTGpVZ01UVkRNVFV1TXpBeE9TQXhOQzQ1T1RjMElERTFMakV4TWpZZ01UUXVPVEUzTmlBeE5DNDVOekkxSURFMExqYzNOelZETVRRdU9ETXlOQ0F4TkM0Mk16YzBJREUwTGpjMU1qWWdNVFF1TkRRNE1TQXhOQzQzTlNBeE5DNHlOVll4TWk0eU5VZzRMalZET0M0ek1ERXdPU0F4TWk0eU5TQTRMakV4TURNeUlERXlMakUzTVNBM0xqazJPVFkzSURFeUxqQXpNRE5ETnk0NE1qa3dNaUF4TVM0NE9EazNJRGN1TnpVZ01URXVOams0T1NBM0xqYzFJREV4TGpWRE55NDNOU0F4TVM0ek1ERXhJRGN1T0RJNU1ESWdNVEV1TVRFd015QTNMamsyT1RZM0lERXdMamsyT1RkRE9DNHhNVEF6TWlBeE1DNDRNamtnT0M0ek1ERXdPU0F4TUM0M05TQTRMalVnTVRBdU56VklNVFV1TlVNeE5TNDJPVGd4SURFd0xqYzFNallnTVRVdU9EZzNOQ0F4TUM0NE16STBJREUyTGpBeU56VWdNVEF1T1RjeU5VTXhOaTR4TmpjMklERXhMakV4TWpZZ01UWXVNalEzTkNBeE1TNHpNREU1SURFMkxqSTFJREV4TGpWV01UUXVNamxETVRZdU1qTTNOQ0F4TkM0ME9ERXhJREUyTGpFMU16SWdNVFF1TmpZd015QXhOaTR3TVRReElERTBMamM1TWtNeE5TNDROelV4SURFMExqa3lNellnTVRVdU5qa3hOU0F4TkM0NU9UYzVJREUxTGpVZ01UVmFJaUJtYVd4c1BTSWpNREF3TURBd0lpOCtEUW84TDNOMlp6ND1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0RRbzhJUzB0SUZWd2JHOWhaR1ZrSUhSdk9pQlRWa2NnVW1Wd2J5d2dkM2QzTG5OMlozSmxjRzh1WTI5dExDQkhaVzVsY21GMGIzSTZJRk5XUnlCU1pYQnZJRTFwZUdWeUlGUnZiMnh6SUMwdFBnMEtQSE4yWnlCM2FXUjBhRDBpT0RBd2NIZ2lJR2hsYVdkb2REMGlPREF3Y0hnaUlIWnBaWGRDYjNnOUlqQWdMVEF1TlNBeU1TQXlNU0lnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0TkNpQWdJQ0FOQ2lBZ0lDQThkR2wwYkdVK1pXUnBkRjlqYjNabGNpQmJJekUwT0RGZFBDOTBhWFJzWlQ0TkNpQWdJQ0E4WkdWell6NURjbVZoZEdWa0lIZHBkR2dnVTJ0bGRHTm9Mand2WkdWell6NE5DaUFnSUNBOFpHVm1jejROQ2cwS1BDOWtaV1p6UGcwS0lDQWdJRHhuSUdsa1BTSlFZV2RsTFRFaUlITjBjbTlyWlQwaWJtOXVaU0lnYzNSeWIydGxMWGRwWkhSb1BTSXhJaUJtYVd4c1BTSnViMjVsSWlCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaVBnMEtJQ0FnSUNBZ0lDQThaeUJwWkQwaVJISnBZbUppYkdVdFRHbG5hSFF0VUhKbGRtbGxkeUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xUUXhPUzR3TURBd01EQXNJQzB6TlRrdU1EQXdNREF3S1NJZ1ptbHNiRDBpSXpBd01EQXdNQ0krRFFvZ0lDQWdJQ0FnSUNBZ0lDQThaeUJwWkQwaWFXTnZibk1pSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEVTJMakF3TURBd01Dd2dNVFl3TGpBd01EQXdNQ2tpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWswek9EUXNNakE1TGpJeE1EUTNOU0JNTXpnMExESXhPU0JNTXpZekxESXhPU0JNTXpZekxERTVPUzQwTWpBNU5TQk1NemN6TGpVc01UazVMalF5TURrMUlFd3pOek11TlN3eU1ERXVNemM0T0RVMUlFd3pOalV1TVN3eU1ERXVNemM0T0RVMUlFd3pOalV1TVN3eU1UY3VNRFF5TURrMUlFd3pPREV1T1N3eU1UY3VNRFF5TURrMUlFd3pPREV1T1N3eU1Ea3VNakV3TkRjMUlFd3pPRFFzTWpBNUxqSXhNRFEzTlNCYUlFMHpOekF1TXpVc01qQTVMalV4TXprMUlFd3pOemd1Tnpjek1Td3lNREV1TmpRMU1UTWdURE00TUM0ME1EUTRMREl3TXk0Mk5ETXhOeklnVERNM01TNDRPREU1TlN3eU1USXVNVFEzTXpNeUlFd3pOekF1TXpVc01qRXlMakUwTnpNek1pQk1NemN3TGpNMUxESXdPUzQxTVRNNU5TQmFJRTB6TmpndU1qVXNNakUwTGpFd05USXpOeUJNTXpjeUxqYzRNVGdzTWpFMExqRXdOVEl6TnlCTU16Z3pMakU0TkRFMUxESXdNeTQyTkRVeE15Qk1NemM0TGpneU9UZ3NNVGs1SUV3ek5qZ3VNalVzTWpBNExqWTROemN4TkNCTU16WTRMakkxTERJeE5DNHhNRFV5TXpjZ1dpSWdhV1E5SW1Wa2FYUmZZMjkyWlhJdFd5TXhORGd4WFNJK0RRb05Dand2Y0dGMGFENE5DaUFnSUNBZ0lDQWdJQ0FnSUR3dlp6NE5DaUFnSUNBZ0lDQWdQQzluUGcwS0lDQWdJRHd2Wno0TkNqd3ZjM1puUGc9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0OElTMHRJRlZ3Ykc5aFpHVmtJSFJ2T2lCVFZrY2dVbVZ3Ynl3Z2QzZDNMbk4yWjNKbGNHOHVZMjl0TENCSFpXNWxjbUYwYjNJNklGTldSeUJTWlhCdklFMXBlR1Z5SUZSdmIyeHpJQzB0UGdvOGMzWm5JR1pwYkd3OUlpTXdNREF3TURBaUlIZHBaSFJvUFNJNE1EQndlQ0lnYUdWcFoyaDBQU0k0TURCd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ29nSUR4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUZ3VPREk1TWprME1qa3NNakFnUXpndU5ERTNORFUzT0Rnc01qRXVNVFkxTVRreU5DQTNMak13TmpJeE9EZ3pMREl5SURZc01qSWdRelF1TXpRek1UUTFOelVzTWpJZ015d3lNQzQyTlRZNE5UUXlJRE1zTVRrZ1F6TXNNVGN1TXpRek1UUTFPQ0EwTGpNME16RTBOVGMxTERFMklEWXNNVFlnUXpjdU16QTJNakU0T0RNc01UWWdPQzQwTVRjME5UYzRPQ3d4Tmk0NE16UTRNRGMySURndU9ESTVNamswTWprc01UZ2dUREUzTGpVc01UZ2dRekU0TGpnNE1EY3hNVGtzTVRnZ01qQXNNVFl1T0Rnd056RXhPU0F5TUN3eE5TNDFJRU15TUN3eE5DNHhNVGt5T0RneElERTRMamc0TURjeE1Ua3NNVE1nTVRjdU5Td3hNeUJNTmk0MUxERXpJRU0wTGpBeE5EY3hPRFl6TERFeklESXNNVEF1T1RnMU1qZ3hOQ0F5TERndU5TQkRNaXcyTGpBeE5EY3hPRFl6SURRdU1ERTBOekU0TmpNc05DQTJMalVzTkNCTU9TNDFPRFUzT0RZME5DdzBJRXc0TGpJNU1qZzVNekl5TERJdU56QTNNVEEyTnpnZ1REa3VOekEzTVRBMk56Z3NNUzR5T1RJNE9UTXlNaUJNTVRNdU5ERTBNakV6Tml3MUlFdzVMamN3TnpFd05qYzRMRGd1TnpBM01UQTJOemdnVERndU1qa3lPRGt6TWpJc055NHlPVEk0T1RNeU1pQk1PUzQxT0RVM09EWTBOQ3cySUV3MkxqVXNOaUJETlM0eE1Ua3lPRGd4TXl3MklEUXNOeTR4TVRreU9EZ3hNeUEwTERndU5TQkROQ3c1TGpnNE1EY3hNVGczSURVdU1URTVNamc0TVRNc01URWdOaTQxTERFeElFd3hOeTQxTERFeElFTXhPUzQ1T0RVeU9ERTBMREV4SURJeUxERXpMakF4TkRjeE9EWWdNaklzTVRVdU5TQkRNaklzTVRjdU9UZzFNamd4TkNBeE9TNDVPRFV5T0RFMExESXdJREUzTGpVc01qQWdURGd1T0RJNU1qazBNamtzTWpBZ1dpQk5OaXd4T0NCRE5TNDBORGMzTVRVeU5Td3hPQ0ExTERFNExqUTBOemN4TlRNZ05Td3hPU0JETlN3eE9TNDFOVEl5T0RRM0lEVXVORFEzTnpFMU1qVXNNakFnTml3eU1DQkROaTQxTlRJeU9EUTNOU3d5TUNBM0xERTVMalUxTWpJNE5EY2dOeXd4T1NCRE55d3hPQzQwTkRjM01UVXpJRFl1TlRVeU1qZzBOelVzTVRnZ05pd3hPQ0JhSUUweE9Dd3lJRU14T1M0Mk5UWTROVFF5TERJZ01qRXNNeTR6TkRNeE5EVTNOU0F5TVN3MUlFTXlNU3cyTGpZMU5qZzFOREkxSURFNUxqWTFOamcxTkRJc09DQXhPQ3c0SUVNeE5pNHpORE14TkRVNExEZ2dNVFVzTmk0Mk5UWTROVFF5TlNBeE5TdzFJRU14TlN3ekxqTTBNekUwTlRjMUlERTJMak0wTXpFME5UZ3NNaUF4T0N3eUlGb2dUVEU0TERRZ1F6RTNMalEwTnpjeE5UTXNOQ0F4Tnl3MExqUTBOemN4TlRJMUlERTNMRFVnUXpFM0xEVXVOVFV5TWpnME56VWdNVGN1TkRRM056RTFNeXcySURFNExEWWdRekU0TGpVMU1qSTRORGNzTmlBeE9TdzFMalUxTWpJNE5EYzFJREU1TERVZ1F6RTVMRFF1TkRRM056RTFNalVnTVRndU5UVXlNamcwTnl3MElERTRMRFFnV2lJdlBnbzhMM04yWno0PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0OElTMHRJRlZ3Ykc5aFpHVmtJSFJ2T2lCVFZrY2dVbVZ3Ynl3Z2QzZDNMbk4yWjNKbGNHOHVZMjl0TENCSFpXNWxjbUYwYjNJNklGTldSeUJTWlhCdklFMXBlR1Z5SUZSdmIyeHpJQzB0UGdvOGMzWm5JSGRwWkhSb1BTSTRNREJ3ZUNJZ2FHVnBaMmgwUFNJNE1EQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGdvZ0lEeHdZWFJvSUdacGJHdzlJbTV2Ym1VaUlITjBjbTlyWlQwaUl6QXdNREF3TUNJZ2MzUnliMnRsTFhkcFpIUm9QU0l5SWlCa1BTSk5PQ3d4SUV3eE5Dd3hJRXc0TERFZ1dpQk5NVGt1TVRnNExERTVMalEzTWlCTU1UWXNNaklnVERFeUxqVXNNVGN1TlNCTU9TNDFMREl4SUV3M0xEY2dUREl3TERFekxqVWdUREUxTGpVc01UVWdUREU1TGpFNE9Dd3hPUzQwTnpJZ1dpQk5NVGtzTkNCTU1Ua3NNU0JNTVRZc01TQk5OaXd4SUV3ekxERWdURE1zTkNCTk15d3hOQ0JNTXl3eE55Qk1OaXd4TnlCTk1Ua3NOaUJNTVRrc01UQWdUREU1TERZZ1dpQk5NeXd4TWlCTU15dzJJRXd6TERFeUlGb2lMejRLUEM5emRtYytcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXlOQ0lnYUdWcFoyaDBQU0l5TkNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElqNEtJQ0E4WnlCcFpEMGlSM0oxY0c5Zk1qUWlJR1JoZEdFdGJtRnRaVDBpUjNKMWNHOGdNalFpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtERTJNQ0F0TXpjMEtTSStDaUFnSUNBOFp5QnBaRDBpUjNKMWNHOWZNVGtpSUdSaGRHRXRibUZ0WlQwaVIzSjFjRzhnTVRraUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzB4TmpBZ016YzBLU0krQ2lBZ0lDQWdJRHh5WldOMElHbGtQU0pTWldOMHc2RnVaM1ZzYjE4eE15SWdaR0YwWVMxdVlXMWxQU0pTWldOMHc2RnVaM1ZzYnlBeE15SWdkMmxrZEdnOUlqSTBJaUJvWldsbmFIUTlJakkwSWlCbWFXeHNQU0p1YjI1bElpOCtDaUFnSUNBOEwyYytDaUFnSUNBOGNHRjBhQ0JwWkQwaVpHVnNaWFJsWHpJMFpIQmZSVGhGUVVWRVgwWkpURXd3WDNkbmFIUXlNREJmUjFKQlJEQmZiM0J6ZWpJMElpQmtQU0pOTWpBekxqSTJNUzAzTnpFdU1UQTRZVEV1T1RReUxERXVPVFF5TERBc01Dd3hMVEV1TkRJMkxTNDFPRGtzTVM0NU5ETXNNUzQ1TkRNc01Dd3dMREV0TGpVNE9TMHhMalF5Tm5ZdE1UVXVORFF5U0RJd01IWXRNUzR5TkRkb05DNDVPRGgyTFM0NU5UbG9OeTQwT0RGMkxqazFPV2cwTGprNE4zWXhMakkwTjJndE1TNHlORGQyTVRVdU5EUXlZVEV1T1RVeExERXVPVFV4TERBc01Dd3hMUzQxTnpjc01TNDBNemdzTVM0NU5URXNNUzQ1TlRFc01Dd3dMREV0TVM0ME16Z3VOVGMzV20weE1TNDNMVEUzTGpRMU5rZ3lNREl1TkRrMGRqRTFMalEwTW1FdU56UTRMamMwT0N3d0xEQXNNQ3d1TWpFMkxqVTFNaTQzTkRjdU56UTNMREFzTUN3d0xDNDFOVEl1TWpFMlNESXhOQzR5WVM0M016TXVOek16TERBc01Dd3dMQzQxTWpndExqSTBMamN6TXk0M016TXNNQ3d3TERBc0xqSTBMUzQxTWpoYWJTMDRMamsyT0N3eE15NDNNVFpvTVM0eU5EZFdMVGM0Tmk0d04yZ3RNUzR5TkRkYWJUUXVNaklzTUdneExqSTBOMVl0TnpnMkxqQTNhQzB4TGpJME4xcHRMVGN1TnpJeExURXpMamN4Tm5Zd1dpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTFRNMU5pNDNNamdnTVRFMk5pNDVNemtwSWlCbWFXeHNQU0p5WldRaUx6NEtJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0OElTMHRJRlZ3Ykc5aFpHVmtJSFJ2T2lCVFZrY2dVbVZ3Ynl3Z2QzZDNMbk4yWjNKbGNHOHVZMjl0TENCSFpXNWxjbUYwYjNJNklGTldSeUJTWlhCdklFMXBlR1Z5SUZSdmIyeHpJQzB0UGcwS1BITjJaeUIzYVdSMGFEMGlPREF3Y0hnaUlHaGxhV2RvZEQwaU9EQXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazB4TkNBMVF6RTBJRFl1TVRBME5UY2dNVE11TVRBME5pQTNJREV5SURkRE1UQXVPRGsxTkNBM0lERXdJRFl1TVRBME5UY2dNVEFnTlVNeE1DQXpMamc1TlRReklERXdMamc1TlRRZ015QXhNaUF6UXpFekxqRXdORFlnTXlBeE5DQXpMamc1TlRReklERTBJRFZhSWlCbWFXeHNQU0lqTURBd01EQXdJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UUWdNVEpETVRRZ01UTXVNVEEwTmlBeE15NHhNRFEySURFMElERXlJREUwUXpFd0xqZzVOVFFnTVRRZ01UQWdNVE11TVRBME5pQXhNQ0F4TWtNeE1DQXhNQzQ0T1RVMElERXdMamc1TlRRZ01UQWdNVElnTVRCRE1UTXVNVEEwTmlBeE1DQXhOQ0F4TUM0NE9UVTBJREUwSURFeVdpSWdabWxzYkQwaUl6QXdNREF3TUNJdlBnMEtQSEJoZEdnZ1pEMGlUVEV5SURJeFF6RXpMakV3TkRZZ01qRWdNVFFnTWpBdU1UQTBOaUF4TkNBeE9VTXhOQ0F4Tnk0NE9UVTBJREV6TGpFd05EWWdNVGNnTVRJZ01UZERNVEF1T0RrMU5DQXhOeUF4TUNBeE55NDRPVFUwSURFd0lERTVRekV3SURJd0xqRXdORFlnTVRBdU9EazFOQ0F5TVNBeE1pQXlNVm9pSUdacGJHdzlJaU13TURBd01EQWlMejROQ2p3dmMzWm5QZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNREFnTVRJd0lpQjNhV1IwYUQwaU1UQXdJaUJvWldsbmFIUTlJakV5TUNJK1BHTnBjbU5zWlNCamVEMGlOVEFpSUdONVBTSTFNQ0lnY2owaU5EQWlJR1pwYkd3OUlpTTRORGd5UkVNaUlITjBjbTlyWlQwaVlteGhZMnNpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUlnTHo0OGRHVjRkQ0I0UFNJMU1DSWdlVDBpTlRjaUlHWnZiblF0YzJsNlpUMGlORFVpSUdadmJuUXRabUZ0YVd4NVBTSkJjbWxoYkNJZ1ptOXVkQzEzWldsbmFIUTlJbUp2YkdRaUlIUmxlSFF0WVc1amFHOXlQU0p0YVdSa2JHVWlJR1pwYkd3OUltSnNZV05ySWo0eFBDOTBaWGgwUGp4d2IyeDVaMjl1SUhCdmFXNTBjejBpTkRBc09UQWdOakFzT1RBZ05UQXNNVEV3SWlCbWFXeHNQU0ppYkdGamF5SWdMejQ4TDNOMlp6ND1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeE1EQWdNVEl3SWlCM2FXUjBhRDBpTVRBd0lpQm9aV2xuYUhROUlqRXlNQ0krUEdOcGNtTnNaU0JqZUQwaU5UQWlJR041UFNJMU1DSWdjajBpTkRBaUlHWnBiR3c5SWlNNE5EZ3lSRU1pSUhOMGNtOXJaVDBpWW14aFkyc2lJSE4wY205clpTMTNhV1IwYUQwaU1pSWdMejQ4ZEdWNGRDQjRQU0kxTUNJZ2VUMGlOVGNpSUdadmJuUXRjMmw2WlQwaU5EVWlJR1p2Ym5RdFptRnRhV3g1UFNKQmNtbGhiQ0lnWm05dWRDMTNaV2xuYUhROUltSnZiR1FpSUhSbGVIUXRZVzVqYUc5eVBTSnRhV1JrYkdVaUlHWnBiR3c5SW1Kc1lXTnJJajR4TUR3dmRHVjRkRDQ4Y0c5c2VXZHZiaUJ3YjJsdWRITTlJalF3TERrd0lEWXdMRGt3SURVd0xERXhNQ0lnWm1sc2JEMGlZbXhoWTJzaUlDOCtQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURBZ01USXdJaUIzYVdSMGFEMGlNVEF3SWlCb1pXbG5hSFE5SWpFeU1DSStQR05wY21Oc1pTQmplRDBpTlRBaUlHTjVQU0kxTUNJZ2NqMGlOREFpSUdacGJHdzlJaU00TkRneVJFTWlJSE4wY205clpUMGlZbXhoWTJzaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ0x6NDhkR1Y0ZENCNFBTSTFNQ0lnZVQwaU5UY2lJR1p2Ym5RdGMybDZaVDBpTkRVaUlHWnZiblF0Wm1GdGFXeDVQU0pCY21saGJDSWdabTl1ZEMxM1pXbG5hSFE5SW1KdmJHUWlJSFJsZUhRdFlXNWphRzl5UFNKdGFXUmtiR1VpSUdacGJHdzlJbUpzWVdOcklqNHhNVHd2ZEdWNGRENDhjRzlzZVdkdmJpQndiMmx1ZEhNOUlqUXdMRGt3SURZd0xEa3dJRFV3TERFeE1DSWdabWxzYkQwaVlteGhZMnNpSUM4K1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNREFnTVRJd0lpQjNhV1IwYUQwaU1UQXdJaUJvWldsbmFIUTlJakV5TUNJK1BHTnBjbU5zWlNCamVEMGlOVEFpSUdONVBTSTFNQ0lnY2owaU5EQWlJR1pwYkd3OUlpTTRORGd5UkVNaUlITjBjbTlyWlQwaVlteGhZMnNpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUlnTHo0OGRHVjRkQ0I0UFNJMU1DSWdlVDBpTlRjaUlHWnZiblF0YzJsNlpUMGlORFVpSUdadmJuUXRabUZ0YVd4NVBTSkJjbWxoYkNJZ1ptOXVkQzEzWldsbmFIUTlJbUp2YkdRaUlIUmxlSFF0WVc1amFHOXlQU0p0YVdSa2JHVWlJR1pwYkd3OUltSnNZV05ySWo0eVBDOTBaWGgwUGp4d2IyeDVaMjl1SUhCdmFXNTBjejBpTkRBc09UQWdOakFzT1RBZ05UQXNNVEV3SWlCbWFXeHNQU0ppYkdGamF5SWdMejQ4TDNOMlp6ND1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeE1EQWdNVEl3SWlCM2FXUjBhRDBpTVRBd0lpQm9aV2xuYUhROUlqRXlNQ0krUEdOcGNtTnNaU0JqZUQwaU5UQWlJR041UFNJMU1DSWdjajBpTkRBaUlHWnBiR3c5SWlNNE5EZ3lSRU1pSUhOMGNtOXJaVDBpWW14aFkyc2lJSE4wY205clpTMTNhV1IwYUQwaU1pSWdMejQ4ZEdWNGRDQjRQU0kxTUNJZ2VUMGlOVGNpSUdadmJuUXRjMmw2WlQwaU5EVWlJR1p2Ym5RdFptRnRhV3g1UFNKQmNtbGhiQ0lnWm05dWRDMTNaV2xuYUhROUltSnZiR1FpSUhSbGVIUXRZVzVqYUc5eVBTSnRhV1JrYkdVaUlHWnBiR3c5SW1Kc1lXTnJJajR6UEM5MFpYaDBQanh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlOREFzT1RBZ05qQXNPVEFnTlRBc01URXdJaUJtYVd4c1BTSmliR0ZqYXlJZ0x6NDhMM04yWno0PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURBZ01USXdJaUIzYVdSMGFEMGlNVEF3SWlCb1pXbG5hSFE5SWpFeU1DSStQR05wY21Oc1pTQmplRDBpTlRBaUlHTjVQU0kxTUNJZ2NqMGlOREFpSUdacGJHdzlJaU00TkRneVJFTWlJSE4wY205clpUMGlZbXhoWTJzaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ0x6NDhkR1Y0ZENCNFBTSTFNQ0lnZVQwaU5UY2lJR1p2Ym5RdGMybDZaVDBpTkRVaUlHWnZiblF0Wm1GdGFXeDVQU0pCY21saGJDSWdabTl1ZEMxM1pXbG5hSFE5SW1KdmJHUWlJSFJsZUhRdFlXNWphRzl5UFNKdGFXUmtiR1VpSUdacGJHdzlJbUpzWVdOcklqNDBQQzkwWlhoMFBqeHdiMng1WjI5dUlIQnZhVzUwY3owaU5EQXNPVEFnTmpBc09UQWdOVEFzTVRFd0lpQm1hV3hzUFNKaWJHRmpheUlnTHo0OEwzTjJaejQ9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNREFnTVRJd0lpQjNhV1IwYUQwaU1UQXdJaUJvWldsbmFIUTlJakV5TUNJK1BHTnBjbU5zWlNCamVEMGlOVEFpSUdONVBTSTFNQ0lnY2owaU5EQWlJR1pwYkd3OUlpTTRORGd5UkVNaUlITjBjbTlyWlQwaVlteGhZMnNpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUlnTHo0OGRHVjRkQ0I0UFNJMU1DSWdlVDBpTlRjaUlHWnZiblF0YzJsNlpUMGlORFVpSUdadmJuUXRabUZ0YVd4NVBTSkJjbWxoYkNJZ1ptOXVkQzEzWldsbmFIUTlJbUp2YkdRaUlIUmxlSFF0WVc1amFHOXlQU0p0YVdSa2JHVWlJR1pwYkd3OUltSnNZV05ySWo0MVBDOTBaWGgwUGp4d2IyeDVaMjl1SUhCdmFXNTBjejBpTkRBc09UQWdOakFzT1RBZ05UQXNNVEV3SWlCbWFXeHNQU0ppYkdGamF5SWdMejQ4TDNOMlp6ND1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeE1EQWdNVEl3SWlCM2FXUjBhRDBpTVRBd0lpQm9aV2xuYUhROUlqRXlNQ0krUEdOcGNtTnNaU0JqZUQwaU5UQWlJR041UFNJMU1DSWdjajBpTkRBaUlHWnBiR3c5SWlNNE5EZ3lSRU1pSUhOMGNtOXJaVDBpWW14aFkyc2lJSE4wY205clpTMTNhV1IwYUQwaU1pSWdMejQ4ZEdWNGRDQjRQU0kxTUNJZ2VUMGlOVGNpSUdadmJuUXRjMmw2WlQwaU5EVWlJR1p2Ym5RdFptRnRhV3g1UFNKQmNtbGhiQ0lnWm05dWRDMTNaV2xuYUhROUltSnZiR1FpSUhSbGVIUXRZVzVqYUc5eVBTSnRhV1JrYkdVaUlHWnBiR3c5SW1Kc1lXTnJJajQyUEM5MFpYaDBQanh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlOREFzT1RBZ05qQXNPVEFnTlRBc01URXdJaUJtYVd4c1BTSmliR0ZqYXlJZ0x6NDhMM04yWno0PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURBZ01USXdJaUIzYVdSMGFEMGlNVEF3SWlCb1pXbG5hSFE5SWpFeU1DSStQR05wY21Oc1pTQmplRDBpTlRBaUlHTjVQU0kxTUNJZ2NqMGlOREFpSUdacGJHdzlJaU00TkRneVJFTWlJSE4wY205clpUMGlZbXhoWTJzaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ0x6NDhkR1Y0ZENCNFBTSTFNQ0lnZVQwaU5UY2lJR1p2Ym5RdGMybDZaVDBpTkRVaUlHWnZiblF0Wm1GdGFXeDVQU0pCY21saGJDSWdabTl1ZEMxM1pXbG5hSFE5SW1KdmJHUWlJSFJsZUhRdFlXNWphRzl5UFNKdGFXUmtiR1VpSUdacGJHdzlJbUpzWVdOcklqNDNQQzkwWlhoMFBqeHdiMng1WjI5dUlIQnZhVzUwY3owaU5EQXNPVEFnTmpBc09UQWdOVEFzTVRFd0lpQm1hV3hzUFNKaWJHRmpheUlnTHo0OEwzTjJaejQ9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNREFnTVRJd0lpQjNhV1IwYUQwaU1UQXdJaUJvWldsbmFIUTlJakV5TUNJK1BHTnBjbU5zWlNCamVEMGlOVEFpSUdONVBTSTFNQ0lnY2owaU5EQWlJR1pwYkd3OUlpTTRORGd5UkVNaUlITjBjbTlyWlQwaVlteGhZMnNpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUlnTHo0OGRHVjRkQ0I0UFNJMU1DSWdlVDBpTlRjaUlHWnZiblF0YzJsNlpUMGlORFVpSUdadmJuUXRabUZ0YVd4NVBTSkJjbWxoYkNJZ1ptOXVkQzEzWldsbmFIUTlJbUp2YkdRaUlIUmxlSFF0WVc1amFHOXlQU0p0YVdSa2JHVWlJR1pwYkd3OUltSnNZV05ySWo0NFBDOTBaWGgwUGp4d2IyeDVaMjl1SUhCdmFXNTBjejBpTkRBc09UQWdOakFzT1RBZ05UQXNNVEV3SWlCbWFXeHNQU0ppYkdGamF5SWdMejQ4TDNOMlp6ND1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeE1EQWdNVEl3SWlCM2FXUjBhRDBpTVRBd0lpQm9aV2xuYUhROUlqRXlNQ0krUEdOcGNtTnNaU0JqZUQwaU5UQWlJR041UFNJMU1DSWdjajBpTkRBaUlHWnBiR3c5SWlNNE5EZ3lSRU1pSUhOMGNtOXJaVDBpWW14aFkyc2lJSE4wY205clpTMTNhV1IwYUQwaU1pSWdMejQ4ZEdWNGRDQjRQU0kxTUNJZ2VUMGlOVGNpSUdadmJuUXRjMmw2WlQwaU5EVWlJR1p2Ym5RdFptRnRhV3g1UFNKQmNtbGhiQ0lnWm05dWRDMTNaV2xuYUhROUltSnZiR1FpSUhSbGVIUXRZVzVqYUc5eVBTSnRhV1JrYkdVaUlHWnBiR3c5SW1Kc1lXTnJJajQ1UEM5MFpYaDBQanh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlOREFzT1RBZ05qQXNPVEFnTlRBc01URXdJaUJtYVd4c1BTSmliR0ZqYXlJZ0x6NDhMM04yWno0PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UTWlJR2hsYVdkb2REMGlNVFlpSUhacFpYZENiM2c5SWpBZ01DQXhNeUF4TmlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQSEJoZEdnZ2IzQmhZMmwwZVQwaU1DNDJJaUJrUFNKTk9TNDBJREJJTUZZeE5rZ3hNMVl6TGpaTU9TNDBJREJhVFRFeUlERTFTREZXTVVnNFZqVklNVEpXTVRWYVRURXlJRFJJT1ZZeFNEa3VNekZNTVRJZ015NDJPVlkwV2lJZ1ptbHNiRDBpSXpBM05rWkZOU0l2UGdvOEwzTjJaejRLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdkMmxrZEdnOUlqRTVMak00TlNJS0lDQWdhR1ZwWjJoMFBTSXlNaUlLSUNBZ2RtbGxkMEp2ZUQwaU1DQXdJREU1TGpNNE5TQXlNaUlLSUNBZ2RtVnljMmx2YmowaU1TNHhJZ29nSUNCcFpEMGljM1puTVNJS0lDQWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJQ0I0Yld4dWN6cHpkbWM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S0lDQThaR1ZtY3dvZ0lDQWdJR2xrUFNKa1pXWnpNU0lnTHo0S0lDQThad29nSUNBZ0lHbGtQU0pIY25Wd2IxODBJZ29nSUNBZ0lHUmhkR0V0Ym1GdFpUMGlSM0oxY0c4Z05DSUtJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RPRGt1TmpFMUxDMHhOekUyS1NJK0NpQWdJQ0E4WndvZ0lDQWdJQ0FnYVdROUltbHRZV2RsTFRNaUNpQWdJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZzRPQ3d4TnpFMUtTSUtJQ0FnSUNBZ0lHOXdZV05wZEhrOUlqQXVPQ0krQ2lBZ0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNBZ0lHbGtQU0pVY21GNllXUnZYekVpQ2lBZ0lDQWdJQ0FnSUdSaGRHRXRibUZ0WlQwaVZISmhlbUZrYnlBeElnb2dJQ0FnSUNBZ0lDQmtQU0pOSURJeExEWXVOekE1SUZZZ01qTWdTQ0F6SUhZZ0xUUWdhQ0F4SUhZZ015QklJREl3SUZZZ09DQklJREUwSUZZZ01pQklJRFFnZGlBNElFZ2dNeUJXSURFZ1NDQXhOUzR5T1NCYUlFMGdNakFzTmk0NElERTFMaklzTWlCSUlERTFJSFlnTlNCb0lEVWdlaUlLSUNBZ0lDQWdJQ0FnWm1sc2JEMGlJekEzTm1abE5TSWdMejRLSUNBZ0lEd3ZaejRLSUNBZ0lEeG5DaUFnSUNBZ0lDQnBaRDBpUjNKMWNHOWZNeUlLSUNBZ0lDQWdJR1JoZEdFdGJtRnRaVDBpUjNKMWNHOGdNeUlLSUNBZ0lDQWdJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0Mwd0xqTTROU3d5TUM0NE9ESXBJajRLSUNBZ0lDQWdQSEpsWTNRS0lDQWdJQ0FnSUNBZ2FXUTlJbEpsWTNURG9XNW5kV3h2WHpNaUNpQWdJQ0FnSUNBZ0lHUmhkR0V0Ym1GdFpUMGlVbVZqZE1PaGJtZDFiRzhnTXlJS0lDQWdJQ0FnSUNBZ2QybGtkR2c5SWpFMExqTTROU0lLSUNBZ0lDQWdJQ0FnYUdWcFoyaDBQU0kxTGpJek5qQXdNREVpQ2lBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEa3dMREUzTURZcElnb2dJQ0FnSUNBZ0lDQm1hV3hzUFNKdWIyNWxJZ29nSUNBZ0lDQWdJQ0I0UFNJd0lnb2dJQ0FnSUNBZ0lDQjVQU0l3SWlBdlBnb2dJQ0FnUEM5blBnb2dJQ0FnUEhSbGVIUUtJQ0FnSUNBZ0lIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlDaUFnSUNBZ0lDQnpkSGxzWlQwaVptOXVkQzF6YVhwbE9qY3VORGcyTnpad2VEdDBaWGgwTFdGc2FXZHVPbk4wWVhKME8zZHlhWFJwYm1jdGJXOWtaVHBzY2kxMFlqdGthWEpsWTNScGIyNDZiSFJ5TzNSbGVIUXRZVzVqYUc5eU9uTjBZWEowTzJacGJHdzZJekEzTnpSbE5EdG1hV3hzTFc5d1lXTnBkSGs2TVR0emRISnZhMlV0ZDJsa2RHZzZNQzQyTWpNNE9UWWlDaUFnSUNBZ0lDQjRQU0k0TWk0Mk9UQTVNU0lLSUNBZ0lDQWdJSGs5SWpFNE5qZ3VOemcwTnlJS0lDQWdJQ0FnSUdsa1BTSjBaWGgwTVNJS0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWMyTmhiR1VvTVM0d056ZzVPREEzTERBdU9USTJPREF3TmpJcElqNDhkSE53WVc0S0lDQWdJQ0FnSUNBZ2FXUTlJblJ6Y0dGdU1TSUtJQ0FnSUNBZ0lDQWdlRDBpT0RJdU5qa3dPVEVpQ2lBZ0lDQWdJQ0FnSUhrOUlqRTROamd1TnpnME55SUtJQ0FnSUNBZ0lDQWdjM1I1YkdVOUltWnBiR3c2SXpBM056UmxORHRtYVd4c0xXOXdZV05wZEhrNk1UdHpkSEp2YTJVdGQybGtkR2c2TUM0Mk1qTTRPVFlpUGtkUVdEd3ZkSE53WVc0K1BDOTBaWGgwUGdvZ0lEd3ZaejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdkMmxrZEdnOUlqSTNMamsyTkRBd01TSUtJQ0FnYUdWcFoyaDBQU0l5T0NJS0lDQWdkbWxsZDBKdmVEMGlNQ0F3SURJM0xqazJOQ0F5T0NJS0lDQWdkbVZ5YzJsdmJqMGlNUzR4SWdvZ0lDQnBaRDBpYzNabk1TSUtJQ0FnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUNCNGJXeHVjenB6ZG1jOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtJQ0E4WkdWbWN3b2dJQ0FnSUdsa1BTSmtaV1p6TVNJZ0x6NEtJQ0E4WndvZ0lDQWdJR2xrUFNKSGNuVndiMTgySWdvZ0lDQWdJR1JoZEdFdGJtRnRaVDBpUjNKMWNHOGdOaUlLSUNBZ0lDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRFNUxDMHhOekV6S1NJK0NpQWdJQ0E4Y0dGMGFBb2dJQ0FnSUNBZ2FXUTlJbWx0WVdkbExUSWlDaUFnSUNBZ0lDQmtQU0pOSURJM0xERXpMakF4T0NCV0lEa3VOeUJNSURFNUxqTXNNaUJJSURVZ1ZpQXhNeTR3TVRnZ1NDQXlMakF4T0NCV0lESTNMams0TWlCSUlEVWdWaUF6TUNCb0lESXlJSFlnTFRJdU1ERTRJR2dnTWk0NU9ESWdWaUF4TXk0d01UZ2dXaUJOSURFNUxETWdNallzTVRBZ1NDQXhPU0JhSUUwZ05pd3pJR2dnTVRJZ2RpQTRJR2dnT0NCMklESXVNREU0SUVnZ05pQmFJRTBnTWpZc01qa2dTQ0EySUhZZ0xURXVNREU0SUdnZ01qQWdlaUJ0SURNdU1ERTRMQzB4TGprNE1pQklJREl1T1RneUlGWWdNVE11T1RneUlHZ2dNall1TURNMklIb2lDaUFnSUNBZ0lDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d4TVRZdU9UZ3lMREUzTVRFcElnb2dJQ0FnSUNBZ1ptbHNiRDBpSXpBM05tWmxOU0lLSUNBZ0lDQWdJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnTHo0S0lDQWdJRHhuQ2lBZ0lDQWdJQ0JwWkQwaVIzSjFjRzlmTVNJS0lDQWdJQ0FnSUdSaGRHRXRibUZ0WlQwaVIzSjFjRzhnTVNJS0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMHpMak14T0N3dE1Ua3BJajRLSUNBZ0lDQWdQSEpsWTNRS0lDQWdJQ0FnSUNBZ2FXUTlJbEpsWTNURG9XNW5kV3h2WHpFaUNpQWdJQ0FnSUNBZ0lHUmhkR0V0Ym1GdFpUMGlVbVZqZE1PaGJtZDFiRzhnTVNJS0lDQWdJQ0FnSUNBZ2QybGtkR2c5SWpJd0xqWXdNU0lLSUNBZ0lDQWdJQ0FnYUdWcFoyaDBQU0kyTGpjek1UazVPVGtpQ2lBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtERXlOaXd4TnpRM0tTSUtJQ0FnSUNBZ0lDQWdabWxzYkQwaWJtOXVaU0lLSUNBZ0lDQWdJQ0FnZUQwaU1DSUtJQ0FnSUNBZ0lDQWdlVDBpTUNJZ0x6NEtJQ0FnSUR3dlp6NEtJQ0E4TDJjK0NpQWdQSFJsZUhRS0lDQWdJQ0I0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWdvZ0lDQWdJSE4wZVd4bFBTSm1iMjUwTFhOcGVtVTZPUzQ0TlRFeE5YQjRPM1JsZUhRdFlXeHBaMjQ2YzNSaGNuUTdkM0pwZEdsdVp5MXRiMlJsT214eUxYUmlPMlJwY21WamRHbHZianBzZEhJN2RHVjRkQzFoYm1Ob2IzSTZjM1JoY25RN1ptbHNiRG9qTURjM05HVTBPM04wY205clpTMTNhV1IwYURvd0xqZ3lNRGt5T1NJS0lDQWdJQ0I0UFNJeUxqUTJPVFF4TURJaUNpQWdJQ0FnZVQwaU1qTXVOVFV6TlRVeElnb2dJQ0FnSUdsa1BTSjBaWGgwTVNJS0lDQWdJQ0IwY21GdWMyWnZjbTA5SW5OallXeGxLREV1TURnek9UVXhOU3d3TGpreU1qVTFNRFVwSWo0OGRITndZVzRLSUNBZ0lDQWdJR2xrUFNKMGMzQmhiakVpQ2lBZ0lDQWdJQ0I0UFNJeUxqUTJPVFF4TURJaUNpQWdJQ0FnSUNCNVBTSXlNeTQxTlRNMU5URWlDaUFnSUNBZ0lDQnpkSGxzWlQwaWMzUnliMnRsTFhkcFpIUm9PakF1T0RJd09USTVJajVMVFV3OEwzUnpjR0Z1UGp3dmRHVjRkRDRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdkMmxrZEdnOUlqRTVMalV5SWdvZ0lDQm9aV2xuYUhROUlqSXlJZ29nSUNCMmFXVjNRbTk0UFNJd0lEQWdNVGt1TlRJZ01qSWlDaUFnSUhabGNuTnBiMjQ5SWpFdU1TSUtJQ0FnYVdROUluTjJaekVpQ2lBZ0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQWdlRzFzYm5NNmMzWm5QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6RWlJQzgrQ2lBZ1BHY0tJQ0FnSUNCcFpEMGlSM0oxY0c5Zk5TSUtJQ0FnSUNCa1lYUmhMVzVoYldVOUlrZHlkWEJ2SURVaUNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTFPUzQwT0N3dE1UY3hOaWtpUGdvZ0lDQWdQR2NLSUNBZ0lDQWdJR2xrUFNKcGJXRm5aUzB6SWdvZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01UVTRMREUzTVRVcElnb2dJQ0FnSUNBZ2IzQmhZMmwwZVQwaU1DNDRJajRLSUNBZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUNBZ2FXUTlJbFJ5WVhwaFpHOWZNU0lLSUNBZ0lDQWdJQ0FnWkdGMFlTMXVZVzFsUFNKVWNtRjZZV1J2SURFaUNpQWdJQ0FnSUNBZ0lHUTlJazBnTWpFc05pNDNNRGtnVmlBeU15QklJRE1nZGlBdE5DQm9JREVnZGlBeklFZ2dNakFnVmlBNElFZ2dNVFFnVmlBeUlFZ2dOQ0IySURnZ1NDQXpJRllnTVNCSUlERTFMakk1SUZvZ1RTQXlNQ3cyTGpnZ01UVXVNaXd5SUVnZ01UVWdkaUExSUdnZ05TQjZJZ29nSUNBZ0lDQWdJQ0JtYVd4c1BTSWpNRGMyWm1VMUlpQXZQZ29nSUNBZ1BDOW5QZ29nSUNBZ1BHY0tJQ0FnSUNBZ0lHbGtQU0pIY25Wd2IxOHlJZ29nSUNBZ0lDQWdaR0YwWVMxdVlXMWxQU0pIY25Wd2J5QXlJZ29nSUNBZ0lDQWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTVM0ME9Dd3RNVFFwSWo0S0lDQWdJQ0FnUEhKbFkzUUtJQ0FnSUNBZ0lDQWdhV1E5SWxKbFkzVERvVzVuZFd4dlh6SWlDaUFnSUNBZ0lDQWdJR1JoZEdFdGJtRnRaVDBpVW1WamRNT2hibWQxYkc4Z01pSUtJQ0FnSUNBZ0lDQWdkMmxrZEdnOUlqRXpMakEwSWdvZ0lDQWdJQ0FnSUNCb1pXbG5hSFE5SWpRdU9UazRNREF3TVNJS0lDQWdJQ0FnSUNBZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NVFU0TERFM05ERXBJZ29nSUNBZ0lDQWdJQ0JtYVd4c1BTSnViMjVsSWdvZ0lDQWdJQ0FnSUNCNFBTSXdJZ29nSUNBZ0lDQWdJQ0I1UFNJd0lpQXZQZ29nSUNBZ1BDOW5QZ29nSUR3dlp6NEtJQ0E4ZEdWNGRBb2dJQ0FnSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaUNpQWdJQ0FnYzNSNWJHVTlJbVp2Ym5RdGMybDZaVG8yTGprMk9UTXljSGc3ZEdWNGRDMWhiR2xuYmpwemRHRnlkRHQzY21sMGFXNW5MVzF2WkdVNmJISXRkR0k3WkdseVpXTjBhVzl1T214MGNqdDBaWGgwTFdGdVkyaHZjanB6ZEdGeWREdG1hV3hzT2lNek5EZzJaVFU3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdjM1J5YjJ0bExYZHBaSFJvT2pBdU5UZ3dOemMySWdvZ0lDQWdJSGc5SWkwd0xqSTVPRGd3TURnMklnb2dJQ0FnSUhrOUlqRTJMalEyT0RjaUNpQWdJQ0FnYVdROUluUmxlSFF4SWdvZ0lDQWdJSFJ5WVc1elptOXliVDBpYzJOaGJHVW9NUzR3TXpZMU9ESTJMREF1T1RZME56QTRORFlwSWo0OGRITndZVzRLSUNBZ0lDQWdJR2xrUFNKMGMzQmhiakVpQ2lBZ0lDQWdJQ0I0UFNJdE1DNHlPVGc0TURBNE5pSUtJQ0FnSUNBZ0lIazlJakUyTGpRMk9EY2lDaUFnSUNBZ0lDQnpkSGxzWlQwaVptbHNiRG9qTXpRNE5tVTFPMlpwYkd3dGIzQmhZMmwwZVRveE8zTjBjbTlyWlMxM2FXUjBhRG93TGpVNE1EYzNOaUkrVTBoUVBDOTBjM0JoYmo0OEwzUmxlSFErQ2p3dmMzWm5QZ289XCIiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmU7XG5cbi8vIGZvciBDb21tb25KUyBpbnRlcm9wLlxuXG52YXIgdXNlUmVmID0gUmVhY3QudXNlUmVmLFxuICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICB1c2VNZW1vID0gUmVhY3QudXNlTWVtbyxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTsgLy8gU2FtZSBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSwgYnV0IHN1cHBvcnRzIHNlbGVjdG9yIGFuZCBpc0VxdWFsIGFyZ3VtZW50cy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsKSB7XG4gIC8vIFVzZSB0aGlzIHRvIHRyYWNrIHRoZSByZW5kZXJlZCBzbmFwc2hvdC5cbiAgdmFyIGluc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnN0O1xuXG4gIGlmIChpbnN0UmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICBpbnN0ID0ge1xuICAgICAgaGFzVmFsdWU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIGluc3RSZWYuY3VycmVudCA9IGluc3Q7XG4gIH0gZWxzZSB7XG4gICAgaW5zdCA9IGluc3RSZWYuY3VycmVudDtcbiAgfVxuXG4gIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIC8vIFRyYWNrIHRoZSBtZW1vaXplZCBzdGF0ZSB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcyB0aGF0IGFyZSBsb2NhbCB0byB0aGlzXG4gICAgLy8gbWVtb2l6ZWQgaW5zdGFuY2Ugb2YgYSBnZXRTbmFwc2hvdCBmdW5jdGlvbi4gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgYVxuICAgIC8vIHVzZVJlZiBob29rLCBiZWNhdXNlIHRoYXQgc3RhdGUgd291bGQgYmUgc2hhcmVkIGFjcm9zcyBhbGwgY29uY3VycmVudFxuICAgIC8vIGNvcGllcyBvZiB0aGUgaG9vay9jb21wb25lbnQuXG4gICAgdmFyIGhhc01lbW8gPSBmYWxzZTtcbiAgICB2YXIgbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3RvciA9IGZ1bmN0aW9uIChuZXh0U25hcHNob3QpIHtcbiAgICAgIGlmICghaGFzTWVtbykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB0aGUgaG9vayBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIG1lbW9pemVkIHJlc3VsdC5cbiAgICAgICAgaGFzTWVtbyA9IHRydWU7XG4gICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG5cbiAgICAgICAgdmFyIF9uZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTtcblxuICAgICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gRXZlbiBpZiB0aGUgc2VsZWN0b3IgaGFzIGNoYW5nZWQsIHRoZSBjdXJyZW50bHkgcmVuZGVyZWQgc2VsZWN0aW9uXG4gICAgICAgICAgLy8gbWF5IGJlIGVxdWFsIHRvIHRoZSBuZXcgc2VsZWN0aW9uLiBXZSBzaG91bGQgYXR0ZW1wdCB0byByZXVzZSB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IHZhbHVlIGlmIHBvc3NpYmxlLCB0byBwcmVzZXJ2ZSBkb3duc3RyZWFtIG1lbW9pemF0aW9ucy5cbiAgICAgICAgICBpZiAoaW5zdC5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb24gPSBpbnN0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBfbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IF9uZXh0U2VsZWN0aW9uO1xuICAgICAgICByZXR1cm4gX25leHRTZWxlY3Rpb247XG4gICAgICB9IC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuXG5cbiAgICAgIC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IG1lbW9pemVkU25hcHNob3Q7XG4gICAgICB2YXIgcHJldlNlbGVjdGlvbiA9IG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgICBpZiAob2JqZWN0SXMocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QpKSB7XG4gICAgICAgIC8vIFRoZSBzbmFwc2hvdCBpcyB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuIFJldXNlIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfSAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG5cblxuICAgICAgLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuICAgICAgdmFyIG5leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpOyAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG5cbiAgICAgIC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cbiAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQgJiYgaXNFcXVhbChwcmV2U2VsZWN0aW9uLCBuZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNlbGVjdGlvbjtcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0aW9uO1xuICAgIH07IC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cblxuXG4gICAgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuICAgIHZhciBtYXliZUdldFNlcnZlclNuYXBzaG90ID0gZ2V0U2VydmVyU25hcHNob3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBnZXRTZXJ2ZXJTbmFwc2hvdDtcblxuICAgIHZhciBnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKGdldFNuYXBzaG90KCkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3IgPSBtYXliZUdldFNlcnZlclNuYXBzaG90ID09PSBudWxsID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IobWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBbZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IsIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yXTtcbiAgfSwgW2dldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWxdKSxcbiAgICAgIGdldFNlbGVjdGlvbiA9IF91c2VNZW1vWzBdLFxuICAgICAgZ2V0U2VydmVyU2VsZWN0aW9uID0gX3VzZU1lbW9bMV07XG5cbiAgdmFyIHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTZWxlY3Rpb24sIGdldFNlcnZlclNlbGVjdGlvbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdC5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2VzcmlfY2FsY2l0ZV9jb21wb25lbnRzX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9pbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyb3VwTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfc3VwcG9ydF9MYWJlbENsYXNzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9yZXF1ZXN0X2pzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVzdF9sb2NhdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9zeW1ib2xzX1RleHRTeW1ib2xfanNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3dpZGdldHNfU2VhcmNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV93aWRnZXRzX1NlYXJjaF9MYXllclNlYXJjaFNvdXJjZV9qc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfd2lkZ2V0c19TZWFyY2hfTG9jYXRvclNlYXJjaFNvdXJjZV9qc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfd2lkZ2V0c19Ta2V0Y2hfU2tldGNoVmlld01vZGVsX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfY29sb3JfcGlja2VyX187IiwiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgKiBhcyBSZWFjdDIgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIgfSBmcm9tIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qc1wiO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QudHNcbmltcG9ydCAqIGFzIFJlYWN0T3JpZ2luYWwgZnJvbSBcInJlYWN0XCI7XG52YXIgUmVhY3QgPSAoXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIFwiZGVmYXVsdFwiIGluIFJlYWN0T3JpZ2luYWwgPyBSZWFjdE9yaWdpbmFsW1wiZGVmYXVsdFwiXSA6IFJlYWN0T3JpZ2luYWxcbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRleHQudHNcbnZhciBDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihgcmVhY3QtcmVkdXgtY29udGV4dGApO1xudmFyIGdUID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogKFxuICAvKiBmYWxsIGJhY2sgdG8gYSBwZXItbW9kdWxlIHNjb3BlIChwcmUtOC4xIGJlaGF2aW91cikgaWYgYGdsb2JhbFRoaXNgIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAge31cbik7XG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICBpZiAoIVJlYWN0LmNyZWF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIHt9O1xuICBjb25zdCBjb250ZXh0TWFwID0gZ1RbQ29udGV4dEtleV0gPz8gKGdUW0NvbnRleHRLZXldID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIGxldCByZWFsQ29udGV4dCA9IGNvbnRleHRNYXAuZ2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQpO1xuICBpZiAoIXJlYWxDb250ZXh0KSB7XG4gICAgcmVhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgcmVhbENvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJlYWN0UmVkdXhcIjtcbiAgICB9XG4gICAgY29udGV4dE1hcC5zZXQoUmVhY3QuY3JlYXRlQ29udGV4dCwgcmVhbENvbnRleHQpO1xuICB9XG4gIHJldHVybiByZWFsQ29udGV4dDtcbn1cbnZhciBSZWFjdFJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBnZXRDb250ZXh0KCk7XG5cbi8vIHNyYy91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS50c1xudmFyIG5vdEluaXRpYWxpemVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJ1U0VTIG5vdCBpbml0aWFsaXplZCFcIik7XG59O1xuXG4vLyBzcmMvaG9va3MvdXNlUmVkdXhDb250ZXh0LnRzXG5mdW5jdGlvbiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0MigpIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPlwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICB9O1xufVxudmFyIHVzZVJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVSZWR1eENvbnRleHRIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VTZWxlY3Rvci50c1xudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xudmFyIHJlZkVxdWFsaXR5ID0gKGEsIGIpID0+IGEgPT09IGI7XG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZVNlbGVjdG9yMiA9IChzZWxlY3RvciwgZXF1YWxpdHlGbk9yT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHksIGRldk1vZGVDaGVja3MgPSB7fSB9ID0gdHlwZW9mIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IHsgZXF1YWxpdHlGbjogZXF1YWxpdHlGbk9yT3B0aW9ucyB9IDogZXF1YWxpdHlGbk9yT3B0aW9ucztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGUsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgY29uc3QgZmlyc3RSdW4gPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICB7XG4gICAgICAgIFtzZWxlY3Rvci5uYW1lXShzdGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrOiBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2s6IGZpbmFsU3RhYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIC4uLmRldk1vZGVDaGVja3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZSA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eUZuKHNlbGVjdGVkLCB0b0NvbXBhcmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCBhIGRpZmZlcmVudCByZXN1bHQgd2hlbiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gYSBuZXcgcmVmZXJlbmNlIChzdWNoIGFzIGFuIG9iamVjdCBvciBhbiBhcnJheSkgc2hvdWxkIGJlIG1lbW9pemVkOiBodHRwczovL3JlZHV4LmpzLm9yZy91c2FnZS9kZXJpdmluZy1kYXRhLXNlbGVjdG9ycyNvcHRpbWl6aW5nLXNlbGVjdG9ycy13aXRoLW1lbW9pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQyOiB0b0NvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIHRoZSByb290IHN0YXRlIHdoZW4gY2FsbGVkLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZSBhcmUgYWxtb3N0IGNlcnRhaW5seSBhIG1pc3Rha2UsIGFzIHRoZXkgd2lsbCBjYXVzZSBhIHJlcmVuZGVyIHdoZW5ldmVyICphbnl0aGluZyogaW4gc3RhdGUgY2hhbmdlcy5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhY2sgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KVxuICAgICAgICAgICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVtzZWxlY3Rvci5uYW1lXSxcbiAgICAgIFtzZWxlY3Rvciwgc3RhYmlsaXR5Q2hlY2ssIGRldk1vZGVDaGVja3Muc3RhYmlsaXR5Q2hlY2tdXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IoXG4gICAgICBzdWJzY3JpcHRpb24uYWRkTmVzdGVkU3ViLFxuICAgICAgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSB8fCBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIHdyYXBwZWRTZWxlY3RvcixcbiAgICAgIGVxdWFsaXR5Rm5cbiAgICApO1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU2VsZWN0b3IyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTZWxlY3RvcjJcbiAgfSk7XG4gIHJldHVybiB1c2VTZWxlY3RvcjI7XG59XG52YXIgdXNlU2VsZWN0b3IgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2VsZWN0b3JIb29rKCk7XG5cbi8vIHNyYy91dGlscy9yZWFjdC1pcy50c1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpO1xudmFyIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIik7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtcbnZhciBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIik7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcIm9iamVjdFwiICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9iamVjdC50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRToge1xuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy50c1xuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgZm9yICR7bWV0aG9kTmFtZX0gaW4gY29ubmVjdC5gKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSBcIm1hcFN0YXRlVG9Qcm9wc1wiIHx8IG1ldGhvZE5hbWUgPT09IFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgXCJkZXBlbmRzT25Pd25Qcm9wc1wiKSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LnRzXG5mdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIHtcbiAgYXJlU3RhdGVzRXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbFxufSkge1xuICBsZXQgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBsZXQgb3duUHJvcHM7XG4gIGxldCBzdGF0ZVByb3BzO1xuICBsZXQgZGlzcGF0Y2hQcm9wcztcbiAgbGV0IG1lcmdlZFByb3BzO1xuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpXG4gICAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICBjb25zdCBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwoXG4gICAgICBuZXh0U3RhdGUsXG4gICAgICBzdGF0ZSxcbiAgICAgIG5leHRPd25Qcm9wcyxcbiAgICAgIG93blByb3BzXG4gICAgKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIHtcbiAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgaW5pdE1lcmdlUHJvcHMsXG4gIC4uLm9wdGlvbnNcbn0pIHtcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKTtcbiAgfVxuICByZXR1cm4gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpXG4gICAgcmV0dXJuIHRydWU7XG4gIGxldCBiYXNlUHJvdG8gPSBwcm90bztcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59XG5cbi8vIHNyYy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgYCR7bWV0aG9kTmFtZX0oKSBpbiAke2Rpc3BsYXlOYW1lfSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3ZhbHVlfS5gXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy50c1xuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoKTtcbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59XG5mdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufVxuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lIH0pIHtcbiAgICBjb25zdCBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIHZvaWQgMCk7XG4gICAgfTtcbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgbGV0IHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LnRzXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsIG5hbWUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgb3B0aW9ucykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHZhbHVlIG9mIHR5cGUgJHt0eXBlb2YgYXJnfSBmb3IgJHtuYW1lfSBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50ICR7b3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZX0uYFxuICAgICk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcIm9iamVjdFwiID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChcbiAgICAoZGlzcGF0Y2gpID0+IChcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKVxuICAgIClcbiAgKSA6ICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KChkaXNwYXRjaCkgPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoKSA9PiAoe30pKSA6IHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21lcmdlUHJvcHMudHNcbmZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiB7IC4uLm93blByb3BzLCAuLi5zdGF0ZVByb3BzLCAuLi5kaXNwYXRjaFByb3BzIH07XG59XG5mdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSwgYXJlTWVyZ2VkUHJvcHNFcXVhbCB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpXG4gICAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCBcIm1lcmdlUHJvcHNcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmF0Y2gudHNcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxuLy8gc3JjL3V0aWxzL1N1YnNjcmlwdGlvbi50c1xuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBsZXQgZmlyc3QgPSBudWxsO1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeSgpIHtcbiAgICAgIGRlZmF1bHROb29wQmF0Y2goKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0KCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcHJldjogbGFzdFxuICAgICAgfTtcbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXJzdCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeSgpIHtcbiAgfSxcbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gIGxldCB1bnN1YnNjcmliZTtcbiAgbGV0IGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIGxldCBzdWJzY3JpcHRpb25zQW1vdW50ID0gMDtcbiAgbGV0IHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIGNvbnN0IGNsZWFudXBMaXN0ZW5lciA9IGxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cExpc3RlbmVyKCk7XG4gICAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIGxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmIChzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBzZWxmU3Vic2NyaWJlZDtcbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudCsrO1xuICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlID0gcGFyZW50U3ViID8gcGFyZW50U3ViLmFkZE5lc3RlZFN1YihoYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIGxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50LS07XG4gICAgaWYgKHVuc3Vic2NyaWJlICYmIHN1YnNjcmlwdGlvbnNBbW91bnQgPT09IDApIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB1bnN1YnNjcmliZSA9IHZvaWQgMDtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoIXNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmIChzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHtcbiAgICBhZGROZXN0ZWRTdWIsXG4gICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICBoYW5kbGVDaGFuZ2VXcmFwcGVyLFxuICAgIGlzU3Vic2NyaWJlZCxcbiAgICB0cnlTdWJzY3JpYmU6IHRyeVN1YnNjcmliZVNlbGYsXG4gICAgdHJ5VW5zdWJzY3JpYmU6IHRyeVVuc3Vic2NyaWJlU2VsZixcbiAgICBnZXRMaXN0ZW5lcnM6ICgpID0+IGxpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuXG4vLyBzcmMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC50c1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG5cbi8vIHNyYy91dGlscy9zaGFsbG93RXF1YWwudHNcbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gc3JjL3V0aWxzL2hvaXN0U3RhdGljcy50c1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7XG4gIFtGb3J3YXJkUmVmXTogRk9SV0FSRF9SRUZfU1RBVElDUyxcbiAgW01lbW9dOiBNRU1PX1NUQVRJQ1Ncbn07XG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICBpZiAoaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9XG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50W1wiJCR0eXBlb2ZcIl1dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICBjb25zdCBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgY29uc3Qgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG4vLyBzcmMvY29tcG9uZW50cy9jb25uZWN0LnRzeFxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZUNvbm5lY3QgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBmbjtcbn07XG52YXIgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdO1xudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IChDb21wKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IGVmZmVjdEZ1bmMoLi4uZWZmZWN0QXJncyksIGRlcGVuZGVuY2llcyk7XG59XG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlO1xuICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50KSB7XG4gICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbnVsbDtcbiAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgaXNNb3VudGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIpIHtcbiAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICBsZXQgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gIGNvbnN0IGNoZWNrRm9yVXBkYXRlcyA9ICgpID0+IHtcbiAgICBpZiAoZGlkVW5zdWJzY3JpYmUgfHwgIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhdGVzdFN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGxldCBuZXdDaGlsZFByb3BzLCBlcnJvcjtcbiAgICB0cnkge1xuICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihcbiAgICAgICAgbGF0ZXN0U3RvcmVTdGF0ZSxcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgfVxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbiAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gIGNvbnN0IHVuc3Vic2NyaWJlV3JhcHBlciA9ICgpID0+IHtcbiAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG59XG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSBmYWxzZTtcbmZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIHtcbiAgLy8gVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZCwgc28gVFMgZG9lc24ndCBsaWtlIHVzIGRlc3RydWN0dXJpbmcgdGhpcyB0byBjaGVjayBpdHMgZXhpc3RlbmNlLlxuICAvLyBAdHMtaWdub3JlXG4gIHB1cmUsXG4gIGFyZVN0YXRlc0VxdWFsID0gc3RyaWN0RXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgLy8gdXNlIFJlYWN0J3MgZm9yd2FyZFJlZiB0byBleHBvc2UgYSByZWYgb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50XG4gIGZvcndhcmRSZWYgPSBmYWxzZSxcbiAgLy8gdGhlIGNvbnRleHQgY29uc3VtZXIgdG8gdXNlXG4gIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dFxufSA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAocHVyZSAhPT0gdm9pZCAwICYmICFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICdUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBgY29ubmVjdGAgaXMgbm93IGFsd2F5cyBhIFwicHVyZS9tZW1vaXplZFwiIGNvbXBvbmVudCdcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0O1xuICBjb25zdCBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpO1xuICBjb25zdCBpbml0TWVyZ2VQcm9wcyA9IG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpO1xuICBjb25zdCBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IHdyYXBXaXRoQ29ubmVjdCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc1ZhbGlkRWxlbWVudFR5cGUoV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICBpZiAoIWlzVmFsaWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGNvbXBvbmVudCB0byB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgY29ubmVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3N0cmluZ2lmeUNvbXBvbmVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICApfWBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCBcIkNvbXBvbmVudFwiO1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gYENvbm5lY3QoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcbiAgICBjb25zdCBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0ge1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzLFxuICAgICAgYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH07XG4gICAgZnVuY3Rpb24gQ29ubmVjdEZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICBjb25zdCBbcHJvcHNDb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIC4uLndyYXBwZXJQcm9wczIgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCB3cmFwcGVyUHJvcHMyXTtcbiAgICAgIH0sIFtwcm9wc10pO1xuICAgICAgY29uc3QgQ29udGV4dFRvVXNlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGxldCBSZXN1bHRDb250ZXh0ID0gQ29udGV4dDtcbiAgICAgICAgaWYgKHByb3BzQ29udGV4dD8uQ29uc3VtZXIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzQ29udGV4dENvbnN1bWVyKFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiWW91IG11c3QgcGFzcyBhIHZhbGlkIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgYXMgYHByb3BzLmNvbnRleHRgXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlc3VsdENvbnRleHQgPSBwcm9wc0NvbnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZXN1bHRDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pO1xuICAgICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0VG9Vc2UpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFkaWRTdG9yZUNvbWVGcm9tUHJvcHMgJiYgIWRpZFN0b3JlQ29tZUZyb21Db250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgXCJzdG9yZVwiIGluIHRoZSBjb250ZXh0IG9mIFwiJHtkaXNwbGF5TmFtZX1cIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgb3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gJHtkaXNwbGF5TmFtZX0gaW4gY29ubmVjdCBvcHRpb25zLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0b3JlID0gZGlkU3RvcmVDb21lRnJvbVByb3BzID8gcHJvcHMuc3RvcmUgOiBjb250ZXh0VmFsdWUuc3RvcmU7XG4gICAgICBjb25zdCBnZXRTZXJ2ZXJTdGF0ZSA9IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID8gY29udGV4dFZhbHVlLmdldFNlcnZlclN0YXRlIDogc3RvcmUuZ2V0U3RhdGU7XG4gICAgICBjb25zdCBjaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgfSwgW3N0b3JlXSk7XG4gICAgICBjb25zdCBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICAgICAgICByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24yID0gY3JlYXRlU3Vic2NyaXB0aW9uKFxuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHZvaWQgMCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgbm90aWZ5TmVzdGVkU3ViczIgPSBzdWJzY3JpcHRpb24yLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24yKTtcbiAgICAgICAgcmV0dXJuIFtzdWJzY3JpcHRpb24yLCBub3RpZnlOZXN0ZWRTdWJzMl07XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSk7XG4gICAgICBjb25zdCBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY29udGV4dFZhbHVlLFxuICAgICAgICAgIHN1YnNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTtcbiAgICAgIGNvbnN0IGxhc3RDaGlsZFByb3BzID0gUmVhY3QudXNlUmVmKCk7XG4gICAgICBjb25zdCBsYXN0V3JhcHBlclByb3BzID0gUmVhY3QudXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICBjb25zdCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlID0gUmVhY3QudXNlUmVmKCk7XG4gICAgICBjb25zdCByZW5kZXJJc1NjaGVkdWxlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBpc1Byb2Nlc3NpbmdEaXNwYXRjaCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBpc01vdW50ZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IFJlYWN0LnVzZVJlZigpO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3QgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzU2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSwgd3JhcHBlclByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgfSwgW3N0b3JlLCB3cmFwcGVyUHJvcHNdKTtcbiAgICAgIGNvbnN0IHN1YnNjcmliZUZvclJlYWN0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZSA9IChyZWFjdExpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlVXBkYXRlcyhcbiAgICAgICAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgICAgICBpc01vdW50ZWQsXG4gICAgICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICAgICAgICAgIHJlYWN0TGlzdGVuZXJcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlO1xuICAgICAgfSwgW3N1YnNjcmlwdGlvbl0pO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICB3cmFwcGVyUHJvcHMsXG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnNcbiAgICAgIF0pO1xuICAgICAgbGV0IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB0cnkge1xuICAgICAgICBhY3R1YWxDaGlsZFByb3BzID0gdXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgICAgICAgLy8gVE9ETyBXZSdyZSBwYXNzaW5nIHRocm91Z2ggYSBiaWcgd3JhcHBlciB0aGF0IGRvZXMgYSBidW5jaCBvZiBleHRyYSBzaWRlIGVmZmVjdHMgYmVzaWRlcyBzdWJzY3JpYmluZ1xuICAgICAgICAgIHN1YnNjcmliZUZvclJlYWN0LFxuICAgICAgICAgIC8vIFRPRE8gVGhpcyBpcyBpbmNyZWRpYmx5IGhhY2t5LiBXZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCB0aGUgc3RvcmUgdXBkYXRlIGFuZCBjYWxjdWxhdGVkIG5ldyBjaGlsZCBwcm9wcyxcbiAgICAgICAgICAvLyBUT0RPIGFuZCB3ZSdyZSBqdXN0IHBhc3NpbmcgdGhhdCB0aHJvdWdoIHNvIGl0IHRyaWdnZXJzIGEgcmUtcmVuZGVyIGZvciB1cyByYXRoZXIgdGhhbiByZWx5aW5nIG9uIGB1U0VTYC5cbiAgICAgICAgICBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgZ2V0U2VydmVyU3RhdGUgPyAoKSA9PiBjaGlsZFByb3BzU2VsZWN0b3IoZ2V0U2VydmVyU3RhdGUoKSwgd3JhcHBlclByb3BzKSA6IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvclxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgZXJyLm1lc3NhZ2UgKz0gYFxuVGhlIGVycm9yIG1heSBiZSBjb3JyZWxhdGVkIHdpdGggdGhpcyBwcmV2aW91cyBlcnJvcjpcbiR7bGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrfVxuXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmFjdHVhbENoaWxkUHJvcHMsXG4gICAgICAgICAgICAgIHJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0sIFtyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCBXcmFwcGVkQ29tcG9uZW50LCBhY3R1YWxDaGlsZFByb3BzXSk7XG4gICAgICBjb25zdCByZW5kZXJlZENoaWxkID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFRvVXNlLlByb3ZpZGVyLCB7IHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlIH0sIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfVxuICAgIGNvbnN0IF9Db25uZWN0ID0gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pO1xuICAgIGNvbnN0IENvbm5lY3QgPSBfQ29ubmVjdDtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBDb25uZWN0RnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgY29uc3QgX2ZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gZm9yd2FyZENvbm5lY3RSZWYocHJvcHMsIHJlZikge1xuICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgeyAuLi5wcm9wcywgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVmIH0pO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmb3J3YXJkZWQgPSBfZm9yd2FyZGVkO1xuICAgICAgZm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICBmb3J3YXJkZWQuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKGZvcndhcmRlZCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG4gIHJldHVybiB3cmFwV2l0aENvbm5lY3Q7XG59XG52YXIgY29ubmVjdF9kZWZhdWx0ID0gY29ubmVjdDtcblxuLy8gc3JjL2NvbXBvbmVudHMvUHJvdmlkZXIudHN4XG5mdW5jdGlvbiBQcm92aWRlcih7XG4gIHN0b3JlLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgc2VydmVyU3RhdGUsXG4gIHN0YWJpbGl0eUNoZWNrID0gXCJvbmNlXCIsXG4gIGlkZW50aXR5RnVuY3Rpb25DaGVjayA9IFwib25jZVwiXG59KSB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGU6IHNlcnZlclN0YXRlID8gKCkgPT4gc2VydmVyU3RhdGUgOiB2b2lkIDAsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc2VydmVyU3RhdGUsIHN0YWJpbGl0eUNoZWNrLCBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tdKTtcbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gc3RvcmUuZ2V0U3RhdGUoKSwgW3N0b3JlXSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uIH0gPSBjb250ZXh0VmFsdWU7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gdm9pZCAwO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQgfHwgUmVhY3RSZWR1eENvbnRleHQ7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufVxudmFyIFByb3ZpZGVyX2RlZmF1bHQgPSBQcm92aWRlcjtcblxuLy8gc3JjL2hvb2tzL3VzZVN0b3JlLnRzXG5mdW5jdGlvbiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KVxuICApO1xuICBjb25zdCB1c2VTdG9yZTIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTdG9yZTIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVN0b3JlMlxuICB9KTtcbiAgcmV0dXJuIHVzZVN0b3JlMjtcbn1cbnZhciB1c2VTdG9yZSA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTdG9yZUhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZURpc3BhdGNoLnRzXG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVN0b3JlMiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlU3RvcmUgOiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZURpc3BhdGNoMiA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlMigpO1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaDtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VEaXNwYXRjaDIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZURpc3BhdGNoMlxuICB9KTtcbiAgcmV0dXJuIHVzZURpc3BhdGNoMjtcbn1cbnZhciB1c2VEaXNwYXRjaCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEaXNwYXRjaEhvb2soKTtcblxuLy8gc3JjL2V4cG9ydHMudHNcbnZhciBiYXRjaCA9IGRlZmF1bHROb29wQmF0Y2g7XG5cbi8vIHNyYy9pbmRleC50c1xuaW5pdGlhbGl6ZVVzZVNlbGVjdG9yKHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMik7XG5pbml0aWFsaXplQ29ubmVjdChSZWFjdDIudXNlU3luY0V4dGVybmFsU3RvcmUpO1xuZXhwb3J0IHtcbiAgUHJvdmlkZXJfZGVmYXVsdCBhcyBQcm92aWRlcixcbiAgUmVhY3RSZWR1eENvbnRleHQsXG4gIGJhdGNoLFxuICBjb25uZWN0X2RlZmF1bHQgYXMgY29ubmVjdCxcbiAgY3JlYXRlRGlzcGF0Y2hIb29rLFxuICBjcmVhdGVTZWxlY3Rvckhvb2ssXG4gIGNyZWF0ZVN0b3JlSG9vayxcbiAgc2hhbGxvd0VxdWFsLFxuICB1c2VEaXNwYXRjaCxcbiAgdXNlU2VsZWN0b3IsXG4gIHVzZVN0b3JlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtcmVkdXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1xyXG4gIFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3gsXHJcbiAgZ2V0QXBwU3RvcmUsXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBcclxuICBDYWxjaXRlRmxvdywgQ2FsY2l0ZVNoZWxsLFxyXG59IGZyb20gJ0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy1yZWFjdCdcclxuXHJcbmltcG9ydCB7IFJvdXRlRWRpdGlvbkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQvUm91dGVFZGl0aW9uQ29udGV4dCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCB7IFxyXG4gIEFwcFNlbGVjdG9yLCBNYW51YWxSb3V0ZUNvbXBvbmVudCwgSW50ZXJlc3RDb21wb25lbnQsXHJcbiAgQXV0b21hdGljUm91dGVDb21wb25lbnQsIFJvdXRlU2VsZWN0b3JDb21wb25lbnQsXHJcbn0gZnJvbSAnLi9jb21wb25lbnRzLydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2VsZWN0ZWRBcHBFbnVtLCBTZWxlY3RlZEFwcFR5cGUgfSBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvTWFwQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgQWxlcnRzQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvQWxlcnRzQ29udGFpbmVyJ1xyXG5jb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbmZpZzogU2V0dGluZ0NvbmZpZywgcG9ydGFsVXJsLCBpZDogd2lkZ2V0SWQsXHJcbiAgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IG1hcFdpZGdldElkID0gdXNlTWVtbygoKSA9PiBwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0sIFtdKVxyXG4gIGNvbnN0IFtzZWxlY3RlZEFwcCwgc2V0U2VsZWN0ZWRBcHBdID0gdXNlU3RhdGU8U2VsZWN0ZWRBcHBUeXBlPihTZWxlY3RlZEFwcEVudW0uQXBwU2VsZWN0b3IpXHJcblxyXG4gIGNvbnN0IGJhY2tUb0xpc3QgPSAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgc2V0U2VsZWN0ZWRBcHAoU2VsZWN0ZWRBcHBFbnVtLkFwcFNlbGVjdG9yKVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTZWxlY3RlZEFwcCA9ICgpID0+IHtcclxuXHJcbiAgICBzd2l0Y2goc2VsZWN0ZWRBcHApIHtcclxuICAgICAgY2FzZSBTZWxlY3RlZEFwcEVudW0uQXBwU2VsZWN0b3I6XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIGNhc2UgU2VsZWN0ZWRBcHBFbnVtLlJvdXRlU2VsZWN0b3I6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSb3V0ZVNlbGVjdG9yQ29tcG9uZW50IG9uQmFja1RvTGlzdD17YmFja1RvTGlzdH0+XHJcbiAgICAgICAgICA8L1JvdXRlU2VsZWN0b3JDb21wb25lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICBjYXNlIFNlbGVjdGVkQXBwRW51bS5OZXdJbnRlcmVzdFBvaW50OlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8SW50ZXJlc3RDb21wb25lbnQgb25CYWNrVG9MaXN0PXtiYWNrVG9MaXN0fT5cclxuICAgICAgICAgIDwvSW50ZXJlc3RDb21wb25lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgICBjYXNlIFNlbGVjdGVkQXBwRW51bS5OZXdNYW51YWxSb3V0ZTpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPE1hbnVhbFJvdXRlQ29tcG9uZW50IG9uQmFja1RvTGlzdD17YmFja1RvTGlzdH0+XHJcbiAgICAgICAgICA8L01hbnVhbFJvdXRlQ29tcG9uZW50PlxyXG4gICAgICAgIClcclxuICAgICAgY2FzZSBTZWxlY3RlZEFwcEVudW0uQXV0b21hdGljUm91dGU6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxBdXRvbWF0aWNSb3V0ZUNvbXBvbmVudCBvbkJhY2tUb0xpc3Q9e2JhY2tUb0xpc3R9PlxyXG4gICAgICAgICAgPC9BdXRvbWF0aWNSb3V0ZUNvbXBvbmVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlRWRpdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgbWFwV2lkZ2V0SWQsIFNldHRpbmdDb25maWcsIGFwcENvbmZpZywgcG9ydGFsVXJsLFxyXG4gICAgICB3aWRnZXRJZCxcclxuICAgIH19PlxyXG4gICAgICA8TWFwQ29tcG9uZW50PlxyXG4gICAgICAgIDxDYWxjaXRlU2hlbGw+XHJcbiAgICAgICAgICA8Q2FsY2l0ZUZsb3c+XHJcbiAgICAgICAgICAgIDxBcHBTZWxlY3RvclxyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQXBwPXtzZXRTZWxlY3RlZEFwcH1cclxuICAgICAgICAgICAgPjwvQXBwU2VsZWN0b3I+XHJcbiAgICAgICAgICAgIHtnZXRTZWxlY3RlZEFwcCgpfVxyXG4gICAgICAgICAgPC9DYWxjaXRlRmxvdz5cclxuICAgICAgICA8L0NhbGNpdGVTaGVsbD5cclxuICAgICAgPC9NYXBDb21wb25lbnQ+XHJcbiAgICAgIDxBbGVydHNDb250YWluZXIgLz5cclxuICAgIDwvUm91dGVFZGl0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9