require('dotenv').config();
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan ("tiny"));

const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('GTC_vendor');
})

app.listen(port, function(){
    console.log("Server upon port", port);
})