import { combineReducers } from "redux";
import productReducers from "./productReducers";
import userReducers from "./userReducers";

export default combineReducers({
  user: userReducers,
  products: productReducers,
});
