import React from 'react'
import floorplan from '../img/floorplan.png';
import { Row, Col } from 'react-bootstrap';
import ModalImage from 'react-modal-image';

const Floorplans = () => {
  return (
    <div className="sectionTitle">
      <Row>
        <div className="welcomeTxt secondaryTxt">
          Floor plans
    </div>
      </Row>
      <div className="transportationImgDiv">
        <ModalImage
          small={floorplan}
          large={floorplan}
          hideZoom={false}
          hideDownload={false}
        />
        {/* <img className="floorPlansStyle" src={floorplan} /> */}
      </div>
    </div>
  )
}

export default Floorplans;