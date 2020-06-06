import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <FooterContainer>
      <FooterDiv>
        <Ul>
          <Li style={{ display: "flex", flexDirection: "column" }}>
            <span>© Middway LLC</span>
            <span> New York </span>
            <span> New Jersey - Florida</span>
          </Li>
          <Li style={{ display: "flex", flexDirection: "column" }}>
            <span> ‪(718) 551 - 4894</span>
            <span> Hablamos Español | 我们说普通话</span>
            <span>Privacy Policy</span>
          </Li>
        </Ul>
      </FooterDiv>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  background: rgba(41, 41, 46, 1);
`;
const FooterDiv = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Ul = styled.ul`
  width: 100%;
  padding: 0px;
  margin: 25px 0px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 15px;
  font-weight: lighter;
  text-align: center;
  color: #fff;
`;
const Li = styled.li`
  list-style: none;
  /* a {
    text-decoration: none;
    color: #fff;
  } */
`;
