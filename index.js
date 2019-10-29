var express = require('express');  
var request = require('request');

var app = express();  
app.use('/', function(req, res) {
    // const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}}`
    console.log(req.originalUrl);
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    req.pipe(request(req.originalUrl.slice(1))).pipe(res);
});

app.listen(process.env.PORT || 3001);
