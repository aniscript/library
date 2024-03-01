import { render, screen } from "@testing-library/react";

import SortDropdown from "../../src/components/SortDropdown/SortDropdown";

describe("SortDropdown", () => {
  it("should render sort dropdown", () => {
    render(
      <SortDropdown
        sortBy=""
        sortOrder=""
        handleSort={() => {}}
        toggleSortOrder={() => {}}
      />
    );
    const sort = screen.queryByRole("combobox");
    expect(sort).toBeInTheDocument();
  });
});
