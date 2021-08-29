import React from "react";
import Discount from "../Discount/Discount";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Slider from "../Slider/Slider";
import HotProducts from "../HotProducts/HotProducts";
// import SingleProduct from "../SingleProduct/SingleProduct";

const Home = () => {
  return (
    <div className="-mt-20">
      <Slider />
      <Discount />
      <FeaturedProduct />
      <HotProducts />
    </div>
  );
};

export default Home;
