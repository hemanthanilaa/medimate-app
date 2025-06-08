import Head from "next/head";
import Layout from "../components/Layout";



export default function About() {
  return (
    <Layout>
      <Head>
        <title>About MediMate</title>
        <meta name="description" content="Learn more about MediMate and our mission." />
      </Head>

      <section className="about" style={{ padding: "2rem" }}>
        <h2>About MediMate</h2>
        <p>
          MediMate was created to help people stay on top of their health by
          simplifying medication management. Our mission is to empower
          individuals with smart tools that bring peace of mind.
        </p>
        <p>
          We use cutting-edge technology to digitize prescriptions, provide
          medication reminders, and create personalized health summaries.
        </p>
        <p>Join thousands who trust MediMate to keep their health organized.</p>
      </section>
    </Layout>
  );
}
