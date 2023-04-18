/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  //use  fs.readfilesync

  // var err = new Error('There has been a problem');

  var contents = fs.readFile(filePath, function (err, data) {
    if (err) {
      cb(err);
    } else {
      var readable = data.toString();
      let first = readable.split(/\r?\n/);
      // console.log(first[0]);
      cb(err, first[0]);
    }
  });
  // contents.split(/\r?\n/);
  // return contents[0]
  // cb();
  // } catch(err) {
  //   cb(err);
  // }

  // return contents[0];
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {

  request.get(url, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(err, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
