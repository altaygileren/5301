import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import lirrLogo from '../img/lirrLogo.jpeg';
import addressMap from '../img/addressMap.png';
import parkingSign from '../img/parkingSign.png';
import qmtSign from '../img/qmtSign.png';
import sevenTrainSign from '../img/sevenTrainSign.png';
import mtaSign from '../img/mtaSign.png';
import nycFerrySign from '../img/nycFerrySign.png';
import citiBikeSign from '../img/citiBikeSign.png';

const amountOfTimes = [
  { title: '7', time: 'from Grand Central' }, { title: '3 minutes', time: 'from the 7 train' }, { title: '5 minutes', time: 'to NYC ferries' }, { title: '20 minutes', time: 'from Penn Station' }, { title: '7 minutes', time: 'to the G, E, and M trains' }, { title: '40 minutes', time: 'from Hoboken' }, { title: 'On the border', time: 'of Manhattan, Queens & Brooklyn' }, { title: '18 minutes', time: 'from Port Authority' }, { title: '30 minutes', time: 'from LaGuardia Airport' }
]

const Transportation = () => {
  return (
    <div className="sectionTitle">
      <Row>
        <div className="welcomeTxt secondaryTxt">
          TRANSPORTATION
        </div>
      </Row>
      <div className="transportationOptionsRow">
        <Row>
          <img className="directionsMapImg" src={addressMap} />
        </Row>
        <Row>
        <Col lg={2} md={2} sm={3} xs={3}>
            <img src={parkingSign} />
            <p className="distanceMiles">0.0 miles</p>
            <p>Your parking spot</p>
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img src={qmtSign} />
            <p className="distanceMiles">0.1 miles</p>
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img src={citiBikeSign} />
            <p className="distanceMiles">0.2 miles</p>
            <p>Nearest Citibike location</p>
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img src={sevenTrainSign} />
            <p className="distanceMiles">0.3 miles</p>
            <p>Vernon-Jackson stop</p>
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img src={mtaSign} />
            <p className="distanceMiles">0.4 miles</p>
            <p>Hunters Point South & Long Island City</p>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2}>
            <img src={nycFerrySign} />
            <p className="distanceMiles">0.5 miles</p>
            <p>Hunters Point Avenue</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Transportation;