System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/*!**************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/GenericModal.tsx ***!
  \**************************************************************/
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

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zaGFyZWQtY29kZS9HZW5lcmljTW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsT0FBTyxFQUFFLFVBQVU7SUFDbkIsT0FBTyxFQUFFLFFBQVE7SUFDakIsTUFBTSxFQUFFLFVBQVU7Q0FDbkIsRUFBQzs7Ozs7Ozs7Ozs7O0FDSkY7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5ELGVBQWU7QUFDaUQ7QUFDa0I7QUFDakQ7QUFDbUI7QUFXN0MsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDdkQsTUFBTSxFQUNKLGFBQWEsRUFBRSxxQkFBcUIsRUFDcEMsZUFBZSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQ3JDLFdBQVcsR0FBRyxTQUFTLEdBQ3hCLEdBQUcsS0FBSztJQUNULE1BQU0sU0FBUyxHQUFHLDRDQUFLLENBQUMsY0FBYyxDQUFDLDZEQUFlLENBQUM7SUFFdkQsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0lBQ3RELE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtRQUN4QixXQUFXLEVBQUU7UUFDYixhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUNELE9BQU8sQ0FDTCwrQ0FBQywwQ0FBSyxJQUNKLE1BQU0sRUFBRSxXQUFXLEVBQ25CLE1BQU0sRUFBRSxlQUFlLEVBQ3ZCLGdCQUFnQixFQUFDLGNBQWMsRUFDL0IsR0FBRyxFQUFFLE1BQU07UUFFWCwrQ0FBQyxnREFBVyxJQUNWLFNBQVMsRUFBRSwrQ0FBQyx5Q0FBSSxJQUFDLElBQUksRUFBQyxrUkFBb1UsRUFDeFYsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLE1BQU0sRUFBQyxHQUFJLEVBQ2xDLE1BQU0sRUFBRSxXQUFXLElBRWxCLFVBQVUsQ0FDQztRQUVkLCtDQUFDLDhDQUFTLFFBQ1AsUUFBUSxDQUNDO1FBRVosK0NBQUMsZ0RBQVc7WUFDViwrQ0FBQywyQ0FBTSxJQUFDLE9BQU8sRUFBRSxXQUFXLEVBQzFCLElBQUksRUFBQyxXQUFXLElBQ2YsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUNkO1lBQ1IsR0FBRztZQUNKLCtDQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLFlBQVksRUFDckIsSUFBSSxFQUFDLFFBQVEsSUFFWixTQUFTLENBQUMsV0FBVyxDQUFDLENBQ2hCLENBQ0csQ0FDUixDQUNUO0FBQ0gsQ0FBQztBQUVELE1BQU0sTUFBTSxHQUFHLDhDQUFHOzs7OztDQUtqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zaGFyZWQtY29kZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2hhcmVkLWNvZGUvR2VuZXJpY01vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNhbmNlbF86ICdDYW5jZWxhcicsXG4gIGRlbGV0ZV86ICdCb3JyYXInLFxuICByZXNldF86ICdSZXNldGVhcicsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBNb2RhbEhlYWRlciB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuaW50ZXJmYWNlIEdlbmVyaWNNb2RhbFByb3BzIHtcbiAgbW9kYWxDYWxsYmFjazogKCkgPT4gdm9pZDsgXG4gIHVwZGF0ZVNob3dNb2RhbFN0YXR1czogKGJvb2xlYW4pID0+IHZvaWQ7XG4gIHNob3dNb2RhbFN0YXR1czogYm9vbGVhbjsgXG4gIGhlYWRlckRhdGE6IHN0cmluZzsgXG4gIGJvZHlEYXRhOiBzdHJpbmc7XG4gIGRlbGV0ZVRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgR2VuZXJpY01vZGFsID0gKHByb3BzOiBHZW5lcmljTW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbW9kYWxDYWxsYmFjaywgdXBkYXRlU2hvd01vZGFsU3RhdHVzLFxuICAgIHNob3dNb2RhbFN0YXR1cywgaGVhZGVyRGF0YSwgYm9keURhdGEsXG4gICAgZGVsZXRlVGl0bGUgPSAnZGVsZXRlXycsXG4gIH0gPSBwcm9wc1xuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB1cGRhdGVTaG93TW9kYWxTdGF0dXMoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpXG4gICAgbW9kYWxDYWxsYmFjaygpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIHRvZ2dsZT17aGFuZGxlQ2xvc2V9XG4gICAgICBpc09wZW49e3Nob3dNb2RhbFN0YXR1c31cbiAgICAgIGNvbnRlbnRDbGFzc05hbWU9XCJyZW1vdmUtbW9kYWxcIlxuICAgICAgY3NzPXtzdHlsZXN9XG4gICAgPlxuICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgIGNsb3NlSWNvbj17PEljb24gaWNvbj0nPHN2ZyB4bWxucz0mcXVvdDtodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyZxdW90OyBmaWxsPSZxdW90O25vbmUmcXVvdDsgdmlld0JveD0mcXVvdDswIDAgMTYgMTYmcXVvdDs+PHBhdGggZmlsbD0mcXVvdDsjMDAwJnF1b3Q7IGQ9JnF1b3Q7bTguNzQ1IDggNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ1Ljc0Nkw4IDguNzQ2bC02LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDYtLjc0Nmw2LjEtNi4xLTYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni0uNzQ2bDYuMSA2LjEgNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2Ljc0NnomcXVvdDs+PC9wYXRoPjwvc3ZnPicgXG4gICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogJzEwcHgnfX0gLz59XG4gICAgICAgIHRvZ2dsZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIHtoZWFkZXJEYXRhfVxuICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgIFxuICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAge2JvZHlEYXRhfVxuICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICBcbiAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAge3RyYW5zbGF0ZSgnY2FuY2VsXycpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX1cbiAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdGUoZGVsZXRlVGl0bGUpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIC5yZW1vdmUtbW9kYWwgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICAgIHBhZGRpbmc6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGluaXRpYWwgIWltcG9ydGFudDtcbiAgfVxuYCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==