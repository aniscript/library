import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../../src/components/Search/Search";

describe("Search", () => {
  const mockHandleSearch = vi.fn();
  const searchTerm = "Test";

  it("should render search input with placeholder and value", () => {
    render(<Search searchTerm={searchTerm} handleSearch={mockHandleSearch} />);

    const searchInput = screen.getByPlaceholderText(
      "Search for pathways"
    ) as HTMLInputElement;

    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toBe(searchTerm);
  });

  it("should call handleSearch when input value changes", () => {
    render(<Search searchTerm={searchTerm} handleSearch={mockHandleSearch} />);

    const searchInput = screen.getByPlaceholderText(
      "Search for pathways"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "New Search" } });

    expect(mockHandleSearch).toHaveBeenCalled();
  });
});
