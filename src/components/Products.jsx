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
  margin-bottom: 5px;
  color: ${props => props.mobileView ? 'white' : 'black'};

  @media (min-width: 768px) {
    color: black; /* Adjust the color for larger screens if needed */
  }
`;

const ProductWrapper = styled.div`
width: 100%; /* Set width to 50% to display 2 items per row */
padding: 10px; /* Adjust padding as needed */
  
  @media (min-width: 768px) {
    width: 48%; /* Set width to 48% for devices larger than 768px */
  }

  @media (min-width: 1024px) {
    width: 50%; /* Set width to 32% for devices larger than 1024px */
  }
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://lmripdb-3dir.onrender.com/api/products?category=${cat}`
            : "https://lmripdb-3dir.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
   <>
   <Title mobileView>OUR PRODUCTS!</Title>
    <Container>
    {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
  </Container>
   </>
  );
};

export default Products;
