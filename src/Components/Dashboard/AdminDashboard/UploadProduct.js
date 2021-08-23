import React from 'react';

const UploadProduct = () => {
    // const [productData, setProductData] = useState({})
    const handleSubmit = e => {
        console.log(e);
        e.preventDefault();
    }
    const customStyle ={
        backgroundColor: '#cfd8dc'
    }
    return (
        <div className="m-auto bg-gray-100 lg:w-2/5 p-6 rounded-3xl w-full shadow-xl" style={{backgroundColor: '#90a4ae'}}>
            <h1 className="text-2xl font-semibold text-gray-800">Upload a product</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" className="px-5 rounded-lg h-8 block m-auto my-5 focus:outline-none placeholder-gray-600" style={customStyle} placeholder="Product title" required />
                    <input type="number" name="price" className="px-5 rounded-lg h-8 block m-auto my-5 focus:outline-none placeholder-gray-600" style={customStyle} placeholder="Enter regular price" required />
                    <input type="number" name="stock" className="px-5 rounded-lg h-8 block m-auto my-5 focus:outline-none placeholder-gray-600" style={customStyle} placeholder="Enter total stock" required />
                    <input type="text" name="description" className="px-5 rounded-lg h-8 block m-auto my-5 focus:outline-none placeholder-gray-600" style={customStyle} placeholder="Product description" required />
                    <select name="category" id="category" className="w-2/5 bg-gray-300 rounded-lg p-2" required>
                        <option value="t-shirt">T Shirt</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Shirt">Shirt</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                    
                    <input type="file" name="product_img" placeholder="upload product sample image" className="block m-auto my-5 focus:outline-none mx-auto w-1/2" />
                    <button className="bg-gray-700 text-white p-2 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">Submit</button>
                    
                </form>
        </div>
    );
};

export default UploadProduct;