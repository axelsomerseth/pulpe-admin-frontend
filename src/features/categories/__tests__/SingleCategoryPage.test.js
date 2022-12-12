import { render } from "../../../utils/customRender";
import { screen, fireEvent } from "@testing-library/react";
import SingleCategoryPage from "../SingleCategoryPage";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("renders AddCategoryForm component", () => {
  it("with data", () => {
    // arrange
    render(
      <MemoryRouter initialEntries={["/categories/1"]}>
        <Routes>
          <Route path="categories">
            <Route path=":categoryId" element={<SingleCategoryPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // act
    const modalTitle = screen.getByText(/Category Details/i);
    const closeButton = screen.getByText(/Close/i);
    fireEvent.click(closeButton);

    // assert
    expect(modalTitle).toBeInTheDocument();
  });

  it("without data", () => {
    // arrange
    render(
      <MemoryRouter initialEntries={["/categories/100"]}>
        <Routes>
          <Route path="categories">
            <Route path=":categoryId" element={<SingleCategoryPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // act
    const notFoundSection = screen.getByText(/Category not found!/i);

    // assert
    expect(notFoundSection).toBeInTheDocument();
  });
});
