






import React from 'react'
import styled from 'styled-components';
import Img from "../assets/images/siteImage.jpg";



const Container = styled.div`
padding:50px;

@media (max-width: 768px) {
  color: white; /* Change text color to white for mobile view */
}
`;

const FormContainer = styled.div`
   
    padding: 20px; /* Add padding for spacing */
    max-width: 500px; /* Limit width of the form container */

    /* Style form elements */
    input[type="text"],
    input[type="email"] {
        width: 80%;
        max-width: 80%; /* Set maximum width for form elements */
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

const Title = styled.h1`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;



const Brand = () => {
  return (
    <>
    <Title>Contact Us</Title>
    <Container>
   <FormContainer>
   <form id="contact_form" className="contact_form wrap-form">
    <div className="row ttm-boxes-spacing-10px">
      <div className="col-md-12 ttm-box-col-wrapper"><label><input name="name" type="text" placeholder="Your Name" required="" /></label></div>
      <div className="col-md-12 ttm-box-col-wrapper"><label><input name="email" type="text" placeholder="Your Email" required="" /></label></div>
      <div className="col-md-12 ttm-box-col-wrapper"><label><input name="subject" type="text" placeholder="Subject" required="" /></label></div>
      <div className="col-md-12 ttm-box-col-wrapper"><label><input name="phone" type="text" placeholder="Phone Number" required="" /></label></div>
      <div className="col-md-12 ttm-box-col-wrapper"><label><textarea name="message" rows="7" placeholder="Message" required=""></textarea></label></div>
      </div>
      <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
 ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
 </form>
   </FormContainer>
    </Container>

    </>
  )
}

export default Brand