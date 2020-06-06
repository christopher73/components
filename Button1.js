import React from "react";
import styled from "styled-components";
import { device } from "../utils/screenSizes";
import px2vw from "../utils/px2vw";
import { Link } from "react-router-dom";

export default function Button1({
  linkTo,
  children,
  primaryColor,
  secondaryColor,
}) {
  return (
    <Button to={linkTo} s={secondaryColor} p={primaryColor}>
      {children}
    </Button>
  );
}

const Button = styled(Link)`
  text-align: center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  border: none;
  margin: 15px 0px;
  text-transform: uppercase;
  border-radius: 35px;
  background-color: ${({ s }) => s || "#000"};
  color: ${({ p }) => p || "#fff"};
  letter-spacing: ${px2vw(1)};
  font-weight: bold;
  transition: all 0.1s;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  &:active {
    background-color: none;
    border: 0.5rem solid #000;
  }
  @media ${device.larger} {
    padding: ${px2vw(15)} 0px;
    width: ${px2vw(400)};
    font-size: ${px2vw(20)};
  }
  @media ${device.large} {
    padding: ${px2vw(15)} 0px;
    width: ${px2vw(400)};
    font-size: ${px2vw(20)};
  }
  @media ${device.medium} {
    padding: ${px2vw(40)} 0px;
    width: ${px2vw(600)};
    font-size: ${px2vw(30)};
  }
  @media ${device.small} {
    padding: ${px2vw(40)} 0px;
    width: ${px2vw(800)};
    font-size: ${px2vw(40)};
  }
`;
