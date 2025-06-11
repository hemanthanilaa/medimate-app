import { useState, useEffect } from "react";
import styles from "../styles/Prescription.module.css";

export default function PrescriptionSummary({ data }) {
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    // only show if data is defined and has doctor/medicines
    if (data && data.doctor && data.medicines?.length > 0) {
      setShowSummary(true);
    }
  }, [data]);

  if (!showSummary) return null;

  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles.sectionTitle}>Prescription Summary</h2>
      <p className={styles.summaryText}><strong>Doctor:</strong> {data.doctor}</p>
      <ul className={styles.medicineList}>
        {data.medicines.map((med, i) => (
          <li key={i}>{med}</li>
        ))}
      </ul>
      <p className={styles.summaryText}><strong>Notes:</strong> {data.notes}</p>
    </div>
  );
}
