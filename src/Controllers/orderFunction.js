const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./product.sqlite');


function createOrder(order, callback) {
    console.log(order, 'order Save to database object');
    db.run(`INSERT INTO Orders (paymentProvider, totalAmount, email, state) VALUES (?, ?, ?, ?)`, 
    [order.paymentProvider, order.totalAmount, order.email, order.state], function(err) {
        if (err) {
            return callback(err);
        }
        const orderId = this.lastID;
        const orderItems = order.items.map(item => 
            `(${orderId}, "${item.productId}", "${item.productName}", ${item.productPrice}, "${item.productImage}", "${item.productDescription}", "${item.productUrl}", "${item.productCategory}", ${item.quantity}, ${item.totalPrice})`
        ).join(', ');
        db.run(`INSERT INTO OrderItems (orderId, productId, productName, productPrice, productImage, productDescription, productUrl, productCategory, quantity, totalPrice) VALUES ${orderItems}`, function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, orderId);
        });
    });
}

function getOrders(email, callback) {
    db.all(`SELECT * FROM Orders WHERE email = ?`, [email], (err, orders) => {
        if (err) {
            throw err;
        }

        let completed = 0;
        orders.forEach((order, index) => {
            db.all(`SELECT * FROM OrderItems WHERE orderId = ?`, [order.orderId], (err, items) => {
                if (err) {
                    throw err;
                }

                orders[index].items = items;
                completed++;

                if (completed === orders.length) {
                    callback(orders);
                }
            });
        });

        if (orders.length === 0) {
            callback([]);
        }
    });
}


module.exports = {
    createOrder,
    getOrders
}