import "./SortDropdown.css";
import UpArrowIcon from "../assets/icons/up-arrow.svg";
import DownArrowIcon from "../assets/icons/down-arrow.svg";

interface SortDropdownProps {
  sortBy: string;
  sortOrder: string;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  toggleSortOrder: () => void;
}

const SortDropdown = ({
  sortBy,
  sortOrder,
  handleSortChange,
  toggleSortOrder,
}: SortDropdownProps) => {
  return (
    <>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="">No Sorting</option>
        <option value="title">Title</option>
        <option value="duration">Duration</option>
      </select>
      <div onClick={toggleSortOrder} className="sort-order-toggler">
        {sortOrder === "asc" ? (
          <img
            src={DownArrowIcon}
            alt="down arrow"
            className="sort-order-icon"
          />
        ) : (
          <img src={UpArrowIcon} alt="up arrow" className="sort-order-icon" />
        )}
      </div>
    </>
  );
};

export default SortDropdown;
