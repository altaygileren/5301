import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import lirrLogo from '../img/lirrLogo.jpeg';
const amountOfTimes = [
  { title: '7', time: 'from Grand Central' }, { title: '3 minutes', time: 'from the 7 train' }, { title: '5 minutes', time: 'to NYC ferries' }, { title: '20 minutes', time: 'from Penn Station' }, { title: '7 minutes', time: 'to the G, E, and M trains' }, { title: '40 minutes', time: 'from Hoboken' }, { title: 'On the border', time: 'of Manhattan, Queens & Brooklyn' }, { title: '18 minutes', time: 'from Port Authority' }, { title: '30 minutes', time: 'from LaGuardia Airport' }
]

const Transportation = () => {
  return (
    <Container>
      <div className="sectionTitle">
        <Row>
          <div className="sectionTitle">
            <p className="divTitle">Transportation</p>
          </div>
        </Row>
        <Row>
          <Col className="timeCol" lg={4}>
            <span className="sevenTrain">7</span>
            <br />
            <span className="timeTime">one stop from
    <br />
              Grand Central</span>
          </Col>
          <Col className="timeCol" lg={4}>
            <span className="timeTitle"><span className="gTrain">G</span>, <span className="eTrain">E</span>, <span className="mTrain">M</span></span>
            <br />
            <span className="timeTime">G, E, and M trains</span>
          </Col>
          <Col className="timeCol" lg={4}>
            <span className="timeTitle"><img src={lirrLogo} className="lirrLogo" /> </span>
            <br />
            <span className="timeTime">20 minutes from Penn station</span>
          </Col>
          <Col className="timeCol" lg={4}>
            <span className="timeTitle"><i class="fas fa-bus-alt"></i></span>
            <br />
            <span className="timeTime">18 minutes from Porth Authority</span>
          </Col>
          <Col lg={4} className="timeCol">
            <span className="timeTitle">
              <i class="fas fa-plane"></i>
            </span>
            <br />
            <span className="timeTime">
              30 minutes from LGA
            </span>
          </Col>
          <Col lg={4} className="timeCol">
            <span className="timeTitle">
              <i class="fas fa-ship"></i>
            </span>
            <br />
            <span className="timeTime">5 minutes from NYC ferries</span>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Transportation;