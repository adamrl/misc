var fs = require('fs');

const logFileName = './log.txt';

timeStamp = function() {
  var time = new Date();
	var unixTime = time.getTime();
	var timeZone = new Date(unixTime - time.getTimezoneOffset() * 60000);
	var formatted = timeZone.toISOString().replace('T',' ').replace('Z','');
  return formatted;
}

exports.console = function(entry) {
	console.log(timeStamp()+'\t'+entry)
}

exports.file = function(entry) {
  fs.appendFile(logFileName, timeStamp() + '\t'+entry+'\n', function(error) {
    if(error) {
      return console.log(error);
    }
  });
}

exports.write = function(req) {
		this.console('IP Adress - ' + req.client.remoteAddress + ' requested path ' + req.path);
		this.file('IP Adress - '+ req.client.remoteAddress+' requested path ' + req.path);
}
