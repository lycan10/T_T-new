import React, { useContext } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./cart.css";
import Table from "react-bootstrap/Table";
// import { cartData } from "../../constant/data/data";
import AuthContext from "../../AuthContext";
// import strapi from "../../functions/strapi";
import CartPageItem from "./CartPageItem";
import { totalCart } from "../../functions/totalCart";

const Cart = () => {
  const {
    authState: { cart: cartData },
  } = useContext(AuthContext);

  // const [quantity, setQuantity] = useState(cartData.map(() => 1));

  // const subTotal = (itemIndex) => {
  //   const item = cartData[itemIndex];
  //   return (
  //     parseFloat(item.discountedPrice.slice(1)) * quantity[itemIndex]
  //   ).toFixed(2);
  // };

  // const cartSubTotal = () => {
  //   return cartData
  //     .reduce((total, item, index) => total + parseFloat(subTotal(index)), 0)
  //     .toFixed(2);
  // };

  // const cartTotal = () => {
  //   return (parseFloat(cartSubTotal()) + shipping).toFixed(2);
  // };

  // const handleQuantityChange = (itemIndex, newValue) => {
  //   const newQuantity = [...quantity];
  //   newQuantity[itemIndex] = newValue;
  //   setQuantity(newQuantity);
  // };

  const navigateToCheckout = () => {
    // Redirect to the checkout page
    window.location.href = "/checkout";
  };

  const { subTotal, total, shippingCost, orderTotal } = totalCart(cartData);

  return (
    <div>
      <Navbar />
      {cartData.length === 0 ? (
        <div className="cart-empty-container">
          <h1>SHOPPING CART</h1>
          <p>You have no items in your shopping cart.</p>
          <p>
            Click <span>here</span> to continue shopping.{" "}
          </p>
        </div>
      ) : (
        <div className="cart-full-container">
          <div className="cart-full-title">
            <h1>SHOPPING CART</h1>
            <div className="cart-full-content-container">
              <div className="cart-full-left">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>QTY</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.map((item, index) => (
                      <CartPageItem item={item} i={index} subTotal={subTotal} />
                    ))}
                  </tbody>
                </Table>
                {/* <div className="cart-full-left-update">
                  <button>Update shopping cart</button>
                </div> */}
              </div>
              <div className="cart-full-right">
                <div className="cart-full-right-title">
                  <h1>SUMMARY</h1>
                </div>
                <div className="cart-full-subtotal">
                  <p>Subtotal</p>
                  <p>${total}</p>
                </div>
                <div className="cart-full-subtotal cart-order">
                  <p>Shipping (Flat Rate - Fixed)</p>
                  <p>${shippingCost}</p>
                </div>
                <div className="cart-full-total">
                  <p>Order Total</p>
                  <p style={{ fontWeight: "700" }}>${orderTotal}</p>
                </div>
                <div className="cart-full-button" onClick={navigateToCheckout}>
                  <p>PROCEED TO CHECKOUT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
