"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"46df477cdb43\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/N2IzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQ2ZGY0NzdjZGI0M1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/redux/slices/categorySlice.js":
/*!***********************************************!*\
  !*** ./src/app/redux/slices/categorySlice.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setCategory: function() { return /* binding */ setCategory; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst categorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"category\",\n    initialState: {\n        type: \"\"\n    },\n    reducers: {\n        // Action to set the category\n        setCategory: (state, action)=>{\n            state.type = action.payload;\n        },\n        // Action to clear the category\n        clearCategory: (state)=>{\n            state.type = \"\";\n        }\n    }\n});\nconst { setCategory } = categorySlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (categorySlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgvc2xpY2VzL2NhdGVnb3J5U2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7NkRBQytDO0FBRS9DLE1BQU1DLGdCQUFnQkQsNkRBQVdBLENBQUM7SUFDaENFLE1BQU07SUFDTkMsY0FBYztRQUNaQyxNQUFNO0lBQ1I7SUFDQUMsVUFBVTtRQUNSLDZCQUE2QjtRQUM3QkMsYUFBYSxDQUFDQyxPQUFPQztZQUNuQkQsTUFBTUgsSUFBSSxHQUFHSSxPQUFPQyxPQUFPO1FBQzdCO1FBQ0EsK0JBQStCO1FBQy9CQyxlQUFlLENBQUNIO1lBQ2RBLE1BQU1ILElBQUksR0FBRztRQUNmO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUUsV0FBVyxFQUFFLEdBQUdMLGNBQWNVLE9BQU8sQ0FBQztBQUNyRCwrREFBZVYsY0FBY1csT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVkdXgvc2xpY2VzL2NhdGVnb3J5U2xpY2UuanM/ODg5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgY2F0ZWdvcnlTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjYXRlZ29yeVwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICB0eXBlOiBcIlwiLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIC8vIEFjdGlvbiB0byBzZXQgdGhlIGNhdGVnb3J5XG4gICAgc2V0Q2F0ZWdvcnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS50eXBlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICAvLyBBY3Rpb24gdG8gY2xlYXIgdGhlIGNhdGVnb3J5XG4gICAgY2xlYXJDYXRlZ29yeTogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS50eXBlID0gXCJcIjtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldENhdGVnb3J5IH0gPSBjYXRlZ29yeVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yeVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjYXRlZ29yeVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInR5cGUiLCJyZWR1Y2VycyIsInNldENhdGVnb3J5Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY2xlYXJDYXRlZ29yeSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux/slices/categorySlice.js\n"));

/***/ })

});