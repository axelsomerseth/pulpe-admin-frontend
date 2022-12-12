import { render } from "../../../utils/customRender";
import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddCategoryForm from "../AddCategoryForm";

it("renders AddCategoryForm component", () => {
  // arrange
  render(
    <MemoryRouter>
      <AddCategoryForm />
    </MemoryRouter>
  );

  // act
  const modalTitle = screen.getByText(/Add a New Category/i);
  const closeButton = screen.getByText(/Close/i);
  fireEvent.click(closeButton);

  // assert
  expect(modalTitle).toBeInTheDocument();
});
