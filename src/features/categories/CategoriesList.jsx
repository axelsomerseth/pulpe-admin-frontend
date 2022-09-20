import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllCategories, fetchCategories } from "./categoriesSlice";
import { Switch, Case, Default } from "react-if";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

function CategoriesList() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);

  const categoriesStatus = useSelector((state) => state.categories.status);
  const errors = useSelector((state) => state.categories.error);

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
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{category.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {category.description || ""}
                      </h6>
                      <Link
                        to={`/categories/${category.id}`}
                        className="btn btn-primary m-1"
                      >
                        View details
                      </Link>
                      <Link
                        to={`/categories/${category.id}/edit`}
                        className="btn btn-secondary m-1"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Case>
          <Case condition={categoriesStatus === "failed"}>
            <div className="col">
              <Alert variant="danger">{errors}</Alert>
            </div>
          </Case>
          <Default>
            <div className="col">No data</div>
          </Default>
        </Switch>
      </div>
    </div>
  );
}

export default CategoriesList;
