import React, { useState, useEffect, useRef } from "react";
import video from "../assets/video.mp4";
import styled from "styled-components";
import { device } from "../utils/screenSizes";

export default function VideoBg() {
  const [isLoading, setLoading] = useState(true);
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.addEventListener("loadeddata", () => {
      setLoading((state) => !state);
    });
    return videoRef.current.removeEventListener("loadeddata", () => {});
  });
  return (
    <Video isloading={isLoading ? 0 : 1} ref={videoRef} autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </Video>
  );
}
const Video = styled.video`
  z-index: -99;
  position: absolute;
  object-fit: fill;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  opacity: ${({ isloading }) => isloading};
  transition: opacity, 0.5s ease-in-out;
  @media ${device.larger} {
    height: 85vh;
  }
  @media ${device.large} {
    height: 75vh;
  }
  @media ${device.medium} {
    height: 60vh;
  }
  @media ${device.small} {
    height: 60vh;
  }
`;
