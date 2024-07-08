const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./product.sqlite');

//Get All Orders
function getOrders(callback) {
    db.all(`SELECT * FROM Orders`, [], (err, orders) => {
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
    getOrders
}