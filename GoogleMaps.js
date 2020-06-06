import React from "react";
import img from "../assets/grandparents3.png";
import styled from "styled-components";
import { device } from "../utils/screenSizes";
import px2vw from "../utils/px2vw";

export default function GoogleMaps({ mapLink }) {
  return (
    <GoogleMapsContainer>
      <Description>
        <img src={img} alt="mapImage" />
        <h1>
          Middway Serving New York, <br />New Jersey and Florida
        </h1>
      </Description>
      <Map>
        <iframe
          title="googleMaps"
          src={mapLink}
          style={{
            border: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Map>
    </GoogleMapsContainer>
  );
}

const GoogleMapsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 90%;
  margin: auto;
  @media ${device.larger} {
  }
  @media ${device.large} {
  }
  @media ${device.medium} {
    flex-direction: column;
  }
  @media ${device.small} {
    flex-direction: column;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-weight: lighter;
    max-width: 100%;

    /* line-height: 30px; */
    @media ${device.larger} {
      font-size: ${px2vw(30)};
    }
    @media ${device.large} {
      font-size: ${px2vw(30)};
    }
    @media ${device.medium} {
      font-size: ${px2vw(50)};
    }
    @media ${device.small} {
      font-size: ${px2vw(50)};
    }
  }
  img {
    @media ${device.larger} {
      height: 290px;
    }
    @media ${device.large} {
      height: 190px;
    }
    @media ${device.medium} {
      height: 170px;
    }
    @media ${device.small} {
      height: 140px;
    }
    max-width: 100%;
    margin: 50px auto;
  }
`;

const Map = styled.div`
  margin: 15% auto;
  height: 40vh;

  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  @media ${device.larger} {
    width: 40%;
  }
  @media ${device.large} {
    width: 40%;
  }
  @media ${device.medium} {
    width: 100%;
  }
  @media ${device.small} {
    width: 100%;
  }
`;
