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
          <div className="footerTxt">BridgeHouseL.I.C</div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;