import React from 'react';
import styled, { keyframes } from 'styled-components';
import FadeInSection from './FadeInSection';

const slideIn = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SectionContainer = styled.section`
  position: relative;
  padding: 100px 0;
  background: ${props => props.alternate ? props.theme.colors.backgroundAlt : props.theme.colors.background};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${props => props.theme.colors.border},
      transparent
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${props => props.theme.colors.border},
      transparent
    );
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  animation: ${slideIn} 0.6s ease-out;
`;

const SectionNumber = styled.span`
  position: absolute;
  top: 40px;
  left: 20px;
  font-size: 12rem;
  font-weight: 700;
  color: ${props => props.theme.colors.border};
  opacity: 0.3;
  z-index: 0;
  user-select: none;
`;

const Section = ({ children, id, number, alternate }) => {
  return (
    <SectionContainer id={id} alternate={alternate}>
      <SectionNumber>{number.padStart(2, '0')}</SectionNumber>
      <SectionContent>
        <FadeInSection>
          {children}
        </FadeInSection>
      </SectionContent>
    </SectionContainer>
  );
};

export default Section; 