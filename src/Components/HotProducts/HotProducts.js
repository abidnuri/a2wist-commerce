import React from 'react';
import fackeData from '../../fackeData/fackData.json'
import HotSingleProduct from '../HotSingleProduct/HotSingleProduct';
const HotProducts = () => {
    
    return (
        <div class="text-center">
            <h1 className='font-bold text-4xl'>HOT PRODUCTS</h1>
                <p className="pt-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, porro?</p>
                <div className="inline">
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">NEW ARRIVAL</a>
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">TREADING</a>
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">BEST SELLERS</a>
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">FEATURE</a>
                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0" href="##">ON SALE</a>
                </div>
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        fackeData.map(product => <HotSingleProduct product={product} key={product.id}></HotSingleProduct>)
                    }
                </div>
        </div>
    );
};

export default HotProducts;