import Dashboard from "@/components/dashboard";
import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Developed by Ashish Adhikari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
}
