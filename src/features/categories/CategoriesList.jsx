import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllCategories,
  fetchCategories,
  selectStatus,
  selectError,
} from "./categoriesSlice";

import CategoryCardsList from "./CategoryCardsList";
import WithRequestProgress from "../../components/WithRequestProgress";

function CategoriesList() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const categoriesStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  // Calling a Higher-Order Component.
  const CategoryCardsListWithRequestProgress =
    WithRequestProgress(CategoryCardsList);

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
      <div className="row row-cols-1 row-cols-md-2 mt-2 mb-2">
        <CategoryCardsListWithRequestProgress
          status={categoriesStatus}
          error={error}
          categories={categories}
        />
      </div>
    </div>
  );
}

export default CategoriesList;
