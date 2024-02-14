import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiShoppingBag } from "react-icons/fi";

import strapi from "../../functions/strapi";
import AuthContext from "../../AuthContext";

const AddToCartBtn = ({ id, quantity = 1 }) => {
  const {
    gatedAction,
    fetchCart,
    authState: { cart },
  } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cartItem = cart.filter((item) => item.product.id === id);
    setIsInCart(cartItem.length ? cartItem[0].id : false);
  }, [cart]);

  const addToCart = gatedAction(() => {
    setLoading(true);
    strapi
      .addToCart({ product: id, quantity })
      .then((res) => {
        // console.log(res);
        toast.success("Product successfully added to your cart!", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("An error occured, please try again later.", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => {
        setLoading(false);
        fetchCart();
      });
  });

  const removeFromCart = gatedAction(() => {
    setLoading(true);
    strapi
      .deleteCartItem(isInCart)
      .then((res) => {
        // console.log(res);
        toast.success("Product successfully removed from your cart!", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("An error occured, please try again later.", {
          hideProgressBar: true,
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => {
        setLoading(false);
        fetchCart();
      });
  });

  return (
    <div className="cart" onClick={isInCart ? removeFromCart : addToCart}>
      <FiShoppingBag className="card-icon" />
      {isInCart ? (
        <p>{loading ? "REMOVING..." : "REMOVE FROM CART"}</p>
      ) : (
        <p>{loading ? "ADDING..." : "ADD TO CART"}</p>
      )}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddToCartBtn;
