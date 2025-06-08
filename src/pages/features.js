import Head from "next/head";
import Layout from "../components/Layout";

export default function Features() {
  return (
    <Layout>
      <Head>
        <title>Features - MediMate</title>
        <meta
          name="description"
          content="Explore the powerful features of MediMate for health management."
        />
      </Head>

      <section className="features">
        <h2>What You Can Do</h2>
        <div className="features-grid">
          <div className="card">
            <i className="fas fa-file-medical fa-2x"></i>
            <h3>Upload Prescriptions</h3>
            <p>Take a photo or upload a file — we’ll organize the info for you.</p>
            <div className="hover-summary">
              <h4>How It Works</h4>
              <ul>
                <li>Supports JPG, PNG, PDF formats</li>
                <li>Medicine information on prescription is scanned and extracted</li>
                <li>Prescriptions saved securely</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-notes-medical fa-2x"></i>
            <h3>Clear Summaries</h3>
            <p>Get easy-to-read summaries of your medications and instructions.</p>
            <div className="hover-summary">
              <h4>What's Included</h4>
              <ul>
                <li>Summarized medicine details</li>
                <li>Dosage and frequency breakdown</li>
                <li>Warnings for side effects</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-history fa-2x"></i>
            <h3>View Your History</h3>
            <p>Check old prescriptions and track your treatment journey.</p>
            <div className="hover-summary">
              <h4>Track Your Journey</h4>
              <ul>
                <li>Search by date, doctor, or medicine</li>
                <li>Instant access to older files</li>
                <li>Downloadable reports</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-bell fa-2x"></i>
            <h3>Set Medication Reminders</h3>
            <p>Never miss a dose with helpful text or email reminders.</p>
            <div className="hover-summary">
              <h4>Reminder Features</h4>
              <ul>
                <li>Custom timing for each medicine</li>
                <li>Choose text, email, or both</li>
                <li>Pause or stop anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
