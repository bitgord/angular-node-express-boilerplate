var express = require('express');
var server = express();

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/views'});
});

server.get('/calc', function(req, res){
  res.sendFile('calc.html', {root: __dirname + '/public/views'});
});

server.get('/case', function(req, res){
  res.sendFile('case.html', {root: __dirname + '/public/views'});
});


server.listen(port, function () {
  console.log('Now listening on port...', port);
});