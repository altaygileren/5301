import React, { useState, useCallback } from "react";
import Locationimg from '../img/location.png';
import { Container, Row } from 'react-bootstrap';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Rockawaybrewing from '../img/rockawaybrewing.jpeg';
import Bricktown from '../img/bricktownbagel.jpg';

const imgs = [

  {
    src: `${Rockawaybrewing}`,
    width: 2,
    height: 1
  },
  {
    src: `https://c8.alamy.com/comp/MKK4M1/rockaway-brewing-company-lic-tap-room-46-01-5th-st-long-island-city-ny-MKK4M1.jpg`,
    width: 2,
    height: 1
  },
  {
    src: `https://3b54d614b0ba3daee3e7-22cdaf81fa4f84a86ca17cc2abb428ed.ssl.cf1.rackcdn.com/DL_PepsiCola.jpg`,
    width: 2,
    height: 1
  },
  {
    src: `https://c8.alamy.com/comp/R209CY/no-7-subway-train-long-island-city-queens-queens-plaza-new-york-city-R209CY.jpg`,
    width: 2,
    height: 1
  },
  {
    src: `https://qns.com/wp-content/uploads/2019/03/LIC-Gantry-1.jpg`,
    width: 2,
    height: 1
  },
  {
    src: `${Bricktown}`,
    width: 2,
    height: 1
  },
  {
    src: `https://qns.com/wp-content/uploads/2018/09/ferries_2018_08_31_q01_z.jpg`,
    width: 2,
    height: 1
  }
]

export default function Location() {
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
          Location
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
  )
}

// export default Location;