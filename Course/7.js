var h = require('http');

var url = process.argv[2];

h.get(url, handler);

function handler(resp){
  resp.setEncoding("utf8");
  resp.on("data",console.log);
  // console.log(resp['_events']);
  // res['_events'].forEach(function(data){console.log(data);});
}
