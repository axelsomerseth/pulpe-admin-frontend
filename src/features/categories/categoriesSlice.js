// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app,
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  listCategories,
  createCategory,
  updateCategory,
} from "../../services/categories";

// * Async thunks.
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    return await listCategories();
  }
);

export const addNewCategory = createAsyncThunk(
  "categories/addNewCategory",
  async (initialCategory) => {
    return await createCategory(initialCategory);
  }
);

export const editCategory = createAsyncThunk(
  "categories/editCategory",
  async (categoryUpdated) => {
    return await updateCategory(categoryUpdated);
  }
);

// * Categories Slice (Reducers).
const initialState = {
  categories: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null, // string | null
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  // Reducers: Modifying the state.
  reducers: {
    // TODO: Prepare action payloads.
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
        state.categories = [...action.payload];
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder.addCase(addNewCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
    });
    builder.addCase(editCategory.fulfilled, (state, action) => {
      const { id, name, description } = action.payload;
      const existingCategory = state.categories.find(
        (category) => category.id === id
      );
      if (existingCategory) {
        existingCategory.name = name;
        existingCategory.description = description;
      }
    });
  },
});

// * Selectors: Reading the state.
// The function below is called a selector and allows us to select a value from the state.
export const selectAllCategories = (state) => state.categories.categories;
export const selectStatus = (state) => state.categories.status;
export const selectError = (state) => state.categories.error;
export const selectCategoryById = (state, categoryId) =>
  state.categories.categories.find(
    (category) => category.id === parseInt(categoryId)
  );
export const totalCategories = (state) => state.categories.categories.length;

// * Action Creators.
export const { categoryAdded, categoryEdited, categoryRemoved } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
