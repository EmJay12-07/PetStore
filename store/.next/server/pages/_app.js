(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./styles/Header.module.scss
var Header_module = __webpack_require__(395);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ var logo = ({"src":"/_next/static/image/public/logo.0190b46c533618ec0ded1807718e5108.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./components/Header.tsx





function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (Header_module_default()).header,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).header__logo,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: logo,
        alt: "",
        width: "38",
        height: "38"
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: (Header_module_default()).header__title,
        children: "Paws & Play Emporium"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: "header__summary snipcart-checkout snipcart-summary",
      href: "#",
      style: {
        textDecoration: "none"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
        width: "31",
        height: "27",
        viewBox: "0 0 31 27",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M1.10512 0.368718C0.560256 0.368718 0.118164 0.812066 0.118164 1.35848C0.118164 1.9049 0.560256 2.34824 1.10512 2.34824H4.90887L8.30138 18.4009C8.43503 19.0053 8.83085 19.5079 9.32946 19.5041H25.7788C26.3005 19.5118 26.7799 19.0375 26.7799 18.5143C26.7799 17.9911 26.3006 17.5168 25.7788 17.5245H10.1315L9.71003 15.545H27.095C27.5371 15.5412 27.9547 15.2048 28.0511 14.7718L30.354 4.87412C30.4825 4.29933 29.9852 3.67172 29.3979 3.66786H7.21171L6.6771 1.15221C6.58329 0.71276 6.15921 0.368652 5.7107 0.368652L1.10512 0.368718ZM7.623 5.64746H12.7634L13.2569 8.61674H8.25005L7.623 5.64746ZM14.7785 5.64746H20.9881L20.4946 8.61674H15.2719L14.7785 5.64746ZM23.0031 5.64746H28.1537L27.4649 8.61674H22.5097L23.0031 5.64746ZM8.67181 10.5963H13.5862L14.0797 13.5656H9.29919L8.67181 10.5963ZM15.6009 10.5963H20.1656L19.6721 13.5656H16.0944L15.6009 10.5963ZM22.1807 10.5963H27.0023L26.3135 13.5656H21.6872L22.1807 10.5963ZM12.6197 20.164C10.8141 20.164 9.32979 21.6525 9.32979 23.4632C9.32979 25.2739 10.8141 26.7624 12.6197 26.7624C14.4252 26.7624 15.9095 25.2739 15.9095 23.4632C15.9095 21.6525 14.4252 20.164 12.6197 20.164ZM22.4892 20.164C20.6837 20.164 19.1994 21.6525 19.1994 23.4632C19.1994 25.2739 20.6837 26.7624 22.4892 26.7624C24.2948 26.7624 25.7791 25.2739 25.7791 23.4632C25.7791 21.6525 24.2948 20.164 22.4892 20.164ZM12.6197 22.1435C13.3586 22.1435 13.9356 22.7222 13.9356 23.4632C13.9356 24.2042 13.3586 24.7829 12.6197 24.7829C11.8807 24.7829 11.3037 24.2042 11.3037 23.4632C11.3037 22.7222 11.8807 22.1435 12.6197 22.1435ZM22.4892 22.1435C23.2282 22.1435 23.8052 22.7222 23.8052 23.4632C23.8052 24.2042 23.2282 24.7829 22.4892 24.7829C21.7503 24.7829 21.1733 24.2042 21.1733 23.4632C21.1733 22.7222 21.7503 22.1435 22.4892 22.1435Z",
          fill: "#9094FF"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "header__price snipcart-total-price"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "app",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 395:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__2-XWX",
	"header__logo": "Header_header__logo__E1yl1",
	"header__title": "Header_header__title__1etKw"
};


/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,675], function() { return __webpack_exec__(402); });
module.exports = __webpack_exports__;

})();