import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="logo.svg" alt="Logo" className="logo-img" />
        <span className="logo-text">Library</span>
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search for books"
          className="search-input"
        />
      </div>
    </header>
  );
};

export default Header;
