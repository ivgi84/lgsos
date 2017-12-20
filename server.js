var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var boydParser = require('body-parser');
var mongoDb = require('mongodb');

var app = express();
app.use(logger('dev'));

app.use(boydParser.json());

var distDir = __dirname + '/prod/public';
app.use(express.static(distDir));

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code){
    console.log("ERROR: "+ reason);
    res.status(code || 500).json({'error': message});
}

/*  "/api/users"
 *    GET: finds all users
 *    POST: creates a new user
 */
app.get("/api/users", function(req, res){
    res.json({message:'Hello'})
});
app.post("/api/users", function(req, res){

});
app.get("/api/user/:id", function(req, res){

});
app.put("/api/users/:id", function(req, res){

});
app.delete("/api/users/:id", function(req, res){

});

  // Initialize the app.
  var port = process.env.PORT || 3000;
  var server = app.listen(port, function(){
      console.log('App is running on port ', port);
  });
  