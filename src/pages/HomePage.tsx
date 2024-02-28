import { useState } from "react";
import useFetchPathways from "../actions/useFetchPathways";
import Pathways from "../components/Pathways";
import Pagination from "../components/Pagination";
import SkeletonPathway from "../components/SkeletonPathway";
import Layout from "../layout/Layout";

import "./HomePage.css";
import "../components/SkeletonPathway.css";
import SortDropdown from "../components/SortDropdown";

const HomePage = () => {
  const { isLoading, data, isError, refetch } = useFetchPathways();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const ITEMS_PER_PAGE = 8;

  const filteredPathways = data
    .filter((pathway) =>
      pathway.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort(
      (
        a: { title: string; duration: string },
        b: { title: string; duration: string }
      ) => {
        if (sortBy === "title") {
          return sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        } else if (sortBy === "duration") {
          const durationA = parseInt(a.duration);
          const durationB = parseInt(b.duration);

          return sortOrder === "asc"
            ? durationA - durationB
            : durationB - durationA;
        }
        return 0;
      }
    );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const totalPages = Math.ceil(filteredPathways.length / ITEMS_PER_PAGE);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e: any) => {
    setCurrentPage(1);
    setSortBy(e.target.value);
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
            <input
              type="text"
              placeholder="Search for pathways"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="sort-section">
            <SortDropdown
              sortBy={sortBy}
              sortOrder={sortOrder}
              handleSortChange={handleSortChange}
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
      ) : data && !isLoading && !isError && filteredPathways.length > 0 ? (
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
      ) : (
        <p className="message">No pathways found</p>
      )}
    </Layout>
  );
};

export default HomePage;
