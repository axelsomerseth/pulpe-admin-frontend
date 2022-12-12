import { screen } from "@testing-library/react";
import { render } from "../../../utils/customRender";
import { MemoryRouter } from "react-router-dom";
import TransactionsCardList from "../TransactionsCardList";

it("render TransactionsCardList component", () => {
  // arrange
  const transactions = [
    {
      id: 1,
      type: "Test transaction type",
      movement: "Test transaction movement",
      description: "Test transaction description",
      product: "Test product name",
      quantity: 6,
      createdAt: new Date(),
      productId: 1,
    },
  ];
  render(
    <MemoryRouter>
      <TransactionsCardList transactions={transactions} />
    </MemoryRouter>
  );

  // act
  const cardTitle = screen.getByText(transactions[0].type);

  // assert
  expect(cardTitle).toBeInTheDocument();
});
