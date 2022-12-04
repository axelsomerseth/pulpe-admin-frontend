import React from "react";
import TransactionCard from "./TransactionCard";
import Col from "react-bootstrap/Col";

function TransactionsCardList({ transactions = [] }) {
  return (
    <>
      {transactions.map((transaction) => {
        return (
          <Col key={transaction.id} xs={12} md={6} className="mt-2 mb-2">
            <TransactionCard transaction={transaction} />
          </Col>
        );
      })}
    </>
  );
}

export default TransactionsCardList;
