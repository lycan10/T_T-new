import "./App.css";

import "react-toastify/dist/ReactToastify.css";

import { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Products from "./pages/products/Products.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import Checkout from "./components/checkout/Checkout";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Catalogue from "./pages/catalogue/Catalogue";

import Payment from "./components/payment/Payment";
import AuthContext from "./AuthContext.js";
import strapi from "./functions/strapi.js";
import Soon from "./pages/soon/Soon.jsx";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy.jsx";
import ReturnPolicy from "./components/returnpolicy/ReturnPolicy.jsx";
import TermsOfService from "./components/termsOfService/TermsOfService.jsx";
import Deals from "./pages/deals/Deals.jsx";
import { Link } from "react-router-dom";

function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            user: action.user,
            checkout: action.checkout,
            isLoading: false,
            isSignout: action.isSignout,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            user: null,
            cart: [],
            wishlist: [],
            checkout: {},
          };
        case "SHOW_MODAL":
          return {
            ...prevState,
            showModal: action.showModal,
          };
        case "UPDATE_CART":
          return {
            ...prevState,
            cart: action.cart,
          };
        case "UPDATE_WISHLIST":
          return {
            ...prevState,
            wishlist: action.wishlist,
          };
        case "UPDATE_CHECKOUT":
          return {
            ...prevState,
            checkout: action.checkout,
          };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      isSignout: true,
      user: null,
      cart: [],
      wishlist: [],
      checkout: {},
      showModal: false,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let user;
      let checkout;

      try {
        user = localStorage.getItem("user");
        user = JSON.parse(user);

        checkout = sessionStorage.getItem("checkout");
        checkout = checkout ? JSON.parse(checkout) : {};
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", user, checkout, isSignout: user ? false : true });
    };

    bootstrapAsync();

    authContext.fetchCart();
    authContext.fetchWishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const authContext = useMemo(
  //   () => ({
  //     signIn: (user) => {
  //       // In a production app, we need to send some data (usually username, password) to server and get a token
  //       // We will also need to handle errors if sign in failed
  //       // After getting token, we need to persist the token using `SecureStore`
  //       // In the example, we'll use a dummy token

  //       localStorage.setItem("user", JSON.stringify(user));

  //       console.log(user);

  //       dispatch({ type: "SIGN_IN", user });
  //     },
  //     signOut: () => {
  //       localStorage.deleteItem("user");

  //       dispatch({ type: "SIGN_OUT" });
  //     },
  //     authState: state,
  //   }),
  //   []
  // );

  const navigateToLogin = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/login";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };

  const authContext = {
    signIn: async (user) => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `SecureStore`
      // In the example, we'll use a dummy token

      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: "SIGN_IN", user });
    },
    signOut: async () => {
      localStorage.removeItem("user");

      dispatch({ type: "SIGN_OUT" });
    },
    closeModal: () => {
      dispatch({ type: "SHOW_MODAL", showModal: false });
    },
    gatedAction: (action) => {
      if (state.isSignout) {
        return () => dispatch({ type: "SHOW_MODAL", showModal: true });
      }
      return action;
    },
    fetchCart: async () => {
      if (!state.isSignout) {
        const cart = await strapi.getCart();
        dispatch({ type: "UPDATE_CART", cart });
      }
    },
    fetchWishlist: async () => {
      if (!state.isSignout) {
        const wishlist = await strapi.getWishlist();
        dispatch({ type: "UPDATE_WISHLIST", wishlist });
      }
    },
    updateCheckout: (checkout) => {
      sessionStorage.setItem("checkout", JSON.stringify(checkout));

      dispatch({ type: "UPDATE_CHECKOUT", checkout });
    },
    authState: state,
  };

  if (state.isLoading) {
    return null;
  }

  return (
    <div className="App">
      <AuthContext.Provider value={authContext}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Products />} />
            <Route path="/products:subcategory" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/soon" element={<Soon />} />
            <Route path="/return" element={<ReturnPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/deals" element={<Deals />} />
            {state.isSignout ? (<>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>) : (<>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
            </>)}
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
      <ToastContainer />
      <Modal show={state.showModal} onHide={authContext.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to log in to access the wishlist.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={authContext.closeModal}>
            Close
          </Button>
          {/* Add a login button or link to your login page */}
          <Link to="/login">
            <Button variant="primary">
              Login
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
