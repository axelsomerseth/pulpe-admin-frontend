import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function TransactionsList() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleShow = () => setShowAddForm(true);

  return (
    <div className="container">
      <Outlet context={[showAddForm, setShowAddForm]} />
      <div className="row mt-3 mb-3">
        <div className="col d-flex justify-content-center">
          <Link
            className="btn btn-primary"
            to="/transactions/new"
            onClick={handleShow}
          >
            New Transaction
          </Link>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col d-flex justify-content-center">
          <h1>Transactions</h1>
        </div>
      </div>
      <div className="row row-cols-1 mt-2 mb-2">
        {/* Render with HOC "WithRequestProgress" */}
      </div>
    </div>
  );
}

export default TransactionsList;
