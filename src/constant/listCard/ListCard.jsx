import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

import "./listcard.css";
import strapi from "../../functions/strapi";
import AddToWishlistBtn from "../../components/addToWishlist/AddToWishlist";
import AddToCartBtn from "../../components/addToCart/AddToCartBtn";

const ListCard = ({ id, img, brand, ratings, price, description }) => {
  const imageURL = strapi.getImageURL(img);

  return (
    <div className="list-card">
      <div className="list-card-container">
        <div className="list-card-image">
          <img src={imageURL} alt="" />
        </div>
        <div className="list-card-content">
          <h1>{description}</h1>
          <p style={{ color: "gold" }}>{ratings} </p>
          <p style={{ color: "red" }}>${price}</p>
          <p>{brand}</p>
          <div className="list-card-cart-container">
            {/* <div className="list-card-cart">
              <h3>ADD TO CART</h3>
            </div>
            <div className="list-card-wishlist">
              <AiOutlineHeart className="wish-icon" />
            </div> */}

            <AddToWishlistBtn id={id} />
            <AddToCartBtn id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
