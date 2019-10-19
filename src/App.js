import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Section from './Components/Section';
import Top from './Components/Top';
import { Container, Row, Col } from 'react-grid-system';

function App() {
  return (
    <div className="App">
        <Top />
        <Section />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
