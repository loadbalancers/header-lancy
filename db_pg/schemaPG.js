// Note: this script (with Sequelize) is only used for defining tables' schema

const Sequelize = require("sequelize");
const sequelize = new Sequelize("skyBeat", "", "", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    max: 50, // Note: increased this from 5 to 50
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

/*
		Define schemas for my tables, as below
*/

// Table 1: Artist
const Artist = sequelize.define(
  "artist",
  {
    artistID: { type: Sequelize.INTEGER, primaryKey: true },
    artistName: Sequelize.TEXT,
    followed: Sequelize.BOOLEAN,
    followersNumber: Sequelize.INTEGER,
    verified: Sequelize.BOOLEAN, // Not used anywhere
    Biography: Sequelize.TEXT,
    artistImages: Sequelize.TEXT
    // Where: Sequelize.JSON // Nested field
  },
  { createdAt: false, updatedAt: false }
);

// Table 2: Location table
const Location = sequelize.define(
  "location",
  {
    artistLocationID: { type: Sequelize.TEXT, primaryKey: true },
    artistID: Sequelize.INTEGER,
    location: Sequelize.TEXT,
    people: Sequelize.INTEGER
  },
  { createdAt: false, updatedAt: false }
);

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// Artist.sync();
Location.sync();

/*
  Previous/old scripts
*/

// Table 2: a small table (100 to 500 records)
// const Image = sequelize.define("image", {
//   imageID: { type: Sequelize.INTEGER, primaryKey: true },
//   imageURL: Sequelize.TEXT
// });

// const insertToDB1 = artistObj => {
//   Artist.create(artistObj);
// };

// module.exports.Artist = Artist;
// module.exports.insertToDB1 = insertToDB1;
