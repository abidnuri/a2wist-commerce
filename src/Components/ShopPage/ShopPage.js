import React from 'react';
import Products from '../../fackData/fackData.json';
import ProductCard from '../ProductCard/ProductCard';

const ShopPage = () => {
    
    return (
        <section className="body-font">
            <h1 className="m-10 text-4xl text-center font-bold">All products</h1>
            <div className="container mx-auto p-3 text-center">
                <div className="flex flex-wrap">
                    {
                        Products.map(product => <ProductCard product={product} key={product.key} />)
                    }
                </div>
                <button className="m-3 p-3 inline-block bg-gray-600 rounded-md text-white">VIEW ALL</button>
            </div>
        </section>
    );
};

export default ShopPage;