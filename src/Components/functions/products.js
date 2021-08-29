import axios from "axios";

export const createProduct = async (products, authtoken) =>
    await axios.post('https://mysterious-plains-14650.herokuapp.com/products/allproducts', products, {
        headers: {
            authtoken,
        },
    });
