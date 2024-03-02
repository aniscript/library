import { render, screen } from "@testing-library/react";

import Header from "../../src/layout/header/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });
  it("should render logo image", () => {
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("should render logo title", () => {
    const logoTitle = screen.getByText("Library");
    expect(logoTitle).toBeInTheDocument();
  });
});
