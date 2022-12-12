import React from "react";
import { render } from "@testing-library/react";
import { UserContext } from "../App";
import { BrowserRouter } from "react-router-dom";
import store from "../app/store";
import { Provider as ReduxProvider } from "react-redux";

const AllTheProviders = ({ children }) => {
  const user = { username: "test@example.mock", id: 1 };
  const setUser = () => {};

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      </BrowserRouter>
    </ReduxProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
