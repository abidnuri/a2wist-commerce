import React from "react";

const HotSingleProduct = ({ product }) => {
  const { title, image, price } = product;
  return (
    <div className="overflow-hidden rounded shadow-lg">
      <img className="w-full productImg" src={image} alt={title}></img>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">${price}</p>
      </div>
    </div>
  );
};

export default HotSingleProduct;
