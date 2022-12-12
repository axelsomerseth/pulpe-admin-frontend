import { render } from "../../../utils/customRender";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoryCardsList from "../CategoryCardsList";

it("renders CategoryCardsList component", () => {
  // arrange
  const categories = [
    {
      id: 1,
      name: "Test name",
      description: "Test description",
      createdAt: new Date(),
    },
  ];
  render(
    <MemoryRouter>
      <CategoryCardsList categories={categories} />
    </MemoryRouter>
  );

  // act
  const name = screen.getByText(categories[0].name);

  // assert
  expect(name).toBeInTheDocument();
});
