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
    `${BACKEND_API_BASE_URL}/products/${categoryId}`,
    {
      method: "GET",
    }
  );
  const responseBody = await response.json();
  return responseBody;
};

const createCategory = async (category) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  };
  const response = await fetch(`${BACKEND_API_BASE_URL}/categories/`, options);
  const responseBody = await response.json();
  return responseBody;
};

const updateCategory = async (category) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
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
  const options = {
    method: "DELETE",
  };
  await fetch(`${BACKEND_API_BASE_URL}/categories/${categoryId}`, options);
  return { id: categoryId, deleted: true };
};

export {
  listCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
