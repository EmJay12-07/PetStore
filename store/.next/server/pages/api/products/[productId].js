/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/products/[productId]";
exports.ids = ["pages/api/products/[productId]"];
exports.modules = {

/***/ "./pages/api/products/[productId].ts":
/*!*******************************************!*\
  !*** ./pages/api/products/[productId].ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nasync function handler(req, res) {\n  var _product$image;\n\n  const {\n    productId\n  } = req.query; // Fetch the products from the API\n\n  const response = await fetch('https://api-indol-psi.vercel.app/api/products');\n  const products = await response.json();\n  const product = products.find(p => p.id === productId);\n\n  if (!product) {\n    res.status(404).json({});\n    return;\n  }\n\n  const snipcartProduct = _objectSpread(_objectSpread({}, product), {}, {\n    image: (_product$image = product === null || product === void 0 ? void 0 : product.image) !== null && _product$image !== void 0 ? _product$image : \"\"\n  });\n\n  res.status(200).json(snipcartProduct);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmlwY2FydC1uZXh0anMvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW3Byb2R1Y3RJZF0udHM/ZTc4NSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJvZHVjdElkIiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwicHJvZHVjdHMiLCJqc29uIiwicHJvZHVjdCIsImZpbmQiLCJwIiwiaWQiLCJzdGF0dXMiLCJzbmlwY2FydFByb2R1Y3QiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVllLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRDQyxHQUE1QyxFQUFrRTtBQUFBOztBQUM3RSxRQUFNO0FBQUNDO0FBQUQsTUFBY0YsR0FBRyxDQUFDRyxLQUF4QixDQUQ2RSxDQUc3RTs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLCtDQUFELENBQTVCO0FBQ0EsUUFBTUMsUUFBb0IsR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkM7QUFFQSxRQUFNQyxPQUE2QixHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU1QsU0FBNUIsQ0FBdEM7O0FBQ0EsTUFBSSxDQUFDTSxPQUFMLEVBQWM7QUFDVlAsT0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkwsSUFBaEIsQ0FBcUIsRUFBckI7QUFDQTtBQUNIOztBQUNELFFBQU1NLGVBQWlDLG1DQUFPTCxPQUFQO0FBQWdCTSxTQUFLLG9CQUFFTixPQUFGLGFBQUVBLE9BQUYsdUJBQUVBLE9BQU8sQ0FBRU0sS0FBWCwyREFBbUI7QUFBeEMsSUFBdkM7O0FBRUFiLEtBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JMLElBQWhCLENBQXFCTSxlQUFyQjtBQUNIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Byb2R1Y3RzL1twcm9kdWN0SWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHtJUHJvZHVjdH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTbmlwY2FydFByb2R1Y3Qge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBwcmljZTogbnVtYmVyXG4gICAgdXJsOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgaW1hZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3Qge3Byb2R1Y3RJZH0gPSByZXEucXVlcnk7XG5cbiAgICAvLyBGZXRjaCB0aGUgcHJvZHVjdHMgZnJvbSB0aGUgQVBJXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGktaW5kb2wtcHNpLnZlcmNlbC5hcHAvYXBpL3Byb2R1Y3RzJyk7XG4gICAgY29uc3QgcHJvZHVjdHM6IElQcm9kdWN0W10gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBwcm9kdWN0OiBJUHJvZHVjdCB8IHVuZGVmaW5lZCA9IHByb2R1Y3RzLmZpbmQocCA9PiBwLmlkID09PSBwcm9kdWN0SWQpO1xuICAgIGlmICghcHJvZHVjdCkge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7fSk7XG4gICAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGNvbnN0IHNuaXBjYXJ0UHJvZHVjdDogSVNuaXBjYXJ0UHJvZHVjdCA9IHsuLi5wcm9kdWN0LCBpbWFnZTogcHJvZHVjdD8uaW1hZ2U/PyBcIlwifVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oc25pcGNhcnRQcm9kdWN0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/products/[productId].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/[productId].ts"));
module.exports = __webpack_exports__;

})();