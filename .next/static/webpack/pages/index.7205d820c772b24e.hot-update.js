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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"male\"), gender = ref[0], setGender = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), age = ref1[0], setAge = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), priceMin = ref2[0], setPriceMin = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100), priceMax = ref3[0], setPriceMax = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), hobbies = ref4[0], setHobbies = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref5[0], setLoading = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), result = ref6[0], setResult = ref6[1];\n    function onSubmit(event) {\n        return _onSubmit.apply(this, arguments);\n    }\n    function _onSubmit() {\n        _onSubmit = _asyncToGenerator(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        if (!loading) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        setLoading(true);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return fetch(\"/api/generate\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                priceMin: priceMin,\n                                priceMax: priceMax,\n                                gender: gender,\n                                age: age,\n                                hobbies: hobbies\n                            })\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        _ctx.next = 10;\n                        return response.json();\n                    case 10:\n                        data = _ctx.sent;\n                        console.log(data);\n                        setResult(data.result.replaceAll(\"\\n\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 46\n                        }, this)));\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        alert(\"Failed to generate gift ideas\", _ctx.t0);\n                    case 18:\n                        _ctx.prev = 18;\n                        setLoading(false);\n                        return _ctx.finish(18);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, this, [\n                [\n                    4,\n                    15,\n                    18,\n                    21\n                ]\n            ]);\n        }));\n        return _onSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Christmas Gifts Generator  \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                }, void 0, false, {\n                    fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Christmas Gift Generator  \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"For who is the giftee?\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                                name: \"gender\",\n                                value: gender,\n                                onChange: function(e) {\n                                    return setGender(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"man\",\n                                        children: \"Man\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"woman\",\n                                        children: \"Woman\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Age\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                max: 99,\n                                name: \"age\",\n                                placeholder: \"Enter the age\",\n                                value: age,\n                                onChange: function(e) {\n                                    return setAge(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Price from\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMin\",\n                                placeholder: \"Enter the minimum price\",\n                                value: priceMin,\n                                onChange: function(e) {\n                                    return setPriceMin(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Price to\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMax\",\n                                placeholder: \"Enter the maximum price\",\n                                value: priceMax,\n                                onChange: function(e) {\n                                    return setPriceMax(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Hobbies\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"hobbies\",\n                                placeholder: \"Enter the hobbies\",\n                                value: hobbies,\n                                onChange: function(e) {\n                                    return setHobbies(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate gift ideas\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: \"Looking for the best gift ideas \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: \"/loading.gif\",\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading)\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().result)\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"6YGbxnE6ArLGHeNHVndlcPrjXhQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0gsS0FBRztnQ0FBQ0MsR0FBRyxFQUFDLGNBQWM7Z0NBQUNGLFNBQVMsRUFBRXBDLGtFQUFjOzs7OztvQ0FBSTs7Ozs7OzRCQUNqRDtvQkFFTmMsTUFBTSxrQkFDTiw4REFBQ21CLEtBQUc7d0JBQUNHLFNBQVMsRUFBRXBDLGlFQUFhOzs7Ozs0QkFFM0I7Ozs7OztvQkFFQzs7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0dBN0d1QkMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZ2VuZGVyLCBzZXRHZW5kZXJdID0gdXNlU3RhdGUoXCJtYWxlXCIpO1xuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoMjUpO1xuICBjb25zdCBbcHJpY2VNaW4sIHNldFByaWNlTWluXSA9IHVzZVN0YXRlKDI1KTtcbiAgY29uc3QgW3ByaWNlTWF4LCBzZXRQcmljZU1heF0gPSB1c2VTdGF0ZSgxMDApO1xuICBjb25zdCBbaG9iYmllcywgc2V0SG9iYmllc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGxvYWRpbmcpe3JldHVybn1cbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcmljZU1pbiwgcHJpY2VNYXgsIGdlbmRlciwgYWdlLCBob2JiaWVzIH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdC5yZXBsYWNlQWxsKFwiXFxuXCIsIDxici8+KSk7XG5cbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZ2lmdCBpZGVhc1wiLCBlcnJvcilcbiAgICB9IGZpbmFsbHl7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hyaXN0bWFzIEdpZnRzIEdlbmVyYXRvciAg8J+OgSDwn5KhPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxpbWcgc3JjPVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgPGgzPkNocmlzdG1hcyBHaWZ0IEdlbmVyYXRvciAg8J+OgSDwn5KhPC9oMz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWw+Rm9yIHdobyBpcyB0aGUgZ2lmdGVlPzwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICB2YWx1ZT17Z2VuZGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5kZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYW5cIj5NYW48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3b21hblwiPldvbWFuPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICA8bGFiZWw+QWdlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbWF4PXs5OX1cbiAgICAgICAgICAgIG5hbWU9XCJhZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgYWdlXCJcbiAgICAgICAgICAgIHZhbHVlPXthZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFnZShOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxhYmVsPlByaWNlIGZyb208L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBuYW1lPVwicHJpY2VNaW5cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgbWluaW11bSBwcmljZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJpY2VNaW59XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlTWluKE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGFiZWw+UHJpY2UgdG88L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBuYW1lPVwicHJpY2VNYXhcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgbWF4aW11bSBwcmljZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJpY2VNYXh9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlTWF4KE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGFiZWw+SG9iYmllczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiaG9iYmllc1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBob2JiaWVzXCJcbiAgICAgICAgICAgIHZhbHVlPXtob2JiaWVzfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRIb2JiaWVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBnaWZ0IGlkZWFzXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5Mb29raW5nIGZvciB0aGUgYmVzdCBnaWZ0IGlkZWFzIPCfjoEg8J+SoTwvaDM+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2FkaW5nLmdpZlwiIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHsgcmVzdWx0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIC8+XG4gICAgICAgICl9ICAgICAgICBcbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwiYWdlIiwic2V0QWdlIiwicHJpY2VNaW4iLCJzZXRQcmljZU1pbiIsInByaWNlTWF4Iiwic2V0UHJpY2VNYXgiLCJob2JiaWVzIiwic2V0SG9iYmllcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInJlc3BvbnNlIiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2VBbGwiLCJiciIsImFsZXJ0IiwiZGl2IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaWNvbiIsImgzIiwiZm9ybSIsImxhYmVsIiwic2VsZWN0IiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwibWluIiwibWF4IiwicGxhY2Vob2xkZXIiLCJOdW1iZXIiLCJwYXJzZUludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});