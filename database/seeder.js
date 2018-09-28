// Note: Biography and Where fields do not need to start with upper case, though I won't change them (due to high effort, low reward)

// For both steps below: write and read with local path
// Note: stream also works for non-objects
const jsonfile = require("jsonfile");
const fs = require("fs");

// Step 1: generate data, then load it to local storage file
const stream = fs.createWriteStream("./database/artists.json");
const maxChunk = 10000; // Set to be 25K (or 50K), later
const rounds = 10;

// 1(a): generate data
const faker = require("faker");
faker.locale = "en_US";

function generateArtists(mc, currentRound) {
  let artistsArr = [];
  let startingIndex = 1 + (currentRound - 1) * mc;
  for (let i = startingIndex; i <= startingIndex + mc - 1; i++) {
    let newArtist = {
      artistID: i,
      artistName: faker.name.findName(),
      followed: Math.round(Math.random()) ? true : false,
      followersNumber: "PLACE_HOLDER",
      verified: Math.round(Math.random() * 0.7 + 0.3) ? true : false,
      artistImages: [],
      about: {
        Biography: faker.lorem.paragraphs(
          // Newly modified: reduced the number of paragraphs, for DB performance
          faker.random.number({ min: 3, max: 6 }),
          "\n\n"
        ),
        Where: {}
      }
    };
    // Where: adding cities and number of people
    // Newly modified: reduced the number of cities per artist, for DB performance
    for (let i = 0; i < faker.random.number({ min: 5, max: 15 }); i++) {
      newArtist.about.Where[faker.address.city()] = faker.random.number({
        min: 1000,
        max: 100000
      });
    }
    // Note: per artist, key is number of photos, value is photo number for S3's url
    var obj = {};
    // Newly modified: reduced the number of photos per artist, for DB performance
    for (let i = 1; i <= faker.random.number({ min: 2, max: 5 }); i++) {
      obj[faker.random.number({ min: 1, max: 27 })] = faker.random.number({
        min: 1,
        max: 27
      });
    }
    Object.values(obj).forEach(num => {
      newArtist.artistImages.push(
        `https://s3-us-west-1.amazonaws.com/spotifycloneartists/photos/${num}.jpg` // S3 urls
      );
    });
    // Get number of followers
    newArtist.followersNumber = Object.values(newArtist.about.Where).reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    // console.log(JSON.stringify(newArtist)); // For testing
    artistsArr.push(newArtist);
  }
  return JSON.stringify(artistsArr); // Newly modified
}

// 1(b): append data to local file
stream.write('{"artists":[');
for (let j = 1; j <= rounds; j++) {
  console.log("Round number " + j);
  let newString = generateArtists(maxChunk, j);
  if (j < rounds) {
    stream.write(newString.substring(1, newString.length - 1) + ",");
  } else {
    stream.write(newString.substring(1, newString.length - 1));
  }
}
stream.write("]}");


// Step 2: load data from local file to MongoDB's table
const readStream = fs.createReadStream("./database/artists.json");
const controller = require("./index.js"); // Importing DB's controller, for step 2(b)

// 2(a): Load data from local file
// Note: need to invoke step 2(b) in 2(a), because obj only exists in 2(a)'s context (object is copy by reference)

// for (let k = 0; k < 10; k++) {
jsonfile
  .readFile("./database/artists.json")
  // , function(err, obj) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Read complete");
  //     console.log("Type of obj " + typeof obj.artists);
  //     insertArtists(obj.artists);
  //   }
  // });
  .then(obj => {
    console.log("Read complete");
    insertArtists(obj.artists[0]);
    // console.log("obj.artists is array: " + Array.isArray(obj.artists)); // Type is array
  })
  .catch(error => console.log(error));
// }

// 2(b): Insert data to DB table
// Note: no need to use Promise here, Promise is just a wrapper for callbacks
function insertArtists(artistsFromFile) {
  controller.Artists.insertMany(artistsFromFile, function(err) {
    if (err) {
      console.log(err);
    }
  });
}

/*
  Previous/old scripts
*/

// Script used for option 2's step 1(b)
// for (let j = 0; j < 10; j++) {
//   console.log("Chunk number " + j);
//   jsonfile
//     .writeFile(
//       "./database/artists.json",
//       generateArtists(10),
//       { flag: "a" }
//     )
//     .then(res => {
//       console.log("Write complete");
//     })
//     .catch(error => console.log(error));
// }

// Original option: for inserting 100 records
// controller.Artists.create(newArtist, function(err, newData) {
//   err ? console.error(error) : console.log(newData);
// });
// }
