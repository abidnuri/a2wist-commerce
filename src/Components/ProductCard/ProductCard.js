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
    return (
        <div data-aos="zoom-in-left" onClick={()=> handleProduct(product.id)} className="lg:w-3/12 md:w-1/2 p-4 w-full text-gray-400 cursor-pointer relative h-auto">
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