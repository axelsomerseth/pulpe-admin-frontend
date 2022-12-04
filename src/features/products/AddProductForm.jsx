import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addNewProduct } from "./productsSlice";
import SelectCategory from "../../components/SelectCategory";

function AddProductForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const canSave =
    [name, description, price, stock, categoryId].every(Boolean) &&
    addRequestStatus === "idle";

  const onModalClose = () => navigate(-1);
  const onModalSaveChanges = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(
          addNewProduct({
            name,
            description,
            price: parseFloat(price),
            stock: parseInt(stock),
            categoryId: parseInt(categoryId),
          })
        ).unwrap();
        setName("");
        setDescription("");
        setPrice(0);
        setStock(0);
        setCategoryId(0);
      } catch (error) {
        console.log("Failed to save the product: ", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
    navigate(-1);
  };

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
          <form>
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productStock" className="form-label">
                Stock
              </label>
              <input
                type="text"
                className="form-control"
                id="productStock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <SelectCategory
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            />
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

export default AddProductForm;
