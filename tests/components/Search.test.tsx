import { render, screen } from "@testing-library/react";
import Search from "../../src/components/Search/Search";

describe("Search", () => {
  it("should render search input", () => {
    render(<Search searchTerm="test" handleSearch={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
