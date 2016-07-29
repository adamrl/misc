var fs = require('fs');
var dateFormat = require('dateformat');
var http = require('http');

// var now = new Date();
// console.log(dateFormat(now, "yyyy-mm-dd hh:MM"));

var port = +process.argv[2];
var fileloc = process.argv[3];

var server = http.createServer(listener);
server.listen(port);

function listener(request, response){
  src = fs.createReadStream(fileloc);
  src.pipe(response);
  // dst = response.createWriteStream(src.pipe)  
  // var now = new Date();
  // data = dateFormat(now, "yyyy-mm-dd hh:MM\n");
  // socket.end(data);
  // console.log(dateFormat(now, "yyyy-mm-dd hh:MM"));
}
