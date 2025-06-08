import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About – MediMate</title>
        <meta name="description" content="Learn more about the MediMate app and our mission." />
      </Head>

      <section className="about-hero">
        <div className="container">
          <h1>About MediMate</h1>
          <p className="intro">
            Empowering patients with smart tools to manage their health, medications,
            and appointments all in one place.
            
          </p>
        </div>
      </section>

      <section className="about-content container">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            At MediMate, we believe that health management should be effortless and intuitive.
            Our mission is to build a trusted assistant that helps people take control of their
            well-being through timely reminders, clear tracking, and smart support.
          </p>
        </div>
          <div className="card">
          <h2>Our Vision</h2>
          <p>
            To become the most reliable digital companion in every household, making healthcare
            more proactive, personalized, and accessible bridging the gap between patients
            and effective health management worldwide.
          </p>
        </div>

        <div className="card">
          <h2>Why Choose MediMate?</h2>
          <ul>
            <li>Simple, clean interface designed for all age groups</li>
            <li>Personalized medication and doctor appointment reminders</li>
            <li>Secure, encrypted data for your peace of mind</li>
            <li>Multi-user support ideal for families and caretakers</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
