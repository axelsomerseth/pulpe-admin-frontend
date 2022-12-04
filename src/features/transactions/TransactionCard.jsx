import React from "react";
import Card from "react-bootstrap/Card";
import formatRelative from "date-fns/formatRelative";
import { useSelector } from "react-redux";
import { selectProductById } from "../products/productsSlice";

function TransactionCard({ transaction }) {
  const movements = {
    0: "❌ Invalid",
    1: "⬇️ In",
    2: "⬆️ Out",
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
        </Card.Body>
        <Card.Footer className="text-muted">
          Created {formatRelative(new Date(transaction.createdAt), new Date())}
        </Card.Footer>
      </Card>
    </>
  );
}

export default TransactionCard;
