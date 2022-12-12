import { render } from "../../../utils/customRender";
import { screen } from "@testing-library/react";
import CategoryCard from "../CategoryCard";

it("renders CategoryCard component", () => {
  // arrange
  const category = {
    name: "Test name",
    description: "Test description",
    createdAt: new Date(),
  };
  render(<CategoryCard category={category} />);

  // act
  const name = screen.getByText(category.name);

  // assert
  expect(name).toBeInTheDocument();
});
