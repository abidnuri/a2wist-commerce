import React from "react";
import "./HotSingleProduct.css";
const HotSingleProduct = ({ product }) => {
  const { title, image, price } = product;
  return (
    <div className="overflow-hidden rounded shadow-lg">
      <img className="w-full productImg" src={image} alt={title}></img>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <div className="card_footer">
          <p className="text-lg text-black-700">${price}</p>
          <button className="cart_button">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default HotSingleProduct;
