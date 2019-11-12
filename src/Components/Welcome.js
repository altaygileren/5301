import React from 'react'
import skyView from '../img/skyView.png';
import { Parallax, Background } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className="welcomeDiv">
      <p className="welcomeTxt">YOUR TURN-KEY OFFICE SPACE AWAITS</p>
      {/* <img src={skyView} /> */}
      <Parallax
        bgImage={skyView}
        bgImageAlt="Long Island City"
        contentClassName="testThis"
        strength={800}
      >
        <div className="heroImgDiv" style={{ height: 1000 }}>
          <div className="heroDiv">
            <p className="subTitle">Long Island City, the new trend</p>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Welcome;