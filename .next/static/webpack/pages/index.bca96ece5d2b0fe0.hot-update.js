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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"male\"), gender = ref[0], setGender = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), age = ref1[0], setAge = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(25), priceMin = ref2[0], setPriceMin = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100), priceMax = ref3[0], setPriceMax = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), hobbies = ref4[0], setHobbies = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), result = ref5[0], setResult = ref5[1];\n    console.log(typeof age === \"undefined\" ? \"undefined\" : _typeof(age));\n    function onSubmit(event) {\n        return _onSubmit.apply(this, arguments);\n    }\n    function _onSubmit() {\n        _onSubmit = _asyncToGenerator(_home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return _home_george_Programming_ReactNative_ChatGPT_openai_quickstart_node_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"/api/generate\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                animal: animalInput\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        setResult(data.result);\n                        setAnimalInput(\"\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _onSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Christmas Gifts Generator\"\n                }, void 0, false, {\n                    fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Christmas Gift Generator\"\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            \"l\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"age\",\n                                placeholder: \"Enter your Age\",\n                                value: age,\n                                onChange: function(e) {\n                                    return setAge(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate Gifts\"\n                            }, void 0, false, {\n                                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/george/Programming/ReactNative/ChatGPT/openai-quickstart-node/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"wNEcyB8LWdoxmZJplVhP/PoGM1Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNJO0FBQ087O0FBRXpCLFNBQVNHLElBQUksR0FBRzs7SUFDN0IsSUFBNEJGLEdBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDLE1BQU0sQ0FBQyxFQUw5QyxNQUtlLEdBQWVBLEdBQWdCLEdBQS9CLEVBTGYsU0FLMEIsR0FBSUEsR0FBZ0IsR0FBcEI7SUFDeEIsSUFBc0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFOcEMsR0FNWSxHQUFZQSxJQUFZLEdBQXhCLEVBTlosTUFNb0IsR0FBSUEsSUFBWSxHQUFoQjtJQUNsQixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVA5QyxRQU9pQixHQUFpQkEsSUFBWSxHQUE3QixFQVBqQixXQU84QixHQUFJQSxJQUFZLEdBQWhCO0lBQzVCLElBQWdDQSxJQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBUi9DLFFBUWlCLEdBQWlCQSxJQUFhLEdBQTlCLEVBUmpCLFdBUThCLEdBQUlBLElBQWEsR0FBakI7SUFDNUIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUNUMsT0FTZ0IsR0FBZ0JBLElBQVksR0FBNUIsRUFUaEIsVUFTNEIsR0FBSUEsSUFBWSxHQUFoQjtJQUUxQixJQUE0QkEsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBWHhDLE1BV2UsR0FBZUEsSUFBVSxHQUF6QixFQVhmLFNBVzBCLEdBQUlBLElBQVUsR0FBZDtJQUN4QmUsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBT1gsR0FBRyxpQ0FBVixPQUFVLENBQUhBLEdBQUcsRUFBQzthQUVSWSxRQUFRLENBQUNDLEtBQUs7ZUFBZEQsU0FBUTs7YUFBUkEsU0FBUTtRQUFSQSxTQUFRLEdBQXZCLGtOQUF3QkMsS0FBSyxFQUFFO2dCQUV2QkMsUUFBUSxFQU9SQyxJQUFJOzs7O3dCQVJWRixLQUFLLENBQUNHLGNBQWMsRUFBRSxDQUFDOzsrQkFDQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTs0QkFDNUNDLE1BQU0sRUFBRSxNQUFNOzRCQUNkQyxPQUFPLEVBQUU7Z0NBQ1AsY0FBYyxFQUFFLGtCQUFrQjs2QkFDbkM7NEJBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0NBQUVDLE1BQU0sRUFBRUMsV0FBVzs2QkFBRSxDQUFDO3lCQUM5QyxDQUFDOzt3QkFOSVYsUUFBUSxZQU1aOzsrQkFDaUJBLFFBQVEsQ0FBQ1csSUFBSSxFQUFFOzt3QkFBNUJWLElBQUksWUFBd0I7d0JBQ2xDTixTQUFTLENBQUNNLElBQUksQ0FBQ1AsTUFBTSxDQUFDLENBQUM7d0JBQ3ZCa0IsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7U0FDcEI7ZUFaY2QsU0FBUTs7SUFjdkIscUJBQ0UsOERBQUNlLEtBQUc7OzBCQUNGLDhEQUFDakMsa0RBQUk7MEJBQ0gsNEVBQUNrQyxPQUFLOzhCQUFDLDJCQUF5Qjs7Ozs7d0JBQVE7Ozs7O29CQUNuQzswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFbEMsK0RBQVc7O2tDQUMxQiw4REFBQ21DLEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxFQUFFO3dCQUFDRixTQUFTLEVBQUVsQywrREFBVzs7Ozs7NEJBQUk7a0NBQ3RDLDhEQUFDc0MsSUFBRTtrQ0FBQywwQkFBd0I7Ozs7OzRCQUFLO2tDQUNqQyw4REFBQ0MsTUFBSTt3QkFBQ3ZCLFFBQVEsRUFBRUEsUUFBUTs7NEJBQUUsR0FFeEI7MENBQUEsOERBQUN3QixPQUFLO2dDQUNKQyxJQUFJLEVBQUMsUUFBUTtnQ0FDYkMsSUFBSSxFQUFDLEtBQUs7Z0NBQ1ZDLFdBQVcsRUFBQyxnQkFBZ0I7Z0NBQzVCQyxLQUFLLEVBQUV4QyxHQUFHO2dDQUNWeUMsUUFBUSxFQUFFLFNBQUNDLENBQUM7MkNBQUt6QyxNQUFNLENBQUMwQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNMLEtBQUssQ0FBQyxDQUFDO2lDQUFBOzs7OztvQ0FDeEQ7MENBQ0YsOERBQUNKLE9BQUs7Z0NBQUNDLElBQUksRUFBQyxRQUFRO2dDQUFDRyxLQUFLLEVBQUMsZ0JBQWdCOzs7OztvQ0FBRzs7Ozs7OzRCQUN6QztrQ0FDUCw4REFBQ2IsS0FBRzt3QkFBQ0csU0FBUyxFQUFFbEMsaUVBQWE7a0NBQUdZLE1BQU07Ozs7OzRCQUFPOzs7Ozs7b0JBQ3hDOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FoRHVCWCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZShcIm1hbGVcIik7XG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgyNSk7XG4gIGNvbnN0IFtwcmljZU1pbiwgc2V0UHJpY2VNaW5dID0gdXNlU3RhdGUoMjUpO1xuICBjb25zdCBbcHJpY2VNYXgsIHNldFByaWNlTWF4XSA9IHVzZVN0YXRlKDEwMCk7XG4gIGNvbnN0IFtob2JiaWVzLCBzZXRIb2JiaWVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zb2xlLmxvZyh0eXBlb2YgYWdlKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbDogYW5pbWFsSW5wdXQgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgIHNldEFuaW1hbElucHV0KFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaHJpc3RtYXMgR2lmdHMgR2VuZXJhdG9yPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxpbWcgc3JjPVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgPGgzPkNocmlzdG1hcyBHaWZ0IEdlbmVyYXRvcjwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgbFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwiYWdlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBBZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e2FnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWdlKE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIEdpZnRzXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+e3Jlc3VsdH08L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwiYWdlIiwic2V0QWdlIiwicHJpY2VNaW4iLCJzZXRQcmljZU1pbiIsInByaWNlTWF4Iiwic2V0UHJpY2VNYXgiLCJob2JiaWVzIiwic2V0SG9iYmllcyIsInJlc3VsdCIsInNldFJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImV2ZW50IiwicmVzcG9uc2UiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFuaW1hbCIsImFuaW1hbElucHV0IiwianNvbiIsInNldEFuaW1hbElucHV0IiwiZGl2IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaWNvbiIsImgzIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});