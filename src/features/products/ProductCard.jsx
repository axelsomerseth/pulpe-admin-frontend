import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import formatRelative from "date-fns/formatRelative";
import { useSelector } from "react-redux";
import { selectCategoryById } from "../categories/categoriesSlice";

function ProductCard({ product }) {
  const category = useSelector((state) =>
    selectCategoryById(state, product.categoryId)
  );

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.description || ""}
        </Card.Subtitle>
        <Card.Text> Category: {category.name} </Card.Text>
        <Card.Text> Price: $ {product.price} </Card.Text>
        <Card.Text> Stock: {product.stock} units</Card.Text>
        <Link to={`/products/${product.id}`} className="btn btn-primary m-1">
          View Details
        </Link>
        <Link
          to={`/products/${product.id}/edit`}
          className="btn btn-secondary m-1"
        >
          Edit
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        Created {formatRelative(new Date(product.createdAt), new Date())}
        {product.updatedAt &&
          " — Updated " +
            formatRelative(new Date(product.updatedAt), new Date())}
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;
