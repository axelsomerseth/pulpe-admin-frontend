import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { selectProductById } from "./productsSlice";
import SelectCategory from "../../components/SelectCategory";

function SingleProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { productId } = params;

  const product = useSelector((state) => selectProductById(state, productId));

  const onModalClose = () => navigate(-1);

  return (
    <section>
      <Modal
        show={true}
        onHide={onModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="productId" className="form-label">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                id="productId"
                value={product.id}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={product.name}
                readOnly
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
                value={product.description}
                readOnly
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
                value={product.price}
                readOnly
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
                value={product.stock}
                readOnly
              />
            </div>
            <SelectCategory value={product.categoryId} disabled={true} />
            <div className="mb-3">
              <label htmlFor="productCreatedAt" className="form-label">
                Created At
              </label>
              <input
                type="text"
                className="form-control"
                id="productCreatedAt"
                value={product.createdAt ? new Date(product.createdAt) : ""}
                readOnly
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default SingleProductPage;
