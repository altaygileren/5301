import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Hero from './Hero';
import Floorplans from './Floorplans';
import Welcome from './Welcome';
import Photogallery from './Photogallery';
import Contact from './Contact';
import Parallaximg from './Parallaximg';
import parallaximg2 from '../img/parallaximg2.png';
import parallaximg3 from '../img/parallaximg3.png';
import Logo from '../img/bridgeHouseLogo.png';

const firstParallax = {
  img: `${parallaximg2}`,
  txt: 'Text will be here'
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
      <Navbar fixed="top" className="stickyTop" expand="lg">
        <Col lg={3} xs={12}><span className="headerBrand"><img className="logo" src={Logo} /></span></Col>
        <Nav className="mr-auto">
          <Row className="rowLinks">
            <Col lg={2} md={2} sm={3} xs={3}>
              <Link activeClass="active" className="test2 directLinks" to="test2" spy={true} smooth={true} duration={500}>Building</Link>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <Link activeClass="active" className="test3 directLinks" to="test3" spy={true} smooth={true} duration={500}>Transportation</Link>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <Link activeClass="active" className="test4 directLinks" to="test4" spy={true} smooth={true} duration={500}>Location</Link>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <Link activeClass="active" className="test5 directLinks" to="test5" spy={true} smooth={true} duration={500}>Floor plans</Link>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <Link activeClass="active" className="test5 directLinks" to="test5" spy={true} smooth={true} duration={500}>Specifications</Link>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <Link activeClass="active" className="test6 directLinks" to="test6" spy={true} smooth={true} duration={500} >Contact</Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    );
  }
};

export default Section;

