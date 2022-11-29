import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main
import App from "./App";
import Home from "./routes/Home";

// Auth
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";

// Categories
import CategoriesList from "./features/categories/CategoriesList";
import AddCategoryForm from "./features/categories/AddCategoryForm";
import SingleCategoryPage from "./features/categories/SingleCategoryPage";
import EditCategoryForm from "./features/categories/EditCategoryForm";

// Products
import ProductsList from "./features/products/ProductsList";
import AddProductForm from "./features/products/AddProductForm";
import SingleProductPage from "./features/products/SingleProductPage";
import EditProductForm from "./features/products/EditProductForm";

// Transactions
import TransactionsList from "./features/transactions/TransactionsList";
import AddTransactionForm from "./features/transactions/AddTransactionForm";

// NotFound
import NotFound from "./routes/NotFound";

// Redux Store
import store from "./app/store";
import { Provider } from "react-redux";

// Styles
import "./index.css";
import "./scss/custom.scss";

// Analytics
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUpModal />} />
            <Route path="sign-in" element={<SignInModal />} />
            <Route path="categories" element={<CategoriesList />}>
              <Route exact path="new" element={<AddCategoryForm />} />
              <Route
                exact
                path=":categoryId"
                element={<SingleCategoryPage />}
              />
              <Route
                exact
                path=":categoryId/edit"
                element={<EditCategoryForm />}
              />
            </Route>
            <Route path="products" element={<ProductsList />}>
              <Route exact path="new" element={<AddProductForm />} />
              <Route exact path=":productId" element={<SingleProductPage />} />
              <Route
                exact
                path=":productId/edit"
                element={<EditProductForm />}
              />
            </Route>
            <Route path="transactions" element={<TransactionsList />}>
              <Route exact path="new" element={<AddTransactionForm />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
