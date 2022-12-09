import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// * Docs: https://testing-library.com/docs/example-react-router/
it("renders Pulpe Admin text", () => {
  // arrange
  render(<App />, { wrapper: BrowserRouter });

  // act
  const headingElement = screen.getByText(/Pulpe Admin/i);

  // assert
  expect(headingElement).toBeInTheDocument();
});
