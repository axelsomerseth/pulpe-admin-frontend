import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createProduct, listProducts } from "../../services/products";

// * Async thunks.
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await listProducts();
  }
);
const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (initialProduct) => {
    return await createProduct(initialProduct);
  }
);

// * Products Slice (Reducers).
const initialState = {
  products: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null, // string | null
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAdded: (state, action) => {},
    productEdited: (state, action) => {},
    productRemoved: (state, action) => {},
  },
  extraReducers(builder) {
    // * Action: products/fetchProducts
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = [...action.payload];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // * Action: products/addNewProduct
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    // * Action: products/editProduct
  },
});

// * Selectors: Reading the state.
export const selectAllProducts = (state) => state.products.products;
export const selectStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;
export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === parseInt(productId));

// * Action Creators.
export const { productAdded, productEdited, productRemoved } =
  productsSlice.actions;

export default productsSlice.reducer;
