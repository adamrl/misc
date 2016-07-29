var map = require('through2-map')
var http = require('http');
var dateFormat = require('dateformat');
var url = require('url');

var port = +process.argv[2];

// data = dateFormat(now, "yyyy-mm-dd hh:MM\n");

var server = http.createServer(function (request, response){
  if (request.method != 'GET')
         return request.end('send me a POST\n');
  response.writeHead(200, { 'Content-Type': 'application/json' })
  urldata = url.parse(request.url, true);
  // console.log(urldata.pathname);
  if (urldata.pathname == '/api/unixtime') {
    var date = new Date(urldata.query['iso']);
    var time = date.getTime();
    // console.log(time);
    response.end(JSON.stringify({ 'unixtime': time }));
  }
  else if (urldata.pathname == '/api/parsetime') {
    var date = new Date(urldata.query['iso']);
    resp = {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }
    console.log(resp);
    response.end(JSON.stringify(resp));
  }
  else {
    console.log('Bad API Path\n');
    // request.end('Bad API Path\n');
  }
});

server.listen(port);
