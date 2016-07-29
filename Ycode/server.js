var express = require('express');
var path = require('path');
var logger = require('./logger.js');

const PORT = 8080;
var server = express();

server.get('*', function(request, response, error) {

	logger.write(request);

	try {
		if (request.path == '/') {
			response.sendFile(path.join(__dirname + '/index.html'));
		} else {
			response.sendFile(path.join(__dirname + request.path));
		}
	} catch (error) {
		return console.log(response.status);
	}

});

server.post('/adam',function(request, response, error) {
	logger.write(request);
	response.send("Got POST request - ADAM\n");
});

server.listen(PORT, function(){
	logger.console('Server started at port : ' + PORT);
	logger.file('Server started at port : '+ PORT);
});
