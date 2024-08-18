const http = require("http");
const bodyParser = require('body-parser');
const express = require("express");

const amdinRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(amdinRoutes)
app.use(shopRoutes)

app.listen(3000, "localhost");
