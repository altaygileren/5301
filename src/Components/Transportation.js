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
import mapLocation from '../img/mapLocation.png';
import grandCentral from '../img/Grand_Central_Terminal_logo.png';
import pennStation from '../img/pennstation.png';
import courtsquare from '../img/courtsquare.png';

const amountOfTimes = [
  { title: '7', time: 'from Grand Central' }, { title: '3 minutes', time: 'from the 7 train' }, { title: '5 minutes', time: 'to NYC ferries' }, { title: '20 minutes', time: 'from Penn Station' }, { title: '7 minutes', time: 'to the G, E, and M trains' }, { title: '40 minutes', time: 'from Hoboken' }, { title: 'On the border', time: 'of Manhattan, Queens & Brooklyn' }, { title: '18 minutes', time: 'from Port Authority' }, { title: '30 minutes', time: 'from LaGuardia Airport' }
]

const Transportation = () => {
  return (
    <div className="sectionTitle">
      <Row>
        <div className="welcomeTxt secondaryTxt">
          Location, Location, Location
    </div>
      </Row>
      <div className="transportationOptionsRow">
          <div className="transportationImgDiv">
            {/* <img className="directionsMapImg" src={mapLocation} /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9964.286595008685!2d-73.95654066423818!3d40.74222628302851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593b3f2c0f1b%3A0xe77246bd1c14d20f!2s53-01%2011th%20St%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1579481389889!5m2!1sen!2sus" width="800" height="600" frameborder="0" style={{border:0, width: '100%' }} allowfullscreen=""></iframe>
          </div>
          <div className="distanceDiv">
        <Row>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img src={parkingSign} />
            <p className="distanceMiles">0.0 miles</p>
            <p>Your parking spot</p>
          </Col>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img src={qmtSign} />
            <p className="distanceMiles">0.1 miles</p>
          </Col>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img src={citiBikeSign} />
            <p className="distanceMiles">0.2 miles</p>
            <p>Nearest Citibike location</p>
          </Col>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img src={sevenTrainSign} />
            <p className="distanceMiles">0.3 miles</p>
            <p>Vernon-Jackson stop</p>
          </Col>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img src={mtaSign} />
            <p className="distanceMiles">0.4 miles</p>
            <p>Hunters Point South & Long Island City</p>
          </Col>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img src={nycFerrySign} />
            <p className="distanceMiles">0.5 miles</p>
            <p>Hunters Point Avenue</p>
          </Col>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img src={courtsquare} />
            <p className="distanceMiles">0.7 miles</p>
            <p>Court Square</p>
          </Col>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img className="distanceImg" src={grandCentral} />
            <p className="distanceMiles">2 miles</p>
            <p>Grand Central Station</p>
          </Col>
          <Col className="distanceCol" lg={4} md={4} sm={4} xs={4}>
            <img src={pennStation} />
            <p className="distanceMiles">2.9 miles</p>
            <p>Penn Station</p>
          </Col>
        </Row>
        </div>
      </div>
    </div>
  )
}

export default Transportation;