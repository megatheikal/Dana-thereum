webpackHotUpdate_N_E("pages/campaigns/new",{

/***/ "./components/form/Reference.js":
/*!**************************************!*\
  !*** ./components/form/Reference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/m00m/Blockhainlearn/fyp/components/form/Reference.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar ReferenceForm = /*#__PURE__*/function (_Component) {\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ReferenceForm, _Component);\n\n  var _super = _createSuper(ReferenceForm);\n\n  function ReferenceForm(props) {\n    var _this;\n\n    Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ReferenceForm);\n\n    _this = _super.call(this, props);\n    _this.handleChange = _this.handleChange.bind(Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ReferenceForm, [{\n    key: \"handleChange\",\n    value: function handleChange(e) {\n      var value = e.target.value;\n      this.props.onChangeValue(Object(_home_m00m_Blockhainlearn_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, value));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 7\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }\n      }, \"Name\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        name: \"nameReference\",\n        placeholder: \"Ali Naquiddin\",\n        value: this.props.nameReference,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            name: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }\n      }, \"Phone Numbers\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        placeholder: \"+601298712311\",\n        value: this.state.phoneNumbers,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            phoneNumbers: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      }, \"Email\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        placeholder: \"ali-nqi19@yahoo.com\",\n        value: this.state.email,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            email: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }\n      }, \"Link of Social Media\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        placeholder: \"twitter, instagram, facebook\",\n        value: this.state.link,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            link: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return ReferenceForm;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReferenceForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL1JlZmVyZW5jZS5qcz9mZTQwIl0sIm5hbWVzIjpbIlJlZmVyZW5jZUZvcm0iLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJvbkNoYW5nZVZhbHVlIiwibmFtZSIsIm5hbWVSZWZlcmVuY2UiLCJldmVudCIsInNldFN0YXRlIiwic3RhdGUiLCJwaG9uZU51bWJlcnMiLCJlbWFpbCIsImxpbmsiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxhOzs7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixxS0FBcEI7QUFGaUI7QUFHbEI7Ozs7aUNBRVlDLEMsRUFBRztBQUNkLFVBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQXZCO0FBRUEsV0FBS0osS0FBTCxDQUFXTSxhQUFYLDJKQUNHSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsSUFEWixFQUNtQkgsS0FEbkI7QUFHRDs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxnQkFBUSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsdURBQUQ7QUFDRSxZQUFJLEVBQUMsZUFEUDtBQUVFLG1CQUFXLEVBQUMsZUFGZDtBQUdFLGFBQUssRUFBRSxLQUFLSixLQUFMLENBQVdRLGFBSHBCO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQUMsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVILGdCQUFJLEVBQUVFLEtBQUssQ0FBQ0osTUFBTixDQUFhRDtBQUFyQixXQUFkLENBQUo7QUFBQSxTQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERixFQVVFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksZ0JBQVEsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsbUJBQVcsRUFBQyxlQURkO0FBRUUsYUFBSyxFQUFFLEtBQUtPLEtBQUwsQ0FBV0MsWUFGcEI7QUFHRSxnQkFBUSxFQUFFLGtCQUFBSCxLQUFLO0FBQUEsaUJBQ2IsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUUsd0JBQVksRUFBRUgsS0FBSyxDQUFDSixNQUFOLENBQWFEO0FBQTdCLFdBQWQsQ0FEYTtBQUFBLFNBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQVZGLEVBcUJFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksZ0JBQVEsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsbUJBQVcsRUFBQyxxQkFEZDtBQUVFLGFBQUssRUFBRSxLQUFLTyxLQUFMLENBQVdFLEtBRnBCO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQUosS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVHLGlCQUFLLEVBQUVKLEtBQUssQ0FBQ0osTUFBTixDQUFhRDtBQUF0QixXQUFkLENBQUo7QUFBQSxTQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FyQkYsRUE2QkUsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxnQkFBUSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFLE1BQUMsdURBQUQ7QUFDRSxtQkFBVyxFQUFDLDhCQURkO0FBRUUsYUFBSyxFQUFFLEtBQUtPLEtBQUwsQ0FBV0csSUFGcEI7QUFHRSxnQkFBUSxFQUFFLGtCQUFBTCxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUksZ0JBQUksRUFBRUwsS0FBSyxDQUFDSixNQUFOLENBQWFEO0FBQXJCLFdBQWQsQ0FBSjtBQUFBLFNBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQTdCRixDQURGO0FBd0NEOzs7O0VBdER5QlcsK0M7O0FBeURiaEIsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm0vUmVmZXJlbmNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuY2xhc3MgUmVmZXJlbmNlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2VWYWx1ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybS5GaWVsZCByZXF1aXJlZD5cbiAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBuYW1lPVwibmFtZVJlZmVyZW5jZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFsaSBOYXF1aWRkaW5cIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMubmFtZVJlZmVyZW5jZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQgcmVxdWlyZWQ+XG4gICAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcnM8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNjAxMjk4NzEyMzExXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGhvbmVOdW1iZXJzOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgPEZvcm0uRmllbGQgcmVxdWlyZWQ+XG4gICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWxpLW5xaTE5QHlhaG9vLmNvbVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkIHJlcXVpcmVkPlxuICAgICAgICAgIDxsYWJlbD5MaW5rIG9mIFNvY2lhbCBNZWRpYTwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInR3aXR0ZXIsIGluc3RhZ3JhbSwgZmFjZWJvb2tcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlua31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbGluazogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/form/Reference.js\n");

/***/ })

})