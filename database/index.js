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

const Artists = mongoose.model("Artists", artistSchema);

// Newly added
const createArtist = function(newArtist, callback) {
  Artists.create(newArtist, function(err, newData) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, newData);
    }
  });
};

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

// Newly added
const updateArtist = function(artistID, newArtist, callback) {
  Artists.update({ artistID: artistID }, newArtist, (err, newData) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, newData);
    }
  });
};

// Newly added: all with ES6's syntax
const deleteArtist = function(artistID, callback) {
  Artists.remove({ artistID: artistID }, (err, artist) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, artist);
    }
  });
};

// module.exports.Artists = Artists;
module.exports.createArtist = createArtist;
module.exports.getArtist = getArtist;
module.exports.deleteArtist = deleteArtist;
module.exports.updateArtist = updateArtist;

// NOTE: To be used later
// const userSchema = new mongoose.Schema({
//   userID: {
//     type: Number,
//     unique: true
//   },
//   userName: String,
//   artistsFollowing: Object
// });
