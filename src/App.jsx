import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { myAccount } from "./services/auth";

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
        <Outlet />
        <div className="pb-5"></div>
      </main>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
