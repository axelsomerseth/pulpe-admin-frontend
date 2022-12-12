import { render } from "../../../utils/customRender";
import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import EditCategoryForm from "../EditCategoryForm";

describe("renders EditCategoryForm component", () => {
  it("with data", () => {
    // arrange
    render(
      <MemoryRouter initialEntries={["/categories/1"]}>
        <Routes>
          <Route path="categories">
            <Route path=":categoryId" element={<EditCategoryForm />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // act
    const modalTitle = screen.getByText(/Edit Category/i);
    const closeButton = screen.getByText(/Close/i);
    fireEvent.click(closeButton);

    // assert
    expect(modalTitle).toBeInTheDocument();
  });

  it.todo("without data");
});
