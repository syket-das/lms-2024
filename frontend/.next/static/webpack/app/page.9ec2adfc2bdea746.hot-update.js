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

/***/ "(app-pages-browser)/./components/UserAccount.tsx":
/*!************************************!*\
  !*** ./components/UserAccount.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserAccountNav: function() { return /* binding */ UserAccountNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/avatar */ \"(app-pages-browser)/./components/ui/avatar.tsx\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons */ \"(app-pages-browser)/./components/Icons.tsx\");\n/* harmony import */ var _store_userStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/userStore */ \"(app-pages-browser)/./store/userStore.ts\");\n/* __next_internal_client_entry_do_not_use__ UserAccountNav auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction UserAccountNav() {\n    _s();\n    const setUser = (0,_store_userStore__WEBPACK_IMPORTED_MODULE_5__.useUserStore)((state)=>state.setUser);\n    const user = (0,_store_userStore__WEBPACK_IMPORTED_MODULE_5__.useUserStore)((state)=>state.user);\n    const removeUser = (0,_store_userStore__WEBPACK_IMPORTED_MODULE_5__.useUserStore)((state)=>state.removeUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuTrigger, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.AvatarFallback, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.Icons.user, {\n                                className: \"h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuContent, {\n                align: \"end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-start gap-2 p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-1 leading-none\",\n                            children: [\n                                user.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-medium\",\n                                    children: user.name\n                                }, void 0, false, {\n                                    fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 27\n                                }, this),\n                                user.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"w-[200px] truncate text-sm text-muted-foreground\",\n                                    children: user.email\n                                }, void 0, false, {\n                                    fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}, void 0, false, {\n                        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/dashboard\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}, void 0, false, {\n                        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                        className: \"cursor-pointer\",\n                        onSelect: (event)=>{\n                            event.preventDefault();\n                            localStorage.removeItem(\"token\");\n                            removeUser();\n                        },\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/syket/sd/dev/exams/lms-2024/frontend/components/UserAccount.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(UserAccountNav, \"UcjLZqpBETmTJ3UEHWQi99xDvx4=\", false, function() {\n    return [\n        _store_userStore__WEBPACK_IMPORTED_MODULE_5__.useUserStore,\n        _store_userStore__WEBPACK_IMPORTED_MODULE_5__.useUserStore,\n        _store_userStore__WEBPACK_IMPORTED_MODULE_5__.useUserStore\n    ];\n});\n_c = UserAccountNav;\nvar _c;\n$RefreshReg$(_c, \"UserAccountNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVXNlckFjY291bnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFNkI7QUFRVTtBQUNjO0FBQ3JCO0FBQ2lCO0FBRTFDLFNBQVNVOztJQUNkLE1BQU1DLFVBQVVGLDhEQUFZQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1ELE9BQU87SUFDckQsTUFBTUUsT0FBT0osOERBQVlBLENBQUMsQ0FBQ0csUUFBVUEsTUFBTUMsSUFBSTtJQUMvQyxNQUFNQyxhQUFhTCw4REFBWUEsQ0FBQyxDQUFDRyxRQUFVQSxNQUFNRSxVQUFVO0lBRTNELHFCQUNFLDhEQUFDYixzRUFBWUE7OzBCQUNYLDhEQUFDSSw2RUFBbUJBOzBCQUNsQiw0RUFBQ0MsOENBQU1BOzhCQUNMLDRFQUFDQyxzREFBY0E7OzBDQUNiLDhEQUFDUTtnQ0FBS0MsV0FBVTswQ0FBV0gsS0FBS0ksSUFBSTs7Ozs7OzBDQUNwQyw4REFBQ1QseUNBQUtBLENBQUNLLElBQUk7Z0NBQUNHLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTVCLDhEQUFDZCw2RUFBbUJBO2dCQUFDZ0IsT0FBTTs7a0NBQ3pCLDhEQUFDQzt3QkFBSUgsV0FBVTtrQ0FDYiw0RUFBQ0c7NEJBQUlILFdBQVU7O2dDQUNaSCxLQUFLSSxJQUFJLGtCQUFJLDhEQUFDRztvQ0FBRUosV0FBVTs4Q0FBZUgsS0FBS0ksSUFBSTs7Ozs7O2dDQUNsREosS0FBS1EsS0FBSyxrQkFDVCw4REFBQ0Q7b0NBQUVKLFdBQVU7OENBQ1ZILEtBQUtRLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtuQiw4REFBQ2pCLCtFQUFxQkE7Ozs7O2tDQUN0Qiw4REFBQ0QsMEVBQWdCQTt3QkFBQ21CLE9BQU87a0NBQ3ZCLDRFQUFDdEIsa0RBQUlBOzRCQUFDdUIsTUFBSztzQ0FBVzs7Ozs7Ozs7Ozs7a0NBRXhCLDhEQUFDcEIsMEVBQWdCQTt3QkFBQ21CLE9BQU87a0NBQ3ZCLDRFQUFDdEIsa0RBQUlBOzRCQUFDdUIsTUFBSztzQ0FBYTs7Ozs7Ozs7Ozs7a0NBRzFCLDhEQUFDbkIsK0VBQXFCQTs7Ozs7a0NBQ3RCLDhEQUFDRCwwRUFBZ0JBO3dCQUNmYSxXQUFVO3dCQUNWUSxVQUFVLENBQUNDOzRCQUNUQSxNQUFNQyxjQUFjOzRCQUNwQkMsYUFBYUMsVUFBVSxDQUFDOzRCQUN4QmQ7d0JBQ0Y7a0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBaERnQko7O1FBQ0VELDBEQUFZQTtRQUNmQSwwREFBWUE7UUFDTkEsMERBQVlBOzs7S0FIakJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlckFjY291bnQudHN4P2ZkZDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQge1xuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbn0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUnO1xuaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJGYWxsYmFjayB9IGZyb20gJy4vdWkvYXZhdGFyJztcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnLi9JY29ucyc7XG5pbXBvcnQgeyB1c2VVc2VyU3RvcmUgfSBmcm9tICdAL3N0b3JlL3VzZXJTdG9yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyQWNjb3VudE5hdigpIHtcbiAgY29uc3Qgc2V0VXNlciA9IHVzZVVzZXJTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnNldFVzZXIpO1xuICBjb25zdCB1c2VyID0gdXNlVXNlclN0b3JlKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHJlbW92ZVVzZXIgPSB1c2VVc2VyU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5yZW1vdmVVc2VyKTtcblxuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICA8RHJvcGRvd25NZW51VHJpZ2dlcj5cbiAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICA8QXZhdGFyRmFsbGJhY2s+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e3VzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8SWNvbnMudXNlciBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICA8L0F2YXRhckZhbGxiYWNrPlxuICAgICAgICA8L0F2YXRhcj5cbiAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cbiAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50IGFsaWduPVwiZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBnYXAtMiBwLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0xIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAge3VzZXIubmFtZSAmJiA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPnt1c2VyLm5hbWV9PC9wPn1cbiAgICAgICAgICAgIHt1c2VyLmVtYWlsICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1bMjAwcHhdIHRydW5jYXRlIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAge3VzZXIuZW1haWx9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RHJvcGRvd25NZW51U2VwYXJhdG9yIC8+XG4gICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIGFzQ2hpbGQ+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+UHJvZmlsZTwvTGluaz5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBhc0NoaWxkPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XG5cbiAgICAgICAgPERyb3Bkb3duTWVudVNlcGFyYXRvciAvPlxuICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBvblNlbGVjdD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICAgICByZW1vdmVVc2VyKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNpZ24gb3V0XG4gICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICA8L0Ryb3Bkb3duTWVudT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVTZXBhcmF0b3IiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiQXZhdGFyIiwiQXZhdGFyRmFsbGJhY2siLCJJY29ucyIsInVzZVVzZXJTdG9yZSIsIlVzZXJBY2NvdW50TmF2Iiwic2V0VXNlciIsInN0YXRlIiwidXNlciIsInJlbW92ZVVzZXIiLCJzcGFuIiwiY2xhc3NOYW1lIiwibmFtZSIsImFsaWduIiwiZGl2IiwicCIsImVtYWlsIiwiYXNDaGlsZCIsImhyZWYiLCJvblNlbGVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/UserAccount.tsx\n"));

/***/ })

});