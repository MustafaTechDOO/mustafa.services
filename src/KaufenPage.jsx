import { useState, useCallback } from "react";

const gold = "#c3975a";
const cream = "#EDEAE3";
const bg = "#080808";
const surface = "#111111";
const muted = "#666";
const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const EUR_RATE = 117;

const PRODUCTS = [
  {
    id: "paket",
    badge: "BELIEBTESTE WAHL",
    icon: "🏆",
    title: "Gesamtpaket",
    subtitle: "Firma + Aufenthaltstitel",
    priceRSD: 486642,
    includes: [
      "Firmengründung d.o.o.",
      "1× Aufenthaltstitel",
      "Bankkonto-Eröffnung",
      "Komplette Betreuung auf Deutsch",
    ],
    highlight: true,
  },
  {
    id: "firma",
    badge: null,
    icon: "🏢",
    title: "Firmengründung",
    subtitle: "d.o.o. in Serbien",
    priceRSD: 371408,
    includes: [
      "d.o.o. Gründung komplett",
      "Steuer- & Handelsregistrierung",
      "Bankkonto-Eröffnung",
      "Deutsch-sprachige Betreuung",
    ],
    highlight: false,
  },
  {
    id: "aufenthalt",
    badge: null,
    icon: "🛂",
    title: "Aufenthaltstitel",
    subtitle: "Temporäre Boravak",
    priceRSD: 163899,
    includes: [
      "Antragsstellung komplett",
      "Dokumenten-Vorbereitung",
      "Behördenbegleitung",
      "Status-Updates auf Deutsch",
    ],
    highlight: false,
  },
  {
    id: "shareholder",
    badge: null,
    icon: "👤",
    title: "Additional Shareholder",
    subtitle: "Weiterer Gesellschafter",
    priceRSD: 43887,
    includes: [
      "Eintragung ins Handelsregister",
      "Notarielle Beurkundung",
      "Steuerliche Anpassung",
      "Dokumentation auf Deutsch",
    ],
    highlight: false,
  },
];

function formatRSD(amount) {
  return new Intl.NumberFormat("de-DE").format(amount) + " RSD";
}

function formatEUR(amount) {
  return "≈ " + new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.round(amount / EUR_RATE)) + " €";
}

function useRevolutScript() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.RevolutCheckout) { setReady(true); return; }
    const script = document.createElement("script");
    script.src = "https://merchant.revolut.com/embed.js";
    script.async = true;
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, []);
  return ready;
}

function ProductCard({ product, onBuy, loading }) {
  const isLoading = loading === product.id;
  return (
    <div style={{
      position: "relative",
      background: product.highlight ? "linear-gradient(145deg, #141410, #0f0f0b)" : surface,
      border: product.highlight ? `1px solid rgba(195,151,90,0.55)` : "1px solid #1d1d1d",
      borderRadius: 6,
      padding: "36px 32px 32px",
      display: "flex", flexDirection: "column",
      boxShadow: product.highlight ? `0 0 60px rgba(195,151,90,0.08)` : "none",
      transition: "transform 0.25s, box-shadow 0.25s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = product.highlight ? "0 8px 60px rgba(195,151,90,0.15)" : "0 8px 32px rgba(0,0,0,0.4)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = product.highlight ? "0 0 60px rgba(195,151,90,0.08)" : "none"; }}
    >
      {product.badge && (
        <div style={{
          position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
          background: `linear-gradient(135deg, ${gold}, #f8f0a7 50%, ${gold})`,
          color: "#0a0a0a", fontSize: 10, fontWeight: 800, letterSpacing: 1.5,
          padding: "5px 16px", borderRadius: 20, whiteSpace: "nowrap", fontFamily: sans,
        }}>{product.badge}</div>
      )}

      <div style={{ fontSize: 36, marginBottom: 16 }}>{product.icon}</div>
      <h3 style={{ fontFamily: sans, fontWeight: 800, fontSize: 22, color: cream, margin: "0 0 4px", letterSpacing: -0.5 }}>
        {product.title}
      </h3>
      <div style={{ color: gold, fontFamily: sans, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24 }}>
        {product.subtitle}
      </div>

      <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ fontFamily: sans, fontWeight: 900, fontSize: 28, color: cream, letterSpacing: -1 }}>
          {formatRSD(product.priceRSD)}
        </div>
        <div style={{ fontFamily: sans, fontSize: 14, color: muted, marginTop: 4 }}>
          {formatEUR(product.priceRSD)}
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", flex: 1 }}>
        {product.includes.map(item => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, fontFamily: sans, fontSize: 14, color: "#888", lineHeight: 1.5 }}>
            <span style={{ color: gold, flexShrink: 0, marginTop: 1 }}>✓</span>
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onBuy(product.id)}
        disabled={!!loading}
        style={{
          background: product.highlight
            ? `linear-gradient(135deg, ${gold}, #f8f0a7 50%, ${gold})`
            : "transparent",
          backgroundSize: "200%",
          border: product.highlight ? "none" : `1px solid rgba(195,151,90,0.5)`,
          color: product.highlight ? "#0a0a0a" : gold,
          padding: "14px 24px", borderRadius: 4,
          fontFamily: sans, fontWeight: 800, fontSize: 15,
          cursor: loading ? "wait" : "pointer",
          opacity: loading && !isLoading ? 0.5 : 1,
          transition: "opacity 0.2s",
          width: "100%",
        }}
      >
        {isLoading ? "Wird geladen…" : "Jetzt kaufen"}
      </button>
    </div>
  );
}

const BASE_URL = "https://mustafa-services.com";

export default function KaufenPage() {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const revolutReady = useRevolutScript();

  const handleBuy = useCallback(async (productId) => {
    if (!revolutReady) { setError("Checkout wird noch geladen. Bitte kurz warten."); return; }
    setLoading(productId);
    setError(null);

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (!res.ok || !data.publicId) throw new Error(data.error || "Order konnte nicht erstellt werden.");

      const checkout = await window.RevolutCheckout(data.publicId, "prod");
      checkout.payWithRedirect({
        successUrl: `${BASE_URL}/danke`,
        cancelUrl:  `${BASE_URL}/kaufen`,
        failUrl:    `${BASE_URL}/kaufen?error=1`,
      });
    } catch (err) {
      setError(err.message);
      setLoading(null);
    }
  }, [revolutReady]);

  return (
    <div style={{ background: bg, minHeight: "100vh", fontFamily: sans }}>
      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(8,8,8,0.97)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(195,151,90,0.1)", padding: "0 5vw",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <span style={{ fontFamily: sans, fontWeight: 700, fontSize: 20, color: cream, letterSpacing: -0.5 }}>
              Mustafa<span style={{ color: gold }}>-</span>Services
            </span>
          </a>
          <a href="/" style={{ color: muted, fontFamily: sans, fontSize: 13, textDecoration: "none" }}>
            ← Zurück zur Startseite
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ paddingTop: 72 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 5vw 60px", textAlign: "center" }}>
          <div style={{ color: gold, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>
            PAKETE & PREISE
          </div>
          <h1 style={{ fontFamily: sans, fontWeight: 900, fontSize: "clamp(32px, 5vw, 60px)", color: cream, margin: "0 0 20px", letterSpacing: -2 }}>
            Ihr Neustart in Serbien
          </h1>
          <p style={{ color: muted, fontSize: 17, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 16px" }}>
            Alle Preise inkl. vollständiger Betreuung auf Deutsch. Einmalige Zahlung, kein Abo.
          </p>
          <p style={{ color: "#333", fontSize: 12, fontFamily: sans }}>
            Preise in RSD · Wechselkurs ~117 RSD/€ · inkl. MwSt.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 5vw 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24, alignItems: "start",
        }}>
          {PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} onBuy={handleBuy} loading={loading} />
          ))}
        </div>

        {/* Error */}
        {error && (
          <div style={{
            maxWidth: 560, margin: "-20px auto 60px", padding: "16px 24px",
            background: "rgba(220,50,50,0.1)", border: "1px solid rgba(220,50,50,0.3)",
            borderRadius: 4, color: "#e88", fontFamily: sans, fontSize: 14, textAlign: "center",
          }}>
            {error}
          </div>
        )}

        {/* Trust row */}
        <div style={{ borderTop: "1px solid #111", padding: "40px 5vw" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[["🔒", "SSL-verschlüsselt"], ["🏦", "Revolut Checkout"], ["📞", "Support auf Deutsch"], ["✅", "Rückfragen vor Kauf"]].map(([icon, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, color: muted, fontFamily: sans, fontSize: 13 }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
