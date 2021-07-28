import React from 'react';
import fackData from '../../fackData/fackData.json'
import HotSingleProduct from '../HotSingleProduct/HotSingleProduct';
const Shop = () => {
    return (
        <div>
            <div className="text-center">
            <h1 className='text-4xl font-bold text-red-500 pt-4'>SHOP PAGE</h1>
                <p className="pt-2">To find your best products</p>
            </div>
            <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    {
                        fackData.map(product => <HotSingleProduct product={product} key={product.id}></HotSingleProduct>)
                    }
                </div>
        </div>
    );
};

export default Shop;