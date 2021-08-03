import React from 'react';
import Products from '../../fackData/fackData.json';
import ProductCard from '../ProductCard/ProductCard';

const ShopPage = () => {
    
    return (
        <section className="text-gray-600 body-font">
            <h1 className="m-10 text-4xl">All products</h1>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    {
                        Products.map(product => <ProductCard product={product} key={product.key} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ShopPage;