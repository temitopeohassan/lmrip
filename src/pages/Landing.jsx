









import React, { useState} from 'react';
import styled from 'styled-components';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import LogoImg from '../assets/images/logo.png';
import MobileLogoImg from '../assets/images/mobile-logo.png'; 
import Img from '../assets/images/hero1.jpg';
import { useNavigate } from 'react-router-dom';
import "../font.css";

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
    height: 90vh;
    background-position: top; /* Change background position to show from the top */
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 100%;
    display: inline-block;
    background-image: url(${props => props.backgroundImage});
    font-family: "Regular"; /* Apply the custom font family */
`;


const SlideContent = styled.div`
    // Add your styles for slide content here
`;

const FormContainer = styled.div`
    position: relative;
    top: 200px;
    left: 700px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.5); /* Opaque grey background */
    padding: 20px; /* Add padding for spacing */
    max-width: 400px; /* Limit width of the form container */

    /* Style form elements */
    font-family: "Regular"; /* Apply the custom font family */
    input[type="text"],
    input[type="email"] {
        width: 100%;
        max-width: 100%; /* Set maximum width for form elements */
        border-radius: 25px;
        margin-bottom: 10px;
    }

    /* Style button */
    font-family: "Regular"; /* Apply the custom font family */
    button[type="submit"] {
        width: 40%;
        border-radius: 25px;
    }

    @media (max-width: 768px) {
        top: 200px;
        left: 0;
        width: 100%;
    }
`;

const EnterContainer = styled.div`
    position: relative;
    top: 200px;
    left: 700px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.5); /* Opaque grey background */
    padding: 20px; /* Add padding for spacing */
    max-width: 500px; /* Limit width of the form container */


    /* Style button */
    button[type="submit"] {
        width: 100%;
        border-radius: 25px;
    }

    @media (max-width: 768px) {
        top: 200px;
        left: 0;
        width: 100%;
    }
`;

// Styled component for form elements
const FormElement = styled.input`
font-family: "Regular"; /* Apply the custom font family */
    border: 1px solid white;
    border-radius: 5px;
`;

// Styled component for checkbox (Material-UI)
const StyledCheckbox = styled(Checkbox)`
font-family: "Regular"; /* Apply the custom font family */
    && {
        color: white; /* Set the color to white */        border-radius: 5px;
        padding: 10px;
    }
`;

// Styled component for inline label
const InlineLabel = styled.label`
font-family: "Regular"; /* Apply the custom font family */
    display: inline-block;
    width: auto;
`;

const Landing = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', agreed: false });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({ ...prevState, [name]: val }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if all required fields are filled
        if (formData.name && formData.email && formData.agreed) {
            try {
                const response = await fetch('https://lmripdb-3dir.onrender.com/api/catalogue', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    setFormSubmitted(true);
                    // Redirect to /main/home after 3 seconds
                    setTimeout(() => {
                        navigate('/main/home');
                    }, 3000);
                } else {
                    console.error('Error submitting form');
                }
            } catch (error) {
                console.error('Error submitting form', error);
            }
        } else {
            alert('Please fill in all required fields');
        }
    };
    
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
                <Button variant="contained" color="primary" onClick={handleHeaderButtonClick}>Enter Site</Button>
            </Header>
            <StyledSlide style={{ backgroundImage:  `url(${Img})` }}>
            <SlideContent>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mt-30">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        {!formSubmitted && (
                    <FormContainer>
                        <h3 style={{ color: 'white' }}>Receive Our Catalogue</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="row row-equal-height">
                                <div className="col-lg-12 mb-3">
                                    <label><input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required /></label>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label><input type="email" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required /></label>
                                </div>
                                <div className="col-lg-12 mb-3">
                                <FormControlLabel
                                    style={{ color: 'white' }}
                                    control={<Checkbox name="agreed" style={{ color: 'white' }} checked={formData.agreed} />}
                                    label="I agree to the terms and conditions"
                                    onChange={(e) => handleInputChange({ target: { name: e.target.name, checked: e.target.checked, type: 'checkbox' } })}
                                />
                                </div>
                                <div className="col-lg-12">
                                    <Button variant="contained" color="primary" type="submit">Sign Up!</Button>
                                </div>
                            </div>
                        </form>
                    </FormContainer>
                )}
                {formSubmitted && (
                            <div>
                                <EnterContainer>
                                <h1 style={{ color: 'white' }}>Form Successfully submitted</h1>
                                </EnterContainer>
                            </div>
                        )}
                    
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
                    <Instagram />
                </SocialMediaIcon>
            </Footer>
        </>
    );
};

export default Landing;
