import { BACKEND_API_BASE_URL } from ".";

const listCategories = () => {
  fetch(`${BACKEND_API_BASE_URL}/categories/`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

const getCategoryById = (categoryId) => {
  fetch(`${BACKEND_API_BASE_URL}/products/${categoryId}`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

const addCategory = () => {};

const editCategory = () => {};

const removeCategory = () => {};

export {
  listCategories,
  getCategoryById,
  addCategory,
  editCategory,
  removeCategory,
};
