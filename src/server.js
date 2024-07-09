const express = require('express');

const PORT = 3000;
const express = require("express");
const {
setupKinde,
protectRoute,
getUser,
} = require("@kinde-oss/kinde-node-express");
const app = express();
const config = {
clientId: "937024033863474b8798f3b63dfc54d2",
issuerBaseUrl: "https://iphurts.kinde.com",
siteUrl: "http://localhost:3000",
secret: "8A8JJQlXAnMHQ9i3jLDtOJqZgXhYn93CWyWmZUn3ymJSIDtPH8LK",
redirectUrl: "http://localhost:3000/kinde_callback",
};
setupKinde(config, app);

app.get("/", (req, res) => {
res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

