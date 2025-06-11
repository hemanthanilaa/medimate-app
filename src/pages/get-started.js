
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function GetStarted() {
  return (
    <Layout>
      <Head>
        <title>Get Started – MediMate</title>
        <meta
          name="description"
          content="Start managing your health with MediMate. Understand prescriptions, track medication, and access your health history."
        />
      </Head>

      <section
        className="get-started-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3rem 1rem",
          textAlign: "center",
          background: "#f9f9f9",
          minHeight: "80vh",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#264653", marginBottom: "1rem" }}>
          Welcome to MediMate
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            maxWidth: "700px",
            lineHeight: "1.8",
            marginBottom: "3rem",
            color: "#555",
          }}
        >
          MediMate simplifies your healthcare journey. Upload prescriptions,
          receive smart summaries for better understanding, and easily track
          changes across your prescription history.
        </p>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    marginBottom: "2rem",
  }}
>
<Link
  href="/Prescription"
  style={{
    backgroundColor: "#e76f51", 
    padding: "1.25rem 3rem",
    borderRadius: "40px",
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    fontSize: "1.3rem",
    minWidth: "240px",
    textAlign: "center",
    transition: "background 0.3s",
    cursor: "pointer",
  }}
>
  Get Started
</Link>
</div>
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "2rem",
            maxWidth: "800px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            textAlign: "left",
          }}
        >
          <h2 style={{ color: "#264653", marginBottom: "1rem" }}>Why MediMate?</h2>
          <ul
            style={{
              lineHeight: "1.7",
              fontSize: "1.05rem",
              color: "#444",
              paddingLeft: "1.25rem",
            }}
          >
            <li>
              <strong>Smart Prescription Upload:</strong> We extract and explain your prescription in plain language.
            </li>
            <li>
              <strong>Easy-to-Understand Summaries:</strong> Skip the medical jargon—get clarity on what your doctor prescribed.
            </li>
            <li>
              <strong>History Comparison:</strong> Track medication changes and treatment progress over time.
            </li>
            <li>
              <strong>Reminders:</strong> Never miss a dose with intelligent alerts.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
