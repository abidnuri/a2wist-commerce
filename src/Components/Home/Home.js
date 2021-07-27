import React from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import Slider from '../Slider/Slider';
import HotProducts from './../HotProducts/HotProducts';
import Discount from '../Discount/Discount';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedProduct />
            <SingleProduct />
            <HotProducts />
            <Discount />
        </>
    );
};

export default Home;