import React, { useState, useEffect, useContext, useRef } from "react";

import Slider from "react-slick";
import BestsellerCards from "../../constant/bestSellerCards/BestSellerCards";
// import { bestSellerData } from "../../constant/data/data";
import Modal from "react-bootstrap/Modal";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Table from "react-bootstrap/Table";

import { toast } from "react-toastify";

// import useFetch from "../../hooks/useFetch";
import { useStrapi } from "../../hooks/useStrapi";
import strapi from "../../functions/strapi";
import AuthContext from "../../AuthContext";
import Loader from "../loader/Loader";

const TopDeals = () => {
  // const { loading, data, error } = useFetch(
  //   `${STRAPI_SERVER}/api/bestsellers?populate=*`
  // );

  const { fetchCart } = useContext(AuthContext);

  const { loading, data, error } = useStrapi("topdeals", {
    "populate[product][populate][0]": "img",
  });

  const [activeModal, setActiveModal] = useState(null);
  const [value, setValue] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);

  // const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [slidesToShow, setSlidesToShow] = useState(4);

  const slider = useRef();

  // const [goodData, setGoodData] = useState([]);
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

  // useEffect(() => {
  //   if (data?.data) {
  //     Promise.all(
  //       data.data.map(async (item) => {
  //         const id = item.attributes.product.data.id;
  //         return (await strapi.get("products", { id })).data;
  //       })
  //     ).then((data) => setGoodData(data));
  //   }
  // }, [data]);

  const handleClose = () => {
    setActiveModal(null);
  };

  const handleShowModal = (modalId) => {
    setActiveModal(modalId);
  };

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
  const handleSubmit = (id) => {
    setAddingToCart(true);
    strapi
      .post("carts", {
        quantity: value,
        product: id,
      })
      .then((res) => {
        console.log(res);
        handleClose();
        toast.success("Product successfully added to your cart!", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("An error occured, please try again later.", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => {
        setAddingToCart(false);
        fetchCart();
      });
  };

  if (loading) return <Loader fullscreen />;
  if (error) return <p>ERROR....</p>;

  if (!data || data === null) {
    return <p>No data available.</p>;
  }

  const goodData = data.data.map((item) => ({
    ...item.attributes.product.data.attributes,
    id: item.attributes.product.data.id,
  }));

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

  //   const filteredBestSellerData = goodData.filter((item) => {
  //     if (item.brand.toLowerCase() === selectedCategory.toLowerCase()) {
  //         return true; // Show all items when "ALL" is selected
  //     }
  //     return selectedCategory === "ALL";
  // });

  return (
    <div className="bestsellers">
      <div className="bestseller-container">
        <div className="bestseller-top">
          <h1>TOP DEALS</h1>
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
            {goodData.map((item, i) => {
              return <BestsellerCards key={item.id} {...item} />;
            })}
          </Slider>
        </div>
      </div>
      {goodData.map((product, i) => {
        const imageURL = strapi.getImageURL(product.img);

        return (
          <div key={i}>
            <Modal
              show={activeModal === product.id}
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
                    <img style={{ objectFit: "cover" }} src={imageURL} alt="" />
                  </div>
                  <div className="modal-content">
                    <h1>{product.brand}</h1>
                    <div className="modal-content2">
                      <p> ✓ In Stock</p>
                      <p>
                        <span>SKU:</span>
                        {product.sku}
                      </p>
                    </div>
                    <div className="modal-description">
                      <p>
                        <span style={{ color: "black" }}>Description: </span>
                        {product.description}
                      </p>
                    </div>
                    <p style={{ color: "gold" }}>{product.rating}</p>
                    <div className="model-data-amount">
                      <p>${product.price}</p>
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

                      <div
                        className="modal-cart"
                        onClick={() => handleSubmit(product.id)}
                      >
                        <AiOutlineShoppingCart className="model-symbol" />
                        <p>{addingToCart ? "Adding..." : "ADD TO CART"}</p>
                        {/* <ToastContainer /> */}
                      </div>
                    </div>

                    <div className="modal-description-details">
                      <div className="modal-description">
                        <p>
                          <span style={{ color: "black" }}>
                            Country of origin:{" "}
                          </span>
                          {product.origin}
                        </p>
                      </div>
                    </div>
                    {/* 
                    <div className="modal-description-table">
                      <Table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>MFG#</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.type.details.map((detail, index) => (
                            <tr key={index}>
                              <td>
                                {" "}
                                <span className="table-text">{detail.id}</span>
                              </td>
                              <td>
                                <span className="table-text">{detail.MFG}</span>
                              </td>
                              <td>
                                <span className="table-text">
                                  {detail.description}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div> */}
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default TopDeals;
