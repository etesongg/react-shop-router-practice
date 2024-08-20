import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} />
      <div className="choice">{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new">{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
