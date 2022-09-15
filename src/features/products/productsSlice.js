import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Cerveza Salva Vida 12 oz.",
    description: "Lager estilo americano",
    category: "Bebidas Alcoholicas",
    price: "25.00",
    stock: 24,
    created_at: "2022-09-10T04:18:12.849Z",
    updated_at: null,
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {},
    edit: (state, action) => {},
    remove: (state, action) => {},
  },
});

export const selectProducts = (state) => state.products;

export const { add, edit, remove } = productsSlice.actions;

export default productsSlice.reducer;
