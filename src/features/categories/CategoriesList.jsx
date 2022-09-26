import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllCategories,
  fetchCategories,
  selectStatus,
  selectError,
} from "./categoriesSlice";
import { Switch, Case, Default } from "react-if";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import CategoryCard from "./CategoryCard";

function CategoriesList() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const categoriesStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [categoriesStatus, dispatch]);

  return (
    <div className="container">
      <Outlet />
      <div className="row mt-3 mb-3">
        <div className="col d-flex justify-content-center">
          <Link className="btn btn-primary" to="/categories/new">
            New Category
          </Link>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col d-flex justify-content-center">
          <h1>Categories</h1>
        </div>
      </div>
      <div className="row row-cols-1 mt-2 mb-2">
        <Switch>
          <Case condition={categoriesStatus === "loading"}>
            <div className="col d-flex justify-content-center">
              <Spinner animation="border" role="status"></Spinner>
            </div>
          </Case>
          <Case condition={categoriesStatus === "succeeded"}>
            {categories.map((category) => {
              return (
                <div key={category.id} className="col mt-2 mb-2">
                  <CategoryCard category={category} />
                </div>
              );
            })}
          </Case>
          <Case condition={categoriesStatus === "failed"}>
            <div className="col">
              <Alert variant="danger">{error}</Alert>
            </div>
          </Case>
          <Default>
            <div className="col d-flex justify-content-center mt-5">
              <h1 className="h1">No data.</h1>
            </div>
          </Default>
        </Switch>
      </div>
    </div>
  );
}

export default CategoriesList;
