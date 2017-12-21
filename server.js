var express = require('express');
var path = require('path');
var http = require('http');
var boydParser = require('body-parser');

var api = require('./server/routes/api');

var app = express();

var renderedFiles = path.join(__dirname, 'prod/public');

app.use(boydParser.json());
app.use(boydParser.urlencoded({'extended':'false'}));

app.use(express.static(renderedFiles));

// Set our api routes
app.use('/api', api);

app.get('*', (req, res)=>{
    res.sendFile(renderedFiles + '/index.html');
});

const port = process.env.PORT || 4000;
app.set('port', port)

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
