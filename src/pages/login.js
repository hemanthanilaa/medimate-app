import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${formData.email}`);
  };

  return (
    <Layout>
      <Head>
        <title>Log In – MediMate</title>
      </Head>

      <section style={{ maxWidth: 400, margin: "3rem auto", padding: "1rem" }}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              backgroundColor: "#e76f51",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Log In
          </button>
        </form>
      </section>
    </Layout>
  );
}
