webpackHotUpdate_N_E("pages/campaigns/new",{

/***/ "./components/form/Campaign.js":
/*!*************************************!*\
  !*** ./components/form/Campaign.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/m00m/Blockhainlearn/fyp/components/form/Campaign.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar CampaignDetailForm = /*#__PURE__*/function (_Component) {\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CampaignDetailForm, _Component);\n\n  var _super = _createSuper(CampaignDetailForm);\n\n  function CampaignDetailForm(props) {\n    var _this;\n\n    Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, CampaignDetailForm);\n\n    _this = _super.call(this, props);\n    _this.handleChange = _this.handleChange.bind(Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CampaignDetailForm, [{\n    key: \"handleChange\",\n    value: function handleChange(e) {\n      var value = e.target.value;\n      this.props.onChangeValue(Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, value));\n    }\n  }, {\n    key: \"validateCampaign\",\n    value: function validateCampaign() {\n      var formIsValid = false;\n\n      if (typeof this.props.campaignName !== \"undefined\") {\n        if (!this.props.campaignName.match(/^[a-zA-Z]+$/)) {\n          formIsValid = true;\n        }\n      }\n\n      return formIsValid;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 7\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Input, {\n        required: true,\n        label: \"Name of Campaign\",\n        name: \"campaignName\",\n        placeholder: \"Derma Kilat Kedai Burger Saman 50k....\",\n        value: this.props.campaignName,\n        onChange: this.handleChange,\n        error: this.validateCampaign(),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }\n      }, \"Minimum Donation\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        name: \"campaignMinimum\",\n        label: \"wei\",\n        labelPosition: \"right\",\n        value: this.props.campaignMinimum,\n        onChange: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }\n      }, \"Summary of Campaign\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"TextArea\"], {\n        name: \"campaignSummary\",\n        style: {\n          height: \"300px\"\n        },\n        value: this.props.campaignSummary,\n        onChange: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return CampaignDetailForm;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignDetailForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0NhbXBhaWduLmpzPzBjNGEiXSwibmFtZXMiOlsiQ2FtcGFpZ25EZXRhaWxGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwib25DaGFuZ2VWYWx1ZSIsIm5hbWUiLCJmb3JtSXNWYWxpZCIsImNhbXBhaWduTmFtZSIsIm1hdGNoIiwidmFsaWRhdGVDYW1wYWlnbiIsImNhbXBhaWduTWluaW11bSIsImhlaWdodCIsImNhbXBhaWduU3VtbWFyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLGtCOzs7OztBQUNKLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixxS0FBcEI7QUFGaUI7QUFHbEI7Ozs7aUNBRVlDLEMsRUFBRztBQUNkLFVBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQXZCO0FBRUEsV0FBS0osS0FBTCxDQUFXTSxhQUFYLDJKQUNHSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsSUFEWixFQUNtQkgsS0FEbkI7QUFHRDs7O3VDQUVrQjtBQUNqQixVQUFJSSxXQUFXLEdBQUcsS0FBbEI7O0FBQ0EsVUFBSSxPQUFPLEtBQUtSLEtBQUwsQ0FBV1MsWUFBbEIsS0FBbUMsV0FBdkMsRUFBb0Q7QUFDbEQsWUFBSSxDQUFDLEtBQUtULEtBQUwsQ0FBV1MsWUFBWCxDQUF3QkMsS0FBeEIsQ0FBOEIsYUFBOUIsQ0FBTCxFQUFtRDtBQUNqREYscUJBQVcsR0FBRyxJQUFkO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxXQUFQO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQ0UsZ0JBQVEsTUFEVjtBQUVFLGFBQUssRUFBQyxrQkFGUjtBQUdFLFlBQUksRUFBQyxjQUhQO0FBSUUsbUJBQVcsRUFBQyx3Q0FKZDtBQUtFLGFBQUssRUFBRSxLQUFLUixLQUFMLENBQVdTLFlBTHBCO0FBTUUsZ0JBQVEsRUFBRSxLQUFLUixZQU5qQjtBQU9FLGFBQUssRUFBRSxLQUFLVSxnQkFBTCxFQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVdFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksZ0JBQVEsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsWUFBSSxFQUFDLGlCQURQO0FBRUUsYUFBSyxFQUFDLEtBRlI7QUFHRSxxQkFBYSxFQUFDLE9BSGhCO0FBSUUsYUFBSyxFQUFFLEtBQUtYLEtBQUwsQ0FBV1ksZUFKcEI7QUFLRSxnQkFBUSxFQUFFLEtBQUtYLFlBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQVhGLEVBcUJFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLEVBRUUsTUFBQywwREFBRDtBQUNFLFlBQUksRUFBQyxpQkFEUDtBQUVFLGFBQUssRUFBRTtBQUFFWSxnQkFBTSxFQUFFO0FBQVYsU0FGVDtBQUdFLGFBQUssRUFBRSxLQUFLYixLQUFMLENBQVdjLGVBSHBCO0FBSUUsZ0JBQVEsRUFBRSxLQUFLYixZQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FyQkYsQ0FERjtBQWlDRDs7OztFQTFEOEJjLCtDOztBQTZEbEJoQixpRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9ybS9DYW1wYWlnbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0LCBUZXh0QXJlYSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jbGFzcyBDYW1wYWlnbkRldGFpbEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlVmFsdWUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdGVDYW1wYWlnbigpIHtcbiAgICBsZXQgZm9ybUlzVmFsaWQgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY2FtcGFpZ25OYW1lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuY2FtcGFpZ25OYW1lLm1hdGNoKC9eW2EtekEtWl0rJC8pKSB7XG4gICAgICAgIGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybUlzVmFsaWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgbGFiZWw9XCJOYW1lIG9mIENhbXBhaWduXCJcbiAgICAgICAgICBuYW1lPVwiY2FtcGFpZ25OYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlcm1hIEtpbGF0IEtlZGFpIEJ1cmdlciBTYW1hbiA1MGsuLi4uXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jYW1wYWlnbk5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGVycm9yPXt0aGlzLnZhbGlkYXRlQ2FtcGFpZ24oKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8Rm9ybS5GaWVsZCByZXF1aXJlZD5cbiAgICAgICAgICA8bGFiZWw+TWluaW11bSBEb25hdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBuYW1lPVwiY2FtcGFpZ25NaW5pbXVtXCJcbiAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jYW1wYWlnbk1pbmltdW19XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+U3VtbWFyeSBvZiBDYW1wYWlnbjwvbGFiZWw+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICBuYW1lPVwiY2FtcGFpZ25TdW1tYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzMDBweFwiIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jYW1wYWlnblN1bW1hcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkRldGFpbEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/form/Campaign.js\n");

/***/ })

})