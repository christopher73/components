import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import styled from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";
import { device } from "../utils/screenSizes";
import px2vw from "../utils/px2vw";
export default function Reviews() {
  return (
    <ReviewsContainer
      naturalSlideWidth={400}
      naturalSlideHeight={400}
      totalSlides={3}
      isPlaying={true}
    >
      <DivContainer>
        <Div index={0}>
          <h1>
            <span>{` " `}</span>
            Middway made choosing a Medicare plan very easy for me. I wasn't
            sure if I was picking the best Medicare plan and after my free
            consult, I was very confident I had made the right choice.
            <span>{` " `}</span>
            <p>- Customer</p>
          </h1>
        </Div>
        <Div index={1}>
          <h1>
            <span>{` " `}</span>I needed Medicare Prescription Drug Coverage.
            But I didn't know how the different options could affect my
            coverage. Middway's knowledge made all the difference. Thanks guys!
            <span>{` " `}</span>
            <p>- Customer</p>
          </h1>
        </Div>
        <Div index={2}>
          <h1>
            <span>{` " `}</span>Medicare is confusing! But not after I met with
            Middway. They had a call consult with me, and then met in person for
            free and thoroughly explained which plan would be in my best
            interest. I highly recommend this company
            <span>{` " `}</span>
            <p>- Customer</p>
          </h1>
        </Div>
      </DivContainer>
    </ReviewsContainer>
  );
}
const ReviewsContainer = styled(CarouselProvider)`
  max-height: 30vh;
`;
const DivContainer = styled(Slider)`
  z-index: -99;
  margin: 35px auto;
  @media ${device.larger} {
    width: 60%;
  }
  @media ${device.large} {
    width: 60%;
  }
  @media ${device.medium} {
    width: 85%;
  }
  @media ${device.small} {
    width: 85%;
  }
`;
const Div = styled(Slide)`
  h1 {
    letter-spacing: 3;
    text-align: center;
    color: rgb(109, 103, 103);
    font-style: italic;
    font-weight: lighter;
    span {
      font-weight: bold;
      color: rgba(219, 100, 38);
    }
    @media ${device.larger} {
      font-size: ${px2vw(20)};
    }
    @media ${device.large} {
      font-size: ${px2vw(25)};
    }
    @media ${device.medium} {
      font-size: ${px2vw(30)};
    }
    @media ${device.small} {
      font-size: ${px2vw(35)};
    }
  }
  p {
    margin: 10px;
    padding: 0;
    font-size: 0.8em;
    text-align: right;
    font-style: italic;
    font-weight: lighter;
    color: rgba(219, 100, 38);
  }
`;
