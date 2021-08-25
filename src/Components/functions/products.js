import axios from "axios";

export const createProduct = async (products, authtoken) =>
    await axios.post('http://localhost:3333/products/allproducts', products, {
        headers: {
            authtoken,
        },
    });
