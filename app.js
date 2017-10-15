const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});

app.get('/series', function(req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});

app.get('/movies', function(req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3003, function() {
	console.info('Example app listening on port 3003!');
});

app.use('/', express.static('dist/'));
