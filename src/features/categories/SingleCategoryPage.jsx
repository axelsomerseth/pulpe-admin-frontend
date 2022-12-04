import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { selectCategoryById } from "./categoriesSlice";

function SingleCategoryPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { categoryId } = params;

  const category = useSelector((state) =>
    selectCategoryById(state, categoryId)
  );

  const onModalClose = () => navigate(-1);

  if (!category) {
    return (
      <section>
        <h2>Category not found!</h2>
      </section>
    );
  }

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
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="categoryId" className="form-label">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryId"
                value={category.id}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                value={category.name}
                readOnly
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
                value={category.description}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoryCreatedAt" className="form-label">
                Created At
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryCreatedAt"
                value={category.createdAt ? new Date(category.createdAt) : ""}
                readOnly
              />
            </div>
            {category.updatedAt && (
              <div className="mb-3">
                <label htmlFor="categoryUpdatedAt" className="form-label">
                  Updated At
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryUpdatedAt"
                  value={category.updatedAt ? new Date(category.updatedAt) : ""}
                  readOnly
                />
              </div>
            )}
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

export default SingleCategoryPage;
