import React from 'react'
import skyView from '../img/skyView.png';
import { Parallax, Background } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div>
      <p className="welcomeTxt">BRIDGE HOUSE L.I.C</p>
      <p className="welcomeTxt secondaryTxt">YOUR TURN-KEY OFFICE SPACE AWAITS</p>
      <div className="welcomeDiv">
        <p className="welcomeTxt">
        IN LONG ISLAND CITY - THE GATEWAY TO SUCCESS</p>
      </div>
    </div>
  )
}

export default Welcome;