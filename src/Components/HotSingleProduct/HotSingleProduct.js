import React from 'react';
import { useHistory } from 'react-router-dom';

const HotSingleProduct = ({ product }) => {
    const { titile, image, price, id } = product;

    const history = useHistory();
    const handleClick = (productId) => {
      history.push(`/product/${productId}`);
    };

    return (
        <div onClick={() => handleClick(id)} className="overflow-hidden rounded shadow-lg">
            <img className="w-full productImg" src={image} alt={titile}></img>
            <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{titile}</div>
                <p className="text-base text-gray-700">${price}</p>
            </div>
        </div>
    );
};

export default HotSingleProduct;

