var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

// console.log(dir)
// console.log(ext)

fs.readdir(dir, function doneReading(err, dirFiles) {
      // console.log(dirFiles)
      dirFiles.forEach( function logExt(element, index, array) {
        if (path.extname(element) == '.' + ext){
            console.log(element);
        }
      })
});
