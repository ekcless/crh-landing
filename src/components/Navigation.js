import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  
  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.2s;
    opacity: 0.8;
    cursor: pointer;
    
    &:hover {
      opacity: 1;
      color: #fff;
    }
  }
`;

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navHeight = 70; // Height of the navigation bar
    
    if (element) {
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Nav>
      <Logo onClick={() => scrollToSection('hero')}>CRH</Logo>
      <NavLinks>
        <a onClick={() => scrollToSection('hero')}>Home</a>
        <a onClick={() => scrollToSection('crh-development')}>Companies</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </NavLinks>
    </Nav>
  );
};

export default Navigation; 