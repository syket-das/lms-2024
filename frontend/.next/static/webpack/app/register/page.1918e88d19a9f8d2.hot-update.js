"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/register/page",{

/***/ "(app-pages-browser)/./store/userStore.ts":
/*!****************************!*\
  !*** ./store/userStore.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUserStore: function() { return /* binding */ useUserStore; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/index.mjs\");\n\n\nconst url = \"http://localhost:8000\";\nconst useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        user: null,\n        isAuthenticated: false,\n        setUser: async ()=>{\n            try {\n                var _data_data;\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(url, \"/api/v1/user/profile\"), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(localStorage.getItem(\"token\"))\n                    }\n                });\n                console.log(data);\n                await set({\n                    user: data.data || null,\n                    isAuthenticated: (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.id) ? true : false\n                });\n            } catch (error) {\n                await set({\n                    user: null,\n                    isAuthenticated: false\n                });\n            }\n        },\n        removeUser: ()=>set({}, true)\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL3VzZXJTdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDTztBQUNqQyxNQUFNRSxNQUFNO0FBU0wsTUFBTUMsZUFBZUYsK0NBQU1BLENBQVksQ0FBQ0csTUFBUztRQUN0REMsTUFBTTtRQUNOQyxpQkFBaUI7UUFDakJDLFNBQVM7WUFDUCxJQUFJO29CQVdpQkM7Z0JBVm5CLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUcsTUFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyxHQUFPLE9BQUpQLEtBQUkseUJBQXVCO29CQUM3RFEsU0FBUzt3QkFDUEMsZUFBZSxVQUF3QyxPQUE5QkMsYUFBYUMsT0FBTyxDQUFDO29CQUNoRDtnQkFDRjtnQkFFQUMsUUFBUUMsR0FBRyxDQUFDUDtnQkFFWixNQUFNSixJQUFJO29CQUNSQyxNQUFNRyxLQUFLQSxJQUFJLElBQUk7b0JBQ25CRixpQkFBaUJFLENBQUFBLGlCQUFBQSw0QkFBQUEsYUFBQUEsS0FBTUEsSUFBSSxjQUFWQSxpQ0FBQUEsV0FBWVEsRUFBRSxJQUFHLE9BQU87Z0JBQzNDO1lBQ0YsRUFBRSxPQUFPQyxPQUFPO2dCQUNkLE1BQU1iLElBQUk7b0JBQ1JDLE1BQU07b0JBQ05DLGlCQUFpQjtnQkFDbkI7WUFDRjtRQUNGO1FBRUFZLFlBQVksSUFBTWQsSUFBSSxDQUFDLEdBQUc7SUFDNUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS91c2VyU3RvcmUudHM/YzhkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCc7XG5jb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJztcblxuaW50ZXJmYWNlIFVzZXJTdG9yZSB7XG4gIHVzZXI6IGFueTtcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICBzZXRVc2VyOiAoKSA9PiB2b2lkO1xuICByZW1vdmVVc2VyOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgdXNlVXNlclN0b3JlID0gY3JlYXRlPFVzZXJTdG9yZT4oKHNldCkgPT4gKHtcbiAgdXNlcjogbnVsbCxcbiAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgc2V0VXNlcjogYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9L2FwaS92MS91c2VyL3Byb2ZpbGVgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgYXdhaXQgc2V0KHtcbiAgICAgICAgdXNlcjogZGF0YS5kYXRhIHx8IG51bGwsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZGF0YT8uZGF0YT8uaWQgPyB0cnVlIDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYXdhaXQgc2V0KHtcbiAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVVc2VyOiAoKSA9PiBzZXQoe30sIHRydWUpLFxufSkpO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiY3JlYXRlIiwidXJsIiwidXNlVXNlclN0b3JlIiwic2V0IiwidXNlciIsImlzQXV0aGVudGljYXRlZCIsInNldFVzZXIiLCJkYXRhIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImlkIiwiZXJyb3IiLCJyZW1vdmVVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/userStore.ts\n"));

/***/ })

});