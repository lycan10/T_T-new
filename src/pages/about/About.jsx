import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import image from "../../assets/about-2.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import mission from "../../assets/goal.png";
import vision from "../../assets/vision.png";

// import {AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

import "./about.css";

import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";

import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";

import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import AboutImgs from "../../components/aboutimgs/AboutImgs";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="aboutus" id="about">
      <Navbar />
      <div className="aboutus-container">
        <div className="contact-header-image">
          <div className="banner-opacity"></div>
          <img src={image} alt="" />
          <div className="contact-header-text">
            <h1>About</h1>
          </div>
        </div>
        <div className="aboutpage-content-container">
          <div
            className="aboutpage-content-image"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={image} alt="" />
          </div>
          <div className="aboutpage-content">
            <div
              className="aboutpage-content-title"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div
                className="aboutpage-services-title"
                style={{ marginBottom: "0" }}
              >
                <div className="contact-vertical"></div>
                <h1>Who we are</h1>
              </div>
              <h1>Total peace of mind is our mantra. </h1>
              <p>
                Welcome to Total Trailer, your go-to destination for
                #Totalpeaceofmind. Our unwavering commitment lies in enriching
                your journey by offering exceptional direct replacement and
                aftermarket solutions designed to perfectly align with your
                distinct requirements and preferences. At Totaltrailer, we are
                more than just a business entity. We are passionate craftsmen,
                fervently committed to elevating the essence of your lifestyle.
                Our unwavering purpose is to enrich your voyages, redefine your
                getaways, and redefine the way you traverse the open road.
              </p>
            </div>
          </div>
        </div>

        <div className="aboutpage-mvs-container">
          <div
            className="aboutpage-mvs"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={mission} alt="" />
            <h4>Our Misson</h4>
            <p>
              Our mission is to revolutionize your open road experience, by
              providing top-quality, innovative solutions that cater to the
              unique needs of our customers.
            </p>
          </div>
          <div
            className="aboutpage-mvs"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={vision} alt="" />
            <h4>Our Vision</h4>
            <p>
              Our aim is to be the premier destination of passionate travelers
              united by their love for adventure, where unforgettable
              experiences and lifelong memories are created.
            </p>
          </div>
        </div>

        <div
          className="aboutpage--value-main"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="aboutpage-services-title">
            <div className="contact-vertical"></div>
            <h1>Our Values</h1>
            <div
              className="contact-vertical"
              style={{ marginLeft: "0.5rem" }}
            ></div>
          </div>
          <div className="aboutpage-values-container">
            <div className="aboutpage-value">
              <img src={v1} alt="" />
              <p>Peace of Mind</p>
            </div>
            <div className="aboutpage-value">
              <img src={v2} alt="" />
              <p>Adventure</p>
            </div>
            <div className="aboutpage-value">
              <img src={v3} alt="" />
              <p>Eco-Friendly</p>
            </div>
            <div className="aboutpage-value">
              <img src={v4} alt="" />
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>

        <AboutImgs />

        <div className="aboutpage-services">
          <div className="aboutpage-services-title">
            <div className="contact-vertical"></div>
            <h1>Our Services</h1>
            <div
              className="contact-vertical"
              style={{ marginLeft: "0.5rem" }}
            ></div>
          </div>
          <p>
            At Total Trailer, we take pride in offering a wide range of services
            tailored to meet the unique needs of RV and trailer enthusiasts. Our
            commitment to excellence extends to every aspect of our service
            offerings, ensuring that your RV and trailer experience is filled
            with peace of mind.
          </p>
          <div className="about-services-details">
            <div className="aboutpage-mvs services-mvs">
              <img src={icon1} alt="" />
              <h4>On-Time Delivery</h4>
              <p>
                Count on Total Trailer for not only high-quality trailer
                solutions but also for a service that respects your time and
                convenience. Your journey matters to us, and we're here to make
                sure it begins right on time.
              </p>
            </div>
            <div className="aboutpage-mvs services-mvs">
              <img src={icon2} alt="" />
              <h4>Direct Replacement Parts</h4>
              <p>
                We provide a comprehensive selection of direct replacement parts
                to keep your trailer in optimal condition. From essential
                components to specialized items, we've got you covered.
              </p>
            </div>
            <div className="aboutpage-mvs services-mvs">
              <img src={icon3} alt="" />
              <h4>Expert Advice</h4>
              <p>
                Our experienced team is here to offer guidance and support.
                Whether you're looking for recommendations, installation tips,
                or troubleshooting assistance, we're just a call or message
                away.
              </p>
            </div>
          </div>
        </div>

        {/* <div className='aboutpage-team-overall'>
          <div className="aboutpage-team-container">
            <div className="about-team-title" data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000">
            <div className="aboutpage-services-title">
          <div className="contact-vertical" ></div>
            <h1>Our Team</h1>
            <div className="contact-vertical" style={{marginLeft:"0.5rem"}}></div>
          </div>
                  <p>Meet the driving force behind our success – the talented individuals who transform ideas into reality, creativity into innovation, and passion into excellence.</p>
            </div>
            <div className="aboutpage-team-content">
              <div className="aboutpage-team"  data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000">
                <div className="aboutpage-team-image">
                  <img src={team1} alt="Team" />
                </div>
                <h1>John doe </h1>
                <p>CEO</p>
              </div>
              <div className="aboutpage-team"  data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000">
                <div className="aboutpage-team-image">
                  <img src={team2} alt="Team" />
                </div>
                <h1>Eleanor smith</h1>
                <p>Project Director</p>
              </div>
              <div className="aboutpage-team"  data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000">
                <div className="aboutpage-team-image">
                  <img src={team3} alt="Team" />
                </div>
                <h1>Paige hilton</h1>
                <p>Director of Communications</p>
              </div>
            </div>
          </div>
        </div> */}
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
