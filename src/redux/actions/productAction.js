import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
    return async(dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/etesongg/react-shop-router-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
    dispatch(productActions.getAllProduct({data})) // 더이상 action 객체를 만들어 줄 필요 없이 그냥 action 함수 호출
    }
}

function getProductDetail(id) {
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/etesongg/react-shop-router-practice/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type:"GET_PRODUCT_DETAIL_SUCCESS", payload:{data}})
        dispatch(productActions.getDetailProduct({data}))
    }
}

export const productAction={getProducts, getProductDetail}