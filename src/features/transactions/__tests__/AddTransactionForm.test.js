import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../utils/customRender";
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";
import AddTransactionForm from "../AddTransactionForm";

it("render AddTransactionForm component", () => {
  // arrange
  const showAddForm = true;
  const setShowAddForm = () => {};
  const TestList = () => {
    return (
      <>
        <h2>Mocking page</h2>
        <Outlet context={[showAddForm, setShowAddForm]} />
      </>
    );
  };
  render(
    <MemoryRouter initialEntries={["/transactions/new"]}>
      <Routes>
        <Route exact path="transactions" element={<TestList />}>
          <Route exact path="new" element={<AddTransactionForm />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  // act
  const modalTitle = screen.getByText(/Add Transaction/i);
  const closeButton = screen.getByText(/Close/i);

  // assert
  expect(modalTitle).toBeInTheDocument();

  // exit
  fireEvent.click(closeButton);
});
