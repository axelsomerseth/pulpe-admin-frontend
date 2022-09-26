import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{category.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {category.description || ""}
        </h6>
        <Link to={`/categories/${category.id}`} className="btn btn-primary m-1">
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
  );
}

export default CategoryCard;
