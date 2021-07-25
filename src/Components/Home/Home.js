import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fackData from '../../fackeData/fackData.json'
import Product from '../Product/Product';


const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const products =  fackData
        setProducts(products)
    }, [])
    return (
        <div className="container">
        <div className="row">
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Home;