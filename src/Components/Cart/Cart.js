import React from "react";

const Cart = ({ cart }) => {
  const total = cart.reduce((total, product) => total + product.price, 0); // way 1

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = total / 10;

  const formateNumber = (num) => {
    const storeNumber = num.toFixed(2);
    return parseFloat(storeNumber);
  };

  return (
    <div>
      <h4>Order Sumary</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formateNumber(total)}</p>
      <p>
        <small>Shipping: {formateNumber(shipping)}</small>
      </p>
      <p>
        <small>Tax + VAT: {formateNumber(tax)}</small>
      </p>
      <p>Total Price: {formateNumber(total + shipping)}</p>
    </div>
  );
};

export default Cart;
