// src/pages/get-started.js
import Head from "next/head";
import Layout from "../components/Layout";

export default function GetStarted() {
  return (
    <Layout>
      <Head>
        <title>Get Started - MediMate</title>
        <meta
          name="description"
          content="Start managing your health with MediMate today. Upload prescriptions, get simple summaries, and compare with previous treatments."
        />
      </Head>

      <section className="main" style={{ flexDirection: "column", textAlign: "center" }}>
        <h1>Get Started with MediMate</h1>
        <p style={{ maxWidth: 650, margin: "1rem auto", fontSize: "1.1rem", lineHeight: "1.8" }}>
          Begin your journey towards better health with MediMate. Upload your prescription by simply scanning or selecting a photo. We make it easy to understand by summarizing key details like medicine names, dosage, and timing in clear, everyday language.
        </p>
        <p style={{ maxWidth: 650, margin: "1rem auto", fontSize: "1.1rem", lineHeight: "1.8" }}>
          Every time you upload a new prescription, it’s saved securely in your account. This allows you to go back and review previous prescriptions, see what has changed, and track your progress over time. MediMate helps you stay informed and in control of your treatment.
        </p>
      </section>
    </Layout>
  );
}
