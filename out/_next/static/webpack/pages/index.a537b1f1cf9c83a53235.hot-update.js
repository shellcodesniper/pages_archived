webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/Top.tsx":
/*!***********************************!*\
  !*** ./components/shared/Top.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Volumes/Storage/A_WorkSpace/B_Personal/KUUWANG_HOMEPAGE/components/shared/Top.tsx\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n;\n\nvar isActive = function isActive(active, className) {\n  return active ? \"nav-link active \".concat(className) : \"nav-link \".concat(className);\n};\n\nvar topNavbar = function topNavbar(props) {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \"navbar transparent navbar-expand-lg d-block d-sm-block d-lg-none navbar-dark rounded nav-mobile\",\n    \"aria-label\": \"SANDMOOD\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container-fluid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar w-100 order-1 order-md-0 dual-collapse2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"navbar-brand\",\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/images/profile.png\",\n    className: \"logo_top\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 50\n    }\n  })), __jsx(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"slide-collapse\",\n    \"aria-expanded\": \"false\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"navbar-toggler-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarMobile1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    className: \"navbar-nav me-auto mb-2 mb-lg-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: isActive(props.currentPage === '/'),\n    \"aria-current\": \"page\",\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 19\n    }\n  }, \"HOME\")), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: isActive(props.currentPage === 'about'),\n    \"aria-current\": \"page\",\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 19\n    }\n  }, \"ABOUT\")), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: isActive(props.currentPage === 'register'),\n    \"aria-current\": \"page\",\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 19\n    }\n  }, \"\\uC11C\\uBE44\\uC2A4 \\uC0AC\\uC6A9\\uC2E0\\uCCAD\")))), __jsx(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarMobile2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    className: \"nav navbar-nav navbar-mla\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    href: props.isLoggedIn ? '/member/login' : '/member/logout',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 19\n    }\n  }, props.isLoggedIn ? 'LOGIN' : 'LOGOUT')), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: isActive(props.currentPage === 'mypage'),\n    href: \"/member/mypage\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 19\n    }\n  }, \"MYPAGE\"))))))), __jsx(\"nav\", {\n    className: \"navbar transparent navbar-expand-lg navbar-dark mt-2 mb-3 rounded d-none d-lg-block\",\n    \"aria-label\": \"SANDMOOD\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container-fluid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"navbar-brand\",\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"logo_top\",\n    src: \"/static/images/profile.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 50\n    }\n  })), __jsx(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-bs-toggle\": \"collapse\",\n    \"data-bs-target\": \"#navbarPC\",\n    \"aria-controls\": \"navbarPC\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"navbar-toggler-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"collapse navbar-collapse text-white\",\n    id: \"navbarPC\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    className: \"navbar-nav me-auto mb-2 mb-lg-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: isActive(props.currentPage === '/'),\n    \"aria-current\": \"page\",\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 19\n    }\n  }, \"HOME\")), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: isActive(props.currentPage === 'about'),\n    \"aria-current\": \"page\",\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 19\n    }\n  }, \"ABOUT\")), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: isActive(props.currentPage === 'register'),\n    \"aria-current\": \"page\",\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 19\n    }\n  }, \"\\uC11C\\uBE44\\uC2A4 \\uC0AC\\uC6A9\\uC2E0\\uCCAD\")))), __jsx(\"div\", {\n    className: \"navbar-collapse collapse\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    className: \"nav navbar-nav navbar-mla\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    href: props.isLoggedIn ? '/member/login' : '/member/logout',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 19\n    }\n  }, props.isLoggedIn ? 'LOGIN' : 'LOGOUT')), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: isActive(props.currentPage === 'mypage'),\n    href: \"/member/mypage\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 19\n    }\n  }, \"MYPAGE\"))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (topNavbar);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvVG9wLnRzeD80MDNlIl0sIm5hbWVzIjpbImlzQWN0aXZlIiwiYWN0aXZlIiwiY2xhc3NOYW1lIiwidG9wTmF2YmFyIiwicHJvcHMiLCJjdXJyZW50UGFnZSIsImlzTG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0M7O0FBRUQsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFrQkMsU0FBbEIsRUFBaUQ7QUFDaEUsU0FBT0QsTUFBTSw2QkFDVUMsU0FEVix1QkFFR0EsU0FGSCxDQUFiO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQStCO0FBQy9DLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlHQUFmO0FBQWlILGtCQUFXLFVBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBNEIsUUFBSSxFQUFDLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUM7QUFBSyxPQUFHLEVBQUMsNEJBQVQ7QUFBc0MsYUFBUyxFQUFDLFVBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckMsQ0FERixFQUVFO0FBQVEsYUFBUyxFQUFDLGdCQUFsQjtBQUFtQyxRQUFJLEVBQUMsUUFBeEM7QUFBaUQsbUJBQVksZ0JBQTdEO0FBQThFLHFCQUFjLE9BQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUwsUUFBUSxDQUFDSSxLQUFLLENBQUNDLFdBQU4sS0FBcUIsVUFBdEIsQ0FBdEI7QUFBeUQsb0JBQWEsTUFBdEU7QUFBNkUsUUFBSSxFQUFDLFdBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBREYsQ0FQRixDQURGLENBTkYsRUE2QkU7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLDJCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQXdCLFFBQUksRUFBRUQsS0FBSyxDQUFDRSxVQUFOLEdBQW1CLGVBQW5CLEdBQXFDLGdCQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVGRixLQUFLLENBQUNFLFVBQU4sR0FBbUIsT0FBbkIsR0FBNkIsUUFBcEgsQ0FERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVOLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDQyxXQUFOLEtBQXFCLFFBQXRCLENBQXRCO0FBQXVELFFBQUksRUFBQyxnQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBSkYsQ0FERixDQTdCRixDQURGLENBREYsQ0EvQ0YsQ0FERjtBQStGRCxDQWhHRDs7QUFtR2VGLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaGFyZWQvVG9wLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBpbnRlcmZhY2VUb3BOYXZiYXIge1xuICBpc0xvZ2dlZEluOiBib29sZWFuO1xuICBjdXJyZW50UGFnZTogc3RyaW5nO1xufTtcblxuY29uc3QgaXNBY3RpdmUgPSAoYWN0aXZlOiBib29sZWFuLCBjbGFzc05hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gYWN0aXZlXG4gICAgPyBgbmF2LWxpbmsgYWN0aXZlICR7Y2xhc3NOYW1lfWBcbiAgICA6IGBuYXYtbGluayAke2NsYXNzTmFtZX1gO1xufVxuXG5jb25zdCB0b3BOYXZiYXIgPSAocHJvcHM6IGludGVyZmFjZVRvcE5hdmJhcikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciB0cmFuc3BhcmVudCBuYXZiYXItZXhwYW5kLWxnIGQtYmxvY2sgZC1zbS1ibG9jayBkLWxnLW5vbmUgbmF2YmFyLWRhcmsgcm91bmRlZCBuYXYtbW9iaWxlXCIgYXJpYS1sYWJlbD1cIlNBTkRNT09EXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgdy0xMDAgb3JkZXItMSBvcmRlci1tZC0wIGR1YWwtY29sbGFwc2UyXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvcHJvZmlsZS5wbmdcIiBjbGFzc05hbWU9XCJsb2dvX3RvcFwiPjwvaW1nPjwvYT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJzbGlkZS1jb2xsYXBzZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJNb2JpbGUxXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1lLWF1dG8gbWItMiBtYi1sZy0wXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2lzQWN0aXZlKHByb3BzLmN1cnJlbnRQYWdlID09PScvJyl9IGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiL1wiPkhPTUU8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNBY3RpdmUocHJvcHMuY3VycmVudFBhZ2UgPT09J2Fib3V0Jyl9IGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiL2Fib3V0XCI+QUJPVVQ8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNBY3RpdmUocHJvcHMuY3VycmVudFBhZ2UgPT09J3JlZ2lzdGVyJyl9IGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiL3JlZ2lzdGVyXCI+7ISc67mE7IqkIOyCrOyaqeyLoOyyrTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG57LypcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duXCIgaWQ9XCJkcm9wZG93bl9vdXRlclwiIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj50ZXN0PC9hPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bl9vdXRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWJvdXQvdGVzMnRcIj50ZXN0MjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWJvdXQvdGVzdFwiPnRlc3Q8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiovfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJNb2JpbGUyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItbWxhXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPXtwcm9wcy5pc0xvZ2dlZEluID8gJy9tZW1iZXIvbG9naW4nIDogJy9tZW1iZXIvbG9nb3V0J30+eyBwcm9wcy5pc0xvZ2dlZEluID8gJ0xPR0lOJyA6ICdMT0dPVVQnIH08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNBY3RpdmUocHJvcHMuY3VycmVudFBhZ2UgPT09J215cGFnZScpfSBocmVmPVwiL21lbWJlci9teXBhZ2VcIj5NWVBBR0U8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciB0cmFuc3BhcmVudCBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIG10LTIgbWItMyByb3VuZGVkIGQtbm9uZSBkLWxnLWJsb2NrXCIgYXJpYS1sYWJlbD1cIlNBTkRNT09EXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2Ugdy0xMDAgb3JkZXItMSBvcmRlci1tZC0wIGR1YWwtY29sbGFwc2UyXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPjxpbWcgY2xhc3NOYW1lPVwibG9nb190b3BcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9wcm9maWxlLnBuZ1wiPjwvaW1nPjwvYT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhclBDXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclBDXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgdGV4dC13aGl0ZVwiIGlkPVwibmF2YmFyUENcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWUtYXV0byBtYi0yIG1iLWxnLTBcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNBY3RpdmUocHJvcHMuY3VycmVudFBhZ2UgPT09Jy8nKX0gYXJpYS1jdXJyZW50PVwicGFnZVwiIGhyZWY9XCIvXCI+SE9NRTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpc0FjdGl2ZShwcm9wcy5jdXJyZW50UGFnZSA9PT0nYWJvdXQnKX0gYXJpYS1jdXJyZW50PVwicGFnZVwiIGhyZWY9XCIvYWJvdXRcIj5BQk9VVDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpc0FjdGl2ZShwcm9wcy5jdXJyZW50UGFnZSA9PT0ncmVnaXN0ZXInKX0gYXJpYS1jdXJyZW50PVwicGFnZVwiIGhyZWY9XCIvcmVnaXN0ZXJcIj7shJzruYTsiqQg7IKs7Jqp7Iug7LKtPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbnsvKlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd25cIiBpZD1cImRyb3Bkb3duX291dGVyXCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPnRlc3Q8L2E+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duX291dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hYm91dC90ZXMydFwiPnRlc3QyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hYm91dC90ZXN0XCI+dGVzdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuKi99XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItbWxhXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPXtwcm9wcy5pc0xvZ2dlZEluID8gJy9tZW1iZXIvbG9naW4nIDogJy9tZW1iZXIvbG9nb3V0J30+eyBwcm9wcy5pc0xvZ2dlZEluID8gJ0xPR0lOJyA6ICdMT0dPVVQnIH08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNBY3RpdmUocHJvcHMuY3VycmVudFBhZ2UgPT09J215cGFnZScpfSBocmVmPVwiL21lbWJlci9teXBhZ2VcIj5NWVBBR0U8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB0b3BOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/shared/Top.tsx\n");

/***/ })

})