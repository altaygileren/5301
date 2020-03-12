import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (



    <div className="contactDiv">
      <div className="welcomeTxt secondaryTxt">
        Contact
        </div>
      <Container>
      <Row className="contactRow1">
          <Col className="contactInfo" lg={6} md={6} sm={12} xs={12}>
            <span className="contactName">
              <strong>Padraig Naughton - Property Manager</strong>
            </span>
            <br />
            <span>Bridge House LIC, LLC</span>
            <br />
            <span className="contactLink"><a href="tel:2123619595">(914) 643-48920</a></span>
            <br />
            <span className="contactLink"><a href="mailto:lkhoury@bridgehouse.com">PNaughton@BridgeHouseLIC.com</a></span>
          </Col>
          <Col className="contactInfo" lg={6} md={6} sm={12} xs={12}>
            <span className="contactName">
              <strong>Michael Lombardo - Property Manager</strong>
            </span>
            <br />
            <span>Bridge House LIC, LLC</span>
            <br />
            <span className="contactLink"><a href="tel:9172933156">(516) 884-5806</a></span>
            <br />
            <span className="contactLink"><a href="mailto:brangel@bridgehouse.com">MLombardo@BridgeHouseLIC.com</a></span>
          </Col>
        </Row >
        <Row className="contactInfoRow2">
          <Col className="contactInfo" lg={6} md={6} sm={12} xs={12}>
            <span className="contactName">
              <strong>Layla Khoury - Associate</strong>
            </span>
            <br />
            <span>Bridge House LIC, LLC</span>
            <br />
            <span className="contactLink"><a href="tel:2123619595">(212) 361-9595</a></span>
            <br />
            <span className="contactLink"><a href="mailto:lkhoury@bridgehouse.com">LKhoury@BridgeHouseLIC.com</a></span>
          </Col>
          <Col className="contactInfo" lg={6} md={6} sm={12} xs={12}>
            <span className="contactName">
              <strong>Benjamin Rangel - Associate</strong>
            </span>
            <br />
            <span>Bridge House LIC, LLC</span>
            <br />
            <span className="contactLink"><a href="tel:9172933156">(917) 293-3156</a></span>
            <br />
            <span className="contactLink"><a href="mailto:brangel@bridgehouse.com">BRangel@BridgeHouseLIC.com</a></span>
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