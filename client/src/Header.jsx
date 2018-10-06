import React, { Component } from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import headerStyle from "./styles/header.css";
import NavBarStyle from "./styles/NavBar.css";
import PlayButton from "./PlayButton.jsx";
import FollowButton from "./FollowButton.jsx";
import EtcButton from "./EtcButton.jsx";
import About from "./About.jsx";
import NavBar from "./NavBar.jsx";

const Header = ({
  artistName,
  followed,
  followersNumber,
  verified,
  Biography,
  artistImages,
  locations,

  handleFollowToggle
}) => {
  // background styling has to be done in-line.
  const blackBG = {
    //linear-gradient(transparent, black),
    background: `linear-gradient(transparent -30%, rgb(24,24,24)), url(${
      artistImages[0]
    }) no-repeat top`,
    backgroundSize: "cover"
  };

  return (
    <React.Fragment>
      <NavBar />
      <div style={blackBG} className={headerStyle.artistPortraitBG}>
        <div className={headerStyle.scrollSectionContainer}>
          <span className={headerStyle.monthlyListeners}>
            {followersNumber.toLocaleString("en")} Followers
          </span>
          <h1 className={headerStyle.artistName}>{artistName}</h1>
          <div className={headerStyle.buttonSection}>
            <PlayButton />
            <FollowButton
              followed={followed} // artist={artist}
              handleFollowToggle={handleFollowToggle}
            />
            <EtcButton
              followed={followed} // artist={artist}
              handleFollowToggle={handleFollowToggle}
            />
          </div>
        </div>
      </div>
      {/* <About artist={artist} /> */}
      <About
        Biography={Biography}
        artistImages={artistImages}
        locations={locations}
      />
    </React.Fragment>
  );
};

export default hot(module)(Header);
