import { screen } from "@testing-library/react";
import { render } from "../../../utils/customRender";
import { MemoryRouter } from "react-router-dom";
import TransactionsList from "../TransactionsList";

it("render TransactionsList component", () => {
  // arrange
  render(
    <MemoryRouter>
      <TransactionsList />
    </MemoryRouter>
  );

  // act
  const listTitle = screen.getByText(/Transactions/i);

  // assert
  expect(listTitle).toBeInTheDocument();
});
