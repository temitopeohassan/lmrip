import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  background-color: white; /* Default background color */
  color: black; /* Default text color */

  @media (max-width: 768px) {
    height: auto;
    background-color: black; /* Change background color to black for mobile view */
    color: white; /* Change text color to white for mobile view */
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
  padding: 20px;

  @media (max-width: 768px) {
    position: static;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    color: white; /* Adjust text color for mobile view */
  }
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;

  @media (max-width: 768px) {
    background-color: transparent; /* Adjust button background color for mobile view */
    color: white; /* Adjust button text color for mobile view */
  }
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
