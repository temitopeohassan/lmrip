






import React from 'react'
import styled from 'styled-components';
import Img from "../assets/images/siteImage.jpg";
import '../font.css';



const Container = styled.div`
padding:50px;
font-family: "Regular"; /* Apply the custom font family */

@media (max-width: 768px) {
  color: white; /* Change text color to white for mobile view */
}
`;

const ImgContainer = styled.div`
  flex: 1; /* Occupy full height */
  position: relative;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  position: relative;
  z-index: -1;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-family: "Medium"; /* Apply the custom font family */

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;

const H2 = styled.h2`
  margin-bottom: 30px;
  font-family: "Medium"; /* Apply the custom font family */

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;

const H3 = styled.h3`
  margin-bottom: 30px;
  font-family: "Medium"; /* Apply the custom font family */

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;

const Brand = () => {
  return (
    <>
  <Title>Accessibility</Title>
    <Container>
    <H2>Accessibility Statement for LMRIP</H2>
<p>
	This is an accessibility statement from LMRIP.
</p>
<H3>Conformance status</H3>
<p>
	The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
	LMRIP
	is
	partially conformant
	with
	WCAG 2.1 level AA.
	
	Partially conformant
	means that some parts of the content do not fully conform to the accessibility standard.

</p>
<H3>Feedback</H3>
<p>
	We welcome your feedback on the accessibility of
	LMRIP.
	Please let us know if you encounter accessibility barriers on&nbsp;
	LMRIP:
</p>
<ul class="basic-information feedback h-card">
	<li>
	E-mail:
	<a class="email u-email" href="mailto:info@lmrip.co.uk">info@lmrip.co.uk</a>
</li>
</ul>
<hr noshade="noshade" />
<H3>Date</H3>
<p>
	This statement was created on the&nbsp;
	15 February 2024
</p>
    </Container>

    </>
  )
}

export default Brand