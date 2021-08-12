export const LOAD_PRODUCT = "LOAD_PRODCUT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const loadProduct = (products) => ({ type: LOAD_PRODUCT, products });

export const addToCart = (product) => ({ type: ADD_TO_CART, product });

export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id });
