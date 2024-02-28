import { useState } from "react";
import useFetchPathways from "../actions/useFetchPathways";
import Pathways from "../components/Pathways";
import Layout from "../layout/Layout";

import "./HomePage.css";

const HomePage = () => {
  const { isLoading, data, isError, refetch } = useFetchPathways();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPathways = data.filter((pathway) =>
    pathway.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
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
            onChange={(e) => handleSearchChange(e)}
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
      ) : data && !isLoading && !isError && data.length > 0 ? (
        <Pathways pathways={filteredPathways} />
      ) : (
        <p>No pathways found</p>
      )}
    </Layout>
  );
};

export default HomePage;
