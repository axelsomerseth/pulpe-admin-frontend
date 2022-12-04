import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById, editProduct } from "./productsSlice";
import SelectCategory from "../../components/SelectCategory";

function EditProductForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { productId } = params;

  const product = useSelector((state) => selectProductById(state, productId));

  const [name, setName] = useState(product.name || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(product.price || 0);
  const [stock, setStock] = useState(product.stock || 0);
  const [categoryId, setCategoryId] = useState(product.categoryId || 0);
  const [editRequestStatus, setEditRequestStatus] = useState("idle");

  const canUpdate =
    [name, description, price, stock, categoryId].every(Boolean) &&
    editRequestStatus === "idle";

  const onModalClose = () => navigate(-1);
  const onModalSaveChanges = async () => {
    if (canUpdate) {
      try {
        setEditRequestStatus("pending");
        await dispatch(
          editProduct({
            id: parseInt(productId),
            name,
            description,
            price: parseFloat(price),
            stock: parseInt(stock),
            categoryId: parseInt(categoryId),
          })
        );
        setName("");
        setDescription("");
        setPrice(0);
        setStock(0);
        setCategoryId(0);
      } catch (error) {
        console.error("Failed to update the product: ", error);
      } finally {
        setEditRequestStatus("idle");
      }
    }
    navigate(`/products`);
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
          <Modal.Title>Edit a Product</Modal.Title>
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

export default EditProductForm;
