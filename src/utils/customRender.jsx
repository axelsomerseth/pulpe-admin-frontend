import React from "react";
import { render } from "@testing-library/react";
import { UserContext } from "../App";

import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import productsReducer from "../features/products/productsSlice";
import transactionsReducer from "../features/transactions/transactionsSlice";

const setUpStore = () => {
  const preloadedState = {
    categories: {
      categories: [
        {
          id: 1,
          name: "Test name",
          description: "Test description",
          createdAt: new Date().toISOString(),
        },
      ],
      status: "idle",
      error: null,
    },
    products: {
      products: [
        {
          id: 1,
          name: "Test product name",
          description: "Test product description",
          price: 25.0,
          stock: 12,
          createdAt: new Date().toISOString(),
          categoryId: 1,
        },
      ],
      status: "idle",
      error: null,
    },
    transactions: {
      transactions: [
        {
          id: 1,
          type: "Test transaction type",
          movement: "Test transaction movement",
          description: "Test transaction description",
          product: "Test product name",
          quantity: 6,
          createdAt: new Date().toISOString(),
          productId: 1,
        },
      ],
      status: "idle",
      error: null,
    },
  };
  const store = configureStore({
    reducer: {
      categories: categoriesReducer,
      products: productsReducer,
      transactions: transactionsReducer,
    },
    preloadedState,
  });

  return store;
};

const AllTheProviders = ({ children }) => {
  const user = { username: "test@example.mock", id: 1 };
  const setUser = () => {};

  const store = setUpStore();

  return (
    <ReduxProvider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </ReduxProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
