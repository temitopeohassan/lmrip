import {
  Instagram,
  MailOutline,
} from "@material-ui/icons";
import styled from "styled-components";
import Img from '../assets/images/footer-logo.jpeg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const Desc = styled.p`
  margin: 5px 0px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
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
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const media = {
  mobile: `@media(max-width: 768px) {
    flex-basis: 100%; /* Adjust the flex-basis for smaller screens to take up full width */
  }`,
};

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo><img src={Img} alt='LMRIP' /></Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget convallis velit. Integer eu neque molestie, commodo nunc eu, malesuada neque. Proin magna purus, hendrerit fringilla vehicula convallis, tempor sit amet est. Sed ut magna ac justo scelerisque tincidunt id eget ex.
        </Desc>
      </Left>
      <Center>
        <Title>HELP</Title>
        <List>
          <ListItem>CONTACT US</ListItem>
          <ListItem>FAQS</ListItem>
          <ListItem>PAYMENT METHODS</ListItem>
        </List>
      </Center>
      <Center>
        <Title>LEGAL</Title>
        <List>
          <ListItem>TERMS & CONDITIONS</ListItem>
          <ListItem>ACCESSIBILITY</ListItem>
          <ListItem>PRIVACY POLICY</ListItem>
          <ListItem>CORPORATE INFORMATION</ListItem>
        </List>
      </Center>
      <Right>
        <Title>FIND US</Title>
        <ContactItem>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          ON ISTAGRAM
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@lmrip.co.uk
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
