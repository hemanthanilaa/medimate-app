import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/GetStarted.module.css';

export default function Prescription() {
  const [pdfText, setPdfText] = useState("");
  const [summary, setSummary] = useState("");
  const [loadingText, setLoadingText] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const router = useRouter(); 

  const handlePdfUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }

    setLoadingText(true);
    setSummary("");
    setPdfText("");

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const res = await fetch("/api/extract-text", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPdfText(data.text || "No text found.");
    } catch (err) {
      console.error("Text extraction error:", err);
      setPdfText("Failed to extract text.");
    } finally {
      setLoadingText(false);
    }
  };

  const summarizeText = async () => {
    if (!pdfText.trim()) return;

    setLoadingSummary(true);
    setSummary("");

    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: pdfText }),
      });

      const data = await res.json();
      setSummary(data.summary || "No summary generated.");
    } catch (err) {
      console.error("Summarize error:", err);
      setSummary("Failed to summarize.");
    } finally {
      setLoadingSummary(false);
    }
  };

  return (
    <div className={styles.container}>
      
      <button onClick={() => router.back()} className={styles.backButton}>
        ← Back
      </button>

      <h1 className={styles.title}>🩺 MediMate – Summarize Medical Report</h1>
      <br /><br />
      <label htmlFor="file-upload" className={styles.uploadLabel}>
        Upload Medical Report
      </label>
      <br /><br />
      <input
        id="file-upload"
        type="file"
        name="pdf"
        accept=".pdf"
        onChange={handlePdfUpload}
        className={styles.hiddenInput}
      />

      {loadingText && <p>Extracting text...</p>}

      {pdfText && (
        <div style={{ marginTop: "2rem" }}>
          <label><strong>Extracted Text:</strong></label>
          <textarea
            rows="12"
            value={pdfText}
            onChange={(e) => setPdfText(e.target.value)}
            className={styles.textarea}
          />
          <button onClick={summarizeText} className={styles.summarizeButton}>
            {loadingSummary ? " Summarizing..." : " Summarize Text"}
          </button>
        </div>
      )}

      {summary && (
        <div className={styles.summaryBox}>
          <h3 className={styles.summaryTitle}>AI Summary:</h3>
          <p className={styles.summaryText}>{summary}</p>
        </div>
      )}
    </div>
  );
}