import { BACKEND_API_BASE_URL } from ".";

const listProducts = () => {
  fetch(`${BACKEND_API_BASE_URL}/products/`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

const getProductById = (productId) => {
  fetch(`${BACKEND_API_BASE_URL}/products/${productId}`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

const addProduct = () => {};

const editProduct = () => {};

const removeProduct = () => {};

export { listProducts, getProductById, addProduct, editProduct, removeProduct };
