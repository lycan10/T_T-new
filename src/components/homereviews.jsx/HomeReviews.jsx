import React from "react";

import Slider from "react-slick";

import useFetch from "../../hooks/useFetch";
import { STRAPI_SERVER } from "../../functions/strapi";
import "./homereviews.css";
import Loader from "../loader/Loader";

const HomeReviews = () => {
  const { loading, data, error } = useFetch(
    `${STRAPI_SERVER}/api/reviews?populate=*`
  );

  if (loading) return <Loader fullscreen />;
  if (error) return <p>ERROR....</p>;

  if (!data || data === null) {
    return <p>No data available.</p>;
  }

  const goodData = data.data;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="homereviews">
      <div className="homereview-title">
        <h1>Customer Reviews</h1>
      </div>
      <div className="driver-review-container">
        <Slider {...settings}>
          {goodData.map((item, i) => {
            return (
              <div key={i} className="driver-review-space">
                <div className="driver-reviews">
                  <div className="driver-review-text">
                    <p>"{item.attributes.content}"</p>
                  </div>
                  <div className="driver-review-name">
                    <p> - {item.attributes.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeReviews;
