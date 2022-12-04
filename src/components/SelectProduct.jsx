import React from "react";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../features/products/productsSlice";

function SelectProduct({ value, onChange, disabled = false }) {
  const products = useSelector(selectAllProducts);

  return (
    <Form.Group className="mb-3" controlId="product">
      <Form.Label>Product</Form.Label>
      <Form.Select
        aria-label="Select Product"
        value={value}
        onChange={(e) => onChange && onChange(e)}
        required
        disabled={disabled}
      >
        <option>Select a product</option>
        {products
          ? products.map((product) => {
              return (
                <option key={product.id} value={product.id}>
                  {"ID " + product.id + " - " + product.name}
                </option>
              );
            })
          : [<option disabled>"No products"</option>]}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectProduct;
