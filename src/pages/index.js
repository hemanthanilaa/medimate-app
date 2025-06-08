import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MediMate – Your Smart Medical Assistant</title>
        <meta name="description" content="Manage prescriptions, get reminders, and more with MediMate." />
      </Head>

      <section className="main">
        <div className="main-text">
          <h1>Stay on Top of Your Health — the Simple Way</h1>
          <p>
            MediMate helps you manage prescriptions, understand your treatment,
            and get helpful reminders — all in one place.
          </p>
          <a href="/get-started" className="btn-primary">
            Get Started
          </a>
        </div>
        <img src="/img.png" alt="MediMate" className="main-img" />
      </section>

  <section id="how-it-works" class="workflow">
  <h2>How MediMate Works</h2>
  <div class="workflow-steps">
    <div class="workflow-step">
      <div class="circle">1</div>
      <div>
        <h3>Sign Up & Create Profile</h3>
        <p>Provide your health basics to personalize your dashboard.</p>
      </div>
    </div>
    <div class="workflow-line"></div>
    <div class="workflow-step">
      <div class="circle">2</div>
      <div>
        <h3>Upload Your Prescription</h3>
        <p>Take a photo or upload a file and we digitize the content for you.</p>
      </div>
    </div>
    <div class="workflow-line"></div>
    <div class="workflow-step">
      <div class="circle">3</div>
      <div>
        <h3>Automatic Structuring</h3>
        <p>We sort your medicines by time, condition, and dosage instructions.</p>
      </div>
    </div>
    <div class="workflow-line"></div>
    <div class="workflow-step">
      <div class="circle">4</div>
      <div>
        <h3>Activate Smart Reminders</h3>
        <p>Set how you would like to be reminded: SMS, email, or app notification.</p>
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
}
