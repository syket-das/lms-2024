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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/useBookStore */ \"(app-pages-browser)/./store/useBookStore.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-masonry */ \"(app-pages-browser)/./node_modules/react-responsive-masonry/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst BooksComponent = ()=>{\n    _s();\n    const books = (0,_store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore)((state)=>state.books);\n    const setBooks = (0,_store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore)((state)=>state.setBooks);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        setBooks();\n    }, [\n        setBooks\n    ]);\n    const items = books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"w-full h-full object-cover\",\n                    src: book.image,\n                    alt: book.title\n                }, void 0, false, {\n                    fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-lg font-bold\",\n                        children: book.title\n                    }, void 0, false, {\n                        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, book.id, true, {\n            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto flex justify-start items-center\",\n        children: books.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__.ResponsiveMasonry, {\n            columnsCountBreakPoints: {\n                300: 2,\n                500: 3,\n                700: 4,\n                900: 5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                gutter: \"1rem\",\n                children: items\n            }, void 0, false, {\n                fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold my-4 text-center\",\n                children: \"No Books Found\"\n            }, void 0, false, {\n                fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/BooksComponent.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BooksComponent, \"PFnnkX9QQ74TV/SuOModbYsghrY=\", false, function() {\n    return [\n        _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore,\n        _store_useBookStore__WEBPACK_IMPORTED_MODULE_1__.useBookStore\n    ];\n});\n_c = BooksComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksComponent);\nvar _c;\n$RefreshReg$(_c, \"BooksComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm9va3NDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ29EO0FBQzFCO0FBQzRDO0FBRXRFLE1BQU1JLGlCQUFpQjs7SUFDckIsTUFBTUMsUUFBUUwsaUVBQVlBLENBQUMsQ0FBQ00sUUFBVUEsTUFBTUQsS0FBSztJQUNqRCxNQUFNRSxXQUFXUCxpRUFBWUEsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxRQUFRO0lBRXZETixzREFBZSxDQUFDO1FBQ2RNO0lBQ0YsR0FBRztRQUFDQTtLQUFTO0lBRWIsTUFBTUUsUUFBUUosTUFBTUssR0FBRyxDQUFDLENBQUNDLHFCQUN2Qiw4REFBQ0M7OzhCQUNDLDhEQUFDQztvQkFDQ0MsV0FBVTtvQkFDVkMsS0FBS0osS0FBS0ssS0FBSztvQkFDZkMsS0FBS04sS0FBS08sS0FBSzs7Ozs7OzhCQUVqQiw4REFBQ047b0JBQUlFLFdBQVU7OEJBQ2IsNEVBQUNLO3dCQUFHTCxXQUFVO2tDQUFxQkgsS0FBS08sS0FBSzs7Ozs7Ozs7Ozs7O1dBUHZDUCxLQUFLUyxFQUFFOzs7OztJQVluQixxQkFDRSw4REFBQ1I7UUFBSUUsV0FBVTtrQkFDWlQsTUFBTWdCLE1BQU0sR0FBRyxrQkFDZCw4REFBQ2xCLHVFQUFpQkE7WUFDaEJtQix5QkFBeUI7Z0JBQUUsS0FBSztnQkFBRyxLQUFLO2dCQUFHLEtBQUs7Z0JBQUcsS0FBSztZQUFFO3NCQUUxRCw0RUFBQ3BCLGdFQUFPQTtnQkFBQ3FCLFFBQU87MEJBQVFkOzs7Ozs7Ozs7O3NDQUcxQiw4REFBQ0c7WUFBSUUsV0FBVTtzQkFDYiw0RUFBQ0s7Z0JBQUdMLFdBQVU7MEJBQXNDOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzlEO0dBdENNVjs7UUFDVUosNkRBQVlBO1FBQ1RBLDZEQUFZQTs7O0tBRnpCSTtBQXdDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jvb2tzQ29tcG9uZW50LnRzeD8wMjdjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUJvb2tTdG9yZSB9IGZyb20gJ0Avc3RvcmUvdXNlQm9va1N0b3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFzb25yeSwgeyBSZXNwb25zaXZlTWFzb25yeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtbWFzb25yeSc7XG5cbmNvbnN0IEJvb2tzQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBib29rcyA9IHVzZUJvb2tTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmJvb2tzKTtcbiAgY29uc3Qgc2V0Qm9va3MgPSB1c2VCb29rU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5zZXRCb29rcyk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCb29rcygpO1xuICB9LCBbc2V0Qm9va3NdKTtcblxuICBjb25zdCBpdGVtcyA9IGJvb2tzLm1hcCgoYm9vazogYW55KSA9PiAoXG4gICAgPGRpdiBrZXk9e2Jvb2suaWR9PlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIHNyYz17Ym9vay5pbWFnZX1cbiAgICAgICAgYWx0PXtib29rLnRpdGxlfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTZcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e2Jvb2sudGl0bGV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAge2Jvb2tzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxSZXNwb25zaXZlTWFzb25yeVxuICAgICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXt7IDMwMDogMiwgNTAwOiAzLCA3MDA6IDQsIDkwMDogNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1hc29ucnkgZ3V0dGVyPVwiMXJlbVwiPntpdGVtc308L01hc29ucnk+XG4gICAgICAgIDwvUmVzcG9uc2l2ZU1hc29ucnk+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBteS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBObyBCb29rcyBGb3VuZFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tzQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZUJvb2tTdG9yZSIsIlJlYWN0IiwiTWFzb25yeSIsIlJlc3BvbnNpdmVNYXNvbnJ5IiwiQm9va3NDb21wb25lbnQiLCJib29rcyIsInN0YXRlIiwic2V0Qm9va3MiLCJ1c2VFZmZlY3QiLCJpdGVtcyIsIm1hcCIsImJvb2siLCJkaXYiLCJpbWciLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaDEiLCJpZCIsImxlbmd0aCIsImNvbHVtbnNDb3VudEJyZWFrUG9pbnRzIiwiZ3V0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BooksComponent.tsx\n"));

/***/ })

});