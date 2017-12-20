var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var boydParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(boydParser.json());
app.use(boydParser.urlencoded({'extended':'false'}));
app.use(express.static(path.jsoin(__dirname, 'prod/public')));

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// const port = process.env.PORT || 3001;
// app.set('port', port)

// const server = http.createServer(app);
// server.listen(port, () => console.log('Running'));
