import "./AboutImgs.css";
import React from "react";
import Slider from "react-slick";
import p1 from "../../assets/ad51.jpg";
import p2 from "../../assets/ad52.jpg";
import p3 from "../../assets/ad53.jpg";

const AboutImgs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="about-imgs-container">
      <Slider {...settings}>
        <div className="slider-container">
          <div className="slider-image">
            <div className="background-opacity"></div>
            <img src={p1} alt="slider-pic" />
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-image">
            <div className="background-opacity"></div>
            <img src={p2} alt="slider-pic" />
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-image">
            <div className="background-opacity"></div>
            <img src={p3} alt="slider-pic" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AboutImgs;
