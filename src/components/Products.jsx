import { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h1`
  margin-bottom: 2px;
`;

const ProductWrapper = styled.div`
  width: 50%; /* Set width to 50% to display 2 items per row */
  padding: 10px; /* Adjust padding as needed */
`;

const Products = ({ cat, filters, sort }) => {

  return (
   <>
   <Title>OUR PRODUCTS!</Title>
    <Container>
    {popularProducts.map((item) => (
      <ProductWrapper key={item.id}>
      <Product item={item} />
    </ProductWrapper>
    ))}
  </Container>
   </>
  );
};

export default Products;
