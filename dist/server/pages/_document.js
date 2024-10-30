"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    debug: \"development\" === \"development\",\n    i18n: {\n        defaultLocale: \"zh\",\n        locales: [\n            \"en\",\n            \"zh\"\n        ]\n    },\n    react: {\n        useSuspense: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLE9BQU9DLGtCQUF5QjtJQUNoQ0MsTUFBTTtRQUNKQyxlQUFlO1FBQ2ZDLFNBQVM7WUFBQztZQUFLO1NBQUs7SUFDdEI7SUFDQUMsT0FBTztRQUFFQyxhQUFhO0lBQU07QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzPzFjYjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcbiAgaTE4bjoge1xuICAgIGRlZmF1bHRMb2NhbGU6ICd6aCcsXG4gICAgbG9jYWxlczogWydlbicsJ3poJ10sXG4gIH0sXG4gIHJlYWN0OiB7IHVzZVN1c3BlbnNlOiBmYWxzZSB9XG59Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkZWJ1ZyIsInByb2Nlc3MiLCJpMThuIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZXMiLCJyZWFjdCIsInVzZVN1c3BlbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/cssinjs */ \"./node_modules/@ant-design/cssinjs/lib/index.js\");\n\n\n\n\n\nfunction MyDocument(props) {\n    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)([\n        \"common\"\n    ]);\n    const currentLocale = props.__NEXT_DATA__.query.locale || (_next_i18next_config__WEBPACK_IMPORTED_MODULE_2___default().i18n).defaultLocale;\n    const meta = {\n        url: \"https://petmindreader.com\",\n        image: \"https://petmindreader.com/cat.png\",\n        socialImageURL: \"https://petmindreader.com/cat.png\",\n        title: t(\"title\"),\n        description: t(\"description\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: currentLocale,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: meta.title\n                    }, \"title\", false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: meta.description\n                    }, \"description\", false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"title\",\n                        content: meta.title\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: meta.description\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"https://petmindreader.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Cat, mind reader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"generator\",\n                        content: \"https://petmindreader.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: meta.title\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: meta.description\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: meta.url\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: meta.socialImageURL\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"twitter:card\",\n                        content: \"summary_large_image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"twitter:title\",\n                        content: meta.title\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"twitter:description\",\n                        content: meta.description\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"twitter:url\",\n                        content: meta.url\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"twitter:image\",\n                        content: meta.socialImageURL\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"apple-mobile-web-app-capable\",\n                        content: \"yes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\nMyDocument.getInitialProps = async (ctx)=>{\n    const cache = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_4__.createCache)();\n    const originalRenderPage = ctx.renderPage;\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_4__.StyleProvider, {\n                        cache: cache,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                            ...props\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n    const style = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_4__.extractStyle)(cache, true);\n    return {\n        ...initialProps,\n        styles: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                initialProps.styles,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                    dangerouslySetInnerHTML: {\n                        __html: style\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/user/Desktop/github/next.js-i18next-antDesign-sass/pages/_document.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0Q7b0JBQU1FLHlCQUF5Qjt3QkFBRUMsUUFBUUg7b0JBQU07Ozs7Ozs7O0lBR3REO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fZG9jdW1lbnQuanM/NTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQse1xuICBIdG1sLFxuICBIZWFkLFxuICBNYWluLFxuICBOZXh0U2NyaXB0LFxufSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IGkxOG5leHRDb25maWcgZnJvbSAnQC9uZXh0LWkxOG5leHQuY29uZmlnJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnXG5pbXBvcnQgeyBjcmVhdGVDYWNoZSwgZXh0cmFjdFN0eWxlLCBTdHlsZVByb3ZpZGVyIH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzaW5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15RG9jdW1lbnQocHJvcHMpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihbJ2NvbW1vbiddKVxuXG4gIGNvbnN0IGN1cnJlbnRMb2NhbGUgPVxuICAgIHByb3BzLl9fTkVYVF9EQVRBX18ucXVlcnkubG9jYWxlIHx8XG4gICAgaTE4bmV4dENvbmZpZy5pMThuLmRlZmF1bHRMb2NhbGVcbiAgY29uc3QgbWV0YSA9IHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9wZXRtaW5kcmVhZGVyLmNvbVwiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vcGV0bWluZHJlYWRlci5jb20vY2F0LnBuZ1wiLFxuICAgIHNvY2lhbEltYWdlVVJMOiBcImh0dHBzOi8vcGV0bWluZHJlYWRlci5jb20vY2F0LnBuZ1wiLFxuICAgIHRpdGxlOiB0KCd0aXRsZScpLFxuICAgIGRlc2NyaXB0aW9uOiB0KCdkZXNjcmlwdGlvbicpLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxIdG1sIGxhbmc9e2N1cnJlbnRMb2NhbGV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhLnRpdGxlfSBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSBrZXk9XCJkZXNjcmlwdGlvblwiIC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD17bWV0YS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJodHRwczovL3BldG1pbmRyZWFkZXIuY29tXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkNhdCwgbWluZCByZWFkZXJcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZ2VuZXJhdG9yXCIgY29udGVudD1cImh0dHBzOi8vcGV0bWluZHJlYWRlci5jb21cIiAvPlxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhLnRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXttZXRhLnVybH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e21ldGEuc29jaWFsSW1hZ2VVUkx9IC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXttZXRhLnRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD17bWV0YS51cmx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e21ldGEuc29jaWFsSW1hZ2VVUkx9IC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cblxuICAgICAgPC9IZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9IdG1sPlxuICApXG5cbn1cblxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlQ2FjaGUoKTtcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG4gIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gKHByb3BzKSA9PiAoXG4gICAgICAgIDxTdHlsZVByb3ZpZGVyIGNhY2hlPXtjYWNoZX0+XG4gICAgICAgICAgPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvU3R5bGVQcm92aWRlcj5cbiAgICAgICksXG4gICAgfSk7XG5cbiAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gIGNvbnN0IHN0eWxlID0gZXh0cmFjdFN0eWxlKGNhY2hlLCB0cnVlKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgc3R5bGVzOiAoXG4gICAgICA8PlxuICAgICAgICB7aW5pdGlhbFByb3BzLnN0eWxlc31cbiAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGUgfX0gLz5cbiAgICAgIDwvPlxuICAgICksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImkxOG5leHRDb25maWciLCJ1c2VUcmFuc2xhdGlvbiIsImNyZWF0ZUNhY2hlIiwiZXh0cmFjdFN0eWxlIiwiU3R5bGVQcm92aWRlciIsIk15RG9jdW1lbnQiLCJwcm9wcyIsInQiLCJjdXJyZW50TG9jYWxlIiwiX19ORVhUX0RBVEFfXyIsInF1ZXJ5IiwibG9jYWxlIiwiaTE4biIsImRlZmF1bHRMb2NhbGUiLCJtZXRhIiwidXJsIiwiaW1hZ2UiLCJzb2NpYWxJbWFnZVVSTCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsYW5nIiwicHJvcGVydHkiLCJjb250ZW50IiwibmFtZSIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjYWNoZSIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJlbmhhbmNlQXBwIiwiQXBwIiwiaW5pdGlhbFByb3BzIiwic3R5bGUiLCJzdHlsZXMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "@emotion/hash":
/*!********************************!*\
  !*** external "@emotion/hash" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@emotion/hash");

/***/ }),

/***/ "@emotion/unitless":
/*!************************************!*\
  !*** external "@emotion/unitless" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@emotion/unitless");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stylis":
/*!*************************!*\
  !*** external "stylis" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stylis");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@ant-design","vendor-chunks/rc-util","vendor-chunks/@babel","vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();