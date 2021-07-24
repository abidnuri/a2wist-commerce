import React from 'react';
import fackeData from '../../fackeData/fackData.json'
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
                <div>
                    {
                        fackeData.map(product => <li>{product.titile}</li>)
                    }
                </div>
        </div>
    );
};

export default HotProducts;