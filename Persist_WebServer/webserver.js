var fs = require('fs');
var dateFormat = require('dateformat');
var http = require('http');
var url = require('url');
var storage = require('node-persist');


storage.initSync();
var port = +process.argv[2];
var fileloc = process.argv[3];

var server = http.createServer(listener);
server.listen(port);

function listener(request, response){
  urldata = url.parse(request.url, true);

  switch(urldata.pathname) {
    case '/api/set':
        set(urldata, response)
        break;
    case '/api/setjson':
        setjson(urldata, response)
        break;
    case '/api/get':
        get(urldata, response)
        break;
    case '/api/keys':
        keys(response)
        break;
    case '/api/values':
        values(response)
        break;
    case '/api/all':
        all(response)
        break;
    default:
        default_resp(response);
  }
}

function set(udata, resp) {
  var out = "";
  var keys = Object.keys(udata['query']);
  keys.forEach(function(key){
    storage.setItem(key, udata['query'][key]);
    var outs = "Set: {" + key + ": " + JSON.stringify(storage.getItem(key)) + "}";
    // console.log(outs);
    out += JSON.stringify(storage.getItem(key));
  });
  resp.end(out);
}

function setjson(udata, resp) {
  var out = "";
  var keys = Object.keys(udata['query']);
  keys.forEach(function(key){
    try {
      storage.setItem(key, JSON.parse(udata['query'][key]));
      var outs = "Set: {" + key + ": " + JSON.stringify(storage.getItem(key)) + "}";
      // console.log(outs);
      out += JSON.stringify(storage.getItem(key));
    }
    catch(err) {
      console.log(err.message);
      resp.end("JSON Error")
      // default_resp(resp);
    }
  });
  resp.end(out);
}

function get(udata, resp) {
  var out = "";
  var keys = Object.keys(udata['query']);
  keys.forEach(function(key){
    var outs = storage.getItem(key);
    // console.log("Get: {" + key + ": " + JSON.stringify(outs) + "}");
    out += JSON.stringify(outs);
  });
  resp.end(JSON.stringify(out));
}

function keys(resp) {
  resp.end(JSON.stringify(storage.keys()));
}

function values(resp) {
  resp.end(JSON.stringify(storage.values()));
}

function all(resp) {
  var alld = {};
  storage.keys().forEach(function (key) {
    // console.log(key);
    // console.log(storage.getItem(key));
    alld[key] = storage.getItem(key);
  });
  // console.log(alld);
  resp.end(JSON.stringify(alld));
}

function default_resp(resp) {
  src = fs.createReadStream(fileloc)
  src.pipe(resp);
}