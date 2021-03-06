import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Container, Row, Col } from 'react-bootstrap';
import Hero from './Hero';
import Floorplans from './Floorplans';
import Welcome from './Welcome';
import Photogallery from './Photogallery';
import Contact from './Contact';
import Location from './Location';
import Youroffice from './Youroffice';
import Transportation from './Transportation';
import Parallaximg from './Parallaximg';
import Footer from './Footer';
import parallaximg2 from '../img/parallaximg2.png';
import parallaximg3 from '../img/parallaximg3.png';
import Parallax2 from './Parallax2';
import Buildingspecs from './Buildingspecs';
import Fade from 'react-reveal/Fade';

const firstParallax = {
  img: `${parallaximg2}`,
  txt: 'Your turn key office awaits'
}
const secondParallax = {
  img: `${parallaximg3}`,
  txt: 'This is more text'
}

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <Fade bottom>
          <Welcome />
        </Fade>
        <Fade bottom>
          <div className="moveUp">
            <Hero />
          </div>
        </Fade>
        <Fade bottom>
          <Element name="test2" className="element" >
            <Youroffice />
          </Element>
        </Fade>
        <Fade bottom>
          <Element name="test3" className="element">
            <Transportation />
          </Element>
        </Fade>
        <Fade bottom>
          <Photogallery />
        </Fade>
        <Fade bottom>
          <Element name="test5" className="element">
            <Floorplans />
          </Element>
        </Fade>
        <Fade bottom>
          {/* <Parallaximg info={secondParallax} /> */}
          <Element name="test4" className="element">
            <Buildingspecs />
          </Element>
        </Fade>
        <Fade bottom>
          <Parallaximg info={firstParallax} />
        </Fade>
        <Fade bottom>
          <Element name="test6" className="element">
            <Contact />
          </Element>
        </Fade>
        <Fade bottom>
          <Footer />
        </Fade>
      </div>
    );
  }
};

export default Section;

