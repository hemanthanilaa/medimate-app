// src/pages/get-started.js
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function GetStarted() {
  return (
    <Layout>
      <Head>
        <title>Get Started - MediMate</title>
        <meta
          name="description"
          content="Start managing your health with MediMate today. Upload prescriptions, set reminders, and stay organized."
        />
      </Head>

      <section className="main" style={{ flexDirection: "column", textAlign: "center" }}>
        <h1>Get Started with MediMate</h1>
        <p style={{ maxWidth: 600, margin: "1rem auto" }}>
          Join MediMate to take control of your health. Create an account, upload your prescriptions, and never miss a medication dose again with our smart reminders.
        </p>
        <Link href="/signup" legacyBehavior>
          <a className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.2rem" }}>
            Create an Account
          </a>
        </Link>
        <p style={{ marginTop: "1rem" }}>
  Already have an account?{" "}
  <Link href="/login" style={{ color: "#e76f51", fontWeight: "bold" }}>
    Log In
  </Link>
</p>

      </section>
    </Layout>
  );
}
