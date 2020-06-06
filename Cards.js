import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function Cards(props) {
  return (
    <Container>
      {props.cardData.map((elem, i) => (
        <Card
          isButton={true}
          isDesc={true}
          data={elem}
          key={i}
          linkTo={elem.linkTo}
        />
      ))}
    </Container>
  );
}
const Container = styled.div`
  /* padding: 10% auto; */
  width: 100%;
  background-color: rgb(235, 244, 245);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
