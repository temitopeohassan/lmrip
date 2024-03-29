import React from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";

// Styled components for responsive design
const HomeContainer = styled.div`
  padding: 20px; /* Default padding */
  background-color: transparent; /* Default background color */

  @media only screen and (max-width: 600px) {
    padding: 10px; /* Adjust padding for smaller screens */
    background-color: #000000; /* Set background color to black in mobile view */
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Slider />
      <Categories />
      <Products/>
    </HomeContainer>
  );
};

export default Home;
