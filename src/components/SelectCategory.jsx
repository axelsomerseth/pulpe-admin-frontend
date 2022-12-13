import React from "react";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../features/categories/categoriesSlice";

function SelectCategory({ value, onChange, disabled = false }) {
  const categories = useSelector(selectAllCategories);

  return (
    <Form.Group className="mb-3" controlId="category">
      <Form.Label>Category</Form.Label>
      <Form.Select
        aria-label="Select Category"
        value={value}
        onChange={(e) => onChange && onChange(e)}
        required
        disabled={disabled}
      >
        <option defaultValue value="">
          Select one category
        </option>
        {categories
          ? categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {"ID " + category.id + " - " + category.name}
                </option>
              );
            })
          : [<option disabled>"No categories"</option>]}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectCategory;
