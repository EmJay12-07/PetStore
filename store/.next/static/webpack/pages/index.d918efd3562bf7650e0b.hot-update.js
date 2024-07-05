/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Product.tsx":
/*!********************************!*\
  !*** ./components/Product.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/workspaces/PetStore/store/components/Product.tsx\",\n    _this = undefined;\n\n\n\nvar Product = function Product(props) {\n  console.log(props.product, \"Props\");\n  var productStyle = {\n    display: 'inline-block',\n    width: '300px',\n    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',\n    // Adding box shadow\n    margin: '10px',\n    padding: '10px',\n    textAlign: 'left',\n    borderRadius: '8px' // Adding border radius for rounded corners\n\n  };\n  var imageStyle = {\n    maxWidth: '100%',\n    height: 'auto',\n    borderRadius: '8px' // Applying border radius to image\n\n  };\n  var buttonStyle = {\n    backgroundColor: '#0070f3',\n    color: 'white',\n    border: 'none',\n    padding: '8px 12px',\n    cursor: 'pointer',\n    transition: 'background-color 0.3s ease',\n    borderRadius: '4px' // Adding border radius to button\n\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: productStyle,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        marginBottom: '10px'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: imageStyle,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: props.product.image,\n          alt: props.product.name,\n          width: 300,\n          height: 200\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        style: {\n          fontSize: '18px',\n          marginBottom: '5px'\n        },\n        children: props.product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: {\n          color: '#666',\n          marginBottom: '10px'\n        },\n        children: props.product.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: {\n          color: '#000',\n          marginBottom: '10px',\n          fontWeight: 600\n        },\n        children: [\"Category: \", props.product.category]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          fontSize: '16px',\n          fontWeight: 'bold',\n          marginBottom: '10px'\n        },\n        children: [\"$\", props.product.price.toFixed(2)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"snipcart-add-item\",\n        style: buttonStyle,\n        \"data-item-id\": props.product.id,\n        \"data-item-name\": props.product.name,\n        \"data-item-category\": props.product.category,\n        \"data-item-price\": props.product.price.toString(),\n        \"data-item-url\": props.product.url,\n        \"data-item-image\": props.product.image.toString(),\n        children: \"Add to cart\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LnRzeD9hZDU1Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0IiwicHJvZHVjdFN0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwiYm94U2hhZG93IiwibWFyZ2luIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsImltYWdlU3R5bGUiLCJtYXhXaWR0aCIsImhlaWdodCIsImJ1dHRvblN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwibWFyZ2luQm90dG9tIiwiaW1hZ2UiLCJuYW1lIiwiZm9udFNpemUiLCJkZXNjcmlwdGlvbiIsImZvbnRXZWlnaHQiLCJjYXRlZ29yeSIsInByaWNlIiwidG9GaXhlZCIsImlkIiwidG9TdHJpbmciLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBaUJBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBMEI7QUFDdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE9BQWxCLEVBQTJCLE9BQTNCO0FBQ0EsTUFBTUMsWUFBMkIsR0FBRztBQUNoQ0MsV0FBTyxFQUFFLGNBRHVCO0FBRWhDQyxTQUFLLEVBQUUsT0FGeUI7QUFHaENDLGFBQVMsRUFBRSxnQ0FIcUI7QUFHYTtBQUM3Q0MsVUFBTSxFQUFFLE1BSndCO0FBS2hDQyxXQUFPLEVBQUUsTUFMdUI7QUFNaENDLGFBQVMsRUFBRSxNQU5xQjtBQU9oQ0MsZ0JBQVksRUFBRSxLQVBrQixDQU9YOztBQVBXLEdBQXBDO0FBVUEsTUFBTUMsVUFBeUIsR0FBRztBQUM5QkMsWUFBUSxFQUFFLE1BRG9CO0FBRTlCQyxVQUFNLEVBQUUsTUFGc0I7QUFHOUJILGdCQUFZLEVBQUUsS0FIZ0IsQ0FHVDs7QUFIUyxHQUFsQztBQU1BLE1BQU1JLFdBQTBCLEdBQUc7QUFDL0JDLG1CQUFlLEVBQUUsU0FEYztBQUUvQkMsU0FBSyxFQUFFLE9BRndCO0FBRy9CQyxVQUFNLEVBQUUsTUFIdUI7QUFJL0JULFdBQU8sRUFBRSxVQUpzQjtBQUsvQlUsVUFBTSxFQUFFLFNBTHVCO0FBTS9CQyxjQUFVLEVBQUUsNEJBTm1CO0FBTy9CVCxnQkFBWSxFQUFFLEtBUGlCLENBT1Y7O0FBUFUsR0FBbkM7QUFXQSxzQkFDSTtBQUFLLFNBQUssRUFBRVAsWUFBWjtBQUFBLDRCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVpQixvQkFBWSxFQUFFO0FBQWhCLE9BQVo7QUFBQSw2QkFDSTtBQUFLLGFBQUssRUFBRVQsVUFBWjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQ0ksYUFBRyxFQUFFWixLQUFLLENBQUNHLE9BQU4sQ0FBY21CLEtBRHZCO0FBRUksYUFBRyxFQUFFdEIsS0FBSyxDQUFDRyxPQUFOLENBQWNvQixJQUZ2QjtBQUdJLGVBQUssRUFBRSxHQUhYO0FBSUksZ0JBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBV0k7QUFBQSw4QkFDSTtBQUFJLGFBQUssRUFBRTtBQUFFQyxrQkFBUSxFQUFFLE1BQVo7QUFBb0JILHNCQUFZLEVBQUU7QUFBbEMsU0FBWDtBQUFBLGtCQUF1RHJCLEtBQUssQ0FBQ0csT0FBTixDQUFjb0I7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBRyxhQUFLLEVBQUU7QUFBRU4sZUFBSyxFQUFFLE1BQVQ7QUFBaUJJLHNCQUFZLEVBQUU7QUFBL0IsU0FBVjtBQUFBLGtCQUFvRHJCLEtBQUssQ0FBQ0csT0FBTixDQUFjc0I7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBRyxhQUFLLEVBQUU7QUFBRVIsZUFBSyxFQUFFLE1BQVQ7QUFBaUJJLHNCQUFZLEVBQUUsTUFBL0I7QUFBdUNLLG9CQUFVLEVBQUU7QUFBbkQsU0FBVjtBQUFBLGlDQUErRTFCLEtBQUssQ0FBQ0csT0FBTixDQUFjd0IsUUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFLLGFBQUssRUFBRTtBQUFFSCxrQkFBUSxFQUFFLE1BQVo7QUFBb0JFLG9CQUFVLEVBQUUsTUFBaEM7QUFBd0NMLHNCQUFZLEVBQUU7QUFBdEQsU0FBWjtBQUFBLHdCQUNNckIsS0FBSyxDQUFDRyxPQUFOLENBQWN5QixLQUFkLENBQW9CQyxPQUFwQixDQUE0QixDQUE1QixDQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBT0k7QUFDSSxpQkFBUyxFQUFDLG1CQURkO0FBRUksYUFBSyxFQUFFZCxXQUZYO0FBR0ksd0JBQWNmLEtBQUssQ0FBQ0csT0FBTixDQUFjMkIsRUFIaEM7QUFJSSwwQkFBZ0I5QixLQUFLLENBQUNHLE9BQU4sQ0FBY29CLElBSmxDO0FBS0ksOEJBQW9CdkIsS0FBSyxDQUFDRyxPQUFOLENBQWN3QixRQUx0QztBQU1JLDJCQUFpQjNCLEtBQUssQ0FBQ0csT0FBTixDQUFjeUIsS0FBZCxDQUFvQkcsUUFBcEIsRUFOckI7QUFPSSx5QkFBZS9CLEtBQUssQ0FBQ0csT0FBTixDQUFjNkIsR0FQakM7QUFRSSwyQkFBaUJoQyxLQUFLLENBQUNHLE9BQU4sQ0FBY21CLEtBQWQsQ0FBb0JTLFFBQXBCLEVBUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQ0gsQ0EvREQ7O0tBQU1oQyxPO0FBaUVOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGNhdGVnb3J5OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJUHJvZHVjdFByb3BzIHtcbiAgICBwcm9kdWN0OiBJUHJvZHVjdDtcbn1cblxuY29uc3QgUHJvZHVjdCA9IChwcm9wczogSVByb2R1Y3RQcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb3BzLnByb2R1Y3QsIFwiUHJvcHNcIik7XG4gICAgY29uc3QgcHJvZHVjdFN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgd2lkdGg6ICczMDBweCcsXG4gICAgICAgIGJveFNoYWRvdzogJzBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKScsIC8vIEFkZGluZyBib3ggc2hhZG93XG4gICAgICAgIG1hcmdpbjogJzEwcHgnLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLCAvLyBBZGRpbmcgYm9yZGVyIHJhZGl1cyBmb3Igcm91bmRlZCBjb3JuZXJzXG4gICAgfTtcblxuICAgIGNvbnN0IGltYWdlU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLCAvLyBBcHBseWluZyBib3JkZXIgcmFkaXVzIHRvIGltYWdlXG4gICAgfTtcblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA3MGYzJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBwYWRkaW5nOiAnOHB4IDEycHgnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JywgLy8gQWRkaW5nIGJvcmRlciByYWRpdXMgdG8gYnV0dG9uXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17cHJvZHVjdFN0eWxlfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17aW1hZ2VTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5wcm9kdWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9wcy5wcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiAnMThweCcsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+e3Byb3BzLnByb2R1Y3QubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzY2NicsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19Pntwcm9wcy5wcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMwMDAnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgZm9udFdlaWdodDogNjAwIH19PkNhdGVnb3J5OiB7cHJvcHMucHJvZHVjdC5jYXRlZ29yeX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAke3Byb3BzLnByb2R1Y3QucHJpY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc25pcGNhcnQtYWRkLWl0ZW0nXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtLWlkPXtwcm9wcy5wcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW0tbmFtZT17cHJvcHMucHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW0tY2F0ZWdvcnk9e3Byb3BzLnByb2R1Y3QuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbS1wcmljZT17cHJvcHMucHJvZHVjdC5wcmljZS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWl0ZW0tdXJsPXtwcm9wcy5wcm9kdWN0LnVybH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtLWltYWdlPXtwcm9wcy5wcm9kdWN0LmltYWdlLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.tsx\n");

/***/ })

});