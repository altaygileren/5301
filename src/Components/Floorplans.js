import React from 'react'
import floorplan from '../img/floorplan.png';
import { Row, Col } from 'react-bootstrap';

const Floorplans = () => {
  return (


    //   <div className="sectionTitle">

    //     <Row>
    //       <Col lg={1} md={1} sm={1} xs={1}>
    //         <div className="sectionHeader">
    //           {/* <p className="transportTxt">TRANSPORTATION</p> */}
    //           <div class="rotation-wrapper-outer">
    //   <div class="rotation-wrapper-inner">
    //     <p className="element-to-rotate">FLOOR PLANS</p>
    //   </div>    
    // </div>
    //         </div>
    //       </Col>
    //       <Col lg={11} md={11} sm={11} xs={11}>
    //         <Row>
    //           <div className="transportImgDiv">
    //             {/* <img className="directionsMapImg" src={directions} /> */}
    //           </div>
    //         </Row>
    //         <Row>
    //           <Col lg={2} md={2} sm={2} xs={2}>
    //             {/* <img src={parkingSign} /> */}
    //             <br />
    //             <p>0.0 miles</p>
    //             <p>private parking spot</p>
    //           </Col>
    //           <Col lg={2} md={2} sm={2} xs={2}>
    //             {/* <img src={qmtSign} /> */}
    //             <br />
    //             <p>0.1 miles</p>
    //           </Col>
    //           <Col lg={2} md={2} sm={2} xs={2}>
    //             {/* <img src={sevenTrainSign} /> */}
    //             <br />
    //             <p>0.3 miles</p>
    //             <p>Vernon-Jackson stop</p>
    //           </Col>
    //           <Col lg={2} md={2} sm={2} xs={2}>
    //             {/* <img src={mtaSign} /> */}
    //             <br />
    //             <p>0.4 miles</p>
    //             <p>Hunters Point Avenue</p>
    //           </Col>
    //           <Col lg={2} md={2} sm={2} xs={2}>
    //             {/* <img src={nycFerrySign} /> */}
    //             <br />
    //             <p>0.5 miles</p>
    //             <p>Hunters Point Avenue</p>
    //           </Col>
    //           <Col lg={2} md={2} sm={2} xs={2}>
    //             {/* <img src={citiBikeSign} /> */}
    //             <br />
    //             <p>0.2 miles</p>
    //             <p>Nearest bike location</p>
    //           </Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //   </div>





    <div className="sectionTitle">
      <Row>
        <div className="welcomeTxt secondaryTxt">
          FLOOR PLANS
    </div>
      </Row>
      <Row>
        <img className="floorPlansStyle" src={floorplan} />
      </Row>
    </div>


    // <div className="">
    //   <Row>
    //     <Col lg={1} md={1} sm={1} xs={1}>
    //       <div className="sectionHeader">
    //         {/* <p className="transportTxt">TRANSPORTATION</p> */}
    //         <div className="rotation-wrapper-outer">
    //           <div className="rotation-wrapper-inner">
    //             <p className="element-to-rotate">FLOOR PLANS</p>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col lg={11} md={11} sm={11} xs={11}>
    //       <img className="floorPlansStyle" src={floorplan} />
    //     </Col>
    //   </Row>
    // </div>
  )
}

export default Floorplans;