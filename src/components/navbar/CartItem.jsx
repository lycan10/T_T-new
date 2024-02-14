import { BsTrash } from "react-icons/bs";
import strapi from "../../functions/strapi";

import { toast } from "react-toastify";
import { useState } from "react";

const CartItem = ({ item, refresh }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const isAvailable = item.product.description ? true : false;

  const handleChange = ({ target: { value } }) => setQuantity(value);

  const submit = () => {
    strapi
      .updateCartItem(item.id, { quantity })
      .catch(() =>
        toast.error("Could not update your cart!", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        })
      )
      .finally(() => refresh());
  };

  const deleteItem = () => {
    strapi
      .deleteCartItem(item.id)
      .then((res) => {
        toast.success("Product successfully removed from your cart!", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch(() =>
        toast.error("An error occured, please try again later.", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        })
      )
      .finally(() => refresh());
  };

  // console.log(item.product);

  return (
    <div className="shopping-cart-dropdown-cart-content">
      <div className="shopping-cart-dropdown-cart-content-image">
        <img
          src={
            isAvailable
              ? strapi.getImageURL(item.product.img)
              : "/unavailable.png"
          }
          alt=""
        />
      </div>
      <div className="shopping-cart-dropdown-cart-content-details">
        <p>{isAvailable ? item.product.description : "PRODUCT UNAVAILABLE"}</p>
        <h2>{isAvailable ? `$${item.product.price}` : "N/A"}</h2>
        <div
          className="shopping-cart-dropdown-cart-content-footer"
          style={{ display: "flex", alignItems: "center" }}
        >
          {isAvailable ? (
            <div className="shopping-cart-dropdown-cart-content-qty">
              <p>QTY</p>
              <div className="cart-counter1">
                <input
                  type="text"
                  value={quantity}
                  onChange={handleChange}
                  onBlur={submit}
                  disabled={!isAvailable}
                />
              </div>
            </div>
          ) : (
            <p> Please remove item from cart</p>
          )}
          <div
            className="shopping-cart-dropdown-cart-content-icons"
            onClick={deleteItem}
          >
            <BsTrash />
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default CartItem;
