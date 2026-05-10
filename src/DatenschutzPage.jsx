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

export default function DatenschutzPage() {
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
            Mustafa<span style={{ color: gold }}>.</span>Services
          </a>
          <a href="/" style={{ color: muted, fontFamily: sans, fontSize: 13, textDecoration: "none" }}>← Zurück</a>
        </div>
      </nav>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "120px 5vw 100px" }}>
        <div style={{ color: gold, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>
          RECHTLICHES
        </div>
        <h1 style={{ fontFamily: sans, fontWeight: 900, fontSize: "clamp(28px,4vw,48px)", color: cream, margin: "0 0 12px", letterSpacing: -1.5 }}>
          Datenschutzerklärung
        </h1>
        <p style={{ color: "#444", fontFamily: sans, fontSize: 13, marginBottom: 64 }}>
          Stand: Mai 2026
        </p>

        <Section title="1. Verantwortlicher">
          <P>
            Verantwortlicher im Sinne der DSGVO ist:
          </P>
          <P>
            <strong style={{ color: cream }}>Mustafa.Services</strong><br />
            Belgrad, Serbien<br />
            E-Mail: <a href="mailto:info@mustafa.services" style={{ color: gold, textDecoration: "none" }}>info@mustafa.services</a>
          </P>
        </Section>

        <Section title="2. Hosting">
          <P>
            Diese Website wird gehostet bei <strong style={{ color: cream }}>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
          </P>
          <P>
            Beim Aufruf der Website werden automatisch Zugriffsdaten (IP-Adresse, Browser, Betriebssystem, Referrer, Datum/Uhrzeit) in Server-Logfiles gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb). Die Daten werden nach 30 Tagen gelöscht.
          </P>
          <P>
            Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: gold, textDecoration: "none" }}>vercel.com/legal/privacy-policy</a>
          </P>
        </Section>

        <Section title="3. Cookies & Einwilligungsverwaltung">
          <P>
            Diese Website verwendet ein Cookie-Banner, um Ihre Einwilligung für optionale Cookies einzuholen. Ihre Entscheidung wird im lokalen Speicher Ihres Browsers (<code style={{ color: gold }}>localStorage</code>) unter dem Schlüssel <code style={{ color: gold }}>cookie_consent</code> gespeichert.
          </P>
          <P>
            Technisch notwendige Cookies werden ohne Einwilligung gesetzt. Analyse-Cookies werden nur nach ausdrücklicher Zustimmung aktiviert. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Browserdaten löschen.
          </P>
        </Section>

        <Section title="4. Google Analytics">
          <P>
            Diese Website verwendet <strong style={{ color: cream }}>Google Analytics 4</strong> (Tag-ID: G-D1T6PCGZ18), einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland – <strong>nur nach Ihrer ausdrücklichen Einwilligung</strong>.
          </P>
          <P>
            Google Analytics setzt Cookies und überträgt Nutzungsdaten (anonymisierte IP, Seitenaufrufe, Verweildauer) an Google-Server in den USA. Die IP-Adresse wird vor der Übertragung anonymisiert (IP-Anonymisierung aktiviert).
          </P>
          <P>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Datentransfer in die USA erfolgt auf Basis des EU-US Data Privacy Framework. Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: gold, textDecoration: "none" }}>policies.google.com/privacy</a>
          </P>
        </Section>

        <Section title="5. Zahlungsabwicklung (Revolut)">
          <P>
            Zahlungen werden über <strong style={{ color: cream }}>Revolut Ltd.</strong>, 7 Westferry Circus, Canary Wharf, London E14 4HD, Vereinigtes Königreich, abgewickelt.
          </P>
          <P>
            Bei Klick auf „Jetzt kaufen" werden zur Erstellung einer Zahlungsanforderung technische Daten (gewähltes Produkt, Betrag, Währung) an unsere Server-Funktion übermittelt. Diese erstellt serverseitig eine Bestellung bei Revolut. Ihre Zahlungsdaten (Kartennummer etc.) werden ausschließlich von Revolut verarbeitet – wir erhalten und speichern keine Zahlungsmitteldaten.
          </P>
          <P>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Datenschutzerklärung von Revolut: <a href="https://www.revolut.com/legal/privacy" target="_blank" rel="noopener noreferrer" style={{ color: gold, textDecoration: "none" }}>revolut.com/legal/privacy</a>
          </P>
        </Section>

        <Section title="6. Kontaktformular">
          <P>
            Wenn Sie das Kontaktformular nutzen, werden die eingegebenen Daten (Name, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nicht an Dritte weitergegeben und nach Abschluss der Korrespondenz gelöscht.
          </P>
        </Section>

        <Section title="7. Ihre Rechte">
          <P>Sie haben folgende Rechte gegenüber uns bezüglich Ihrer personenbezogenen Daten:</P>
          {[
            ["Auskunft", "Art. 15 DSGVO – Welche Daten wir über Sie gespeichert haben"],
            ["Berichtigung", "Art. 16 DSGVO – Korrektur unrichtiger Daten"],
            ["Löschung", "Art. 17 DSGVO – „Recht auf Vergessenwerden""],
            ["Einschränkung", "Art. 18 DSGVO – Verarbeitungsbeschränkung"],
            ["Datenübertragbarkeit", "Art. 20 DSGVO – Herausgabe in maschinenlesbarem Format"],
            ["Widerspruch", "Art. 21 DSGVO – Widerspruch gegen berechtigte Interessen"],
            ["Widerruf", "Art. 7 Abs. 3 DSGVO – Widerruf einer erteilten Einwilligung"],
          ].map(([right, desc]) => (
            <P key={right}>
              <strong style={{ color: cream }}>Recht auf {right}:</strong> {desc}
            </P>
          ))}
          <P>
            Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:info@mustafa.services" style={{ color: gold, textDecoration: "none" }}>info@mustafa.services</a>
          </P>
          <P>
            Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </P>
        </Section>

        <Section title="8. Datensicherheit">
          <P>
            Die Übertragung erfolgt ausschließlich über HTTPS (SSL/TLS-Verschlüsselung). Wir treffen technische und organisatorische Maßnahmen zum Schutz Ihrer Daten gemäß Art. 32 DSGVO.
          </P>
        </Section>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #111", padding: "32px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#2e2e2e" }}>© {new Date().getFullYear()} Mustafa.Services</span>
          <a href="/kaufen" style={{ fontFamily: sans, fontSize: 13, color: gold, textDecoration: "none" }}>Preise & Buchung</a>
        </div>
      </footer>
    </div>
  );
}
