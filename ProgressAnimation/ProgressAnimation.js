import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Spring, config } from "react-spring/renderprops";
import "react-circular-progressbar/dist/styles.css";
import "./styles.css";
export default function ProgressAnimation({ percentageNum }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px"
      }}
    >
      <Spring
        from={{ percentage: 0 }}
        to={{ percentage: percentageNum }}
        config={config.molasses}
      >
        {({ percentage }) => {
          const roundedPercentage = Math.round(percentage);
          return (
            <CircularProgressbar
              value={roundedPercentage}
              text={`${roundedPercentage}%`}
              styles={{
                path: {
                  transform: "rotate(180deg)",
                  transformOrigin: "center center",
                  strokeLinecap: "butt",
                  stroke: percentage >= 30 ? "#b7a3e6" : "#b7a3e6"
                },
                trail: {
                  strokeWidth: 0
                },
                text: {
                  fontSize: 22,
                  fontWeight: 800,
                  animation: "fadein 2s",
                  fill: percentage >= 70 ? "#ff7e9e" : "#ff7e9e"
                }
              }}
            />
          );
        }}
      </Spring>
    </div>
  );
}
