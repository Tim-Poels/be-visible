import React from "react";
import styled from "styled-components"
import logo from "../images/becode-logo.png"
import footerImg from "../images/footer.png"

export default function Footer() {
  return(
    <FooterContainer>
      <img src={logo}></img>
      <img src={footerImg}></img>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
	width: 100vw;
  position: absolute;
  bottom: 0;
`;