var http = require('http');
var bl = require('bl');

var resps = ["", "", ""];
var counter = 0;

http.get(process.argv[2], function(resp){
    putRespInArray(resp, 0);
});

http.get(process.argv[3], function(resp){
    putRespInArray(resp, 1);
});

http.get(process.argv[4], function(resp){
    putRespInArray(resp, 2);
});

function putRespInArray(resp, ind){
  resp.pipe(bl(function(err, data){
    if (err){return console.log(err);}
    // console.log(ind);
    resps[ind] = data.toString();
    counter += 1;
    if (counter == 3){
      resps.forEach(function(element){ console.log(element)});
    }
  }))
}
