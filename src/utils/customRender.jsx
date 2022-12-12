import React from "react";
import { render } from "@testing-library/react";
import { UserContext } from "../App";
import { BrowserRouter } from "react-router-dom";

const AllTheProviders = ({ children }) => {
  const user = { username: "test@example.mock", id: 1 };
  const setUser = () => {};

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        {/* You can add other providers here */}
        {children}
      </UserContext.Provider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
