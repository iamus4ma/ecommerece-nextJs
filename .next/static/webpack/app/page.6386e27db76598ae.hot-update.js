"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductCard */ \"(app-pages-browser)/./src/components/ProductCard.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"(app-pages-browser)/./node_modules/react-spinners/esm/ClipLoader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Listings = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const selectedCategory = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>{\n        var _state_category;\n        return state === null || state === void 0 ? void 0 : (_state_category = state.category) === null || _state_category === void 0 ? void 0 : _state_category.type;\n    });\n    const getdata = async ()=>{\n        try {\n            const res = await fetch(\"https://fakestoreapi.com/products\");\n            const productsData = await res.json();\n            setProducts(productsData);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            setLoading(false);\n        }\n    };\n    const getCategorydata = async ()=>{\n        try {\n            const res = await fetch(\"https://fakestoreapi.com/products/category/\".concat(selectedCategory));\n            const productsData = await res.json();\n            setProducts(productsData);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!selectedCategory) {}\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getCategorydata();\n    }, [\n        selectedCategory\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                color: \"#3B82F6\",\n                loading: loading,\n                size: 50\n            }, void 0, false, {\n                fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/app/page.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/app/page.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main container md:max-w-[1200px] \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap mt-16 -mx-4\",\n                children: products === null || products === void 0 ? void 0 : products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            product: product\n                        }, void 0, false, {\n                            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/app/page.js\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, undefined)\n                    }, product.id, false, {\n                        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/app/page.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/app/page.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/app/page.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/simplex/Documents/Next Js/my-ecommerce-app/src/app/page.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Listings, \"VlpmTuNugNDw0yIRX3z8YKIoxps=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Listings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Listings);\nvar _c;\n$RefreshReg$(_c, \"Listings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ3RCO0FBQ3NCO0FBQ1Q7QUFDRTtBQUU1QyxNQUFNTyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNUSxtQkFBbUJQLHdEQUFXQSxDQUFDLENBQUNRO1lBQVVBO2VBQUFBLGtCQUFBQSw2QkFBQUEsa0JBQUFBLE1BQU9DLFFBQVEsY0FBZkQsc0NBQUFBLGdCQUFpQkUsSUFBSTs7SUFHckUsTUFBTUMsVUFBVTtRQUNkLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU07WUFDeEIsTUFBTUMsZUFBZSxNQUFNRixJQUFJRyxJQUFJO1lBQ25DWCxZQUFZVTtZQUNaUixXQUFXO1FBQ2IsRUFBRSxPQUFPVSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDVixXQUFXO1FBQ2I7SUFDRjtJQUVBLE1BQU1ZLGtCQUFrQjtRQUN0QixJQUFJO1lBQ0YsTUFBTU4sTUFBTSxNQUFNQyxNQUFNLDhDQUErRCxPQUFqQk47WUFDdEUsTUFBTU8sZUFBZSxNQUFNRixJQUFJRyxJQUFJO1lBQ25DWCxZQUFZVTtZQUNaUixXQUFXO1FBQ2IsRUFBRSxPQUFPVSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDVixXQUFXO1FBQ2I7SUFDRjtJQUVBUixnREFBU0EsQ0FBQztRQUNSLElBQUcsQ0FBQ1Msa0JBQWlCLENBRXJCO0lBQ0YsR0FBRyxFQUFFO0lBRUxULGdEQUFTQSxDQUFDO1FBQ1JvQjtJQUNGLEdBQUc7UUFBQ1g7S0FBaUI7SUFFckIsSUFBSUYsU0FBUztRQUNYLHFCQUNFLDhEQUFDYztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDbkIsc0RBQVVBO2dCQUFDb0IsT0FBTTtnQkFBVWhCLFNBQVNBO2dCQUFTaUIsTUFBTTs7Ozs7Ozs7Ozs7SUFHMUQ7SUFFQSxxQkFDRSw4REFBQ0g7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pqQixxQkFBQUEsK0JBQUFBLFNBQVVvQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2QsOERBQUNMO3dCQUVDQyxXQUFVO2tDQUVWLDRFQUFDekIsK0RBQVdBOzRCQUFDNkIsU0FBU0E7Ozs7Ozt1QkFIakJBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTdCO0dBaEVNdkI7O1FBR3FCRixvREFBV0E7OztLQUhoQ0U7QUFrRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDbGlwTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCI7XG5cbmNvbnN0IExpc3RpbmdzID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5jYXRlZ29yeT8udHlwZSk7XG5cblxuICBjb25zdCBnZXRkYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0c0RhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnlkYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL2NhdGVnb3J5LyR7c2VsZWN0ZWRDYXRlZ29yeX1gKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0c0RhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighc2VsZWN0ZWRDYXRlZ29yeSl7XG5cbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENhdGVnb3J5ZGF0YSgpO1xuICB9LCBbc2VsZWN0ZWRDYXRlZ29yeV0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgICAgPENsaXBMb2FkZXIgY29sb3I9XCIjM0I4MkY2XCIgbG9hZGluZz17bG9hZGluZ30gc2l6ZT17NTB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgbWQ6bWF4LXctWzEyMDBweF0gXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtMTYgLW14LTRcIj5cbiAgICAgICAgICB7cHJvZHVjdHM/Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMiBtZDp3LTEvMyBsZzp3LTEvNCB4bDp3LTEvNCBweC00IG1iLThcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7XG4iXSwibmFtZXMiOlsiUHJvZHVjdENhcmQiLCJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiQ2xpcExvYWRlciIsIkxpc3RpbmdzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRDYXRlZ29yeSIsInN0YXRlIiwiY2F0ZWdvcnkiLCJ0eXBlIiwiZ2V0ZGF0YSIsInJlcyIsImZldGNoIiwicHJvZHVjdHNEYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImdldENhdGVnb3J5ZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImNvbG9yIiwic2l6ZSIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});