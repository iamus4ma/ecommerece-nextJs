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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ff5f131e1dca\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/N2IzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImZmNWYxMzFlMWRjYVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_redux_slices_categorySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/redux/slices/categorySlice */ \"(app-pages-browser)/./src/app/redux/slices/categorySlice.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaSearch_FaShoppingCart_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaSearch,FaShoppingCart!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>{\n        var _state_cart;\n        return state === null || state === void 0 ? void 0 : (_state_cart = state.cart) === null || _state_cart === void 0 ? void 0 : _state_cart.items;\n    });\n    const uniqueItemIds = new Set(cartItems.map((item)=>item.id));\n    const badge = uniqueItemIds.size;\n    const searchCategory = (e)=>{\n        const categoryName = e.target.innerText === \"Electronic\" ? \"electronics\" : e.target.innerText === \"Mens Fashion\" ? \"men's clothing\" : e.target.innerText === \"Women's Fashion\" ? \"womensfashion\" : e.target.innerText === \"Jewelery\" ? \"jewelery\" : \"\";\n        dispatch((0,_app_redux_slices_categorySlice__WEBPACK_IMPORTED_MODULE_1__.setCategory)(categoryName));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main container md:max-w-[1200px] \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ss\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-[24px] font-semibold font \",\n                                children: \"Ecommerence\"\n                            }, void 0, false, {\n                                fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between gap-12 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"flex gap-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: searchCategory,\n                                            className: \"cursor-pointer hover:font-semibold\",\n                                            children: \"Electronic\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: searchCategory,\n                                            className: \"cursor-pointer hover:font-semibold\",\n                                            children: \"Mens Fashion\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: searchCategory,\n                                            className: \"cursor-pointer hover:font-semibold\",\n                                            children: \"Women's Fashion\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: searchCategory,\n                                            className: \"cursor-pointer hover:font-semibold\",\n                                            children: \"Jewelery\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"bg-white p-3 border rounded-xl flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"bg-transparent focus:outline-none w-24 sm:w-64\",\n                                        type: \"text\",\n                                        placeholder: \"Search\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaSearch_FaShoppingCart_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaSearch, {\n                                        className: \"text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/cart\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-black rounded-xl py-2 px-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-[#fff] flex items-center\",\n                                children: [\n                                    badge,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"ml-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaSearch_FaShoppingCart_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaShoppingCart, {\n                                            className: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/components/Header.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"txUiseqBXG5hYpl9Jz1iv8Un+T0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrRDtBQUNsQztBQUNIO0FBQ2dDO0FBQ0g7QUFFdkQsTUFBTU8sU0FBUzs7SUFDYixNQUFNQyxXQUFXSCx3REFBV0E7SUFDNUIsTUFBTUksWUFBWUgsd0RBQVdBLENBQUMsQ0FBQ0k7WUFBVUE7ZUFBQUEsa0JBQUFBLDZCQUFBQSxjQUFBQSxNQUFPQyxJQUFJLGNBQVhELGtDQUFBQSxZQUFhRSxLQUFLOztJQUMzRCxNQUFNQyxnQkFBZ0IsSUFBSUMsSUFBSUwsVUFBVU0sR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUU7SUFDN0QsTUFBTUMsUUFBUUwsY0FBY00sSUFBSTtJQUVoQyxNQUFNQyxpQkFBaUIsQ0FBQ0M7UUFDdEIsTUFBTUMsZUFDSkQsRUFBRUUsTUFBTSxDQUFDQyxTQUFTLEtBQUssZUFDbkIsZ0JBQ0FILEVBQUVFLE1BQU0sQ0FBQ0MsU0FBUyxLQUFLLGlCQUN2QixtQkFDQUgsRUFBRUUsTUFBTSxDQUFDQyxTQUFTLEtBQUssb0JBQ3ZCLGtCQUNBSCxFQUFFRSxNQUFNLENBQUNDLFNBQVMsS0FBSyxhQUN2QixhQUNBO1FBQ05oQixTQUFTUiw0RUFBV0EsQ0FBQ3NCO0lBQ3ZCO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUN6QixpREFBSUE7NEJBQUMwQixNQUFLO3NDQUNULDRFQUFDQztnQ0FBR0YsV0FBVTswQ0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3BELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEOzBDQUNDLDRFQUFDSTtvQ0FBR0gsV0FBVTs7c0RBQ1osOERBQUNJOzRDQUNDQyxTQUFTWDs0Q0FDVE0sV0FBVTtzREFDWDs7Ozs7O3NEQUdELDhEQUFDSTs0Q0FDQ0MsU0FBU1g7NENBQ1RNLFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ0k7NENBQ0NDLFNBQVNYOzRDQUNUTSxXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNJOzRDQUNDQyxTQUFTWDs0Q0FDVE0sV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBS0wsOERBQUNNO2dDQUFLTixXQUFVOztrREFDZCw4REFBQ087d0NBQ0NQLFdBQVU7d0NBQ1ZRLE1BQUs7d0NBQ0xDLGFBQVk7Ozs7OztrREFFZCw4REFBQy9CLG1HQUFRQTt3Q0FBQ3NCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHeEIsOERBQUN6QixpREFBSUE7d0JBQUMwQixNQUFLO2tDQUNULDRFQUFDRjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0U7Z0NBQUdGLFdBQVU7O29DQUNYUjtrREFDRCw4REFBQ2tCO3dDQUFLVixXQUFVO2tEQUNkLDRFQUFDdkIseUdBQWNBOzRDQUFDdUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QztHQWhGTW5COztRQUNhRixvREFBV0E7UUFDVkMsb0RBQVdBOzs7S0FGekJDO0FBa0ZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3g/M2NiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHNldENhdGVnb3J5IH0gZnJvbSBcIkAvYXBwL3JlZHV4L3NsaWNlcy9jYXRlZ29yeVNsaWNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYVNob3BwaW5nQ2FydCwgRmFTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgY2FydEl0ZW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uY2FydD8uaXRlbXMpO1xuICBjb25zdCB1bmlxdWVJdGVtSWRzID0gbmV3IFNldChjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmlkKSk7XG4gIGNvbnN0IGJhZGdlID0gdW5pcXVlSXRlbUlkcy5zaXplO1xuXG4gIGNvbnN0IHNlYXJjaENhdGVnb3J5ID0gKGUpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeU5hbWUgPVxuICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID09PSBcIkVsZWN0cm9uaWNcIlxuICAgICAgICA/IFwiZWxlY3Ryb25pY3NcIlxuICAgICAgICA6IGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJNZW5zIEZhc2hpb25cIlxuICAgICAgICA/IFwibWVuJ3MgY2xvdGhpbmdcIlxuICAgICAgICA6IGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJXb21lbidzIEZhc2hpb25cIlxuICAgICAgICA/IFwid29tZW5zZmFzaGlvblwiXG4gICAgICAgIDogZS50YXJnZXQuaW5uZXJUZXh0ID09PSBcIkpld2VsZXJ5XCJcbiAgICAgICAgPyBcImpld2VsZXJ5XCJcbiAgICAgICAgOiBcIlwiO1xuICAgIGRpc3BhdGNoKHNldENhdGVnb3J5KGNhdGVnb3J5TmFtZSkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBtZDptYXgtdy1bMTIwMHB4XSBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzc1wiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIGZvbnQtc2VtaWJvbGQgZm9udCBcIj5FY29tbWVyZW5jZTwvaDE+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtMTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBnYXAtNVwiPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2VhcmNoQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjpmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFbGVjdHJvbmljXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NlYXJjaENhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6Zm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTWVucyBGYXNoaW9uXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NlYXJjaENhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6Zm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgV29tZW4ncyBGYXNoaW9uXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NlYXJjaENhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6Zm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgSmV3ZWxlcnlcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTMgYm9yZGVyIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgZm9jdXM6b3V0bGluZS1ub25lIHctMjQgc206dy02NFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEZhU2VhcmNoIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayByb3VuZGVkLXhsIHB5LTIgcHgtM1wiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bI2ZmZl0gZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7YmFkZ2V9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgICAgICAgPEZhU2hvcHBpbmdDYXJ0IGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInNldENhdGVnb3J5IiwiTGluayIsIlJlYWN0IiwiRmFTaG9wcGluZ0NhcnQiLCJGYVNlYXJjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJIZWFkZXIiLCJkaXNwYXRjaCIsImNhcnRJdGVtcyIsInN0YXRlIiwiY2FydCIsIml0ZW1zIiwidW5pcXVlSXRlbUlkcyIsIlNldCIsIm1hcCIsIml0ZW0iLCJpZCIsImJhZGdlIiwic2l6ZSIsInNlYXJjaENhdGVnb3J5IiwiZSIsImNhdGVnb3J5TmFtZSIsInRhcmdldCIsImlubmVyVGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJoMSIsInVsIiwibGkiLCJvbkNsaWNrIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header.jsx\n"));

/***/ })

});