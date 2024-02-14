import React, { useState, useContext } from "react";
import logo from "../../assets/2.png";
// import logo2 from "../../assets/1.jpg";
import "./navbar.css";
import { AiOutlineHeart } from "react-icons/ai";
// import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { PiClipboardText } from "react-icons/pi";
import phone from "../../assets/phone-call.png";
// import { bestSellerData, cartData } from "../../constant/data/data";
// import { BsTrash } from "react-icons/bs";
// import { userData } from "../../pages/helpers";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../AuthContext";
// import { useStrapi } from "../../hooks/useStrapi";
// import strapi from "../../functions/strapi";

import { HashLink } from "react-router-hash-link";

import Cart from "./Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const {
    signOut,
    gatedAction,
    authState: { user, isSignout },
  } = useContext(AuthContext);

  // const [showModal, setShowModal] = useState(false);
  // const [value, setValue] = useState(1);

  // const { loading, data, error } = useStrapi("carts");

  // const cartData = data ? data?.data : [];
  //   const isLoggedIn = false; // Replace with your actual logic for checking if the user is logged in

  //   const userData = useFetch(url).data;
  // const user = userData && userData.length > 0 ? userData[0] : null;

  // const username = user ? user.username : '';
  // const firstName = user ? user.firstName : '';

  // const username = user?.username;

  const navigateToHome = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };
  const navigateToAbout = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/about";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };
  const navigateToProduct = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/products";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };

  const navigateToSoon = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/soon";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };
  const navigateToDeals = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/deals";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };

  const navigateToContact = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/contact";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };

  const navigateToWishlist = gatedAction(() => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/wishlist";

    // if (!isSignout) {
    // If the user is logged in, navigate to the wishlist page
    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
    // } else {
    //   // If the user is not logged in, show the modal
    //   setShowModal(true);
    // }
  });

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const navigateToRegister = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/register";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };

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

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSubmit = () => {};

  const handleLogout = () => {
    // localStorage.setItem("user", "");
    signOut();
    const newUrl = "/Login";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };

  const phoneNumber = +12488530033; // Replace with your actual phone number

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="navbar-top-welcome">
            <p>
              Welcome to{" "}
              <span style={{ color: "#3B67AF" }}> #TotalPeaceofMind</span>
            </p>
          </div>
          {!isSignout ? (
            <div className="navbar-top-login-container">
              <div className="navbar-login">
                <FiUser className="navbar-icons" />
                <p>Hi {user.username}</p>
              </div>
              <div className="navbar-login" onClick={handleLogout}>
                <PiClipboardText className="navbar-icons" />
                <p>Logout</p>
              </div>
            </div>
          ) : (
            <div className="navbar-top-login-container">
              <div className="navbar-login" onClick={navigateToLogin}>
                <FiUser className="navbar-icons" />
                <p>Login</p>
              </div>
              <div className="navbar-login" onClick={navigateToRegister}>
                <PiClipboardText className="navbar-icons" />
                <p>Register</p>
              </div>
            </div>
          )}
        </div>
        <div className="navbar-middle">
          <div
            className="navbar-logo"
            onClick={navigateToHome}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-middle-content">
            <div className="navbar-middle-tel">
              <div className="navbar-middle-tel-img">
                <img src={phone} alt="" />
              </div>
              <div className="navbar-tel-number" onClick={handleCallClick}>
                <h1>CALL US NOW</h1>
                <p>+1(248) 853-0033</p>
              </div>
            </div>
            <Cart />
          </div>
        </div>
        <div className="navbar-bottom">
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/">PRODUCTS</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/deals">DEALS</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-cta" onClick={navigateToWishlist}>
            <h1>WISHLIST: </h1>
            <AiOutlineHeart className="icon2" />
          </div>
          {/* <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Please Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You need to log in to access the wishlist.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary" onClick={navigateToLogin}>
                Login
              </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      </div>
      <div className="navbar-mini">
        <div className="navbar-mini-container">
          {toggleMenu ? (
            <RiCloseLine
              color="#3B67AF"
              size={25}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#3B67AF"
              size={25}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div
              className={`navbar-menu_container ${
                toggleMenu ? "slide-bottom" : "slide-top"
              }`}
            >
              <div className="navbar-menu_links">
                <nav>
                  <ul>
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/">Products</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/deals">Deals</Link>
                    </li>
                    {/* <div className='navbar-socials'>
                                <Link to='/'><AiOutlineTwitter  className='social-logo'/></Link>
                                <Link to='/'><AiFillFacebook  className='social-logo'/></Link>
                                <Link to='/'><AiOutlineInstagram  className='social-logo'/></Link>
                            </div> */}
                  </ul>
                </nav>
              </div>
            </div>
          )}
          <Cart mobile />
        </div>
        {/* <div className="navbar-mini-container">
          <div className="navbar-mini-hamburger">
            <RxHamburgerMenu />
          </div>
          <div className="navbar-mini-image">
            <img src={logo} alt="" />
          </div>
          <Cart mobile />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
