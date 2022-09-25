import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="pt-4 pb-4 mb-2"></div>
        <Outlet />
        <div className="pb-5"></div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
