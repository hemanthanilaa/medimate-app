import formidable from 'formidable';
import pdf from 'pdf-parse';
import fs from 'fs';
import os from 'os';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = formidable({
    multiples: false,
    keepExtensions: true,
    uploadDir: os.tmpdir(),
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("❌ Error parsing form:", err);
      return res.status(500).json({ message: 'Form parsing failed' });
    }

    let file = files?.pdf;
    if (Array.isArray(file)) file = file[0];

    const filePath = file?.filepath || file?.path;

    if (!filePath) {
      console.error("❌ No file path found in uploaded file:", file);
      return res.status(400).json({ message: "No file uploaded or invalid file structure" });
    }

    try {
      const buffer = fs.readFileSync(filePath);
      const data = await pdf(buffer);
      const extractedText = data.text?.slice(0, 5000) || "No text found";

      fs.unlinkSync(filePath); // ✅ Clean up temp file

      return res.status(200).json({ text: extractedText });
    } catch (e) {
      console.error("❌ PDF parsing failed:", e);
      return res.status(500).json({ message: "Failed to parse PDF" });
    }
  });
}
