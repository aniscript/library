import Footer from "./footer/Footer";
import Header from "./header/Header";

import "./Layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main-wrapper">
      <Header />
      <section className="content-section">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
