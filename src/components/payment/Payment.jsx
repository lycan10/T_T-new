import React, { useContext, useEffect, useState } from "react";

import "./payment.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import gear from "../../assets/gear-fill.svg";
import { requestPaymentPageToken } from "../../functions/authorizeNet";
import AuthContext from "../../AuthContext";
import strapi from "../../functions/strapi";
import { useSearchParams } from "react-router-dom";
import useCartTotal from "../../hooks/useCartTotal";

const Payment = () => {
  const {
    updateCheckout,
    authState: { cart, user, checkout },
  } = useContext(AuthContext);

  const {
    loading,
    error,
    shipping: shippingData,
    subTotal,
  } = useCartTotal(cart, checkout);

  const location = useLocation();
  let [searchParams] = useSearchParams();
  const response = searchParams.get("message");

  const [selectedOption, setSelectedOption] = useState("Pickup");
  const [shipping, setShipping] = useState({ amount: 0, provider: "" });
  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState(null);

  const [paymentError, setPaymentError] = useState(false);

  const total = (parseFloat(subTotal) + parseFloat(shipping.amount)).toFixed(2);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    if (response === "cancelled") {
      toast.error("You cancelled the payment.", {
        hideProgressBar: true,
        position: toast.POSITION.TOP_RIGHT,
      });
      window.location = "/payment";
    } else if (response === "success") {
      if (cart.length) {
        strapi
          .addToCheckout({
            ...checkout,
            cartItems: cart.map((item) => ({
              product: item.product.id,
              quantity: item.quantity,
            })),
            status: "PENDING",
            // amount: checkout.amount,
            // shipping: {
            //   type: selectedOption,
            //   amount: shipping.amount,
            //   provider: shipping.provider,
            // },
          })
          .then(() => {
            strapi.emptyCart().then(() => {
              alert("Payment has been recieved. You will be contacted soon.");
              toast.success(
                "Payment has been recieved. You will be contacted soon.",
                {
                  hideProgressBar: true,
                  position: toast.POSITION.TOP_RIGHT,
                }
              );
            });
          });
      }
    }
  }, [cart]);

  const getToken = async () => {
    if (!response) {
      updateCheckout({
        ...checkout,
        amount: total,
        shipping: {
          type: selectedOption,
          amount: shipping.amount,
          provider: shipping.provider,
        },
      });
      const res = await requestPaymentPageToken({
        amount: total,
        user,
        checkout,
      });

      if (res.messages.resultCode === "Error") {
        setPaymentError(true);
        // window.location.reload();
        // toast.error("An error occured, please try again later.", {
        //   hideProgressBar: true,
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      } else {
        setToken(res.token);
      }
      // console.log("Payment Token: ", res);
    }
  };

  const retryToken = (e) => {
    e.preventDefault();
    setPaymentError(false);
    getToken();
  };

  useEffect(() => {
    // console.log("Total: ", total);
    // if (!loading && !error) {
    getToken();
    // }
  }, [total]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    // Update shipping cost based on the selected option
    switch (event.target.value) {
      case "Pickup":
        setShipping(0);
        break;
      case "Regular":
        setShipping(shippingData.regular.amount); // Set the default shipping cost or update as needed
        break;
      case "Express":
        setShipping(shippingData.express.amount); // Update with the desired cost for express shipping
        break;
      default:
        setShipping(shippingData.regular.amount); // Default shipping cost
        break;
    }
  };

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

  if (!user) {
    return (window.location.pathname = "/login");
  }
  if (!checkout) {
    return (window.location.pathname = "/checkout");
  }
  if (!cart) {
    return (window.location.pathname = "/cart");
  }

  // return (<h1>Hello world!!!</h1>)

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
                <label htmlFor="regular">Regular</label>

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
                <button
                  disabled={token || paymentError ? false : true}
                  onClick={paymentError ? retryToken : () => {}}
                  type="submit"
                >
                  {token
                    ? "Continue to Make Payment"
                    : paymentError
                    ? "Click to retry"
                    : "Loading..."}
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
                  <p>{loading ? "Loading..." : `$${shipping.amount}`}</p>
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
                  <span>{cart.length}</span> Items in Cart
                </p>
                {toggle ? (
                  <RiArrowUpSLine className="cart-right-icon" />
                ) : (
                  <RiArrowDownSLine className="cart-right-icon" />
                )}
              </div>
              <div className="cart-full-subtotal cart-order">
                <p>Shipping (Flat Rate - Fixed)</p>
                <p>{loading ? "Loading..." : `$${shipping.amount}`}</p>
              </div>
              <div className="cart-full-total">
                <p>Order Total</p>
                <p style={{ fontWeight: "700" }}>
                  {loading ? "Loading..." : `$${total}`}
                </p>
              </div>
            </div>
            <div
              className="cart-full-right-detail-header"
              onClick={handleToggle}
            >
              <p>
                <span>{cart.length}</span> Items in Cart
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
