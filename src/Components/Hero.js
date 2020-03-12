import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import newHeroImg from '../img/newphoto.jpg';

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
              <p className="heroTxt">Bridge House LIC</p>
              <p className="secondaryHeroTxt">In Long Island City - The Gatway To Success</p>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}
