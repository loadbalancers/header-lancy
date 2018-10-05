// Step 2: load data, from CSV files to DB tables

const { Client } = require("pg");
const connectionString = "postgresql://:@localhost:5432/skyBeat";
const client = new Client(connectionString);
client.connect();

// Step 2(a): load data to DB tables
const inputFilePath =
  "/Users/huanl/Desktop/header-lancy/local_files/locationsPG";
// const inputFilePath =
//   "/Users/huanl/Desktop/header-lancy/local_files/locationsTestPG";

const files = 10;

for (let i = 1; i <= files; i++) {
  client.query(
    `COPY locations FROM '${inputFilePath}${i}.csv' DELIMITER ',' CSV HEADER`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res); // console.log(res.rows[1]);
        console.log("Finished loading file number " + i);
        if (i === files) {
          client.end();
        }
      }
    }
  );
}

// Step 2(b): test data in DB table
// Also, test data loaded in DB table

// const query0 = {
//   text: `DROP TABLE locations`
// };

// query1: test DB connection
const query1 = {
  text: `SELECT * FROM test1`
};

// query2: test if all 10M data are loaded to DB table
const query2 = {
  // text:
};

// client: works with all queries, as above
// client.query(query2, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
