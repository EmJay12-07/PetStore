const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./product.sqlite');

function addProductToCart(product, quantity) {
    const totalPrice = product.price * quantity;

    db.get(`SELECT * FROM CartItem WHERE productId = ?`, [product.id], function(err, row) {
        if (err) {
            return console.log(err.message);
        }

        if (row) {
            // Product already exists in the cart, update the quantity and total price
            const newQuantity = row.quantity + quantity;
            const newTotalPrice = row.productPrice * newQuantity;

            db.run(`UPDATE CartItem SET quantity = ?, totalPrice = ? WHERE productId = ?`, [newQuantity, newTotalPrice, product.id], function(err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log(`Row with productId ${product.id} has been updated`);
            });
        } else {
            // Product does not exist in the cart, insert as a new item
            db.run(`INSERT INTO CartItem(productId, productName, productPrice, productImage, productDescription, productUrl, productCategory, quantity, totalPrice) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [product.id, product.name, product.price, product.image, product.description, product.url, product.category, quantity, totalPrice], function (err) {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log(`A row has been inserted with rowid ${this.lastID}`);
                });
        }
    });
}

function getCart(callback) {
    db.all(`SELECT * FROM CartItem`, [], (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log('Cart items:', rows);
        callback(rows);
    });
}

// Clear the cart
function clearCart() {
    db.run(`DELETE FROM CartItem`, [], (err) => {
        if (err) {
            throw err;
        }
        console.log('Cart cleared');
    });
}

module.exports = {
    addProductToCart,
    getCart,
    clearCart
}