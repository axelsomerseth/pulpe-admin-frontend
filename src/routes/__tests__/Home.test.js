import { render, screen } from "@testing-library/react";
import Home from "../Home";

// * Docs: https://testing-library.com/docs/example-react-router/
it("renders Home component", () => {
  render(<Home />);
  const h1Element = screen.getByText(/Home/i);
  expect(h1Element).toBeInTheDocument();
});
