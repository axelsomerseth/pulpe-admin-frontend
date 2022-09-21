import { BACKEND_API_BASE_URL } from ".";

const listProducts = async () => {
  const response = await fetch(`${BACKEND_API_BASE_URL}/products/`, {
    method: "GET",
  });
  const responseBody = await response.json();
  return responseBody;
};

const getProductById = async (productId) => {
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/products/${productId}`,
    {
      method: "GET",
    }
  );
  const responseBody = await response.json();
  return responseBody;
};

const createProduct = async (product) => {
  const response = await fetch(`${BACKEND_API_BASE_URL}/products/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const responseBody = await response.json();
  return responseBody;
};

const updateProduct = async (product) => {
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/products/${product.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
  );
  const responseBody = await response.json();
  return responseBody;
};

const deleteProduct = async (productId) => {
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/products/${productId}`,
    {
      method: "GET",
    }
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
