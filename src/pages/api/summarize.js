export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { text } = req.body;

  if (!text || text.trim().length < 10) {
    return res.status(400).json({ message: "No valid text provided" });
  }

  const prompt = `
You are a medical assistant trained to explain complicated medical reports in a simple and clear way to regular people who don’t understand medical terms.

Use the following guidelines:
- Use short, clear sentences.
- Explain medical terms in parentheses.
- Focus on what happened to the patient, what was found, and what treatment was done.
- End with a summary of the key findings and outcomes.


Here is the medical report:
"${text}"

Now summarize this in plain, easy-to-understand language:
`;

  try {
    const response = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-r-plus", 
        prompt,
        max_tokens: 400,
        temperature: 0.5,
      }),
    });

    const result = await response.json();

    const summary = result.generations?.[0]?.text?.trim() || "No summary generated.";
    return res.status(200).json({ summary });
  } catch (error) {
    console.error("Summarization error:", error);
    return res.status(500).json({ message: "Failed to summarize text" });
  }
}
