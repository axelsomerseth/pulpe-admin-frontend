import { BACKEND_API_BASE_URL } from ".";

const listTransactions = async () => {
  const response = await fetch(`${BACKEND_API_BASE_URL}/transactions/`, {
    method: "GET",
  });
  const responseBody = await response.json();
  return responseBody.data;
};

const getTransactionById = async (transactionId) => {
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/transactions/${transactionId}`,
    {
      method: "GET",
    }
  );
  const responseBody = await response.json();
  return responseBody;
};

const createTransaction = async (transaction) => {
  const response = await fetch(`${BACKEND_API_BASE_URL}/transactions/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });
  const responseBody = await response.json();
  return responseBody;
};

export { listTransactions, getTransactionById, createTransaction };
