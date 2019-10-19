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
        <Nav className="mr-auto">
          <Row className="rowLinks">
            <Col xs={4}>
              <Link activeClass="active" className="test1 directLinks" to="test1" spy={true} smooth={true} duration={500}>Building</Link>
            </Col>
            <Col xs={4}>
              <Link activeClass="active" className="test3 directLinks" to="test3" spy={true} smooth={true} duration={500}>Floor plans</Link>
            </Col>
            <Col xs={4}>
              <Link activeClass="active" className="test4 directLinks" to="test4" spy={true} smooth={true} duration={500} >Contact</Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
      // <div>
      //   <nav className="navbar navbar-default navbar-fixed-top stickyTop">
      //     <div className="container-fluid">
      //       <div className="moveDown collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      //         <Container>
      //           <Row>
      //             <Col lg={6} sm={4} xs={2}></Col>
      //             <Col lg={2} sm={2} xs={3}>
      //               <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Building</Link>
      //             </Col>
      //             <Col lg={2} sm={2} xs={4}>
      //               <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>Floor plans</Link>
      //             </Col>
      //             <Col lg={2} sm={2} xs={3}>
      //               <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} >Contact</Link>
      //             </Col>
      //           </Row>
      //         </Container>
      //       </div>
      //     </div>
      //   </nav>
      // </div>
    );
  }
};

export default Section;

