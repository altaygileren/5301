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


const imgs2 = [
  {
    src: `${exterior2}`,
    width: 800,
    height: 300
  }
]
const imgs = [
  {
    src: `${floor1}`,
    width: 400,
    height: 200
  },
  {
    src: `${floor2}`,
    width: 400,
    height: 200
  },
  {
    src: `${floor3}`,
    width: 400,
    height: 200
  },
  {
    src: `${floor4}`,
    width: 400,
    height: 200
  },
  {
    src: `${yourOfficeImg1}`,
    width: 400,
    height: 200
  },
  {
    src: `${yourOfficeImg2}`,
    width: 400,
    height: 200
  },
  {
    src: `${yourOfficeImg3}`,
    width: 400,
    height: 200
  },
  {
    src: `${kitchen2}`,
    width: 400,
    height: 200
  },
]


export default function Youroffice() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [viewerIsOpen2, setViewerIsOpen2] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const openLightbox2 = useCallback((event, { photo, index }) => {
    setCurrentImage2(index);
    setViewerIsOpen2(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const closeLightbox2 = () => {
    setCurrentImage2(0);
    setViewerIsOpen2(false);
  };
  return (
    <div className="sectionTitle">
      <Row>
        <div className="welcomeTxt secondaryTxt">
          Your new home
        </div>
      </Row>
      <div className="transportationImgDiv">
        <p className="heroSubTxt">Bridge House L.I.C offers 24,000 square feet of newly renovated workspace married to a once industrial building in Long Island City.  Open layouts covered in natural light are paired with a host of swift commute options, making Bridge House LIC the ideal alternative to an overcrowded Manhattan.  Nestled in a neighborhood packed with culturally diverse restaurants, gourmet cafes, and an unrivaled nearby waterfront park, it's hard to imagine a better place to call your own.</p>
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
                  caption: x.title,
                  autoSize: false
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <Gallery photos={imgs2} onClick={openLightbox2} />
        <ModalGateway>
          {viewerIsOpen2 ? (
            <Modal onClose={closeLightbox2}>
              <Carousel
                currentIndex={currentImage2}
                views={imgs2.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                  autoSize: false
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}
