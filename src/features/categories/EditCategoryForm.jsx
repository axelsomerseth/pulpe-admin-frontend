import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { categoryEdited } from "./categoriesSlice";

function EditCategoryForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { categoryId } = params;

  const category = useSelector((state) =>
    state.categories.find((category) => category.id === parseInt(categoryId))
  );

  const [name, setName] = useState(category.name || "");
  const [description, setDescription] = useState(category.description || "");

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);

  const onModalClose = () => navigate(-1);
  const onModalSaveChanges = () => {
    if (categoryId && name && description) {
      dispatch(
        categoryEdited({
          id: parseInt(categoryId),
          name,
          description,
        })
      );
      navigate(`/categories`);
    }
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
          <Modal.Title>Edit Category</Modal.Title>
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

export default EditCategoryForm;
