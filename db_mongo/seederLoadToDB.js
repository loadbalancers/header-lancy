// Step 2 (of seeder): load data from local file to MongoDB's table
// This step has 3 sub steps: 2(a), 2(b), 2(c); the order is last step first written

const files = 100;
const fs = require("fs");
const inputFilePath = "../local_files/artists";
// const inputFilePath = "../local_files/artistsTest";

const JSONStream = require("JSONStream");
const controller = require("./index.js"); // Importing DB's controller, for step 2(c)

// const async = require("async");
// const maxChunk = 10000; // 2

// 2(a): Load data from local file, then invoke the other 2 steps
// Use recursion, for 100 input files (loading synchronously)
// Note: moved step 2(b) inside 2(a), to have all methods (e.g. on "data" and on "end") together
// Note: create a new parser for each file, because the old parser auto closes
function filesToDB(n) {
  console.log("Started reading file number " + n);
  const parser = JSONStream.parse("*"); // JSON.parse() does not work
  let inputStream = fs
    .createReadStream(`${inputFilePath}${n}.json`)
    .pipe(parser);
  parser.on("data", function(data) {
    console.log("Now processing 100K data from this file");
    controller.Artists.insertMany(data);
  });
  parser.on("end", function() {
    console.log("Finished reading and loading file number " + n);
    if (n < files) {
      n++;
      // inputStream.close();
      filesToDB(n);
    }
  });
}
filesToDB(1);

// 2(b): Proecess data with parser (for Json)
// Note: ."finish" does not work (only "end" works)
// parser.on("data", data => {
//   // inserterCargo.push(data); // Push artists data (AKA tasks) to queue, by chunk
//   console.log("Now processing 100K data from this file");
//   controller.Artists.insertMany(data);
// });
// .on("end", () => {
//   console.log("Read complete");
// });

/*
  Previous/old scripts
*/

// 2(c): Insert data to DB table
// Notes: JS obj's context, copy by reference
// var inserterCargo = async.cargo(function(tasks, inserterCallback) {
//   let chunk_number = (tasks[0].artistID + maxChunk - 1) / maxChunk;
//   console.log(
//     "Now loading chunk " + chunk_number + " (with " + tasks.length + " records)"
//   );

//   controller.Artists.insertMany(tasks, function(err) {
//     if (err) console.log(err);
//     inserterCallback();
//   });
// }, maxChunk);

// For 2(a)
// fs.createReadStream(`${inputFilePath}1.json`).pipe(parser);
// fs.createReadStream(`${inputFilePath}2.json`).pipe(parser);

// const jsonfile = require("jsonfile");

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
