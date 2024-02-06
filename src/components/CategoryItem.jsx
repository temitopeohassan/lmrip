import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8); /* Add a semi-transparent background for better readability */
  padding: 20px; /* Add padding for better spacing on smaller screens */

  @media (max-width: 768px) {
    position: static; /* Remove absolute positioning on smaller screens */
    background: none; /* Remove background color on smaller screens */
  }
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  text-align: center; /* Center the text on smaller screens */
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
