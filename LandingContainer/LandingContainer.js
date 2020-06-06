import React from "react";
import "./styles.css";
import { HashLink } from "react-router-hash-link";
import { useDencrypt } from "use-dencrypt-effect";
import { useInterval } from "../../utils/useInterval";
import Logo from "../Logo/Logo";
export default function LandingContainer(props) {
  const options = {
    chars: "101010101010",
    interval: 100,
  };
  const values = ["we", "build", "scalable &", "smart solutions"];
  const one = useDencrypt(options);
  const two = useDencrypt(options);
  const three = useDencrypt(options);
  const four = useDencrypt(options);

  useInterval(() => one.dencrypt(values[0]), 500);
  useInterval(() => two.dencrypt(values[1]), 500);
  useInterval(() => three.dencrypt(values[2]), 500);
  useInterval(() => four.dencrypt(values[3]), 500);

  return (
    <div className="landing-container">
      <main className="main">
        <div className="main-div">
          <div className="main-div1">
            <Logo />

            <h1 className="main-div1-h1">
              {one.result} <br />
              {two.result} <br />
              {three.result} <br />
              {four.result}
            </h1>
            <HashLink to="/#about" className="container-chevron">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </HashLink>
          </div>
        </div>
      </main>
      {props.children}
    </div>
  );
}

// useEffect(() => {
//   const action = setInterval(() => {
//     one.dencrypt(values[0]);
//   }, 500);
//   const action2 = setInterval(() => {
//     two.dencrypt(values[1]);
//   }, 500);
//   const action3 = setInterval(() => {
//     three.dencrypt(values[2]);
//   }, 500);
//   const action4 = setInterval(() => {
//     four.dencrypt(values[3]);
//   }, 500);
//   return () => clearInterval(action, action2, action3, action4);
// }, []);
