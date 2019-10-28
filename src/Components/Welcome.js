import React from 'react'
import { Container } from 'react-grid-system';

const Welcome = () => {
  return (
    <Container>
      <div className="welcomeDiv">
        <p className="welcomeTxt">welcome to the building of your dreams</p>
        <p className="welcomeIntro">
          53-01 LIC offers 24,024 square feet of newly renovated workspace within a once Long Island City industrial building. Open spaces and natural light together with swift commutes and a host of nearby restaurants and gourmet cafes make 53-01 LIC a smart and alternative to Manhattan just one stop from Grand Central to Vernon Jackson on the 7 train. Alternatively, we have parking for those who enjoy a drive in the mornings!
      </p>
      </div>
    </Container>
  )
}

export default Welcome;