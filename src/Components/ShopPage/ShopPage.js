import React from 'react';
import { useHistory } from 'react-router';
import Products from '../../fackData/fackData.json';

const ShopPage = () => {
    const history = useHistory();
    const handleProduct = (id) => {
        history.push('/product/' + id)
    }
    return (
        <section className="text-gray-600 body-font">
            <h1 className="ml-40 text-4xl">All products</h1>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                    {/* single product */}
                    {
                        Products.map(product => <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full bg-gray-100 m-3 rounded-lg shadow-lg">
                        <a className="block relative h-48 rounded overflow-hidden" href="/product/2">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                        </a>
                        <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.titile}</h2>
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.description.slice(0,40)} ...</h3>
                            <div className="flex flex-wrap justify-between mt-5">
                                <button onClick={()=> handleProduct(product.id)} className="text-base bg-gray-300 p-1 rounded-md px-5 hover:bg-gray-200">Buy Now</button>
                                <p className="text-base font-semibold group-hover:text-green-400">Price: ${product.price}</p>
                            </div>
                        </div>
                        </div>)
                    }
                    {/* single product */}
                </div>
            </div>
        </section>
    );
};

export default ShopPage;