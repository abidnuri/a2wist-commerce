import React from 'react';

const SingleFeaturedProduct = ({feature}) => {
    return (
        <>
        <div className={`col-span-1 row-span-${feature.rows} bg-gray-300 shadow-md rounded-xl`}>
            <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl">
                <div class={`${feature.flex} grid justify-items-center`}>
                    <div class="md:flex-shrink-0">
                        <img class="object-cover md:h-full w-48" src="https://i.ibb.co/NLpXp4W/woman-dress.png" alt="Man looking at item at a store" />
                    </div>
                    <div class="p-8 md:text-left text-center">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">OUTERWEAR</div>
                        <h2 className="mt-3 text-lg text-md">NEW</h2>
                        <p className="text-sm">COLLECTION</p>
                        <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded">
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