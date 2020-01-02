require('./app/index');

const _ = require('lodash');

console.log(_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }));
// → { 'a': 1, 'b': 2, 'c': 3 }