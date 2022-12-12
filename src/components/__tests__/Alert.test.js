import { render, screen } from "@testing-library/react";
import Alert from "../Alert";

it("renders Alert component", () => {
  // arrange
  render(<Alert type="danger" message="Test error" />);

  // act
  const divElem = screen.getByText(/Test error/i);

  // assert
  expect(divElem).toBeInTheDocument();
});
