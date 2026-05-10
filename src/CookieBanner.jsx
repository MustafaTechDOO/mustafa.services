import { useState, useEffect } from "react";

const gold = "#c3975a";
const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const GA_ID = "G-D1T6PCGZ18";

function loadGA() {
  if (window.__gaLoaded) return;
  window.__gaLoaded = true;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
}

export function useAnalyticsConsent() {
  useEffect(() => {
    if (localStorage.getItem("cookie_consent") === "accepted") {
      loadGA();
    }
  }, []);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    loadGA();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: "rgba(10,10,10,0.97)", backdropFilter: "blur(16px)",
      borderTop: "1px solid rgba(195,151,90,0.2)",
      padding: "20px 5vw",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 24, flexWrap: "wrap",
      }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ fontFamily: sans, fontSize: 13, color: "#888", margin: 0, lineHeight: 1.6 }}>
            Diese Website verwendet Cookies für anonyme Nutzungsanalysen (Google Analytics).{" "}
            Ihre Daten werden nicht verkauft.{" "}
            <a href="/datenschutz" style={{ color: gold, textDecoration: "none" }}>Datenschutz</a>
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          <button onClick={decline} style={{
            background: "transparent", border: "1px solid #333",
            color: "#555", padding: "10px 22px", borderRadius: 4,
            fontFamily: sans, fontSize: 13, fontWeight: 600, cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#555"; e.target.style.color = "#888"; }}
            onMouseLeave={e => { e.target.style.borderColor = "#333"; e.target.style.color = "#555"; }}
          >
            Ablehnen
          </button>
          <button onClick={accept} style={{
            background: `linear-gradient(135deg, ${gold}, #f8f0a7 50%, ${gold})`,
            backgroundSize: "200%", border: "none",
            color: "#0a0a0a", padding: "10px 22px", borderRadius: 4,
            fontFamily: sans, fontSize: 13, fontWeight: 700, cursor: "pointer",
          }}>
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
