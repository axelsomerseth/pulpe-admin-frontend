import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";

it("renders NotFound component", () => {
  // arrange
  render(<NotFound />);

  // act
  const h1Element = screen.getByText(/Not found/i);

  // assert
  expect(h1Element).toBeInTheDocument();
});
