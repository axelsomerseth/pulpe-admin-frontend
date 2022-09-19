import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function CategoriesList() {
  const categories = useSelector((state) => state.categories);

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
        {categories.length ? (
          categories.map((category) => {
            return (
              <div key={category.id} className="col mt-2 mb-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {category.description || ""}
                    </h6>
                    <Link to={`/categories/${category.id}`}>View details</Link>
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

export default CategoriesList;
