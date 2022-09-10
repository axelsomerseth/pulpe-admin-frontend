import React from "react";
import { useParams } from "react-router-dom";

function Category() {
  let params = useParams();

  return (
    <>
      <h1>Category: {params.categoryId}</h1>
    </>
  );
}

export default Category;
