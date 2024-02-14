import React, {useEffect} from 'react'
import "./discount.css"
import { FaShoppingCart } from "react-icons/fa";


import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

const Discount = () => { 

  const location = useLocation();

  useEffect(()=>{
    ReactGA.pageview(location.pathname + location.search);
  },[location])


    const navigateToProduct = () => {
        // Use the URL of the page you want to navigate to

        ReactGA.event({
          category: 'Button Click',
          action: 'Clicked on Buy Now',
          label: 'Product Page',
        });

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

  return (
    <div className='discount'>
        <div className="discount-container">
            <p>Get 5% Off On Your First Purchase!</p>
            <div className="discount-button" onClick={navigateToProduct}>
            <FaShoppingCart className='discount-icon' />
            <p>Shop now</p>
            </div>
        </div>
    </div>
  )
}

export default Discount