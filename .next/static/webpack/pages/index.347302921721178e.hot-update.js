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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"male\"), gender = ref[0], setGender = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), age = ref1[0], setAge = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), priceMin = ref2[0], setPriceMin = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100), priceMax = ref3[0], setPriceMax = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), hobbies = ref4[0], setHobbies = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(second), first = ref5[0], setfirst = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), result = ref6[0], setResult = ref6[1];\n    function onSubmit(event) {\n        return _onSubmit.apply(this, arguments);\n    }\n    function _onSubmit() {\n        _onSubmit = _asyncToGenerator(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"/api/generate\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                priceMin: priceMin,\n                                priceMax: priceMax,\n                                gender: gender,\n                                age: age,\n                                hobbies: hobbies\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        console.log(data);\n                        setResult(data.result);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _onSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Christmas Gifts Generator  \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                }, void 0, false, {\n                    fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Christmas Gift Generator  \\uD83C\\uDF81 \\uD83D\\uDCA1\"\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"For who is the giftee?\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                                name: \"gender\",\n                                value: gender,\n                                onChange: function(e) {\n                                    return setGender(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"man\",\n                                        children: \"Man\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"woman\",\n                                        children: \"Woman\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Age\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                max: 99,\n                                name: \"age\",\n                                placeholder: \"Enter the age\",\n                                value: age,\n                                onChange: function(e) {\n                                    return setAge(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Price from\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMin\",\n                                placeholder: \"Enter the minimum price\",\n                                value: priceMin,\n                                onChange: function(e) {\n                                    return setPriceMin(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Price to\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: 1,\n                                name: \"priceMax\",\n                                placeholder: \"Enter the maximum price\",\n                                value: priceMax,\n                                onChange: function(e) {\n                                    return setPriceMax(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Hobbies\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"hobbies\",\n                                placeholder: \"Enter the hobbies\",\n                                value: hobbies,\n                                onChange: function(e) {\n                                    return setHobbies(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate gift ideas\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"CFIlA4RaAAMHggZulMxBWF4yNy0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdEOzBDQUVGLDhEQUFDSCxPQUFLOzBDQUFDLFVBQVE7Ozs7O29DQUFROzBDQUN2Qiw4REFBQ1EsT0FBSztnQ0FDSkMsSUFBSSxFQUFDLFFBQVE7Z0NBQ2JDLEdBQUcsRUFBRSxDQUFDO2dDQUNOUixJQUFJLEVBQUMsVUFBVTtnQ0FDZlUsV0FBVyxFQUFDLHlCQUF5QjtnQ0FDckNULEtBQUssRUFBRW5DLFFBQVE7Z0NBQ2ZvQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQ0FBS3BDLFdBQVcsQ0FBQzRDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDVCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDLENBQUM7aUNBQUE7Ozs7O29DQUM3RDswQ0FFRiw4REFBQ0gsT0FBSzswQ0FBQyxTQUFPOzs7OztvQ0FBUTswQ0FDdEIsOERBQUNRLE9BQUs7Z0NBQ0pDLElBQUksRUFBQyxNQUFNO2dDQUNYUCxJQUFJLEVBQUMsU0FBUztnQ0FDZFUsV0FBVyxFQUFDLG1CQUFtQjtnQ0FDL0JULEtBQUssRUFBRWpDLE9BQU87Z0NBQ2RrQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQ0FBS2xDLFVBQVUsQ0FBQ2tDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7aUNBQUE7Ozs7O29DQUMzQzswQ0FDRiw4REFBQ0ssT0FBSztnQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7Z0NBQUNOLEtBQUssRUFBQyxxQkFBcUI7Ozs7O29DQUFHOzs7Ozs7NEJBQzlDO2tDQUNQLDhEQUFDWixLQUFHO3dCQUFDRyxTQUFTLEVBQUVsQyxpRUFBYTtrQ0FBR2UsTUFBTTs7Ozs7NEJBQU87Ozs7OztvQkFDeEM7Ozs7OztZQUNILENBQ047Q0FDSDtHQXpGdUJkLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2dlbmRlciwgc2V0R2VuZGVyXSA9IHVzZVN0YXRlKFwibWFsZVwiKTtcbiAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKDI1KTtcbiAgY29uc3QgW3ByaWNlTWluLCBzZXRQcmljZU1pbl0gPSB1c2VTdGF0ZSgyNSk7XG4gIGNvbnN0IFtwcmljZU1heCwgc2V0UHJpY2VNYXhdID0gdXNlU3RhdGUoMTAwKTtcbiAgY29uc3QgW2hvYmJpZXMsIHNldEhvYmJpZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmaXJzdCwgc2V0Zmlyc3RdID0gdXNlU3RhdGUoc2Vjb25kKVxuXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByaWNlTWluLCBwcmljZU1heCwgZ2VuZGVyLCBhZ2UsIGhvYmJpZXMgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNocmlzdG1hcyBHaWZ0cyBHZW5lcmF0b3IgIPCfjoEg8J+SoTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgIDxoMz5DaHJpc3RtYXMgR2lmdCBHZW5lcmF0b3IgIPCfjoEg8J+SoTwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPkZvciB3aG8gaXMgdGhlIGdpZnRlZT88L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFuXCI+TWFuPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid29tYW5cIj5Xb21hbjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgPGxhYmVsPkFnZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17OTl9XG4gICAgICAgICAgICBuYW1lPVwiYWdlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGFnZVwiXG4gICAgICAgICAgICB2YWx1ZT17YWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZ2UoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsYWJlbD5QcmljZSBmcm9tPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbmFtZT1cInByaWNlTWluXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIG1pbmltdW0gcHJpY2VcIlxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlTWlufVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZU1pbihOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxhYmVsPlByaWNlIHRvPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgbmFtZT1cInByaWNlTWF4XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIG1heGltdW0gcHJpY2VcIlxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlTWF4fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZU1heChOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxhYmVsPkhvYmJpZXM8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImhvYmJpZXNcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgaG9iYmllc1wiXG4gICAgICAgICAgICB2YWx1ZT17aG9iYmllc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SG9iYmllcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgZ2lmdCBpZGVhc1wiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PntyZXN1bHR9PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsImdlbmRlciIsInNldEdlbmRlciIsImFnZSIsInNldEFnZSIsInByaWNlTWluIiwic2V0UHJpY2VNaW4iLCJwcmljZU1heCIsInNldFByaWNlTWF4IiwiaG9iYmllcyIsInNldEhvYmJpZXMiLCJzZWNvbmQiLCJmaXJzdCIsInNldGZpcnN0IiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInJlc3BvbnNlIiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImljb24iLCJoMyIsImZvcm0iLCJsYWJlbCIsInNlbGVjdCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsInBsYWNlaG9sZGVyIiwiTnVtYmVyIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});