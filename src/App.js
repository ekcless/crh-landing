import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CompanyStats from './components/CompanyStats';

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
    background: #ffffff;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Hero />
      <CompanyStats />
    </>
  );
};

export default App;
