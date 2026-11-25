import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ArtisanList from "./pages/ArtisanList.jsx";
import ArtisanDetail from "./pages/ArtisanDetail.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/categorie/:slug" element={<ArtisanList />} />
        <Route path="/artisans" element={<ArtisanList />} />
        <Route path="/artisan/:id" element={<ArtisanDetail />} />
        {/* Pages légales : remplies plus tard par un cabinet spécialisé */}
        <Route
          path="/mentions-legales"
          element={<LegalPage title="Mentions légales" />}
        />
        <Route
          path="/donnees-personnelles"
          element={<LegalPage title="Données personnelles" />}
        />
        <Route
          path="/accessibilite"
          element={<LegalPage title="Accessibilité" />}
        />
        <Route path="/cookies" element={<LegalPage title="Cookies" />} />
        {/* Toute autre URL → 404 (exigence du brief) */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
