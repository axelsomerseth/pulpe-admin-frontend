import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./scss/custom.scss";

import App from "./App";
import Home from "./routes/Home";
// import Categories from "./routes/Categories";
import CategoriesList from "./features/categories/CategoriesList";
import AddCategoryForm from "./features/categories/AddCategoryForm";

// import Products from "./routes/Products";
import ProductsList from "./features/products/ProductsList";
import NotFound from "./routes/NotFound";

// import Category from "./components/Category";
import Product from "./components/Product";

import store from "./app/store";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<CategoriesList />}>
              <Route path="new" element={<AddCategoryForm />} />
            </Route>
            <Route path="products" element={<ProductsList />}>
              <Route path=":productId" element={<Product />} />
              <Route path="new" element={<Product />} />
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
