import { useContext, useState } from "react";

import { toast } from "react-toastify";

import strapi from "../../functions/strapi";
import AuthContext from "../../AuthContext";

const CartPageItem = ({ item, subTotal, i }) => {
  const { fetchCart } = useContext(AuthContext);

  const isAvailable = item.product.description ? true : false;

  const { id, product } = item;

  const [quantity, setQuantity] = useState(item.quantity);

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
      .finally(() => fetchCart());
  };

  // const deleteItem = () => {
  //   strapi
  //     .deleteCartItem(item.id)
  //     .then((res) => {
  //       toast.success("Product successfully removed from your cart!", {
  //         hideProgressBar: true,
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     })
  //     .catch(() =>
  //       toast.error("An error occured, please try again later.", {
  //         hideProgressBar: true,
  //         position: toast.POSITION.TOP_RIGHT,
  //       })
  //     )
  //     .finally(() => fetchCart());
  // };

  return (
    <tr key={id} className="tr-cart">
      <td>
        <div className="cart-full-left-item">
          <div className="cart-full-left-image">
            <img
              src={
                isAvailable
                  ? strapi.getImageURL(product.img)
                  : "/unavailable.png"
              }
              alt=""
            />
          </div>
          <div className="cart-full-left-title">
            <p>{isAvailable ? product.description : "PRODUCT UNAVAILABLE"}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="cart-full-left-price">
          <p>{isAvailable ? `$${product.price}` : "N/A"}</p>
        </div>
      </td>
      <td>
        <div className="cart-counter1 cart-full-left-input">
          <input
            type="number"
            value={isAvailable ? quantity : "0"}
            onChange={handleChange}
            onBlur={submit}
            disabled={!isAvailable}
          />
        </div>
      </td>
      <td>
        <div className="cart-full-left-subtotal">
          <p>{isAvailable ? `$${subTotal[i]}` : "N/A"}</p>
        </div>
      </td>
    </tr>
  );
};

export default CartPageItem;
