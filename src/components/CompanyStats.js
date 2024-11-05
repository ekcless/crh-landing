import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StatsSection = styled.section`
  padding: 120px 48px;
  background: #ffffff;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CompanyCard = styled(motion.div)`
  background: #f5f5f7;
  border-radius: 24px;
  padding: 48px;
  
  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    background: linear-gradient(45deg, #0066FF, #5200FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
`;

const Stat = styled.div`
  h3 {
    font-size: 48px;
    color: #1d1d1f;
    margin-bottom: 8px;
  }
  
  p {
    color: #86868b;
    font-size: 16px;
  }
`;

const CompanyStats = () => {
  return (
    <StatsSection>
      <StatsGrid>
        <CompanyCard
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>CRH Development</h2>
          <p>Leading the way in software development and technological innovation</p>
          <StatGrid>
            <Stat>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </Stat>
            <Stat>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </Stat>
            <Stat>
              <h3>24/7</h3>
              <p>Support</p>
            </Stat>
            <Stat>
              <h3>15+</h3>
              <p>Expert Developers</p>
            </Stat>
          </StatGrid>
        </CompanyCard>
        
        <CompanyCard
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>Humanity Bridge</h2>
          <p>Connecting communities through innovative solutions</p>
          <StatGrid>
            <Stat>
              <h3>10k+</h3>
              <p>Users Worldwide</p>
            </Stat>
            <Stat>
              <h3>5k+</h3>
              <p>Communities Served</p>
            </Stat>
            <Stat>
              <h3>100+</h3>
              <p>Countries Reached</p>
            </Stat>
            <Stat>
              <h3>4.9</h3>
              <p>User Rating</p>
            </Stat>
          </StatGrid>
        </CompanyCard>
      </StatsGrid>
    </StatsSection>
  );
};

export default CompanyStats; 