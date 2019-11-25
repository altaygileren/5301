import React from 'react'
import floorplan from '../img/floorplan.png';
import { Row, Col } from 'react-bootstrap';

const Floorplans = () => {
  return (
    <div className="sectionTitle">
      <Row>
        <div className="welcomeTxt secondaryTxt">
          Floor plans
    </div>
      </Row>
      <div className="transportationImgDiv">
        <img className="floorPlansStyle" src={floorplan} />
      </div>
    </div>
  )
}

export default Floorplans;