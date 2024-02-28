import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, handlePageChange }: any) => {
  return (
    <div className="pagination">
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          onClick={() => handlePageChange(page + 1)}
          className={currentPage === page + 1 ? "active" : ""}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
