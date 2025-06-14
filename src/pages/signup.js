import Head from "next/head";
import Layout from "../components/Layout"; // adjust if your path is different
import { useState } from "react";

// Firebase
import { db } from "../../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save to Firestore under userDetail collection
      await addDoc(collection(db, "userDetail"), {
        name: formData.name,
        emailID: formData.email,
        pwd: formData.password, // 🔒 Warning: plain-text password for learning/demo only!
      });

      alert("Account created and saved to Firestore!");
      setFormData({ name: "", email: "", password: "" }); // Clear form
    } catch (error) {
      alert("Error creating account: " + error.message);
    }
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
