export default function handler(req, res) {
  try {
    const data = JSON.parse(req.body || "{}");

    if (!data.name || !data.price) {
      return res.status(400).json({ error: "Missing fields" });
    }

    return res.status(200).json({
      link: "https://example.com/payment"
    });

  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
