import { screen } from "@testing-library/react";
import { render } from "../../utils/customRender";
import WithRequestProgress from "../WithRequestProgress";

describe("renders WithRequestProgress component", () => {
  it("with idle status", () => {
    // arrange
    // Calling a Higher-Order Component.
    const status = "idle";
    const error = "";
    const TestingWithRequestProgress = WithRequestProgress(
      <span>Test text</span>
    );
    render(<TestingWithRequestProgress status={status} error={error} />);

    // act
    const hocResult = screen.getByText(/Being inactive/i);

    // assert
    expect(hocResult).toBeInTheDocument();
  });

  it("with default status, no data", () => {
    // arrange
    const status = "";
    const error = "";
    const TestingWithRequestProgress = WithRequestProgress(
      <span>Test text</span>
    );
    render(<TestingWithRequestProgress status={status} error={error} />);

    // act
    const hocResult = screen.getByText(/No data\./i);

    // assert
    expect(hocResult).toBeInTheDocument();
  });

  it("with failed status", () => {
    // arrange
    const status = "failed";
    const error = "Mocking an error";
    const TestingWithRequestProgress = WithRequestProgress(
      <span>Test text</span>
    );
    render(<TestingWithRequestProgress status={status} error={error} />);

    // act
    const hocResult = screen.getByText(/Mocking an error/i);

    // assert
    expect(hocResult).toBeInTheDocument();
  });

  it.todo("with loading status");

  it.todo("with succeeded status");
});
