import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { developmentImage, humanityImage } from '../assets/index.js';

const StatsContainer = styled.div`
  background: #000;
  color: #fff;
`;

const CompanySection = styled.section`
  min-height: 100vh;
  padding: 120px 24px;
  display: flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: 1;
  }
  
  &:nth-child(odd) {
    background: #0a0a0a;
  }
  
  &:nth-child(even) {
    background: #000;
  }

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const CompanyHeader = styled(motion.div)`
  margin-bottom: 64px;
  text-align: center;
`;

const CompanyTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 24px;
  background: linear-gradient(to right, #fff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CompanyDescription = styled.p`
  color: #888;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 64px;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 32px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(45deg, #fff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.p`
  color: #888;
  font-size: 1.1rem;
`;

const CompanyLink = styled(motion.a)`
  display: inline-block;
  margin-top: 48px;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CompanyStats = () => {
  return (
    <StatsContainer>
      <CompanySection id="crh-development" bgImage={developmentImage}>
        <Content>
          <CompanyHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CompanyTitle>CRH Development</CompanyTitle>
            <CompanyDescription>
              Leading the way in software development and technological innovation,
              delivering cutting-edge solutions for modern businesses.
            </CompanyDescription>
          </CompanyHeader>
          
          <StatsGrid
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatItem whileHover={{ scale: 1.05 }}>
              <StatNumber>50+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatItem>
            <StatItem whileHover={{ scale: 1.05 }}>
              <StatNumber>98%</StatNumber>
              <StatLabel>Client Satisfaction</StatLabel>
            </StatItem>
            <StatItem whileHover={{ scale: 1.05 }}>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Support Available</StatLabel>
            </StatItem>
          </StatsGrid>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <CompanyLink 
              href="https://crhdevelopment.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              Visit Website
            </CompanyLink>
          </motion.div>
        </Content>
      </CompanySection>

      <CompanySection bgImage={humanityImage}>
        <Content>
          <CompanyHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CompanyTitle>Humanity Bridge</CompanyTitle>
            <CompanyDescription>
              Connecting communities through innovative solutions, building bridges
              between people and technology worldwide.
            </CompanyDescription>
          </CompanyHeader>
          
          <StatsGrid
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatItem whileHover={{ scale: 1.05 }}>
              <StatNumber>1k+</StatNumber>
              <StatLabel>Active Projects</StatLabel>
            </StatItem>
            <StatItem whileHover={{ scale: 1.05 }}>
              <StatNumber>5k+</StatNumber>
              <StatLabel>Communities Served</StatLabel>
            </StatItem>
            <StatItem whileHover={{ scale: 1.05 }}>
              <StatNumber>100+</StatNumber>
              <StatLabel>Countries Reached</StatLabel>
            </StatItem>
          </StatsGrid>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <CompanyLink 
              href="https://humanitybridge.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Website
            </CompanyLink>
          </motion.div>
        </Content>
      </CompanySection>
    </StatsContainer>
  );
};

export default CompanyStats;