import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import SelectCategory from "../SelectCategory";

it("renders SelectCategory component", () => {
  // arrange
  render(<SelectCategory />);

  // act
  const selectElement = screen.getByLabelText(/Select Category/i);

  // assert
  expect(selectElement).toBeInTheDocument();
});
