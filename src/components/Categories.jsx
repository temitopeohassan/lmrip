







import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: ${props => props.mobileView ? 'white' : 'black'};

  @media (min-width: 768px) {
    color: black; /* Adjust the color for larger screens if needed */
  }
`;

const Categories = () => {
  return (
    <>
      <Title mobileView>SHOP CATEGORIES</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
