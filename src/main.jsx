import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./MustafaServices_LandingPage.jsx";
import KaufenPage from "./KaufenPage.jsx";
import DankePage from "./DankePage.jsx";
import DatenschutzPage from "./DatenschutzPage.jsx";
import CookieBanner, { useAnalyticsConsent } from "./CookieBanner.jsx";

function Root() {
  useAnalyticsConsent();
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kaufen" element={<KaufenPage />} />
        <Route path="/danke" element={<DankePage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
      <CookieBanner />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
