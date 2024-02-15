import React from 'react';
import styled from 'styled-components';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import LogoImg from '../assets/images/logo.png';
import MobileLogoImg from '../assets/images/mobile-logo.png'; 
import Img from '../assets/images/hero1.jpg';
import { useNavigate } from 'react-router-dom';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.backgroundColor}; /* Change background color based on props */
    
    @media (max-width: 768px) {
        background-color: ${props => props.mobileBackgroundColor}; /* Change background color for mobile view */
    }
`;

const Logo = styled.img`
    height: auto;

    @media (max-width: 768px) {
        display: none; /* Hide the regular logo on mobile */
    }
`;

const MobileLogo = styled.img`
    height: auto;

    @media (min-width: 769px) {
        display: none; /* Hide the mobile logo on desktop */
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.backgroundColor}; /* Change background color based on props */
    
    @media (max-width: 768px) {
        background-color: ${props => props.mobileBackgroundColor}; /* Change background color for mobile view */
    }
`;

const SocialMediaIcon = styled.div`
    margin-left: 10px;
    color: ${props => props.iconColor}; /* Change icon color based on props */
    
    @media (max-width: 768px) {
        color: ${props => props.mobileIconColor}; /* Change icon color for mobile view */
    }
`;

const StyledSlide = styled.div`
    letter-spacing: .2px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    box-sizing: border-box;
    height: 600px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 100%;
    display: inline-block;
    background-image: url(${props => props.backgroundImage});
`;

const SlideContent = styled.div`
    // Add your styles for slide content here
`;

const FormContainer = styled.div`
    position: relative;
    top: 200px;
    left: 700px;
    background-color: rgba(0, 0, 0, 0.5); /* Opaque grey background */
    padding: 20px; /* Add padding for spacing */
    max-width: 500px; /* Limit width of the form container */

    /* Style form elements */
    input[type="text"],
    input[type="email"] {
        width: 100%;
        max-width: 100%; /* Set maximum width for form elements */
        padding: 10px;
        margin-bottom: 10px;
    }

    /* Style button */
    button[type="submit"] {
        width: 100%;
    }

    @media (max-width: 768px) {
        top: 200px;
        left: 0;
        width: 100%;
    }
`;


// Styled component for form elements
const FormElement = styled.input`
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
`;

// Styled component for checkbox (Material-UI)
const StyledCheckbox = styled(Checkbox)`
    && {
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px;
    }
`;

// Styled component for inline label
const InlineLabel = styled.label`
    display: inline-block;
    width: auto;
`;

const Landing = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle header button submission
    const handleHeaderButtonClick = () => {
        // Navigate to /main/home route
        navigate('/main/home');
    };

    return (
        <>
            <Header backgroundColor="white" mobileBackgroundColor="black"> {/* Default background color is white */}
                <Logo src={LogoImg} alt="Logo" />
                <MobileLogo src={MobileLogoImg} alt="Mobile Logo" />
                <Button variant="contained" color="primary" onClick={handleHeaderButtonClick}>Shop</Button>
            </Header>
            <StyledSlide style={{ backgroundImage:  `url(${Img})` }}>
            <SlideContent>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mt-30">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <FormContainer>
                                                <h3 style={{color: 'white'}}>Receive Our Catalouge</h3>
                                                <form id="b_search_Form" className="sc-eDLKkx dpfGVm b_search_Form wrap-form d-block" data-mailchimp="true">
                                                    <div className="row row-equal-height">
                                                        <div className="col-lg-12 mb-3">
                                                            <label><input type="text" id="name" placeholder="Name" /></label>
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <label><input type="email" id="email" placeholder="Email Address" /></label>
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <FormControlLabel
                                                                control={<Checkbox name="checkedB" color="primary" />}
                                                                label="I agree to the terms and conditions"
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <Button variant="contained" color="success" type="submit">Sign Up!</Button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </FormContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SlideContent>
            </StyledSlide>
            <Footer backgroundColor="white" mobileBackgroundColor="black"> {/* Default background color is white */}
                <SocialMediaIcon iconColor="black" mobileIconColor="white"> {/* Default icon color is black */}
                    <Facebook />
                </SocialMediaIcon>
                <SocialMediaIcon iconColor="black" mobileIconColor="white">
                    <Twitter />
                </SocialMediaIcon>
                <SocialMediaIcon iconColor="black" mobileIconColor="white">
                    <Instagram />
                </SocialMediaIcon>
            </Footer>
        </>
    );
};

export default Landing;
