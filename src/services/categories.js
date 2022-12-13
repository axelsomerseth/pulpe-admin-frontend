import { BACKEND_API_BASE_URL } from ".";
import { getUserFromLocalStorage } from "../utils/auth";

const listCategories = async () => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
  };
  const response = await fetch(`${BACKEND_API_BASE_URL}/categories/`, options);
  const responseBody = await response.json();
  return responseBody.data;
};

const getCategoryById = async (categoryId) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/categories/${categoryId}`,
    options
  );
  const responseBody = await response.json();
  return responseBody;
};

const createCategory = async (category) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
    body: JSON.stringify(category),
  };
  const response = await fetch(`${BACKEND_API_BASE_URL}/categories/`, options);
  const responseBody = await response.json();
  return responseBody;
};

const updateCategory = async (category) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
    body: JSON.stringify(category),
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/categories/${category.id}`,
    options
  );
  const responseBody = await response.json();
  return responseBody;
};

const deleteCategory = async (categoryId) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Basic " + user.authdata,
    },
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/categories/${categoryId}`,
    options
  );
  return response;
};

export {
  listCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
