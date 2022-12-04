import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addNewCategory } from "./categoriesSlice";

function AddCategoryForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);

  const canSave =
    [name, description].every(Boolean) && addRequestStatus === "idle";

  const onModalClose = () => navigate(-1);
  const onModalSaveChanges = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewCategory({ name, description })).unwrap();
        resetForm();
      } catch (error) {
        console.error("Failed to save the category: ", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
    navigate(-1);
  };

  const resetForm = () => {
    setName("");
    setDescription("");
  };

  // TODO: migrate this markup to react-bootstrap.
  return (
    <section>
      <Modal
        show={true}
        onHide={onModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                value={name}
                onChange={onNameChanged}
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
                onChange={onDescriptionChanged}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onModalSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default AddCategoryForm;
