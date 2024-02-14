import React, { useRef, useState } from "react";
import "./topcollections.css";
import Slider from "react-slick";
// import Cards from '../../constant/cards/Cards';
import { topcollections } from "../../constant/data/data";
import Modal from "react-bootstrap/Modal";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const TopCollections = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [value, setValue] = useState(1);

  const slider = useRef();

  const handleClose = () => {
    setActiveModal(null);
  };

  // const handleShowModal = (modalId) => {
  //     setActiveModal(modalId);
  // };

  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleDecrease = () => {
    if (value > 1) {
      setValue(value - 1);
    } else {
      setValue(1);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {};

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: <IoIosArrowBack className="arrow-size" />,
    // nextArrow: <IoIosArrowForward className="arrow-size" />,
  };

  return (
    <div className="bestsellers">
      <div className="bestseller-container">
        <div className="bestseller-top">
          <h1>TOP COLLECTIONS</h1>
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
        <div className="top-collection-bottom">
          <Slider {...settings} ref={slider}>
            {topcollections.map((item) => {
              return (
                <div className="topcollection-collection" key={item.id}>
                  <div className="topcollection-image">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="topcollection-text">
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {topcollections.map((item) => (
        <Modal
          key={item.id}
          show={activeModal === item.id}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-container">
              <div className="modal-img">
                <div className="modal-wishlist">
                  <AiOutlineHeart />
                </div>
                <img src={item.img} alt="" />
              </div>
              <div className="modal-content">
                <h1>{item.title}</h1>
                <div className="modal-content2">
                  <p> ✓ In Stock</p>
                  <p>
                    <span>SKU:</span> Mk-98455
                  </p>
                </div>
                <p style={{ color: "gold" }}>{item.rating}</p>
                <div className="model-data-amount">
                  <p>
                    {" "}
                    {item.discountedPrice} <span>{item.originalPrice}</span>
                  </p>
                </div>
                <div className="modal-cart-container">
                  <p>QTY</p>
                  <div className="cart-counter">
                    <input
                      type="text"
                      value={value.toString()}
                      onChange={handleChange}
                    />
                    <div className="cart-adjuster">
                      <p onClick={handleIncrease}>+</p>
                      <p onClick={handleDecrease}>-</p>
                    </div>
                  </div>

                  <div className="modal-cart" onClick={handleSubmit}>
                    <AiOutlineShoppingCart className="model-symbol" />
                    <p>ADD TO CART</p>
                  </div>
                </div>
                <div className="modal-description">
                  <p>
                    The perfect recipe for a family game night! Appeals to a
                    wide range of people. Created By National Parks. Parents who
                    had traveled to every single National Park worked together
                    with their board game designer son and created a game to
                    inspire others and help families share their love of the
                    National Parks.
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ))}
    </div>
  );
};

export default TopCollections;
