webpackHotUpdate_N_E("pages/campaigns/new",{

/***/ "./components/form/Campaign.js":
/*!*************************************!*\
  !*** ./components/form/Campaign.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/m00m/Blockhainlearn/fyp/components/form/Campaign.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar CampaignDetailForm = /*#__PURE__*/function (_Component) {\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CampaignDetailForm, _Component);\n\n  var _super = _createSuper(CampaignDetailForm);\n\n  function CampaignDetailForm(props) {\n    var _this;\n\n    Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, CampaignDetailForm);\n\n    _this = _super.call(this, props);\n    _this.handleChange = _this.handleChange.bind(Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CampaignDetailForm, [{\n    key: \"handleChange\",\n    value: function handleChange(e) {\n      var value = e.target.value;\n      this.props.onChangeValue(Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, value));\n    }\n  }, {\n    key: \"validateCampaign\",\n    value: function validateCampaign() {\n      var formIsValid = false;\n\n      if (typeof this.props.campaignName !== \"undefined\") {\n        if (!this.props.campaignName.match(/^[a-zA-Z]+$/)) {\n          formIsValid = true;\n          errors = \"Please huhuhuh the name correctly\";\n        }\n      }\n\n      return formIsValid;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 7\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Input, {\n        required: true,\n        label: \"Name of Campaign\",\n        name: \"campaignName\",\n        placeholder: \"Derma Kilat Kedai Burger Saman 50k....\",\n        value: this.props.campaignName,\n        onChange: this.handleChange,\n        error: this.validateCampaign(),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }\n      }, \"Minimum Donation\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        name: \"campaignMinimum\",\n        label: \"wei\",\n        labelPosition: \"right\",\n        value: this.props.campaignMinimum,\n        onChange: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }\n      }, \"Summary of Campaign\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"TextArea\"], {\n        name: \"campaignSummary\",\n        style: {\n          height: \"300px\"\n        },\n        value: this.props.campaignSummary,\n        onChange: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return CampaignDetailForm;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignDetailForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0NhbXBhaWduLmpzPzBjNGEiXSwibmFtZXMiOlsiQ2FtcGFpZ25EZXRhaWxGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwib25DaGFuZ2VWYWx1ZSIsIm5hbWUiLCJmb3JtSXNWYWxpZCIsImNhbXBhaWduTmFtZSIsIm1hdGNoIiwiZXJyb3JzIiwidmFsaWRhdGVDYW1wYWlnbiIsImNhbXBhaWduTWluaW11bSIsImhlaWdodCIsImNhbXBhaWduU3VtbWFyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLGtCOzs7OztBQUNKLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixxS0FBcEI7QUFGaUI7QUFHbEI7Ozs7aUNBRVlDLEMsRUFBRztBQUNkLFVBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQXZCO0FBRUEsV0FBS0osS0FBTCxDQUFXTSxhQUFYLDJKQUNHSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsSUFEWixFQUNtQkgsS0FEbkI7QUFHRDs7O3VDQUVrQjtBQUNqQixVQUFJSSxXQUFXLEdBQUcsS0FBbEI7O0FBQ0EsVUFBSSxPQUFPLEtBQUtSLEtBQUwsQ0FBV1MsWUFBbEIsS0FBbUMsV0FBdkMsRUFBb0Q7QUFDbEQsWUFBSSxDQUFDLEtBQUtULEtBQUwsQ0FBV1MsWUFBWCxDQUF3QkMsS0FBeEIsQ0FBOEIsYUFBOUIsQ0FBTCxFQUFtRDtBQUNqREYscUJBQVcsR0FBRyxJQUFkO0FBQ0FHLGdCQUFNLEdBQUcsbUNBQVQ7QUFDRDtBQUNGOztBQUVELGFBQU9ILFdBQVA7QUFDRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFDRSxnQkFBUSxNQURWO0FBRUUsYUFBSyxFQUFDLGtCQUZSO0FBR0UsWUFBSSxFQUFDLGNBSFA7QUFJRSxtQkFBVyxFQUFDLHdDQUpkO0FBS0UsYUFBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1MsWUFMcEI7QUFNRSxnQkFBUSxFQUFFLEtBQUtSLFlBTmpCO0FBT0UsYUFBSyxFQUFFLEtBQUtXLGdCQUFMLEVBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBV0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxnQkFBUSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUVFLE1BQUMsdURBQUQ7QUFDRSxZQUFJLEVBQUMsaUJBRFA7QUFFRSxhQUFLLEVBQUMsS0FGUjtBQUdFLHFCQUFhLEVBQUMsT0FIaEI7QUFJRSxhQUFLLEVBQUUsS0FBS1osS0FBTCxDQUFXYSxlQUpwQjtBQUtFLGdCQUFRLEVBQUUsS0FBS1osWUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBWEYsRUFxQkUsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsRUFFRSxNQUFDLDBEQUFEO0FBQ0UsWUFBSSxFQUFDLGlCQURQO0FBRUUsYUFBSyxFQUFFO0FBQUVhLGdCQUFNLEVBQUU7QUFBVixTQUZUO0FBR0UsYUFBSyxFQUFFLEtBQUtkLEtBQUwsQ0FBV2UsZUFIcEI7QUFJRSxnQkFBUSxFQUFFLEtBQUtkLFlBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQXJCRixDQURGO0FBaUNEOzs7O0VBM0Q4QmUsK0M7O0FBOERsQmpCLGlGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb3JtL0NhbXBhaWduLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIFRleHRBcmVhIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmNsYXNzIENhbXBhaWduRGV0YWlsRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2VWYWx1ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUNhbXBhaWduKCkge1xuICAgIGxldCBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jYW1wYWlnbk5hbWUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jYW1wYWlnbk5hbWUubWF0Y2goL15bYS16QS1aXSskLykpIHtcbiAgICAgICAgZm9ybUlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBlcnJvcnMgPSBcIlBsZWFzZSBodWh1aHVoIHRoZSBuYW1lIGNvcnJlY3RseVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtSXNWYWxpZDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBsYWJlbD1cIk5hbWUgb2YgQ2FtcGFpZ25cIlxuICAgICAgICAgIG5hbWU9XCJjYW1wYWlnbk5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVybWEgS2lsYXQgS2VkYWkgQnVyZ2VyIFNhbWFuIDUway4uLi5cIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNhbXBhaWduTmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZXJyb3I9e3RoaXMudmFsaWRhdGVDYW1wYWlnbigpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxGb3JtLkZpZWxkIHJlcXVpcmVkPlxuICAgICAgICAgIDxsYWJlbD5NaW5pbXVtIERvbmF0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJjYW1wYWlnbk1pbmltdW1cIlxuICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNhbXBhaWduTWluaW11bX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5TdW1tYXJ5IG9mIENhbXBhaWduPC9sYWJlbD5cbiAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgIG5hbWU9XCJjYW1wYWlnblN1bW1hcnlcIlxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwMHB4XCIgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNhbXBhaWduU3VtbWFyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduRGV0YWlsRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/form/Campaign.js\n");

/***/ })

})