import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const amountOfTimes = [
  { title: 'One stop', time: 'from Grand Central' }, { title: '3 minutes', time: 'from the 7 train' }, { title: '5 minutes', time: 'to NYC ferries' }, { title: '20 minutes', time: 'from Penn Station' }, { title: '7 minutes', time: 'to the G, E, and M trains' }, { title: '40 minutes', time: 'from Hoboken' }, { title: 'One the border', time: 'of Manhattan, Queens & Brooklyn' }
]

const Transportation = () => {
  return (
    <Container>
      <div className="transportationDiv">
        <div className="sectionTitle">
          <p className="divTitle">Transportation</p>
        </div>
        <Row>
          {
            amountOfTimes.map((time) => (
              <Col className="timeCol" lg={4}>
                <span className="timeTitle">{time.title}</span>
                <br />
                <span className="timeTime">{time.time}</span>
              </Col>
            ))
          }
        </Row>
      </div>
    </Container>
  )
}

export default Transportation;