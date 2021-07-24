import React from 'react';

const HotSingleProduct = ({ product}) => {
    const {titile, image, price} = product;
    return (
        <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full productImg" src={image} alt={titile}></img>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{titile}</div>
            <p class="text-gray-700 text-base">${price}</p>
            </div>
      </div>
    );
};

export default HotSingleProduct;

