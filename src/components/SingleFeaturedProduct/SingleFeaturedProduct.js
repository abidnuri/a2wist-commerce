import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleFeaturedProduct = ({feature}) => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    

    return (
        <>
        <div data-aos="zoom-in-left" className={`col-span-1 row-span-${feature.rows} bg-gray-300 shadow-md rounded-xl`}>
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
                <div className={`${feature.flex} grid justify-items-center`}>
                    <div className="md:flex-shrink-0">
                        <img className="object-cover w-48 md:h-full" src={feature.featureImage} alt="Man looking at item at a store" />
                    </div>
                    <div className="p-8 text-center md:text-left">
                        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{feature.title}</div>
                        <h2 className="mt-3 text-lg text-md">NEW</h2>
                        <p className="text-sm">COLLECTION</p>
                        <button className="px-4 py-2 mt-5 font-bold text-white bg-black rounded hover:bg-blue-700">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>        
        </>
    );
};

export default SingleFeaturedProduct;