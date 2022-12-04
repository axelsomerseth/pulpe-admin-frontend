import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionsCardList({ transactions = [] }) {
  return (
    <>
      {transactions.map((transaction) => {
        return (
          <div key={transaction.id} className="col-12 col-md-6 mt-2 mb-2">
            <TransactionCard transaction={transaction} />
          </div>
        );
      })}
    </>
  );
}

export default TransactionsCardList;
