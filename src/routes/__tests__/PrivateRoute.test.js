import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { render } from "../../utils/customRender";
import PrivateRoute from "../PrivateRoute";

it("renders PrivateRoute component", () => {
  // arrange
  render(
    <MemoryRouter>
      <PrivateRoute
        user={{ username: "test@example.mock" }}
        children={<span>Test text</span>}
      />
    </MemoryRouter>
  );

  // act
  const spanElement = screen.getByText(/Test text/i);

  // assert
  expect(spanElement).toBeInTheDocument();
});
