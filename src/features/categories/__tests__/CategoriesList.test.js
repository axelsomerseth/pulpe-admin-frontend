import { render } from "../../../utils/customRender";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoriesList from "../CategoriesList";

it("render CategoriesList component", () => {
  // arrange
  render(
    <MemoryRouter>
      <CategoriesList />
    </MemoryRouter>
  );

  // act
  const listTitle = screen.getByText(/Categories/i);

  // assert
  expect(listTitle).toBeInTheDocument();
});
