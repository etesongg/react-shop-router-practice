import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "../redux/reducers/authenticateReducer";
import productReducer from "../redux/reducers/productReducer";

// let store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
    reducer:{
        auth: authenticateReducer,
        product: productReducer
    }
})

export default store;
