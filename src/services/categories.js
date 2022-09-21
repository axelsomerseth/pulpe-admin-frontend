import { BACKEND_API_BASE_URL } from ".";

const listCategories = async () => {
  const response = await fetch(`${BACKEND_API_BASE_URL}/categories/`, {
    method: "GET",
  });
  const responseBody = await response.json();
  return responseBody.data;
};

const getCategoryById = async (categoryId) => {
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/categories/${categoryId}`,
    {
      method: "GET",
    }
  );
  const responseBody = await response.json();
  return responseBody;
};

const createCategory = async (category) => {
  const response = await fetch(`${BACKEND_API_BASE_URL}/categories/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  const responseBody = await response.json();
  return responseBody;
};

const updateCategory = async (category) => {
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/categories/${category.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }
  );
  const responseBody = await response.json();
  return responseBody;
};

const deleteCategory = async (categoryId) => {
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/categories/${categoryId}`,
    {
      method: "DELETE",
    }
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
