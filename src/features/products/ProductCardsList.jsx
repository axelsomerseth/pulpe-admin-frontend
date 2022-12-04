import React from "react";
import ProductCard from "./ProductCard";
import Col from "react-bootstrap/Col";

function ProductCardsList({ products = [] }) {
  return (
    <>
      {products.map((product) => {
        return (
          <Col key={product.id} xs={12} md={6} className="mt-2 mb-2">
            <ProductCard product={product} />
          </Col>
        );
      })}
    </>
  );
}

export default ProductCardsList;
