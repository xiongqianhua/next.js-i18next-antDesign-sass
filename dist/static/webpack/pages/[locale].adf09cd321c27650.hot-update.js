"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locale]",{

/***/ "./pages/[locale]/index.js":
/*!*********************************!*\
  !*** ./pages/[locale]/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Flex,Form,Input,Layout,message!=!antd */ \"__barrel_optimize__?names=Button,Flex,Form,Input,Layout,message!=!./node_modules/antd/es/index.js\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var _component_LanguageMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/LanguageMenu */ \"./component/LanguageMenu.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_UserSwitchOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=UserSwitchOutlined!=!@ant-design/icons */ \"__barrel_optimize__?names=UserSwitchOutlined!=!./node_modules/@ant-design/icons/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst { Header, Footer, Sider, Content } = _barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Layout;\nconst headerStyle = {\n    textAlign: \"right\",\n    color: \"#4096ff\",\n    height: 64,\n    paddingInline: 48,\n    lineHeight: \"64px\",\n    backgroundColor: \"#fff\"\n};\nconst footerStyle = {\n    textAlign: \"center\",\n    color: \"#4096ff\",\n    height: 64,\n    paddingInline: 48,\n    lineHeight: \"64px\",\n    backgroundColor: \"#fff\"\n};\nconst Login = (param)=>{\n    let { someOtherData } = param;\n    _s();\n    const [messageApi, contextHolder] = _barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.message.useMessage();\n    const [loadings, setLoadings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)([\n        \"common\"\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const onFinish = (values)=>{\n        setLoadings(true);\n        console.log(\"Success:\", values);\n        if (values.username === \"super\" && values.password === \"super\") {\n            const locale = router.query.locale || (_next_i18next_config__WEBPACK_IMPORTED_MODULE_5___default().i18n).defaultLocale;\n            router.push(\"/\".concat(locale, \"/home\"));\n        } else {\n            messageApi.open({\n                type: \"error\",\n                content: t(\"p5\")\n            });\n        }\n        setLoadings(false);\n    };\n    const onFinishFailed = (errorInfo)=>{\n        console.log(\"Failed:\", errorInfo);\n        messageApi.open({\n            type: \"error\",\n            content: errorInfo\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                style: headerStyle,\n                children: [\n                    t(\"languageSwitch\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_LanguageMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 30\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loginPage \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"systemTitleStyle\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-focus-in\",\n                                    children: t(\"systemTitle\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                            name: \"basic\",\n                            labelCol: {\n                                span: 4\n                            },\n                            wrapperCol: {\n                                span: 16\n                            },\n                            className: \"loginForm\",\n                            initialValues: {\n                                remember: true\n                            },\n                            onFinish: onFinish,\n                            onFinishFailed: onFinishFailed,\n                            autoComplete: \"off\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Form.Item, {\n                                    label: t(\"Username\"),\n                                    name: \"username\",\n                                    rules: [\n                                        {\n                                            required: true,\n                                            message: t(\"p2\")\n                                        }\n                                    ],\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Input, {}, void 0, false, {\n                                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Form.Item, {\n                                    label: t(\"Password\"),\n                                    name: \"password\",\n                                    rules: [\n                                        {\n                                            required: true,\n                                            message: t(\"p1\")\n                                        }\n                                    ],\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Input.Password, {}, void 0, false, {\n                                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Form.Item, {\n                                    wrapperCol: {\n                                        offset: 4,\n                                        span: 16\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_UserSwitchOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UserSwitchOutlined, {}, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 39\n                                        }, void 0),\n                                        style: {\n                                            width: \"100%\"\n                                        },\n                                        type: \"primary\",\n                                        htmlType: \"submit\",\n                                        loading: loadings,\n                                        children: t(\"p3\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                style: footerStyle,\n                children: t(\"p4\")\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/[locale]/index.js\",\n        lineNumber: 56,\n        columnNumber: 12\n    }, undefined);\n};\n_s(Login, \"A5D2vxdlT9ebKd89rjUTar2SqKU=\", false, function() {\n    return [\n        _barrel_optimize_names_Button_Flex_Form_Input_Layout_message_antd__WEBPACK_IMPORTED_MODULE_6__.message.useMessage,\n        next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxtR0FBSUEsQ0FBQ3dELElBQUk7b0NBQ05KLFlBQVk7d0NBQ1JTLFFBQVE7d0NBQ1JWLE1BQU07b0NBQ1Y7OENBRUEsNEVBQUNyRCxxR0FBTUE7d0NBQUNnRSxvQkFBTSw4REFBQ3RELDBHQUFrQkE7Ozs7O3dDQUFLdUMsT0FBTzs0Q0FBQ2dCLE9BQU07d0NBQU07d0NBQUdyQixNQUFLO3dDQUFVc0IsVUFBUzt3Q0FBU0MsU0FBU3ZDO2tEQUNsR0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNdkIsOERBQUNsQjtnQkFBT3FDLE9BQU8zQjswQkFBY1EsRUFBRTs7Ozs7Ozs7Ozs7O0FBRXZDO0dBNUZNUDs7UUFDa0N0QixzR0FBT0EsQ0FBQzBCO1FBRTlCckIsd0RBQWNBO1FBQ2JFLGtEQUFTQTs7O0tBSnRCZTs7QUE2Rk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2FsZV0vaW5kZXguanM/MjIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCwgRmxleCwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCB7XG4gICAgZ2V0U3RhdGljUGF0aHMgLyosIG1ha2VTdGF0aWNQcm9wcyovLFxuICAgIGdldEkxOG5Qcm9wcyxcbn0gZnJvbSAnQC9saWIvZ2V0U3RhdGljJztcbmltcG9ydCBMYW5ndWFnZU1lbnUgZnJvbSAnQC9jb21wb25lbnQvTGFuZ3VhZ2VNZW51JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBpMThuZXh0Q29uZmlnIGZyb20gJ0AvbmV4dC1pMThuZXh0LmNvbmZpZyc7XG5pbXBvcnQgeyBVc2VyU3dpdGNoT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5cbmNvbnN0IHsgSGVhZGVyLCBGb290ZXIsIFNpZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgY29sb3I6ICcjNDA5NmZmJyxcbiAgICBoZWlnaHQ6IDY0LFxuICAgIHBhZGRpbmdJbmxpbmU6IDQ4LFxuICAgIGxpbmVIZWlnaHQ6ICc2NHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbn07XG5jb25zdCBmb290ZXJTdHlsZSA9IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGNvbG9yOiAnIzQwOTZmZicsXG4gICAgaGVpZ2h0OiA2NCxcbiAgICBwYWRkaW5nSW5saW5lOiA0OCxcbiAgICBsaW5lSGVpZ2h0OiAnNjRweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG59O1xuY29uc3QgTG9naW4gPSAoeyBzb21lT3RoZXJEYXRhIH0pID0+IHtcbiAgICBjb25zdCBbbWVzc2FnZUFwaSwgY29udGV4dEhvbGRlcl0gPSBtZXNzYWdlLnVzZU1lc3NhZ2UoKTtcbiAgICBjb25zdCBbbG9hZGluZ3MsIHNldExvYWRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFsnY29tbW9uJ10pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZ3ModHJ1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgdmFsdWVzKTtcbiAgICAgICAgaWYodmFsdWVzLnVzZXJuYW1lID09PSAnc3VwZXInICYmIHZhbHVlcy5wYXNzd29yZCA9PT0gJ3N1cGVyJyl7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGUgPSByb3V0ZXIucXVlcnkubG9jYWxlIHx8IGkxOG5leHRDb25maWcuaTE4bi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgLyR7bG9jYWxlfS9ob21lYCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbWVzc2FnZUFwaS5vcGVuKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHQoJ3A1JyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5ncyhmYWxzZSlcbiAgICB9O1xuICAgIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkOicsIGVycm9ySW5mbyk7XG4gICAgICAgIG1lc3NhZ2VBcGkub3Blbih7XG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgY29udGVudDogZXJyb3JJbmZvLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiA8TGF5b3V0IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgPEhlYWRlciBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICB7dCgnbGFuZ3VhZ2VTd2l0Y2gnKX08TGFuZ3VhZ2VNZW51Lz5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luUGFnZSAnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzeXN0ZW1UaXRsZVN0eWxlJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1mb2N1cy1pbic+e3QoJ3N5c3RlbVRpdGxlJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDb2w9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IDQsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IDE2LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvZ2luRm9ybSdcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtZW1iZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ1VzZXJuYW1lJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdwMicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ1Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdwMScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbjogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxVc2VyU3dpdGNoT3V0bGluZWQgLz59IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9hZGluZ3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdwMycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDxGb290ZXIgc3R5bGU9e2Zvb3RlclN0eWxlfT57dCgncDQnKX08L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuZXhwb3J0IHsgZ2V0U3RhdGljUGF0aHMgfVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgLy8gc29tZSBkYXRhIGZldGNoZWQgZnJvbSBhbnl3aGVyZS4uLlxuICBjb25zdCBzb21lT3RoZXJEYXRhID0gJ2hlbGxvIHdvcmxkJ1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAuLi4oYXdhaXQgZ2V0STE4blByb3BzKGN0eCwgW1xuICAgICAgICAnY29tbW9uJyxcbiAgICAgIF0pKSxcbiAgICAgIHNvbWVPdGhlckRhdGEsXG4gICAgfSxcbiAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwibWVzc2FnZSIsIkZvcm0iLCJJbnB1dCIsIkZsZXgiLCJMYXlvdXQiLCJ1c2VUcmFuc2xhdGlvbiIsIkxhbmd1YWdlTWVudSIsInVzZVJvdXRlciIsImkxOG5leHRDb25maWciLCJVc2VyU3dpdGNoT3V0bGluZWQiLCJIZWFkZXIiLCJGb290ZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJoZWFkZXJTdHlsZSIsInRleHRBbGlnbiIsImNvbG9yIiwiaGVpZ2h0IiwicGFkZGluZ0lubGluZSIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb290ZXJTdHlsZSIsIkxvZ2luIiwic29tZU90aGVyRGF0YSIsIm1lc3NhZ2VBcGkiLCJjb250ZXh0SG9sZGVyIiwidXNlTWVzc2FnZSIsImxvYWRpbmdzIiwic2V0TG9hZGluZ3MiLCJ0Iiwicm91dGVyIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvY2FsZSIsInF1ZXJ5IiwiaTE4biIsImRlZmF1bHRMb2NhbGUiLCJwdXNoIiwib3BlbiIsInR5cGUiLCJjb250ZW50Iiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpdiIsIm5hbWUiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwiaW5pdGlhbFZhbHVlcyIsInJlbWVtYmVyIiwiYXV0b0NvbXBsZXRlIiwiSXRlbSIsImxhYmVsIiwicnVsZXMiLCJyZXF1aXJlZCIsIlBhc3N3b3JkIiwib2Zmc2V0IiwiaWNvbiIsIndpZHRoIiwiaHRtbFR5cGUiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[locale]/index.js\n"));

/***/ })

});