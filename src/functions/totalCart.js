export const shipping = 15.0;

export const totalCart = (cartData) => {
  const subTotal = cartData.length
    ? cartData.map((item) => item.quantity * (item.product.price ? item.product.price : 0))
    : [];

  const total = cartData.length
    ? subTotal.reduce((a, b) => parseFloat(a) + b).toFixed(2)
    : 0;

  const shippingCost = (cartData.length * parseFloat(shipping)).toFixed(2);

  // shippingCost

  const orderTotal = (parseFloat(total) + parseFloat(shippingCost)).toFixed(2);

  return { subTotal, total, shippingCost, orderTotal };
};
