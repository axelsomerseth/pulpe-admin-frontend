import { render } from "../../../utils/customRender";
import { screen } from "@testing-library/react";
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
  render(<CategoryCardsList categories={categories} />);

  // act
  const name = screen.getByText(categories[0].name);

  // assert
  expect(name).toBeInTheDocument();
});
