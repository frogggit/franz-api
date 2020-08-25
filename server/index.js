const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const middlewares = require('./middlewares.js');
require('dotenv').config();

var app = express();

app.use(morgan('common'));
// app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

var routes = require("./routes.js")(app);

app.use(express.static("./views"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});
  
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
 
var server = app.listen(3000, function () {
  console.log("listening on port %s", server.address().port);
});