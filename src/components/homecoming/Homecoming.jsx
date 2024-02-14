import React from 'react'
import {BsFillTelephoneFill} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";
import {MdLocationOn} from "react-icons/md";
import {AiFillFacebook, AiFillInstagram} from "react-icons/ai"
import { RiTwitterXLine } from "react-icons/ri";
// import {FaSnapchatSquare} from "react-icons/fa"
import logo from "../../assets/construction.png"
import {Link} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import "./homecoming.css"

const Homecoming = () => {

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

  return (
    <div className='homecoming'> 
        <div className="soon-container homecoming-container">
            <div className="soon-logo homeconing-image">
                <img src={logo} alt="" />
            </div>
            <div className="soon-text homecoming-text">
                <h1>Section Under Construction.</h1>
            </div>
           <div className="soon-content homeconing-content">
            <p>We apologize for the inconvenience, but our product page is currently undergoing exciting renovations. Our developers are working diligently behind the scenes to bring you an improved online experience. Please bear with us during this time, and If you need <span onClick={navigateToContact}> immediate assistance </span> feel free to reach out to us directly.</p>
           </div>
        </div>
    </div>
  )
}

export default Homecoming