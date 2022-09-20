// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app,
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null, // string | null
};

// Async thunks.
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(
      `https://pulpe-admin-api.herokuapp.com/categories/`,
      {
        method: "GET",
      }
    );
    const responseBody = await response.json();
    return responseBody.data;
  }
);
export const addNewCategory = createAsyncThunk(
  "categories/addNewCategory",
  async (initialCategory) => {
    const response = await fetch(
      `https://pulpe-admin-api.herokuapp.com/categories/`,
      {
        method: "POST",
        body: JSON.stringify(initialCategory),
      }
    );
    const responseBody = await response.json();
    return responseBody.data;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  // Reducers: Modifying the state.
  reducers: {
    // TODO: Prepare action payloads
    // * Docs: https://redux.js.org/tutorials/essentials/part-4-using-data#preparing-action-payloads
    categoryAdded: (state, action) => {
      state.categories.push(action.payload);
    },
    categoryEdited: (state, action) => {
      const { id, name, description } = action.payload;
      const existingCategory = state.categories.find(
        (category) => category.id === id
      );
      if (existingCategory) {
        existingCategory.name = name;
        existingCategory.description = description;
      }
    },
    categoryRemoved: (state, action) => {
      // TODO: remove category from state array (if needed).
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.categories = [...action.payload];
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Selectors: Reading the state.
// The function below is called a selector and allows us to select a value from the state.
export const selectAllCategories = (state) => state.categories.categories;
export const selectCategoryById = (state, categoryId) =>
  state.categories.categories.find(
    (category) => category.id === parseInt(categoryId)
  );
export const totalCategories = (state) => state.categories.categories.length;

export const { categoryAdded, categoryEdited, categoryRemoved } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
