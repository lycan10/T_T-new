import React,{useEffect} from 'react'

import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const ReturnPolicy = () => {
    const location = useLocation();

  useEffect(()=>{
    ReactGA.pageview(location.pathname + location.search);
  },[location])


  return (
    <div className='privacy'>
        <Navbar />
        <div className="privacy-container">
            <div className="privacy-header">
                <h1>ORDERING INFORMATION</h1>
            </div>
            <div className="privacy-content">
                <h3>SALES TAX</h3>
                <p>We collect sales tax on purchases shipping to the following states and territories: AL, AR, AZ, CA, CO, CT, DC, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, ME, MD, MI, MN, MO, MS, NC, ND, NE, NJ, NM, NV, NY, OH, OK, PA, PR, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY. Use tax laws vary by state. If sales or use tax is collected by your state on internet purchases, it is your responsibility. Duties, taxes or brokerage fees to a non-US address are your responsibility.</p>
                <h3>PAYMENT OPTIONS</h3>  
                <p>We accept payment by Visa, MasterCard, Discover, American Express, and ATM/Debit cards with the Visa or MasterCard logo. We also accept PayPal.</p>    
                <h3>RETURNS POLICY</h3> 
                <p>Within 60 days of receipt of your shipment, you may return any new, unused item for a full product refund. No questions. Actual shipping and handling charges will be deducted from the product credit unless the return is a result of our error. Simply contact our Customer Service team for a return authorization number. They will give you instructions on packaging your return and the best address to send your package for quick processing of your shipment. Items covered by our risk free guarantee never have a restocking fee unless the complete item is not returned or it has been used.</p>
                <p>If your shipment arrives and is missing any parts, no problem. Just contact us within 5 days of the receipt of the order. We will have the replacement items shipped to you from the quickest source available, using the same expedited shipping method you used for your original order.</p>
                <p>Please note that we cannot exchange items. Simply place a new order for the items you would like. When the original order is returned a credit will be issued for the items.</p>
                <p>You can also cancel unshipped items. Contact our Customer Service team at +1-248-853-0033 to find out more about how to cancel your order.</p>

                <h5>Problems or Questions?</h5>
                <p>If you have any problems with your order, please don't hesitate to Contact Us online or +1-248-853-0033.</p>
                <h5>Refunds</h5>
                <p>View the status of your shipments/returns here. Please allow 14 business days from the date we receive your shipment for the processing of your shipment and the credit back to your account that was used for the original purchase. Actual shipping and handling charges will be deducted from the product credit unless the return is a result of our error.</p>
                <h5>Packing and Sending Your Return</h5>
                <p>Simply include a copy of the return authorization email from our Customer Service team with your return, and wrap the package securely. Clearly mark on the outside of your package the RGA number. For your protection, we recommend that you use an insured shipping service that provides delivery confirmation such as UPS or US Mail.</p>
                <h5>Send the package to the following address:</h5>
                <p>totaltrailerparts.com</p>
                <p>1747 E Auburn Rd </p>
                <p>Rochester Hills, MI</p>
                <p>US</p>




           </div>
        </div>
        <Footer />
    </div>
  )
}

export default ReturnPolicy