import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
export default function Footer({ hideLogo, hideText }) {
  return (
    <div className="footer-container">
      {!hideLogo ? (
        <h1 className="footer-logo">
          RocketDevs
          <span style={{ fontSize: "10px", verticalAlign: "text-top" }}>
            &#9415;
          </span>
        </h1>
      ) : null}
      {!hideText ? (
        <>
          <div className="footer-div-link">
            <Link to="/privacy-policy">Privacy Policy</Link>
            {" | "}
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
          <div className="footer-div-text">
            <p className="footer-text">
              © 2020 Copyright{" "}
              <a href="https://rocketdevs.com/">rocketdevs.com</a>
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
