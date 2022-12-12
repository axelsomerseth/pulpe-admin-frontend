import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import Navbar from "../Navbar";

it("renders Navbar component", () => {
  // arrange
  render(<Navbar />);

  // act
  const brand = screen.getByText(/Pulpe Admin/i);

  // assert
  expect(brand).toBeInTheDocument();
});
