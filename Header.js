import React from "react";
import styled from "styled-components";
import VideoBg from "./VideoBg";
import Button1 from "./Button1";
import { device } from "../utils/screenSizes";
import px2vw from "../utils/px2vw";

// const themeColor = "rgba(33,36,50,0.85)";

export default function Header({ primaryColor, secondaryColor }) {
  return (
    <HeaderContainer>
      <VideoBg />
      <MovieBG>
        <MovieBGDiv>
          <H1 p={primaryColor} s={secondaryColor}>
            We are with you every step of the way
          </H1>
          <H2 p={primaryColor} s={secondaryColor}>
            Making <span>health care</span> choices easier
          </H2>
          <Button1
            linkTo="/contact"
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          >
            Speak with a licensed agent
          </Button1>
          <H3 p={primaryColor} s={secondaryColor}>
            Hablamos Español <span>|</span> 我们说普通话
          </H3>
        </MovieBGDiv>
        <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            // fill-opacity="1"
            d="M0,192L60,192C120,192,240,192,360,208C480,224,600,256,720,266.7C840,277,960,267,1080,224C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </Wave>
      </MovieBG>
    </HeaderContainer>
  );
}
const H1 = styled.h1`
  color: ${({ p }) => p || "#fff"};
  margin: 5px 0px;
  font-weight: lighter;
  @media ${device.larger} {
    font-size: ${px2vw(40)};
  }
  @media ${device.large} {
    font-size: ${px2vw(50)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(60)};
  }
  @media ${device.small} {
    font-size: ${px2vw(55)};
  }
`;
const H2 = styled.h2`
  color: ${({ p }) => p || "#fff"};
  font-weight: 100;
  font-size: ${px2vw(20)};
  span {
    text-transform: uppercase;
    color: ${({ s }) => s || "#000"};
    /* text-decoration: underline; */
  }
  @media ${device.larger} {
    font-size: ${px2vw(20)};
  }
  @media ${device.large} {
    font-size: ${px2vw(35)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(45)};
  }
  @media ${device.small} {
    font-size: ${px2vw(50)};
  }
`;
const H3 = styled.h2`
  font-size: ${px2vw(15)};
  color: ${({ p }) => p || "#fff"};
  font-weight: 100;
  span {
    color: ${({ s }) => s || "#000"};
  }
  @media ${device.larger} {
    font-size: ${px2vw(20)};
  }
  @media ${device.large} {
    font-size: ${px2vw(30)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(35)};
  }
  @media ${device.small} {
    font-size: ${px2vw(45)};
  }
`;
const HeaderContainer = styled.div`
  background-color: none;
  @media ${device.larger} {
    height: 85vh;
  }
  @media ${device.large} {
    height: 75vh;
  }
  @media ${device.medium} {
    height: 60vh;
  }
  @media ${device.small} {
    height: 60vh;
  }
`;
const MovieBGDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.larger} {
    height: 85vh;
  }
  @media ${device.large} {
    height: 75vh;
  }
  @media ${device.medium} {
    height: 60vh;
  }
  @media ${device.small} {
    height: 60vh;
  }
  position: absolute;
  margin: 0px 7%;
`;
const MovieBG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  background-color: rgba(41, 45, 62, 0.8);
`;
const Wave = styled.svg`
  width: 100%;
`;
