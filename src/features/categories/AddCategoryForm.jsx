import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { addNewCategory } from "./categoriesSlice";

function AddCategoryForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const [alertMessage, setAlertMessage] = useState("");

  const canSave =
    [name, description].every(Boolean) && addRequestStatus === "idle";

  const resetForm = () => {
    setName("");
    setDescription("");
  };

  const handleClose = () => {
    resetForm();
    navigate(-1);
  };

  const handleSave = async (event) => {
    if (canSave) {
      event.preventDefault();
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewCategory({ name, description })).unwrap();
        resetForm();
      } catch (error) {
        console.error("Failed to save the category: ", error);
        setAlertMessage(error.message);
      } finally {
        setAddRequestStatus("idle");
        navigate(-1);
      }
    } else {
      setAlertMessage("Please fill in all required fields.");
    }
  };

  // TODO: migrate this markup to react-bootstrap.
  return (
    <section>
      <Modal
        show={true}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="addCategoryForm">
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoryDescription" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </form>
          {alertMessage && <Alert variant="danger">{alertMessage}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            form="addCategoryForm"
            type="submit"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default AddCategoryForm;
