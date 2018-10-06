// Connect to Postgres DB
// const db = require("./schemaPG.js");
const { Client } = require("pg");
const connectionString = "postgresql://:@localhost:5432/skyBeat";
const client = new Client(connectionString);
client.connect();

// const createArtist = function(newArtist, callback) {
//   client.query(`INSERT INTO artists`)
// };

const getArtist = function(artistID, callback) {
  const queryText = `SELECT * FROM artists WHERE "artistID" = ${artistID}`;
  // const queryValue = [1];
  client.query(queryText, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      // console.log("DATA", res.rows[0]); // For testing
      callback(null, res.rows[0]);
    }
  });
};

// Note: result is ordered by number of people/listeners
const getLocations = function(artistID, callback) {
  const queryText = `SELECT "artistID", "location", "people" FROM locations WHERE "artistID" = ${artistID} ORDER BY people DESC`;
  client.query(queryText, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      console.log("DATA", res.rows[0]); // For testing
      callback(null, res.rows);
    }
  });
};

module.exports.getArtist = getArtist;
module.exports.getLocations = getLocations;
