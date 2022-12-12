import { screen } from "@testing-library/react";
import { render } from "../../../utils/customRender";
import { MemoryRouter } from "react-router-dom";
import ProductCardsList from "../ProductCardsList";

it("render ProductCardsList component", () => {
  // arrange
  const products = [
    {
      id: 1,
      name: "Test product name",
      description: "Test product description",
      price: 25.0,
      stock: 12,
      createdAt: new Date(),
      categoryId: 1,
    },
  ];
  render(
    <MemoryRouter>
      <ProductCardsList products={products} />
    </MemoryRouter>
  );

  // act
  const cardTitle = screen.getByText(products[0].name);

  // assert
  expect(cardTitle).toBeInTheDocument();
});
