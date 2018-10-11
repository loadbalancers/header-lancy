// Step 1: generate data, then load it to local storage file
// Note: maxChunk can be as high as 1M, because stream has built-in async feature

const fs = require("fs");

// Note: not using uuid, because it uses too much storage space
// const uuidv1 = require("uuid/v1"); // Based on timestamp

const filePath = "../local_files/locationsPG";
const maxChunk = 1000000;
const files = 10;

// For testing: with smaller data
// const filePath = "../local_files/locationsTestPG";
// const maxChunk = 1000;
// const files = 2;

// 1(a): generate data
const faker = require("faker");
faker.locale = "en_US";

function genAndWriteLocations(mc, fileNumber, s) {
  let startingIndex = 1 + (fileNumber - 1) * mc;
  for (let i = startingIndex; i <= startingIndex + mc - 1; i++) {
    let artistID = i;
    // Note: reduce the range for the numbers, for script's speed
    // for (let j = 0; j < faker.random.number({ min: 5, max: 15 }); j++) {
    for (let j = 0; j < faker.random.number({ min: 1, max: 10 }); j++) {
      let city = faker.address.city();
      // let artistAndLocation = artistID.toString() + "-" + city;
      let artistLocationID = artistID.toString() + "-" + j.toString();
      let people = faker.random.number({ min: 1000, max: 100000 });
      s.write(
        "\n" + artistLocationID + "," + artistID + "," + city + "," + people
        // "\n" + artistID + "," + city + "," + people
      );
    }
  }
}

// 1(b): append data to local file

const headers = "artistLocationID, artistID, location, people";
// const headers = "artistID, location, people";

// Newly modified: so that the files are loaded in synchronous fashion
// Using recursion
function writeToFiles(n) {
  console.log("Started writing data to file number " + n);
  let stream = fs.createWriteStream(`${filePath}${n}.csv`);
  stream.write(headers);
  genAndWriteLocations(maxChunk, n, stream);
  // Note: drain event is a signal that the writable stream can receive more data; also, it Only works if maxChunk is not too small (e.g. >=1K)
  // [Todo] Add this to my eng journal
  stream.on("drain", function() {
    console.log("Finished writing data to file number " + n);
    if (n < files) {
      n++;
      writeToFiles(n);
    }
  });
}
writeToFiles(1);
// for (let k = 1; k <= files; k++) {
//   const stream = fs.createWriteStream(`${filePath}${k}.csv`);
//   stream.write(headers);
//   genAndWriteLocations(maxChunk, k, stream);
// }
