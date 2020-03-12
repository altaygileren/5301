import React from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import parallaximg2 from '../img/parallaximg2.png';
import parallaximg3 from '../img/parallaximg3.png';

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeClass: ''
    }
    this.scrollToTop = this.scrollToTop.bind(this);
  }


  componentDidMount() {

    window.addEventListener('scroll', () => {
      let activeClass = 'scrolled';
      if (window.scrollY === 0) {
        activeClass = 'top';
      }
      this.setState({ activeClass })
    })

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
      <Navbar fixed="top" className={`stickyTop ${this.state.activeClass}`} expand="lg">
        <Col lg={3} xs={12}>
          <p className="headerBrand">
            <b>Bridge House LIC</b>
            <hr />
            <span>53-01 11th Street LIC, NY</span>
          </p>
        </Col>
        <Col lg={9}>
          <Nav className="mr-auto">
            <Row className="rowLinks">
              <Col>
                <Link activeClass="active" className="test2 directLinks" to="test2" spy={true} smooth={true} duration={500}>Building</Link>
              </Col>
              <Col>
                <Link activeClass="active" className="test3 directLinks" to="test3" spy={true} smooth={true} duration={500}>Location</Link>
              </Col>
              <Col>
                <Link activeClass="active" className="test5 directLinks" to="test5" spy={true} smooth={true} duration={500}>Floorplan</Link>
              </Col>
              <Col>
                <Link activeClass="active" className="test4 directLinks" to="test4" spy={true} smooth={true} duration={500}>Specs</Link>
              </Col>
              <Col>
                <Link activeClass="active" className="test6 directLinks" to="test6" spy={true} smooth={true} duration={500} >Contact</Link>
              </Col>
            </Row>
          </Nav>
        </Col>
      </Navbar>
    );
  }
};

export default Section;

