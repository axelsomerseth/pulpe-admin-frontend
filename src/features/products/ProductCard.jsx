import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {product.description || ""}
        </h6>
        <p className="card-text">Category: {product.categoryId}</p>
        <p className="card-text">Price: {product.price}</p>
        <p className="card-text">Stock: {product.stock}</p>
        <p className="card-text">Created At: {product.createdAt}</p>
        {product.updatedAt && (
          <p className="card-text">Updated At: {product.updatedAt}</p>
        )}
        <Link to={`/products/${product.id}`} className="btn btn-primary m-1">
          View Details
        </Link>
        <Link
          to={`/products/${product.id}/edit`}
          className="btn btn-secondary m-1"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
