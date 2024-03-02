import { render, screen, fireEvent } from "@testing-library/react";

import SortDropdown from "../../src/components/SortDropdown/SortDropdown";

describe("SortDropdown", () => {
  const mockHandleSort = vi.fn();
  const mockToggleSortOrder = vi.fn();

  it("should render sort dropdown", () => {
    render(
      <SortDropdown
        sortBy=""
        sortOrder=""
        handleSort={mockHandleSort}
        toggleSortOrder={mockToggleSortOrder}
      />
    );
    const sort = screen.getByLabelText("Sort by:");
    const sortOptions = screen.getAllByRole("option");
    const sortOrderIcon = screen.getByAltText("up arrow");

    expect(sort).toBeInTheDocument();
    expect(sortOptions.length).toBe(3);
    expect(sortOrderIcon).toBeInTheDocument();
  });

  it("should call handleSort when a sort option is selected", () => {
    render(
      <SortDropdown
        sortBy=""
        sortOrder=""
        handleSort={mockHandleSort}
        toggleSortOrder={mockToggleSortOrder}
      />
    );

    const sortDropdown = screen.getByLabelText("Sort by:");
    fireEvent.change(sortDropdown, { target: { value: "title" } });

    expect(mockHandleSort).toHaveBeenCalledWith(expect.any(Object));
  });

  it("calls toggleSortOrder when the sort order toggler is clicked", () => {
    render(
      <SortDropdown
        sortBy=""
        sortOrder=""
        handleSort={mockHandleSort}
        toggleSortOrder={mockToggleSortOrder}
      />
    );

    const sortOrderToggler = screen.getByRole("button");
    fireEvent.click(sortOrderToggler);

    expect(mockToggleSortOrder).toHaveBeenCalled();
  });
});
