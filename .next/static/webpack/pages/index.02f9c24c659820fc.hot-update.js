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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"male\"), gender = ref[0], setGender = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), age = ref1[0], setAge = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), priceMin = ref2[0], setPriceMin = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100), priceMax = ref3[0], setPriceMax = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), hobbies = ref4[0], setHobbies = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref5[0], setLoading = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), result = ref6[0], setResult = ref6[1];\n    function onSubmit(event) {\n        return _onSubmit.apply(this, arguments);\n    }\n    function _onSubmit() {\n        _onSubmit = _asyncToGenerator(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        if (!loading) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        setLoading(true);\n                        try {} catch (error) {\n                            alert;\n                        }\n                        _ctx.next = 7;\n                        return fetch(\"/api/generate\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                priceMin: priceMin,\n                                priceMax: priceMax,\n                                gender: gender,\n                                age: age,\n                                hobbies: hobbies\n                            })\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        _ctx.next = 10;\n                        return response.json();\n                    case 10:\n                        data = _ctx.sent;\n                        console.log(data);\n                        setResult(data.result);\n                        setLoading(false);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _onSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Christmas Gifts Generator  \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                }, void 0, false, {\n                    fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Christmas Gift Generator  \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"For who is the giftee?\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                                name: \"gender\",\n                                value: gender,\n                                onChange: function(e) {\n                                    return setGender(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"man\",\n                                        children: \"Man\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"woman\",\n                                        children: \"Woman\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Age\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                max: 99,\n                                name: \"age\",\n                                placeholder: \"Enter the age\",\n                                value: age,\n                                onChange: function(e) {\n                                    return setAge(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Price from\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMin\",\n                                placeholder: \"Enter the minimum price\",\n                                value: priceMin,\n                                onChange: function(e) {\n                                    return setPriceMin(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Price to\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMax\",\n                                placeholder: \"Enter the maximum price\",\n                                value: priceMax,\n                                onChange: function(e) {\n                                    return setPriceMax(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Hobbies\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"hobbies\",\n                                placeholder: \"Enter the hobbies\",\n                                value: hobbies,\n                                onChange: function(e) {\n                                    return setHobbies(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate gift ideas\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"6YGbxnE6ArLGHeNHVndlcPrjXhQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZShcIm1hbGVcIik7XG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgyNSk7XG4gIGNvbnN0IFtwcmljZU1pbiwgc2V0UHJpY2VNaW5dID0gdXNlU3RhdGUoMjUpO1xuICBjb25zdCBbcHJpY2VNYXgsIHNldFByaWNlTWF4XSA9IHVzZVN0YXRlKDEwMCk7XG4gIGNvbnN0IFtob2JiaWVzLCBzZXRIb2JiaWVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYobG9hZGluZyl7cmV0dXJufVxuICAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAgIHRyeXtcblxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBhbGVydFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJpY2VNaW4sIHByaWNlTWF4LCBnZW5kZXIsIGFnZSwgaG9iYmllcyB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaHJpc3RtYXMgR2lmdHMgR2VuZXJhdG9yICDwn46BIPCfkqE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGltZyBzcmM9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICA8aDM+Q2hyaXN0bWFzIEdpZnQgR2VuZXJhdG9yICDwn46BIPCfkqE8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbD5Gb3Igd2hvIGlzIHRoZSBnaWZ0ZWU/PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtnZW5kZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEdlbmRlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hblwiPk1hbjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndvbWFuXCI+V29tYW48L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgIDxsYWJlbD5BZ2U8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICBtYXg9ezk5fVxuICAgICAgICAgICAgbmFtZT1cImFnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBhZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e2FnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWdlKE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGFiZWw+UHJpY2UgZnJvbTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG5hbWU9XCJwcmljZU1pblwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBtaW5pbXVtIHByaWNlXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcmljZU1pbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2VNaW4oTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsYWJlbD5QcmljZSB0bzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG5hbWU9XCJwcmljZU1heFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBtYXhpbXVtIHByaWNlXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcmljZU1heH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2VNYXgoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsYWJlbD5Ib2JiaWVzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJob2JiaWVzXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGhvYmJpZXNcIlxuICAgICAgICAgICAgdmFsdWU9e2hvYmJpZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEhvYmJpZXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIGdpZnQgaWRlYXNcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJhZ2UiLCJzZXRBZ2UiLCJwcmljZU1pbiIsInNldFByaWNlTWluIiwicHJpY2VNYXgiLCJzZXRQcmljZU1heCIsImhvYmJpZXMiLCJzZXRIb2JiaWVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvblN1Ym1pdCIsImV2ZW50IiwicmVzcG9uc2UiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImFsZXJ0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImljb24iLCJoMyIsImZvcm0iLCJsYWJlbCIsInNlbGVjdCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiTnVtYmVyIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});