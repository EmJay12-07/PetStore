const express = require('express');
const router = express.Router();
const db = require('../Data/db');
const cartFunction = require('../Controllers/cartFunction');
const orderFunction = require('../Controllers/orderFunction');
const adminFunction = require('../Controllers/admiFuction');

const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

//products
const products = require('../Data/products');



// Routes
router.get('/', (req, res) => {
    res.render('Hero', { title: 'Products', products });
});
router.get('/products', (req, res) => {
    res.render('products', { title: 'Products', products });
}
);

router.post('/add-to-cart', (req, res) => {
    if (!req.body.productId) {
        res.status(400).send({ error: 'Product ID is required' });
        return;
    }
    const productId = req.body.productId;
    const quantity = parseInt(req.body.quantity, 10)
    const product = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).send({ error: 'Product not found' });
        return;
    }
    // adding the product to the cart table sqlite
    cartFunction.addProductToCart(product, quantity);
    res.redirect('/cart');
});

router.get('/cart', (req, res) => {
    //check if user is logged in
    if (!req.oidc.isAuthenticated()) {
        res.redirect('/login');
    }

    const user = req.oidc.user;
    const email = user.email;

    // Get the cart from the database
    cartFunction.getCart((cart) => {
        res.render('cart', { title: 'Your Cart', cart, email });
    });
});

let orders = []; // Initialize your in-memory database

router.post('/checkout', (req, res) => {
    //check if user is logged in
    if (!req.oidc.isAuthenticated()) {
        res.redirect('/login');
    }
    const user = req.oidc.user;
    const email = user.email;
    const PaymentResults = req.body.results;
    const items = req.body.cart;
    const order = {
        paymentProvider: PaymentResults.provider,
        totalAmount: PaymentResults.value,
        email: email,
        state: PaymentResults.state,
        items: items
    };
    // Save the order to the database
    orderFunction.createOrder(order, (err, orderId) => {
        if (err) {
            // Handle error (maybe log it and send a 500 response)
            console.error(err);
            res.status(500).send({ message: 'Error creating order' });
        } else {
            //clear cart
            cartFunction.clearCart();
            // Order was created successfully
            res.status(200).send({ message: 'Order created', orderId: orderId });
        }
    });

});

router.get('/orders', (req, res) => {
    //check if user is logged in
    if (!req.oidc.isAuthenticated()) {
        res.redirect('/login');
    }

    const user = req.oidc.user;
    const email = user.email;

    // Get all orders from the database
    orderFunction.getOrders((orders) => {
        console.log(JSON.stringify(orders, null, 2), 'All orders');
        res.render('orders', { title: 'Your Orders', orders, email });
    });
});

router.get('/admin', requiresAuth(), (req, res) => {
    //check if user is logged in
    if (!req.oidc.isAuthenticated()) {
        res.redirect('/login');
    }

    const user = req.oidc.user;
    const email = user.email;

    // Check if the user's email is admin@store.com
    if (email !== 'admin@store.com') {
        // Redirect the user to the home page or send an error response
        res.redirect('/');
        // Or send an error response
        // res.status(403).send('Unauthorized');
        return;
    }

    res.render('admins', { title: 'Admin' }, email);    
    
});

// Route to get products
router.get('/admin/products', requiresAuth(), (req, res) => {
    res.render('Partials/products', { products });
});

// Route to get orders
router.get('/admin/orders', requiresAuth(), (req, res) => {
    adminFunction.getOrders((orders) => {
        res.render('Partials/orders', { orders });
    });
});




module.exports = router;