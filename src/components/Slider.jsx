import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import backgroundImage from "../assets/images/background-photo-mobile-devices.png"; // Import your static image

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => (props.isMobile ? "#000000" : "transparent")};
  background-image: ${(props) => (props.isMobile ? `url(${backgroundImage})` : "none")};
  background-size: cover;
  background-position: center;
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
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const InfoContainer = styled.div`
  position: absolute; /* Change to absolute positioning */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Add background color for better readability */
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

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Add position relative to allow absolute positioning of InfoContainer */
`;

const Title = styled.h1`
  font-size: 3.5vw;
  margin-bottom: 20px;
  color: #ffffff; /* Add text color */
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 1.5vw;
  font-weight: 500;
  letter-spacing: 1px;
  color: #ffffff; /* Add text color */
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Container 
      isMobile={isMobileView}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isMobileView ? null : (
        <>
          <Arrow 
            direction="left" 
            onClick={() => handleClick("left")} 
            isVisible={isHovering}
          >
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
                </InfoContainer>
              </Slide>
            ))}
          </Wrapper>
          <Arrow 
            direction="right" 
            onClick={() => handleClick("right")} 
            isVisible={isHovering}
          >
            <ArrowRightOutlined style={{ color: "#ffffff" }} />
          </Arrow>
        </>
      )}
    </Container>
  );
};

export default Slider;
