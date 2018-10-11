import React, { Component } from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import axios from "axios";
import Header from "./Header.jsx";

// const getArtistInfo = callback => {
const getArtistInfo = function(id, callback) {
  axios
    .get(`/artists/${id}`)
    .then(response => {
      callback(response.data); //data
    })
    .catch(error => {
      console.error(error);
    });
};
const getLocationsInfo = function(id, callback) {
  axios
    .get(`/locations/${id}`)
    .then(response => {
      callback(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      // artistDisp: null
      artistID: null,
      artistName: null,
      followed: null,
      followersNumber: null,
      verified: null,
      Biography: null,
      artistImages: [],
      locations: {} // From table 2, locations
    };
    this.handleFollowToggle = this.handleFollowToggle.bind(this);
  }

  // Adjusted this helper function, to get numbers in less than 1000 for example
  // Note: inclusive for both numbers
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    let random = Math.random();
    if (Math.random() < 0.5) {
      return Math.floor((random / 1000) * (max - min)) + min;
    } else {
      return Math.floor(random * (max - min)) + min;
    }
  }

  componentDidMount() {
    // getArtistInfo(responseData => {
    //   this.setState({ artistDisp: responseData });
    // });

    let id = this.getRandomInt(1, 10000000); // Between 1 and 10M
    let context = this; // Newly added

    getArtistInfo(id, function(data) {
      // Process string from DB table, to fit front end's needs
      let imagesStr = data.artistImages;
      let imagesSubstr = imagesStr.slice(1, imagesStr.length - 1);

      context.setState({
        artistID: data.artistID,
        artistName: data.artistName,
        followed: data.followed,
        followersNumber: data.followersNumber,
        verified: data.verified,
        Biography: data.Biography,
        artistImages: imagesSubstr.split(",") // Convert from string to array
      });
    });

    getLocationsInfo(id, function(data) {
      let locaObj = {};
      for (let i = 0; i < data.length; i++) {
        let key = data[i].location;
        let value = data[i].people;
        locaObj[key] = value;
      }

      context.setState({
        locations: locaObj
      });
    });
  }

  handleFollowToggle(event) {
    event.preventDefault();
    this.setState(prevState => {
      // NOTE: trick when you want to update a part of an object
      return {
        // artistDisp: {
        //   ...prevState.artistDisp,
        //   followed: !prevState.artistDisp.followed
        // }
        followed: !prevState.followed
      };
    });
  }

  render() {
    const toRender = !!this.state.artistID ? (
      <Header
        artistName={this.state.artistName}
        followed={this.state.folowed}
        followersNumber={this.state.followersNumber}
        verified={this.state.verified}
        Biography={this.state.Biography}
        artistImages={this.state.artistImages}
        locations={this.state.locations}
        handleFollowToggle={this.handleFollowToggle}
      />
    ) : (
      <div className="placeHolder" />
    );
    return <React.Fragment>{toRender}</React.Fragment>;
  }
}

export default hot(module)(App);
