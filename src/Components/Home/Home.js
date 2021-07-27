import React from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import Slider from '../Slider/Slider';
import HotProducts from './../HotProducts/HotProducts';
import Discount from '../Discount/Discount';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <FeaturedProduct />
            <SingleProduct/>
            <HotProducts />
            <Discount />
            <Footer />
        </div>
    );
};

export default Home;