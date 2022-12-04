import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import formatRelative from "date-fns/formatRelative";

function CategoryCard({ category }) {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {category.description || ""}
        </Card.Subtitle>
        <Link to={`/categories/${category.id}`} className="btn btn-primary m-1">
          View details
        </Link>
        <Link
          to={`/categories/${category.id}/edit`}
          className="btn btn-secondary m-1"
        >
          Edit
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        Created {formatRelative(new Date(category.createdAt), new Date())}
      </Card.Footer>
    </Card>
  );
}

export default CategoryCard;
