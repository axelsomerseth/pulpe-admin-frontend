import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

it("renders Footer component", () => {
  // arrange
  render(<Footer />);

  // act
  const spanElement = screen.getByText(/Made with love remotely/i);

  // assert
  expect(spanElement).toBeInTheDocument();
});
