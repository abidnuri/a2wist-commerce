import React from 'react';
import { createProduct } from '../../functions/products'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const initialState = {
    title: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    subs: '',
    shipping: '',
    quantity: '',
    images: [],
    colors: ["Black", "White", "Red", "Yellow", "Blue", "Green",],
    color: '',
}

const UploadProduct = () => {
    const [productData, setProductData] = useState(initialState);
    //Redux
    const { user } = useSelector((state) => ({ ...state }));

    //destructure the productData
    const { title, description, price, categories, category, subs, shipping, quantity, images, colors, color, brands, brand } = productData;

    const handleSubmit = e => {
        console.log(e);
        e.preventDefault();
        createProduct(productData, user.token)
            .then(res => {
                console.log(res);
                window.alert(`"${res.data.title}" is created.`);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
                // if (err.response.status === 400) toast.error(err.response.data);
                toast.error(err.response.data.err);
            })

    }

    const handleChange = e => {
        setProductData({ ...productData, [e.target.name]: e.target.value, });
        console.log(e.target.name, '----', e.target.value);
    }

    const customStyle = {
        backgroundColor: '#cfd8dc'
    }
    return (
        <div className="w-full p-6 m-auto bg-gray-100 shadow-xl lg:w-2/5 rounded-3xl" style={{ backgroundColor: '#90a4ae' }}>
            <h1 className="text-2xl font-semibold text-gray-800">Upload a product</h1>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={handleChange} type="text" name="title" className="block h-8 px-5 m-auto my-5 placeholder-gray-600 rounded-lg focus:outline-none" style={customStyle} placeholder="Product title" required />
                <input value={price} onChange={handleChange} type="number" name="price" className="block h-8 px-5 m-auto my-5 placeholder-gray-600 rounded-lg focus:outline-none" style={customStyle} placeholder="Enter regular price" required />
                <input value={quantity} onChange={handleChange} type="number" name="quantity" className="block h-8 px-5 m-auto my-5 placeholder-gray-600 rounded-lg focus:outline-none" style={customStyle} placeholder="Enter total stock" required />
                <input value={description} onChange={handleChange} type="text" name="description" className="block h-8 px-5 m-auto my-5 placeholder-gray-600 rounded-lg focus:outline-none" style={customStyle} placeholder="Product description" required />
                {/*<select value={brand} onChange={handleChange} name="category" id="category" className="w-2/5 p-2 bg-gray-300 rounded-lg" required>
                    <option value="t-shirt">T Shirt</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Shoes">Shoes</option>
                    </select> <br />*/}                
                <select
                    className="w-2/5 p-2 mt-5 bg-gray-300 rounded-lg"
                    name="shipping"
                    onChange={handleChange}
                >
                    <option>Shipping</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />
                <select
                    className="w-2/5 p-2 mt-5 bg-gray-300 rounded-lg"
                    name="color"
                    onChange={handleChange}
                >
                    <option>Colors</option>
                    {colors.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
                <input value={images} onChange={handleChange} type="file" name="product_img" placeholder="upload product sample image" className="block w-1/2 m-auto mx-auto my-5 focus:outline-none" />
                <button className="p-2 font-semibold text-white transition duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-green-500 hover:text-white">Submit</button>

            </form>
        </div>
    );
};

export default UploadProduct;