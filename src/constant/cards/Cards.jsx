import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
// import{FiShoppingBag} from "react-icons/fi";

import "./cardsData.css"
import AddToCartBtn from '../../components/addToCart/AddToCartBtn';

const Cards = ({id, discountPercent, img, title, ratings, discountedPrice, originalPrice, onClick}) => {


  return (
    <div className='card-data'>
        <div className="card-data-container">
            <div className="card-data-image"> 
                <div className="card-data-discount">
                    <p>{discountPercent}</p>
                </div>
                <img src={img} alt="" />
            </div> 
            <div className="card-data-preview" onClick={onClick}>
                <h1>QUICK VIEW</h1>
            </div>
            <div className="card-data-details">
                <h1>{title}</h1>
                <p style={{color:"gold"}}>{ratings} </p>
                <div className="card-data-amount">
                <p> {discountedPrice} <span>{originalPrice}</span></p>
                </div>
            </div>
            <div className="card-data-cta">
                <div className="wishlist">  
                <AiOutlineHeart className='card-icon' /> 
                </div>
                <AddToCartBtn id={id} />
            </div>
        </div>
      
    </div>
  )
}

export default Cards