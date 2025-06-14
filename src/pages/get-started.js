import Head from "next/head";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function GetStarted() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Get Started – MediMate</title>
      </Head>

      <section style={{ maxWidth: 500, margin: "4rem auto", padding: "1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Welcome to MediMate</h1>
        <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
          Your personal AI-powered medical assistant. Upload reports, get instant summaries, and track your health history with ease.
        </p>

        <button
          onClick={() => router.push("/signup")}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#264653",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Create Account
        </button>

        <p style={{ color: "#333", marginTop: "1rem" }}>
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            style={{
              background: "none",
              border: "none",
              color: "#e76f51",
              fontWeight: "bold",
              cursor: "pointer",
              padding: 0,
              fontSize: "1rem",
              textDecoration: "underline",
            }}
          >
            Log In
          </button>
        </p>
      </section>
    </Layout>
  );
}
