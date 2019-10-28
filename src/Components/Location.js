import React from 'react'
import Locationimg from '../img/location.png';
import { Container, Row } from 'react-bootstrap';
const Location = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="sectionTitle">
            <p className="divTitle">Location</p>
          </div>
        </Row>
        <img src={Locationimg} />
      </Container>
    </div>
  )
}

export default Location;