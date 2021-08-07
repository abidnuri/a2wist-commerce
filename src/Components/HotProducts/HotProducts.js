import React from "react";
import { useSelector } from "react-redux";
import HotSingleProduct from "../HotSingleProduct/HotSingleProduct";
const HotProducts = () => {
  const products = useSelector((state) => state.products.all);

  return (
    <div className="pt-10 mt-10 text-center">
      <h1 className="text-4xl font-bold">HOT PRODUCTS</h1>
      <p className="pt-2 pb-4 text-lg font-medium">
        Check our hot products on sale and get it now.
      </p>
      <div className="inline">
        <a
          className="my-1 font-medium text-gray-700 text-md dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          NEW ARRIVAL
        </a>
        <a
          className="my-1 font-medium text-gray-700 text-md dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          TREADING
        </a>
        <a
          className="my-1 font-medium text-gray-700 text-md dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          BEST SELLERS
        </a>
        <a
          className="my-1 font-medium text-gray-700 text-md dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          FEATURE
        </a>
        <a
          className="my-1 font-medium text-gray-700 text-md dark:text-gray-200 hover:text-red-400 hover:underline dark:hover:text-red-400 md:mx-4 md:my-0"
          href="##"
        >
          ON SALE
        </a>
      </div>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <HotSingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HotProducts;
