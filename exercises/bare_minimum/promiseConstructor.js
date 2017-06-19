/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  var firstLinePromise = new Promise(function (res, rej) {
    fs.readFile(filePath, 'utf8', function(err, file) {
      if (err) {
        rej(err);
      } else {
        var firstLine = file.split('\n').shift().trim();
        res(firstLine);
      }
    });
  });
  return firstLinePromise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var statusCodePromise = new Promise(function(res, rej) {
    request.get(url, function(err, response) {
      if (err) {
        rej(err);
      } else {
        res(response.statusCode);
      }
    });
  });
  return statusCodePromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
