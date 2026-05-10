const gold = "#c3975a";
const cream = "#EDEAE3";
const bg = "#080808";
const muted = "#666";
const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: 20, color: cream, margin: "0 0 16px", letterSpacing: -0.3 }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function P({ children }) {
  return (
    <p style={{ fontFamily: sans, fontSize: 15, color: muted, lineHeight: 1.8, margin: "0 0 12px" }}>
      {children}
    </p>
  );
}

export default function ImpressumPage() {
  return (
    <div style={{ background: bg, minHeight: "100vh", fontFamily: sans }}>
      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(8,8,8,0.97)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(195,151,90,0.1)", padding: "0 5vw",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="/" style={{ fontFamily: sans, fontWeight: 700, fontSize: 20, color: cream, letterSpacing: -0.5, textDecoration: "none" }}>
            Mustafa<span style={{ color: gold }}>-</span>Services
          </a>
          <a href="/" style={{ color: muted, fontFamily: sans, fontSize: 13, textDecoration: "none" }}>← Zurück</a>
        </div>
      </nav>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "120px 5vw 100px" }}>
        <div style={{ color: gold, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>
          RECHTLICHES
        </div>
        <h1 style={{ fontFamily: sans, fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: cream, margin: "0 0 12px", letterSpacing: -1.5 }}>
          Impressum
        </h1>
        <p style={{ color: "#444", fontFamily: sans, fontSize: 13, marginBottom: 64 }}>
          Angaben gemäß § 5 TMG
        </p>

        <Section title="Anbieter">
          <P>
            <strong style={{ color: cream }}>Mustafa-Services</strong> ist eine Marke von:
          </P>
          <P>
            <strong style={{ color: cream }}>MUSTAFA TECH VCC</strong><br />
            (Дружество с променлив капитал / Variable Capital Company)<br />
            бул. Цариградско Шосе 115M, Сграда Д, 1F<br />
            жк. Полигона, р-н Младост<br />
            1784 София, Булгарие<br />
            <br />
            EIK: 208694781<br />
            UID (MwSt.): BG208694781
          </P>
          <P>
            sowie
          </P>
          <P>
            <strong style={{ color: cream }}>MUSTAFA.TECH DOO BEOGRAD</strong><br />
            Takovska 47/3<br />
            11108 Beograd-Palilula, Serbien<br />
            <br />
            MB: 22166921<br />
            PIB: 115501333
          </P>
          <P>
            E-Mail: <a href="mailto:mustafa@mustafa-services.com" style={{ color: gold, textDecoration: "none" }}>mustafa@mustafa-services.com</a>
          </P>
        </Section>

        <Section title="Inhaltlich verantwortlich">
          <P>
            Mustafa Fiedelsberger – MUSTAFA TECH VCC (Anschrift wie oben)
          </P>
        </Section>

        <Section title="Hinweis zur EU-Streitschlichtung">
          <P>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: gold, textDecoration: "none" }}>
              https://ec.europa.eu/consumers/odr
            </a>
          </P>
          <P>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </P>
        </Section>

        <Section title="Haftung für Inhalte">
          <P>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </P>
          <P>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </P>
        </Section>

        <Section title="Haftung für Links">
          <P>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
            haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </P>
          <P>
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </P>
        </Section>

        <Section title="Urheberrecht">
          <P>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
            Autors bzw. Erstellers.
          </P>
        </Section>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #111", padding: "32px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#2e2e2e" }}>© {new Date().getFullYear()} Mustafa-Services.com</span>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/datenschutz" style={{ fontFamily: sans, fontSize: 13, color: muted, textDecoration: "none" }}>Datenschutz</a>
            <a href="/kaufen" style={{ fontFamily: sans, fontSize: 13, color: gold, textDecoration: "none" }}>Preise & Buchung</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
