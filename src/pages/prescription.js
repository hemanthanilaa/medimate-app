import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import PrescriptionUpload from "../components/PrescriptionUpload";
import PrescriptionSummary from "../components/PrescriptionSummary";
import styles from "../styles/Prescription.module.css";

export default function PrescriptionPage() {
  const [summary, setSummary] = useState(null);

  return (
    <Layout>
      <Head>
        <title>Prescription AI – MediMate</title>
        <meta name="description" content="Upload your prescription and let MediMate summarize it using AI." />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}> Upload & Summarize Your Prescription</h1>
        <p className={styles.description}>
          MediMate helps you understand your prescription in simple language using AI. Upload an image to get started.
        </p>

        {/* Upload component */}
        <PrescriptionUpload onUpload={setSummary} />

        {/* Summary component */}
        <PrescriptionSummary data={summary} />
      </div>
    </Layout>
  );
}
