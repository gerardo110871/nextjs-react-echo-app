"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar InputElement = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), inputText = ref[0], setInputText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), historyList = ref1[0], setHistoryList = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    setInputText(e.target.value);\n                    setHistoryList(_toConsumableArray(historyList).concat([\n                        e.target.value\n                    ]));\n                },\n                placeholder: \"Enter Some Text\"\n            }, void 0, false, {\n                fileName: \"/Users/gpadil/Desktop/DevMountain/nextjs-react-app/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, _this),\n            \"/\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/gpadil/Desktop/DevMountain/nextjs-react-app/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 46\n            }, _this),\n            inputText,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/gpadil/Desktop/DevMountain/nextjs-react-app/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/gpadil/Desktop/DevMountain/nextjs-react-app/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: historyList.map(function(rec) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/gpadil/Desktop/DevMountain/nextjs-react-app/pages/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 28\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gpadil/Desktop/DevMountain/nextjs-react-app/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gpadil/Desktop/DevMountain/nextjs-react-app/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 12\n    }, _this);\n};\n_s(InputElement, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = InputElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputElement);\nvar _c;\n$RefreshReg$(_c, \"InputElement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRS9CLElBQU1DLFlBQVksR0FBRyxXQUFNOzs7SUFDdkIsSUFBa0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFIbEQsU0FHb0IsR0FBa0JBLEdBQVksR0FBOUIsRUFIcEIsWUFHa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUM5QixJQUFzQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUp0RCxXQUlzQixHQUFvQkEsSUFBWSxHQUFoQyxFQUp0QixjQUlzQyxHQUFJQSxJQUFZLEdBQWhCO0lBRWxDLHFCQUFPLDhEQUFDTSxLQUFHOzswQkFBQyw4REFBQ0MsT0FBSztnQkFDTkMsUUFBUSxFQUFFLFNBQUNDLENBQUMsRUFBSztvQkFDYk4sWUFBWSxDQUFDTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO29CQUM1Qk4sY0FBYyxDQUFDLG1CQUFJRCxXQUFXLENBQVhBLFFBQUo7d0JBQWlCSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztxQkFBQyxFQUFDO2lCQUMvQztnQkFDVEMsV0FBVyxFQUFDLGlCQUFpQjs7Ozs7cUJBQUc7WUFBQSxHQUFDOzBCQUFBLDhEQUFDQyxJQUFFOzs7O3FCQUFFO1lBQ3JDWCxTQUFTOzBCQUNWLDhEQUFDWSxJQUFFOzs7O3FCQUFFOzBCQUFBLDhEQUFDRCxJQUFFOzs7O3FCQUFFOzBCQUNWLDhEQUFDRSxJQUFFOzBCQUNFWCxXQUFXLENBQUNZLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUs7b0JBQ3RCLHFCQUFPLDhEQUFDWCxLQUFHOzs7OzhCQUFPO2lCQUNyQixDQUFDOzs7OztxQkFDRDs7Ozs7O2FBQ0g7Q0FDYjtHQWxCS0wsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBdUJsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbaGlzdG9yeUxpc3QsIHNldEhpc3RvcnlMaXN0XSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgcmV0dXJuIDxkaXY+PGlucHV0IFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHNldEhpc3RvcnlMaXN0KFsuLi5oaXN0b3J5TGlzdCwgZS50YXJnZXQudmFsdWVdKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBTb21lIFRleHRcIiAvPi88YnIvPlxuICAgICAgICAgICAge2lucHV0VGV4dH1cbiAgICAgICAgICAgIDxoci8+PGJyLz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7aGlzdG9yeUxpc3QubWFwKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRFbGVtZW50Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5wdXRFbGVtZW50IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwiaGlzdG9yeUxpc3QiLCJzZXRIaXN0b3J5TGlzdCIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImJyIiwiaHIiLCJ1bCIsIm1hcCIsInJlYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});