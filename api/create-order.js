const PRODUCTS = {
  firma: {
    amount: 37140800,
    currency: "RSD",
    description: "Firmengründung d.o.o. – Mustafa.Services",
  },
  aufenthalt: {
    amount: 16389900,
    currency: "RSD",
    description: "Aufenthaltstitel Serbien – Mustafa.Services",
  },
  shareholder: {
    amount: 4388700,
    currency: "RSD",
    description: "Additional Shareholder – Mustafa.Services",
  },
  paket: {
    amount: 48664200,
    currency: "RSD",
    description: "Gesamtpaket (Firma + Aufenthaltstitel) – Mustafa.Services",
  },
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { productId } = req.body;
  const product = PRODUCTS[productId];
  if (!product) return res.status(400).json({ error: "Invalid product" });

  try {
    const response = await fetch("https://merchant.revolut.com/api/orders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REVOLUT_SECRET_KEY}`,
        "Content-Type": "application/json",
        "Revolut-Api-Version": "2024-09-01",
      },
      body: JSON.stringify({
        amount: product.amount,
        currency: product.currency,
        description: product.description,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || "Revolut API error" });
    }

    return res.status(200).json({ publicId: data.public_id });
  } catch (err) {
    console.error("create-order error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
