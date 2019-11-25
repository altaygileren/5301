import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import heroImg from '../img/heroimg.png';
import newHeroImg from '../img/newphoto.jpg';
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";

export default class Hero extends Component {

  render() {
    return (
      <div>
        <Parallax
          bgImage={newHeroImg}
          bgImageAlt="the cat"
          strength={200}
        >
          <div className="heroImgDiv" style={{ height: 1000 }}>
            <div className="heroDiv">
              <p className="heroTxt">Bridge House L.I.C</p>
              <p className="secondaryHeroTxt">In Long Island City - The Gateway To Success</p>
              <p className="heroSubTxt">Bridge House L.I.C offers 24,000 square feet of newly renovated workspace married to a once industrial building in Long Island City.  Open layouts covered in natural light are paired with a host of swift commute options, making Bridge House LIC the ideal alternative to an overcrowded Manhattan.  Nestled in a neighborhood oozing with culturally diverse restaurants, gourmet cafes, and an unrivaled nearby waterfront park, it's hard to imagine a better home for you and your work family.</p>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}
