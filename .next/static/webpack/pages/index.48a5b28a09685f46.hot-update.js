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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"male\"), gender = ref[0], setGender = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), age = ref1[0], setAge = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), priceMin = ref2[0], setPriceMin = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100), priceMax = ref3[0], setPriceMax = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), hobbies = ref4[0], setHobbies = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), result = ref5[0], setResult = ref5[1];\n    console.log(typeof age === \"undefined\" ? \"undefined\" : _typeof(age));\n    function onSubmit(event) {\n        return _onSubmit.apply(this, arguments);\n    }\n    function _onSubmit() {\n        _onSubmit = _asyncToGenerator(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"/api/generate\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                animal: animalInput\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        setResult(data.result);\n                        setAnimalInput(\"\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _onSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Christmas Gifts Generator\"\n                }, void 0, false, {\n                    fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Christmas Gift Generator\"\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"te\",\n                                name: \"\",\n                                placeholder: \"Enter your Age\",\n                                value: age,\n                                onChange: function(e) {\n                                    return setAge(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate Gifts\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"wNEcyB8LWdoxmZJplVhP/PoGM1Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDTCxLQUFLLENBQUMsQ0FBQztpQ0FBQTs7Ozs7b0NBQ3hEOzBDQUNGLDhEQUFDSixPQUFLO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTtnQ0FBQ0csS0FBSyxFQUFDLGdCQUFnQjs7Ozs7b0NBQUc7Ozs7Ozs0QkFDekM7a0NBQ1AsOERBQUNiLEtBQUc7d0JBQUNHLFNBQVMsRUFBRWxDLGlFQUFhO2tDQUFHWSxNQUFNOzs7Ozs0QkFBTzs7Ozs7O29CQUN4Qzs7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0dBL0N1QlgsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZ2VuZGVyLCBzZXRHZW5kZXJdID0gdXNlU3RhdGUoXCJtYWxlXCIpO1xuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoMjUpO1xuICBjb25zdCBbcHJpY2VNaW4sIHNldFByaWNlTWluXSA9IHVzZVN0YXRlKDI1KTtcbiAgY29uc3QgW3ByaWNlTWF4LCBzZXRQcmljZU1heF0gPSB1c2VTdGF0ZSgxMDApO1xuICBjb25zdCBbaG9iYmllcywgc2V0SG9iYmllc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcbiAgY29uc29sZS5sb2codHlwZW9mIGFnZSlcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbmltYWw6IGFuaW1hbElucHV0IH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICBzZXRBbmltYWxJbnB1dChcIlwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hyaXN0bWFzIEdpZnRzIEdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgIDxoMz5DaHJpc3RtYXMgR2lmdCBHZW5lcmF0b3I8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRlXCJcbiAgICAgICAgICAgIG5hbWU9XCJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEFnZVwiXG4gICAgICAgICAgICB2YWx1ZT17YWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZ2UoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgR2lmdHNcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJhZ2UiLCJzZXRBZ2UiLCJwcmljZU1pbiIsInNldFByaWNlTWluIiwicHJpY2VNYXgiLCJzZXRQcmljZU1heCIsImhvYmJpZXMiLCJzZXRIb2JiaWVzIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJyZXNwb25zZSIsImRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW5pbWFsIiwiYW5pbWFsSW5wdXQiLCJqc29uIiwic2V0QW5pbWFsSW5wdXQiLCJkaXYiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpY29uIiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJOdW1iZXIiLCJwYXJzZUludCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});