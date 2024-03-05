import { ChangeEvent, useState } from "react";
import useFetchPathways from "../actions/useFetchPathways";
import Pathways from "../components/Pathways/Pathways";
import Pagination from "../components/Pagination/Pagination";
import SkeletonPathway from "../components/Skeleton/SkeletonPathway";
import SortDropdown from "../components/SortDropdown/SortDropdown";
import Search from "../components/Search/Search";
import Layout from "../layout/Layout";
import useDebounce from "../utils/useDebounce";
import { compareNumber, compareString } from "../utils/sorting";

import "./HomePage.css";

const HomePage = () => {
  const { isLoading, data, isError, refetch } = useFetchPathways();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("none");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  // Pagination
  const ITEMS_PER_PAGE = 8;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const debouncedSearch = useDebounce(searchTerm, 500);

  const filteredPathways = data
    .filter((pathway) =>
      pathway.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort(
      (
        a: { title: string; duration: string },
        b: { title: string; duration: string }
      ) => {
        if (sortBy === "title") {
          return sortOrder === "asc"
            ? compareString(a.title, b.title)
            : compareString(b.title, a.title);
        } else if (sortBy === "duration") {
          const durationA = parseInt(a.duration);
          const durationB = parseInt(b.duration);

          return sortOrder === "asc"
            ? compareNumber(durationA, durationB)
            : compareNumber(durationB, durationA);
        }
        return 0;
      }
    );

  const totalPages = Math.ceil(filteredPathways.length / ITEMS_PER_PAGE);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    setSortBy(e.target.value);
    setSortOrder("asc");
  };

  const toggleSortOrder = () => {
    setCurrentPage(1);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <section className="page-header">
        <h1 className="page-title">Pathways</h1>
        <div className="page-header__right">
          <div className="search-section">
            <Search searchTerm={searchTerm} handleSearch={handleSearch} />
          </div>
          <div className="sort-section">
            <SortDropdown
              sortBy={sortBy}
              sortOrder={sortOrder}
              handleSort={handleSort}
              toggleSortOrder={toggleSortOrder}
            />
          </div>
        </div>
      </section>
      {isLoading ? (
        <section className="pathways">
          {[...Array(4)].map((_, index) => (
            <SkeletonPathway key={index} />
          ))}
        </section>
      ) : isError ? (
        <div className="error">
          <p>There was an error loading the data.</p>
          <button onClick={refetch} className="btn-primary">
            Try again
          </button>
        </div>
      ) : (
        data &&
        !isLoading &&
        !isError && (
          <>
            <Pathways pathways={filteredPathways.slice(startIndex, endIndex)} />
            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            )}
          </>
        )
      )}
    </Layout>
  );
};

export default HomePage;
