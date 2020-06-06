// import React, { useState, useEffect } from "react";
// import { useSpring, animated } from "react-spring";
// import styled from "styled-components";
// import shortid from "shortid";
// /**
//  * @TODO
//  * margin-right: 1rem;
//  * position: static;
//  * top: 30px;
//  * right: 30px;
//  * position: fixed
//  */
// export default function BurgerButton({
//   primaryColor,
//   secondaryColor,
//   setIsFullScreen,
//   isRotated,
// }) {
//   // const [isRotated, rotate] = useState(isFullScreen);
//   const aniBar1 = useSpring({
//     transform: `rotate(${isRotated ? -45 : 0}deg) translate(${
//       isRotated ? -8 : 0
//     }px, ${isRotated ? 8 : 0}px)`,
//   });
//   const aniBar2 = useSpring({ opacity: isRotated ? 0 : 1 });
//   const aniBar3 = useSpring({
//     transform: `rotate(${isRotated ? 45 : 0}deg) translate(${
//       isRotated ? -9 : 0
//     }px, ${isRotated ? -9 : 0}px )`,
//   });
//   const Bar = styled(animated.div)`
//     border: 0.5px solid ${secondaryColor || "#000"};
//     width: 35px;
//     height: 5px;
//     background-color: ${primaryColor || "#fff"};
//     transition: 0.1s;
//     box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.3);
//   `;
//   const BurgerButtonContainer = styled.div`
//     z-index: 99;
//     margin: 0 50px;
//     cursor: pointer;
//   `;

//   return (
//     <BurgerButtonContainer onClick={() => setIsFullScreen((state) => !state)}>
//       <Bar style={aniBar1} />
//       <Bar style={{ ...aniBar2, margin: "6px 0" }} />
//       <Bar style={aniBar3} />
//     </BurgerButtonContainer>
//   );
// }
