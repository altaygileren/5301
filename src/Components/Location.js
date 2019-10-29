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
        <div className="bringMeHereDiv">
              <a href="https://moovitapp.com/index/en/public_transit-53_01_11th_Street-NYCNJ-site_48476052-121">Bring me here</a>
            </div>
      </Container>
      <img className="locationImg" src={Locationimg} />
    </div>
  )
}

export default Location;