// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app,
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Bebidas Alcoholicas",
    description: "Cervezas Licores y Vinos",
    created_at: "2022-09-09T23:51:55.629Z",
    updated_at: null,
    deleted_at: null,
  },
  {
    id: 2,
    name: "Bebidas y Jugos",
    description: "Aguas, Bebidas Refrescantes, Jugos, Refrescos",
    created_at: "2022-09-09T23:52:19.495Z",
    updated_at: null,
    deleted_at: null,
  },
];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  // Modifying the state:
  reducers: {
    categoryAdded: (state, action) => {
      return [...state, action.payload];
    },
    categoryEdited: (state, action) => {
      // TODO: edit the category in the state array (if needed).
    },
    categoryRemoved: (state, action) => {
      // TODO: remove category from state array (if needed).
    },
  },
});

// Reading the state
// TODO: Selector function.
// The function below is called a selector and allows us to select a value from the state.
export const selectCategories = (state) => state.categories;

export const { categoryAdded, categoryEdited, categoryRemoved } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
