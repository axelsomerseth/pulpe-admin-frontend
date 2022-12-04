import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { myAccount } from "./services/auth";

// Main
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

// Private route component
import PrivateRoute from "./routes/PrivateRoute";

// Not found
import NotFound from "./routes/NotFound";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [userPersisted, setUserPersisted] = useLocalStorage("user", null); // persisted in localstorage

  // On mount.
  useEffect(() => {
    // Credentials are persisted in local storage.
    if (userPersisted) {
      const response = myAccount(userPersisted);
      response.then((response) => {
        setUser(userPersisted);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refreshing when 'user' and 'userPersisted' change.
  useEffect(() => {
    // User signed in.
    if (user) {
      setUserPersisted(() => user);
    }

    // User was signed in.
    if (userPersisted) {
      setUser(() => user);
    }
  }, [user, userPersisted, setUserPersisted]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUpModal />} />
            <Route path="sign-in" element={<SignInModal />} />
            <Route
              path="categories"
              element={
                <PrivateRoute user={user}>
                  <CategoriesList />
                </PrivateRoute>
              }
            >
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
            <Route
              path="products"
              element={
                <PrivateRoute user={user}>
                  <ProductsList />
                </PrivateRoute>
              }
            >
              <Route exact path="new" element={<AddProductForm />} />
              <Route exact path=":productId" element={<SingleProductPage />} />
              <Route
                exact
                path=":productId/edit"
                element={<EditProductForm />}
              />
            </Route>
            <Route
              path="transactions"
              element={
                <PrivateRoute user={user}>
                  <TransactionsList />
                </PrivateRoute>
              }
            >
              <Route exact path="new" element={<AddTransactionForm />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <div className="pb-5"></div>
      </main>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
