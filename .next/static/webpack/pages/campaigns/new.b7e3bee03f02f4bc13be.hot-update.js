webpackHotUpdate_N_E("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/form.module.css */ \"./styles/form.module.css\");\n/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_form_Reference__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/form/Reference */ \"./components/form/Reference.js\");\n/* harmony import */ var _components_form_Campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/form/Campaign */ \"./components/form/Campaign.js\");\n/* harmony import */ var _components_form_Organizer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/form/Organizer */ \"./components/form/Organizer.js\");\n/* harmony import */ var _components_form_Submit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/form/Submit */ \"./components/form/Submit.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/m00m/Blockhainlearn/fyp/pages/campaigns/new.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar CampaignNew = /*#__PURE__*/function (_Component) {\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CampaignNew, _Component);\n\n  var _super = _createSuper(CampaignNew);\n\n  function CampaignNew() {\n    Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CampaignNew);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CampaignNew, [{\n    key: \"renderForm\",\n    value: function renderForm() {\n      var _this = this;\n\n      var panes = [{\n        menuItem: \"Organizer Info\",\n        render: function render() {\n          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"].Pane, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 11\n            }\n          }, __jsx(_components_form_Organizer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 13\n            }\n          }));\n        }\n      }, {\n        menuItem: \"Reference Info\",\n        render: function render() {\n          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"].Pane, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 11\n            }\n          }, __jsx(_components_form_Reference__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 13\n            }\n          }));\n        }\n      }, {\n        menuItem: \"Campaign Detail\",\n        render: function render() {\n          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"].Pane, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 11\n            }\n          }, __jsx(_components_form_Campaign__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 13\n            }\n          }));\n        }\n      }, {\n        menuItem: \"Submit\",\n        render: function render() {\n          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"].Pane, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 11\n            }\n          }, __jsx(_components_form_Submit__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 13\n            }\n          }));\n        }\n      }];\n      return panes;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__[\"form\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_8__[\"box\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__[\"Tab\"], {\n        menu: {\n          fluid: true,\n          vertical: true,\n          tabular: true\n        },\n        panes: this.renderForm(),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }\n      }, \"New Campaign\")));\n    }\n  }]);\n\n  return CampaignNew;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lOGQyIl0sIm5hbWVzIjpbIkNhbXBhaWduTmV3IiwicGFuZXMiLCJtZW51SXRlbSIsInJlbmRlciIsImZvcm0iLCJib3giLCJmbHVpZCIsInZlcnRpY2FsIiwidGFidWxhciIsInJlbmRlckZvcm0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxXOzs7Ozs7Ozs7Ozs7O2lDQUNTO0FBQUE7O0FBQ1gsVUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsZ0JBQVEsRUFBRSxnQkFEWjtBQUVFQyxjQUFNLEVBQUU7QUFBQSxpQkFDTixNQUFDLHFEQUFELENBQUssSUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FETTtBQUFBO0FBRlYsT0FEWSxFQVNaO0FBQ0VELGdCQUFRLEVBQUUsZ0JBRFo7QUFFRUMsY0FBTSxFQUFFO0FBQUEsaUJBQ04sTUFBQyxxREFBRCxDQUFLLElBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRE07QUFBQTtBQUZWLE9BVFksRUFpQlo7QUFDRUQsZ0JBQVEsRUFBRSxpQkFEWjtBQUVFQyxjQUFNLEVBQUU7QUFBQSxpQkFDTixNQUFDLHFEQUFELENBQUssSUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FETTtBQUFBO0FBRlYsT0FqQlksRUF5Qlo7QUFDRUQsZ0JBQVEsRUFBRSxRQURaO0FBRUVDLGNBQU0sRUFBRTtBQUFBLGlCQUNOLE1BQUMscURBQUQsQ0FBSyxJQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURNO0FBQUE7QUFGVixPQXpCWSxDQUFkO0FBbUNBLGFBQU9GLEtBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUVHLDREQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFQywyREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscURBQUQ7QUFDRSxZQUFJLEVBQUU7QUFBRUMsZUFBSyxFQUFFLElBQVQ7QUFBZUMsa0JBQVEsRUFBRSxJQUF6QjtBQUErQkMsaUJBQU8sRUFBRTtBQUF4QyxTQURSO0FBRUUsYUFBSyxFQUFFLEtBQUtDLFVBQUwsRUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEYsQ0FERixDQURGO0FBYUQ7Ozs7RUF0RHVCQywrQzs7QUF5RFhWLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBGb3JtLCBHcmlkLCBNZW51LCBUYWIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IGZvcm0sIGJveCwgY2hhbmdlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9mb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWZlcmVuY2VGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vUmVmZXJlbmNlXCI7XG5pbXBvcnQgQ2FtcGFpZ25EZXRhaWxGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vQ2FtcGFpZ25cIjtcbmltcG9ydCBPcmdhbml6ZXJGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vT3JnYW5pemVyXCI7XG5pbXBvcnQgU3VibWl0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JtL1N1Ym1pdFwiO1xuY2xhc3MgQ2FtcGFpZ25OZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJGb3JtKCkge1xuICAgIGNvbnN0IHBhbmVzID0gW1xuICAgICAge1xuICAgICAgICBtZW51SXRlbTogXCJPcmdhbml6ZXIgSW5mb1wiLFxuICAgICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgICA8VGFiLlBhbmU+XG4gICAgICAgICAgICA8T3JnYW5pemVyRm9ybSAvPlxuICAgICAgICAgIDwvVGFiLlBhbmU+XG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1lbnVJdGVtOiBcIlJlZmVyZW5jZSBJbmZvXCIsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxUYWIuUGFuZT5cbiAgICAgICAgICAgIDxSZWZlcmVuY2VGb3JtIC8+XG4gICAgICAgICAgPC9UYWIuUGFuZT5cbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWVudUl0ZW06IFwiQ2FtcGFpZ24gRGV0YWlsXCIsXG4gICAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICAgIDxUYWIuUGFuZT5cbiAgICAgICAgICAgIDxDYW1wYWlnbkRldGFpbEZvcm0gLz5cbiAgICAgICAgICA8L1RhYi5QYW5lPlxuICAgICAgICApXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtZW51SXRlbTogXCJTdWJtaXRcIixcbiAgICAgICAgcmVuZGVyOiAoKSA9PiAoXG4gICAgICAgICAgPFRhYi5QYW5lPlxuICAgICAgICAgICAgPFN1Ym1pdEZvcm0gLz5cbiAgICAgICAgICA8L1RhYi5QYW5lPlxuICAgICAgICApXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybiBwYW5lcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtib3h9PlxuICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICBtZW51PXt7IGZsdWlkOiB0cnVlLCB2ZXJ0aWNhbDogdHJ1ZSwgdGFidWxhcjogdHJ1ZSB9fVxuICAgICAgICAgICAgICBwYW5lcz17dGhpcy5yZW5kZXJGb3JtKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMT5OZXcgQ2FtcGFpZ248L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25OZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ })

})