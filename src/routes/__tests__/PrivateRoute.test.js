import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import PrivateRoute from "../PrivateRoute";

it("renders PrivateRoute component", () => {
  // arrange
  render(
    <PrivateRoute
      user={{ username: "test@example.mock" }}
      children={<span>Test text</span>}
    />
  );

  // act
  const selectElement = screen.getByText(/Test text/i);

  // assert
  expect(selectElement).toBeInTheDocument();
});
