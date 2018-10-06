// Step 1 (of seeder): generate data, then load it to local storage file

// const jsonfile = require("jsonfile");
const fs = require("fs");

// Note: writeStream method does not need chunks
// So instead treat chunks as separate files (10 files in total)
// const filePath = "../local_files/artists";
// const maxChunk = 100000;
// const files = 100;

// For testing: with 100K now
const filePath = "../local_files/artistsTest"; // const stream = fs.createWriteStream("./artistsTest.json");
const maxChunk = 100;
// const rounds = 1;
const files = 1;

// [TBD] Increase this later
var max_photos = 100; // 27

// 1(a): generate data
const faker = require("faker");
faker.locale = "en_US";

// function generateArtists(mc, currentRound) {
function generateArtists(mc, fileNumber) {
  let artistsArr = [];
  // let startingIndex = 1 + (currentRound - 1) * mc;
  let startingIndex = 1 + (fileNumber - 1) * mc;
  for (let i = startingIndex; i <= startingIndex + mc - 1; i++) {
    let newArtist = {
      artistID: i,
      artistName: faker.name.findName(),
      followed: Math.round(Math.random()) ? true : false,
      followersNumber: "PLACE_HOLDER",
      verified: Math.round(Math.random() * 0.7 + 0.3) ? true : false,
      artistImages: [],
      // Note: Biography and Where fields do not need to start with upper case, though I won't change them (due to high effort, low reward)
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
      obj[
        faker.random.number({ min: 1, max: max_photos })
      ] = faker.random.number({
        min: 1,
        max: max_photos
      });
    }
    Object.values(obj).forEach(num => {
      newArtist.artistImages.push(
        // `https://s3-us-west-1.amazonaws.com/spotifycloneartists/photos/${num}.jpg` // David's S3 urls
        `https://s3-us-west-1.amazonaws.com/skybeat/photos/${num}.jpg` // My S3 urls; 10 photos for now
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
for (let k = 1; k <= files; k++) {
  const stream = fs.createWriteStream(`${filePath}${k}.json`);
  stream.write('{"artists":[');
  let newString = generateArtists(maxChunk, k);
  stream.write(newString.substring(1, newString.length - 1));
  stream.write("]}");
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
