import React from 'react'
import { Parallax, Background } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import officeImg from '../img/parallaximg3.png';
const Parallax2 = (props) => {
  return (
    <div>
      <Parallax
        bgImageAlt="the cat"
        bgImage={officeImg}
        strength={800}
      >
        <div className="parallaxDiv">
          <div className="parallaxTxt">
            <p className="parallaxTxt">Building specs</p>
          </div>
          <Container>
            <div className="secondParallaxTxt">
              <Row>
                <Col lg={6}>Location</Col>
                <Col lg={6}>53-01 11th street, LIC, NY 11101</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Year Built</Col>
                <Col lg={6}>1954</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Office space</Col>
                <Col lg={6}>3,500 - 12,024</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Floors</Col>
                <Col lg={6}>2</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Renovations</Col>
                <Col lg={6}>Fully renovated including lobby, windows, facade, elevator, restrooms</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Column spacing</Col>
                <Col lg={6}>40 foot spacing - Open plan</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Elevators</Col>
                <Col lg={6}>1 passenger</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>HVAC</Col>
                <Col lg={6}>Tenant controlled</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Building class</Col>
                <Col lg={6}>Fireproof warehouse</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Lot Square Footage</Col>
                <Col lg={6}>121,700</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Security access</Col>
                <Col lg={6}>24/7 Keycard/Camera surveillance</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Building hours</Col>
                <Col lg={6}>24/7 tenant access</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Cleaning</Col>
                <Col lg={6}>Common areas</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Bicycle Storage</Col>
                <Col lg={6}>Bike rack</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Transportation</Col>
                <Col lg={6}>Subway, Train, NYC Ferry</Col>
              </Row>
              <hr />
              <Row>
                <Col lg={6}>Neighborhood</Col>
                <Col lg={6}>Vibrant restaurants, coffeeshops, outdoors with tremendous views of Manhattan</Col>
              </Row>
            </div>
          </Container>
        </div>
      </Parallax>
    </div>
  )
}

export default Parallax2;