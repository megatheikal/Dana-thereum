webpackHotUpdate_N_E("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/form.module.css */ \"./styles/form.module.css\");\n/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_form_Reference__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/form/Reference */ \"./components/form/Reference.js\");\n/* harmony import */ var _components_form_Campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/form/Campaign */ \"./components/form/Campaign.js\");\n/* harmony import */ var _components_form_Organizer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/form/Organizer */ \"./components/form/Organizer.js\");\n/* harmony import */ var _components_form_Submit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/form/Submit */ \"./components/form/Submit.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/m00m/Blockhainlearn/fyp/pages/campaigns/new.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar CampaignNew = /*#__PURE__*/function (_Component) {\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CampaignNew, _Component);\n\n  var _super = _createSuper(CampaignNew);\n\n  function CampaignNew() {\n    Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CampaignNew);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CampaignNew, [{\n    key: \"renderForm\",\n    value: function renderForm() {\n      var _this = this;\n\n      var panes = [{\n        menuItem: \"Organizer Info\",\n        render: function render() {\n          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"].Pane, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 11\n            }\n          }, __jsx(_components_form_Organizer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 13\n            }\n          }));\n        }\n      }, {\n        menuItem: \"Reference Info\",\n        render: function render() {\n          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"].Pane, {\n            className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__[\"pane\"],\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 11\n            }\n          }, __jsx(_components_form_Reference__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 13\n            }\n          }));\n        }\n      }, {\n        menuItem: \"Campaign Detail\",\n        render: function render() {\n          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"].Pane, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 11\n            }\n          }, __jsx(_components_form_Campaign__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 13\n            }\n          }));\n        }\n      }, {\n        menuItem: \"Submit\",\n        render: function render() {\n          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"].Pane, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 11\n            }\n          }, __jsx(_components_form_Submit__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 13\n            }\n          }));\n        }\n      }];\n      return panes;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__[\"form\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__[\"box\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"], {\n        menu: {\n          fluid: true,\n          vertical: true,\n          tabular: true,\n          attached: true\n        },\n        panes: this.renderForm(),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }\n      }, \"New Campaign\")));\n    }\n  }]);\n\n  return CampaignNew;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lOGQyIl0sIm5hbWVzIjpbIkNhbXBhaWduTmV3IiwicGFuZXMiLCJtZW51SXRlbSIsInJlbmRlciIsInBhbmUiLCJmb3JtIiwiYm94IiwiZmx1aWQiLCJ2ZXJ0aWNhbCIsInRhYnVsYXIiLCJhdHRhY2hlZCIsInJlbmRlckZvcm0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxXOzs7Ozs7Ozs7Ozs7O2lDQUNTO0FBQUE7O0FBQ1gsVUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsZ0JBQVEsRUFBRSxnQkFEWjtBQUVFQyxjQUFNLEVBQUU7QUFBQSxpQkFDTixNQUFDLHFEQUFELENBQUssSUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FETTtBQUFBO0FBRlYsT0FEWSxFQVNaO0FBQ0VELGdCQUFRLEVBQUUsZ0JBRFo7QUFFRUMsY0FBTSxFQUFFO0FBQUEsaUJBQ04sTUFBQyxxREFBRCxDQUFLLElBQUw7QUFBVSxxQkFBUyxFQUFFQyw0REFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRE07QUFBQTtBQUZWLE9BVFksRUFpQlo7QUFDRUYsZ0JBQVEsRUFBRSxpQkFEWjtBQUVFQyxjQUFNLEVBQUU7QUFBQSxpQkFDTixNQUFDLHFEQUFELENBQUssSUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FETTtBQUFBO0FBRlYsT0FqQlksRUF5Qlo7QUFDRUQsZ0JBQVEsRUFBRSxRQURaO0FBRUVDLGNBQU0sRUFBRTtBQUFBLGlCQUNOLE1BQUMscURBQUQsQ0FBSyxJQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURNO0FBQUE7QUFGVixPQXpCWSxDQUFkO0FBbUNBLGFBQU9GLEtBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUVJLDREQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFQywyREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscURBQUQ7QUFDRSxZQUFJLEVBQUU7QUFDSkMsZUFBSyxFQUFFLElBREg7QUFFSkMsa0JBQVEsRUFBRSxJQUZOO0FBR0pDLGlCQUFPLEVBQUUsSUFITDtBQUlKQyxrQkFBUSxFQUFFO0FBSk4sU0FEUjtBQU9FLGFBQUssRUFBRSxLQUFLQyxVQUFMLEVBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVpGLENBREYsQ0FERjtBQWtCRDs7OztFQTNEdUJDLCtDOztBQThEWFosMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEZvcm0sIEdyaWQsIE1lbnUsIFRhYiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgZm9ybSwgYm94LCBjaGFuZ2UsIHBhbmUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2Zvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlZmVyZW5jZUZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9SZWZlcmVuY2VcIjtcbmltcG9ydCBDYW1wYWlnbkRldGFpbEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9DYW1wYWlnblwiO1xuaW1wb3J0IE9yZ2FuaXplckZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9Pcmdhbml6ZXJcIjtcbmltcG9ydCBTdWJtaXRGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vU3VibWl0XCI7XG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlckZvcm0oKSB7XG4gICAgY29uc3QgcGFuZXMgPSBbXG4gICAgICB7XG4gICAgICAgIG1lbnVJdGVtOiBcIk9yZ2FuaXplciBJbmZvXCIsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxUYWIuUGFuZT5cbiAgICAgICAgICAgIDxPcmdhbml6ZXJGb3JtIC8+XG4gICAgICAgICAgPC9UYWIuUGFuZT5cbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWVudUl0ZW06IFwiUmVmZXJlbmNlIEluZm9cIixcbiAgICAgICAgcmVuZGVyOiAoKSA9PiAoXG4gICAgICAgICAgPFRhYi5QYW5lIGNsYXNzTmFtZT17cGFuZX0+XG4gICAgICAgICAgICA8UmVmZXJlbmNlRm9ybSAvPlxuICAgICAgICAgIDwvVGFiLlBhbmU+XG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1lbnVJdGVtOiBcIkNhbXBhaWduIERldGFpbFwiLFxuICAgICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgICA8VGFiLlBhbmU+XG4gICAgICAgICAgICA8Q2FtcGFpZ25EZXRhaWxGb3JtIC8+XG4gICAgICAgICAgPC9UYWIuUGFuZT5cbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWVudUl0ZW06IFwiU3VibWl0XCIsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxUYWIuUGFuZT5cbiAgICAgICAgICAgIDxTdWJtaXRGb3JtIC8+XG4gICAgICAgICAgPC9UYWIuUGFuZT5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gcGFuZXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Ym94fT5cbiAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgbWVudT17e1xuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRhYnVsYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0YWNoZWQ6IHRydWVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGFuZXM9e3RoaXMucmVuZGVyRm9ybSgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDE+TmV3IENhbXBhaWduPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTmV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ })

})