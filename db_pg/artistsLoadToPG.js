// Step 2: load data, from CSV files to DB tables
/*
  Note: the input file needs to be re-generated,
  no matter for Json file (again) or CSV file
  Decision: use CSV file as input, to load data to DB tables
*/

// Note: switched from Sequelize to pg (npm module)
// const controller = require("./pgSchema.js");
const { Client } = require("pg");

// Connection 1: to Postgres DB locally
// const connectionString = "postgresql://:@localhost:5432/skyBeat";
// const client = new Client(connectionString);

// Connection 2: to Postgres DB on EC2 (the cloud)
const connectionToEC2 = {
  user: "postgres",
  host: "ec2-13-57-179-209.us-west-1.compute.amazonaws.com",
  database: "skybeat",
  password: "$password",
  port: 5432
};
const client = new Client(connectionToEC2);

client.connect();

// Step 2(a): load data to DB tables
// Note: somehow absolute (not relative) file path is need here

// For connection 1
// const inputFilePath = "/Users/huanl/Desktop/header-lancy/local_files/artistsPG";

// For connection 2
const inputFilePath = "/home/ec2-user/data/artistsPG";

const files = 10;

for (let i = 1; i <= files; i++) {
  client.query(
    `COPY artists FROM '${inputFilePath}${i}.csv' DELIMITER ',' CSV HEADER`,
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
// End the client, to track time (by terminal)
// await client.end();

// Step 2(b): test data in DB table
// Also, test data loaded in DB table

// query1: test DB connection
const query1 = {
  text: `SELECT * FROM test1`
};

// query2: test if all 10M data are loaded to DB table
const query2 = {
  text: `SELECT COUNT(*) FROM artists`
};

// query3: index DB table by artist ID
// Note: only need to do this once
const query3 = {
  text: `CREATE INDEX artist_index ON artists USING HASH ("artistID")`
};
const query4 = {
  text: `CREATE INDEX artist_index_locations ON locations USING HASH ("artistID")`
};

// client: works with all queries, as above
// client.query(query2, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

/*
  Previous/old scripts, with Json file as input
*/

// const fs = require("fs");
// const JSONStream = require("JSONStream");
/*
// It works to load 1 file
let inputStream = fs.createReadStream(inputFilePath).pipe(JSONStream.parse());
inputStream.on("data", data => controller.insertToDB1(data));

// But it does not work to load multiple files
// [TBD] Figure out what is wrong with Sequelize (and parser) here
function filesToDB(n, insert) {
  console.log("Started reading file number " + n);
  const parser = JSONStream.parse();
  let inputStream = fs
    .createReadStream(`${inputFilePath}${n}.json`)
    .pipe(parser);
  parser.on("data", function(data) {
    // console.log("Now processing 100K data from this file");
    insert(data);
  });
  parser.on("end", function() {
    console.log("Finished reading and loading file number " + n);
    if (n < files) {
      n++;
      filesToDB(n, insert);
    }
  });
}
filesToDB(2, controller.insertToDB1);
*/
