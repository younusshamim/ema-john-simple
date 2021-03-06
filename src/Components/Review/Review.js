import React, { useState, useEffect } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData/index";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import happyImage from "../../images/giphy.gif";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };

  const removeProduct = (productKey) => {
    const newCart = cart.filter((prdct) => prdct.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  return (
    <div className="twin-container">
      <div className="product-container">
        <h1>Cart Items: {cart.length}</h1>
        {cart.map((pd) => (
          <ReviewItem key={pd.key} product={pd} removeProduct={removeProduct} />
        ))}

        {orderPlaced && <img src={happyImage} alt="" />}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="main-button">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
