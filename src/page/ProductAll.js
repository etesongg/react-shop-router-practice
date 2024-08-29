import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux"

const ProductAll = () => {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state)=>state.product.productList) // 리듀서를 합쳐서 객체로 만들었기때문에 중간에 키값 product가 들어간거임
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch()
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery)) // 바로 스토어에 가는게 아니라 actions->productAction->getProducts(미들웨어)를 건너감.
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="product-all-margin">
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
