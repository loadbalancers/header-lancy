// Newly modified, to use pooling
// const { Client } = require("pg");
const { Pool } = require("pg");

// Connection 1: to Postgres DB locally
// const connectionString = "postgresql://:@localhost:5432/skyBeat";
// const client = new Client(connectionString);

// Connection 2: to Postgres DB on EC2 (the cloud)
const connectionToEC2 = {
  user: "huanl",
  host: "ec2-13-56-211-48.us-west-1.compute.amazonaws.com",
  database: "skybeat",
  password: "$password",
  port: 5432
};
// const client = new Client(connectionToEC2);
const pool = new Pool(connectionToEC2);

// client.connect();
pool.connect();

// [CRUD] POST, for Creat
const createArtist = function(newArtist, callback) {
  const queryText = `INSERT INTO artists VALUES (${newArtist.artistID}, '${
    newArtist.artistName
  }')`;
  client.query(queryText, function(err, res) {
    if (err) {
      callback(err, null);
      // console.log(queryText); // For debugging
    } else {
      callback(null, res); // Res is not used by server though
    }
  });
};

// [CRUD] GET, for Read
const getArtist = function(artistID, callback) {
  const queryText = `SELECT * FROM artists WHERE "artistID" = ${artistID}`;
  // client.query(queryText, function(err, res) {
  pool.query(queryText, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
};

// [CRUD] GET, for Read
// Note: result is ordered by number of people/listeners
const getLocations = function(artistID, callback) {
  const queryText = `SELECT "artistID", "location", "people" FROM locations WHERE "artistID" = ${artistID} ORDER BY people DESC`;
  // client.query(queryText, function(err, res) {
  pool.query(queryText, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows);
    }
  });
};

// [CRUD] PUT, for update
const updateArtist = function(artistID, newArtist, callback) {
  const queryText = `UPDATE artists SET "artistName" = '${
    newArtist.artistName
  }' WHERE "artistID" = ${artistID} RETURNING "artistName";`;
  client.query(queryText, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
};

// [CRUD] Delete
const deleteArtist = function(artistID, callback) {
  const queryText = `DELETE from artists WHERE "artistID" = ${artistID}
  RETURNING "artistName"`;
  client.query(queryText, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
};

module.exports.createArtist = createArtist;
module.exports.getArtist = getArtist;
module.exports.getLocations = getLocations;
module.exports.updateArtist = updateArtist;
module.exports.deleteArtist = deleteArtist;
