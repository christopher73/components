import React from "react";
import styled from "styled-components";
import { Button2 } from "../Button2";
export default function FormSubmitted({ setformStatus }) {
  return (
    <>
      <div style={{ width: "200px", margin: "auto" }}>
        <SVG
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="check-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            className=""
          ></path>
        </SVG>
      </div>
      <H1 style={{ paddingBottom: "30px", margin: "auto" }}>SENT !</H1>

      <SendButton onClick={() => setformStatus(0)}>try Again</SendButton>
    </>
  );
}
const SendButton = styled.button`
  ${Button2};
  font-size: 1.3em !important;
  width: 160px !important;
`;
const SVG = styled.svg`
  color: #92e0ba;
`;
const H1 = styled.h1`
  color: #92e0ba;
`;
