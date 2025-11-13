export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://bryan-odom.app.n8n.cloud/webhook/youtube-idea-v2",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json().catch(() => ({}));
    res.status(200).json({ message: "Forwarded to n8n", n8nResponse: data });
  } catch (err) {
    console.error("Error forwarding to n8n:", err);
    res.status(500).json({ error: "Failed to reach n8n" });
  }
}
