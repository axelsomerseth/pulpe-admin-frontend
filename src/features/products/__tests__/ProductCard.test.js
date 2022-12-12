import { screen } from "@testing-library/react";
import { render } from "../../../utils/customRender";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../ProductCard";

it("render ProductCard component", () => {
  // arrange
  const product = {
    id: 1,
    name: "Test product name",
    description: "Test product description",
    price: 25.0,
    stock: 12,
    createdAt: new Date(),
    categoryId: 1,
  };
  render(
    <MemoryRouter>
      <ProductCard product={product} />
    </MemoryRouter>
  );

  // act
  const cardTitle = screen.getByText(product.name);

  // assert
  expect(cardTitle).toBeInTheDocument();
});
