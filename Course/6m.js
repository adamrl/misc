var fs = require('fs');
var path = require('path');

module.exports = function filterFiles(dir, ext, callback) {
  fs.readdir(dir, function doneReading(err, dirFiles) {
    if (err) {
      return callback(err, null);
    }
    var ffiles = [];
    dirFiles.forEach( function filterFile(element, index, array) {
      if (path.extname(element) == '.' + ext){
        ffiles.push(element)
      }
    })
    callback(null, ffiles);
  })
}

// module.exports.filterFiles = filterFiles;
