import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import formatRelative from "date-fns/formatRelative";

function ProductCard({ product }) {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.description || ""}
        </Card.Subtitle>
        <Card.Text> Category: {product.categoryId} </Card.Text>
        <Card.Text> Price: {product.price} </Card.Text>
        <Card.Text> Category: {product.categoryId} </Card.Text>
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
      </Card.Footer>
      {product.updatedAt && (
        <Card.Footer className="text-muted">
          Updated {formatRelative(new Date(product.updatedAt), new Date())}
        </Card.Footer>
      )}
    </Card>
  );
}

export default ProductCard;
