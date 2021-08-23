import axios from 'axios';
import React from 'react';

const AllProducts = () => {
    const token = localStorage.getItem('token');
    axios.get('https://eswap-ecommerce.herokuapp.com/product/myProducts', {token})
    .then(res => console.log(res.data))
    return (
        <div>
            <table className="p-5 w-full lg:w-3/5 m-auto bg-yellow-100 table-auto border-collapse border border-green-800">
                <tr className="bg-emerald-200">
                    <th>Title</th>
                    <th>Price</th>
                    <th>Imgae</th>
                    <th>Stock</th>
                </tr>
                <tr>
                    <td>Prodcut1</td>
                    <td>$210</td>
                    <td>Image1</td>
                    <td>980</td>
                </tr>
            </table>
        </div>
    );
};

export default AllProducts;