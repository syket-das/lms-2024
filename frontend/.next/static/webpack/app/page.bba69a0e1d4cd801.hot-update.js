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

/***/ "(app-pages-browser)/./components/BooksComponent.tsx":
/*!***************************************!*\
  !*** ./components/BooksComponent.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/useBookStore */ \"(app-pages-browser)/./store/useBookStore.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-masonry */ \"(app-pages-browser)/./node_modules/react-responsive-masonry/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst BooksComponent = ()=>{\n    _s();\n    const books = (0,_store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore)((state)=>state.books);\n    const setBooks = (0,_store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore)((state)=>state.setBooks);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        setBooks();\n    }, [\n        setBooks\n    ]);\n    const items = books.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: book.image,\n            style: {\n                width: \"100%\",\n                borderRadius: \"8px\"\n            }\n        }, index, false, {\n            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto flex justify-start items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__.ResponsiveMasonry, {\n                columnsCountBreakPoints: {\n                    350: 1,\n                    750: 2,\n                    900: 3\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    columnsCount: 3,\n                    gutter: \"10px\",\n                    children: items\n                }, void 0, false, {\n                    fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            \"sj\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BooksComponent, \"PFnnkX9QQ74TV/SuOModbYsghrY=\", false, function() {\n    return [\n        _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore,\n        _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore\n    ];\n});\n_c = BooksComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksComponent);\nvar _c;\n$RefreshReg$(_c, \"BooksComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm9va3NDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQzFCO0FBQzRDO0FBRXRFLE1BQU1JLGlCQUFpQjs7SUFDckIsTUFBTUMsUUFBUUwsaUVBQVlBLENBQUMsQ0FBQ00sUUFBVUEsTUFBTUQsS0FBSztJQUNqRCxNQUFNRSxXQUFXUCxpRUFBWUEsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxRQUFRO0lBRXZETixzREFBZSxDQUFDO1FBQ2RNO0lBQ0YsR0FBRztRQUFDQTtLQUFTO0lBRWIsTUFBTUUsUUFBUUosTUFBTUssR0FBRyxDQUFDLENBQUNDLE1BQVdDLHNCQUNsQyw4REFBQ0M7WUFFQ0MsS0FBS0gsS0FBS0ksS0FBSztZQUNmQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFRQyxjQUFjO1lBQU07V0FGdkNOOzs7OztJQU1ULHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pCLHVFQUFpQkE7Z0JBQUNrQix5QkFBeUI7b0JBQUUsS0FBSztvQkFBRyxLQUFLO29CQUFHLEtBQUs7Z0JBQUU7MEJBQ25FLDRFQUFDbkIsZ0VBQU9BO29CQUFDb0IsY0FBYztvQkFBR0MsUUFBTzs4QkFDOUJkOzs7Ozs7Ozs7OztZQUVlOzs7Ozs7O0FBSTFCO0dBMUJNTDs7UUFDVUosNkRBQVlBO1FBQ1RBLDZEQUFZQTs7O0tBRnpCSTtBQTRCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jvb2tzQ29tcG9uZW50LnRzeD8wMjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUJvb2tTdG9yZSB9IGZyb20gJ0Avc3RvcmUvdXNlQm9va1N0b3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFzb25yeSwgeyBSZXNwb25zaXZlTWFzb25yeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtbWFzb25yeSc7XG5cbmNvbnN0IEJvb2tzQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBib29rcyA9IHVzZUJvb2tTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmJvb2tzKTtcbiAgY29uc3Qgc2V0Qm9va3MgPSB1c2VCb29rU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5zZXRCb29rcyk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCb29rcygpO1xuICB9LCBbc2V0Qm9va3NdKTtcblxuICBjb25zdCBpdGVtcyA9IGJvb2tzLm1hcCgoYm9vazogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgPGltZ1xuICAgICAga2V5PXtpbmRleH1cbiAgICAgIHNyYz17Ym9vay5pbWFnZX1cbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlclJhZGl1czogJzhweCcgfX1cbiAgICAvPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPFJlc3BvbnNpdmVNYXNvbnJ5IGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXt7IDM1MDogMSwgNzUwOiAyLCA5MDA6IDMgfX0+XG4gICAgICAgIDxNYXNvbnJ5IGNvbHVtbnNDb3VudD17M30gZ3V0dGVyPVwiMTBweFwiPlxuICAgICAgICAgIHtpdGVtc31cbiAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgPC9SZXNwb25zaXZlTWFzb25yeT5cbiAgICAgIHNqXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb29rc0NvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJ1c2VCb29rU3RvcmUiLCJSZWFjdCIsIk1hc29ucnkiLCJSZXNwb25zaXZlTWFzb25yeSIsIkJvb2tzQ29tcG9uZW50IiwiYm9va3MiLCJzdGF0ZSIsInNldEJvb2tzIiwidXNlRWZmZWN0IiwiaXRlbXMiLCJtYXAiLCJib29rIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJpbWFnZSIsInN0eWxlIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb2x1bW5zQ291bnRCcmVha1BvaW50cyIsImNvbHVtbnNDb3VudCIsImd1dHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BooksComponent.tsx\n"));

/***/ })

});