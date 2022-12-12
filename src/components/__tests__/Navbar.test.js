import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

it("renders Navbar component", () => {
  // arrange
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // act
  const brand = screen.getByText(/Pulpe Admin/i);

  // assert
  expect(brand).toBeInTheDocument();
});
