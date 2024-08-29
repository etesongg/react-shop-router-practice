import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
};

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_PRODUCT_DETAIL_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.productList = action.payload.data;
    },
    getDetailProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer; // reducers아님 결국에는 하나의 큰 reducer가 나오기 때문
