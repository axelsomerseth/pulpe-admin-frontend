import { render } from "../../../utils/customRender";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoryCard from "../CategoryCard";

it("renders CategoryCard component", () => {
  // arrange
  const category = {
    id: 1,
    name: "Test name",
    description: "Test description",
    createdAt: new Date(),
  };
  render(
    <MemoryRouter>
      <CategoryCard category={category} />
    </MemoryRouter>
  );

  // act
  const name = screen.getByText(category.name);

  // assert
  expect(name).toBeInTheDocument();
});
