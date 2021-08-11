import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";

export default createStore(Reducers, compose(applyMiddleware(thunk)));
