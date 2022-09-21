import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { listProducts } from "../../services/products";
import { If, Then } from "react-if";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const responseBody = await listProducts();
      setProducts(responseBody.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Outlet />
      <div className="row mt-3 mb-3">
        <div className="col d-flex justify-content-center">
          <Link className="btn btn-primary" to="/products/new">
            New Product
          </Link>
        </div>
      </div>
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
                    <p className="card-text">Category: {product.category}</p>
                    <p className="card-text">Price: {product.price}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    <p className="card-text">
                      Created At: {product.created_at}
                    </p>
                    <If condition={product.updated_at}>
                      <Then>
                        <p className="card-text">
                          Updated At: {product.updated_at}
                        </p>
                      </Then>
                    </If>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
