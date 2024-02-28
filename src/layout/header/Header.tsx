import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="logo.svg" alt="Logo" className="logo-img" />
        <span className="logo-text">Library</span>
      </div>
    </header>
  );
};

export default Header;
