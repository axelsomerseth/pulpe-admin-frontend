import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function ProductsList() {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col d-flex justify-content-center">
          <h1>Products</h1>
        </div>
      </div>
      <div className="row row-cols-1 mt-2 mb-2">
        {products.length ? (
          products.map((product) => {
            return (
              <div key={product.id} className="col mt-2 mb-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {product.description || ""}
                    </h6>
                    <p className="card-text">Price: {product.price}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default ProductsList;
