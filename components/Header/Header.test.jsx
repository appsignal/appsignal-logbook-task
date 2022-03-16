import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  const build = () => render(<Header />);

  test("renders the header", () => {
    build();

    expect(screen.getByText("Errors")).toBeInTheDocument();
    expect(screen.getByText("The stuff that breaks")) .toBeInTheDocument();
  });

  test("renders the icon", () => {
    build();

    expect(screen.getByTestId("icon")).toHaveClass("fa fa-bug");
  });
});
