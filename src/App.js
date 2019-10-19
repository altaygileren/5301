import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Section from './Components/Section';
import { Container, Row, Col } from 'react-grid-system';

function App() {
  return (
    <div className="App">
      <div className="stickyTop">
        <Section />
      </div>
      {/* <Hero /> */}
    </div>
  );
}

export default App;
