import React from "react";
import styled, { keyframes } from "styled-components";
export default function FormBackground(props) {
  return (
    <FormBackgroundContainer>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
58-18 88-18s
58 18 88 18 
58-18 88-18 
58 18 88 18
v44h-352z"
          />
        </defs>
        <g>
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="rgb(216,234,234)" />
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="rgb(165,208,207)" />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="6"
            fill="rgb(235, 244, 245)"
          />
        </g>
      </Svg>
      <FormBackgroundDiv>{props.children}</FormBackgroundDiv>
    </FormBackgroundContainer>
  );
}
const FormBackgroundContainer = styled.div`
  /* margin: 10% 0; */
`;
const FormBackgroundDiv = styled.div`
  font-family: "Lato", sans-serif;
  text-align: center;
  background-color: rgb(235, 244, 245);
  text-align: center;
  min-height: 75vh;
  margin: -0.1em 0 0 0;
  padding: 1em;
  font-weight: 300;
`;
const wave = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
`;
const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 10em;
  max-height: 100vh;
  margin: 0;
  g > use {
    animation: ${wave} 12s linear infinite;
  }
  g use:nth-child(1) {
    animation-delay: -2s;
  }
  g use:nth-child(2) {
    animation-delay: -2s;
    animation-duration: 5s;
  }
  g use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 3s;
  }
`;
