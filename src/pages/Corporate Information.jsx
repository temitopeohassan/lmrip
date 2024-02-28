






import React from 'react'
import styled from 'styled-components';
import Img from "../assets/images/siteImage.jpg";
import "../font.css";



const Container = styled.div`
padding:50px;
font-family: "Regular"; /* Apply the custom font family */

@media (max-width: 768px) {
  color: white; /* Change text color to white for mobile view */
}
`;

const ImgContainer = styled.div`
  flex: 1; /* Occupy full height */
  position: relative;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  position: relative;
  z-index: -1;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-family: "Medium"; /* Apply the custom font family */

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;

const Brand = () => {
  return (
    <>
  <Title>Corporate Information</Title>
    <Container>
    
    </Container>

    </>
  )
}

export default Brand