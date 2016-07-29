var fs = require('fs');

var inp = process.argv[2];
var nlines = 0

function getLines () {
  fs.readFile(inp, function doneReading(err, fileContents) {
      nlines = fileContents.toString().split('\n').length - 1;
      console.log(nlines)
  })
}

getLines();
