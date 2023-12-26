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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/useBookStore */ \"(app-pages-browser)/./store/useBookStore.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-masonry */ \"(app-pages-browser)/./node_modules/react-responsive-masonry/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst BooksComponent = ()=>{\n    _s();\n    const books = (0,_store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore)((state)=>state.books);\n    const setBooks = (0,_store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore)((state)=>state.setBooks);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        setBooks();\n    }, [\n        setBooks\n    ]);\n    const items = books.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: book.image,\n            style: {\n                width: \"100%\",\n                borderRadius: \"8px\"\n            }\n        }, index, false, {\n            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto flex justify-start items-center\",\n        children: books.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__.ResponsiveMasonry, {\n            columnsCountBreakPoints: {\n                300: 2,\n                500: 3,\n                700: 4,\n                900: 5\n            },\n            children: items\n        }, void 0, false, {\n            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold my-4 text-center\",\n                children: \"No Books Found\"\n            }, void 0, false, {\n                fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BooksComponent, \"PFnnkX9QQ74TV/SuOModbYsghrY=\", false, function() {\n    return [\n        _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore,\n        _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore\n    ];\n});\n_c = BooksComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksComponent);\nvar _c;\n$RefreshReg$(_c, \"BooksComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm9va3NDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQzFCO0FBQzRDO0FBRXRFLE1BQU1HLGlCQUFpQjs7SUFDckIsTUFBTUMsUUFBUUosaUVBQVlBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUQsS0FBSztJQUNqRCxNQUFNRSxXQUFXTixpRUFBWUEsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxRQUFRO0lBRXZETCxzREFBZSxDQUFDO1FBQ2RLO0lBQ0YsR0FBRztRQUFDQTtLQUFTO0lBRWIsTUFBTUUsUUFBUUosTUFBTUssR0FBRyxDQUFDLENBQUNDLE1BQVdDLHNCQUNsQyw4REFBQ0M7WUFFQ0MsS0FBS0gsS0FBS0ksS0FBSztZQUNmQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFRQyxjQUFjO1lBQU07V0FGdkNOOzs7OztJQU1ULHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNaZixNQUFNZ0IsTUFBTSxHQUFHLGtCQUNkLDhEQUFDbEIsdUVBQWlCQTtZQUNoQm1CLHlCQUF5QjtnQkFBRSxLQUFLO2dCQUFHLEtBQUs7Z0JBQUcsS0FBSztnQkFBRyxLQUFLO1lBQUU7c0JBRXpEYjs7Ozs7c0NBR0gsOERBQUNVO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNHO2dCQUFHSCxXQUFVOzBCQUFzQzs7Ozs7Ozs7Ozs7Ozs7OztBQU85RDtHQWpDTWhCOztRQUNVSCw2REFBWUE7UUFDVEEsNkRBQVlBOzs7S0FGekJHO0FBbUNOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9va3NDb21wb25lbnQudHN4PzAyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQm9va1N0b3JlIH0gZnJvbSAnQC9zdG9yZS91c2VCb29rU3RvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYXNvbnJ5LCB7IFJlc3BvbnNpdmVNYXNvbnJ5IH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5JztcblxuY29uc3QgQm9va3NDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvb2tzID0gdXNlQm9va1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUuYm9va3MpO1xuICBjb25zdCBzZXRCb29rcyA9IHVzZUJvb2tTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnNldEJvb2tzKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJvb2tzKCk7XG4gIH0sIFtzZXRCb29rc10pO1xuXG4gIGNvbnN0IGl0ZW1zID0gYm9va3MubWFwKChib29rOiBhbnksIGluZGV4OiBhbnkpID0+IChcbiAgICA8aW1nXG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgc3JjPXtib29rLmltYWdlfVxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyUmFkaXVzOiAnOHB4JyB9fVxuICAgIC8+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICB7Ym9va3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPFJlc3BvbnNpdmVNYXNvbnJ5XG4gICAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e3sgMzAwOiAyLCA1MDA6IDMsIDcwMDogNCwgOTAwOiA1IH19XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXN9XG4gICAgICAgIDwvUmVzcG9uc2l2ZU1hc29ucnk+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBteS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBObyBCb29rcyBGb3VuZFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tzQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZUJvb2tTdG9yZSIsIlJlYWN0IiwiUmVzcG9uc2l2ZU1hc29ucnkiLCJCb29rc0NvbXBvbmVudCIsImJvb2tzIiwic3RhdGUiLCJzZXRCb29rcyIsInVzZUVmZmVjdCIsIml0ZW1zIiwibWFwIiwiYm9vayIsImluZGV4IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJzdHlsZSIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwiY29sdW1uc0NvdW50QnJlYWtQb2ludHMiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BooksComponent.tsx\n"));

/***/ })

});