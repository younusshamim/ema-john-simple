import React from "react";

const ReviewItem = ({ product, removeProduct }) => {
  const { name, quantity, key, price } = product;

  const reviewItemStyle = {
    borderBottom: "1px solid lightgray",
    marginBottom: "10px",
    paddingBottom: "10px",
    marginLeft: "200px",
  };

  return (
    <div style={reviewItemStyle} className="review-item">
      <h4 className="product-name">{name} </h4>
      <p>Quantity: {quantity}</p>
      <p>
        <small>${price}</small>
      </p>
      <br />
      <button onClick={() => removeProduct(key)} className="main-button">
        Remove Item
      </button>
    </div>
  );
};

export default ReviewItem;
