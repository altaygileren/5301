import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

const Contact = () => {
  return (
    <Container>
      <div className="contactDiv">
        <p className="divTitle">Contact</p>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            <p>
              <span className="contactName">
                <strong>Layla Khoury</strong>
              </span>
              <br />
              <span><p>Bridge House Properties, LLC</p></span>
              <br />
              <span><a href="tel:2123619595">(212) 361-9595</a></span>
              <br />
              <span><a href="mailto:lkhoury@bridgehouse.com">lkhoury@bridgehouse.com</a></span>
            </p>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <p>
              <span className="contactName">
                <strong>Benjamin Rangel</strong>
              </span>
              <br />
              <span><p>Bridge House Properties, LLC</p></span>
              <br />
              <span><a href="tel:9172933156">(917) 293-3156</a></span>
              <br />
              <span><a href="mailto:brangel@bridgehouse.com">brangel@bridgehouse.com</a></span>
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Contact;