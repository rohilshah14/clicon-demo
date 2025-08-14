import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Clicon</title>
        <meta name="description" content="Clicon-NextJs" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=5"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
