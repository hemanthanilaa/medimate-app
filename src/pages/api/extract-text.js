import formidable from 'formidable';
import pdf from 'pdf-parse';
import fs from 'fs';

// Required by Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = formidable({
    multiples: false,
    keepExtensions: true,
    uploadDir: '/tmp', // ✅ Use Vercel's writable temp dir
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('❌ Error parsing form:', err);
      return res.status(500).json({ message: 'Form parsing failed' });
    }

    const file = files.pdf;
    const filePath = file?.filepath || file?.path;

    if (!filePath) {
      return res.status(400).json({ message: 'No file path found' });
    }

    try {
      const buffer = fs.readFileSync(filePath);
      const data = await pdf(buffer);
      const text = data.text?.slice(0, 5000) || 'No text found';

      // Optional: clean up file from /tmp
      fs.unlinkSync(filePath);

      return res.status(200).json({ text });
    } catch (err) {
      console.error('❌ PDF parse error:', err);
      return res.status(500).json({ message: 'Failed to extract text from PDF' });
    }
  });
}
