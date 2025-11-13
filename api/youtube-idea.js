export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://bryan-odom.app.n8n.cloud/webhook/youtube-idea",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(200).json({ message: "Forwarded to n8n", n8nResponse: data });
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Failed to forward request" });
  }
}
