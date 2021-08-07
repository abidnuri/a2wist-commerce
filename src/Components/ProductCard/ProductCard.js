import React from 'react';
import { useHistory } from 'react-router';

const ProductCard = ({product}) => {
    const history = useHistory();
    const handleProduct = (id) => {
        history.push('/product/' + id)
    }
    return (
        <div onClick={()=> handleProduct(product.id)} className="lg:w-3/12 md:w-1/2 p-4 w-full text-gray-400 cursor-pointer relative h-auto">
            <div className="z-10 absolute top-8 right-8 text-black bg-white p-1 rounded-full hover:bg-red-600 transition duration-300 ease-in-out">fav</div>
                <img alt="ecommerce" className="object-cover object-center w-full block relative rounded overflow-hidden h-auto" src={product.image} />
            <div className="mt-4 text-center">
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.titile}</h2>
                    <p className="text-sm font-semibold">Price: ${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;