import { screen } from "@testing-library/react";
import { render } from "../../../utils/customRender";
import { MemoryRouter } from "react-router-dom";
import TransactionCard from "../TransactionCard";

it("render TransactionCard component", () => {
  // arrange
  const transaction = {
    id: 1,
    type: "Test transaction type",
    movement: "Test transaction movement",
    description: "Test transaction description",
    product: "Test product name",
    quantity: 6,
    createdAt: new Date(),
    productId: 1,
  };
  render(
    <MemoryRouter>
      <TransactionCard transaction={transaction} />
    </MemoryRouter>
  );

  // act
  const cardTitle = screen.getByText(transaction.type);

  // assert
  expect(cardTitle).toBeInTheDocument();
});
