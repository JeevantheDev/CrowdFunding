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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var F_BlockChain_Udemy_main_project_kickstart_boilerplate_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var F_BlockChain_Udemy_main_project_kickstart_boilerplate_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_BlockChain_Udemy_main_project_kickstart_boilerplate_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this2 = undefined;\nvar Home = function(param) {\n    var campaigns1 = param.campaigns;\n    var _this1 = _this2;\n    var renderCampaigns = function(campaigns) {\n        var _this = _this1;\n        var items = campaigns.map(function(address) {\n            return {\n                header: address,\n                description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                    __source: {\n                        fileName: \"F:\\\\BlockChain-Udemy\\\\main-project\\\\kickstart-boilerplate\\\\kickstart\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 20\n                    },\n                    __self: _this,\n                    children: \"View Campaign\"\n                }),\n                fluid: true\n            };\n        });\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card.Group, {\n            items: items,\n            __source: {\n                fileName: \"F:\\\\BlockChain-Udemy\\\\main-project\\\\kickstart-boilerplate\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 12\n            },\n            __self: _this1\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"F:\\\\BlockChain-Udemy\\\\main-project\\\\kickstart-boilerplate\\\\kickstart\\\\pages\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: [\n            renderCampaigns(campaigns1),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                content: \"Create Campaign\",\n                icon: \"add circle\",\n                primary: true,\n                __source: {\n                    fileName: \"F:\\\\BlockChain-Udemy\\\\main-project\\\\kickstart-boilerplate\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this2\n            })\n        ]\n    }));\n};\n_c = Home;\nHome.getInitialProps = _asyncToGenerator(F_BlockChain_Udemy_main_project_kickstart_boilerplate_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var campaigns;\n    return F_BlockChain_Udemy_main_project_kickstart_boilerplate_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedCampaigns().call();\n            case 2:\n                campaigns = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    campaigns: campaigns\n                });\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUN1QjtBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsR0FBSyxDQUFDSSxJQUFJLEdBQUcsUUFBUSxRQUFXLENBQUM7UUFBakJDLFVBQVMsU0FBVEEsU0FBUzs7SUFDdkIsR0FBSyxDQUFDQyxlQUFlLEdBQUcsUUFBUSxDQUFQRCxTQUFTLEVBQUssQ0FBQzs7UUFDdEMsR0FBSyxDQUFDRSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTztZQUFLLE1BQzNDLENBRDRDLENBQUM7Z0JBQ3pDQyxNQUFNLEVBQUVELE9BQU87Z0JBQ2ZFLFdBQVcsdUVBQUdDLENBQUM7Ozs7Ozs7OEJBQUMsQ0FBYTs7Z0JBQzdCQyxLQUFLLEVBQUUsSUFBSTtZQUNiLENBQUM7O1FBQ0QsTUFBTSxzRUFBRVoseURBQVU7WUFBQ00sS0FBSyxFQUFFQSxLQUFLOzs7Ozs7OztJQUNqQyxDQUFDO0lBQ0QsTUFBTSx1RUFDSFEsQ0FBRzs7Ozs7Ozs7WUFDRFQsZUFBZSxDQUFDRCxVQUFTO2lGQUN6QkgscURBQU07Z0JBQUNjLE9BQU8sRUFBQyxDQUFpQjtnQkFBQ0MsSUFBSSxFQUFDLENBQVk7Z0JBQUNDLE9BQU87Ozs7Ozs7Ozs7QUFHakUsQ0FBQztLQWZLZCxJQUFJO0FBaUJWQSxJQUFJLENBQUNlLGVBQWUsK0xBQUcsUUFBUSxXQUFJLENBQUM7UUFDNUJkLFNBQVM7Ozs7O3VCQUFTRixzRkFBb0MsR0FBR21CLElBQUk7O2dCQUE3RGpCLFNBQVM7NkNBQ1IsQ0FBQztvQkFBQ0EsU0FBUyxFQUFUQSxTQUFTO2dCQUFDLENBQUM7Ozs7OztBQUN0QixDQUFDO0FBRUQsK0RBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IGNhbXBhaWducyB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyQ2FtcGFpZ25zID0gKGNhbXBhaWducykgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBjYW1wYWlnbnMubWFwKChhZGRyZXNzKSA9PiAoe1xyXG4gICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiA8YT5WaWV3IENhbXBhaWduPC9hPixcclxuICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cmVuZGVyQ2FtcGFpZ25zKGNhbXBhaWducyl9XHJcbiAgICAgIDxCdXR0b24gY29udGVudD0nQ3JlYXRlIENhbXBhaWduJyBpY29uPSdhZGQgY2lyY2xlJyBwcmltYXJ5IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gIHJldHVybiB7IGNhbXBhaWducyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJIb21lIiwiY2FtcGFpZ25zIiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJhIiwiZmx1aWQiLCJHcm91cCIsImRpdiIsImNvbnRlbnQiLCJpY29uIiwicHJpbWFyeSIsImdldEluaXRpYWxQcm9wcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});