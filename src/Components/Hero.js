import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import heroImg from '../img/heroimg.png';

const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";

export default class Hero extends Component {

  render() {
    return (
      <div>
        <Parallax
          bgImage={heroImg}
          bgImageAlt="the cat"
          strength={800}
        >
          <div className="heroImgDiv" style={{ height: 1000 }}>
            <div className="heroDiv">
              <p className="heroTxt">LONG ISLAND CITY IS THE GATEWAY TO SUCCESS</p>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}
