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
                <strong>Padraig Naughton</strong>
              </span>
              <br />
              <span><a href="tel:9146434928">(914) 643-4920</a></span>
            </p>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <p>
              <span className="contactName">
                <strong>Michael Lombardo</strong>
              </span>
              <br />
              <span>
                <a href="tel:5168845806">(516) 884-5806</a>
              </span>
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Contact;