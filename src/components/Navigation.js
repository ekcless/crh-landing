import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(45deg, #0066FF, #5200FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  
  a {
    color: #1d1d1f;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s;
    
    &:hover {
      color: #0066FF;
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo>CRH</Logo>
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#companies">Companies</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </Nav>
  );
};

export default Navigation; 