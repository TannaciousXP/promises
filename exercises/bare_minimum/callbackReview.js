/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) { 
  fs.readFile(filePath, 'utf8', function(err, file) {
    if (err) {
      callback(err, null);
    } else {
      var firstLine = file.split('\n').shift().trim();
      callback(null, firstLine);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, res) {
    if (err) {
      callback(err, null);
    }
    callback(null, res.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};


// fs.readFile(__dirname + '/../../README.md', 'utf8', function (err, content) {
//   console.log('Example from callbackReview.js')
//   if (err) {
//     console.log('fs.readFile failed :(\n', err)
//   } else {
//     console.log('fs.readFile successfully completed :)\n', content)
//   }
// });