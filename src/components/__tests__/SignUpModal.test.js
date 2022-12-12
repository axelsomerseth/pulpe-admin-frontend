import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../utils/customRender";
import SignUpModal from "../SignUpModal";

it("renders SignUpModal component", () => {
  // arrange
  render(<SignUpModal show={true} setShow={() => {}} />);

  // act
  const modalTitle = screen.getByText(/Create an account/i);
  const closeButton = screen.getByText(/Close/i);
  fireEvent.click(closeButton);

  // assert
  expect(modalTitle).toBeInTheDocument();
});
