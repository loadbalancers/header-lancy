// Note: control group for server (with Postgres DB)
// No clustering here

const express = require("express");
const cors = require("cors");
require("console-stamp")(console, "HH:MM:ss.l");
const bodyParser = require("body-parser");

const controller = require("../db_pg/index_pg.js");

// Added for load testing
require("newrelic"); // For reporting of server metrics

const app = express();
app.use(require("morgan")("short"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/dist"));

// [CRUD] POST, for Creat: newly added
app.post("/artists", (req, res) => {
  controller.createArtist(req.body.newArtist, (err, newData) => {
    if (err) {
      res.status(500).send("Error, in posting data to DB");
    } else {
      res.status(201);
    }
  });
});

// [CRUD] GET, for Read: newly re-factored
app.get("/artists/:artistID", (req, res) => {
  let artistID = req.params.artistID;
  console.log("Receiving GET request, with artist ID " + artistID);
  controller.getArtist(artistID, (err, data) => {
    if (err) {
      res.status(500).send("Error, in getting data from DB");
    } else {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(400).send("Error, artist ID is out of range");
      }
    }
  });
});

// [CRUD] GET
app.get("/locations/:artistID", (req, res) => {
  let artistID = req.params.artistID;
  console.log("Receiving GET request, with artist ID " + artistID);
  controller.getLocations(artistID, (err, data) => {
    if (err) {
      res.status(500).send("Error, in getting data from DB");
    } else {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(400).send("Error, artist ID is out of range");
      }
    }
  });
});

// [CRUD] PUT, for update: newly added
// Note: the updated artist can have a different artist ID
app.put("/artists/:artistID", (req, res) => {
  let artistID = req.params.artistID;
  controller.updateArtist(artistID, req.body.newArtist, (err, newData) => {
    if (err) {
      res.status(500).send("Error, in updating data in DB");
    } else {
      res
        .status(200)
        .send("Success, updated artist's data to " + JSON.stringify(newData));
    }
  });
});

// [CRUD] Delete: newly added; all with ES6's syntax
app.delete("/artists/:artistID", (req, res) => {
  let artistID = req.params.artistID;
  console.log("Receiving DELETE request, with artist ID " + artistID);
  controller.deleteArtist(artistID, (err, data) => {
    if (err) {
      res.status(404).send("Error, artist ID is not found");
      // console.log(err);
    } else {
      // Note: status code 204 does not send any message; so console.log is needed
      res.status(204);
      console.log("Artist is deleted, with " + JSON.stringify(data));
    }
  });
});

// Server listens on port 3004
app.listen(process.env.PORT || 3004, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(
    `==> 🌎 Listening on port %s. Open up http://127.0.0.1:${process.env.PORT ||
      3004}/ in your browser.`
  );
});

// module.exports = app;
