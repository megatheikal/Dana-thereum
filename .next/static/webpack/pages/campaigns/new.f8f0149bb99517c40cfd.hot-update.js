webpackHotUpdate_N_E("pages/campaigns/new",{

/***/ "./components/form/Reference.js":
/*!**************************************!*\
  !*** ./components/form/Reference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/m00m/Blockhainlearn/fyp/components/form/Reference.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar ReferenceForm = /*#__PURE__*/function (_Component) {\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ReferenceForm, _Component);\n\n  var _super = _createSuper(ReferenceForm);\n\n  function ReferenceForm(props) {\n    var _this;\n\n    Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ReferenceForm);\n\n    _this = _super.call(this, props);\n    _this.handleChange = _this.handleChange.bind(Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ReferenceForm, [{\n    key: \"handleChange\",\n    value: function handleChange(e) {\n      var value = e.target.value;\n      this.props.onChangeValue(Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, value));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 7\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }\n      }, \"Name\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        name: \"nameReference\",\n        placeholder: \"Ali Naquiddin\",\n        value: this.props.nameReference,\n        onChange: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }\n      }, \"Phone Numbers\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        name: \"phoneReference\",\n        placeholder: \"+601298712311\",\n        value: this.props.phoneReference,\n        onChange: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }\n      }, \"Email\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        placeholder: \"ali-nqi19@yahoo.com\",\n        value: this.state.email,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            email: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }\n      }, \"Link of Social Media\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        placeholder: \"twitter, instagram, facebook\",\n        value: this.state.link,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            link: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return ReferenceForm;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReferenceForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL1JlZmVyZW5jZS5qcz9mZTQwIl0sIm5hbWVzIjpbIlJlZmVyZW5jZUZvcm0iLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJvbkNoYW5nZVZhbHVlIiwibmFtZSIsIm5hbWVSZWZlcmVuY2UiLCJwaG9uZVJlZmVyZW5jZSIsInN0YXRlIiwiZW1haWwiLCJldmVudCIsInNldFN0YXRlIiwibGluayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLGE7Ozs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHFLQUFwQjtBQUZpQjtBQUdsQjs7OztpQ0FFWUMsQyxFQUFHO0FBQ2QsVUFBTUMsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBdkI7QUFFQSxXQUFLSixLQUFMLENBQVdNLGFBQVgsMkpBQ0dILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxJQURaLEVBQ21CSCxLQURuQjtBQUdEOzs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGdCQUFRLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyx1REFBRDtBQUNFLFlBQUksRUFBQyxlQURQO0FBRUUsbUJBQVcsRUFBQyxlQUZkO0FBR0UsYUFBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV1EsYUFIcEI7QUFJRSxnQkFBUSxFQUFFLEtBQUtQLFlBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGLEVBVUUsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxnQkFBUSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFLE1BQUMsdURBQUQ7QUFDRSxZQUFJLEVBQUMsZ0JBRFA7QUFFRSxtQkFBVyxFQUFDLGVBRmQ7QUFHRSxhQUFLLEVBQUUsS0FBS0QsS0FBTCxDQUFXUyxjQUhwQjtBQUlFLGdCQUFRLEVBQUUsS0FBS1IsWUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBVkYsRUFvQkUsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxnQkFBUSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFLE1BQUMsdURBQUQ7QUFDRSxtQkFBVyxFQUFDLHFCQURkO0FBRUUsYUFBSyxFQUFFLEtBQUtTLEtBQUwsQ0FBV0MsS0FGcEI7QUFHRSxnQkFBUSxFQUFFLGtCQUFBQyxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUYsaUJBQUssRUFBRUMsS0FBSyxDQUFDUCxNQUFOLENBQWFEO0FBQXRCLFdBQWQsQ0FBSjtBQUFBLFNBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQXBCRixFQTRCRSxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGdCQUFRLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBRUUsTUFBQyx1REFBRDtBQUNFLG1CQUFXLEVBQUMsOEJBRGQ7QUFFRSxhQUFLLEVBQUUsS0FBS00sS0FBTCxDQUFXSSxJQUZwQjtBQUdFLGdCQUFRLEVBQUUsa0JBQUFGLEtBQUs7QUFBQSxpQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxnQkFBSSxFQUFFRixLQUFLLENBQUNQLE1BQU4sQ0FBYUQ7QUFBckIsV0FBZCxDQUFKO0FBQUEsU0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBNUJGLENBREY7QUF1Q0Q7Ozs7RUFyRHlCVywrQzs7QUF3RGJoQiw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9ybS9SZWZlcmVuY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jbGFzcyBSZWZlcmVuY2VGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZVZhbHVlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb3JtLkZpZWxkIHJlcXVpcmVkPlxuICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lUmVmZXJlbmNlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWxpIE5hcXVpZGRpblwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5uYW1lUmVmZXJlbmNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQgcmVxdWlyZWQ+XG4gICAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcnM8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbmFtZT1cInBob25lUmVmZXJlbmNlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzYwMTI5ODcxMjMxMVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5waG9uZVJlZmVyZW5jZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgPEZvcm0uRmllbGQgcmVxdWlyZWQ+XG4gICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWxpLW5xaTE5QHlhaG9vLmNvbVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkIHJlcXVpcmVkPlxuICAgICAgICAgIDxsYWJlbD5MaW5rIG9mIFNvY2lhbCBNZWRpYTwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInR3aXR0ZXIsIGluc3RhZ3JhbSwgZmFjZWJvb2tcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlua31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbGluazogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/form/Reference.js\n");

/***/ })

})