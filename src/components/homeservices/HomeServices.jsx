import React from 'react'
import "./homeservices.css"

import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"

const HomeServices = () => {
  return (
    <div className='homeservices'>
        <div className=" about-services-details homeservices-container">
        <div className="aboutpage-mvs homeservices-white">
                    <img src={icon1} alt="" />
                  <h4>On-Time Delivery</h4>
                  <p>Count on Total Trailer for not only high-quality trailer solutions but also for a service that respects your time and convenience. Your journey matters to us, and we're here to make sure it begins right on time.</p>
                </div>
                <div className="aboutpage-mvs homeservices-white  services-margin">
                <img src={icon2} alt="" />
                  <h4>Direct Replacement Parts</h4>
                  <p>We provide a comprehensive selection of direct replacement parts to keep your trailer in optimal condition. From essential components to specialized items, we've got you covered.</p>
                </div>
                <div className="aboutpage-mvs homeservices-white" >
                <img src={icon3} alt="" />
                  <h4>Expert Advice</h4>
                  <p>Our experienced team is here to offer guidance and support. Whether you're looking for recommendations, installation tips, or troubleshooting assistance, we're just a call or message away.</p>
                </div>
        </div>
    </div>
  )
}

export default HomeServices