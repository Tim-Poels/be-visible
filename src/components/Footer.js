import React from "react";
import styled from "styled-components"
import logo from "../images/logo-becode.png"
import footerPNG from "../images/footer.png"

export default function Footer() {
  return(
    <FooterContainer>
      <LogoImg src={logo}></LogoImg>
      <FooterImg src={footerPNG}></FooterImg>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
	width: 100vw;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const FooterImg = styled.img`
  height: 15vh;
  width: 100vw; 
`;

const LogoImg = styled.img`
	height: 12.5vh;
	width: auto;
	position: absolute;
	bottom: 6vh;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
`;