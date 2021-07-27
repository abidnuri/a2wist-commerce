<<<<<<< HEAD
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fackeData from "../../fackeData/fackData.json";
import { loadProduct } from "../../Reedux/Actions/productActions";
import HotSingleProduct from "../HotSingleProduct/HotSingleProduct";

const HotProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(loadProduct(fackeData));
  //     const productData =
  //     setProducts(useSelector(state => state.products))
  // },[])
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">HOT PRODUCTS</h1>
      <p className="pt-2 pb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
        porro?
      </p>
      <div className="inline">
        <a
          className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          NEW ARRIVAL
        </a>
        <a
          className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          TREADING
        </a>
        <a
          className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          BEST SELLERS
        </a>
        <a
          className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          FEATURE
        </a>
        <a
          className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          ON SALE
        </a>
      </div>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {fackeData.map((product) => (
          <HotSingleProduct
            product={product}
            key={product.id}
          ></HotSingleProduct>
        ))}
      </div>
    </div>
  );
=======
import React from 'react';
import fackData from '../../fackData/fackData.json'
import HotSingleProduct from '../HotSingleProduct/HotSingleProduct';
const HotProducts = () => {
    
    return (
        <div className="text-center">
            <h1 className='text-4xl font-bold'>HOT PRODUCTS</h1>
                <p className="pt-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, porro?</p>
                <div className="inline">
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">NEW ARRIVAL</a>
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">TREADING</a>
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">BEST SELLERS</a>
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">FEATURE</a>
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">ON SALE</a>
                </div>
                <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    {
                        fackData.map(product => <HotSingleProduct product={product} key={product.id}></HotSingleProduct>)
                    }
                </div>
        </div>
    );
>>>>>>> e924e1a3614c13c20d82d57b78caed1a9e99f16f
};

export default HotProducts;
