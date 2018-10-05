// Step 1: generate data, then load it to local storage file
// Note: maxChunk can be as high as 1M, because stream has built-in async feature

const fs = require("fs");
const filePath = "../local_files/artistsPG";
const maxChunk = 1000000;
const files = 10;

// For testing: with smaller data
// const filePath = "../local_files/artistsTestPG";
// const maxChunk = 10;
// const files = 2;

// Note: checked with TM, and 100 photos is good enough here
var max_photos = 100;

// 1(a): generate data
const faker = require("faker");
faker.locale = "en_US";

// Newly modified: added s (stream) as a parameter
function genAndWriteArtists(mc, fileNumber, s) {
  // let artistStr = "";
  let startingIndex = 1 + (fileNumber - 1) * mc;
  for (let i = startingIndex; i <= startingIndex + mc - 1; i++) {
    let newArtist = {
      artistID: i,
      artistName: faker.name.findName(),
      followed: Math.round(Math.random()) ? true : false,
      followersNumber: Math.round(Math.random() * 2000000 + 100000),
      verified: Math.round(Math.random() * 0.7 + 0.3) ? true : false,
      Biography:
        '"' +
        faker.lorem.paragraphs(faker.random.number({ min: 1, max: 2 })) +
        '"',
      artistImages: [] // Added back; not nested but a string
      // Where: {}
    };
    // Note: per artist, key is number of photos, value is photo number for S3's url
    var obj = {};
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
        `https://s3-us-west-1.amazonaws.com/skybeat/photos/${num}.jpg`
      );
    });
    // Note: convert type array to type string
    newArtist.artistImages = '"[' + newArtist.artistImages + ']"';
    // If reached the end of the file
    // artistStr = artistStr + "\n" + Object.values(newArtist).join(",");
    s.write("\n" + Object.values(newArtist).join(","));
  }
  // return artistStr;
}

// 1(b): append data to local file
const headers =
  "artistID, artistName, followed, followersNumber, verified, Biography, artistsImages";
for (let k = 1; k <= files; k++) {
  const stream = fs.createWriteStream(`${filePath}${k}.csv`);
  stream.write(headers);
  // let newString = generateArtists(maxChunk, k);
  // stream.write(newString);
  genAndWriteArtists(maxChunk, k, stream);
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
