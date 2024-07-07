const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../product.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Orders (
        orderId INTEGER PRIMARY KEY AUTOINCREMENT,
        paymentProvider TEXT,
        totalAmount REAL,
        email TEXT,
        state TEXT,
        createdAt TEXT DEFAULT CURRENT_TIMESTAMP
    );
`, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Orders table created successfully');
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS OrderItems (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        orderId INTEGER,
        productId TEXT,
        productName TEXT,
        productPrice REAL,
        productImage TEXT,
        productDescription TEXT,
        productUrl TEXT,
        productCategory TEXT,
        quantity INTEGER,
        totalPrice REAL,
        FOREIGN KEY(orderId) REFERENCES Orders(orderId)
    );
`, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('OrderItems table created successfully');
    }
});
  

});