import { render } from "../../../utils/customRender";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductsList from "../ProductsList";

it("render ProductsList component", () => {
  // arrange
  render(
    <MemoryRouter>
      <ProductsList />
    </MemoryRouter>
  );

  // act
  const listTitle = screen.getByText(/Products/i);

  // assert
  expect(listTitle).toBeInTheDocument();
});
