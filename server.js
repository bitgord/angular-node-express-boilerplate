var express = require("express");
var app = express();
var request = require("request");

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/views'});
});

app.get('/calc', function(req, res){
  res.sendFile('calc.html', {root: __dirname + '/public/views'});
});


app.listen(port, function () {
  console.log('Now listening on port...', port);
});