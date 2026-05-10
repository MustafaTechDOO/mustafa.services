module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message } = req.body ?? {};
  if (!name || !email) return res.status(400).json({ error: "Name und E-Mail sind erforderlich." });

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "E-Mail nicht konfiguriert" });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px">
      <h2 style="color:#c3975a">Neue Kontaktanfrage – Mustafa-Services.com</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#666;width:100px">Name</td><td style="padding:8px 0;color:#111"><strong>${name}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0;color:#111"><a href="mailto:${email}">${email}</a></td></tr>
        ${message ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top">Nachricht</td><td style="padding:8px 0;color:#111">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
      </table>
    </div>
  `;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Mustafa-Services Website <noreply@mustafa-services.com>",
        to: ["mustafa@mustafa-services.com"],
        reply_to: email,
        subject: `Neue Anfrage von ${name}`,
        html,
      }),
    });

    const data = await r.json();
    if (!r.ok) {
      console.error("Resend error", r.status, data);
      return res.status(500).json({ error: "E-Mail konnte nicht gesendet werden." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact fetch error:", err);
    return res.status(500).json({ error: err.message || "Interner Fehler" });
  }
};
