import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PrivateWrapper from "../PrivateWrapper";

it("renders PrivateWrapper component", () => {
  // arrange
  render(
    <MemoryRouter>
      <Routes>
        <Route element={<PrivateWrapper />}>
          <Route path="/" element={<span>Test text</span>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  // act
  const spanElement = screen.getByText(/Test text/i);

  // assert
  expect(spanElement).toBeInTheDocument();
});
