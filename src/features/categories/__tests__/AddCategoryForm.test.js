import { render } from "../../../utils/customRender";
import { screen, fireEvent } from "@testing-library/react";
import AddCategoryForm from "../AddCategoryForm";

it("renders AddCategoryForm component", () => {
  // arrange
  render(<AddCategoryForm />);

  // act
  const modalTitle = screen.getByText(/Add a New Category/i);
  const closeButton = screen.getByText(/Close/i);
  fireEvent.click(closeButton);

  // assert
  expect(modalTitle).toBeInTheDocument();
});
