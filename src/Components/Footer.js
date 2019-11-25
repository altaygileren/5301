import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../img/bridgeHouseLogo.png';

const Footer = () => {
  return (
    <div className="footerDiv">
      <Row>
        <Col lg={4}>
          <img className="logo" src={Logo} />
        </Col>
        <Col lg={4}></Col>
        <Col lg={4}>
          <div className="footerTxt">
            53-01 11th Street
            <br />
            Long Island City, NY
    </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;