exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 210:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(689);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Product.tsx




const Product = props => {
  console.log(props.product, "Props");
  const productStyle = {
    display: 'inline-block',
    width: '300px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    // Adding box shadow
    margin: '10px',
    padding: '10px',
    textAlign: 'left',
    borderRadius: '8px' // Adding border radius for rounded corners

  };
  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px' // Applying border radius to image

  };
  const buttonStyle = {
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    borderRadius: '4px' // Adding border radius to button

  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: productStyle,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        marginBottom: '10px'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: imageStyle,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: props.product.image,
          alt: props.product.name,
          width: 300,
          height: 200
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        style: {
          fontSize: '18px',
          marginBottom: '5px'
        },
        children: props.product.name
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        style: {
          color: '#666',
          marginBottom: '10px'
        },
        children: props.product.description
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        style: {
          color: '#000',
          marginBottom: '10px',
          fontWeight: 600
        },
        children: ["Category: ", props.product.category]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '10px'
        },
        children: ["$", props.product.price.toFixed(2)]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "snipcart-add-item",
        style: buttonStyle,
        "data-item-id": props.product.id,
        "data-item-name": props.product.name,
        "data-item-category": props.product.category,
        "data-item-price": props.product.price.toString(),
        "data-item-url": props.product.url,
        "data-item-image": props.product.image.toString(),
        children: "Add to cart"
      })]
    })]
  });
};

/* harmony default export */ var components_Product = (Product);
;// CONCATENATED MODULE: ./components/ProductList.tsx



const ProductList = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "product-list",
    children: props.products.map((product, index) => /*#__PURE__*/jsx_runtime_.jsx(components_Product, {
      product: product
    }, index))
  });
};

/* harmony default export */ var components_ProductList = (ProductList);
// EXTERNAL MODULE: ./styles/Contact.module.scss
var Contact_module = __webpack_require__(218);
var Contact_module_default = /*#__PURE__*/__webpack_require__.n(Contact_module);
;// CONCATENATED MODULE: ./components/Contact.tsx



function Contact() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Contact_module_default()).contact,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
      className: (Contact_module_default()).contact__title,
      children: ["Any questions? ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Contact_module_default()).colored,
        children: "Contact us."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (Contact_module_default()).contact__paragraph,
      children: "We are looking forward to hearing from you. Feel free to contact us if you have any questions!"
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "#",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        children: "Contact Us"
      })
    })]
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./public/aquarium.svg
/* harmony default export */ var aquarium = ({"src":"/_next/static/image/public/aquarium.b3e0bfe4f9f4a5129d9cd5344a01393d.svg","height":683,"width":683});
;// CONCATENATED MODULE: ./components/Jumbotron.tsx






const Jumbotron = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "background-image",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: aquarium,
        alt: aquarium
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "promotional-message",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "REDISCOVER"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Pet Store"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Embrace ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "the joy of companionship"
        }), "  the joy of companionship with products that cater to every member of your furry family.."]
      })]
    })]
  });
};

/* harmony default export */ var components_Jumbotron = (Jumbotron);
;// CONCATENATED MODULE: ./pages/index.tsx








function Home({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "My awesome store"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://app.snipcart.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://cdn.snipcart.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "../public/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "main",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Jumbotron, {}), /*#__PURE__*/jsx_runtime_.jsx(components_ProductList, {
        products: products
      }), /*#__PURE__*/jsx_runtime_.jsx(Contact, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      src: "https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      hidden: true,
      id: "snipcart",
      "data-api-key": "MzEwZDg0MDctYjY4YS00YzcyLTlmMzAtZDVlNGI2YjAzNGI2NjM4NDY5NjM5MTM2NzYzNjc1"
    })]
  });
}
const getStaticProps = async context => {
  const res = await fetch('https://api-indol-psi.vercel.app/api/products');
  const products = await res.json(); // console.log(products);

  return {
    props: {
      products
    }
  };
};

/***/ }),

/***/ 218:
/***/ (function(module) {

// Exports
module.exports = {
	"contact": "Contact_contact__1t0GH",
	"contact__title": "Contact_contact__title__17i9a",
	"colored": "Contact_colored__37mPH",
	"contact__paragraph": "Contact_contact__paragraph__382a-"
};


/***/ })

};
;