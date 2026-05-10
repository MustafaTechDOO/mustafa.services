const crypto = require("crypto");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const rawBody = JSON.stringify(req.body);
  const signature = req.headers["revolut-signature"] ?? "";

  if (process.env.REVOLUT_WEBHOOK_SECRET) {
    const [, v1] = signature.match(/v1=([a-f0-9]+)/) ?? [];
    if (!v1) {
      console.warn("Webhook: missing v1 signature");
      return res.status(400).json({ error: "Missing signature" });
    }
    const expected = crypto
      .createHmac("sha256", process.env.REVOLUT_WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex");
    if (!crypto.timingSafeEqual(Buffer.from(v1, "hex"), Buffer.from(expected, "hex"))) {
      console.warn("Webhook: invalid signature");
      return res.status(401).json({ error: "Invalid signature" });
    }
  }

  const event = req.body;
  const type = event?.event ?? event?.type ?? "UNKNOWN";
  console.log("Revolut webhook:", type, JSON.stringify(event).slice(0, 500));

  if (type === "ORDER_COMPLETED" || type === "PAYMENT_COMPLETED") {
    const orderId = event.order_id ?? event.id ?? "–";
    const amount = event.order_amount ?? event.amount;
    const currency = event.order_currency ?? event.currency ?? "EUR";
    const amountFormatted = amount ? `${(amount / 100).toFixed(2)} ${currency}` : "–";
    const description = event.description ?? "–";

    if (process.env.RESEND_API_KEY) {
      const html = `
        <div style="font-family:sans-serif;max-width:600px">
          <h2 style="color:#c3975a">✅ Zahlung eingegangen – Mustafa-Services.com</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px">Order-ID</td><td style="padding:8px 0;color:#111">${orderId}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Betrag</td><td style="padding:8px 0;color:#111"><strong>${amountFormatted}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#666">Produkt</td><td style="padding:8px 0;color:#111">${description}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Status</td><td style="padding:8px 0;color:#27ae60"><strong>BEZAHLT</strong></td></tr>
          </table>
          <p style="color:#888;font-size:13px;margin-top:24px">Bitte Kunden kontaktieren und Onboarding starten.</p>
        </div>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Mustafa-Services <noreply@mustafa-services.com>",
          to: ["mustafa@mustafa-services.com"],
          subject: `✅ Zahlung ${amountFormatted} – ${description}`,
          html,
        }),
      }).catch(err => console.error("Webhook email error:", err));
    }
  }

  return res.status(200).json({ received: true });
};
