import {
  ADD_TO_CART,
  LOAD_PRODUCT,
  REMOVE_FROM_CART,
} from "../Actions/productActions";

const initialState = {
  products: [],
  cart: [],
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return { ...state, products: action.products };
    case ADD_TO_CART:
      const newCart = [...state.cart, action.product];
      return { ...state, cart: newCart };
    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.id
      );
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default productReducers;
