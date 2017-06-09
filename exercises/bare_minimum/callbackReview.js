/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {  
  try {
    var firstLine = fs.readFileSync(filePath).toString().split('\n')[0];
  } catch (error) {
    var err = {};
    err.code = 'ENOENT';
  }
  
  return callback(err, firstLine);
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  
  try {
    // var statusCode;
    // var err;
    request(url, function(error, res, body) {
      if (res) {
        var statusCode = res.statusCode;
        // statusCode = res.
      } 
      
      console.log('INSIDE TRY, ', statusCode);
    });
  
  } catch (error) {
    var err = {};
    console.log('INSIDE CATCH, ', statusCode);
    err.message = 'Invalid URI';
  }
  
  return callback(err, statusCode);
  // const options = {
  //   method: 'GET',
  //   url: url
  // };
  
  // request(url, function(err, res, body) {
    
  // });
  
  // return callback(err, statusCode);
  // console.log('URL REQUEST', request(url));
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};


// fs.readFile(__dirname + '/README.md', 'utf8', function (err, content) {
//   console.log('Example from callbackReview.js')
//   if (err) {
//     console.log('fs.readFile failed :(\n', err)
//   } else {
//     console.log('fs.readFile successfully completed :)\n', content)
//   }
// });