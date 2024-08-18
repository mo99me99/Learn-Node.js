const http = require("http");
const bodyParser = require('body-parser');
const express = require("express");

const amdinRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',amdinRoutes)
app.use(shopRoutes)

app.use((req, res, next)=>{
  res.status(404).send('<html><h1>404 : Page not found!</h1></html>')  
})

app.listen(3000, "localhost");
