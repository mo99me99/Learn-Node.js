const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const amdinRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", amdinRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, "localhost");
