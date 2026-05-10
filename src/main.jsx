import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./MustafaServices_LandingPage.jsx";
import KaufenPage from "./KaufenPage.jsx";
import DankePage from "./DankePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kaufen" element={<KaufenPage />} />
        <Route path="/danke" element={<DankePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
