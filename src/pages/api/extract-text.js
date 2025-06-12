import formidable from "formidable";
import pdf from "pdf-parse";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = formidable({
    multiples: false,
    fileWriteStreamHandler: () => null, // Prevents writing to disk
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("❌ Form parse error:", err);
      return res.status(500).json({ message: "Error parsing form" });
    }

    const file = files?.pdf;

    if (!file || !file[0]?.originalFilename || !file[0]?.buffer) {
      return res.status(400).json({ message: "No valid file uploaded" });
    }

    try {
      const buffer = file[0].buffer;
      const data = await pdf(buffer);
      const extracted = data.text?.slice(0, 5000) || "No text found.";
      return res.status(200).json({ text: extracted });
    } catch (parseErr) {
      console.error("❌ PDF parsing error:", parseErr);
      return res.status(500).json({ message: "Failed to parse PDF" });
    }
  });
}
