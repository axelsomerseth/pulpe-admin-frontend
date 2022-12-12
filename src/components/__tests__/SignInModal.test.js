import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../utils/customRender";
import { MemoryRouter } from "react-router-dom";
import SignInModal from "../SignInModal";

it("renders SignInModal component", async () => {
  // arrange
  render(
    <MemoryRouter>
      <SignInModal show={true} setShow={() => {}} />
    </MemoryRouter>
  );

  // act
  const title = screen.getByText(/Sign in to your account/i);
  const closeButton = screen.getByText(/Close/i);
  fireEvent.click(closeButton);

  // assert
  expect(title).toBeInTheDocument();
});
