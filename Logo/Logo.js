import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/" id="main-logo">
      <h1 id="logo-shadow">
        RocketDevs
        <span style={{ fontSize: "10px", verticalAlign: "text-top" }}>
          &#9415;
        </span>
      </h1>
    </Link>
  );
}
