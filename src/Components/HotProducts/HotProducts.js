import React from 'react';
import { Link } from 'react-router-dom';
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
                <div className="m-auto">
                <Link to="/shop">
                <button className="px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                            VIEW ALL
                        </button>
                </Link>
                </div>
                <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    {
                        fackData.map(product => <HotSingleProduct product={product} key={product.id}></HotSingleProduct>)
                    }
                </div>
        </div>
    );
};

export default HotProducts;