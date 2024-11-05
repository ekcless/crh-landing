import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom, #000000, #1a1a1a);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(64,78,237,0.1) 0%, rgba(0,0,0,0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  background: linear-gradient(to right, #fff 20%, #666 80%, #fff 95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  line-height: 1.1;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #888;
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.5;
`;

const CompanyLinks = styled(motion.div)`
  display: flex;
  gap: 32px;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const CompanyLink = styled(motion.a)`
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &.primary {
    background: #fff;
    color: #000;
    &:hover {
      background: #f2f2f2;
      transform: scale(1.05);
    }
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    backdrop-filter: blur(10px);
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <GlowEffect />
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Innovation Meets
          <br />
          Excellence
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Two companies, one vision. Pioneering the future of technology and human connection
          through innovative solutions and groundbreaking development.
        </Subtitle>
        <CompanyLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <CompanyLink 
            href="#crh-development" 
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CRH Development
          </CompanyLink>
          <CompanyLink 
            href="https://humanitybridge.netlify.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Humanity Bridge
          </CompanyLink>
        </CompanyLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;