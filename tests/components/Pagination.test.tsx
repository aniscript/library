import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../../src/components/Pagination/Pagination";

describe("Pagination Component", () => {
  const mockHandlePageChange = vi.fn();

  it("should render pagination component", () => {
    render(
      <Pagination
        totalPages={12}
        currentPage={1}
        handlePageChange={mockHandlePageChange}
      />
    );

    const prevButton = screen.getByRole("button", { name: "Prev" });
    const nextButton = screen.getByRole("button", { name: "Next" });
    const currentPageButton = screen.getByRole("button", { name: "1" });
    const paginationButtons = screen.getAllByRole("button", { name: /\d+/ });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(currentPageButton).toHaveClass("active");
    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
    expect(paginationButtons.length).toBe(6);
  });

  it("should call handlePageChange with next page number when Next button is clicked", () => {
    render(
      <Pagination
        totalPages={12}
        currentPage={1}
        handlePageChange={mockHandlePageChange}
      />
    );

    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    expect(mockHandlePageChange).toHaveBeenCalledWith(2);
  });

  it("should call handlePageChange with correct page number when a page number button is clicked", () => {
    render(
      <Pagination
        totalPages={12}
        currentPage={1}
        handlePageChange={mockHandlePageChange}
      />
    );

    const page3Button = screen.getByRole("button", { name: "3" });
    fireEvent.click(page3Button);

    expect(mockHandlePageChange).toHaveBeenCalledWith(3);
  });
});
