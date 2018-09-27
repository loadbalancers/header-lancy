const mongoose = require("mongoose");
// [Todo] Create my own account on mlab.com
// mongoose.connect('mongodb://david:password1234@ds111113.mlab.com:11113/spotify-header');
mongoose.connect(
  // "mongodb://localhost/dotThen",
  "mongodb://localhost/skyBeat",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", error => {
  console.error(error);
});
db.once("open", () => {
  console.log("MONGOOSE CONNECTED!");
});

// const headerDBSchema = new mongoose.Schema({
const artistSchema = new mongoose.Schema({
  artistID: {
    type: Number,
    unique: true
  },
  followed: Boolean,
  artistName: String,
  followersNumber: Number,
  artistImages: [String],
  about: {
    Biography: String,
    Where: Object
  }
});

// const HeaderDB = mongoose.model("HeaderDB", headerDBSchema);
const Artists = mongoose.model("Artists", artistSchema);

// Newly refactored
const getArtist = function(artistID, callback) {
  Artists.find({ artistID: artistID }, function(err, artistObj) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, artistObj);
    }
  });
};

// module.exports.Artists = Artists;
module.exports.getArtist = getArtist;

// NOTE: To be used later
// const userSchema = new mongoose.Schema({
//   userID: {
//     type: Number,
//     unique: true
//   },
//   userName: String,
//   artistsFollowing: Object
// });
