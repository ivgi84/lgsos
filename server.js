var express = require('express');
var path = require('path');
var http = require('http');
var boydParser = require('body-parser');

var api = require('./server/routes/api');
var fonts = require('./server/routes/fonts');

var app = express();
var renderedFiles = path.join(__dirname, 'client/lgsos');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set our api routes
app.use('/api', api);
app.use('/fonts', fonts);

app.use(boydParser.json());
app.use(boydParser.urlencoded({'extended':'false'}));

app.use(express.static(renderedFiles));



app.get('*', (req, res)=>{
    res.sendFile(renderedFiles + '/index.html');
});

const port = process.env.PORT || 4201;
app.set('port', port)

const server = http.createServer(app);
server.listen(port, () => console.log(`Running, listening on port: ${port}`));
