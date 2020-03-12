// import React from 'react'
// import Gallery from 'react-grid-gallery';
import React, { useState, useCallback } from "react";
import pepsiCola from '../img/pepsicola.jpg';
import Sweetleaf from '../img/sweetleaf.jpg';
import Bricktown from '../img/bricktownbagel.jpg';
import Rockawaybrewing from '../img/rockawaybrewing.jpeg';
import Seventrain from '../img/7train.jpg';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Ferry from '../img/ferry.jpg';

const imgs = [

  {
    src: `${Sweetleaf}`,
    width: 2,
    height: 1
  },
  {
    src: `${Rockawaybrewing}`,
    width: 2,
    height: 1
  },
  {
    src: `${pepsiCola}`,
    width: 2,
    height: 1
  },
  {
    src: `${Seventrain}`,
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
    src: `${Ferry}`,
    width: 2,
    height: 1
  }
]

function Photogallery() {
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
    <div className="photoGalleryDiv">
      {/* <Gallery style="margin: 0px" enableImageSelection={false} images={imgs} /> */}
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
  )
}

export default Photogallery;