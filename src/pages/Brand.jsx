






import React from 'react'
import styled from 'styled-components';
import Img from "../assets/images/siteImage.jpg";
import "../font.css";

const Title = styled.h1`
  margin-bottom: 30px;
  font-family: "Medium"; /* Apply the custom font family */

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;

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


const Brand = () => {
  return (
    <>
    <ImgContainer>
                  <Image src={Img} alt="image" />
                </ImgContainer>
                <Title>Our Brand</Title>
    <Container>
    <p>Let Me Ride In Peace (LMRIP)'s t-shirts' brand inception is from a place of a passion for conceptual design, the passion for art, motivation, storytelling illustrations, and interpretation of thought-provoking subjects into eye-catching designs.</p>
    <p>Our limited-edition are collectables, and our apparel style, fabric and design are always classic, with a modern twist of urban and streetwear.</p>
    <p>Our brand's style is for skateboarders' surfers and bikers Luxury streetwear. Made of 100% Eco fabric, selectively sourced in classic cuts printed with the highest quality ink and dye, all our apparel is machine washable and easy to care for.</p>
    <p>The concept of our apparel designs always tells a story, a state of mind and an emotional depiction of an underlying message illustrated, and a full-bodied print is designed. At an early phase of the process a broad outline is met in the concept.</p>
    <p>Our style and conceptual design project our distinctive brand image consistently developed across an expanding number of products and price tiers.</p>
    <p>Our shoelace symbol unites all skateboarders and laced-up boot bikers with a casual and durable look. The range of apparel is so versatile that it can be dressed up or down, depending on the type of pants and laced-up shoes you decide to wear.</p>
    </Container>

    </>
  )
}

export default Brand