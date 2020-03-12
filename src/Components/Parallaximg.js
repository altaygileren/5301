import React from 'react'
import { Parallax } from 'react-parallax';

const Parallaximg = (props) => {
  return (
    <div>
      <Parallax
        bgImage={props.info.img}
        bgImageAlt="the cat"
        strength={800}
      >
        <div className="heroImgDiv" style={{ height: 500 }}>
          <div className="heroDiv">
            <p className="parallaxTxt">{props.info.txt}</p>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Parallaximg;