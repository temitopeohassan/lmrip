



// TinyScroller.js

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
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
  animation: ${scrollAnimation} 10s linear infinite; /* Adjust duration as needed */
`;

const Scroller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: red; /* Adjust color as needed */
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

  return (
    <ScrollContainer id="scrollContainer">
      <Content>
        {/* Your website content goes here */}
        FOR INFO UPDATE
      </Content>
      <Scroller style={{ width: `${scrollPercentage}%` }}></Scroller>
    </ScrollContainer>
  );
};

export default TinyScroller;
