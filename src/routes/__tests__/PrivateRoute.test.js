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
  const spanElement = screen.getByText(/Test text/i);

  // assert
  expect(spanElement).toBeInTheDocument();
});
