import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import Img from '../assets/images/logo.jpeg'; // Default logo for desktop view
import MobileImg from '../assets/images/mobile-logo.png'; // Mobile logo
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import TinyScroller from "./TinyScroller";

const Container = styled.div`
  height: 150px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white; /* Default background color */
  color: black; /* Default text color */

  @media (max-width: 768px) {
    background-color: black; /* Change background color to black for mobile view */
    color: white; /* Change text color to white for mobile view */
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      content: url(${MobileImg});
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItemLink = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;

const WebMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  color: white; /* Change icon color to white for mobile view */

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <>
    <TinyScroller />
    <Container>
      <MobileMenuIcon onClick={toggleMobileMenu}>☰</MobileMenuIcon>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <img src={Img} alt='LMRIP' />
            </Logo>
          </Link>
        </Left>

        <Center>
          <WebMenu>
            <MenuItemLink to="/new">NEW IN</MenuItemLink>
            <MenuItemLink to="/sales">SALES</MenuItemLink>
            <MenuItemLink to="/apparels">APPARELS</MenuItemLink>
            <MenuItemLink to="/kids">KIDS</MenuItemLink>
            <MenuItemLink to="/gifts">GIFTS</MenuItemLink>
            <MenuItemLink to="/brands">BRANDS</MenuItemLink>
            <MenuItemLink to="/contact">CONTACT</MenuItemLink>
          </WebMenu>
        </Center>

        <Right>
          <MenuItemLink>LOG IN</MenuItemLink>
          <MenuItemLink>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItemLink>
        </Right>
      </Wrapper>

      {isMobileMenuOpen && (
        <MobileMenu>
          <MenuItemLink to="/new">NEW IN</MenuItemLink>
          <MenuItemLink to="/sales">SALES</MenuItemLink>
          <MenuItemLink to="/apparels">APPARELS</MenuItemLink>
          <MenuItemLink to="/kids">KIDS</MenuItemLink>
          <MenuItemLink to="/gifts">GIFTS</MenuItemLink>
          <MenuItemLink to="/brands">BRANDS</MenuItemLink>
          <MenuItemLink to="/contact">CONTACT US</MenuItemLink>
        </MobileMenu>
      )}
    </Container>
   </>
  );
};

export default Navbar;
