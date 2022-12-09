import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";

it("renders Home component", () => {
  render(<NotFound />);
  const h1Element = screen.getByText(/Not found/i);
  expect(h1Element).toBeInTheDocument();
});
