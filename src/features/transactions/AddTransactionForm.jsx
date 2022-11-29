import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddTransactionForm() {
  const [showAddForm, setShowAddForm] = useOutletContext();

  const handleClose = () => setShowAddForm(false);

  return (
    <section>
      <Modal show={showAddForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Link
            className="btn btn-secondary"
            to="/transactions"
            onClick={handleClose}
          >
            Close
          </Link>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default AddTransactionForm;
