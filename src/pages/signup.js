import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.name} (${formData.email})`);
   
  };

  return (
    <Layout>
      <Head>
        <title>Create Account – MediMate</title>
      </Head>

      <section style={{ maxWidth: 400, margin: "3rem auto", padding: "1rem" }}>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          />
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
              backgroundColor: "#2a9d8f",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
      </section>
    </Layout>
  );
}
