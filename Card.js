import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button2 } from "./Button2";
import { device } from "../utils/screenSizes";
import px2vw from "../utils/px2vw";
export default function CardDiv({ data, isDesc, i, isButton, linkTo }) {
  return (
    <React.Fragment>
      <Card key={i}>
        <Img src={data.imageLink} />
        <CardH1>{data.title}</CardH1>
        {isDesc ? <CardDescText> {data.desc}</CardDescText> : null}
        {isButton ? <CardLink to={linkTo}>Learn More</CardLink> : null}
      </Card>
    </React.Fragment>
  );
}
const CardLink = styled(Link)`
  ${Button2}
`;
const Img = styled.img`
  /* border: solid 1px orange; */
  border-radius: 0%;
  height: 250px;
  width: 300px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.5);
`;
const Card = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  will-change: transform;
  @media ${device.larger} {
    width: 40%;
  }
  @media ${device.large} {
    width: 40%;
  }
  @media ${device.medium} {
    width: 90%;
  }
  @media ${device.small} {
    width: 90%;
  }
`;
const CardH1 = styled.h1`
  color: rgb(41, 41, 46);
  font-weight: lighter;
  text-align: center;
  margin-bottom: 0;
  text-transform: uppercase;
  @media ${device.larger} {
    font-size: ${px2vw(25)};
  }
  @media ${device.large} {
    font-size: ${px2vw(30)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(65)};
  }
  @media ${device.small} {
    font-size: ${px2vw(80)};
  }
`;
const CardDescText = styled.h3`
  text-align: center;
  color: rgb(109, 103, 103);
  font-weight: lighter;
  line-height: 1.6;
  letter-spacing: 1.3px;

  @media ${device.larger} {
    font-size: ${px2vw(15)};
  }
  @media ${device.large} {
    font-size: ${px2vw(23)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(36)};
  }
  @media ${device.small} {
    font-size: ${px2vw(45)};
  }
`;
