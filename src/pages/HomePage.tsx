import { useState } from "react";
import useFetchPathways from "../actions/useFetchPathways";
import Pathways from "../components/Pathways";
import Pagination from "../components/Pagination";
import Layout from "../layout/Layout";

import "./HomePage.css";

const HomePage = () => {
  const { isLoading, data, isError, refetch } = useFetchPathways();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const filteredPathways = data.filter((pathway) =>
    pathway.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const totalPages = Math.ceil(filteredPathways.length / ITEMS_PER_PAGE);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <section className="page-header">
        <h1 className="page-title">Pathways</h1>
        <div className="search-section">
          <input
            type="text"
            placeholder="Search for pathways"
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </section>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <>
          <p>There was an error loading the data.</p>
          <button onClick={refetch}>Try again</button>
        </>
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
        <p>No pathways found</p>
      )}
    </Layout>
  );
};

export default HomePage;
