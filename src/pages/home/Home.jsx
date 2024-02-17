import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Qualities from '../../components/qualities/Qualities'
// import Cards from '../../constant/cards/Cards'
import Bestseller from '../../components/bestsellers/Bestseller'
import NewArrivals from '../../components/newarrivals/NewArrivals'
import TopDeals from '../../components/topdeals/TopDeals'
// import TopCollections from '../../components/topcollections/TopCollections'
import Footer from "../../components/footer/Footer"
import HomeServices from '../../components/homeservices/HomeServices'
import Discount from '../../components/discount/Discount'
import HomeReviews from '../../components/homereviews.jsx/HomeReviews'

import ReactGA from "react-ga4";
import { useLocation } from 'react-router-dom';

import "./home.css"
import Homecoming from '../../components/homecoming/Homecoming'
import AboutImgs from '../../components/aboutimgs/AboutImgs'



const Home = () => {
  // const location = useLocation();

  // ReactGA.initialize("'G-757XGDZ579'");

  // ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

  // ReactGA.set({ page: window.location.pathname });
  // ReactGA.pageview(window.location.pathname);


  // useEffect(()=>{
  //   ReactGA.pageview(location.pathname + location.search);
  // }, [location])

  return (
    <div className='home'>
      <Navbar />
      <Header />
     <div className="bestseller-spacing">
        <Bestseller />
     </div>
     
      {/* <Homecoming /> */}
      <HomeServices />
      <div className="bestseller-spacing">
      <NewArrivals />
      </div>
      <AboutImgs />
      {/* <Discount /> */}
      <HomeReviews />
      <div className="bestseller-spacing">
      <TopDeals />
      </div>
      <br />
      <br />
      <br />
      {/* <Qualities /> */}
      <Footer />
    </div>
  )
}

export default Home