import React, { useState, useCallback } from "react";
import { Row, Col } from 'react-bootstrap';
import yourOfficeImg1 from '../img/yourOfficeImg1.png';
import yourOfficeImg2 from '../img/yourOfficeImg2.png';
import yourOfficeImg3 from '../img/yourOfficeImg3.png';
import yourOfficeImg4 from '../img/yourOfficeImg4.png';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const imgs = [

  {
    src: `${yourOfficeImg1}`,
    width: 2,
    height: 1
  },
  {
    src: `${yourOfficeImg2}`,
    width: 2,
    height: 1
  },
  {
    src: `${yourOfficeImg3}`,
    width: 2,
    height: 1
  },
  {
    src: `${yourOfficeImg4}`,
    width: 2,
    height: 1
  }
]


export default function Youroffice() {
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
        <Col lg={1} md={1} sm={1} xs={1}>
          <div className="sectionHeader">
            <p>YOUR OFFICE</p>
          </div>
        </Col>
        <Col lg={11} md={11} sm={11} xs={11}>
          <Row>
            <Gallery photos={imgs} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={imgs.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
