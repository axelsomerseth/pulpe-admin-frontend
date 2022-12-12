import { render } from "../../../utils/customRender";
import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import EditProductForm from "../EditProductForm";

describe("renders EditProductForm component", () => {
  it("with data", () => {
    // arrange
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="products">
            <Route path=":productId" element={<EditProductForm />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // act
    const modalTitle = screen.getByText(/Edit a Product/i);
    const closeButton = screen.getByText(/Close/i);
    fireEvent.click(closeButton);

    // assert
    expect(modalTitle).toBeInTheDocument();
  });

  it.todo("without data");
});
