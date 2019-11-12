import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import lirrLogo from '../img/lirrLogo.jpeg';
import directions from '../img/directionsmap.png';
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
        <Col lg={1} md={1} sm={1} xs={1}>
          <div className="sectionHeader">
            {/* <p className="transportTxt">TRANSPORTATION</p> */}
            <div class="rotation-wrapper-outer">
    <div class="rotation-wrapper-inner">
      <p className="element-to-rotate">TRANSPORTATION</p>
    </div>    
  </div>
          </div>
        </Col>
        <Col lg={11} md={11} sm={11} xs={11}>
            <div className="transportImgDiv">
              <img className="directionsMapImg" src={directions} />
            </div>
          <Row>
            <Col lg={2} md={2} sm={2} xs={2}>
              <img src={parkingSign} />
              <br />
              <p>0.0 miles</p>
              <p>private parking spot</p>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <img src={qmtSign} />
              <br />
              <p>0.1 miles</p>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <img src={sevenTrainSign} />
              <br />
              <p>0.3 miles</p>
              <p>Vernon-Jackson stop</p>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <img src={mtaSign} />
              <br />
              <p>0.4 miles</p>
              <p>Hunters Point Avenue</p>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <img src={nycFerrySign} />
              <br />
              <p>0.5 miles</p>
              <p>Hunters Point Avenue</p>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <img src={citiBikeSign} />
              <br />
              <p>0.2 miles</p>
              <p>Nearest bike location</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Transportation;