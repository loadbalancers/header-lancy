// Step 2 (of seeder): load data from local file to MongoDB's table
// This step has 3 sub steps: 2(a), 2(b), 2(c); the order is last step first written

// const jsonfile = require("jsonfile");
const fs = require("fs");
const inputStream = fs.createReadStream("./artists.json", {
  // const inputStream = fs.createReadStream("./artistsTest.json", {
  encoding: "utf8"
});
const JSONStream = require("JSONStream");
const parser = JSONStream.parse("*"); // JSON.parse() does not work
const async = require("async");
const controller = require("./index.js"); // Importing DB's controller, for step 2(c)

const maxChunk = 10000;
// const maxChunk = 2;

// 2(c): Insert data to DB table
// Notes: JS obj's context, copy by reference
var inserterCargo = async.cargo(function(tasks, inserterCallback) {
  let chunk_number = (tasks[0].artistID + maxChunk - 1) / maxChunk;
  console.log("Started processing chunk " + chunk_number);
  console.log("Current # of tasks: " + tasks.length);
  // console.log("Current tasks: " + JSON.stringify(tasks));

  controller.Artists.insertMany(tasks, function(err) {
    if (err) console.log(err);
    inserterCallback(); // Note: this function leads to processing next chunk
  });
}, maxChunk);

// 2(b): Proecess data with parser (for Json)
parser
  .on("data", data => {
    // console.log("Is type of data array? " + Array.isArray(data)); // For testing; data is already an array
    console.log("Length of data: " + data.length); // For testing
    inserterCargo.push(data); // Push artists data (AKA tasks) to queeu, by chunk

    // For testing: use for loop
    // for (let i = 0; i < data.length; i++) {
    //   inserterCargo.push(data[i], function(err) {
    //     if (err) console.log(err);
    //     let id = i + 1;
    //     console.log("Finished processing artist with ID " + id);
    //   });
    // }
  })
  .on("end", () => {
    console.log("Read complete");
  });

// Invoke all 3 steps
// 2(a): Load data from local file, then invoke the other 2 steps
inputStream.pipe(parser);

/*
  Previous/old scripts
*/

// Used in step 2(a)
// jsonfile
//   .readFile("./artists.json")
//   .then(obj => {
//     console.log("Read complete");
//     let artists = obj.artists;
//     insertArtists(artists[0]);
//     // insertArtists(obj.artists);
//     // console.log("obj.artists is array: " + Array.isArray(obj.artists)); // Type is array
//   })
//   .catch(error => console.log(error));

// Original option: for inserting 100 records
// controller.Artists.create(newArtist, function(err, newData) {
//   err ? console.error(error) : console.log(newData);
// });
// }
