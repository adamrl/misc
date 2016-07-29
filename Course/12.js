var map = require('through2-map')
var http = require('http');


var port = +process.argv[2];

var server = http.createServer(listener);
server.listen(port);

function listener(request, response){
  if (request.method != 'POST')
         return res.end('send me a POST\n');
  request.pipe(map(function (chunk) {
   return chunk.toString().toUpperCase()
  })).pipe(response)
}
