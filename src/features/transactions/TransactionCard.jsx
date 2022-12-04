import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { selectProductById } from "../products/productsSlice";

function TransactionCard({ transaction }) {
  const movements = {
    0: "Invalid",
    1: "In",
    2: "Out",
  };
  const product = useSelector((state) =>
    selectProductById(state, transaction.productId)
  );
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{transaction.type}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {movements[transaction.movement]} Movement
          </Card.Subtitle>
          <Card.Text>Description: {transaction.description}</Card.Text>
          <Card.Text>Product: {product.name}</Card.Text>
          <Card.Text>Quantity: {transaction.quantity}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Created at: {transaction.createdAt}
        </Card.Footer>
      </Card>
    </>
  );
}

export default TransactionCard;
