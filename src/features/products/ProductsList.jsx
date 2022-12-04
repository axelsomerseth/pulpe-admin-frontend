import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectStatus,
  selectError,
  fetchProducts,
} from "./productsSlice";
import { fetchCategories } from "../categories/categoriesSlice";

import ProductCardsList from "./ProductCardsList";
import WithRequestProgress from "../../components/WithRequestProgress";

function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productsStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  // Calling a Higher-Order Component.
  const ProductCardsListWithRequestProgress =
    WithRequestProgress(ProductCardsList);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchCategories());
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  // TODO: migrate this markup to react-bootstrap.
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
      <div className="row row-cols-1 row-cols-md-2 mt-2 mb-2">
        <ProductCardsListWithRequestProgress
          status={productsStatus}
          error={error}
          products={products}
        />
        {/* <Switch>
          <Case condition={productsStatus === "loading"}>
            <div className="col d-flex justify-content-center">
              <Spinner animation="border" role="status"></Spinner>
            </div>
          </Case>
          <Case condition={productsStatus === "succeeded"}>
            <ProductCardsList products={products} />
          </Case>
          <Case condition={productsStatus === "failed"}>
            <div className="col">
              <Alert variant="danger">{error}</Alert>
            </div>
          </Case>
          <Default>
            <div className="col d-flex justify-content-center mt-5">
              <h1 className="h1">No data.</h1>
            </div>
          </Default>
        </Switch> */}
      </div>
    </div>
  );
}

export default ProductsList;
