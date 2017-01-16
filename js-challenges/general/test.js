var fs = require('fs');
var chai = require('chai');

var words = fs.readFileSync('D:\\Projects\\TubularLabs\\words.txt').toString().split('\n');
var cmpndWords = fs.readFileSync('D:\\Projects\\TubularLabs\\CompoundWords.txt').toString().split('\r\n');

console.log('Number of Words: ' + words.length);
console.log("Number of Compound Words: " + cmpndWords.length);

var dictWords = {};
words.forEach(function(w) {
    dictWords[w.toLowerCase()] = false;
});

var cntCmpndInDict = 0;
var notExists = [];
cmpndWords.forEach(function(w) {
   if (dictWords.hasOwnProperty(w.toLowerCase())) {
       cntCmpndInDict++;
   } else {
       notExists.push(w);
   }
});
console.log("Number of compound words exists in dictionary: " + cntCmpndInDict);
console.log("Not exists in dictionary: ");
console.log(notExists.join('\r\n') || '### None ###');

