import React, { useContext, useState } from "react";
import "./checkout.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import AuthContext from "../../AuthContext";
import strapi from "../../functions/strapi";

import axios from "axios";
import countryList from "country-list";

const Checkout = () => {
  const {
    updateCheckout,
    authState: {
      cart: cartData,
      user: { firstName, lastName, email },
    },
  } = useContext(AuthContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    company: "",
    streetAddress: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    email,
  });

  const [toggle, setToggle] = useState(false);

  const unavailableProducts = cartData.filter(
    (item) => (!item.product.description)
  );

  // console.log("Unavailable: ", unavailableProducts);

  // const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    const newData = {};
    newData[target.name] = target.value;

    setData({ ...data, ...newData });
  };

  const handleCountryChange = (value) => {
    setData({ ...data, country: value });
  };

  const handleRegionChange = (value) => {
    setData({ ...data, state: value });
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const submitShippingInfo = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/rates", {
        data: data,
      });

      if (!response.data.success) {
        throw new Error(`Server error: ${response.data.message}`);
      }

      // console.log("Shipping info submitted successfully");
      // Handle success, e.g., navigate to the next step in the checkout process
    } catch (error) {
      console.error("Error submitting shipping info:", error.message);
      // Handle unexpected errors
    }
  };

  const navigateToPayment = () => {
    updateCheckout(data);

    // cartItems: cartData.map((item) => ({
    //   productId: item.product.id,
    //   description: item.product.description,
    //   quantity: item.quantity,
    //   price: item.quantity * item.product.price,
    // })),

    const newUrl = "/payment";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
    // setLoading(true);
    // strapi
    //   .addToCheckout({
    //     ...data,
    //     cartItems: cartData.map((item) => ({
    //       productId: item.product.id,
    //       description: item.product.description,
    //       quantity: item.quantity,
    //       price: item.quantity * item.product.price,
    //     })),
    //     status: "UNPAID",
    //   })
    //   .then(() => {
    //   })
    //   .finally(() => setLoading(false));

    submitShippingInfo();
  };

  if (unavailableProducts.length) {
    alert("Please remove unavailable products from cart to continue.");
    window.location.href = "/cart";
  }

  return (
    <div className="checkout">
      <Navbar />
      <div className="checkout-container">
        <div className="checkout-title">
          <h1>CHECKOUT</h1>
          {/* <button>Login</button> */}
        </div>
        <div className="checkout-main-container">
          <div className="checkout-left">
            <div className="checkout-shipping-address">
              <div className="checkout-shipping-address-title">
                <h1>SHIPPING ADDRESS</h1>
              </div>
              <div className="checkout-shipping-address-details">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="checkout-shipping-address-details">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="checkout-shipping-address-details">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="checkout-shipping-address-details">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="checkout-shipping-address-details">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={data.company}
                  onChange={handleChange}
                />
              </div>
              <div className="checkout-shipping-address-details">
                <label>Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={data.streetAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="checkout-shipping-address-details">
                <label>Country</label>
                <div className="checkout-shipping-input">
                  <CountryDropdown
                    className="checkout-shipping-input-dropdown"
                    value={data.country}
                    valueType="short"
                    onChange={handleCountryChange}
                  />
                </div>
              </div>
              <div className="checkout-shipping-address-details">
                <label>State/Province</label>
                <div className="checkout-shipping-input">
                  <RegionDropdown
                    className="checkout-shipping-input-dropdown"
                    country={data.country}
                    countryValueType="short"
                    value={data.state}
                    onChange={handleRegionChange}
                  />
                </div>
              </div>
              <div className="checkout-shipping-address-details">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                />
              </div>
              <div className="checkout-shipping-address-details">
                <label>Zip/Postal Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={data.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div
              className="checkout-shipping-address-details-button"
              onClick={navigateToPayment}
            >
              <h1>Next</h1>
            </div>
          </div>
          <div className="checkout-right">
            <div className="cart-full-right-title">
              <h1>ORDER SUMMARY</h1>
            </div>
            <div className="cart-full-right-detail">
              <div
                className="cart-full-right-detail-header"
                onClick={handleToggle}
              >
                <p>
                  {" "}
                  <span>{cartData.length}</span> Items in Cart
                </p>
                {toggle ? (
                  <RiArrowUpSLine className="cart-right-icon" />
                ) : (
                  <RiArrowDownSLine className="cart-right-icon" />
                )}
              </div>
              {toggle && (
                <div className="cart-full-right-detail-container">
                  {cartData.map((item) => {
                    const isAvailable = item.product.description ? true : false;

                    return (
                      <div
                        key={item.id}
                        className="cart-full-right-detail-container-im"
                      >
                        <div className="cart-full-right-detail-container-imago">
                          <div className="cart-full-right-detail-content-image">
                            <img
                              src={
                                isAvailable
                                  ? strapi.getImageURL(item.product.img)
                                  : "/unavailable.png"
                              }
                              alt="pic"
                            />
                          </div>
                          <div className="cart-full-right-detail-content-title">
                            <p style={{ fontWeight: "600" }}>
                              {isAvailable
                                ? item.product.description
                                : "PRODUCT UNAVAILABLE"}
                            </p>
                            <p>QTY: {isAvailable ? item.quantity : "N/A"}</p>
                          </div>
                        </div>
                        <div className="cart-full-right-detail-content-funds">
                          <p>
                            {isAvailable ? `$${item.product.price}` : "N/A"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
