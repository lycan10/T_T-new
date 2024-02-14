import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./payment.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { cartData } from "../../constant/data/data";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import gear from "../../assets/gear-fill.svg";
import { requestPaymentPageToken } from "../../functions/authorizeNet";
import AuthContext from "../../AuthContext";
import { shipping, totalCart } from "../../functions/totalCart";
import strapi from "../../functions/strapi";
import { useSearchParams } from "react-router-dom";
import useCartTotal from "../../hooks/useCartTotal";

// const authData = {
//   apiLoginID: "2f4xyFwC34",
//   clientKey: "3R53TgYR4rg76U6X",
// };

// type BasicCardInfo = {
//   cardNumber: string;
//   cardCode: string;
//   month: string;
//   year: string;
// };

const Payment = () => {
  const {
    authState: { cart, user, checkout },
  } = useContext(AuthContext);

  const { loading, error, shipping, subTotal, subTotals, total } =
    useCartTotal();

  const [selectedOption, setSelectedOption] = useState("");
  const [shippingCost, setShippingCost] = useState(0.0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    // Update shipping cost based on the selected option
    switch (event.target.value) {
      case "Pickup":
        setShippingCost(0.0);
        break;
      case "Regular":
        setShippingCost(15.0); // Set the default shipping cost or update as needed
        break;
      case "Express":
        setShippingCost(25.0); // Update with the desired cost for express shipping
        break;
      default:
        setShippingCost(15.0); // Default shipping cost
        break;
    }
  };
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  // const [country, setCountry] = useState('');
  // const [region, setRegion] = useState('');
  // const [toggle, setToggle] = useState(false)
  // const [quantity, setQuantity] = useState(cartData.map(() => 1));
  // const quantity = cartData.map(() => 1);

  let [searchParams] = useSearchParams();
  // const { dispatchData, loading, error } = useAcceptJs({
  //   authData,
  //   environment: "SANDBOX",
  // });
  // const [cardData, setCardData] = useState({
  //   cardNumber: "",
  //   month: "",
  //   year: "",
  //   cardCode: "",
  // });

  const response = searchParams.get("message");

  // const [country, setCountry] = useState('');
  // const [region, setRegion] = useState('');
  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState(null);
  // const [quantity, setQuantity] = useState(cartData.map(() => 1));
  // const quantity = cartData.map(() => 1);

  useEffect(() => {
    if (response) {
      alert("You cancelled the payment.");
      window.location.replace("/payment");
    }
  }, []);

  // Call the getRates function when the component mounts
  // useEffect(() => {
  //   getRates();
  // }, []);

  useEffect(() => {
    if (shipping && !loading && !error) {
      const getToken = async () => {
        const res = await requestPaymentPageToken({ total, user, checkout });
        // console.log(res);
        setToken(res.token);
      };
      getToken();
    }
  }, [total, cart, checkout, user, shipping]);

  // const { subTotal, total, orderTotal: amount } = totalCart(cart);

  const cartSubTotal = () => {
    return cartData
      .reduce((total, item, index) => total + parseFloat(subTotal(index)), 0)
      .toFixed(2);
  };

  const cartTotal = () => {
    return (parseFloat(cartSubTotal()) + shippingCost).toFixed(2);
  };

  // const getRates = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:3001/api/rates", {});

  //     if (response.data.success) {
  //       const ratesData = response.data.rates;
  //       console.log("Rates data from backend:", ratesData);
  //       // Do something with the ratesData, e.g., update state or display on the UI
  //     } else {
  //       console.error(
  //         "Error fetching rates from backend:",
  //         response.data.error
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error fetching rates from backend:", error.message);
  //   }
  // };

  if (!cart || !user || !checkout) {
    return (window.location.pathname = "/");
  }

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navigateToCheckout = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/checkout";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };

  return (
    <div className="checkout">
      <Navbar />
      <div className="checkout-container">
        <div className="checkout-title">
          <h1>CHECKOUT</h1>
        </div>
        <div className="checkout-main-container">
          <div className="checkout-left">
            <div className="checkout-shipping-address">
              <div className="checkout-shipping-address-title">
                <h1>PAYMENT METHOD</h1>
              </div>
              <div>{/* <p>{error ? error.message : ""}</p> */}</div>
              <div className="checkout-payment-options">
                <input
                  type="radio"
                  name="paymentOption"
                  id="pickup"
                  value="Pickup"
                  checked={selectedOption === "Pickup"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="pickup">Pickup</label>

                <input
                  type="radio"
                  name="paymentOption"
                  id="regular"
                  value="Regular"
                  checked={selectedOption === "Regular"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="normal">Regular</label>

                <input
                  type="radio"
                  name="paymentOption"
                  id="express"
                  value="Express"
                  checked={selectedOption === "Express"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="express">Express</label>

                <p style={{ marginTop: "0.5rem" }}>
                  Selected Option: {selectedOption}
                </p>
              </div>
              <form
                action="https://accept.authorize.net/payment/payment"
                method="post"
              >
                <input type="hidden" value={token} name="token" />
                <button disabled={token ? false : true} type="submit">
                  {token ? "Continue to Make Payment" : "Loading..."}
                </button>
              </form>
            </div>
          </div>
          <div className="checkout-right check">
            <div className="cart-full-right-title">
              <h1>ORDER SUMMARY</h1>
            </div>
            <div className="cart-full-right-detail">
              <div className="cart-full-right-detail-container-top">
                <div className="cart-full-subtotal">
                  <p>Subtotal</p>
                  <p>${subTotal}</p>
                </div>
                <div className="cart-full-subtotal cart-order">
                  <p>Shipping</p>
                  <p>${shipping}</p>
                </div>
                <div className="cart-full-total">
                  <p>Order Total</p>
                  <p style={{ fontWeight: "700" }}>${total}</p>
                </div>
              </div>
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
              <div className="cart-full-subtotal cart-order">
                <p>Shipping (Flat Rate - Fixed)</p>
                <p>${shipping}</p>
              </div>
              <div className="cart-full-total">
                <p>Order Total</p>
                <p style={{ fontWeight: "700" }}>
                  {loading ? `$${total}` : "Loading..."}
                </p>
              </div>
            </div>
            <div
              className="cart-full-right-detail-header"
              onClick={handleToggle}
            >
              <p>
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
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="cart-full-right-detail-container-im"
                  >
                    {/* <p>{JSON.stringify(item)}</p> */}
                    <div className="cart-full-right-detail-container-imago">
                      <div className="cart-full-right-detail-content-image">
                        <img
                          src={strapi.getImageURL(item.product.img)}
                          alt="pic"
                        />
                      </div>
                      <div className="cart-full-right-detail-content-title">
                        <p style={{ fontWeight: "600" }}>
                          {item.product.description}
                        </p>
                        <p>QTY: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="cart-full-right-detail-content-funds">
                      <p>{item.discountedPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="payment-shipping-address">
              <div className="payment-shipping-address-title">
                <h1>SHIP TO:</h1>
                <div
                  className="payment-shipping-address-setting"
                  onClick={navigateToCheckout}
                >
                  <img src={gear} alt="" />
                </div>
              </div>
              <div className="payment-shipping-address-contact">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
