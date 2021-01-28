webpackHotUpdate_N_E("pages/docker_deploy",{

/***/ "./pages/docker_deploy.tsx":
/*!*********************************!*\
  !*** ./pages/docker_deploy.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_GreyDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/common/GreyDivider */ \"./components/common/GreyDivider.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Volumes/Storage/A_WorkSpace/B_Personal/KUUWANG_HOMEPAGE/pages/docker_deploy.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar docker_deploy_readme = \"\\n`by KUUWANGE - admin@kuuwang.com`\\n\\nDocker MASTER / SLAVE / ROLLBACK MANAGER\\n\\nnginx + docker \\uC774\\uBBF8\\uC9C0\\uB97C \\uC774\\uC6A9\\uD558\\uC5EC \\uC26C\\uC6B4 \\uBB34\\uC911\\uB2E8 \\uBC30\\uD3EC\\uD658\\uACBD\\uC124\\uC815\\uC744 \\uAD6C\\uC131\\uD558\\uAE30\\uC704\\uD55C \\uD504\\uB85C\\uC81D\\uD2B8\\uC785\\uB2C8\\uB2E4. \\uB0B4\\uBD80 \\uD504\\uB85C\\uC81D\\uD2B8\\uB294 \\uD30C\\uC774\\uC36C\\uC73C\\uB85C \\uB418\\uC5B4\\uC788\\uC2B5\\uB2C8\\uB2E4.\\n\\nrun.sh ( \\uC2E4\\uD589 \\uC2A4\\uD06C\\uB9BD\\uD2B8 \\uC608\\uC2DC)\\n```bash\\ndocker pull shellcodesniper/healthchecker:stable;\\ndocker kill test;\\ndocker rm multitool;\\ndocker run --name multitool \\t-e DEBUG_MODE=yes \\t-e CHECK_POOL=no \\t-v $(pwd)/config.ini:/app/config.ini \\t-v /var/run/docker.sock:/var/run/docker.sock \\t-v $(pwd)/docker-compose.yml:/app/docker-compose-origin.yml \\t-v $(pwd)/etc/api.kuuwang.com/:/etc/ssl \\t-v $(pwd)/nginx:/app/nginx \\tshellcodesniper/healthchecker:stable\\n```\\n\\n\\uD30C\\uC77C \\uBAA9\\uB85D\\n- config.ini ( \\uC124\\uC815\\uD30C\\uC77C - \\uC5C6\\uB2E4\\uBA74 \\uBE48\\uD30C\\uC77C\\uC744 \\uB9CC\\uB4E0\\uD6C4 \\uB3C4\\uCEE4 \\uC2E4\\uD589\\uC2DC\\uC5D0 \\uC790\\uB3D9 \\uC0DD\\uC131 )\\n- nginx/\\n  - nginx.conf ( NGINX \\uAE30\\uBCF8 \\uC124\\uC815\\uD30C\\uC77C )\\n  - templates/\\n    - default.conf.template ( default.conf\\uC640 \\uAC19\\uC740 \\uC5ED\\uD560, \\uD658\\uACBD\\uBCC0\\uC218 \\uC0AC\\uC6A9\\uC744 \\uC704\\uD574 template \\uC73C\\uB85C \\uC791\\uC131\\uD574\\uB460)\\n- docker-compose.yml ( DOCKER COMPOSE \\uD30C\\uC77C, config.ini \\uC640 \\uAC19\\uC774 \\uC138\\uD305 \\uC9C4\\uD589\\uC2DC \\uC815\\uC0C1 \\uC0AC\\uC6A9 \\uAC00\\uB2A5 )\\n\\n**\\uC911\\uC694**\\n\\uBE48 \\uD30C\\uC77C\\uC774\\uB77C\\uB3C4 config.ini \\uD30C\\uC77C\\uC744 \\uC0DD\\uC131\\uD55C\\uD6C4 \\uC9C4\\uD589\\uD558\\uC5EC\\uC57C \\uD569\\uB2C8\\uB2E4.\\n\\nNGINX \\uC124\\uC815\\uC740 docker-compose \\uC5D0\\uC11C \\uD3F4\\uB354\\uB97C \\uB9C8\\uC6B4\\uD2B8 \\uD574\\uC90D\\uB2C8\\uB2E4.\\nnginx \\uD3F4\\uB354\\uC758\\nnginx.conf \\uB294 \\uAE30\\uBCF8 \\uC124\\uC815\\uC744\\nconf.d \\uC544\\uB798\\uC5D0\\uB294 \\uC11C\\uBE44\\uC2A4\\uBCC4\\uB85C \\uC124\\uC815\\uD574\\uC8FC\\uC5B4\\uC57C\\uD569\\uB2C8\\uB2E4.\\n\\n\";\n\nvar IndexPage = function IndexPage() {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    isLoggedIn: false,\n    currentPage: 'multitool',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(_components_common_GreyDivider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"DOCKER_DEPLOY\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"row mt-5 mb-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12 col-md-12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"card bg-dark text-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, \"Multitool API\")), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"text-justify font_18\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    source: docker_deploy_readme,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }))))))));\n};\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9ja2VyX2RlcGxveS50c3g/MjNhMSJdLCJuYW1lcyI6WyJkb2NrZXJfZGVwbG95X3JlYWRtZSIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUE0QixpL0RBQWxDOztBQXlDQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0EsTUFBQywwREFBRDtBQUFRLGNBQVUsRUFBRSxLQUFwQjtBQUEyQixlQUFXLEVBQUUsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFBYSxTQUFLLEVBQUMsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFRCxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FKRixDQURGLENBREYsQ0FIRixDQURGLENBREE7QUF1QkQsQ0F4QkQ7O0tBQU1DLFM7QUEwQlNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZG9ja2VyX2RlcGxveS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5MaW5lU2NyaXB0IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9JbkxpbmVTY3JpcHQnXG5pbXBvcnQgR3JleURpdmlkZXIgZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL0dyZXlEaXZpZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcblxuY29uc3QgZG9ja2VyX2RlcGxveV9yZWFkbWU6IHN0cmluZyA9IGBcblxcYGJ5IEtVVVdBTkdFIC0gYWRtaW5Aa3V1d2FuZy5jb21cXGBcblxuRG9ja2VyIE1BU1RFUiAvIFNMQVZFIC8gUk9MTEJBQ0sgTUFOQUdFUlxuXG5uZ2lueCArIGRvY2tlciDsnbTrr7jsp4Drpbwg7J207Jqp7ZWY7JesIOyJrOyatCDrrLTspJHri6gg67Cw7Y+s7ZmY6rK97ISk7KCV7J2EIOq1rOyEse2VmOq4sOychO2VnCDtlITroZzsoJ3tirjsnoXri4jri6QuIOuCtOu2gCDtlITroZzsoJ3tirjripQg7YyM7J207I2s7Jy866GcIOuQmOyWtOyeiOyKteuLiOuLpC5cblxucnVuLnNoICgg7Iuk7ZaJIOyKpO2BrOumve2KuCDsmIjsi5wpXG5cXGBcXGBcXGBiYXNoXG5kb2NrZXIgcHVsbCBzaGVsbGNvZGVzbmlwZXIvaGVhbHRoY2hlY2tlcjpzdGFibGU7XG5kb2NrZXIga2lsbCB0ZXN0O1xuZG9ja2VyIHJtIG11bHRpdG9vbDtcbmRvY2tlciBydW4gLS1uYW1lIG11bHRpdG9vbCBcXFxuXHQtZSBERUJVR19NT0RFPXllcyBcXFxuXHQtZSBDSEVDS19QT09MPW5vIFxcXG5cdC12ICQocHdkKS9jb25maWcuaW5pOi9hcHAvY29uZmlnLmluaSBcXFxuXHQtdiAvdmFyL3J1bi9kb2NrZXIuc29jazovdmFyL3J1bi9kb2NrZXIuc29jayBcXFxuXHQtdiAkKHB3ZCkvZG9ja2VyLWNvbXBvc2UueW1sOi9hcHAvZG9ja2VyLWNvbXBvc2Utb3JpZ2luLnltbCBcXFxuXHQtdiAkKHB3ZCkvZXRjL2FwaS5rdXV3YW5nLmNvbS86L2V0Yy9zc2wgXFxcblx0LXYgJChwd2QpL25naW54Oi9hcHAvbmdpbnggXFxcblx0c2hlbGxjb2Rlc25pcGVyL2hlYWx0aGNoZWNrZXI6c3RhYmxlXG5cXGBcXGBcXGBcblxu7YyM7J28IOuqqeuhnVxuLSBjb25maWcuaW5pICgg7ISk7KCV7YyM7J28IC0g7JeG64uk66m0IOu5iO2MjOydvOydhCDrp4zrk6Dtm4Qg64+E7LukIOyLpO2WieyLnOyXkCDsnpDrj5kg7IOd7ISxIClcbi0gbmdpbngvXG4gIC0gbmdpbnguY29uZiAoIE5HSU5YIOq4sOuzuCDshKTsoJXtjIzsnbwgKVxuICAtIHRlbXBsYXRlcy9cbiAgICAtIGRlZmF1bHQuY29uZi50ZW1wbGF0ZSAoIGRlZmF1bHQuY29uZuyZgCDqsJnsnYAg7Jet7ZWgLCDtmZjqsr3rs4DsiJgg7IKs7Jqp7J2EIOychO2VtCB0ZW1wbGF0ZSDsnLzroZwg7J6R7ISx7ZW065GgKVxuLSBkb2NrZXItY29tcG9zZS55bWwgKCBET0NLRVIgQ09NUE9TRSDtjIzsnbwsIGNvbmZpZy5pbmkg7JmAIOqwmeydtCDshLjtjIUg7KeE7ZaJ7IucIOygleyDgSDsgqzsmqkg6rCA64qlIClcblxuKirspJHsmpQqKlxu67mIIO2MjOydvOydtOudvOuPhCBjb25maWcuaW5pIO2MjOydvOydhCDsg53shLHtlZztm4Qg7KeE7ZaJ7ZWY7Jes7JW8IO2VqeuLiOuLpC5cblxuTkdJTlgg7ISk7KCV7J2AIGRvY2tlci1jb21wb3NlIOyXkOyEnCDtj7TrjZTrpbwg66eI7Jq07Yq4IO2VtOykjeuLiOuLpC5cbm5naW54IO2PtOuNlOydmFxubmdpbnguY29uZiDripQg6riw67O4IOyEpOygleydhFxuY29uZi5kIOyVhOuemOyXkOuKlCDshJzruYTsiqTrs4TroZwg7ISk7KCV7ZW07KO87Ja07JW87ZWp64uI64ukLlxuXG5gO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gIDxMYXlvdXQgaXNMb2dnZWRJbj17ZmFsc2V9IGN1cnJlbnRQYWdlPXsnbXVsdGl0b29sJ30+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxHcmV5RGl2aWRlciB0aXRsZT1cIkRPQ0tFUl9ERVBMT1lcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01IG1iLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWRhcmsgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDE+TXVsdGl0b29sIEFQSTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeSBmb250XzE4XCI+XG4gICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtkb2NrZXJfZGVwbG95X3JlYWRtZX0gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/docker_deploy.tsx\n");

/***/ })

})