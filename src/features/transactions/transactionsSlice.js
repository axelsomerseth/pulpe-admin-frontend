import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  listTransactions,
  createTransaction,
} from "../../services/transactions";

// * Async thunks.
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    return await listTransactions();
  }
);
export const addNewTransaction = createAsyncThunk(
  "transactions/addNewTransaction",
  async (newTransaction) => {
    return await createTransaction(newTransaction);
  }
);

// * Transactions Slice (Reducers).
const initialState = {
  transactions: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null, // string | null
};
export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    transactionAdded: (state, action) => {},
    transactionEdited: (state, action) => {},
    transactionRemoved: (state, action) => {},
  },
  extraReducers(builder) {
    // * Action: transactions/fetchTransactions
    builder
      .addCase(fetchTransactions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactions = [...action.payload];
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // * Action: transactions/addNewTransaction
    builder.addCase(addNewTransaction.fulfilled, (state, action) => {
      state.transactions.push(action.payload);
    });
  },
});

// * Selectors: Reading the state.
export const selectAllTransactions = (state) => state.transactions.transactions;
export const selectStatus = (state) => state.transactions.status;
export const selectError = (state) => state.transactions.error;
export const selectTransactionById = (state, transactionId) =>
  state.transactions.transactions.find(
    (transaction) => transaction.id === parseInt(transactionId)
  );

// * Action Creators.
export const { transactionAdded, transactionEdited, transactionRemoved } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
