import React from "react";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../features/categories/categoriesSlice";

function SelectCategory({ value, onChange, disabled = false }) {
  const categories = useSelector(selectAllCategories);

  return (
    <Form.Group className="mb-3" controlId="productCategory">
      <Form.Label>Category</Form.Label>
      <Form.Select
        aria-label="Select Category"
        value={value}
        onChange={(e) => onChange && onChange(e)}
        required
        disabled={disabled}
      >
        <option>Select one category</option>
        {categories &&
          categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectCategory;
