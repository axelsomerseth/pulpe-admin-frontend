import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllTransactions,
  selectStatus,
  selectError,
  fetchTransactions,
} from "./transactionsSlice";
import { fetchProducts } from "../products/productsSlice";
import TransactionsCardList from "./TransactionsCardList";
import WithRequestProgress from "../../components/WithRequestProgress";

function TransactionsList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const handleShow = () => setShowAddForm(true);

  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransactions);
  const transactionsStatus = useSelector(selectStatus);
  const error = useSelector(selectError);

  // Calling a Higher-Order Component.
  const TransactionsCardListWithRequestProgress =
    WithRequestProgress(TransactionsCardList);

  useEffect(() => {
    if (transactionsStatus === "idle") {
      dispatch(fetchProducts());
      dispatch(fetchTransactions());
    }
  }, [transactionsStatus, dispatch]);

  return (
    <Container>
      <Outlet context={[showAddForm, setShowAddForm]} />
      <Row className="mt-3 mb-3">
        <Col className="d-flex justify-content-center">
          <Link
            className="btn btn-primary"
            to="/transactions/new"
            onClick={handleShow}
          >
            New Transaction
          </Link>
        </Col>
      </Row>
      <Row className="mt-3 mb-3">
        <Col className="d-flex justify-content-center">
          <h1>Transactions</h1>
        </Col>
      </Row>
      <Row className="mt-3 mb-3">
        <Col className="d-flex justify-content-center">
          <TransactionsCardListWithRequestProgress
            status={transactionsStatus}
            error={error}
            transactions={transactions}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TransactionsList;
