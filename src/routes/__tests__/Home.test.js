import { render, screen } from "@testing-library/react";
import Home from "../Home";

it("renders Home component", () => {
  render(<Home />);
  const h1Element = screen.getByText(/Home/i);
  expect(h1Element).toBeInTheDocument();
});
