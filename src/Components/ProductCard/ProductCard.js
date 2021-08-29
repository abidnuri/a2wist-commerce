import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductCard = ({product}) => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    const history = useHistory();
    const handleProduct = (id) => {
        history.push('/product/' + id)
    }
    console.log(product);
    return (
        <div data-aos="zoom-in-left" onClick={()=> handleProduct(product.id)} className="relative w-full h-auto p-4 text-gray-400 cursor-pointer lg:w-3/12 md:w-1/2">
            <div className="absolute z-10 p-1 text-black transition duration-300 ease-in-out bg-white rounded-full top-8 right-8 hover:bg-red-600">fav</div>
                <img alt="ecommerce" className="relative block object-cover object-center w-full h-auto overflow-hidden rounded" src={product.image} />
            <div className="mt-4 text-center">
                <h2 className="text-lg font-medium text-gray-900 title-font">{product.title}</h2>
                    <p className="text-sm font-semibold">Price: ${product.price || product.regularPrice}</p>
            </div>
        </div>
    );
};

export default ProductCard;