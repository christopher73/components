import React from "react";
import styled from "styled-components";
import { device } from "../utils/screenSizes";
import px2vw from "../utils/px2vw";
export default function MainQuote() {
  return (
    <MainQuoteContainer>
      <H1>
        We make understanding
        <br /> <span>Medicare</span> and <span>Medicaid</span> easy
      </H1>
      <P>
        Understanding your Medicare choices can be overwhelming for New York, New Jersey and Florida
        residents. Middway can help advise you to make the best decision when it
        comes to affordable health plans available in your area. Let us help you to find the best
        medicare plans for you or your loved ones.
      </P>
      <Img src={require("../assets/grandparents2.png")} />
      <Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(235, 244, 245)"
          fillOpacity="1"
          d="M0,192L60,192C120,192,240,192,360,208C480,224,600,256,720,266.7C840,277,960,267,1080,224C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </Waves>
    </MainQuoteContainer>
  );
}
const Waves = styled.svg``;
const MainQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: rgb(41, 41, 46);
  width: 80%;
  text-align: center;
  letter-spacing: 1.3px;
  margin-bottom: 0;
  font-size: ${px2vw(45)};
  span {
    color: rgb(219, 100, 38);
    text-transform: uppercase;
  }
  @media ${device.larger} {
    font-size: ${px2vw(40)};
  }
  @media ${device.large} {
    font-size: ${px2vw(45)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(45)};
  }
  @media ${device.small} {
    font-size: ${px2vw(50)};
  }
`;
const P = styled.p`
  color: rgb(109, 103, 103);
  font-weight: lighter;
  line-height: 1.6;
  letter-spacing: 1.3px;
  text-align: center;
  @media ${device.larger} {
    font-size: ${px2vw(17)};
    width: 60%;
  }
  @media ${device.large} {
    font-size: ${px2vw(20)};
    width: 60%;
  }
  @media ${device.medium} {
    font-size: ${px2vw(25)};
    width: 70%;
  }
  @media ${device.small} {
    font-size: ${px2vw(35)};
    width: 70%;
  }
`;
const Img = styled.img`
  width: ${px2vw(500)};
  height: ${px2vw(500)};
`;
