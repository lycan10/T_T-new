import { useContext, useEffect, useRef, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import strapi from "../../functions/strapi";
import { BsTrash } from "react-icons/bs";
import AuthContext from "../../AuthContext";
import CartItem from "./CartItem";
import { totalCart } from "../../functions/totalCart";

const Cart = ({ mobile }) => {
  const {
    fetchCart,
    authState: { isSignout, cart },
  } = useContext(AuthContext);

  const [value, setValue] = useState(1);
  const [isCartOpen, setCartOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const cartDropdownRef = useRef(null);
  const [showModal1, setShowModal1] = useState(false);

  // console.log(cart);

  //   const [loading, setLoading] = useState(true);
  //   const [cart, setCart] = useState([]);

  //   const getCart = () => {
  //     setLoading(true);
  //     strapi
  //       .getCart()
  //       .then((res) => {
  //         console.log(res);
  //         setCart(res);
  //       })
  //       .finally(() => setLoading(false));
  //   };

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openCart = () => {
    setCartOpen(true);
    // Add a class to the body element
    document.body.classList.add("body-scroll-lock");
  };

  const closeCart = () => {
    setCartOpen(false);
    // Remove the class from the body element
    document.body.classList.remove("body-scroll-lock");
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const navigateToCheckout = () => {
    // Redirect to the checkout page
    window.location.href = "/checkout";
  };

  const navigateToCart = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/cart";

    if (!isSignout) {
      // If the user is logged in, navigate to the wishlist page
      if (window.location.pathname === newUrl) {
        // If the user is already on the target page, perform a full page reload
        window.location.reload();
      } else {
        // Navigate to the new page
        window.location.href = newUrl;
      }
    } else {
      // If the user is not logged in, show the modal
      setShowModal1(true);
    }
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const handleChange = ({ target: { value } }) => {
    setValue(parseInt(value));
  };

  // const handleIncrease = () => {
  //   setValue(value + 1);
  // };
  // const handleDecrease = () => {
  //   if (value > 1) {
  //     setValue(value - 1);
  //   } else {
  //     setValue(1);
  //   }
  // };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target)
      ) {
        setDropDown(false);
        document.body.classList.remove("body-scroll-lock");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartDropdownRef]);

  // const total = cart.length
  //   ? cart
  //       .map((item) => item.quantity * item.product.price)
  //       .reduce((a, b) => a + b)
  //       .toFixed(2)
  //   : 0;

  const { subTotal, total, orderTotal } = totalCart(cart);

  if (mobile) {
    return (
      <div className="navbar-mini-shopping-cart">
        <FiShoppingBag onClick={toggleDropDown} />
        {dropDown && cart.length === 0 ? (
          <div
            className="shopping-cart-dropdown"
            style={{ display: dropDown ? "flex" : "none" }}
            ref={cartDropdownRef}
          >
            <h1>You have no item in your shopping cart. </h1>
          </div>
        ) : (
          <div
            className="shopping-cart-dropdown-cart"
            style={{ display: dropDown ? "flex" : "none" }}
            ref={cartDropdownRef}
          >
            <div className="shopping-cart-dropdown-cart-top">
              <div className="shopping-cart-dropdown-cart-quantity">
                <p>
                  {" "}
                  <span style={{ color: "black", fontWeight: "600" }}>
                    {cart.length}
                  </span>{" "}
                  Items in Cart
                </p>
                <div className="shopping-cart-dropdown-cart-amount">
                  <p>Cart Subtotal: </p>
                  <h2>
                    {" "}
                    $
                    {(
                      (cart[0]?.price?.slice(1) || 0) *
                      cart.length
                    ).toFixed(2)}
                  </h2>
                </div>
              </div>
              <div
                className="shopping-cart-dropdown-cart-button"
                onClick={navigateToCheckout}
              >
                <p>PROCEED TO CHECKOUT</p>
              </div>
            </div>
            <div className="shopping-cart-dropdown-cart-middle">
              <div className="scroll-container-content">
                {cart.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="shopping-cart-dropdown-cart-content"
                    >
                      <div className="shopping-cart-dropdown-cart-content-image">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="shopping-cart-dropdown-cart-content-details">
                        <p>{item.title}</p>
                        <h2>{item.discountedPrice}</h2>
                        <div className="shopping-cart-dropdown-cart-content-footer">
                          <div className="shopping-cart-dropdown-cart-content-qty">
                            <p>QTY</p>
                            <div className="cart-counter1">
                              <input
                                type="text"
                                value={value.toString()}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="shopping-cart-dropdown-cart-content-icons">
                            <BsTrash />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="shopping-cart-dropdown-cart-bottom">
              <div
                className="shopping-cart-dropdown-cart-bottom-button"
                onClick={navigateToCart}
              >
                <p>VIEW AND EDIT CART</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="navbar-middle-cart"
      onMouseEnter={openCart}
      onMouseLeave={closeCart}
    >
      <div className="navbar-middle-icon">
        <FiShoppingBag className="icon" />
      </div>
      <div className="navbar-tel-number">
        <h1>SHOPPING CART</h1>
        <div className="navbar-item-number">
          <p>{cart.length} items</p>
          <p style={{ margin: " 0 5px" }}>-</p>
          <p>
            ${total}
          </p>
          <Modal show={showModal1} onHide={closeModal1}>
            <Modal.Header closeButton>
              <Modal.Title>Please Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You need to log in to access the wishlist.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal1}>
                Close
              </Button>
              {/* Add a login button or link to your login page */}
              <Button variant="primary" onClick={navigateToCart}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <p></p>
      </div>
      {cart.length === 0 ? (
        <div className="shopping-cart-dropdown">
          <h1>You have no item in your shopping cart. </h1>
        </div>
      ) : (
        <div className="shopping-cart-dropdown-cart">
          <div className="shopping-cart-dropdown-cart-top">
            <div className="shopping-cart-dropdown-cart-quantity">
              <p>
                <span style={{ color: "black", fontWeight: "600" }}>
                  {cart.length}
                </span>
                Items in Cart
              </p>
              <div className="shopping-cart-dropdown-cart-amount">
                <p>Cart Subtotal: </p>
                <h2>
                  ${total}
                </h2>
              </div>
            </div>
            <div
              className="shopping-cart-dropdown-cart-button"
              onClick={navigateToCheckout}
            >
              <p>PROCEED TO CHECKOUT</p>
            </div>
          </div>
          <div className="shopping-cart-dropdown-cart-middle">
            <div className="scroll-container-content">
              {cart.map((item, i) => (
                <CartItem item={item} key={i} refresh={fetchCart} />
              ))}
            </div>
          </div>
          <div className="shopping-cart-dropdown-cart-bottom">
            <div
              className="shopping-cart-dropdown-cart-bottom-button"
              onClick={navigateToCart}
            >
              <p>VIEW AND EDIT CART</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
