import React from 'react'
import "./soon.css"
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



const Soon = () => {

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
    <div className='soon'> 
    <Navbar />
        <div className="soon-container">
            <div className="soon-logo">
                <img src={logo} alt="" />
            </div>
            <div className="soon-text">
                <h1>Page Under Construction.</h1>
            </div>
           <div className="soon-content">
            <p>We apologize for the inconvenience, but our website is currently undergoing exciting renovations. Our developers are working diligently behind the scenes to bring you an improved online experience. Please bear with us during this time, and If you need <span onClick={navigateToContact}> immediate assistance </span> feel free to reach out to us directly.</p>
           </div>
            <div className="soon-contact-container">
                <div className="soon-contact">
                    <BsFillTelephoneFill className='soon-icons'  />
                    <p>+1(248) 853-0033</p>
                </div>
                <div className="soon-contact s-margin">
                    <BiLogoGmail className='soon-icons'  />
                    <p>totaltrailerparts@gmail.com</p>
                </div>
                <div className="soon-contact">
                    <MdLocationOn className='soon-icons'  />
                    <p>1747 E Auburn Rd Rochester Hills, MI</p>
                </div>
            </div>
            <div className="soon-socials">
                <Link to="https://www.facebook.com/TotalTrailer"><AiFillFacebook className='soon-icons1' /> </Link>
                <Link to="https://twitter.com/totaltrailer"><RiTwitterXLine className='soon-icons1' /> </Link>
                <Link to="https://www.instagram.com/total_trailerpart/"><AiFillInstagram className='soon-icons1' /></Link>

            </div>
        </div>
    <Footer />
    </div>
  )
}

export default Soon