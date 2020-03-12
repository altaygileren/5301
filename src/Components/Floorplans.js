import React from 'react'
import floorplan from '../img/floorplan.png';
import { Row } from 'react-bootstrap';
import ModalImage from 'react-modal-image';

const Floorplans = () => {
  return (
    <div className="sectionTitle">
      <Row>
        <div className="welcomeTxt secondaryTxt">
          Floorplan
    </div>
      </Row>
      <div className="transportationImgDiv">
        <ModalImage
          small={floorplan}
          large={floorplan}
          hideZoom={false}
          hideDownload={false}
          imageBackgroundColor={'white'}
        />
        {/* <img className="floorPlansStyle" src={floorplan} /> */}
      </div>
    </div>
  )
}

export default Floorplans;