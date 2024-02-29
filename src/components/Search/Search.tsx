import "./Search.css";

const Search = ({
  searchTerm,
  handleSearch,
}: {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="text"
      placeholder="Search for pathways"
      className="search-input"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default Search;
