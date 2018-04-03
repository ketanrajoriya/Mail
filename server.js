const express = require('express');
const server = express();
const path = require('path');
require('dotenv').config();


server.use('/', express.static(path.join(__dirname, "app")))
server.listen(process.env.PORT, function() {
  console.log("app is listening at "+ process.env.PORT);
});
