var net = require('net');
var dateFormat = require('dateformat');

// var now = new Date();
// console.log(dateFormat(now, "yyyy-mm-dd hh:MM"));

var port = +process.argv[2];

var server = net.createServer(listener);
server.listen(port);

function listener(socket){
  var now = new Date();
  data = dateFormat(now, "yyyy-mm-dd hh:MM\n");
  socket.end(data);
  // console.log(dateFormat(now, "yyyy-mm-dd hh:MM"));
}
