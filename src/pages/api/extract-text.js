import pdf from "pdf-parse";
import formidable from "formidable";
import fs from "fs";

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
    keepExtensions: true,
    uploadDir: "./.temp",
  });

  // Ensure .temp folder exists
  await fs.promises.mkdir('./.temp', { recursive: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(" Formidable error:", err);
      return res.status(500).json({ message: "Error parsing form" });
    }

    const file = files?.pdf;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    let filepath = null;
    if (file.filepath) {
      filepath = file.filepath;
    } else if (file.path) {
      filepath = file.path;
    } else if (Array.isArray(file) && file[0]?.filepath) {
      filepath = file[0].filepath;
    } else {
      console.error(" No valid filepath found in uploaded file object:", file);
      return res.status(500).json({ message: "Missing file path" });
    }

    console.log("Uploaded file path:", filepath);

    try {
      const buffer = fs.readFileSync(filepath);
      const data = await pdf(buffer);
      const extracted = data.text?.slice(0, 5000) || "";

      //  CLEANUP: Delete the uploaded PDF file after processing
      fs.unlinkSync(filepath);
      console.log("File deleted:", filepath);

      return res.status(200).json({ text: extracted });
    } catch (parseErr) {
      console.error(" PDF parsing error:", parseErr);

      // Delete file even if parsing fails
      try {
        fs.unlinkSync(filepath);
        console.log("File deleted after failure:", filepath);
      } catch (cleanupErr) {
        console.error("Cleanup failed:", cleanupErr);
      }

      return res.status(500).json({ message: "Failed to parse PDF" });
    }
  });
}
