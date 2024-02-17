import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import axios from "axios";

import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { toast } from "react-toastify";

import "./reviews.css";

import useFetch from "../../hooks/useFetch";
import strapi, { STRAPI_SERVER } from "../../functions/strapi";


import { useLocation } from "react-router-dom";
import Loader from "../loader/Loader";

const Reviews = () => {
  const location = useLocation();

  // useEffect(() => {
  //   ReactGA.pageview(location.pathname + location.search);
  // }, [location]);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });
  const [loadingPostReview, setLoadingPostReview] = useState(false);

  const slider = useRef();

  const { loading, data, error } = useFetch(
    `${STRAPI_SERVER}/api/reviews?populate=*`
  );

  if (loading) return <Loader fullscreen />;
  if (error) return <p>ERROR....</p>;

  if (!data || data === null) {
    return <p>No data available.</p>;
  }

  const goodData = data.data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // console.log(formData)
  };

  const handleEmailClick = (e) => {
    setLoadingPostReview(true);

    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Clicked on Submit Review",
    //   label: "Reviews Page",
    // });

    // console.log("Submited")

    e.preventDefault();

    strapi
      .postReview(formData)
      .then(() => {
        toast.success("Your review has been submitted.", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occured, please try again.", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => setLoadingPostReview(false));

    handleClose();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: <IoIosArrowBack className="arrow-size" />,
    // nextArrow: <IoIosArrowForward className="arrow-size" />,
  };
  return (
    <div className="reviews">
      <div className="reviews-container">
        <div className="reviews-title">
          <h1>REVIEWS</h1>
          <div className="bestseller-button">
            <button onClick={() => slider.current.slickNext()}>
              <IoIosArrowBack className="arrow-size" />
            </button>
            <button onClick={() => slider.current.slickPrev()}>
              <IoIosArrowForward className="arrow-size" />
            </button>
          </div>
        </div>
        <div className="reviews-slides">
          <Slider {...settings} ref={slider}>
            {goodData.map((item) => {
              return (
                <div key={item.id} className="review-details-container">
                  <div className="review-details">
                    <p>{item.attributes.content}</p>
                  </div>
                  <div className="reviews-user-container">
                    <div className="reviews-user-author">
                      <p>- {item.attributes.name}</p>
                    </div>
                    <div className="reviews-user-button">
                      <p onClick={handleShow}>Add Reviews</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Reviews</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="contact-form review-form">
                <div className="form-name review-name">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="form-name review-name">
                  <textarea
                    placeholder="Message"
                    type="text"
                    name="content"
                    onChange={handleChange}
                    value={formData.content}
                  />
                </div>
                <div className="footer-submit review-button">
                  <button
                    onClick={handleEmailClick}
                    disabled={loadingPostReview}
                  >
                    {loadingPostReview ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
