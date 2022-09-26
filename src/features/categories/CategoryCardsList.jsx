import React from "react";
import CategoryCard from "./CategoryCard";

function CategoryCardsList({ categories = [] }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <div key={category.id} className="col mt-2 mb-2">
            <CategoryCard category={category} />
          </div>
        );
      })}
    </>
  );
}

export default CategoryCardsList;
