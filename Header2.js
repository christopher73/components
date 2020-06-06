import React from "react";
import styled from "styled-components";
import { device } from "../utils/screenSizes";
import px2vw from "../utils/px2vw";

export default function Header2({ imagePath, titleText }) {
  return (
    <Header
      style={{ backgroundImage: `url(${require("../assets/" + imagePath)})` }}
    >
      <Container>
        <Title>
          <div /> {titleText}
        </Title>
      </Container>
    </Header>
  );
}
const Header = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  margin-bottom: 5%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(41, 45, 62, 0.8);
  /* background: red; */
  @media ${device.larger} {
    height: 40vh;
  }
  @media ${device.large} {
    height: 40vh;
  }
  @media ${device.medium} {
    height: 30vh;
  }
  @media ${device.small} {
    height: 30vh;
  }
`;
const Title = styled.h1`
  color: #fff;
  letter-spacing: 3px;
  font-weight: lighter;
  margin: 10px;
  div {
    height: 10px;
    width: 40%;
    background: rgb(219, 100, 38);
  }
  @media ${device.larger} {
    font-size: ${px2vw(55)};
  }
  @media ${device.large} {
    font-size: ${px2vw(55)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(80)};
  }
  @media ${device.small} {
    font-size: ${px2vw(90)};
  }
`;
