import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import SignUpModal from "../SignUpModal";

it("renders SignUpModal component", () => {
  // arrange
  render(<SignUpModal show={true} />);

  // act
  const modalTitle = screen.getByText(/Create an account/i);

  // assert
  expect(modalTitle).toBeInTheDocument();
});
