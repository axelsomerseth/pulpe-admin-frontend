import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import PrivateWrapper from "../PrivateWrapper";
import { Route, Routes } from "react-router-dom";

it("renders PrivateWrapper component", () => {
  // arrange
  render(
    <Routes>
      <Route element={<PrivateWrapper />}>
        <Route path="/" element={<span>Test text</span>} />
      </Route>
    </Routes>
  );

  // act
  const spanElement = screen.getByText(/Test text/i);

  // assert
  expect(spanElement).toBeInTheDocument();
});
