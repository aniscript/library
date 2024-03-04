import "./Pagination.css";

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
}: IPaginationProps) => {
  const renderPaginationNumbers = () => {
    const paginationNumbers: React.ReactNode[] = [];

    let start = Math.max(1, currentPage - 2);
    let end = Math.min(start + 4, totalPages);

    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
      paginationNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    if (start > 1) {
      if (start > 2) {
        paginationNumbers.unshift(<span key="ellipsis1">...</span>);
      }
      paginationNumbers.unshift(
        <button key="first" onClick={() => handlePageChange(1)}>
          1
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        paginationNumbers.push(<span key="ellipsis2">...</span>);
      }

      paginationNumbers.push(
        <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return paginationNumbers;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {renderPaginationNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
