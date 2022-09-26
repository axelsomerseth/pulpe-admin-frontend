import React from "react";
import ProductCard from "./ProductCard";

function ProductCardsList({ products = [] }) {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="col mt-2 mb-2">
            <ProductCard product={product} />
          </div>
        );
      })}
    </>
  );
}

export default ProductCardsList;
