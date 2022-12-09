import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// * Docs: https://testing-library.com/docs/example-react-router/
it("renders Pulpe Admin text", () => {
  render(<App />, { wrapper: BrowserRouter });
  const headingElement = screen.getByText(/Pulpe Admin/i);
  expect(headingElement).toBeInTheDocument();
});
