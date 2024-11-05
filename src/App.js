import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CompanyStats from './components/CompanyStats';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background: #000;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <CompanyStats />
      <Contact />
    </>
  );
};

export default App;
