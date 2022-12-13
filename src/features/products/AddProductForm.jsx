import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { addNewProduct } from "./productsSlice";
import SelectCategory from "../../components/SelectCategory";

function AddProductForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [requestStatus, setRequestStatus] = useState("idle");
  const [alertMessage, setAlertMessage] = useState("");

  const canSave =
    [name, description, price, stock, categoryId].every(Boolean) &&
    requestStatus === "idle";

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setCategoryId("");
  };

  const onModalClose = () => {
    resetForm();
    navigate(-1);
  };

  const handleSave = async (event) => {
    if (canSave) {
      event.preventDefault();
      try {
        setRequestStatus("pending");
        await dispatch(
          addNewProduct({
            name,
            description,
            price: parseFloat(price),
            stock: parseInt(stock),
            categoryId: parseInt(categoryId),
          })
        ).unwrap();
        resetForm();
      } catch (error) {
        console.error("Failed to save the product: ", error);
        setAlertMessage(error.message);
      } finally {
        setRequestStatus("idle");
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
        onHide={onModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="needs-validation" id="addProductForm">
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="productDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Price ($)
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productStock" className="form-label">
                Stock (units)
              </label>
              <input
                type="number"
                className="form-control"
                id="productStock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </div>
            <SelectCategory
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            />
          </form>
          {alertMessage && <Alert variant="danger">{alertMessage}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onModalClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            form="addProductForm"
            type="submit"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default AddProductForm;
