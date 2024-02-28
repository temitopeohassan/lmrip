import { Instagram, Facebook, MailOutline } from "@material-ui/icons";
import styled from "styled-components";
import Img from '../assets/images/footer-logo.jpeg';
import MobileImg from '../assets/images/mobile-footer-logo.png'; // Mobile logo
import { Link } from 'react-router-dom';
import '../font.css';

const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  background-color: white; /* Default background color */
  color: black; /* Default text color */
  padding: 20px;

  @media (max-width: 768px) {
    background-color: black; /* Change background color to black for mobile view */
    color: white; /* Change text color to white for mobile view */
  }
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const Desc = styled.p`
  margin: 5px 0px;
  font-family: "Regular"; /* Apply the custom font family */
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: left;
  justify-content: left;
  font-family: "Bold"; /* Apply the custom font family */

  /* Default styles for desktop view */
  background-color: white; /* White background */
  border: 2px solid white; /* White border */

  @media (max-width: 768px) {
    /* Styles for mobile view */
    background-color: black; /* Black background */
    border: 2px solid black; /* Black border */
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-family: "Medium"; /* Apply the custom font family */

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;

  a {
    color: black; /* Default link color */
    text-decoration: none;

    @media (max-width: 768px) {
      color: white; /* Change link color to white for mobile view */
    }
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to the left */

  @media (max-width: 768px) {
    align-items: flex-start; /* Align items to the left for mobile view */
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: left;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          {/* Conditionally render the logo based on viewport width */}
          <img src={window.innerWidth > 768 ? Img : MobileImg} alt='LMRIP' />
        </Logo>
        <Desc>
          spread love not hate. peace 
          to your soul not darkness to spirit. 
          air in your lungs. more strength
          to your liver. more fire to 
          your passion, be kind. 
        </Desc>
      </Left>
      <Center>
        <Title>HELP</Title>
        <List>
          <ListItem><Link to="/main/contact">CONTACT US</Link></ListItem>
          <ListItem><Link to="/main/faqs">FAQS</Link></ListItem>
          <ListItem><Link to="/main/payment_methods">PAYMENT METHODS</Link></ListItem>
        </List>
      </Center>
      <Center>
        <Title>LEGAL</Title>
        <List>
          <ListItem><Link to="/main/terms_and_conditions">TERMS & CONDITIONS</Link></ListItem>
          <ListItem><Link to="/main/accessibility">ACCESSIBILITY</Link></ListItem>
          <ListItem><Link to="/main/privacy_policy">PRIVACY POLICY</Link></ListItem>
          <ListItem><Link to="/main/corporate_information">CORPORATE INFORMATION</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>FIND US</Title>
        <ContactItem>
          <SocialIcon>
            <Facebook style={{ marginRight: "1px"}}/>Facebook
          </SocialIcon>
           
        </ContactItem>
        <ContactItem>
          <SocialIcon>
            <Instagram style={{ marginRight: "1px"}}/>Instagram
          </SocialIcon>
           
        </ContactItem>
        <ContactItem>
          <SocialIcon>
            <MailOutline  /> contact@lmrip.co.uk
          </SocialIcon>
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
