import React from 'react';
import Discount from '../Discount/Discount';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import Slider from '../Slider/Slider';
import HotProducts from './../HotProducts/HotProducts';

const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedProduct />
            {/* <SingleProduct /> */}
            <HotProducts />
            <Discount />
        </>
    );
};

export default Home;