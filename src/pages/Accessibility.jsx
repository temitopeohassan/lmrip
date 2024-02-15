






import React from 'react'
import styled from 'styled-components';
import Img from "../assets/images/siteImage.jpg";



const Container = styled.div`
padding:50px;

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

  @media (max-width: 768px) {
    color: white; /* Change text color to white for mobile view */
  }
`;

const Brand = () => {
  return (
    <>
  <Title>Accessibility</Title>
    <Container>
    <h2>Accessibility Statement for <span class="basic-information website-name">LMRIP</span></h2>
<p>
	This is an accessibility statement from <span class="basic-information organization-name">LMRIP</span>.
</p>
<h3>Conformance status</h3>
<p>
	The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
	<span class="basic-information website-name">LMRIP</span>
	is
	<span class="basic-information conformance-status" data-printfilter="lowercase">partially conformant</span>
	with
	<span class="basic-information conformance-standard"><span data-negate="">WCAG 2.1 level AA</span>.</span>
	<span>
	<span class="basic-information conformance-status">Partially conformant</span>
	means that
	<span class="basic-information conformance-meaning">some parts of the content do not fully conform to the accessibility standard</span>.
</span>
</p>
<h3>Feedback</h3>
<p>
	We welcome your feedback on the accessibility of
	<span class="basic-information website-name">LMRIP</span>.
	Please let us know if you encounter accessibility barriers on&nbsp;
	<span class="basic-information website-name">LMRIP</span>:
</p>
<ul class="basic-information feedback h-card">
	<li>
	E-mail:
	<a class="email u-email" href="mailto:info@lmrip.co.uk">info@lmrip.co.uk</a>
</li>
</ul>
<hr noshade="noshade" />
<h3>Date</h3>
<p>
	This statement was created on the&nbsp;
	<span class="basic-information statement-created-date">15 February 2024</span>
</p>
    </Container>

    </>
  )
}

export default Brand