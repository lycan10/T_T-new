import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./wishlist.css";
// import { cartData } from '../../constant/data/data';
import WishlistCards from "../../constant/wishlistcards/WishlistCards";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import strapi, { STRAPI_SERVER } from "../../functions/strapi";
import { useEffect } from "react";
import Loader from "../loader/Loader";

const Wishlist = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // const {loading, data, error} = useFetch(`${STRAPI_SERVER}/api/wishlists?populate=*&populate[product][populate][0]=img`)

  const getData = () => {
    setLoading(true);
    strapi
      .getWishlist()
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Loader fullscreen />;
  if (error) return <p>ERROR....</p>;

  if (!data || data === null) {
    return <p>No data available.</p>;
  }

  // const wishlistData = data.data;

  // const handleQuantityChange = (itemIndex, newValue) => {
  //   const newQuantity = [...quantity];
  //   newQuantity[itemIndex] = newValue;
  //   setQuantity(newQuantity);
  // };

  // const navigateToCheckout = () => {
  //   // Redirect to the checkout page
  //   window.location.href = '/checkout';
  // };

  return (
    <div>
      <Navbar />

      <div className="wishlistThemain">
        {data.length === 0 ? (
          <div className="cart-empty-container">
            <h1>SHOPPING CART</h1>
            <p>You have no items in your Wishlist.</p>
            <p>
              Click <span onClick={() => (window.location = "/")}>here</span> to
              continue shopping.{" "}
            </p>
          </div>
        ) : (
          <div className="wishlistcards">
            <h1>WISHLIST</h1>
            <div className="wishlistcardscontainer">
              {data.map((wishlist) => {
                console.log("Wishlist: ", wishlist);
                const imageURL = `${strapi.getImageURL(wishlist.product.img)}`;

                // console.log(imageURL);
                return (
                  <div key={wishlist.id}>
                    <WishlistCards
                      itemId={wishlist.id}
                      getData={getData}
                      img={imageURL}
                      title={wishlist.product.description}
                      ratings={wishlist.product.ratings}
                      discountedPrice={wishlist.product.price}
                      quantity={1}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
