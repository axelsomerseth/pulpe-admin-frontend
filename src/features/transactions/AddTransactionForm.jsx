import React, { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import SelectProduct from "../../components/SelectProduct";
import { useDispatch } from "react-redux";
import { addNewTransaction } from "./transactionsSlice";

function AddTransactionForm() {
  const [showAddForm, setShowAddForm] = useOutletContext();
  const [type, setType] = useState("");
  const [movement, setMovement] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [productId, setProductId] = useState("");
  const [requestStatus, setRequestStatus] = useState("idle");
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();

  const canSave =
    [type, movement, quantity, description, productId].every(Boolean) &&
    requestStatus === "idle";

  const resetForm = () => {
    setType("");
    setMovement("");
    setQuantity("");
    setDescription("");
    setProductId("");
  };

  const handleClose = () => {
    resetForm();
    setShowAddForm(false);
  };

  const handleSave = async (event) => {
    if (canSave) {
      event.preventDefault();
      try {
        setRequestStatus("pending");
        await dispatch(
          addNewTransaction({
            type,
            movement: parseInt(movement),
            quantity: parseInt(quantity),
            description,
            productId: parseInt(productId),
          })
        ).unwrap();
        resetForm();
      } catch (error) {
        console.error("Failed to save the transaction: ", error);
        setAlertMessage(error.message);
      } finally {
        setRequestStatus("idle");
        setShowAddForm(false);
      }
    } else {
      setAlertMessage("Please fill in all required fields.");
    }
  };

  return (
    <section>
      <Modal show={showAddForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="addTransactionForm">
            <Form.Group className="mb-3">
              <Form.Label>Transaction Type</Form.Label>
              <Form.Select
                aria-label="Transaction type select"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option defaultValue value="">
                  Select a transaction type
                </option>
                <optgroup label="Inbound and outbound transactions">
                  <option value="Invalid">Invalid</option>
                  <option value="Adjustment">Adjustment</option>
                  <option value="Transfers">Transfer</option>
                </optgroup>
                <optgroup label="Only Inbound transactions">
                  <option value="Receipts">Receipt</option>
                  <option value="Returns">Return</option>
                  <option value="ItemsAddedThroughCycleCounts">
                    Items added through cycle counts
                  </option>
                </optgroup>
                <optgroup label="Only Outbound transactions">
                  <option value="Selling">Selling</option>
                  <option value="Issues">Issue</option>
                  <option value="ItemsRemovedThroughCycleCounts">
                    Items removed through cycle counts
                  </option>
                </optgroup>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movement</Form.Label>
              <Form.Select
                aria-label="Movement select"
                value={movement}
                onChange={(e) => setMovement(e.target.value)}
                required
              >
                <option defaultValue value="">
                  Select a movement
                </option>
                <option value={0}>Invalid</option>
                <option value={1}>In</option>
                <option value={2}>Out</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="quantity">Quantity</Form.Label>
              <Form.Control
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <SelectProduct
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </Form>
          {alertMessage && (
            <Container>
              <Row>
                <Col>
                  <Alert variant="danger">{alertMessage}</Alert>
                </Col>
              </Row>
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Link
            className="btn btn-secondary"
            to="/transactions"
            onClick={handleClose}
          >
            Close
          </Link>
          <Button
            variant="primary"
            onClick={handleSave}
            form="addTransactionForm"
            type="submit"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default AddTransactionForm;
