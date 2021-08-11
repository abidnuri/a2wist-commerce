import React from 'react';

const UploadProduct = () => {
    // const [productData, setProductData] = useState({})
    const handleSubmit = e => {
        console.log(e.target.name);
        e.preventDefault();
    }
    return (
        <div className="m-auto bg-yellow-200 lg:w-2/5 p-6 rounded-3xl w-full">
            <h1 className="text-2xl font-semibold text-gray-800">Upload a product</h1>
                <form onSubmit={handleSubmit} >

                    <input type="text" name="title" className="px-5 bg-gray-100 rounded-lg h-8 block m-auto my-5 focus:outline-none" placeholder="Product title" />
                    <input type="number" name="price" className="px-5 bg-gray-100 rounded-lg h-8 block m-auto my-5 focus:outline-none" placeholder="Enter regular price" />
                    <input type="number" name="stock" className="px-5 bg-gray-100 rounded-lg h-8 block m-auto my-5 focus:outline-none" placeholder="Enter total stock" />
                    <input type="text" name="description" className="px-5 bg-gray-100 rounded-lg h-8 block m-auto my-5 focus:outline-none" placeholder="Product description" />
                    <input type="file" name="product_img" placeholder="upload product sample image" className="block m-auto my-5 focus:outline-none" />
                    <button className="bg-gray-400 p-2 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">Submit</button>
                    
                </form>
        </div>
    );
};

export default UploadProduct;