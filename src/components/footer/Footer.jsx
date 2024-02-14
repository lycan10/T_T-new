import React from 'react'
import "./footer.css"
// import logo from "../../assets/1.png"
// import {BsFillTelephoneFill} from "react-icons/bs";
// import {BiLogoGmail} from "react-icons/bi";
// import {MdLocationOn} from "react-icons/md";
// import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from "react-icons/ai"
// import {FaSnapchatSquare} from "react-icons/fa"

import pay1 from "../../assets/visa.png"
import pay2 from "../../assets/card.png"
import pay3 from "../../assets/paypal.png"

import icon1 from "../../assets/f.png"
import icon2 from "../../assets/s.png"
import icon3 from "../../assets/i.png"
import icon4 from "../../assets/t.png"
import icon5 from "../../assets/tik.png"

import ico1 from "../../assets/ic1.png"
import ico2 from "../../assets/ic2.png"
import ico3 from "../../assets/ic3.png"
import { Link } from 'react-router-dom';


const Footer = () => {

  const navigateToHome = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = '/';
    
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
    const newUrl = '/about';
    
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
    const newUrl = '/products';
    
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
    const newUrl = '/contact';
    
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

  const navigateToPrivacy = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = '/privacy';
    
    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };

  const navigateToReturn = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = '/return';
    
    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };
  const navigateToTermsOfService = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = '/terms';
    
    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };
  const date = new Date()

  return ( 
    <div className='footer'>
      <div className="footer-container-CTA">
        <div className="footer-container-CTA-socials">
            <div className='footer-container-CTA-socials-items-icons'>
              <Link to="https://www.facebook.com/TotalTrailer">  <img src={icon1} alt="" /></Link>
            </div>
            <div className='footer-container-CTA-socials-items-icons'>
              <img src={icon2} alt="" />
            </div>
            <div className='footer-container-CTA-socials-items-icons'>
            <Link to="https://www.instagram.com/total_trailerpart">  <img src={icon3} alt="" /></Link>
            </div>
            <div className='footer-container-CTA-socials-items-icons'>
            <Link to="https://twitter.com/totaltrailer">  <img src={icon4} alt="" /></Link>
            </div>
            <div className='footer-container-CTA-socials-items-icons'>
              <img src={icon5} alt="" />
            </div>
          </div>
        <div className="footer-container-CTA-newsletter">
          <h1>SIGN UP FOR NEWSLETTER</h1>
          <div className='footer-container-CTA-newsleter-button'>
                <input type='text' placeholder='Enter Your Email Here' />
                <button>Subscribe Now</button>
              </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top1">
          <h1>CONTACT US</h1>
          <div className="footer-socials">
            <div className="footer-info">
                <div className='footer-info-icons'>
                  <img src={ico1} alt="" />
                </div>
                <div className="footer-info-text">
                  <p>1747 E Auburn Rd Rochester Hills, MI</p>
                </div>
              </div>
              
              <div className="footer-info">
                <div className='footer-info-icons'>
                  <img src={ico2} alt="" />
                </div>
                <div className="footer-info-text">
                  <p>totaltrailerparts@outlook.com</p>
                </div>
            
             </div>
              <div className="footer-info">
                <div className='footer-info-icons'>
                  <img src={ico3} alt="" />
                </div>
                <div className="footer-info-text">
                  <p>+1(248) 853-0033</p>
                </div>
              </div>
          </div>
        </div>
        <div className="footer-top2-container">
        <div className="footer-top2">
          <h1>ABOUT TTP</h1>
          <ul>
              <li>
                  <span onClick={navigateToAbout}>About Us</span>
              </li>
              <li>
                    <span onClick={navigateToTermsOfService}>Terms of Use</span>
                    </li>
                    
                    <li>
                        <span onClick={navigateToPrivacy}>Privacy Policy</span>
                    </li>
                    <li>
                        <span onClick={navigateToContact}>Site Map</span>
                    </li>
          </ul>
        </div>
        <div className="footer-top2">
          <h1>CUSTOMER SERVICE</h1>
          <ul>
          <li>
                    <span onClick={navigateToHome}>Home</span>
                    </li>
                    <li>
                        <span onClick={navigateToProduct}>Products</span>
                    </li>
                    <li>
                        <span onClick={navigateToReturn}>Return Policy</span>
                    </li>
                   
                    <li>
                        <span onClick={navigateToContact}>Contact Us</span>
                    </li>
          </ul>
        </div>
        </div>
      
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom1">
           <p> Copyright © {date.getFullYear()} TotalTrailerParts. All Rights Reserved. </p>
          </div>
          <div className="footer-bottom3">
            <div className="footer-payment">
              <img src={pay1} alt="" />
            </div>
            <div className="footer-payment">
              <img src={pay2} alt="" />
            </div>
            <div className="footer-payment">
              <img src={pay3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer