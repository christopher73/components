import React from "react";
import styled from "styled-components";

export default function MainService() {
  const ImageDiv = styled.div`
    background-image: url(${"./assets/icons/pic4.png"});
  `;
  return (
    <div>
      <div></div>
      <h1>Medicare Supplement</h1>
      <p>
        A Medicare Supplement Insurance policy, sold by private companies, can
        help paysome of the health care costs that Original Medicare doesn't
        cover, like copayments, coinsurance, and deductibles.
      </p>
    </div>
  );
}
