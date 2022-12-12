import { render } from "../../../utils/customRender";
import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from "../SingleProductPage";

describe("renders SingleProductPage component", () => {
  it("with data", () => {
    // arrange
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="products">
            <Route path=":productId" element={<SingleProductPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // act
    const modalTitle = screen.getByText(/Product Details/i);
    const closeButton = screen.getByText(/Close/i);
    fireEvent.click(closeButton);

    // assert
    expect(modalTitle).toBeInTheDocument();
  });

  it("without data", () => {
    // arrange
    render(
      <MemoryRouter initialEntries={["/products/100"]}>
        <Routes>
          <Route path="products">
            <Route path=":productId" element={<SingleProductPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // act
    const notFoundSection = screen.getByText(/Product not found!/i);

    // assert
    expect(notFoundSection).toBeInTheDocument();
  });
});
