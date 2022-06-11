var express = require("express");

//create a web server
var server = express();

//include our RESTFul API 
var cinemaAPI = require("./controllerAPI/api-controller");

var bodyParser=require("body-parser");

var cors = require('cors')
server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

//map the url with the API
server.use("/api/cinema",cinemaAPI);

//start running the web server
server.listen(3060);
console.log("Server is up now and running on port 3060");