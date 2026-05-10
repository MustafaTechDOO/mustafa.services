// Revolut amounts are in minor units (para = 1/100 RSD)
const PRODUCTS = {
  firma: {
    amount: 37140800, // 371.408 RSD × 100
    currency: "RSD",
    description: "Firmengründung d.o.o. – Mustafa-Services.com",
  },
  aufenthalt: {
    amount: 16389900, // 163.899 RSD × 100
    currency: "RSD",
    description: "Aufenthaltstitel Serbien – Mustafa-Services.com",
  },
  shareholder: {
    amount: 4388700, // 43.887 RSD × 100
    currency: "RSD",
    description: "Additional Shareholder – Mustafa-Services.com",
  },
  paket: {
    amount: 48664200, // 486.642 RSD × 100
    currency: "RSD",
    description: "Gesamtpaket (Firma + Aufenthaltstitel) – Mustafa-Services.com",
  },
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { productId } = req.body ?? {};
  const product = PRODUCTS[productId];
  if (!product) return res.status(400).json({ error: `Unknown product: ${productId}` });

  if (!process.env.REVOLUT_SECRET_KEY) {
    console.error("REVOLUT_SECRET_KEY is not set");
    return res.status(500).json({ error: "Payment not configured" });
  }

  const payload = {
    amount: product.amount,
    currency: product.currency,
    description: product.description,
  };

  try {
    const revolut = await fetch("https://merchant.revolut.com/api/1.0/orders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REVOLUT_SECRET_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await revolut.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!revolut.ok) {
      console.error("Revolut API error", revolut.status, data);
      return res.status(revolut.status).json({
        error: data?.message || data?.error || "Revolut API error",
        details: data,
        status: revolut.status,
      });
    }

    if (!data.public_id) {
      console.error("No public_id in response", data);
      return res.status(500).json({ error: "Invalid Revolut response", details: data });
    }

    return res.status(200).json({ publicId: data.public_id, orderId: data.id });
  } catch (err) {
    console.error("create-order fetch error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
