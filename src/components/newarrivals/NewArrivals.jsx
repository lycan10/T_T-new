import React, { useState, useEffect, useContext, useRef } from "react";
import Slider from "react-slick";
import BestsellerCards from "../../constant/bestSellerCards/BestSellerCards";
import Modal from "react-bootstrap/Modal";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Table from "react-bootstrap/Table";

import useFetch from "../../hooks/useFetch";
import { STRAPI_SERVER } from "../../functions/strapi";
import { useStrapi } from "../../hooks/useStrapi";
import AuthContext from "../../AuthContext";
import Loader from "../loader/Loader";

const NewArrivals = () => {
  const { fetchCart } = useContext(AuthContext);

  const { loading, data, error } = useStrapi("products");

  const [slidesToShow, setSlidesToShow] = useState(4);

  const slider = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4); // Large screen
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3); // Medium screen
      } else {
        setSlidesToShow(2); // Small screen
      }
    };

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) return <Loader fullscreen />;
  if (error) return <p>ERROR....</p>;

  if (!data || data === null) {
    return <p>No data available.</p>;
  }

  const goodData = data.data.map((item) => ({
    ...item.attributes,
    id: item.id,
  }));

  const reversedData = [...goodData].reverse();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: <IoIosArrowBack className="arrow-size" />,
    // nextArrow: <IoIosArrowForward className="arrow-size" />,
  };

  return (
    <div className="bestsellers">
      <div className="bestseller-container">
        <div className="bestseller-top">
          <h1>NEW ARRIVALS </h1>
          <div className="bestseller-filter-main">
            <div className="bestseller-button">
              <button onClick={() => slider.current.slickNext()}>
                <IoIosArrowBack className="arrow-size" />
              </button>
              <button onClick={() => slider.current.slickPrev()}>
                <IoIosArrowForward className="arrow-size" />
              </button>
            </div>
          </div>
        </div>
        <div className="bestseller-bottom">
          <Slider {...settings} ref={slider}>
            {reversedData.map((item, i) => {
              return <BestsellerCards key={item.id} {...item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
