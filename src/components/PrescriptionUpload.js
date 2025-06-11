import { useState, useEffect } from "react";
import styles from "../styles/Prescription.module.css";

export default function PrescriptionUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (file) {
      setIsProcessing(true);
      const timer = setTimeout(() => {
        const summaryData = {
  doctor: "Anushree",
  medicines: ["Metformin 500mg", "Atorvastatin 10mg"],
  notes: "Take with meals. Recheck sugar in 1 week."
};

        onUpload(summaryData);
        setIsProcessing(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [file]);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className={styles.uploadContainer}>
      <h2 className={styles.sectionTitle}>Upload Prescription</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className={styles.uploadInput}
      />
      {isProcessing && <p className={styles.processingText}>🧠 Processing...</p>}
    </div>
  );
}
