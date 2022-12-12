import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../utils/customRender";
import SignInModal from "../SignInModal";

it("renders SignInModal component", async () => {
  // arrange
  render(<SignInModal show={true} setShow={() => {}} />);

  // act
  const title = screen.getByText(/Sign in to your account/i);
  const closeButton = screen.getByText(/Close/i);
  fireEvent.click(closeButton);

  // assert
  expect(title).toBeInTheDocument();
});
