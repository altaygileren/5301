import React, { useState, useCallback } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import kitchen from '../img/kitchen.jpg';
import floor1 from '../img/floor1.jpg'
import floor2 from '../img/floor2.jpg'
import floor3 from '../img/floor3.jpg'
import floor4 from '../img/floor4.jpg'

const imgs = [

  {
    src: `${kitchen}`,
    width: 1,
    height: 0.5
  },
  {
    src: `${floor1}`,
    width: 1,
    height: 0.5
  },
  {
    src: `${floor2}`,
    width: 1,
    height: 0.5
  }
]
function Buildingspecs() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="sectionTitle">
      <Row>
        <div className="welcomeTxt secondaryTxt">
          Building specs
        </div>
      </Row>

      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className="secondParallaxTxt">
            <Row>
              <Col lg={2}>Location</Col>
              <Col lg={10}>53-01 11th street, LIC, NY 11101</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Year Built</Col>
              <Col lg={10}>1954</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Office space</Col>
              <Col lg={10}>1,000 - 12,000</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Floors</Col>
              <Col lg={10}>2</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Renovations</Col>
              <Col lg={10}>Fully renovated including lobby, kitchen, windows, elevator, restrooms</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Column spacing</Col>
              <Col lg={10}>40 foot spacing - Open plan</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Elevators</Col>
              <Col lg={10}>1 passenger</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>HVAC</Col>
              <Col lg={10}>Tenant controlled</Col>
            </Row>
            <hr />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className="secondParallaxTxt">
            <Row>
              <Col lg={2}>Building class</Col>
              <Col lg={10}>Fireproof warehouse</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Lot Square Footage</Col>
              <Col lg={10}>121,700</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Security access</Col>
              <Col lg={10}>24/7 Keycard/Camera surveillance & on-site security guard</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Building hours</Col>
              <Col lg={10}>24/7 tenant access</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Cleaning</Col>
              <Col lg={10}>Common areas</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Bicycle Storage</Col>
              <Col lg={10}>Bike parking</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Transportation</Col>
              <Col lg={10}>Subway, Train, Citi bike, NYC Ferry</Col>
            </Row>
            <hr />
            <Row>
              <Col lg={2}>Neighborhood</Col>
              <Col lg={10}>Vibrant restaurants, coffeeshops, waterfront park with tremendous views of Manhattan</Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>













    // <div>
    //   <Row>
    //     <Col lg={6}>
    // <div className="secondParallaxTxt">
    //   <Row>
    //     <Col lg={2}>Location</Col>
    //     <Col lg={10}>53-01 11th street, LIC, NY 11101</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Year Built</Col>
    //     <Col lg={10}>1954</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Office space</Col>
    //     <Col lg={10}>3,500 - 12,024</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Floors</Col>
    //     <Col lg={10}>2</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Renovations</Col>
    //     <Col lg={10}>Fully renovated including lobby, windows, facade, elevator, restrooms</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Column spacing</Col>
    //     <Col lg={10}>40 foot spacing - Open plan</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Elevators</Col>
    //     <Col lg={10}>1 passenger</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>HVAC</Col>
    //     <Col lg={10}>Tenant controlled</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Building class</Col>
    //     <Col lg={10}>Fireproof warehouse</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Lot Square Footage</Col>
    //     <Col lg={10}>121,700</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Security access</Col>
    //     <Col lg={10}>24/7 Keycard/Camera surveillance</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Building hours</Col>
    //     <Col lg={10}>24/7 tenant access</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Cleaning</Col>
    //     <Col lg={10}>Common areas</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Bicycle Storage</Col>
    //     <Col lg={10}>Bike rack</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Transportation</Col>
    //     <Col lg={10}>Subway, Train, NYC Ferry</Col>
    //   </Row>
    //   <hr />
    //   <Row>
    //     <Col lg={2}>Neighborhood</Col>
    //     <Col lg={10}>Vibrant restaurants, coffeeshops, outdoors with tremendous views of Manhattan</Col>
    //   </Row>
    // </div>
    //     </Col>
    //     <Col lg={6}>
    // <Gallery photos={imgs} onClick={openLightbox} />
    // <ModalGateway>
    //   {viewerIsOpen ? (
    //     <Modal onClose={closeLightbox}>
    //       <Carousel
    //         currentIndex={currentImage}
    //         views={imgs.map(x => ({
    //           ...x,
    //           srcset: x.srcSet,
    //           caption: x.title
    //         }))}
    //       />
    //     </Modal>
    //   ) : null}
    // </ModalGateway>
    //     </Col>
    //   </Row>
    // </div>
  )
}


export default Buildingspecs;