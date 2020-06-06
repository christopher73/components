import React from "react";
import styled from "styled-components";
import { device } from "../utils/screenSizes";

/**
 * @TODO
 * pass as a prop for icon
 * {height},
 * {width},
 */

export default function PhoneNumber({
  phoneNumber,
  placeHolder,
  primaryColor,
  secondaryColor,
}) {
  return (
    <PhoneNumberContainer href={`tel:${phoneNumber}`}>
      <Icon
        s={secondaryColor}
        p={primaryColor}
        height="40"
        width="40"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="phone-alt"
        role="img"
        xmlns="http://www.w3.org/2000/Svg"
        viewBox="0 0 512 512"
      >
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
      </Icon>
      <Number s={secondaryColor} p={primaryColor}>
        ‪{placeHolder || "(000) 000-0000"}
      </Number>
    </PhoneNumberContainer>
  );
}

const PhoneNumberContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const Number = styled.p`
  color: ${({ p }) => p || "#000"};

  @media ${device.small} {
    display: none;
  }
  @media ${device.medium} {
    display: none;
  }
  @media ${device.large} {
    display: block;
  }
  @media ${device.larger} {
    display: block;
  }
`;
const Icon = styled.svg`
  margin: 0 10px;
  path {
    fill: ${({ s }) => s || "#000"};
  }
`;
