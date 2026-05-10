import { useNavigate } from "react-router-dom";

const gold = "#c3975a";
const cream = "#EDEAE3";
const bg = "#080808";
const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export default function DankePage() {
  const navigate = useNavigate();
  return (
    <div style={{ background: bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 5vw", fontFamily: sans }}>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{ fontSize: 64, marginBottom: 24 }}>✅</div>
        <h1 style={{ fontFamily: sans, fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: cream, margin: "0 0 16px", letterSpacing: -1.5 }}>
          Zahlung erfolgreich
        </h1>
        <p style={{ color: "#888", fontSize: 17, lineHeight: 1.75, margin: "0 0 12px" }}>
          Vielen Dank für Ihr Vertrauen. Wir melden uns innerhalb von <strong style={{ color: gold }}>24 Stunden</strong> auf Deutsch bei Ihnen.
        </p>
        <p style={{ color: "#555", fontSize: 14, margin: "0 0 40px" }}>
          Eine Bestätigung wurde an Ihre E-Mail-Adresse gesendet.
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            background: `linear-gradient(135deg, ${gold}, #f8f0a7 50%, ${gold})`,
            backgroundSize: "200%", color: "#0a0a0a",
            padding: "14px 32px", borderRadius: 4, border: "none",
            fontFamily: sans, fontWeight: 800, fontSize: 15, cursor: "pointer",
          }}
        >
          Zurück zur Startseite
        </button>
      </div>
    </div>
  );
}
