import { BACKEND_API_BASE_URL } from ".";
import { getUserFromLocalStorage } from "../utils/auth";

const listTransactions = async () => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/transactions/`,
    options
  );
  const responseBody = await response.json();
  return responseBody.data;
};

const getTransactionById = async (transactionId) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/transactions/${transactionId}`,
    options
  );
  const responseBody = await response.json();
  return responseBody;
};

const createTransaction = async (transaction) => {
  const user = getUserFromLocalStorage();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + user.authdata,
    },
    body: JSON.stringify(transaction),
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/transactions/`,
    options
  );
  const responseBody = await response.json();
  return responseBody;
};

export { listTransactions, getTransactionById, createTransaction };
