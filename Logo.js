import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImage from "../assets/whiteLogo.png";
export default function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <Image src={logoImage} alt="logoImage" />
      </Link>
    </LogoContainer>
  );
}
const LogoContainer = styled.div``;
const Image = styled.img`
  height: 100%;
  width: 160px;
`;
