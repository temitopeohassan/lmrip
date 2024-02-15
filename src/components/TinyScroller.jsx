import React, { useEffect, useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const scrollAnimationDesktop = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const scrollAnimationMobile = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
`;

// Global style to set the background color of the entire page in mobile view
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ isMobile }) => (isMobile ? 'black' : 'white')};
  }
`;

const ScrollContainer = styled.div`
  width: 100%;
  height: 20px; /* Adjust the height as needed */
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  white-space: nowrap;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: ${({ isMobile }) => (isMobile ? scrollAnimationMobile : scrollAnimationDesktop)};
  animation-duration: ${({ isMobile }) => (isMobile ? '20s' : '40s')}; /* Adjust duration for mobile and desktop */
  color: ${({ isMobile }) => (isMobile ? 'white' : 'black')}; /* Text color */
  background-color: ${({ isMobile }) => (isMobile ? 'black' : 'white')}; /* Background color */
  @media (min-width: 769px) {
    color: ${({ isMobile }) => (isMobile ? 'black' : 'white')}; /* Text color */
    background-color: ${({ isMobile }) => (isMobile ? 'white' : 'black')}; /* Background color */
  }
`;

const Scroller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ isMobile }) => (isMobile ? 'white' : 'black')}; /* Scroller background color */
  height: 100%;
`;

const TinyScroller = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const container = document.getElementById('scrollContainer');
    const percentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    const container = document.getElementById('scrollContainer');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine animation details based on viewport width
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <GlobalStyle isMobile={isMobile} />
      <ScrollContainer id="scrollContainer">
        <Content isMobile={isMobile}>
          {/* Your website content goes here */}
          New Collection ALL Black. Love and Live your Life.
        </Content>
        <Scroller style={{ width: `${scrollPercentage}%` }} isMobile={isMobile}></Scroller>
      </ScrollContainer>
    </>
  );
};

export default TinyScroller;
