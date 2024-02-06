import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  /* Ensure there are no conflicting styles in the parent component */
  /* Check if the parent component has sufficient dimensions */
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.direction === "left" && "left: 10px;"}
  ${(props) => props.direction === "right" && "right: 10px;"}
  cursor: pointer;
  opacity: 2;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5vw;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 1.5vw;
  font-weight: 500;
  letter-spacing: 1px;
`;

const InfoContainer = styled.div`
  position: relative;
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  position: relative; /* Add this line to make the container positioned */
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  position: relative; /* Add this line to make the image positioned */
  z-index: 1; /* Ensure the image is behind the button */
`;

const Button = styled.button`
  position: fixed; /* Change to fixed positioning */
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  font-size: 1.5vw;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
  z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ color: "#ffffff" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ color: "#ffffff" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
