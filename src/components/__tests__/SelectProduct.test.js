import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import SelectProduct from "../SelectProduct";

it("renders SelectProduct component", () => {
  // arrange
  render(<SelectProduct />);

  // act
  const selectElement = screen.getByLabelText(/Select Product/i);

  // assert
  expect(selectElement).toBeInTheDocument();
});
