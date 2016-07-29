var storage = require('node-persist');

//you must first call storage.init or storage.initSync
storage.initSync();

//then start using it
storage.setItem('name','yourname');
console.log(storage.getItem('name'));

var batman = {
    first: 'Bruce',
    last: 'Wayne',
    alias: 'TEST'
};

storage.setItem('batman',batman);
var titles = {
  family: 'Woldamn',
  alias: 'Orgazmo',
  affinity: 'Barbarin'
};

storage.setItem('Yuval', titles);
console.log(storage.getItem('batman').alias);

console.log(storage.getItem('Yuval').alias);
