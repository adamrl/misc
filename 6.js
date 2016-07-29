var ff = require('./6m.js')

var dir = process.argv[2];
var ext = process.argv[3];

ff(dir, ext, logit);
// ff.filterFiles(dir, ext, logit);
// ff.logStuff(logit);

function logit(err, data) {
  if (err){
    console.log(err);
  }
  else {
    data.forEach(function(element) {console.log(element)})
    }
}
