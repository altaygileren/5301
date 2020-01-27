import React, { useState, useCallback } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import kitchen from '../img/1--11.jpg';
import kitchen2 from '../img/kitchen.jpg';
import floor1 from '../img/1--15.jpg'
import floor2 from '../img/1--14.jpg'
import floor3 from '../img/1--13.jpg'
import floor4 from '../img/1--9.jpg'
import yourOfficeImg1 from '../img/1--2.jpg';
import yourOfficeImg2 from '../img/1--5.jpg';
import yourOfficeImg3 from '../img/1--8.jpg';
import yourOfficeImg4 from '../img/1--11.jpg';
import exterior2 from '../img/exterior2.jpg';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const imgs = [
  {
    src: `${floor1}`,
    width: 3,
    height: 2
  },
  {
    src: `${floor2}`,
    width: 3,
    height: 2
  },
  {
    src: `${floor3}`,
    width: 3,
    height: 2
  },
  {
    src: `${floor4}`,
    width: 3,
    height: 2
  },
  {
    src: `${yourOfficeImg1}`,
    width: 3,
    height: 2
  },
  {
    src: `${yourOfficeImg2}`,
    width: 3,
    height: 2
  },
  {
    src: `${yourOfficeImg3}`,
    width: 3,
    height: 2
  },
  {
    src: `${kitchen2}`,
    width: 3,
    height: 2
  },
  {
    src: `${yourOfficeImg4}`,
    width: 3,
    height: 2
  },
  {
    src: `${exterior2}`,
    width: 4,
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
        <div className="transportationImgDiv">
          <p className="heroSubTxt">Bridge House L.I.C offers 24,000 square feet of newly renovated workspace married to a once industrial building in Long Island City.  Open layouts covered in natural light are paired with a host of swift commute options, making Bridge House LIC the ideal alternative to an overcrowded Manhattan.  Nestled in a neighborhood oozing with culturally diverse restaurants, gourmet cafes, and an unrivaled nearby waterfront park, it's hard to imagine a better home for you and your work family.</p>
        </div>
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
