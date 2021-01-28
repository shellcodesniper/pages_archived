webpackHotUpdate_N_E("pages/register",{

/***/ "./components/utils/Common.tsx":
/*!*************************************!*\
  !*** ./components/utils/Common.tsx ***!
  \*************************************/
/*! exports provided: Coloring, InputText, InputTextAreaProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Coloring\", function() { return Coloring; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputText\", function() { return InputText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputTextAreaProps\", function() { return InputTextAreaProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Volumes/Storage/A_WorkSpace/B_Personal/KUUWANG_HOMEPAGE/components/utils/Common.tsx\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar Coloring = function Coloring(color) {\n  return {\n    color: color\n  };\n};\n\n_c = Coloring;\n\nvar InputText = function InputText(props) {\n  return __jsx(\"div\", {\n    className: \"mb-1 mt-3 px-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"label\", {\n    htmlFor: props.id,\n    className: \"form-label text-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, props.labelText), __jsx(\"input\", {\n    type: props.type ? props.type : \"text\",\n    name: props.id,\n    className: \"form-control\",\n    id: props.id,\n    \"aria-describedby\": \"\".concat(props.id, \"_Help\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), typeof props.helpText === 'string' && __jsx(\"div\", {\n    id: \"\".concat(props.id, \"_Help\"),\n    className: \"form-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, props.helpText));\n};\n\n_c2 = InputText;\n\nvar InputTextAreaProps = function InputTextAreaProps(props) {\n  return __jsx(\"div\", {\n    className: \"mb-1 mt-3 px-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"label\", {\n    htmlFor: props.id,\n    className: \"form-label text-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, props.labelText), __jsx(\"textarea\", {\n    className: \"form-control\",\n    id: props.id,\n    rows: props.showRowNumber ? props.showRowNumber : 5,\n    name: props.id,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, props.defaultText));\n};\n\n_c3 = InputTextAreaProps;\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Coloring\");\n$RefreshReg$(_c2, \"InputText\");\n$RefreshReg$(_c3, \"InputTextAreaProps\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy9Db21tb24udHN4PzYyNmMiXSwibmFtZXMiOlsiQ29sb3JpbmciLCJjb2xvciIsIklucHV0VGV4dCIsInByb3BzIiwiaWQiLCJsYWJlbFRleHQiLCJ0eXBlIiwiaGVscFRleHQiLCJJbnB1dFRleHRBcmVhUHJvcHMiLCJzaG93Um93TnVtYmVyIiwiZGVmYXVsdFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQWEsR0FBRyxTQUFoQkEsUUFBZ0IsQ0FBQ0MsS0FBRCxFQUFvQjtBQUN4QyxTQUFPO0FBQUVBLFNBQUssRUFBTEE7QUFBRixHQUFQO0FBQ0QsQ0FGRDs7S0FBTUQsUTs7QUFVTixJQUFNRSxTQUE0QyxHQUFHLFNBQS9DQSxTQUErQyxDQUFDQyxLQUFELEVBQTJCO0FBRTlFLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFFQSxLQUFLLENBQUNDLEVBQXRCO0FBQTBCLGFBQVMsRUFBQyxzQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0REQsS0FBSyxDQUFDRSxTQUFsRSxDQURGLEVBRUU7QUFBTyxRQUFJLEVBQUVGLEtBQUssQ0FBQ0csSUFBTixHQUFhSCxLQUFLLENBQUNHLElBQW5CLEdBQTBCLE1BQXZDO0FBQStDLFFBQUksRUFBRUgsS0FBSyxDQUFDQyxFQUEzRDtBQUErRCxhQUFTLEVBQUMsY0FBekU7QUFBd0YsTUFBRSxFQUFFRCxLQUFLLENBQUNDLEVBQWxHO0FBQXNHLGtDQUFxQkQsS0FBSyxDQUFDQyxFQUEzQixVQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHSSxPQUFPRCxLQUFLLENBQUNJLFFBQWIsS0FBMEIsUUFBMUIsSUFDQTtBQUFLLE1BQUUsWUFBS0osS0FBSyxDQUFDQyxFQUFYLFVBQVA7QUFBNkIsYUFBUyxFQUFDLFdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0RELEtBQUssQ0FBQ0ksUUFBMUQsQ0FKSixDQURGO0FBU0QsQ0FYRDs7TUFBTUwsUzs7QUFxQk4sSUFBTU0sa0JBQXlELEdBQUcsU0FBNURBLGtCQUE0RCxDQUFDTCxLQUFELEVBQStCO0FBRS9GLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFFQSxLQUFLLENBQUNDLEVBQXRCO0FBQTBCLGFBQVMsRUFBQyxzQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0REQsS0FBSyxDQUFDRSxTQUFsRSxDQURGLEVBRUU7QUFBVSxhQUFTLEVBQUMsY0FBcEI7QUFBbUMsTUFBRSxFQUFFRixLQUFLLENBQUNDLEVBQTdDO0FBQWlELFFBQUksRUFBRUQsS0FBSyxDQUFDTSxhQUFOLEdBQXNCTixLQUFLLENBQUNNLGFBQTVCLEdBQTRDLENBQW5HO0FBQXNHLFFBQUksRUFBRU4sS0FBSyxDQUFDQyxFQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVIRCxLQUFLLENBQUNPLFdBQTdILENBRkYsQ0FERjtBQU1ELENBUkQ7O01BQU1GLGtCO0FBU04iLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWxzL0NvbW1vbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ29sb3Jpbmc6IGFueSA9IChjb2xvcjogc3RyaW5nICkgPT4ge1xuICByZXR1cm4geyBjb2xvciB9XG59O1xuXG5pbnRlcmZhY2UgSW5wdXRUZXh0UHJvcHMge1xuICBpZDogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBsYWJlbFRleHQ6IHN0cmluZztcbiAgaGVscFRleHQ/OiBzdHJpbmc7XG59XG5jb25zdCBJbnB1dFRleHQ6IEZ1bmN0aW9uQ29tcG9uZW50PElucHV0VGV4dFByb3BzPiA9IChwcm9wczogSW5wdXRUZXh0UHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xIG10LTMgcHgtM1wiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlkfSBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHRleHQtYm9sZFwiPntwcm9wcy5sYWJlbFRleHR9PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPXtwcm9wcy50eXBlID8gcHJvcHMudHlwZSA6IFwidGV4dFwifSBuYW1lPXtwcm9wcy5pZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9e3Byb3BzLmlkfSBhcmlhLWRlc2NyaWJlZGJ5PXtgJHtwcm9wcy5pZH1fSGVscGB9IC8+XG4gICAgICB7IHR5cGVvZiBwcm9wcy5oZWxwVGV4dCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgPGRpdiBpZD17YCR7cHJvcHMuaWR9X0hlbHBgfSBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj57cHJvcHMuaGVscFRleHR9PC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuaW50ZXJmYWNlIElucHV0VGV4dEFyZWFQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsVGV4dDogc3RyaW5nO1xuICBzaG93Um93TnVtYmVyPzogbnVtYmVyO1xuICBoZWxwVGV4dD86IHN0cmluZztcbiAgZGVmYXVsdFRleHQ/OiBzdHJpbmdcbn1cblxuY29uc3QgSW5wdXRUZXh0QXJlYVByb3BzOiBGdW5jdGlvbkNvbXBvbmVudDxJbnB1dFRleHRBcmVhUHJvcHM+ID0gKHByb3BzOiBJbnB1dFRleHRBcmVhUHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xIG10LTMgcHgtM1wiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlkfSBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHRleHQtYm9sZFwiPntwcm9wcy5sYWJlbFRleHR9PC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17cHJvcHMuaWR9IHJvd3M9e3Byb3BzLnNob3dSb3dOdW1iZXIgPyBwcm9wcy5zaG93Um93TnVtYmVyIDogNX0gbmFtZT17cHJvcHMuaWR9Pntwcm9wcy5kZWZhdWx0VGV4dH08L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgeyBDb2xvcmluZywgSW5wdXRUZXh0LCBJbnB1dFRleHRBcmVhUHJvcHMgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/utils/Common.tsx\n");

/***/ })

})