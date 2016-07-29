var fs = require('fs');

inp = process.argv[2];
buf = fs.readFileSync(inp)

console.log(buf.toString().split('\n').length-1);
