import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%);
  padding: 0 48px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  
  h1 {
    font-size: 80px;
    font-weight: 700;
    background: linear-gradient(45deg, #0066FF, #5200FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 24px;
  }
  
  p {
    font-size: 24px;
    color: #86868b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Building Tomorrow's Technology</h1>
        <p>
          Through CRH Development and Humanity Bridge, we're creating innovative solutions 
          that shape the future of technology and human connection.
        </p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 