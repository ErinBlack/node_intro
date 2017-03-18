
//Node Module that makes routing easier
var express = require('express');

var app = express();
var port = 5000;

// looks for index.html by default (http://localhose:5000/)
app.use(express.static('server/public'));

app.listen(port);

console.log("Listinging on port", port);