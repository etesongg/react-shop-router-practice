import { createStore, applyMiddleware  } from "redux";
import { thunk } from 'redux-thunk'
import productReducer from "./reducer/productReducer";

let store = createStore(productReducer, applyMiddleware(thunk))

export default store

