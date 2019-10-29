import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container>
      <div className="welcomeDiv">
        <p className="welcomeTxt">WELCOME TO BRIDGE HOUSE LIC</p>
        <Row>
          <Col lg={5}></Col>
          <Col lg={7}>
            <p className="subTitle">You're ready to move-in office space</p>
          </Col>
        </Row>
        <p className="welcomeIntro">
          53-01 LIC offers 24,024 square feet of newly renovated workspace within a once Long Island City industrial building. Open spaces and natural light together with swift commutes and a host of nearby restaurants and gourmet cafes make 53-01 LIC a smart and alternative to Manhattan just one stop from Grand Central to Vernon Jackson on the 7 train. Alternatively, we have parking for those who enjoy a drive in the mornings!
      </p>
      </div>
    </Container>
  )
}

export default Welcome;