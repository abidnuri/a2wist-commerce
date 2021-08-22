import React, { useEffect, useState } from 'react';
import Products from '../../fackData/fackData.json';
import ProductCard from '../ProductCard/ProductCard';

const ShopPage = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('https://eswap-ecommerce.herokuapp.com/product/allProducts')
        .then(res => res.json())
        .then(data => setProducts(data.data))
    }, [])
    return (
        <section className="body-font">
            <h1 className="m-10 text-4xl text-center font-bold">All products</h1>
            <div className="container mx-auto p-3 text-center">
                <div className="flex flex-wrap">
                    {
                        Products.map(product => <ProductCard product={product} key={product.key} />)
                    }
                    {
                        products &&  products.map(product => <ProductCard product={product} key={product.key} />)
                    }
                </div>
                <button className="m-3 p-3 inline-block bg-gray-600 rounded-md text-white">VIEW ALL</button>
            </div>
        </section>
    );
};

export default ShopPage;