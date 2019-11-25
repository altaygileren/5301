// import React from 'react'
// import Gallery from 'react-grid-gallery';
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import kitchen from '../img/1--11.jpg';
import floor1 from '../img/1--15.jpg'
import floor2 from '../img/1--14.jpg'
import floor3 from '../img/1--13.jpg'
import floor4 from '../img/1--9.jpg'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const imgs = [

  {
    src: `${kitchen}`,
    width: 2,
    height: 1
  },
  {
    src: `${floor1}`,
    width: 2,
    height: 1
  },
  {
    src: `${floor2}`,
    width: 2,
    height: 1
  },
  {
    src: `${floor3}`,
    width: 2,
    height: 1
  },
  {
    src: `${floor4}`,
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