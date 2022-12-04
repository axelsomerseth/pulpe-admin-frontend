// By now you might be wondering, "Do I always have to put all my app's state into the Redux store?"

// The answer is NO. Global state that is needed across the app should go in the Redux store.
// State that's only needed in one place should be kept in component state.

import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import productsReducer from "../features/products/productsSlice";
import transactionsReducer from "../features/transactions/transactionsSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    transactions: transactionsReducer,
  },
});
