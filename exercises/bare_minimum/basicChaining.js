/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var readFileAsync = Promise.promisify(fs.readFile);
var request = require('needle');
// var getAsync = Promise.promisify(request.get);

var getAsyncGet = (url, writeFilePath) => {
  var hitGitAPI = (url) => {
    return new Promise((resolve, reject) => {
      request.get()
    });
  };

};

var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  // TODO
  readFileAsync(readFilePath)
    .then((result) => {
      var firstLine = result.toString().split('\n')[0];
      // console.log(firstLine);
      return firstLine;
    })
    .then(username => {
      return getAsync(`https://www.github.com/users/${username}`, (err, res) => {
        console.log(JSON.stringify(res));
      });
    });




  // return pluckFirstLineFromFileAsync(readFilePath)
  //   .then(getGitHubProfileAsync)
  //   .then(function(profile) {
  //     return writeFileAsync(writeFilePath, JSON.stringify(profile));
  //   });



};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
