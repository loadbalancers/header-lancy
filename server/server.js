const express = require("express");
const cors = require("cors");
require("console-stamp")(console, "HH:MM:ss.l");
const bodyParser = require("body-parser");

const app = express();
app.use(require("morgan")("short"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/dist"));

const controller = require("../db_mongo/index.js");

// [CRUD] POST, for Creat: newly added
app.post("/artists", (req, res) => {
  // res.status(400).send({ ERROR: "does not accept post request" });
  controller.createArtist(req.body.newArtist, (err, newData) => {
    if (err) {
      res.status(500).send("Error, in posting data to DB");
    } else {
      res.status(201).json(newData);
      console.log("newData: " + newData);
    }
  });
});

// [CRUD] GET, for Read: newly re-factored
// Details: request to '/artist/:artistID', queries artist table and sends back the data
app.get("/artists/:artistID", (req, res) => {
  let artistID = req.params.artistID;
  console.log("Receiving GET request, with artist ID " + artistID);
  // if (!!parseInt(req.params.artistID)) {
  if (!!artistID) {
    controller.getArtist(
      artistID,
      (err, data) => {
        if (err) {
          res.status(500).send("Error, in getting data from DB");
        } else {
          res.send(data);
          res.status(200);
        }
      }
      // HeaderDB.find(
      //   { artistID: parseInt(req.params.artistID) },
      //   (err, artistObj) => {
      //     res.statusCode = 200;
      //     res.send(artistObj);
      //   }
    );
  } else {
    // Conditional error handling if artistID parameter is string
    res
      .status(400)
      .send({ ERROR: "artistID parameter accepts numbers between 1 and 100" });
  }
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
    } else {
      res.status(204).send("Artist " + data + " is deleted");
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

module.exports = app;

// *************webpack-hot-middleware set-up*******************
// // Step 1: Create & configure a webpack compiler

// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config');
// const compiler = webpack(webpackConfig);

// // Step 2: Attach the dev middleware to the compiler & the app
// app.use(
//   require('webpack-dev-middleware')(compiler, {
//     logLevel: 'warn',
//     publicPath: webpackConfig.output.publicPath
//   })
// );

// // Step 3: Attach the hot middleware to the compiler & the app
// app.use(
//   require('webpack-hot-middleware')(compiler, {
//     log: console.log,
//     path: '/__webpack_hmr',
//     heartbeat: 10 * 1000
//   })
// );
// SOURCE: https://github.com/webpack-contrib/webpack-hot-middleware/tree/master/example
// *************webpack-hot-middleware set-up*******************
