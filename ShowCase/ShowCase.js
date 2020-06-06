import React from "react";
import "./style.css";
import img0 from "../../assets/img/portfolio/middwayllc.png";
import img1 from "../../assets/img/portfolio/starkclass.svg";
import img2 from "../../assets/img/portfolio/noni.png";
import img3 from "../../assets/img/portfolio/fiat.png";
import img4 from "../../assets/img/portfolio/garagenet.png";
import imgLogo0 from "../../assets/img/portfolio/middwayllc-logo.png";
import imgLogo1 from "../../assets/img/portfolio/starkclass-logo.svg";
import imgLogo2 from "../../assets/img/portfolio/noni-logo.png";
import imgLogo3 from "../../assets/img/portfolio/fiat-logo.png";
import imgLogo4 from "../../assets/img/portfolio/sbs.png";

export default function ShowCase() {
  const images = [
    {
      projectName: "middway",
      color: "30, 21, 20",
      logoSrc: imgLogo0,
      imageSrc: img0,
      link: "https://middwayllc.com/",
    },
    {
      projectName: "starkclass",
      color: "217, 210, 193",
      logoSrc: imgLogo1,
      imageSrc: img1,
      link: "https://starkclass.com",
    },

    {
      projectName: "fiatcafe",
      color: "227, 153, 138",
      logoSrc: imgLogo3,
      imageSrc: img3,
      link: "https://fiatcafenyc.com/",
    },
    {
      projectName: "nccg",
      color: "218, 233, 237",
      logoSrc: imgLogo4,
      imageSrc: img4,
      link: "https://garagenet.com/",
    },
    {
      projectName: "nonis",
      color: "72, 83, 140",
      logoSrc: imgLogo2,
      imageSrc: img2,
      link: "",
    },
  ];
  return (
    <div className="show-case-container">
      {images.map((image, i) => (
        <div
          key={i}
          className="show-case-child"
          onClick={() => window.open(image.link, "_blank")}
          style={{ backgroundImage: `url(${image.imageSrc})` }}
        >
          <div
            style={{ backgroundColor: `rgba(${image.color}, 0.7) ` }}
            className="show-case-inner-child"
          >
            <img className="logo" src={image.logoSrc} alt={image.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
