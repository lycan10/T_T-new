import React, { useContext, useEffect, useState } from "react";
// import { AiOutlineHeart } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import AddToCartBtn from "../../components/addToCart/AddToCartBtn";
import AddToWishlistBtn from "../../components/addToWishlist/AddToWishlist";

import "./bestsellercards.css";
import { AiOutlineHeart } from "react-icons/ai";
import strapi from "../../functions/strapi";
import AuthContext from "../../AuthContext";

const BestSellerCards = ({
  id,
  img,
  description,
  ratings,
  brand,
  sku,
  price,
  origin,
}) => {
  const {
    gatedAction,
    fetchCart,
    authState: { cart },
  } = useContext(AuthContext);

  const [activeModal, setActiveModal] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cartItem = cart.filter((item) => item.product.id === id);
    setIsInCart(cartItem.length ? cartItem[0].id : false);
    setQuantity(cartItem.length ? cartItem[0].quantity : 1);
  }, [cart, id]);

  const quickView = () => {
    setActiveModal(true);
  };

  const closeQuickView = () => {
    setActiveModal(false);
  };

  const changeQuantity = (quantity) => {
    if (isInCart) {
      strapi.updateCartItem(isInCart, { quantity }).then(() => fetchCart());
    } else {
      setQuantity(quantity);
    }
  };

  const handleIncrease = () => {
    changeQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      changeQuantity(quantity - 1);
    }
  };
  const handleChange = (e) => {
    changeQuantity(e.target.value);
  };

  const imageURL = strapi.getImageURL(img);

  return (
    <>
      <div className="card-data">
        <div className="card-data-container">
          <div className="card-data-image">
            <img src={imageURL} alt="" />
          </div>
          <div className="card-data-preview" onClick={quickView}>
            <h1>QUICK VIEW</h1>
          </div>
          <div className="card-data-details">
            <h1 style={{ color: "#3B67AF", padding: "0.3rem" }}>
              {description}
            </h1>
            <p style={{ color: "gold" }}>{ratings} </p>
            <div className="card-data-amount">
              <p> ${price}</p>
            </div>
          </div>
          <div className="card-data-cta">
            <AddToWishlistBtn id={id} />
            <AddToCartBtn id={id} />
          </div>
        </div>
      </div>

      <Modal
        show={activeModal}
        onHide={closeQuickView}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="modal-img">
              <div className="modal-wishlist">
                <AiOutlineHeart />
              </div>
              <img style={{ objectFit: "cover" }} src={imageURL} alt="" />
            </div>
            <div className="modal-content">
              <h1>{brand}</h1>
              <div className="modal-content2">
                <p> ✓ In Stock</p>
                <p>
                  <span>SKU:</span>
                  {sku}
                </p>
              </div>
              <div className="modal-description">
                <p>
                  <span style={{ color: "black" }}>Description: </span>
                  {description}
                </p>
              </div>
              <p style={{ color: "gold" }}>{ratings}</p>
              <div className="model-data-amount">
                <p>${price}</p>
              </div>
              <div className="modal-cart-container">
                <p>QTY</p>
                <div className="cart-counter">
                  <input
                    type="text"
                    value={quantity.toString()}
                    onChange={handleChange}
                  />
                  <div className="cart-adjuster">
                    <p onClick={handleIncrease}>+</p>
                    <p onClick={handleDecrease}>-</p>
                  </div>
                </div>

                <AddToCartBtn id={id} quantity={quantity} />

                {/* <div
                  className="modal-cart"
                  onClick={() => handleSubmit(product.id)}
                >
                  <AiOutlineShoppingCart className="model-symbol" />
                  <p>{addingToCart ? "Adding..." : "ADD TO CART"}</p>
                </div> */}
              </div>

              <div className="modal-description-details">
                <div className="modal-description">
                  <p>
                    <span style={{ color: "black" }}>Country of origin: </span>
                    {origin}
                  </p>
                </div>
              </div>

              {/* <div className="modal-description-table">
                      <Table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>MFG#</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.type.details.map((detail, index) => (
                            <tr key={index}>
                              <td>
                                {" "}
                                <span className="table-text">{detail.id}</span>
                              </td>
                              <td>
                                <span className="table-text">{detail.MFG}</span>
                              </td>
                              <td>
                                <span className="table-text">
                                  {detail.description}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div> */}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BestSellerCards;
