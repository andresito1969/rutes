System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui","jimu-theme"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/route-edition/src/config.ts":
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/config.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrangementStyle: () => (/* binding */ ArrangementStyle),
/* harmony export */   DEFAULT_MAX_RESULT: () => (/* binding */ DEFAULT_MAX_RESULT),
/* harmony export */   DEFAULT_POPPER_OFFSET: () => (/* binding */ DEFAULT_POPPER_OFFSET),
/* harmony export */   DEFAULT_SPATIAL_REFERENCE: () => (/* binding */ DEFAULT_SPATIAL_REFERENCE),
/* harmony export */   EntityStatusType: () => (/* binding */ EntityStatusType),
/* harmony export */   MAX_RECENT_SEARCHES: () => (/* binding */ MAX_RECENT_SEARCHES),
/* harmony export */   MAX_RESULT: () => (/* binding */ MAX_RESULT),
/* harmony export */   MAX_SUGGESTION: () => (/* binding */ MAX_SUGGESTION),
/* harmony export */   RECENT_SEARCHES_KEY: () => (/* binding */ RECENT_SEARCHES_KEY),
/* harmony export */   SearchResultStyle: () => (/* binding */ SearchResultStyle),
/* harmony export */   SearchResultView: () => (/* binding */ SearchResultView),
/* harmony export */   SearchServiceType: () => (/* binding */ SearchServiceType)
/* harmony export */ });
const RECENT_SEARCHES_KEY = 'recent_searches';
const DEFAULT_MAX_RESULT = 6;
const MAX_RESULT = 20;
const DEFAULT_POPPER_OFFSET = [0, 3];
const MAX_SUGGESTION = 6;
const MAX_RECENT_SEARCHES = 6;
const DEFAULT_SPATIAL_REFERENCE = {
    wkid: 4326
};
var SearchServiceType;
(function (SearchServiceType) {
    SearchServiceType["GeocodeService"] = "GeocodeService";
    SearchServiceType["FeatureService"] = "FeatureService";
})(SearchServiceType || (SearchServiceType = {}));
var SearchResultView;
(function (SearchResultView) {
    SearchResultView["ResultPanel"] = "Result_Panel";
    SearchResultView["OtherWidgets"] = "Other_Widgets";
})(SearchResultView || (SearchResultView = {}));
var ArrangementStyle;
(function (ArrangementStyle) {
    ArrangementStyle["Style1"] = "Style1";
    ArrangementStyle["Style2"] = "Style2";
    ArrangementStyle["Style3"] = "Style3";
})(ArrangementStyle || (ArrangementStyle = {}));
var SearchResultStyle;
(function (SearchResultStyle) {
    SearchResultStyle["Classic"] = "Classic";
    SearchResultStyle["Compact"] = "Compact";
})(SearchResultStyle || (SearchResultStyle = {}));
var EntityStatusType;
(function (EntityStatusType) {
    EntityStatusType["None"] = "";
    EntityStatusType["Init"] = "init";
    EntityStatusType["Loading"] = "loading";
    EntityStatusType["Loaded"] = "loaded";
    EntityStatusType["Warning"] = "warning";
    EntityStatusType["Error"] = "error";
})(EntityStatusType || (EntityStatusType = {}));


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/setting/component/search-result-style.tsx":
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/setting/component/search-result-style.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/route-edition/src/config.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/route-edition/src/setting/translations/default.ts");
/** @jsx jsx */





const SearchStyleSetting = (props) => {
    const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .active {
      .style-img {
        border-color: var(--sys-color-primary-light);
      }
    }
    .style-img {
      border: 2px solid var(--ref-palette-neutral-200);
    }
    &>div {
      flex: 1;
    }
    & button, & button:hover, & button.active {
      background-color: var(--ref-palette-neutral-200) !important;
    }
    & button {
      width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(108)};
      height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(78)};
      padding: 0;
    }
    .title {
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
      line-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(18)};
      margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)};
      color: var(--ref-palette-neutral-1000);
    }
  `;
    const isRTL = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        return state.appContext.isRTL;
    });
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const { config, id, onSettingChange } = props;
    const { searchResultStyle } = config;
    const onStyleChange = (style) => {
        onSettingChange({
            id: id,
            config: config.set('searchResultStyle', style)
        });
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('style'), role: 'group', "aria-label": nls('style') },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100', css: STYLE },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: 'tertiary', className: searchResultStyle === _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultStyle.Classic ? 'active' : '', title: nls('searchClassic'), onClick: () => { onStyleChange(_config__WEBPACK_IMPORTED_MODULE_2__.SearchResultStyle.Classic); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { className: 'style-img w-100 h-100', icon: __webpack_require__(isRTL ? /*! ../assets/style3.png */ "./your-extensions/widgets/route-edition/src/setting/assets/style3.png" : /*! ../assets/style1.png */ "./your-extensions/widgets/route-edition/src/setting/assets/style1.png") })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'title text-center' }, nls('searchClassic'))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: 'tertiary', className: searchResultStyle === _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultStyle.Compact ? 'active' : '', title: nls('searchCompact'), onClick: () => { onStyleChange(_config__WEBPACK_IMPORTED_MODULE_2__.SearchResultStyle.Compact); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { className: 'style-img w-100 h-100', icon: __webpack_require__(isRTL ? /*! ../assets/style4.png */ "./your-extensions/widgets/route-edition/src/setting/assets/style4.png" : /*! ../assets/style2.png */ "./your-extensions/widgets/route-edition/src/setting/assets/style2.png") })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'title text-center' }, nls('searchCompact'))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchStyleSetting);


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/setting/component/search-setting-option.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/setting/component/search-setting-option.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/route-edition/src/config.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/route-edition/src/setting/translations/default.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _search_result_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-result-style */ "./your-extensions/widgets/route-edition/src/setting/component/search-result-style.tsx");
/** @jsx jsx */







const SearchOptions = (props) => {
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const appTheme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .check-box-label {
      color: ${appTheme.ref.palette.neutral[1100]}
    }
    .search-setting-con {
      padding-left: 0;
      padding-right: 0;
    }
    .divider-line {
      padding-bottom: 0;
    }
    .checkbox-con .jimu-widget-setting--row-label{
      max-width: 100%;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  `;
    const { config, id, useDataSources, onSettingChange } = props;
    const { searchResultView, hint, resultMaxNumber, linkParam, isAutoSelectFirstResult } = config;
    const [openSearchSuggestion, setOpenSearchSuggestion] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [openSearchResult, setOpenSearchResult] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [newResultMaxNumber, setResultMaxNumber] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(resultMaxNumber);
    const [settingConfig, setSettingConfig] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({}));
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        initSettingConfig();
        // eslint-disable-next-line
    }, [config]);
    const initSettingConfig = () => {
        const newSettingConfig = {
            maxSuggestions: config === null || config === void 0 ? void 0 : config.maxSuggestions,
            isUseCurrentLoation: config === null || config === void 0 ? void 0 : config.isUseCurrentLoation,
            isShowRecentSearches: config === null || config === void 0 ? void 0 : config.isShowRecentSearches,
            recentSearchesMaxNumber: config === null || config === void 0 ? void 0 : config.recentSearchesMaxNumber
        };
        setSettingConfig((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newSettingConfig));
    };
    const onConfigChange = (key, value) => {
        onSettingChange({ id: id, config: config.setIn(key, value) });
    };
    const handleAutoSelectChange = (evt) => {
        onConfigChange(['isAutoSelectFirstResult'], !isAutoSelectFirstResult);
    };
    const handleResultMaxNumberAccept = value => {
        if (!value || value > _config__WEBPACK_IMPORTED_MODULE_2__.MAX_RESULT) {
            value = resultMaxNumber || _config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_MAX_RESULT;
            setResultMaxNumber(value);
        }
        checkNumber(value) && onConfigChange(['resultMaxNumber'], Number(value));
    };
    const handleResultMaxNumberChange = (e) => {
        const value = e.target.value;
        checkNumber(value) && setResultMaxNumber(value);
    };
    const checkNumber = (value) => {
        if ((value === null || value === void 0 ? void 0 : value.length) === 0)
            return true;
        return Number(value) && Number(value) > 0;
    };
    const onSettingLinkConfirm = (linkResult) => {
        if (!linkResult) {
            return;
        }
        onConfigChange(['linkParam'], linkResult);
    };
    const onResultViewChange = (isShowSearchResultView) => {
        const resultView = isShowSearchResultView ? _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultView.ResultPanel : _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultView.OtherWidgets;
        onConfigChange(['searchResultView'], resultView);
    };
    const getHiddenLinks = () => {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PrintPreview]);
    };
    const onHintChange = (hint) => {
        onConfigChange(['hint'], hint);
    };
    const onSuggestionSettingChange = (settingConfig) => {
        if (!settingConfig)
            return false;
        const newConfig = config.merge(settingConfig);
        onSettingChange({ id: id, config: newConfig });
    };
    const renderSearchSuggestionSetting = () => {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { className: 'search-setting-con' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { role: 'group', "aria-label": nls('searchSuggestion') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.CollapsablePanel, { label: nls('searchSuggestion'), isOpen: openSearchSuggestion, onRequestOpen: () => { setOpenSearchSuggestion(true); }, onRequestClose: () => { setOpenSearchSuggestion(false); }, level: 1 },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SearchSuggestionSetting, { id: id, settingConfig: settingConfig, onSettingChange: onSuggestionSettingChange })))),
            openSearchSuggestion && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { className: 'divider-line' })));
    };
    const renderSearchResultSetting = () => {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { role: 'group', "aria-label": nls('searchResult') },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.CollapsablePanel, { label: nls('searchResult'), isOpen: openSearchResult, onRequestOpen: () => { setOpenSearchResult(true); }, onRequestClose: () => { setOpenSearchResult(false); }, level: 1 },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: nls('resultPanel'), className: 'mt-2' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { title: nls('resultPanel'), checked: searchResultView === _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultView.ResultPanel, onChange: (evt) => { onResultViewChange(searchResultView === _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultView.OtherWidgets); } })),
                searchResultView === _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultView.ResultPanel && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', className: 'checkbox-con', label: nls('maximumResults') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { "aria-label": nls('maximumResults'), size: 'sm', value: newResultMaxNumber, onChange: handleResultMaxNumberChange, onAcceptValue: handleResultMaxNumberAccept, className: 'w-100' })),
                searchResultView === _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultView.ResultPanel && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'cursor-pointer d-flex align-items-center', onClick: handleAutoSelectChange, "aria-label": nls('autoSelect') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: isAutoSelectFirstResult, title: nls('autoSelect'), className: 'mr-1' }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'check-box-label flex-grow-1 ml-1' }, nls('autoSelect')))),
                searchResultView === _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultView.OtherWidgets && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { className: 'd-block', flow: 'wrap', label: nls('redirectSearchResult') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.LinkSelector, { onSettingConfirm: onSettingLinkConfirm, linkParam: linkParam, useDataSources: useDataSources, widgetId: id, hiddenLinks: getHiddenLinks(), openTypes: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.OpenTypes.CurrentWindow]) })),
                searchResultView === _config__WEBPACK_IMPORTED_MODULE_2__.SearchResultView.ResultPanel && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_search_result_style__WEBPACK_IMPORTED_MODULE_6__["default"], { id: id, config: config, onSettingChange: onSettingChange }))));
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: nls('generalSearchOption'), css: STYLE },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SearchGeneralSetting, { id: id, hint: hint, onSettingChange: onHintChange }),
        renderSearchSuggestionSetting(),
        renderSearchResultSetting()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchOptions);


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/setting/translations/default.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/setting/translations/default.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    searchResult: 'Search result',
    arrangementStyle: 'Arrangement style',
    showSearchResult: 'Show search results in',
    resultPanel: 'Result panel',
    otherWidgets: 'Other widgets',
    autoSelect: 'Auto select the first result',
    redirectSearchResult: 'Redirect if search result is not empty',
    notSetCorrectle: 'The search or display field is not set correctly.',
    selectedField: '{fieldNumber} Selected',
    searchExample: 'Example: {url}',
    locatorSourceErrorHint: 'The URL you entered is invalid or inaccessible',
    locatorUrlError: 'Locator URL is not set correctly',
    maximumResults: 'Maximum display results per source',
    outputDsLabel: '{label} result',
    searchBoxTip: 'Search box',
    searchIconTip: 'Search icon',
    searchClassic: 'Classic',
    searchCompact: 'Compact',
    arrangementStyleIndex: 'Arrangement style {index}',
    styleSquare: 'Square',
    styleCurve: 'Curve',
    styleLinear: 'Linear',
    _url_params_search_status_label: 'Search status'
});


/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/setting/assets/style1.png":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/setting/assets/style1.png ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAACQCAYAAABqK6XsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS6SURBVHgB7d2/ThRdGMDh4xcTLdSYKI02SmJEC62kstIbsLLzBrwgb8DOyhvQykob/yQGtZAGGiAkQAEJCV/eTSbffKPiEnjPzLDPk2wBDIVhf845Z8+eLQUAAAAAAAAAAAAAAACAMThTjun58+cHBU6pFy9eHKuRfwqQRmCQSGCQ6Gw5YW/fvi0wrUePHpXTzB0MEgkMEgkMEp34HAyy7e3tlW/fvpWVlZWyvr5etre3J9+/cuVKuXTpUpmfny+3b98uQyAwRuXnz5+ThbSIrGtjY2PyiGvev39fFhcXew9NYIzGu3fvyufPn6e6Nu5qb968KVtbW+XBgwelL+ZgjMKHDx+mjqv7exFmX9zBGLylpaVJKG3nzp0r9+7dK9evXy/Xrl2bfC+Ghx8/fpzMz9oizLju5s2bpTZ3MAavG9fFixfL06dPJ0O/Jq4QixyPHz8uz549m1zT9qd5WzaBMWhx92pWCRtPnjz5JaC2+FlcE3e5RrPyWJvAGLRYEWxbWFg4NK5GXBNDyLbV1dVSm8AYtFgFbLt//36ZVsy72tbW1kptAmPQYuGiLeZZ02rPz0J3qFmDwCCRwBi07nzrKPOo2EbVdvXq1VKbwBi0bhSx/3Banz59+t/XsU+xNoExaN2FinjReJq5VFzTXZb3QjN0xGbd7utZr1+/PjSy+Flc0xZDzT42/gqMQYu4uscKREAvX76c7M5oz7Ni+Bi7Pl69evVLgH3cvYK9iAxexBEvGnc3+8Yuj3hMI353bm6u+l3MHYxRePjw4bHfdhJvX6m9XUpgjEYEFsPFabZKNbvtu2pHZojIqMRexHjE0DD2KcZcq5mHRXixrB8rj83iSHzdPUowIgs1hosCY5Sa0Ka5LvQVmSEip15E9rsDTuPcjuz3iAmMmdCN7HfvGctgiMjMaIaL8VrZ3960eVIExkyZdu52UgwRIZHAIJHAINGJz8FO++c9wVG4g0EigUEigQEAAAAAAABwJGfKMS0sLBwUOKWWlpaO1YidHJBIYJBIYJBIYJBIYJBIYJBIYJBIYJBIYJBIYJBIYJCo6tn058+fL3fv3i0XLlwoZ886Fn/o4oPtvn//XnZ3d8uYxGc6HxwclOXl5dK3as/yiGtxcVFYIxKfDnn58uXJ52iNJbKIKx6NviOrNkS8deuWuEYo/mZ37twpY9CNa35+vty4caP0qVpgc3NzhXGq8Tlax9WNq9F3ZNUC29/fL4zT0Ecef4qr0Wdk1QLb2dkpjNPa2loZqr/F1egrsmqBff361V1shOJv9uPHjzJE08bV6COyaoHFKlSsRg35f0P+E2Ftbm4OdgXxqHE1akfmTA44hDM5YMAEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBomcTc/MqXnmfrU7WHM2fZx1Li76FGfux3MxnpPZnE3PTKp15r6z6ZlZNc7cdzY9M6vGiMrZ9MysGqdMO5uemVTrzH1n0zNTap+5X3VZL/5BX758KTAr7OSARAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAIDAAAAAAAAAAAAAAAAAGbevzK1giHhU5jTAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/setting/assets/style2.png":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/setting/assets/style2.png ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAACQCAYAAABqK6XsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPWSURBVHgB7d0/L2VpHMDxx2ZDg2yChoaKSrIFFQ0VlYpGs+3t9s3ceBlUOtmCSrNR0bANFcmEigTrdzc2d87c68/wHOfw+SQTxpyZKOab5zm/89wrJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIoye9UaPRuE/wSTWbzTc18ksCshEYZCQwyOjX9M52dnYS/KyFhYX0mVjBICOBQUbvvkWEMl1dXaXT09PWx0ejo6NpeHg49fX1pY8mMGopotrf309nZ2ddr5mamkozMzNpYGAgfRSBUSvX19etQdrJycmz1x4eHraui8imp6fTRxAYtRFxbW5upouLi1f9nd3d3dbHCK1sAqM2YuXqFNfY2FgaGhpq3XNdXl62to3t92QhtpODg4NpcnIylUlg1MLjdq9dRDU/P98aanS6fm9vr7VyPYqVbHx8vNThhzE9tRArULuIa2VlpWNcIQYc8eftMUVsBwcHqUwCo/KKY/iwvLz87EoUERaHG7GylUlgVF5xFB+r00tH7xFYe4gRajHWnARG5RWDiIfILxVx9ff3P/nv5SQwaqe3t/dV18f0sF374CM3gVE7Nzc3r7q+GJQpIrQpbgmPj4/TS8V2sHgPF8OPsgiMyisG1ulBcjfFqWEMR6xg0CaedRWfd8WRqeciiwfTxedns7OzqUwCoxaKYURcEVk8IyuKe64Ia3t7+7uvx+rV7cF0Lo5KUQsRRpwjPDo6+v9rEdnW1lbrnirOI8bWL74WK1enSWEMR147IHkrgVEbc3Nz6fz8/IcDv/H7l5ywfzyNH0eoyhp02CJSG7FCra2tveq1XcWBxs+85OUtBEbtxEq2urqaJiYmul4TYcXrv9bX1394HViZkdkiUksxul9aWmrFEqHE1jE+j0HGyMjId1vAx8DaJ4plbRcFRq3FStVpjF/0VGSxGuZ63w5bRL6MiKy4XYwXYOZ8UxyB8aW0RxZj/8XFxZSTLSJfTgQW93BPDUneixWML6mMuILAICOBQUYCg4zefcjx2X6+E7yFFQwyEhhkJDDIqCeRVaPRuE8V1mw2/R/IyAoGGTkqVVFx6rv4hi3ddDrESjVYwSrqpdGIq9oEVmHPxSOu6hNYxXWLSFz1ILAaKMYkrvow5KiJYmDUg8Dy+/bw67f0DoRVP7aImfX09PydKur+/n4zkZXAMru9vf0j/beKVc23h8D+TGQlsMw2Njb+ubu7+/3h06qsFhHWX/E9xfeWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgA/zLw+hTkb8BAWHAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/setting/assets/style3.png":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/setting/assets/style3.png ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAACQCAYAAABqK6XsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB7d2/jg1vGMDxxy8SCkTCNjRsIpaCylYqbkClcwMuyA3oVG6ASkXjTyKLgoZmiQSFTTbZX56TTDIG62zWM2fe4/NJTrG7s4Xs+Zp53/POOxEAAAAAAAAAAAAAAAAAtOBA7NPt27d3ApbUnTt39tXIfwGUERgUEhgUOhhL7uHDhwHzunbtWvxNzmBQSGBQSGBQaCFjsK2trXj16lW8f/8+Pn78GF+/fp19/8SJE3Hs2LFYXV2N8+fPB7Ru9MDevn07m3jIyIY+ffo0e+Uxjx8/jvX1daHRtFEDe/ToUTx//nyuY/Os9uDBg/jy5UtcuXIloEWjjcGePHkyd1zD38swoUWjnME2NjZmofQdOnQoLl26FKdPn45Tp07NvpeXh0+fPp2Nz/oyzDzu7NmzAS0Z5Qw2jOvo0aNx8+bN2aVfF1fKSY7r16/HrVu3Zsf0/W7cBlNWHlievbpZws6NGzd+Cqgvf5bH5Fmu0808QkvKA8sZwb61tbVd4+rkMXkJ2ffhw4eAlpQHlrOAfZcvX4555birb3NzM6Al5YHlxEVfjrPm1R+fpeGlJkydpVJQqDyw4XhrL+OoXEbVd/LkyYCWlAc2jCLXH87r2bNnP3yd6xShJeWBDScq8kPjecZSecxwWt4HzbSmPLBcrDv8POv+/fu7RpY/y2P68lLTwl9aUx5YxjW8DTsDunv37mx1Rn+clZePuerj3r17PwXo7EWLRlmLmHHkh8bDxb65yiNf88jfXVlZcRajKaNN01+9enXft53k7SuWS9GSUT8Hy8DycnGepVLdavshkdGS0e9ozrWI+cpLw1ynmGOtbhyW4eW0fs48dpMj+fVw67WMLLlcZOoWti9iF9o8xyWR0aImlkplZL/aEDL37XCPGFPWzFrEYWS/umcMpqaprbO7y8X8rOxPN23CFDS3N/28YzeYArerQCGBQSGBQaGlfz7Y337eE+yFMxgUEhgUEhgAAAAAAAAAe3Ig9mltbW0nYEltbGzsqxErOaCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKDQpPZFzGc57+zsxLt376Ilhw8fjosXL8aRI0fi4MGl32qyefnAx9evX8f379+j2mTeDRlXvjqtRJZxra+vC6sh+dTU48ePz54vVx3ZJC4Rh3Gtrq7GmTNnogXnzp0TV4Pyb3bhwoWotvDAhnF1WolsZWUlaNMYz5dbaGC/i6vTQmTb29tBm8a48lhYYH+KqzP1yL59+xa0aXNzM6otJLB54+pMObKXL186izUo/2Zv3ryJaqMHtte4OlONLGehcjZqjP8N2b8M6/Pnz6PMICZ7csAu7MkBEyYwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKDTqlrT2cGcKxtybfrQzWLeHe+4JLi4WKfemz/divierjRaYPdyZkqXbm94e7kzNUu1Nb/dbpmap9qa3hztTs1R709vDnSlZur3p7eHOFIy9N/2o03r5D3rx4kXAv8JKDigkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMAAAAAAAAAAAAAAAAADgn/c/TJKCIS3YLcsAAAAASUVORK5CYII="

/***/ }),

/***/ "./your-extensions/widgets/route-edition/src/setting/assets/style4.png":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/setting/assets/style4.png ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAACQCAYAAABqK6XsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPeSURBVHgB7d0/L2VpHMDxx2ZDg2yChoaKSrIFFQ0VlYpGs61u34x4GVQ62YJKs1HRsA0VyYSKBOt3NzZ3ztzrz/Bc57n5fJIJY85MFPPN85zf+SMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMijJ33QxsbGY4Iutbm5+aFGfklANgKDjAQGGf2ausze3l6Cn7WwsJA+kxUMMhIYZPRlW8Sbm5t0fn7e+PhsdHQ0DQ8Pp76+vgTdoOOBRVSHh4fp4uKi7TFTU1NpZmYmDQwMJChZxwK7vb1tDCDOzs5ePfb4+LhxXEQ2PT2doFQdCSzi2t7eTldXV+/6O/v7+42PERqUqCOBxcrVKq6xsbE0NDTUOOe6vr5ubBubz8lCbCcHBwfT5ORkgtJkD+x5u9csopqfn28MNVodf3Bw0Fi5nsVKNj4+bvhBcbKP6WMFahZxraystIwrxIAj/rw5pojt6OgoQWmyBlYdw4fl5eVXV6KIsDrciJUNSpM1sOooPlant47eI7DmECPUaqxQd1kDqwYRF5HfKuLq7+9/8d+DuuvorVK9vb3vOj6mh82aBx9Qgo4Gdnd3967jq0GZIlKarIFVt4Snp6fprWI7WD2Hi+EHlKSjgbW6kNxOdWoYwxErGKXJGlhc66pe74pbpl6LLC5MV6+fzc7OJihN9nOwahgRV0QW18iq4pwrwtrd3f3u67F6tbswDXWW/VapCCPuIzw5Ofn/axHZzs5O45wq7keMrV98LVauVpPCGI68d0ACddCRm33n5ubS5eXlDzf8xu/fcof98934cQuVQQcl6ciYPlaotbW1dz3bVR1o/MwjL/DVOnodLFay1dXVNDEx0faYCCue/1pfX//hOTCRUZqOvzIgRvdLS0uNWCKU2DrG5zHIGBkZ+W4L+BxY80TRdpGSfNlLb2KlajXGr3opslgNvbeDOivitW0RWXW7GA9giou6K+a9iM2Rxdh/cXExQd0V9ersCCzO4V4akkCdFPdmX3FREq/OhowEBhkJDDLqup8P9tk/3wk+wgoGGQkMMhIYZNSTyGpjY+Mx1djm5qb/AxlZwSCjrpsidot4eqD64p92Wt0MTT1YwWrqrdGIq94EVmOvxSOu+hNYzbWLSFxlEFgBqjGJqxyGHIWoBkYZBJbft6dfv6VPIKzy2CJm1tPT83eqqcfHx+1EVgLL7P7+/o/03ypWN9+eAvszkZXAMtva2vrn4eHh96dP67JaRFh/xfcU31sCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvsy//ZVORmB05vIAAAAASUVORK5CYII="

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

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

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/******/ 			// no module.id needed
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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/route-edition/src/setting/setting.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/route-edition/src/config.ts");
/* harmony import */ var _component_search_setting_option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/search-setting-option */ "./your-extensions/widgets/route-edition/src/setting/component/search-setting-option.tsx");
/** @jsx jsx */







const Setting = (props) => {
    const { config, id, portalUrl, onSettingChange, useDataSources } = props;
    const SYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .suggestion-setting-con  {
      padding-bottom: 0;
    }
  `;
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    const onDataSettingChange = (datasourceConfig, dsInWidgetJson) => {
        if (!datasourceConfig)
            return false;
        const appConfigAction = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
        const newConfig = config === null || config === void 0 ? void 0 : config.setIn(['datasourceConfig'], datasourceConfig);
        let newWidgetJson = { id, config: newConfig };
        if ((dsInWidgetJson === null || dsInWidgetJson === void 0 ? void 0 : dsInWidgetJson.isWidgetJsonDsChanged) && (dsInWidgetJson === null || dsInWidgetJson === void 0 ? void 0 : dsInWidgetJson.dsInWidgetJson)) {
            newWidgetJson = Object.assign(Object.assign({}, newWidgetJson), dsInWidgetJson === null || dsInWidgetJson === void 0 ? void 0 : dsInWidgetJson.dsInWidgetJson);
        }
        appConfigAction.editWidget(newWidgetJson).exec();
    };
    const createOutputDs = (outputDsJsonList, datasourceConfig, dsInWidgetJson) => {
        if (!datasourceConfig)
            return false;
        const newConfig = config === null || config === void 0 ? void 0 : config.setIn(['datasourceConfig'], datasourceConfig);
        let newWidgetJson = {
            id,
            config: newConfig,
            useUtilities: getUseUtilities(newConfig)
        };
        if ((dsInWidgetJson === null || dsInWidgetJson === void 0 ? void 0 : dsInWidgetJson.isWidgetJsonDsChanged) && (dsInWidgetJson === null || dsInWidgetJson === void 0 ? void 0 : dsInWidgetJson.dsInWidgetJson)) {
            newWidgetJson = Object.assign(Object.assign({}, newWidgetJson), dsInWidgetJson === null || dsInWidgetJson === void 0 ? void 0 : dsInWidgetJson.dsInWidgetJson);
        }
        const appConfigAction = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
        appConfigAction.editWidget(newWidgetJson, outputDsJsonList).exec();
    };
    const getUseUtilities = (config) => {
        var _a;
        const useUtilities = [];
        (_a = config === null || config === void 0 ? void 0 : config.datasourceConfig) === null || _a === void 0 ? void 0 : _a.forEach(configItem => {
            if ((configItem === null || configItem === void 0 ? void 0 : configItem.searchServiceType) === _config__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.GeocodeService) {
                useUtilities.push(configItem === null || configItem === void 0 ? void 0 : configItem.useUtility);
            }
        });
        return useUtilities;
    };
    const handleEnableFilteringChange = (value) => {
        onSettingChange({ id: id, config: config.set('enableFiltering', value) });
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-setting-search jimu-widget-search', css: SYLE },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Mapa" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapWidgetSelected })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SearchDataSetting, { id: id, portalUrl: portalUrl, useDataSources: useDataSources, createOutputDs: true, onSettingChange: onDataSettingChange, onOutputDsSettingChange: createOutputDs, datasourceConfig: config === null || config === void 0 ? void 0 : config.datasourceConfig, searchDataSettingType: jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SearchDataType.Both, enableFiltering: config === null || config === void 0 ? void 0 : config.enableFiltering, onEnableFilteringChange: handleEnableFilteringChange }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_search_setting_option__WEBPACK_IMPORTED_MODULE_4__["default"], { id: id, config: config, onSettingChange: onSettingChange, useDataSources: useDataSources })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPLE1BQU0sbUJBQW1CLEdBQUcsaUJBQWlCO0FBQzdDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQztBQUM1QixNQUFNLFVBQVUsR0FBRyxFQUFFO0FBQ3JCLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXBDLE1BQU0sY0FBYyxHQUFHLENBQUM7QUFDeEIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDO0FBQzdCLE1BQU0seUJBQXlCLEdBQUc7SUFDdkMsSUFBSSxFQUFFLElBQUk7Q0FDWDtBQUVELElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUMzQixzREFBaUM7SUFDakMsc0RBQWlDO0FBQ25DLENBQUMsRUFIVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRzVCO0FBUUQsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQzFCLGdEQUE0QjtJQUM1QixrREFBOEI7QUFDaEMsQ0FBQyxFQUhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFHM0I7QUFFRCxJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDMUIscUNBQWlCO0lBQ2pCLHFDQUFpQjtJQUNqQixxQ0FBaUI7QUFDbkIsQ0FBQyxFQUpXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJM0I7QUFFRCxJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDM0Isd0NBQW1CO0lBQ25CLHdDQUFtQjtBQUNyQixDQUFDLEVBSFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUc1QjtBQUVELElBQVksZ0JBT1g7QUFQRCxXQUFZLGdCQUFnQjtJQUMxQiw2QkFBUztJQUNULGlDQUFhO0lBQ2IsdUNBQW1CO0lBQ25CLHFDQUFpQjtJQUNqQix1Q0FBbUI7SUFDbkIsbUNBQWU7QUFDakIsQ0FBQyxFQVBXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFPM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERCxlQUFlO0FBQ2tIO0FBRWpFO0FBQ0Q7QUFDZTtBQUMxQjtBQVFwRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsS0FBNkIsRUFBRSxFQUFFO0lBQzNELE1BQU0sS0FBSyxHQUFHLDhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7O2VBZ0JKLCtDQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDaEIsK0NBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDOzs7O21CQUliLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztxQkFDZCwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ2pCLCtDQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7O0dBR2hDO0lBRUQsTUFBTSxLQUFLLEdBQUcsaURBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtRQUN0RCxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSztJQUMvQixDQUFDLENBQUM7SUFFRixNQUFNLEdBQUcsR0FBRyw0Q0FBSyxDQUFDLGNBQWMsQ0FBQyw2REFBYyxFQUFFLG9EQUFtQixFQUFFLHNEQUFzQixDQUFDO0lBQzdGLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUs7SUFDN0MsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsTUFBTTtJQUVwQyxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtRQUNqRCxlQUFlLENBQUM7WUFDZCxFQUFFLEVBQUUsRUFBRTtZQUNOLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQztTQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sQ0FDTCwrQ0FBQywyRUFBVSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUMsT0FBTyxnQkFBYSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ2hGLHdEQUFLLFNBQVMsRUFBQyxzQ0FBc0MsRUFBQyxHQUFHLEVBQUUsS0FBSztZQUM5RDtnQkFDRSwrQ0FBQywyQ0FBTSxJQUNMLElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFFLGlCQUFpQixLQUFLLHNEQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzFFLEtBQUssRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxhQUFhLENBQUMsc0RBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztvQkFFM0QsK0NBQUMseUNBQUksSUFBQyxTQUFTLEVBQUMsdUJBQXVCLEVBQUMsSUFBSSxFQUFFLG1CQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtR0FBc0IsQ0FBQyxDQUFDLENBQUMsbUdBQXNCLENBQUMsR0FBRyxDQUMxRztnQkFDVCx3REFBSyxTQUFTLEVBQUMsbUJBQW1CLElBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFPLENBQzNEO1lBQ047Z0JBQ0UsK0NBQUMsMkNBQU0sSUFDTCxJQUFJLEVBQUMsVUFBVSxFQUNmLFNBQVMsRUFBRSxpQkFBaUIsS0FBSyxzREFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUMxRSxLQUFLLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsYUFBYSxDQUFDLHNEQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7b0JBRTNELCtDQUFDLHlDQUFJLElBQUMsU0FBUyxFQUFDLHVCQUF1QixFQUFDLElBQUksRUFBRSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUdBQXNCLENBQUMsQ0FBQyxDQUFDLG1HQUFzQixDQUFDLEdBQUcsQ0FDMUc7Z0JBQ1Qsd0RBQUssU0FBUyxFQUFDLG1CQUFtQixJQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBTyxDQUMzRCxDQUNGLENBQ0ssQ0FDZDtBQUNILENBQUM7QUFFRCxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZqQyxlQUFlO0FBQzRJO0FBRTJFO0FBQ3hJO0FBQ2lCO0FBQzNEO0FBQ2Y7QUFDaUI7QUFTdEQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUU7SUFDbEQsTUFBTSxHQUFHLEdBQUcsNENBQUssQ0FBQyxjQUFjLENBQUMsNkRBQWMsRUFBRSxvREFBbUIsRUFBRSxzREFBc0IsQ0FBQztJQUM3RixNQUFNLFFBQVEsR0FBRyxvREFBUSxFQUFFO0lBRTNCLE1BQU0sS0FBSyxHQUFHLDhDQUFHOztlQUVKLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7OztHQWU5QztJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsR0FBRyxLQUFLO0lBQzdELE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLE1BQU07SUFFOUYsTUFBTSxDQUFDLG9CQUFvQixFQUFFLHVCQUF1QixDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzdFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUVyRSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDaEYsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFDLG9EQUFTLENBQUMsRUFBRSxDQUE2QixDQUFDO0lBRW5HLDRDQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNuQixpQkFBaUIsRUFBRTtRQUNuQiwyQkFBMkI7SUFDN0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFWixNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtRQUM3QixNQUFNLGdCQUFnQixHQUEyQjtZQUMvQyxjQUFjLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGNBQWM7WUFDdEMsbUJBQW1CLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLG1CQUFtQjtZQUNoRCxvQkFBb0IsRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsb0JBQW9CO1lBQ2xELHVCQUF1QixFQUFFLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSx1QkFBdUI7U0FDekQ7UUFDRCxnQkFBZ0IsQ0FBQyxvREFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsR0FBYSxFQUFFLEtBQVUsRUFBRSxFQUFFO1FBQ25ELGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNyQyxjQUFjLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUM7SUFDdkUsQ0FBQztJQUVELE1BQU0sMkJBQTJCLEdBQUcsS0FBSyxDQUFDLEVBQUU7UUFDMUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsK0NBQVUsRUFBRSxDQUFDO1lBQ2pDLEtBQUssR0FBRyxlQUFlLElBQUksdURBQWtCO1lBQzdDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDO1FBQ0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxNQUFNLDJCQUEyQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzVCLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDakQsQ0FBQztJQUVELE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxFQUFXLEVBQUU7UUFDckMsSUFBSSxNQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxNQUFLLENBQUM7WUFBRSxPQUFPLElBQUk7UUFDcEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxVQUF1QixFQUFFLEVBQUU7UUFDdkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2hCLE9BQU07UUFDUixDQUFDO1FBQ0QsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxDQUFDO0lBQzNDLENBQUM7SUFFRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsc0JBQStCLEVBQUUsRUFBRTtRQUM3RCxNQUFNLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMscURBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxxREFBZ0IsQ0FBQyxZQUFZO1FBQ3hHLGNBQWMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFRCxNQUFNLGNBQWMsR0FBRyxHQUE2QixFQUFFO1FBQ3BELE9BQU8sb0RBQVMsQ0FBQyxDQUFDLCtDQUFRLENBQUMsVUFBVSxFQUFFLCtDQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDcEMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLHlCQUF5QixHQUFHLENBQUMsYUFBdUMsRUFBRSxFQUFFO1FBQzVFLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTyxLQUFLO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQzdDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxNQUFNLDZCQUE2QixHQUFHLEdBQUcsRUFBRTtRQUN6QyxPQUFPLENBQ0w7WUFDRSwrQ0FBQywrRUFBYyxJQUFDLFNBQVMsRUFBQyxvQkFBb0I7Z0JBQzVDLCtDQUFDLDJFQUFVLElBQUMsSUFBSSxFQUFDLE9BQU8sZ0JBQWEsR0FBRyxDQUFDLGtCQUFrQixDQUFDO29CQUMxRCwrQ0FBQyxxREFBZ0IsSUFDZixLQUFLLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQzlCLE1BQU0sRUFBRSxvQkFBb0IsRUFDNUIsYUFBYSxFQUFFLEdBQUcsRUFBRSxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFDdEQsY0FBYyxFQUFFLEdBQUcsRUFBRSxHQUFHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFDeEQsS0FBSyxFQUFFLENBQUM7d0JBRVIsK0NBQUMsd0ZBQXVCLElBQ3RCLEVBQUUsRUFBRSxFQUFFLEVBQ04sYUFBYSxFQUFFLGFBQWEsRUFDNUIsZUFBZSxFQUFFLHlCQUF5QixHQUMxQyxDQUNlLENBQ1IsQ0FDRTtZQUNoQixvQkFBb0IsSUFBSSwrQ0FBQywrRUFBYyxJQUFDLFNBQVMsRUFBQyxjQUFjLEdBQUUsQ0FDL0QsQ0FDUDtJQUNILENBQUM7SUFFRCxNQUFNLHlCQUF5QixHQUFHLEdBQUcsRUFBRTtRQUNyQyxPQUFPLENBQ0wsK0NBQUMsMkVBQVUsSUFBQyxJQUFJLEVBQUMsT0FBTyxnQkFBYSxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQ3RELCtDQUFDLHFEQUFnQixJQUNmLEtBQUssRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQzFCLE1BQU0sRUFBRSxnQkFBZ0IsRUFDeEIsYUFBYSxFQUFFLEdBQUcsRUFBRSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFDbEQsY0FBYyxFQUFFLEdBQUcsRUFBRSxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFDcEQsS0FBSyxFQUFFLENBQUM7Z0JBRVIsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFNBQVMsRUFBQyxNQUFNO29CQUNyRCwrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixLQUFLLHFEQUFnQixDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRSxHQUFHLGtCQUFrQixDQUFDLGdCQUFnQixLQUFLLHFEQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUMsR0FBSSxDQUMxTDtnQkFFWixnQkFBZ0IsS0FBSyxxREFBZ0IsQ0FBQyxXQUFXLElBQUksK0NBQUMsMkVBQVUsSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDakksK0NBQUMsOENBQVMsa0JBQWEsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLGFBQWEsRUFBRSwyQkFBMkIsRUFBRSxTQUFTLEVBQUMsT0FBTyxHQUFHLENBQy9LO2dCQUVaLGdCQUFnQixLQUFLLHFEQUFnQixDQUFDLFdBQVcsSUFBSSwrQ0FBQywyRUFBVTtvQkFDL0Qsd0RBQUssU0FBUyxFQUFDLDBDQUEwQyxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsZ0JBQWMsR0FBRyxDQUFDLFlBQVksQ0FBQzt3QkFDdEgsK0NBQUMsNkNBQVEsSUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxTQUFTLEVBQUMsTUFBTSxHQUFFO3dCQUN4Rix5REFBTSxTQUFTLEVBQUMsa0NBQWtDLElBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFRLENBQ3pFLENBQ0s7Z0JBRVosZ0JBQWdCLEtBQUsscURBQWdCLENBQUMsWUFBWSxJQUFJLCtDQUFDLDJFQUFVLElBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsc0JBQXNCLENBQUM7b0JBQ25JLCtDQUFDLDZFQUFZLElBQ1gsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQ3RDLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLGNBQWMsRUFBRSxjQUFjLEVBQzlCLFFBQVEsRUFBRSxFQUFFLEVBQ1osV0FBVyxFQUFFLGNBQWMsRUFBRSxFQUM3QixTQUFTLEVBQUUsb0RBQVMsQ0FBQyxDQUFDLDBFQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsR0FDL0MsQ0FDUztnQkFFWixnQkFBZ0IsS0FBSyxxREFBZ0IsQ0FBQyxXQUFXLElBQUksK0NBQUMsNERBQWtCLElBQ3ZFLEVBQUUsRUFBRSxFQUFFLEVBQ04sTUFBTSxFQUFFLE1BQU0sRUFDZCxlQUFlLEVBQUUsZUFBZSxHQUNoQyxDQUNlLENBQ1IsQ0FDZDtJQUNILENBQUM7SUFFRCxPQUFPLENBQ0wsK0NBQUMsK0VBQWMsSUFBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUs7UUFDM0QsK0NBQUMscUZBQW9CLElBQ25CLEVBQUUsRUFBRSxFQUFFLEVBQ04sSUFBSSxFQUFFLElBQUksRUFDVixlQUFlLEVBQUUsWUFBWSxHQUM3QjtRQUNELDZCQUE2QixFQUFFO1FBQy9CLHlCQUF5QixFQUFFLENBQ2IsQ0FDbEI7QUFDSCxDQUFDO0FBRUQsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hNNUIsaUVBQWU7SUFDYixZQUFZLEVBQUUsZUFBZTtJQUM3QixnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsZ0JBQWdCLEVBQUUsd0JBQXdCO0lBQzFDLFdBQVcsRUFBRSxjQUFjO0lBQzNCLFlBQVksRUFBRSxlQUFlO0lBQzdCLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsb0JBQW9CLEVBQUUsd0NBQXdDO0lBQzlELGVBQWUsRUFBRSxtREFBbUQ7SUFDcEUsYUFBYSxFQUFFLHdCQUF3QjtJQUN2QyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLHNCQUFzQixFQUFFLGdEQUFnRDtJQUN4RSxlQUFlLEVBQUUsa0NBQWtDO0lBQ25ELGNBQWMsRUFBRSxvQ0FBb0M7SUFDcEQsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixZQUFZLEVBQUUsWUFBWTtJQUMxQixhQUFhLEVBQUUsYUFBYTtJQUM1QixhQUFhLEVBQUUsU0FBUztJQUN4QixhQUFhLEVBQUUsU0FBUztJQUN4QixxQkFBcUIsRUFBRSwyQkFBMkI7SUFDbEQsV0FBVyxFQUFFLFFBQVE7SUFDckIsVUFBVSxFQUFFLE9BQU87SUFDbkIsV0FBVyxFQUFFLFFBQVE7SUFDckIsK0JBQStCLEVBQUUsZUFBZTtDQUNqRDs7Ozs7Ozs7Ozs7QUN4QkQsaUNBQWlDOzs7Ozs7Ozs7O0FDQWpDLGlDQUFpQzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUM7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDOzs7Ozs7Ozs7OztBQ0FqQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQUMrRDtBQUNHO0FBQzZCO0FBQzFDO0FBQ0c7QUFDWDtBQUNPO0FBUW5FLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFO0lBQ3RDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLEdBQUcsS0FBSztJQUV4RSxNQUFNLElBQUksR0FBRyw4Q0FBRzs7OztHQUlmO0lBRUQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLGVBQXlCLEVBQUUsRUFBRTtRQUN4RCxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLGVBQWUsRUFBRSxlQUFlO1NBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLGdCQUFrRCxFQUFFLGNBQWMsRUFBRSxFQUFFO1FBQ2pHLElBQUksQ0FBQyxnQkFBZ0I7WUFBRSxPQUFPLEtBQUs7UUFDbkMsTUFBTSxlQUFlLEdBQUcsb0VBQWtCLEVBQUU7UUFDNUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsZ0JBQWdCLENBQUM7UUFDdkUsSUFBSSxhQUFhLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtRQUM3QyxJQUFJLGVBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxxQkFBcUIsTUFBSSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsY0FBYyxHQUFFLENBQUM7WUFDNUUsYUFBYSxtQ0FDUixhQUFhLEdBQ2IsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLGNBQWMsQ0FDbEM7UUFDSCxDQUFDO1FBQ0QsZUFBZSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUU7SUFDbEQsQ0FBQztJQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsZ0JBQWtDLEVBQUUsZ0JBQWtELEVBQUUsY0FBYyxFQUFFLEVBQUU7UUFDaEksSUFBSSxDQUFDLGdCQUFnQjtZQUFFLE9BQU8sS0FBSztRQUNuQyxNQUFNLFNBQVMsR0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztRQUN2RSxJQUFJLGFBQWEsR0FBRztZQUNsQixFQUFFO1lBQ0YsTUFBTSxFQUFFLFNBQVM7WUFDakIsWUFBWSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUM7U0FDekM7UUFDRCxJQUFJLGVBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxxQkFBcUIsTUFBSSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsY0FBYyxHQUFFLENBQUM7WUFDNUUsYUFBYSxtQ0FDUixhQUFhLEdBQ2IsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLGNBQWMsQ0FDbEM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxlQUFlLEdBQUcsb0VBQWtCLEVBQUU7UUFDNUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLEVBQUU7SUFDcEUsQ0FBQztJQUVELE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBZ0IsRUFBRSxFQUFFOztRQUMzQyxNQUFNLFlBQVksR0FBRyxFQUFFO1FBQ3ZCLFlBQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxnQkFBZ0IsMENBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzdDLElBQUksV0FBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLGlCQUFpQixNQUFLLHNEQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2RSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxVQUFVLENBQUM7WUFDM0MsQ0FBQztRQUNILENBQUMsQ0FBQztRQUNGLE9BQU8sWUFBWTtJQUNyQixDQUFDO0lBRUQsTUFBTSwyQkFBMkIsR0FBRyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3JELGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUMzRSxDQUFDO0lBRUQsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBQywwQ0FBMEMsRUFBQyxHQUFHLEVBQUUsSUFBSTtRQUNqRSwrQ0FBQywrRUFBYyxJQUFDLEtBQUssRUFBQyxNQUFNO1lBQzFCLCtDQUFDLGtGQUFpQixJQUNoQixlQUFlLEVBQ2IsS0FBSyxDQUFDLGVBQWUsRUFFdkIsUUFBUSxFQUFFLG1CQUFtQixHQUM3QixDQUNhO1FBQ2pCLCtDQUFDLGtGQUFpQixJQUNoQixFQUFFLEVBQUUsRUFBRSxFQUNOLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLGNBQWMsRUFBRSxjQUFjLEVBQzlCLGNBQWMsRUFBRSxJQUFJLEVBQ3BCLGVBQWUsRUFBRSxtQkFBbUIsRUFDcEMsdUJBQXVCLEVBQUUsY0FBYyxFQUN2QyxnQkFBZ0IsRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsZ0JBQWdCLEVBQzFDLHFCQUFxQixFQUFFLCtFQUFjLENBQUMsSUFBSSxFQUMxQyxlQUFlLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWUsRUFDeEMsdUJBQXVCLEVBQUUsMkJBQTJCLEdBQ3BEO1FBQ0YsK0NBQUMsd0VBQW1CLElBQ2xCLEVBQUUsRUFBRSxFQUFFLEVBQ04sTUFBTSxFQUFFLE1BQU0sRUFDZCxlQUFlLEVBQUUsZUFBZSxFQUNoQyxjQUFjLEVBQUUsY0FBYyxHQUM5QixDQUNFLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsT0FBTztBQUVkLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcm91dGUtZWRpdGlvbi9zcmMvc2V0dGluZy9jb21wb25lbnQvc2VhcmNoLXJlc3VsdC1zdHlsZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3NldHRpbmcvY29tcG9uZW50L3NlYXJjaC1zZXR0aW5nLW9wdGlvbi50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3NldHRpbmcvYXNzZXRzL3N0eWxlMS5wbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3NldHRpbmcvYXNzZXRzL3N0eWxlMi5wbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3NldHRpbmcvYXNzZXRzL3N0eWxlMy5wbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JvdXRlLWVkaXRpb24vc3JjL3NldHRpbmcvYXNzZXRzL3N0eWxlNC5wbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtZm9yLWJ1aWxkZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9yb3V0ZS1lZGl0aW9uL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBTcWxSZXN1bHQsIHR5cGUgRmllbGRTY2hlbWEsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIERhdGFSZWNvcmQsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgU3FsRXhwcmVzc2lvbiwgdHlwZSBEYXRhU291cmNlU3RhdHVzLCB0eXBlIFVzZVV0aWxpdHkgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU2VhcmNoU3VnZ2VzdGlvbkNvbmZpZywgdHlwZSBTZWFyY2hHZW9jb2RlRGF0YUNvbmZpZywgdHlwZSBTZWFyY2hMYXllckRhdGFDb25maWcsIHR5cGUgU2VhcmNoRGF0YUNvbmZpZywgdHlwZSBJTUxpbmtQYXJhbSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5leHBvcnQgeyB0eXBlIFNlYXJjaEdlb2NvZGVEYXRhQ29uZmlnLCB0eXBlIFNlYXJjaExheWVyRGF0YUNvbmZpZywgdHlwZSBJTVNlYXJjaEdlb2NvZGVEYXRhQ29uZmlnLCB0eXBlIFNlYXJjaERhdGFDb25maWcsIHR5cGUgSU1TZWFyY2hEYXRhQ29uZmlnIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmV4cG9ydCB7IHR5cGUgSVNwYXRpYWxSZWZlcmVuY2UgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLXNlcnZpY2UnXHJcbmV4cG9ydCBjb25zdCBSRUNFTlRfU0VBUkNIRVNfS0VZID0gJ3JlY2VudF9zZWFyY2hlcydcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX1JFU1VMVCA9IDZcclxuZXhwb3J0IGNvbnN0IE1BWF9SRVNVTFQgPSAyMFxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9QT1BQRVJfT0ZGU0VUID0gWzAsIDNdXHJcblxyXG5leHBvcnQgY29uc3QgTUFYX1NVR0dFU1RJT04gPSA2XHJcbmV4cG9ydCBjb25zdCBNQVhfUkVDRU5UX1NFQVJDSEVTID0gNlxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TUEFUSUFMX1JFRkVSRU5DRSA9IHtcclxuICB3a2lkOiA0MzI2XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNlYXJjaFNlcnZpY2VUeXBlIHtcclxuICBHZW9jb2RlU2VydmljZSA9ICdHZW9jb2RlU2VydmljZScsXHJcbiAgRmVhdHVyZVNlcnZpY2UgPSAnRmVhdHVyZVNlcnZpY2UnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFJlc3VsdFNlcnZpY2VMaXN0T3B0aW9uIHtcclxuICBjb25maWdJZD86IHN0cmluZ1xyXG4gIG1hZ2ljS2V5Pzogc3RyaW5nXHJcbiAgaXNGcm9tU3VnZ2VzdGlvbj86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2VhcmNoUmVzdWx0VmlldyB7XHJcbiAgUmVzdWx0UGFuZWwgPSAnUmVzdWx0X1BhbmVsJyxcclxuICBPdGhlcldpZGdldHMgPSAnT3RoZXJfV2lkZ2V0cydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXJyYW5nZW1lbnRTdHlsZSB7XHJcbiAgU3R5bGUxID0gJ1N0eWxlMScsXHJcbiAgU3R5bGUyID0gJ1N0eWxlMicsXHJcbiAgU3R5bGUzID0gJ1N0eWxlMydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2VhcmNoUmVzdWx0U3R5bGUge1xyXG4gIENsYXNzaWMgPSAnQ2xhc3NpYycsXHJcbiAgQ29tcGFjdCA9ICdDb21wYWN0J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFbnRpdHlTdGF0dXNUeXBlIHtcclxuICBOb25lID0gJycsXHJcbiAgSW5pdCA9ICdpbml0JyxcclxuICBMb2FkaW5nID0gJ2xvYWRpbmcnLFxyXG4gIExvYWRlZCA9ICdsb2FkZWQnLFxyXG4gIFdhcm5pbmcgPSAnd2FybmluZycsXHJcbiAgRXJyb3IgPSAnZXJyb3InLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFN0YXR1cyB7XHJcbiAgc2VydmljZUVuYWJsZWRMaXN0Pzogc3RyaW5nW11cclxuICBzZWFyY2hUZXh0Pzogc3RyaW5nXHJcbiAgc3RhdHVzPzogSW5pdFJlc3VsdFNlcnZpY2VMaXN0T3B0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoRmllbGREYXRhIHtcclxuICBba2V5OiBzdHJpbmddOiB7XHJcbiAgICBzZWFyY2hGaWVsZHM6IEZpZWxkU2NoZW1hW11cclxuICAgIGRpc3BsYXlGaWVsZHM6IEZpZWxkU2NoZW1hW11cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YXNvdXJjZUNyZWF0ZWRTdGF0dXMge1xyXG4gIFtrZXk6IHN0cmluZ106IERhdGFTb3VyY2VTdGF0dXNcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1EYXRhc291cmNlQ3JlYXRlZFN0YXR1cyA9IEltbXV0YWJsZU9iamVjdDxEYXRhc291cmNlQ3JlYXRlZFN0YXR1cz5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmV3TGF5ZXJDb25maWdJdGVtU2V0dGluZyBleHRlbmRzIFNlYXJjaExheWVyRGF0YUNvbmZpZyB7XHJcbiAgZW5hYmxlOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmV3R2VvY29kZUl0ZW1TZXR0aW5nIGV4dGVuZHMgU2VhcmNoR2VvY29kZURhdGFDb25maWcge1xyXG4gIGVuYWJsZTogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5ld0RhdGFzb3VyY2VDb25maWdJdGVtIGV4dGVuZHMgU2VhcmNoRGF0YUNvbmZpZyB7XHJcbiAgZW5hYmxlOiBib29sZWFuXHJcbiAgZ2VvY29kZVVSTD86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTU5ld0xheWVyQ29uZmlnSXRlbVNldHRpbmcgPSBJbW11dGFibGVPYmplY3Q8TmV3TGF5ZXJDb25maWdJdGVtU2V0dGluZz5cclxuXHJcbmV4cG9ydCB0eXBlIElNTmV3R2VvY29kZUl0ZW1TZXR0aW5nID0gSW1tdXRhYmxlT2JqZWN0PE5ld0dlb2NvZGVJdGVtU2V0dGluZz5cclxuXHJcbmV4cG9ydCB0eXBlIElNTmV3RGF0YXNvdXJjZUNvbmZpZ0l0ZW0gPSBJbW11dGFibGVPYmplY3Q8TmV3RGF0YXNvdXJjZUNvbmZpZ0l0ZW0+XHJcblxyXG5leHBvcnQgdHlwZSBJTVNlYXJjaEZpZWxkRGF0YSA9IEltbXV0YWJsZU9iamVjdDxTZWFyY2hGaWVsZERhdGE+XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29yZFJlc3VsdFR5cGUge1xyXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXVxyXG4gIGNvbmZpZ0lkOiBzdHJpbmdcclxuICBkc0lkOiBzdHJpbmdcclxuICBsb2NhbERzSWQ/OiBzdHJpbmdcclxuICBpc0dlb2NvZGVSZWNvcmRzOiBib29sZWFuXHJcbiAgZGlzcGxheUZpZWxkcz86IEZpZWxkU2NoZW1hW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hSZXN1bHQge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNUmVjb3JkUmVzdWx0VHlwZSA9IEltbXV0YWJsZU9iamVjdDxSZWNvcmRSZXN1bHRUeXBlPlxyXG5leHBvcnQgdHlwZSBJTVNlYXJjaFJlc3VsdCA9IEltbXV0YWJsZU9iamVjdDxTZWFyY2hSZXN1bHQ+XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbkxpc3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IEltbXV0YWJsZUFycmF5PHN0cmluZz5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1TZWxlY3Rpb25MaXN0ID0gSW1tdXRhYmxlT2JqZWN0PFNlbGVjdGlvbkxpc3Q+XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb25JdGVtIHtcclxuICBzdWdnZXN0aW9uSHRtbDogc3RyaW5nIHwgRWxlbWVudFxyXG4gIHN1Z2dlc3Rpb246IHN0cmluZ1xyXG4gIGlzUmVjZW50U2VhcmNoZT86IGJvb2xlYW5cclxuICBjb25maWdJZD86IHN0cmluZ1xyXG4gIGlzRnJvbVN1Z2dlc3Rpb24/OiBib29sZWFuXHJcbiAgbWFnaWNLZXk/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcclxuICBzdWdnZXN0aW9uSXRlbTogU3VnZ2VzdGlvbkl0ZW1bXVxyXG4gIGxheWVyOiBzdHJpbmdcclxuICBpY29uPzogYW55XHJcbiAgZXJyPzogYW55XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNU3VnZ2VzdGlvbiA9IEltbXV0YWJsZU9iamVjdDxTdWdnZXN0aW9uPlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhc291cmNlTGlzdCB7XHJcbiAgW2tleTogc3RyaW5nXTogRGF0YXNvdXJjZUxpc3RJdGVtXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZUxpc3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IEdlb2NvZGVMaXN0SXRlbVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZXJ2aWNlTGlzdCA9IERhdGFzb3VyY2VMaXN0ICYgR2VvY29kZUxpc3RcclxuXHJcbmV4cG9ydCB0eXBlIFNlcnZpY2VMaXN0SXRlbSA9IERhdGFzb3VyY2VMaXN0SXRlbSAmIEdlb2NvZGVMaXN0SXRlbVxyXG5cclxuZXhwb3J0IHR5cGUgSU1TZXJ2aWNlTGlzdEl0ZW0gPSBJbW11dGFibGVPYmplY3Q8U2VydmljZUxpc3RJdGVtPlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhc291cmNlU1FMTGlzdEl0ZW0ge1xyXG4gIHNxbEV4cHJlc3Npb246IFNxbEV4cHJlc3Npb25bXVxyXG4gIG91dEZpZWxkczogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhc291cmNlU1FMTGlzdCB7XHJcbiAgW2tleTogc3RyaW5nXTogRGF0YXNvdXJjZVNRTExpc3RJdGVtXHJcbn1cclxuZXhwb3J0IHR5cGUgSU1EYXRhc291cmNlU1FMTGlzdCA9IEltbXV0YWJsZU9iamVjdDxEYXRhc291cmNlU1FMTGlzdD5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YXNvdXJjZUxpc3RJdGVtIHtcclxuICBzZWFyY2hTZXJ2aWNlVHlwZTogU2VhcmNoU2VydmljZVR5cGVcclxuICBtYXhTdWdnZXN0aW9uczogbnVtYmVyXHJcbiAgcmVzdWx0TWF4TnVtYmVyOiBudW1iZXJcclxuICB1c2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXHJcbiAgZGlzcGxheUZpZWxkcz86IEZpZWxkU2NoZW1hW11cclxuICBzZWFyY2hGaWVsZHM/OiBGaWVsZFNjaGVtYVtdXHJcbiAgU1FMPzogU3FsUmVzdWx0XHJcbiAgU3VnZ2VzdGlvblNRTD86IFNxbFJlc3VsdFxyXG4gIHNlYXJjaEV4YWN0PzogYm9vbGVhblxyXG4gIGhpbnQ/OiBzdHJpbmdcclxuICBpc0Zyb21TdWdnZXN0aW9uPzogYm9vbGVhblxyXG4gIGNvbmZpZ0lkOiBzdHJpbmdcclxuICBzZWFyY2hUZXh0Pzogc3RyaW5nXHJcbiAgdXNlVXRpbGl0eT86IFVzZVV0aWxpdHlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZW9jb2RlTGlzdEl0ZW0ge1xyXG4gIHNlYXJjaFNlcnZpY2VUeXBlOiBTZWFyY2hTZXJ2aWNlVHlwZVxyXG4gIG1heFN1Z2dlc3Rpb25zOiBudW1iZXJcclxuICByZXN1bHRNYXhOdW1iZXI6IG51bWJlclxyXG4gIGxhYmVsOiBzdHJpbmdcclxuICBnZW9jb2RlVVJMOiBzdHJpbmdcclxuICBvdXRwdXREYXRhU291cmNlSWQ6IHN0cmluZ1xyXG4gIGhpbnQ/OiBzdHJpbmdcclxuICBpY29uPzogYW55XHJcbiAgbWFnaWNLZXk/OiBzdHJpbmdcclxuICBjb25maWdJZDogc3RyaW5nXHJcbiAgc2luZ2xlTGluZUZpZWxkTmFtZT86IHN0cmluZ1xyXG4gIGRpc3BsYXlGaWVsZHM/OiBGaWVsZFNjaGVtYVtdXHJcbiAgZGVmYXVsdEFkZHJlc3NGaWVsZE5hbWU/OiBzdHJpbmdcclxuICBhZGRyZXNzRmllbGRzPzogRmllbGRTY2hlbWFbXVxyXG4gIGlzU3VwcG9ydFN1Z2dlc3Q/OiBib29sZWFuXHJcbiAgc2VhcmNoVGV4dD86IHN0cmluZ1xyXG4gIHVzZVV0aWxpdHk/OiBVc2VVdGlsaXR5XHJcbiAgc3BhdGlhbFJlZmVyZW5jZT86IHsgd2tpZDogbnVtYmVyLCBsYXRlc3RXa2lkPzogbnVtYmVyIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1EYXRhc291cmNlTGlzdCA9IEltbXV0YWJsZU9iamVjdDxEYXRhc291cmNlTGlzdD5cclxuZXhwb3J0IHR5cGUgSU1HZW9jb2RlTGlzdCA9IEltbXV0YWJsZU9iamVjdDxHZW9jb2RlTGlzdD5cclxuZXhwb3J0IHR5cGUgSU1TZXJ2aWNlTGlzdCA9IEltbXV0YWJsZU9iamVjdDxTZXJ2aWNlTGlzdD5cclxuZXhwb3J0IHR5cGUgSU1EYXRhc291cmNlTGlzdEl0ZW0gPSBJbW11dGFibGVPYmplY3Q8RGF0YXNvdXJjZUxpc3RJdGVtPlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb25maWcgZXh0ZW5kcyBTZWFyY2hTdWdnZXN0aW9uQ29uZmlnIHtcclxuICBkYXRhc291cmNlQ29uZmlnOiBTZWFyY2hEYXRhQ29uZmlnW11cclxuICBoaW50OiBzdHJpbmdcclxuICBzZWFyY2hSZXN1bHRWaWV3OiBTZWFyY2hSZXN1bHRWaWV3XHJcbiAgYXJyYW5nZW1lbnRTdHlsZTogQXJyYW5nZW1lbnRTdHlsZVxyXG4gIHNlYXJjaFJlc3VsdFN0eWxlOiBTZWFyY2hSZXN1bHRTdHlsZVxyXG4gIHJlc3VsdE1heE51bWJlcjogbnVtYmVyXHJcbiAgaXNBdXRvU2VsZWN0Rmlyc3RSZXN1bHQ6IGJvb2xlYW5cclxuICAvLyBsaW5rXHJcbiAgbGlua1BhcmFtPzogSU1MaW5rUGFyYW1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Y29uZmlnPlxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGNzcywganN4LCBwb2xpc2hlZCwgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVDb3JlRGVmYXVsdE1lc3NhZ2UsIGhvb2tzLCBSZWFjdFJlZHV4LCB0eXBlIElNU3RhdGUgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU2V0dGluZ0NoYW5nZUZ1bmN0aW9uIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHsgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnLCBTZWFyY2hSZXN1bHRTdHlsZSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IHsgSWNvbiwgQnV0dG9uLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdWlEZWZhdWx0TWVzc2FnZSB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZSBmcm9tICcuLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmludGVyZmFjZSBTZWFyY2hSZXN1bHRTdHlsZVByb3BzIHtcclxuICBpZDogc3RyaW5nXHJcbiAgb25TZXR0aW5nQ2hhbmdlOiBTZXR0aW5nQ2hhbmdlRnVuY3Rpb25cclxuICBjb25maWc6IElNQ29uZmlnXHJcbn1cclxuXHJcbmNvbnN0IFNlYXJjaFN0eWxlU2V0dGluZyA9IChwcm9wczogU2VhcmNoUmVzdWx0U3R5bGVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNUWUxFID0gY3NzYFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIC5zdHlsZS1pbWcge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3R5bGUtaW1nIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVmLXBhbGV0dGUtbmV1dHJhbC0yMDApO1xyXG4gICAgfVxyXG4gICAgJj5kaXYge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgJiBidXR0b24sICYgYnV0dG9uOmhvdmVyLCAmIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWYtcGFsZXR0ZS1uZXV0cmFsLTIwMCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICYgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6ICR7cG9saXNoZWQucmVtKDEwOCl9O1xyXG4gICAgICBoZWlnaHQ6ICR7cG9saXNoZWQucmVtKDc4KX07XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6ICR7cG9saXNoZWQucmVtKDEzKX07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAke3BvbGlzaGVkLnJlbSgxOCl9O1xyXG4gICAgICBtYXJnaW4tdG9wOiAke3BvbGlzaGVkLnJlbSg2KX07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1yZWYtcGFsZXR0ZS1uZXV0cmFsLTEwMDApO1xyXG4gICAgfVxyXG4gIGBcclxuXHJcbiAgY29uc3QgaXNSVEwgPSBSZWFjdFJlZHV4LnVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmFwcENvbnRleHQuaXNSVExcclxuICB9KVxyXG5cclxuICBjb25zdCBubHMgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZSwgamltdWlEZWZhdWx0TWVzc2FnZSwgamltdUNvcmVEZWZhdWx0TWVzc2FnZSlcclxuICBjb25zdCB7IGNvbmZpZywgaWQsIG9uU2V0dGluZ0NoYW5nZSB9ID0gcHJvcHNcclxuICBjb25zdCB7IHNlYXJjaFJlc3VsdFN0eWxlIH0gPSBjb25maWdcclxuXHJcbiAgY29uc3Qgb25TdHlsZUNoYW5nZSA9IChzdHlsZTogU2VhcmNoUmVzdWx0U3R5bGUpID0+IHtcclxuICAgIG9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBpZCxcclxuICAgICAgY29uZmlnOiBjb25maWcuc2V0KCdzZWFyY2hSZXN1bHRTdHlsZScsIHN0eWxlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJyBsYWJlbD17bmxzKCdzdHlsZScpfSByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17bmxzKCdzdHlsZScpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCcgY3NzPXtTVFlMRX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT0ndGVydGlhcnknXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c2VhcmNoUmVzdWx0U3R5bGUgPT09IFNlYXJjaFJlc3VsdFN0eWxlLkNsYXNzaWMgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICB0aXRsZT17bmxzKCdzZWFyY2hDbGFzc2ljJyl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgb25TdHlsZUNoYW5nZShTZWFyY2hSZXN1bHRTdHlsZS5DbGFzc2ljKSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3N0eWxlLWltZyB3LTEwMCBoLTEwMCcgaWNvbj17cmVxdWlyZShpc1JUTCA/ICcuLi9hc3NldHMvc3R5bGUzLnBuZycgOiAnLi4vYXNzZXRzL3N0eWxlMS5wbmcnKX0vPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgdGV4dC1jZW50ZXInPntubHMoJ3NlYXJjaENsYXNzaWMnKX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWFyY2hSZXN1bHRTdHlsZSA9PT0gU2VhcmNoUmVzdWx0U3R5bGUuQ29tcGFjdCA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgIHRpdGxlPXtubHMoJ3NlYXJjaENvbXBhY3QnKX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBvblN0eWxlQ2hhbmdlKFNlYXJjaFJlc3VsdFN0eWxlLkNvbXBhY3QpIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nc3R5bGUtaW1nIHctMTAwIGgtMTAwJyBpY29uPXtyZXF1aXJlKGlzUlRMID8gJy4uL2Fzc2V0cy9zdHlsZTQucG5nJyA6ICcuLi9hc3NldHMvc3R5bGUyLnBuZycpfS8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSB0ZXh0LWNlbnRlcic+e25scygnc2VhcmNoQ29tcGFjdCcpfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU2V0dGluZ1Jvdz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFN0eWxlU2V0dGluZ1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGNzcywganN4LCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSW1tdXRhYmxlQXJyYXksIExpbmtUeXBlLCBJbW11dGFibGUsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11Q29yZURlZmF1bHRNZXNzYWdlLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTZXR0aW5nQ2hhbmdlRnVuY3Rpb24gfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdywgTGlua1NlbGVjdG9yLCB0eXBlIElNTGlua1BhcmFtLCBPcGVuVHlwZXMsIHR5cGUgSU1TZWFyY2hTdWdnZXN0aW9uQ29uZmlnLCB0eXBlIFNlYXJjaFN1Z2dlc3Rpb25Db25maWcsIFNlYXJjaFN1Z2dlc3Rpb25TZXR0aW5nLCBTZWFyY2hHZW5lcmFsU2V0dGluZyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnLCBTZWFyY2hSZXN1bHRWaWV3LCBNQVhfUkVTVUxULCBERUZBVUxUX01BWF9SRVNVTFQgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmltcG9ydCB7IFRleHRJbnB1dCwgQ2hlY2tib3gsIFN3aXRjaCwgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVpRGVmYXVsdE1lc3NhZ2UsIENvbGxhcHNhYmxlUGFuZWwgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2UgZnJvbSAnLi4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcclxuaW1wb3J0IFNlYXJjaFN0eWxlU2V0dGluZyBmcm9tICcuL3NlYXJjaC1yZXN1bHQtc3R5bGUnXHJcblxyXG5pbnRlcmZhY2UgU2VhcmNoT3B0aW9uc1Byb3BzIHtcclxuICBpZDogc3RyaW5nXHJcbiAgb25TZXR0aW5nQ2hhbmdlOiBTZXR0aW5nQ2hhbmdlRnVuY3Rpb25cclxuICBjb25maWc6IElNQ29uZmlnXHJcbiAgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XHJcbn1cclxuXHJcbmNvbnN0IFNlYXJjaE9wdGlvbnMgPSAocHJvcHM6IFNlYXJjaE9wdGlvbnNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IG5scyA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlLCBqaW11aURlZmF1bHRNZXNzYWdlLCBqaW11Q29yZURlZmF1bHRNZXNzYWdlKVxyXG4gIGNvbnN0IGFwcFRoZW1lID0gdXNlVGhlbWUoKVxyXG5cclxuICBjb25zdCBTVFlMRSA9IGNzc2BcclxuICAgIC5jaGVjay1ib3gtbGFiZWwge1xyXG4gICAgICBjb2xvcjogJHthcHBUaGVtZS5yZWYucGFsZXR0ZS5uZXV0cmFsWzExMDBdfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1zZXR0aW5nLWNvbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5kaXZpZGVyLWxpbmUge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5jaGVja2JveC1jb24gLmppbXUtd2lkZ2V0LXNldHRpbmctLXJvdy1sYWJlbHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmN1cnNvci1wb2ludGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIGBcclxuXHJcbiAgY29uc3QgeyBjb25maWcsIGlkLCB1c2VEYXRhU291cmNlcywgb25TZXR0aW5nQ2hhbmdlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgc2VhcmNoUmVzdWx0VmlldywgaGludCwgcmVzdWx0TWF4TnVtYmVyLCBsaW5rUGFyYW0sIGlzQXV0b1NlbGVjdEZpcnN0UmVzdWx0IH0gPSBjb25maWdcclxuXHJcbiAgY29uc3QgW29wZW5TZWFyY2hTdWdnZXN0aW9uLCBzZXRPcGVuU2VhcmNoU3VnZ2VzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb3BlblNlYXJjaFJlc3VsdCwgc2V0T3BlblNlYXJjaFJlc3VsdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW25ld1Jlc3VsdE1heE51bWJlciwgc2V0UmVzdWx0TWF4TnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKHJlc3VsdE1heE51bWJlcilcclxuICBjb25zdCBbc2V0dGluZ0NvbmZpZywgc2V0U2V0dGluZ0NvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZShJbW11dGFibGUoe30pIGFzIElNU2VhcmNoU3VnZ2VzdGlvbkNvbmZpZylcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRTZXR0aW5nQ29uZmlnKClcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIH0sIFtjb25maWddKVxyXG5cclxuICBjb25zdCBpbml0U2V0dGluZ0NvbmZpZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1NldHRpbmdDb25maWc6IFNlYXJjaFN1Z2dlc3Rpb25Db25maWcgPSB7XHJcbiAgICAgIG1heFN1Z2dlc3Rpb25zOiBjb25maWc/Lm1heFN1Z2dlc3Rpb25zLFxyXG4gICAgICBpc1VzZUN1cnJlbnRMb2F0aW9uOiBjb25maWc/LmlzVXNlQ3VycmVudExvYXRpb24sXHJcbiAgICAgIGlzU2hvd1JlY2VudFNlYXJjaGVzOiBjb25maWc/LmlzU2hvd1JlY2VudFNlYXJjaGVzLFxyXG4gICAgICByZWNlbnRTZWFyY2hlc01heE51bWJlcjogY29uZmlnPy5yZWNlbnRTZWFyY2hlc01heE51bWJlclxyXG4gICAgfVxyXG4gICAgc2V0U2V0dGluZ0NvbmZpZyhJbW11dGFibGUobmV3U2V0dGluZ0NvbmZpZykpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNvbmZpZ0NoYW5nZSA9IChrZXk6IHN0cmluZ1tdLCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBvblNldHRpbmdDaGFuZ2UoeyBpZDogaWQsIGNvbmZpZzogY29uZmlnLnNldEluKGtleSwgdmFsdWUpIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBdXRvU2VsZWN0Q2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgb25Db25maWdDaGFuZ2UoWydpc0F1dG9TZWxlY3RGaXJzdFJlc3VsdCddLCAhaXNBdXRvU2VsZWN0Rmlyc3RSZXN1bHQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSZXN1bHRNYXhOdW1iZXJBY2NlcHQgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID4gTUFYX1JFU1VMVCkge1xyXG4gICAgICB2YWx1ZSA9IHJlc3VsdE1heE51bWJlciB8fCBERUZBVUxUX01BWF9SRVNVTFRcclxuICAgICAgc2V0UmVzdWx0TWF4TnVtYmVyKHZhbHVlKVxyXG4gICAgfVxyXG4gICAgY2hlY2tOdW1iZXIodmFsdWUpICYmIG9uQ29uZmlnQ2hhbmdlKFsncmVzdWx0TWF4TnVtYmVyJ10sIE51bWJlcih2YWx1ZSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSZXN1bHRNYXhOdW1iZXJDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgY2hlY2tOdW1iZXIodmFsdWUpICYmIHNldFJlc3VsdE1heE51bWJlcih2YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrTnVtYmVyID0gKHZhbHVlKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodmFsdWU/Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWVcclxuICAgIHJldHVybiBOdW1iZXIodmFsdWUpICYmIE51bWJlcih2YWx1ZSkgPiAwXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblNldHRpbmdMaW5rQ29uZmlybSA9IChsaW5rUmVzdWx0OiBJTUxpbmtQYXJhbSkgPT4ge1xyXG4gICAgaWYgKCFsaW5rUmVzdWx0KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgb25Db25maWdDaGFuZ2UoWydsaW5rUGFyYW0nXSwgbGlua1Jlc3VsdClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUmVzdWx0Vmlld0NoYW5nZSA9IChpc1Nob3dTZWFyY2hSZXN1bHRWaWV3OiBib29sZWFuKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRWaWV3ID0gaXNTaG93U2VhcmNoUmVzdWx0VmlldyA/IFNlYXJjaFJlc3VsdFZpZXcuUmVzdWx0UGFuZWwgOiBTZWFyY2hSZXN1bHRWaWV3Lk90aGVyV2lkZ2V0c1xyXG4gICAgb25Db25maWdDaGFuZ2UoWydzZWFyY2hSZXN1bHRWaWV3J10sIHJlc3VsdFZpZXcpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRIaWRkZW5MaW5rcyA9ICgpOiBJbW11dGFibGVBcnJheTxMaW5rVHlwZT4gPT4ge1xyXG4gICAgcmV0dXJuIEltbXV0YWJsZShbTGlua1R5cGUuV2ViQWRkcmVzcywgTGlua1R5cGUuUHJpbnRQcmV2aWV3XSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uSGludENoYW5nZSA9IChoaW50OiBzdHJpbmcpID0+IHtcclxuICAgIG9uQ29uZmlnQ2hhbmdlKFsnaGludCddLCBoaW50KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWdnZXN0aW9uU2V0dGluZ0NoYW5nZSA9IChzZXR0aW5nQ29uZmlnOiBJTVNlYXJjaFN1Z2dlc3Rpb25Db25maWcpID0+IHtcclxuICAgIGlmICghc2V0dGluZ0NvbmZpZykgcmV0dXJuIGZhbHNlXHJcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcubWVyZ2Uoc2V0dGluZ0NvbmZpZylcclxuICAgIG9uU2V0dGluZ0NoYW5nZSh7IGlkOiBpZCwgY29uZmlnOiBuZXdDb25maWcgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclNlYXJjaFN1Z2dlc3Rpb25TZXR0aW5nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gY2xhc3NOYW1lPSdzZWFyY2gtc2V0dGluZy1jb24nPlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e25scygnc2VhcmNoU3VnZ2VzdGlvbicpfT5cclxuICAgICAgICAgICAgPENvbGxhcHNhYmxlUGFuZWxcclxuICAgICAgICAgICAgICBsYWJlbD17bmxzKCdzZWFyY2hTdWdnZXN0aW9uJyl9XHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuU2VhcmNoU3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICBvblJlcXVlc3RPcGVuPXsoKSA9PiB7IHNldE9wZW5TZWFyY2hTdWdnZXN0aW9uKHRydWUpIH19XHJcbiAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHsgc2V0T3BlblNlYXJjaFN1Z2dlc3Rpb24oZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgbGV2ZWw9ezF9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2VhcmNoU3VnZ2VzdGlvblNldHRpbmdcclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIHNldHRpbmdDb25maWc9e3NldHRpbmdDb25maWd9XHJcbiAgICAgICAgICAgICAgICBvblNldHRpbmdDaGFuZ2U9e29uU3VnZ2VzdGlvblNldHRpbmdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2xsYXBzYWJsZVBhbmVsPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAge29wZW5TZWFyY2hTdWdnZXN0aW9uICYmIDxTZXR0aW5nU2VjdGlvbiBjbGFzc05hbWU9J2RpdmlkZXItbGluZScvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJTZWFyY2hSZXN1bHRTZXR0aW5nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNldHRpbmdSb3cgcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e25scygnc2VhcmNoUmVzdWx0Jyl9PlxyXG4gICAgICAgIDxDb2xsYXBzYWJsZVBhbmVsXHJcbiAgICAgICAgICBsYWJlbD17bmxzKCdzZWFyY2hSZXN1bHQnKX1cclxuICAgICAgICAgIGlzT3Blbj17b3BlblNlYXJjaFJlc3VsdH1cclxuICAgICAgICAgIG9uUmVxdWVzdE9wZW49eygpID0+IHsgc2V0T3BlblNlYXJjaFJlc3VsdCh0cnVlKSB9fVxyXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHsgc2V0T3BlblNlYXJjaFJlc3VsdChmYWxzZSkgfX1cclxuICAgICAgICAgIGxldmVsPXsxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXtubHMoJ3Jlc3VsdFBhbmVsJyl9IGNsYXNzTmFtZT0nbXQtMic+XHJcbiAgICAgICAgICAgIDxTd2l0Y2ggdGl0bGU9e25scygncmVzdWx0UGFuZWwnKX0gY2hlY2tlZD17c2VhcmNoUmVzdWx0VmlldyA9PT0gU2VhcmNoUmVzdWx0Vmlldy5SZXN1bHRQYW5lbH0gb25DaGFuZ2U9eyhldnQ6IGFueSkgPT4geyBvblJlc3VsdFZpZXdDaGFuZ2Uoc2VhcmNoUmVzdWx0VmlldyA9PT0gU2VhcmNoUmVzdWx0Vmlldy5PdGhlcldpZGdldHMpIH19IC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAge3NlYXJjaFJlc3VsdFZpZXcgPT09IFNlYXJjaFJlc3VsdFZpZXcuUmVzdWx0UGFuZWwgJiYgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCcgY2xhc3NOYW1lPSdjaGVja2JveC1jb24nIGxhYmVsPXtubHMoJ21heGltdW1SZXN1bHRzJyl9PlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IGFyaWEtbGFiZWw9e25scygnbWF4aW11bVJlc3VsdHMnKX0gc2l6ZT0nc20nIHZhbHVlPXtuZXdSZXN1bHRNYXhOdW1iZXJ9IG9uQ2hhbmdlPXtoYW5kbGVSZXN1bHRNYXhOdW1iZXJDaGFuZ2V9IG9uQWNjZXB0VmFsdWU9e2hhbmRsZVJlc3VsdE1heE51bWJlckFjY2VwdH0gY2xhc3NOYW1lPSd3LTEwMCcgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz59XHJcblxyXG4gICAgICAgICAge3NlYXJjaFJlc3VsdFZpZXcgPT09IFNlYXJjaFJlc3VsdFZpZXcuUmVzdWx0UGFuZWwgJiYgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBvbkNsaWNrPXtoYW5kbGVBdXRvU2VsZWN0Q2hhbmdlfSBhcmlhLWxhYmVsPXtubHMoJ2F1dG9TZWxlY3QnKX0+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e2lzQXV0b1NlbGVjdEZpcnN0UmVzdWx0fSB0aXRsZT17bmxzKCdhdXRvU2VsZWN0Jyl9IGNsYXNzTmFtZT0nbXItMScvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2hlY2stYm94LWxhYmVsIGZsZXgtZ3Jvdy0xIG1sLTEnPntubHMoJ2F1dG9TZWxlY3QnKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93Pn1cclxuXHJcbiAgICAgICAgICB7c2VhcmNoUmVzdWx0VmlldyA9PT0gU2VhcmNoUmVzdWx0Vmlldy5PdGhlcldpZGdldHMgJiYgPFNldHRpbmdSb3cgY2xhc3NOYW1lPSdkLWJsb2NrJyBmbG93PSd3cmFwJyBsYWJlbD17bmxzKCdyZWRpcmVjdFNlYXJjaFJlc3VsdCcpfT5cclxuICAgICAgICAgICAgPExpbmtTZWxlY3RvclxyXG4gICAgICAgICAgICAgIG9uU2V0dGluZ0NvbmZpcm09e29uU2V0dGluZ0xpbmtDb25maXJtfVxyXG4gICAgICAgICAgICAgIGxpbmtQYXJhbT17bGlua1BhcmFtfVxyXG4gICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cclxuICAgICAgICAgICAgICB3aWRnZXRJZD17aWR9XHJcbiAgICAgICAgICAgICAgaGlkZGVuTGlua3M9e2dldEhpZGRlbkxpbmtzKCl9XHJcbiAgICAgICAgICAgICAgb3BlblR5cGVzPXtJbW11dGFibGUoW09wZW5UeXBlcy5DdXJyZW50V2luZG93XSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+fVxyXG5cclxuICAgICAgICAgIHtzZWFyY2hSZXN1bHRWaWV3ID09PSBTZWFyY2hSZXN1bHRWaWV3LlJlc3VsdFBhbmVsICYmIDxTZWFyY2hTdHlsZVNldHRpbmdcclxuICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICBjb25maWc9e2NvbmZpZ31cclxuICAgICAgICAgICAgb25TZXR0aW5nQ2hhbmdlPXtvblNldHRpbmdDaGFuZ2V9XHJcbiAgICAgICAgICAvPn1cclxuICAgICAgICA8L0NvbGxhcHNhYmxlUGFuZWw+XHJcbiAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e25scygnZ2VuZXJhbFNlYXJjaE9wdGlvbicpfSBjc3M9e1NUWUxFfT5cclxuICAgICAgPFNlYXJjaEdlbmVyYWxTZXR0aW5nXHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIGhpbnQ9e2hpbnR9XHJcbiAgICAgICAgb25TZXR0aW5nQ2hhbmdlPXtvbkhpbnRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtyZW5kZXJTZWFyY2hTdWdnZXN0aW9uU2V0dGluZygpfVxyXG4gICAgICB7cmVuZGVyU2VhcmNoUmVzdWx0U2V0dGluZygpfVxyXG4gICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaE9wdGlvbnNcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNlYXJjaFJlc3VsdDogJ1NlYXJjaCByZXN1bHQnLFxyXG4gIGFycmFuZ2VtZW50U3R5bGU6ICdBcnJhbmdlbWVudCBzdHlsZScsXHJcbiAgc2hvd1NlYXJjaFJlc3VsdDogJ1Nob3cgc2VhcmNoIHJlc3VsdHMgaW4nLFxyXG4gIHJlc3VsdFBhbmVsOiAnUmVzdWx0IHBhbmVsJyxcclxuICBvdGhlcldpZGdldHM6ICdPdGhlciB3aWRnZXRzJyxcclxuICBhdXRvU2VsZWN0OiAnQXV0byBzZWxlY3QgdGhlIGZpcnN0IHJlc3VsdCcsXHJcbiAgcmVkaXJlY3RTZWFyY2hSZXN1bHQ6ICdSZWRpcmVjdCBpZiBzZWFyY2ggcmVzdWx0IGlzIG5vdCBlbXB0eScsXHJcbiAgbm90U2V0Q29ycmVjdGxlOiAnVGhlIHNlYXJjaCBvciBkaXNwbGF5IGZpZWxkIGlzIG5vdCBzZXQgY29ycmVjdGx5LicsXHJcbiAgc2VsZWN0ZWRGaWVsZDogJ3tmaWVsZE51bWJlcn0gU2VsZWN0ZWQnLFxyXG4gIHNlYXJjaEV4YW1wbGU6ICdFeGFtcGxlOiB7dXJsfScsXHJcbiAgbG9jYXRvclNvdXJjZUVycm9ySGludDogJ1RoZSBVUkwgeW91IGVudGVyZWQgaXMgaW52YWxpZCBvciBpbmFjY2Vzc2libGUnLFxyXG4gIGxvY2F0b3JVcmxFcnJvcjogJ0xvY2F0b3IgVVJMIGlzIG5vdCBzZXQgY29ycmVjdGx5JyxcclxuICBtYXhpbXVtUmVzdWx0czogJ01heGltdW0gZGlzcGxheSByZXN1bHRzIHBlciBzb3VyY2UnLFxyXG4gIG91dHB1dERzTGFiZWw6ICd7bGFiZWx9IHJlc3VsdCcsXHJcbiAgc2VhcmNoQm94VGlwOiAnU2VhcmNoIGJveCcsXHJcbiAgc2VhcmNoSWNvblRpcDogJ1NlYXJjaCBpY29uJyxcclxuICBzZWFyY2hDbGFzc2ljOiAnQ2xhc3NpYycsXHJcbiAgc2VhcmNoQ29tcGFjdDogJ0NvbXBhY3QnLFxyXG4gIGFycmFuZ2VtZW50U3R5bGVJbmRleDogJ0FycmFuZ2VtZW50IHN0eWxlIHtpbmRleH0nLFxyXG4gIHN0eWxlU3F1YXJlOiAnU3F1YXJlJyxcclxuICBzdHlsZUN1cnZlOiAnQ3VydmUnLFxyXG4gIHN0eWxlTGluZWFyOiAnTGluZWFyJyxcclxuICBfdXJsX3BhcmFtc19zZWFyY2hfc3RhdHVzX2xhYmVsOiAnU2VhcmNoIHN0YXR1cydcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFOZ0FBQUNRQ0FZQUFBQnFLNlhzQUFBQUNYQklXWE1BQUJZbEFBQVdKUUZKVWlUd0FBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVM2U1VSQlZIZ0I3ZDIvVGhSZEdNRGg0eGNUTGRTWUtJMDJTbUpFQzYya3N0SWJzTEx6QnJ3Z2I4RE95aHZReWtvYi95UUd0WkFHR2lBa1FBRUpDVi9lVFNiZmZLUGlFbmpQekxEUGsyd0JESVZoZjg0NVo4K2VMUVVBQUFBQUFBQUFBQUFBQUFDQU1UaFRqdW41OCtjSEJVNnBGeTllSEt1UmZ3cVFSbUNRU0dDUTZHdzVZVy9mdmkwd3JVZVBIcFhUekIwTUVna01FZ2tNRXAzNEhBeXk3ZTN0bFcvZnZwV1ZsWld5dnI1ZXRyZTNKOSsvY3VWS3VYVHBVcG1mbnkrM2I5OHVReUF3UnVYbno1K1RoYlNJckd0alkyUHlpR3ZldjM5ZkZoY1hldzlOWUl6R3UzZnZ5dWZQbjZlNk51NXFiOTY4S1Z0YlcrWEJnd2VsTCtaZ2pNS0hEeCttanF2N2V4Rm1YOXpCR0x5bHBhVkpLRzNuenAwcjkrN2RLOWV2WHkvWHJsMmJmQytHaHg4L2Zwek16OW9pekxqdTVzMmJwVFozTUFhdkc5ZkZpeGZMMDZkUEowTy9KcTRRaXh5UEh6OHV6NTQ5bTF6VDlxZDVXemFCTVdoeDkycFdDUnRQbmp6NUphQzIrRmxjRTNlNVJyUHlXSnZBR0xSWUVXeGJXRmc0Tks1R1hCTkR5TGJWMWRWU204QVl0RmdGYkx0Ly8zNlpWc3k3MnRiVzFrcHRBbVBRWXVHaUxlWlowMnJQejBKM3FGbUR3Q0NSd0JpMDduenJLUE9vMkViVmR2WHExVktid0JpMGJoU3gvM0Jhbno1OSt0L1hzVSt4Tm9FeGFOMkZpbmpSZUpxNVZGelRYWmIzUWpOMHhHYmQ3dXRacjErL1BqU3krRmxjMHhaRHpUNDIvZ3FNUVl1NHVzY0tSRUF2WDc2YzdNNW96N05pK0JpN1BsNjlldlZMZ0gzY3ZZSzlpQXhleEJFdkduYzMrOFl1ajNoTUkzNTNibTZ1K2wzTUhZeFJlUGp3NGJIZmRoSnZYNm05WFVwZ2pFWUVGc1BGYWJaS05idnR1MnBIWm9qSXFNUmV4SGpFMEREMktjWmNxNW1IUlhpeHJCOHJqODNpU0h6ZFBVb3dJZ3MxaG9zQ1k1U2EwS2E1THZRVm1TRWlwMTVFOXJzRFR1UGNqdXozaUFtTW1kQ043SGZ2R2N0Z2lNak1hSWFMOFZyWjM5NjBlVklFeGt5WmR1NTJVZ3dSSVpIQUlKSEFJTkdKejhGTysrYzl3Vkc0ZzBFaWdVRWlnUUVBQUFBQUFBQndKR2ZLTVMwc0xCd1VPS1dXbHBhTzFZaWRISkJJWUpCSVlKQklZSkJJWUpCSVlKQklZSkJJWUpCSVlKQklZSkJJWUpDbzZ0bjA1OCtmTDNmdjNpMFhMbHdvWjg4NkZuL280b1B0dm4vL1huWjNkOHVZeEdjNkh4d2NsT1hsNWRLM2FzL3lpR3R4Y1ZGWUl4S2ZEbm41OHVYSjUyaU5KYktJS3g2TnZpT3JOa1M4ZGV1V3VFWW8vbVozN3R3cFk5Q05hMzUrdnR5NGNhUDBxVnBnYzNOemhYR3E4VGxheDlXTnE5RjNaTlVDMjkvZkw0elQwRWNlZjRxcjBXZGsxUUxiMmRrcGpOUGEybG9acXIvRjFlZ3JzbXFCZmYzNjFWMXNoT0p2OXVQSGp6SkUwOGJWNkNPeWFvSEZLbFNzUmczNWYwUCtFMkZ0Ym00T2RnWHhxSEUxYWtmbVRBNDRoRE01WU1BRUJva0VCb2tFQm9rRUJva0VCb2tFQm9rRUJva0VCb2tFQm9rRUJva0VCb2tFQm9rRUJva0VCb2tFQm9rRUJva0VCb2tFQm9tY1RjL01xWG5tZnJVN1dITTJmWngxTGk3NkZHZnV4M014bnBQWm5FM1BUS3AxNXI2ejZabFpOYzdjZHpZOU02dkdpTXJaOU15c0dxZE1PNXVlbVZUcnpIMW4wek5UYXArNVgzVlpMLzVCWDc1OEtUQXI3T1NBUkFLRFJBS0RSQUtEUkFLRFJBS0RSQUtEUkFLRFJBS0RSQUtEUkFLRFJBS0RSQUtEUkFLRFJBSURBQUFBQUFBQUFBQUFBQUFBQUdiZXZ6SzFnaUhoVTVqVEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU5nQUFBQ1FDQVlBQUFCcUs2WHNBQUFBQ1hCSVdYTUFBQllsQUFBV0pRRkpVaVR3QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBUFdTVVJCVkhnQjdkMC9MMlZwSE1EeHgyWkRnMnlDaG9hS1NySUZGUTBWbFlwR3MrM3Q5czNjZUJsVU90bUNTck5SMGJBTkZjbUVpZ1RyZHpjMmQ4N2M2OC93SE9mdytTUVR4cHlaS09hYjV6bS84OXdySlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURJb3llOVVhUFJ1RS93U1RXYnpUYzE4a3NDc2hFWVpDUXd5T2pYOU01MmRuWVMvS3lGaFlYMG1WakJJQ09CUVVidnZrV0VNbDFkWGFYVDA5UFd4MGVqbzZOcGVIZzQ5ZlgxcFk4bU1Hb3BvdHJmMzA5bloyZGRyNW1hbWtvek16TnBZR0FnZlJTQlVTdlgxOWV0UWRySnljbXoxeDRlSHJhdWk4aW1wNmZUUnhBWXRSRnhiVzV1cG91TGkxZjluZDNkM2RiSENLMXNBcU0yWXVYcUZOZlkyRmdhR2hwcTNYTmRYbDYydG8zdDkyUWh0cE9EZzROcGNuSXlsVWxnMU1MamRxOWRSRFUvUDk4YWFuUzZmbTl2cjdWeVBZcVZiSHg4dk5UaGh6RTl0UkFyVUx1SWEyVmxwV05jSVFZYzhlZnRNVVZzQndjSHFVd0NvL0tLWS9pd3ZMejg3RW9VRVJhSEc3R3lsVWxnVkY1eEZCK3IwMHRIN3hGWWU0Z1JhakhXbkFSRzVSV0RpSWZJTHhWeDlmZjNQL252NVNRd2FxZTN0L2RWMThmMHNGMzc0Q00zZ1ZFN056YzNyN3ErR0pRcElyUXBiZ21QajQvVFM4VjJzSGdQRjhPUHNnaU15aXNHMXVsQmNqZkZxV0VNUjZ4ZzBDYWVkUldmZDhXUnFlY2lpd2ZUeGVkbnM3T3pxVXdDb3hhS1lVUmNFVms4SXl1S2U2NElhM3Q3Kzd1dngrclY3Y0YwTG81S1VRc1JScHdqUERvNit2OXJFZG5XMWxicm5pck9JOGJXTDc0V0sxZW5TV0VNUjE0N0lIa3JnVkViYzNOejZmejgvSWNEdi9IN2w1eXdmenlOSDBlb3locDAyQ0pTRzdGQ3JhMnR2ZXExWGNXQnhzKzg1T1V0QkVidHhFcTJ1cnFhSmlZbXVsNFRZY1hydjliWDEzOTRIVmlaa2RraVVrc3h1bDlhV21yRkVxSEUxakUrajBIR3lNaklkMXZBeDhEYUo0cGxiUmNGUnEzRlN0VnBqRi8wVkdTeEd1WjYzdzViUkw2TWlLeTRYWXdYWU9aOFV4eUI4YVcwUnhaai84WEZ4WlNUTFNKZlRnUVc5M0JQRFVuZWl4V01MNm1NdUlMQUlDT0JRVVlDZzR6ZWZjangyWDYrRTd5RkZRd3lFaGhrSkRESXFDZVJWYVBSdUU4VjFtdzIvUi9JeUFvR0dUa3FWVkZ4NnJ2NGhpM2RkRHJFU2pWWXdTcnFwZEdJcTlvRVZtSFB4U091NmhOWXhYV0xTRnoxSUxBYUtNWWtydm93NUtpSlltRFVnOER5Ky9idzY3ZjBEb1JWUDdhSW1mWDA5UHlkS3VyKy9uNHprWlhBTXJ1OXZmMGovYmVLVmMyM2g4RCtUR1Fsc013Mk5qYit1YnU3Ky8zaDA2cXNGaEhXWC9FOXhmZVdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWdBL3pMdytoVGtiOEJBV0hBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFOZ0FBQUNRQ0FZQUFBQnFLNlhzQUFBQUNYQklXWE1BQUJZbEFBQVdKUUZKVWlUd0FBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVRDU1VSQlZIZ0I3ZDIvamcxdkdNRHh4eThTQ2tUQ05qUnNJcGFDeWxZcWJrQ2xjd011eUEzb1ZHNkFTa1hqVHlLTGdvWm1pUVNGVFRiWlg1NlRURElHNjJ6V00yZmU0L05KVHJHN3M0WHMrWnA1My9QT094RUFBQUFBQUFBQUFBQUFBQUFBdE9CQTdOUHQyN2QzQXBiVW5UdDM5dFhJZndHVUVSZ1VFaGdVT2hoTDd1SERod0h6dW5idFd2eE56bUJRU0dCUVNHQlFhQ0Zqc0sydHJYajE2bFc4Zi84K1BuNzhHRisvZnAxOS84U0pFM0hzMkxGWVhWMk44K2ZQQjdSdTlNRGV2bjA3bTNqSXlJWStmZm8wZStVeGp4OC9qdlgxZGFIUnRGRURlL1RvVVR4Ly9ueXVZL09zOXVEQmcvank1VXRjdVhJbG9FV2pqY0dlUEhreWQxekQzOHN3b1VXam5NRTJOalptb2ZRZE9uUW9MbDI2RktkUG40NVRwMDdOdnBlWGgwK2ZQcDJOei9veXpEenU3Tm16QVMwWjVRdzJqT3ZvMGFOeDgrYk4yYVZmRjFmS1NZN3IxNi9IclZ1M1pzZjAvVzdjQmxOV0hsaWV2YnBad3M2Tkd6ZCtDcWd2ZjViSDVGbXUwODA4UWt2S0E4c1p3YjYxdGJWZDQrcmtNWGtKMmZmaHc0ZUFscFFIbHJPQWZaY3ZYNDU1NWJpcmIzTnpNNkFsNVlIbHhFVmZqclBtMVIrZnBlR2xKa3lkcFZKUXFEeXc0WGhyTCtPb1hFYlZkL0xreVlDV2xBYzJqQ0xYSDg3cjJiTm5QM3lkNnhTaEplV0JEU2NxOGtQamVjWlNlY3h3V3Q0SHpiU21QTEJjckR2OFBPdisvZnU3UnBZL3kyUDY4bExUd2w5YVV4NVl4alc4RFRzRHVudjM3bXgxUm4rY2xaZVB1ZXJqM3IxN1B3WG83RVdMUmxtTG1ISGtoOGJEeGI2NXlpTmY4OGpmWFZsWmNSYWpLYU5OMDErOWVuWGZ0NTNrN1N1V1M5R1NVVDhIeThEeWNuR2VwVkxkYXZzaGtkR1MwZTlvenJXSStjcEx3MXlubUdPdGJoeVc0ZVcwZnM0OGRwTWorZlZ3NjdXTUxMbGNaT29XdGk5aUY5bzh4eVdSMGFJbWxrcGxaTC9hRURMMzdYQ1BHRlBXekZyRVlXUy91bWNNcHFhcHJiTzd5OFg4ck94UE4yM0NGRFMzTi8yOFl6ZVlBcmVyUUNHQlFTR0JRYUdsZno3WTMzN2VFK3lGTXhnVUVoZ1VFaGdBQUFBQUFBQUFlM0lnOW1sdGJXMG5ZRWx0Ykd6c3F4RXJPYUNRd0tDUXdLQ1F3S0NRd0tDUXdLQ1F3S0NRd0tDUXdLQ1F3S0NRd0tEUXBQWkZ6R2M1Nyt6c3hMdDM3NklsaHc4Zmpvc1hMOGFSSTBmaTRNR2wzMnF5ZWZuQXg5ZXZYOGYzNzkrajJtVGVEUmxYdmpxdFJKWnhyYSt2QzZzaCtkVFU0OGVQejU0dlZ4M1pKQzRSaDNHdHJxN0dtVE5ub2dYbnpwMFRWNFB5YjNiaHdvV290dkRBaG5GMVdvbHNaV1VsYU5NWXo1ZGJhR0MvaTZ2VFFtVGIyOXRCbThhNDhsaFlZSCtLcXpQMXlMNTkreGEwYVhOek02b3RKTEI1NCtwTU9iS1hMMTg2aXpVby8yWnYzcnlKYXFNSHR0ZTRPbE9OTEdlaGNqWnFqUDhOMmI4TTYvUG56NlBNSUNaN2NzQXU3TWtCRXlZd0tDUXdLQ1F3S0NRd0tDUXdLQ1F3S0NRd0tDUXdLQ1F3S0NRd0tDUXdLQ1F3S0NRd0tDUXdLQ1F3S0NRd0tDUXdLQ1F3S0RUcWxyVDJjR2NLeHR5YmZyUXpXTGVIZSs0SkxpNFdLZmVtei9kaXZpZXJqUmFZUGR5WmtxWGJtOTRlN2t6TlV1MU5iL2RicG1hcDlxYTNoenRUczFSNzA5dkRuU2xadXIzcDdlSE9GSXk5Ti8ybzAzcjVEM3J4NGtYQXY4SktEaWdrTUNna01DZ2tNQ2drTUNna01DZ2tNQ2drTUNna01DZ2tNQ2drTUNna01DZ2tNQ2drTUNna01BQUFBQUFBQUFBQUFBQUFBQURnbi9jL1RKS0NJUzNZTGNzQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU5nQUFBQ1FDQVlBQUFCcUs2WHNBQUFBQ1hCSVdYTUFBQllsQUFBV0pRRkpVaVR3QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBUGVTVVJCVkhnQjdkMC9MMlZwSE1EeHgyWkRnMnlDaG9hS1NySUZGUTBWbFlwR3M2MXUzNHg0R1ZRNjJZSktzMUhSc0EwVnlZU0tCT3QzTnpaM3p0enJ6L0JjNTduNWZKSUpZODVNRlBQTjg1emYrU01sQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBTWlqSjMzUXhzYkdZNEl1dGJtNSthRkdma2xBTmdLRGpBUUdHZjJhdXN6ZTNsNkNuN1d3c0pBK2t4VU1NaElZWlBSbFc4U2JtNXQwZm43ZStQaHNkSFEwRFE4UHA3Nit2Z1Rkb09PQlJWU0hoNGZwNHVLaTdURlRVMU5wWm1ZbURRd01KQ2haeHdLN3ZiMXREQ0RPenM1ZVBmYjQrTGh4WEVRMlBUMmRvRlFkQ1N6aTJ0N2VUbGRYVisvNk8vdjcrNDJQRVJxVXFDT0J4Y3JWS3E2eHNiRTBORFRVT09lNnZyNXViQnViejhsQ2JDY0hCd2ZUNU9Sa2d0SmtEK3g1dTljc29wcWZuMjhNTlZvZGYzQncwRmk1bnNWS05qNCtidmhCY2JLUDZXTUZhaFp4cmF5c3RJd3J4SUFqL3J3NXBvanQ2T2dvUVdteUJsWWR3NGZsNWVWWFY2S0lzRHJjaUpVTlNwTTFzT29vUGxhbnQ0N2VJN0RtRUNQVWFxeFFkMWtEcXdZUkY1SGZLdUxxNys5LzhkK0R1dXZvclZLOXZiM3ZPajZtaDgyYUJ4OVFnbzRHZG5kMzk2N2pxMEdaSWxLYXJJRlZ0NFNucDZmcHJXSTdXRDJIaStFSGxLU2pnYlc2a054T2RXb1l3eEVyR0tYSkdsaGM2NnBlNzRwYnBsNkxMQzVNVjYrZnpjN09KaWhOOW5Pd2FoZ1JWMFFXMThpcTRwd3J3dHJkM2YzdTY3RjZ0YnN3RFhXVy9WYXBDQ1B1SXp3NU9mbi9heEhaenM1TzQ1d3E3a2VNclY5OExWYXVWcFBDR0k2OGQwQUNkZENSbTMzbjV1YlM1ZVhsRHpmOHh1L2Zjb2Y5ODkzNGNRdVZRUWNsNmNpWVBsYW90YlcxZHozYlZSMW8vTXdqTC9EVk9ub2RMRmF5MWRYVk5ERXgwZmFZQ0N1ZS8xcGZYLy9oT1RDUlVacU92eklnUnZkTFMwdU5XQ0tVMkRyRzV6SElHQmtaK1c0TCtCeFk4MFRSZHBHU2ZObExiMktsYWpYR3Izb3BzbGdOdmJlRE9pdml0VzBSV1hXN0dBOWdpb3U2SythOWlNMlJ4ZGgvY1hFeFFkMFY5ZXJzQ0N6TzRWNGFra0NkRlBkbVgzRlJFcS9PaG93RUJoa0pERExxdXA4UDl0ay8zd2srd2dvR0dRa01NaElZWk5TVHlHcGpZK014MWRqbTVxYi9BeGxad1NDanJwc2lkb3Q0ZXFENjRwOTJXdDBNVFQxWXdXcnFyZEdJcTk0RVZtT3Z4U091K2hOWXpiV0xTRnhsRUZnQnFqR0pxeHlHSElXb0JrWVpCSmJmdDZkZnY2VlBJS3p5MkNKbTF0UFQ4M2VxcWNmSHgrMUVWZ0xMN1A3Ky9vLzAzeXBXTjkrZUF2c3prWlhBTXR2YTJ2cm40ZUhoOTZkUDY3SmFSRmgveGZjVTMxc0NBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXZzeS8vWlZPUm1CMDV2SUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfZm9yX2J1aWxkZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgdHlwZSBEYXRhU291cmNlSnNvbiwgY3NzLCB0eXBlIEltbXV0YWJsZUFycmF5IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcywgZ2V0QXBwQ29uZmlnQWN0aW9uIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHsgdHlwZSBTZWFyY2hEYXRhQ29uZmlnLCBTZWFyY2hEYXRhU2V0dGluZywgU2VhcmNoRGF0YVR5cGUgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZywgU2VhcmNoU2VydmljZVR5cGUgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBTZWFyY2hSZXN1bHRTZXR0aW5nIGZyb20gJy4vY29tcG9uZW50L3NlYXJjaC1zZXR0aW5nLW9wdGlvbidcclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICBpZDogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgU2V0dGluZ1Byb3BzID0gQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHNcclxuXHJcbmNvbnN0IFNldHRpbmcgPSAocHJvcHM6IFNldHRpbmdQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY29uZmlnLCBpZCwgcG9ydGFsVXJsLCBvblNldHRpbmdDaGFuZ2UsIHVzZURhdGFTb3VyY2VzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBTWUxFID0gY3NzYFxyXG4gICAgLnN1Z2dlc3Rpb24tc2V0dGluZy1jb24gIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgYFxyXG5cclxuICBjb25zdCBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkRhdGFTZXR0aW5nQ2hhbmdlID0gKGRhdGFzb3VyY2VDb25maWc6IEltbXV0YWJsZUFycmF5PFNlYXJjaERhdGFDb25maWc+LCBkc0luV2lkZ2V0SnNvbikgPT4ge1xyXG4gICAgaWYgKCFkYXRhc291cmNlQ29uZmlnKSByZXR1cm4gZmFsc2VcclxuICAgIGNvbnN0IGFwcENvbmZpZ0FjdGlvbiA9IGdldEFwcENvbmZpZ0FjdGlvbigpXHJcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWc/LnNldEluKFsnZGF0YXNvdXJjZUNvbmZpZyddLCBkYXRhc291cmNlQ29uZmlnKVxyXG4gICAgbGV0IG5ld1dpZGdldEpzb24gPSB7IGlkLCBjb25maWc6IG5ld0NvbmZpZyB9XHJcbiAgICBpZiAoZHNJbldpZGdldEpzb24/LmlzV2lkZ2V0SnNvbkRzQ2hhbmdlZCAmJiBkc0luV2lkZ2V0SnNvbj8uZHNJbldpZGdldEpzb24pIHtcclxuICAgICAgbmV3V2lkZ2V0SnNvbiA9IHtcclxuICAgICAgICAuLi5uZXdXaWRnZXRKc29uLFxyXG4gICAgICAgIC4uLmRzSW5XaWRnZXRKc29uPy5kc0luV2lkZ2V0SnNvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHBDb25maWdBY3Rpb24uZWRpdFdpZGdldChuZXdXaWRnZXRKc29uKS5leGVjKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZU91dHB1dERzID0gKG91dHB1dERzSnNvbkxpc3Q6IERhdGFTb3VyY2VKc29uW10sIGRhdGFzb3VyY2VDb25maWc6IEltbXV0YWJsZUFycmF5PFNlYXJjaERhdGFDb25maWc+LCBkc0luV2lkZ2V0SnNvbikgPT4ge1xyXG4gICAgaWYgKCFkYXRhc291cmNlQ29uZmlnKSByZXR1cm4gZmFsc2VcclxuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGNvbmZpZz8uc2V0SW4oWydkYXRhc291cmNlQ29uZmlnJ10sIGRhdGFzb3VyY2VDb25maWcpXHJcbiAgICBsZXQgbmV3V2lkZ2V0SnNvbiA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIGNvbmZpZzogbmV3Q29uZmlnLFxyXG4gICAgICB1c2VVdGlsaXRpZXM6IGdldFVzZVV0aWxpdGllcyhuZXdDb25maWcpXHJcbiAgICB9XHJcbiAgICBpZiAoZHNJbldpZGdldEpzb24/LmlzV2lkZ2V0SnNvbkRzQ2hhbmdlZCAmJiBkc0luV2lkZ2V0SnNvbj8uZHNJbldpZGdldEpzb24pIHtcclxuICAgICAgbmV3V2lkZ2V0SnNvbiA9IHtcclxuICAgICAgICAuLi5uZXdXaWRnZXRKc29uLFxyXG4gICAgICAgIC4uLmRzSW5XaWRnZXRKc29uPy5kc0luV2lkZ2V0SnNvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcHBDb25maWdBY3Rpb24gPSBnZXRBcHBDb25maWdBY3Rpb24oKVxyXG4gICAgYXBwQ29uZmlnQWN0aW9uLmVkaXRXaWRnZXQobmV3V2lkZ2V0SnNvbiwgb3V0cHV0RHNKc29uTGlzdCkuZXhlYygpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRVc2VVdGlsaXRpZXMgPSAoY29uZmlnOiBJTUNvbmZpZykgPT4ge1xyXG4gICAgY29uc3QgdXNlVXRpbGl0aWVzID0gW11cclxuICAgIGNvbmZpZz8uZGF0YXNvdXJjZUNvbmZpZz8uZm9yRWFjaChjb25maWdJdGVtID0+IHtcclxuICAgICAgaWYgKGNvbmZpZ0l0ZW0/LnNlYXJjaFNlcnZpY2VUeXBlID09PSBTZWFyY2hTZXJ2aWNlVHlwZS5HZW9jb2RlU2VydmljZSkge1xyXG4gICAgICAgIHVzZVV0aWxpdGllcy5wdXNoKGNvbmZpZ0l0ZW0/LnVzZVV0aWxpdHkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdXNlVXRpbGl0aWVzXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVFbmFibGVGaWx0ZXJpbmdDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIG9uU2V0dGluZ0NoYW5nZSh7IGlkOiBpZCwgY29uZmlnOiBjb25maWcuc2V0KCdlbmFibGVGaWx0ZXJpbmcnLCB2YWx1ZSkgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LXNldHRpbmctc2VhcmNoIGppbXUtd2lkZ2V0LXNlYXJjaCcgY3NzPXtTWUxFfT5cclxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiTWFwYVwiPlxyXG4gICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXtcclxuICAgICAgICAgICAgcHJvcHMudXNlTWFwV2lkZ2V0SWRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8U2VhcmNoRGF0YVNldHRpbmdcclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgcG9ydGFsVXJsPXtwb3J0YWxVcmx9XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgIGNyZWF0ZU91dHB1dERzPXt0cnVlfVxyXG4gICAgICAgIG9uU2V0dGluZ0NoYW5nZT17b25EYXRhU2V0dGluZ0NoYW5nZX1cclxuICAgICAgICBvbk91dHB1dERzU2V0dGluZ0NoYW5nZT17Y3JlYXRlT3V0cHV0RHN9XHJcbiAgICAgICAgZGF0YXNvdXJjZUNvbmZpZz17Y29uZmlnPy5kYXRhc291cmNlQ29uZmlnfVxyXG4gICAgICAgIHNlYXJjaERhdGFTZXR0aW5nVHlwZT17U2VhcmNoRGF0YVR5cGUuQm90aH1cclxuICAgICAgICBlbmFibGVGaWx0ZXJpbmc9e2NvbmZpZz8uZW5hYmxlRmlsdGVyaW5nfVxyXG4gICAgICAgIG9uRW5hYmxlRmlsdGVyaW5nQ2hhbmdlPXtoYW5kbGVFbmFibGVGaWx0ZXJpbmdDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTZWFyY2hSZXN1bHRTZXR0aW5nXHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxyXG4gICAgICAgIG9uU2V0dGluZ0NoYW5nZT17b25TZXR0aW5nQ2hhbmdlfVxyXG4gICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1xyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9