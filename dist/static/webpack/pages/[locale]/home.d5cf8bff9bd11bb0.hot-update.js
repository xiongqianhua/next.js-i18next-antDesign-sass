"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locale]/home",{

/***/ "./component/userList.js":
/*!*******************************!*\
  !*** ./component/userList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Avatar_Col_Divider_Drawer_List_Row_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Col,Divider,Drawer,List,Row!=!antd */ \"__barrel_optimize__?names=Avatar,Col,Divider,Drawer,List,Row!=!./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DescriptionItem = (param)=>{\n    let { title, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"site-description-item-profile-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"site-description-item-profile-p-label\",\n                children: [\n                    title,\n                    \":\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/component/userList.js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, undefined),\n            content\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/component/userList.js\",\n        lineNumber: 4,\n        columnNumber: 3\n    }, undefined);\n};\n_c = DescriptionItem;\nconst App = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showDrawer = ()=>{\n        setOpen(true);\n    };\n    const onClose = ()=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Col_Divider_Drawer_List_Row_antd__WEBPACK_IMPORTED_MODULE_2__.List, {\n            dataSource: [\n                {\n                    id: 1,\n                    name: \"Admin\",\n                    role: \"管理员\"\n                },\n                {\n                    id: 2,\n                    name: \"user1\",\n                    role: \"用户1\"\n                },\n                {\n                    id: 3,\n                    name: \"user2\",\n                    role: \"用户2\"\n                },\n                {\n                    id: 4,\n                    name: \"user3\",\n                    role: \"用户3\"\n                }\n            ],\n            bordered: true,\n            renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Col_Divider_Drawer_List_Row_antd__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            onClick: showDrawer,\n                            children: \"编辑\"\n                        }, \"a-\".concat(item.id), false, {\n                            fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/component/userList.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, void 0)\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Col_Divider_Drawer_List_Row_antd__WEBPACK_IMPORTED_MODULE_2__.List.Item.Meta, {\n                        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Col_Divider_Drawer_List_Row_antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                            src: \"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/component/userList.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, void 0),\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/component/userList.js\",\n                            lineNumber: 56,\n                            columnNumber: 22\n                        }, void 0),\n                        description: item.role\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/component/userList.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, void 0)\n                }, item.id, false, {\n                    fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/component/userList.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, void 0)\n        }, void 0, false, {\n            fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/component/userList.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(App, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c1 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"DescriptionItem\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvdXNlckxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDdUI7QUFDL0QsTUFBTVEsa0JBQWtCO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUU7eUJBQ3pDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7O29CQUF5Q0g7b0JBQU07Ozs7Ozs7WUFDM0RDOzs7Ozs7OztLQUhDRjtBQU1OLE1BQU1NLE1BQU07O0lBQ1YsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1nQixhQUFhO1FBQ2pCRCxRQUFRO0lBQ1Y7SUFDQSxNQUFNRSxVQUFVO1FBQ2RGLFFBQVE7SUFDVjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDVixnR0FBSUE7WUFDSGEsWUFBWTtnQkFDVjtvQkFDRUMsSUFBSTtvQkFDSkMsTUFBTTtvQkFDTkMsTUFBSztnQkFDUDtnQkFDQTtvQkFDRUYsSUFBSTtvQkFDSkMsTUFBTTtvQkFDTkMsTUFBSztnQkFDUDtnQkFDQTtvQkFDRUYsSUFBSTtvQkFDSkMsTUFBTTtvQkFDTkMsTUFBSztnQkFDUDtnQkFDQTtvQkFDRUYsSUFBSTtvQkFDSkMsTUFBTTtvQkFDTkMsTUFBSztnQkFDUDthQUNEO1lBQ0RDLFFBQVE7WUFDUkMsWUFBWSxDQUFDQyxxQkFDWCw4REFBQ25CLGdHQUFJQSxDQUFDb0IsSUFBSTtvQkFFUkMsU0FBUztzQ0FDUCw4REFBQ0M7NEJBQUVDLFNBQVNaO3NDQUFpQzsyQkFBaEIsS0FBYSxPQUFSUSxLQUFLTCxFQUFFOzs7OztxQkFHMUM7OEJBRUQsNEVBQUNkLGdHQUFJQSxDQUFDb0IsSUFBSSxDQUFDSSxJQUFJO3dCQUNiQyxzQkFDRSw4REFBQzdCLGtHQUFNQTs0QkFBQzhCLEtBQUk7Ozs7Ozt3QkFFZHZCLHFCQUFPLDhEQUFDbUI7NEJBQUVLLE1BQUs7c0NBQUlSLEtBQUtKLElBQUk7Ozs7Ozt3QkFDNUJhLGFBQWFULEtBQUtILElBQUk7Ozs7OzttQkFabkJHLEtBQUtMLEVBQUU7Ozs7Ozs7Ozs7O0FBbUJ4QjtHQXZETU47TUFBQUE7QUF3RE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3VzZXJMaXN0LmpzPzgzNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyLCBDb2wsIERpdmlkZXIsIERyYXdlciwgTGlzdCwgUm93IH0gZnJvbSAnYW50ZCc7XG5jb25zdCBEZXNjcmlwdGlvbkl0ZW0gPSAoeyB0aXRsZSwgY29udGVudCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1kZXNjcmlwdGlvbi1pdGVtLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgIDxwIGNsYXNzTmFtZT1cInNpdGUtZGVzY3JpcHRpb24taXRlbS1wcm9maWxlLXAtbGFiZWxcIj57dGl0bGV9OjwvcD5cbiAgICB7Y29udGVudH1cbiAgPC9kaXY+XG4pO1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpc3RcbiAgICAgICAgZGF0YVNvdXJjZT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ0FkbWluJyxcbiAgICAgICAgICAgIHJvbGU6J+euoeeQhuWRmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZTogJ3VzZXIxJyxcbiAgICAgICAgICAgIHJvbGU6J+eUqOaItzEnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG5hbWU6ICd1c2VyMicsXG4gICAgICAgICAgICByb2xlOifnlKjmiLcyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBuYW1lOiAndXNlcjMnLFxuICAgICAgICAgICAgcm9sZTon55So5oi3MydcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBib3JkZXJlZFxuICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuICAgICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17c2hvd0RyYXdlcn0ga2V5PXtgYS0ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAg57yW6L6RXG4gICAgICAgICAgICAgIDwvYT4sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0JpYXpmYW54bWFtTlJveHhWeGthLnBuZ1wiIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9XCJcIj57aXRlbS5uYW1lfTwvYT59XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLnJvbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdmF0YXIiLCJDb2wiLCJEaXZpZGVyIiwiRHJhd2VyIiwiTGlzdCIsIlJvdyIsIkRlc2NyaXB0aW9uSXRlbSIsInRpdGxlIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJBcHAiLCJvcGVuIiwic2V0T3BlbiIsInNob3dEcmF3ZXIiLCJvbkNsb3NlIiwiZGF0YVNvdXJjZSIsImlkIiwibmFtZSIsInJvbGUiLCJib3JkZXJlZCIsInJlbmRlckl0ZW0iLCJpdGVtIiwiSXRlbSIsImFjdGlvbnMiLCJhIiwib25DbGljayIsIk1ldGEiLCJhdmF0YXIiLCJzcmMiLCJocmVmIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/userList.js\n"));

/***/ })

});