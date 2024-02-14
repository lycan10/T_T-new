import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./register.css";
import axios from "axios";
// import { storeUser } from "../helpers";
import { toast } from "react-toastify";

import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";
import { STRAPI_SERVER } from "../../functions/strapi";
// import AuthContext from "../../AuthContext";

const initialUser = {
  email: "",
  password: "",
  username: "",
  firstName: "",
  lastName: "",
};

const Register = () => {
  const location = useLocation();

  useEffect(()=>{
    ReactGA.pageview(location.pathname + location.search);
  },[location])

  const [user, setUser] = useState(initialUser);
  const [showPassword, setShowPassword] = useState(false);
  // const [username, setUsername] = useState(null);

  const [loading, setLoading] = useState(false);

  // const { signIn } = useContext(AuthContext);

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const signUp = async () => {

    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked on Signup',
      label: 'Login Page',
    });

    setLoading(true);
    try {
      const url = `${STRAPI_SERVER}/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          // Assuming the response contains the user object with a username property
          // const newUser = res.data.user;

          // Set the username in the state
          // setUsername(newUser.username);

          // Save user to Auth Context
          // signIn(newUser);

          // Your existing toast and redirection logic
          toast.success("Registered successfully!", {
            hideProgressBar: true,
            position: toast.POSITION.TOP_RIGHT,
          });
          setUser(initialUser);
          const newUrl = "/login";

          if (window.location.pathname === newUrl) {
            // If the user is already on the target page, perform a full page reload
            window.location.reload();
          } else {
            // Navigate to the new page
            window.location.href = newUrl;
          }
        }
      } else {
        toast.error("Please enter your username, email and password", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error.response.data.error.message, {
        hideProgressBar: true,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setLoading(false);
  };

  const handleTogglePassword = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked on password toggle',
      label: 'Register Page',
    });
    setShowPassword(!showPassword);
  };

  return (
    <div className="register">
      <Navbar />
      <div className="register-container">
        <div className="register-title">
          <h1>CREATE NEW CUSTOMER ACCOUNT</h1>
        </div>
        <div className="register-form-main">
          <div className="register-form-container">
            <div className="register-form-1">
              <div className="form-title">
                <h1>PERSONAL INFORMATION</h1>
              </div>
              <div className="form-input-container">
                <label>
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-input-container">
                <label>
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-input-container">
                <label>
                  User Name<span> *</span>
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={handleUserChange}
                />
              </div>
            </div>
            <div className="register-form-2">
              <div className="form-title">
                <h1>SIGN-IN INFORMATION</h1>
              </div>
              <div className="form-input-container">
                <label>
                  Email<span> *</span>
                </label>
                <input type="email" name="email" onChange={handleUserChange} />
              </div>
              <div className="form-input-container">
                <label>
                  Password<span> *</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleUserChange}
                />
              </div>

              <div className="form-show-password">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={handleTogglePassword}
                />
                <p>Show Password</p>
              </div>
            </div>
          </div>
          <div className="register-form-button" onClick={signUp}>
            <p>{loading ? " Loading..." : "Register"}</p>
            {/* <ToastContainer /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
