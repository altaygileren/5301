import React, { useState, useCallback } from "react";
import { Row, Col } from 'react-bootstrap';
import yourOfficeImg1 from '../img/1--2.jpg';
import yourOfficeImg2 from '../img/1--5.jpg';
import yourOfficeImg3 from '../img/1--8.jpg';
import yourOfficeImg4 from '../img/1--11.jpg';
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
        <div className="welcomeTxt secondaryTxt">
          Your new home
        </div>
      </Row>
      <div>
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
      </div>
    </div>
  );
}
