import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 60vh;
  background: #000;
  padding: 60px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
  }
`;

const ContactContainer = styled.div`
  max-width: 600px;
  width: 100%;
  z-index: 2;
  text-align: center;
`;

const ContactTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 32px;
  background: linear-gradient(to right, #fff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

const InfoItem = styled.div`
  color: #fff;
  
  h3 {
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 6px;
  }
  
  p, a {
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ccc;
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
`;

const SocialLink = styled(motion.a)`
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </ContactTitle>
        
        <ContactInfo
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InfoItem>
            <h3>Email</h3>
            <a href="mailto:contact@crhdevelopment.com">contact@crhdevelopment.com</a>
          </InfoItem>
          
          <InfoItem>
            <h3>Location</h3>
            <p>Palm Beach Gardens, FL</p>
          </InfoItem>
        </ContactInfo>
        
        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SocialLink 
            href="https://linkedin.com/company/crh-development" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </SocialLink>
          <SocialLink 
            href="https://github.com/crh-development" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </SocialLink>
        </SocialLinks>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 