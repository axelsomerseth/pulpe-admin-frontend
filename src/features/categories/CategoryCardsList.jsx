import React from "react";
import CategoryCard from "./CategoryCard";
import Col from "react-bootstrap/Col";

function CategoryCardsList({ categories = [] }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <Col key={category.id} xs={12} md={6} className="mt-2 mb-2">
            <CategoryCard category={category} />
          </Col>
        );
      })}
    </>
  );
}

export default CategoryCardsList;
