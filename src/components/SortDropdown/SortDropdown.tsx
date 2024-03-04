import "./SortDropdown.css";
import UpArrowIcon from "../../assets/icons/up-arrow.svg";
import DownArrowIcon from "../../assets/icons/down-arrow.svg";

interface SortDropdownProps {
  sortBy: string;
  sortOrder: string;
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  toggleSortOrder: () => void;
}

const SortDropdown = ({
  sortBy,
  sortOrder,
  handleSort,
  toggleSortOrder,
}: SortDropdownProps) => {
  return (
    <>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortBy} onChange={handleSort}>
        <option value="none">None</option>
        <option value="title">Title</option>
        <option value="duration">Duration</option>
      </select>

      <button
        onClick={toggleSortOrder}
        className="sort-order-toggler"
        disabled={sortBy === "none"}
      >
        <img
          src={sortOrder === "asc" ? DownArrowIcon : UpArrowIcon}
          alt={sortOrder === "asc" ? "down arrow" : "up arrow"}
          className="sort-order-icon"
        />
      </button>
    </>
  );
};

export default SortDropdown;
