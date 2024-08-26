import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux"

const ProductAll = () => {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector(state=>state.productList)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch()
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery))
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
