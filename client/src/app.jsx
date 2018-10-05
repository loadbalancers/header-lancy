import React, { Component } from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import axios from "axios";
import Header from "./Header.jsx";

//[Todo] Adjust this function, to get numbers in less than 1000 for example
// Newly added: get random integer between 2 numbers (e.g. 1 and 100K)
// Note: inclusive for both numbers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getArtistInfo = callback => {
  let id = getRandomInt(1, 100000);
  axios
    // .get(`/artists/${Math.floor(Math.random() * 99 + 1)}`)
    .get(`/artists/${id}`)
    .then(response => {
      // console.log(response.data);
      callback(response.data[0]);
    })
    .catch(error => {
      // console.error(error);
    });
};
const blackBG = { backgroundColor: "#191414" };

class App extends Component {
  constructor() {
    super();
    this.state = {
      artistDisp: null
    };
    this.handleFollowToggle = this.handleFollowToggle.bind(this);
  }

  componentDidMount() {
    getArtistInfo(responseData => {
      this.setState({ artistDisp: responseData });
    });
  }

  handleFollowToggle(event) {
    event.preventDefault();
    // console.log('###FOLLOW CLICK###');
    this.setState(prevState => {
      // NOTE: trick when you wanto update a part of an object.
      return {
        artistDisp: {
          ...prevState.artistDisp,
          followed: !prevState.artistDisp.followed
        }
      };
    });
  }

  render() {
    const toRender = !!this.state.artistDisp ? (
      <Header
        artist={this.state.artistDisp}
        handleFollowToggle={this.handleFollowToggle}
      />
    ) : (
      <div className="placeHolder" />
    );
    return <React.Fragment>{toRender}</React.Fragment>;
  }
}

export default hot(module)(App);
