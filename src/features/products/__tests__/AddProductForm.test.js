import { render } from "../../../utils/customRender";
import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProductForm from "../AddProductForm";

it("renders AddProductForm component", () => {
  // arrange
  render(
    <MemoryRouter>
      <AddProductForm />
    </MemoryRouter>
  );

  // act
  const modalTitle = screen.getByText(/Add a New Product/i);
  const closeButton = screen.getByText(/Close/i);
  fireEvent.click(closeButton);

  // assert
  expect(modalTitle).toBeInTheDocument();
});
