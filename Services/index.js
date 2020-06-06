import React from "react";
import { data } from "./servicesData";
import serviceDivChildren from "./servicceDivChildren";

export default function() {
  return (
    <div
      style={{ paddingTop: "5.7rem" }}
      id="services"
      className="services-main-container"
    >
      <h1 className="whoweare-h1">
        What we do{" "}
        <span style={{ fontWeight: "bold", color: "#ef0d33" }}>?</span>
      </h1>
      <div className="services-main-div">
        {data.map((elem, i) => serviceDivChildren(elem, i, false, true))}
      </div>
    </div>
  );
}
