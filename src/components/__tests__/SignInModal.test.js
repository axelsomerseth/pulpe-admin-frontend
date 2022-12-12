import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import SignInModal from "../SignInModal";

it("renders SignInModal component", () => {
  // arrange
  render(<SignInModal show={true} />);

  // act
  const title = screen.getByText(/Sign in to your account/i);

  // assert
  expect(title).toBeInTheDocument();
});
