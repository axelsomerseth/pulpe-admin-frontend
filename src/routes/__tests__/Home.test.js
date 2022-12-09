import { render, screen } from "@testing-library/react";
import Home from "../Home";

it("renders Home component", () => {
  // arrange
  render(<Home />);

  // act
  const h1Element = screen.getByText(/Home/i);

  // assert
  expect(h1Element).toBeInTheDocument();
});
