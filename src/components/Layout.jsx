import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// Ramène le scroll en haut à chaque changement de page
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a href="#contenu" className="skip-link">
        Aller au contenu principal
      </a>
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
