import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import Img from '../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';
import TinyScroller from "./TinyScroller";

const Container = styled.div`
  height: 250px;
  position: sticky; /* Make the container sticky */
  top: 0; /* Stick it to the top */
  z-index: 10;
  background-color: white; /* Add a background color to prevent overlapping content */
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

  @media (max-width: 768px) {
    display: none; /* Hide in mobile view */
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none; /* Hide in mobile view */
  }
`;

const MenuItemLink = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none; /* Remove underlines */
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

  @media (min-width: 769px) {
    display: none; /* Hide in desktop view */
  }
`;

const MobileMenu = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  display: none; /* Initially hide in mobile view */

  @media (max-width: 768px) {
    display: flex; /* Show in mobile view */
  }
`;

const Navbar = () => {
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
          <MenuItemLink>CONTACT US</MenuItemLink>
        </Left>

        <Center>
          <Logo>
            <img src={Img} alt='LMRIP' />
          </Logo>
        </Center>

        <Right>
          <MenuItemLink>LOG IN</MenuItemLink>
          {window.innerWidth > 768 && (  // Check window width before rendering Badge
            <MenuItemLink>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItemLink>
          )}
        </Right>

      </Wrapper>

      <WebMenu>
        <MenuItemLink>NEW IN</MenuItemLink>
        <MenuItemLink>SALES</MenuItemLink>
        <MenuItemLink>APPARELS</MenuItemLink>
        <MenuItemLink>KIDS</MenuItemLink>
        <MenuItemLink>GIFTS</MenuItemLink>
        <MenuItemLink>BRANDS</MenuItemLink>
      </WebMenu>

      {isMobileMenuOpen && (
        <MobileMenu>
          <MenuItemLink to="/new">NEW IN</MenuItemLink>
          <MenuItemLink to="/sales">SALES</MenuItemLink>
          <MenuItemLink to="/apparels">APPARELS</MenuItemLink>
          <MenuItemLink to="/kids">KIDS</MenuItemLink>
          <MenuItemLink to="/gifts">GIFTS</MenuItemLink>
          <MenuItemLink to="/brands">BRANDS</MenuItemLink>
        </MobileMenu>
      )}
    </Container>
   </>
  );
};

export default Navbar;
