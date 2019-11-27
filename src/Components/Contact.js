import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import lirrLogo from '../img/lirrLogo.jpeg';
import directions from '../img/directionsmap.png';
import parkingSign from '../img/parkingSign.png';
import qmtSign from '../img/qmtSign.png';
import sevenTrainSign from '../img/sevenTrainSign.png';
import mtaSign from '../img/mtaSign.png';
import nycFerrySign from '../img/nycFerrySign.png';
import citiBikeSign from '../img/citiBikeSign.png';

const amountOfTimes = [
  { title: '7', time: 'from Grand Central' }, { title: '3 minutes', time: 'from the 7 train' }, { title: '5 minutes', time: 'to NYC ferries' }, { title: '20 minutes', time: 'from Penn Station' }, { title: '7 minutes', time: 'to the G, E, and M trains' }, { title: '40 minutes', time: 'from Hoboken' }, { title: 'On the border', time: 'of Manhattan, Queens & Brooklyn' }, { title: '18 minutes', time: 'from Port Authority' }, { title: '30 minutes', time: 'from LaGuardia Airport' }
]

const Contact = () => {
  return (



    <div className="sectionTitle contactDiv">
      <div className="welcomeTxt secondaryTxt">
        Contact
        </div>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <span className="contactName">
              <strong>Layla Khoury</strong>
            </span>
            <br />
            <span><p>Bridge House LIC, LLC</p></span>
            <br />
            <span className="contactLink"><a href="tel:2123619595">(212) 361-9595</a></span>
            <br />
            <span className="contactLink"><a href="mailto:lkhoury@bridgehouse.com">lkhoury@bridgehouselic.com</a></span>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <span className="contactName">
              <strong>Benjamin Rangel</strong>
            </span>
            <br />
            <span><p>Bridge House LIC, LLC</p></span>
            <br />
            <span className="contactLink"><a href="tel:9172933156">(917) 293-3156</a></span>
            <br />
            <span className="contactLink"><a href="mailto:brangel@bridgehouse.com">brangel@bridgehouselic.com</a></span>
          </Col>
        </Row >
      </Container>
    </div >

    // <div className="">

    //   <Row>
    //     <Col lg={1} md={1} sm={1} xs={1}>
    //       <div className="sectionHeader">
    //         {/* <p className="transportTxt">TRANSPORTATION</p> */}
    //         <div class="rotation-wrapper-outer">
    //           <div class="rotation-wrapper-inner">
    //             <p className="element-to-rotate">CONTACT</p>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col lg={11} md={11} sm={11} xs={11}>
    //       <Row className="contactRow">
    //         <Col lg={6} md={6} sm={10} xs={10}>
    //           <span className="contactName">
    //             <strong>Layla Khoury</strong>
    //           </span>
    //           <br />
    //           <span><p>Bridge House Properties, LLC</p></span>
    //           <br />
    //           <span className="contactLink"><a href="tel:2123619595">(212) 361-9595</a></span>
    //           <br />
    //           <span className="contactLink"><a href="mailto:lkhoury@bridgehouse.com">lkhoury@bridgehouse.com</a></span>
    //         </Col>
    //     <Col lg={5} md={5} sm={10} xs={10}>
    //       <span className="contactName">
    //         <strong>Benjamin Rangel</strong>
    //       </span>
    //       <br />
    //       <span><p>Bridge House Properties, LLC</p></span>
    //       <br />
    //       <span className="contactLink"><a href="tel:9172933156">(917) 293-3156</a></span>
    //       <br />
    //       <span className="contactLink"><a href="mailto:brangel@bridgehouse.com">brangel@bridgehouse.com</a></span>
    //     </Col>
    //   </Row>
    // </Col>
    //   </Row>
    // </div>
  )
}

export default Contact;