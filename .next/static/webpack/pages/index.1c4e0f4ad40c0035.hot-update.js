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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"male\"), gender = ref[0], setGender = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), age = ref1[0], setAge = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), priceMin = ref2[0], setPriceMin = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100), priceMax = ref3[0], setPriceMax = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), hobbies = ref4[0], setHobbies = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref5[0], setLoading = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), result = ref6[0], setResult = ref6[1];\n    function onSubmit(event) {\n        return _onSubmit.apply(this, arguments);\n    }\n    function _onSubmit() {\n        _onSubmit = _asyncToGenerator(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        if (!loading) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        setLoading(true);\n                        try {} catch (error) {\n                            alert(\"Failed to gen\");\n                        }\n                        _ctx.next = 7;\n                        return fetch(\"/api/generate\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                priceMin: priceMin,\n                                priceMax: priceMax,\n                                gender: gender,\n                                age: age,\n                                hobbies: hobbies\n                            })\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        _ctx.next = 10;\n                        return response.json();\n                    case 10:\n                        data = _ctx.sent;\n                        console.log(data);\n                        setResult(data.result);\n                        setLoading(false);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _onSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Christmas Gifts Generator  \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                }, void 0, false, {\n                    fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Christmas Gift Generator  \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"For who is the giftee?\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                                name: \"gender\",\n                                value: gender,\n                                onChange: function(e) {\n                                    return setGender(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"man\",\n                                        children: \"Man\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"woman\",\n                                        children: \"Woman\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Age\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                max: 99,\n                                name: \"age\",\n                                placeholder: \"Enter the age\",\n                                value: age,\n                                onChange: function(e) {\n                                    return setAge(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Price from\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMin\",\n                                placeholder: \"Enter the minimum price\",\n                                value: priceMin,\n                                onChange: function(e) {\n                                    return setPriceMin(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Price to\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMax\",\n                                placeholder: \"Enter the maximum price\",\n                                value: priceMax,\n                                onChange: function(e) {\n                                    return setPriceMax(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Hobbies\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"hobbies\",\n                                placeholder: \"Enter the hobbies\",\n                                value: hobbies,\n                                onChange: function(e) {\n                                    return setHobbies(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate gift ideas\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"6YGbxnE6ArLGHeNHVndlcPrjXhQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZ2VuZGVyLCBzZXRHZW5kZXJdID0gdXNlU3RhdGUoXCJtYWxlXCIpO1xuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoMjUpO1xuICBjb25zdCBbcHJpY2VNaW4sIHNldFByaWNlTWluXSA9IHVzZVN0YXRlKDI1KTtcbiAgY29uc3QgW3ByaWNlTWF4LCBzZXRQcmljZU1heF0gPSB1c2VTdGF0ZSgxMDApO1xuICBjb25zdCBbaG9iYmllcywgc2V0SG9iYmllc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGxvYWRpbmcpe3JldHVybn1cbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICB0cnl7XG5cbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gZ2VuXCIpXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcmljZU1pbiwgcHJpY2VNYXgsIGdlbmRlciwgYWdlLCBob2JiaWVzIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNocmlzdG1hcyBHaWZ0cyBHZW5lcmF0b3IgIPCfjoEg8J+SoTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgIDxoMz5DaHJpc3RtYXMgR2lmdCBHZW5lcmF0b3IgIPCfjoEg8J+SoTwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPkZvciB3aG8gaXMgdGhlIGdpZnRlZT88L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFuXCI+TWFuPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid29tYW5cIj5Xb21hbjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgPGxhYmVsPkFnZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17OTl9XG4gICAgICAgICAgICBuYW1lPVwiYWdlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGFnZVwiXG4gICAgICAgICAgICB2YWx1ZT17YWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZ2UoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsYWJlbD5QcmljZSBmcm9tPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbmFtZT1cInByaWNlTWluXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIG1pbmltdW0gcHJpY2VcIlxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlTWlufVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZU1pbihOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxhYmVsPlByaWNlIHRvPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbmFtZT1cInByaWNlTWF4XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIG1heGltdW0gcHJpY2VcIlxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlTWF4fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZU1heChOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxhYmVsPkhvYmJpZXM8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImhvYmJpZXNcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgaG9iYmllc1wiXG4gICAgICAgICAgICB2YWx1ZT17aG9iYmllc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SG9iYmllcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgZ2lmdCBpZGVhc1wiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PntyZXN1bHR9PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsImdlbmRlciIsInNldEdlbmRlciIsImFnZSIsInNldEFnZSIsInByaWNlTWluIiwic2V0UHJpY2VNaW4iLCJwcmljZU1heCIsInNldFByaWNlTWF4IiwiaG9iYmllcyIsInNldEhvYmJpZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJyZXNwb25zZSIsImRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaWNvbiIsImgzIiwiZm9ybSIsImxhYmVsIiwic2VsZWN0IiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwibWluIiwibWF4IiwicGxhY2Vob2xkZXIiLCJOdW1iZXIiLCJwYXJzZUludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});