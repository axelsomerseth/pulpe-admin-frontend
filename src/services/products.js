import { BACKEND_API_BASE_URL } from ".";
import { getUserFromLocalStorage } from "../utils/auth";

const listProducts = async () => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
  };
  const response = await fetch(`${BACKEND_API_BASE_URL}/products/`, options);
  const responseBody = await response.json();
  return responseBody.data;
};

const getProductById = async (productId) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/products/${productId}`,
    options
  );
  const responseBody = await response.json();
  return responseBody;
};

const createProduct = async (product) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
    body: JSON.stringify(product),
  };
  const response = await fetch(`${BACKEND_API_BASE_URL}/products/`, options);
  const responseBody = await response.json();
  return responseBody;
};

const updateProduct = async (product) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
    body: JSON.stringify(product),
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/products/${product.id}`,
    options
  );
  const responseBody = await response.json();
  return responseBody;
};

const deleteProduct = async (productId) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Basic " + user.authdata,
    },
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/products/${productId}`,
    options
  );
  return response;
};

export {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
