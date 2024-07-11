const express = require('express');
const router = express.Router();
const db = require('../Data/db');
const cartFunction = require('../Controllers/cartFunction');
const orderFunction = require('../Controllers/orderFunction');
const adminFunction = require('../Controllers/admiFuction');
const nodemailer = require('nodemailer');

const { requiresAuth } = require('express-openid-connect');

const products = require('../Data/products');

// Middleware to set authentication and user data
router.use((req, res, next) => {
    res.locals.isAuthenticated = req.oidc.isAuthenticated();
    res.locals.user = req.oidc.user;
    next();
});

// Home route
router.get('/', (req, res) => {
    res.render('Hero', { title: 'Products', products });
});

// Products route
router.get('/products', (req, res) => {
    res.render('products', { title: 'Products', products });
});

// Add to cart route
router.post('/add-to-cart', (req, res) => {
    const { productId, quantity } = req.body;
    if (!productId) {
        return res.status(400).send({ error: 'Product ID is required' });
    }
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).send({ error: 'Product not found' });
    }
    cartFunction.addProductToCart(product, parseInt(quantity, 10));
    res.redirect('/cart');
});

// Cart route
router.get('/cart', requiresAuth(), (req, res) => {
    const user = req.oidc.user;
    cartFunction.getCart((cart) => {
        res.render('cart', { title: 'Your Cart', cart, email: user.email });
    });
});

// Checkout route
router.post('/checkout', requiresAuth(), (req, res) => {
    const user = req.oidc.user;
    const { results, cart } = req.body;
    const order = {
        paymentProvider: results.provider,
        totalAmount: results.value,
        email: user.email,
        state: results.state,
        items: cart
    };
    orderFunction.createOrder(order, (err, orderId) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ message: 'Error creating order' });
        }
        cartFunction.clearCart();

        // Send email to the user
        sendOrderConfirmationEmail(user.email, order)
            .then(() => {
                res.status(200).send({ message: 'Order created', orderId });
            })
            .catch((emailError) => {
                console.error('Error sending email:', emailError);
                res.status(200).send({ message: 'Order created', orderId });
            });
    });
});

// Helper function to send order confirmation email
function sendOrderConfirmationEmail(email, order) {
    return new Promise((resolve, reject) => {
        // Nodemailer for sending email
        const transporter = nodemailer.createTransport({
            // Email transport configuration
            service: 'gmail',
            auth: {
                user: 'tckiprotich@gmail.com',
                pass: 'ochcfiggaafyrgyh',
            },
        });

        const mailOptions = {
            from: 'tckiprotich@outlook.com',
            to: email,
            subject: 'Order Confirmation',
            text: `
          Thank you for your order!
          
          Order Details:
          Payment Provider: ${order.paymentProvider}
          Total Amount: ${order.totalAmount}
          State: ${order.state}
          Items: ${order.items.map(item => item.name).join(', ')}
        `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                reject(error);
            } else {
                console.log('Email sent:', info.response);
                resolve();
            }
        });
    });
}

// Orders route
router.get('/orders', requiresAuth(), (req, res) => {
    const user = req.oidc.user;
    const email = user.email;
    orderFunction.getOrders(email, (orders) => {
        console.log(JSON.stringify(orders, null, 2), 'All orders');
        res.render('orders', { title: 'Your Orders', orders, email: user.email });
    });
});

// Admin route
router.get('/admin', requiresAuth(), (req, res) => {
    const user = req.oidc.user;
    if (user.email.toLowerCase() !== 'admin@store.com') {
        return res.render('NotAdmin', { title: 'Not Admin', email: user.email });
    }
    res.render('Admin', { title: 'Admin', email: user.email });
});

// Admin products route
router.get('/admin/products', requiresAuth(), (req, res) => {
    res.render('Partials/products', { products });
});

// Admin orders route
router.get('/admin/orders', requiresAuth(), (req, res) => {
    adminFunction.getOrders((orders) => {
        res.render('Partials/orders', { orders });
    });
});

module.exports = router;