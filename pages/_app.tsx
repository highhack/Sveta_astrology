import '../styles/globals.scss'
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <Head>
              <link href="https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap" rel="stylesheet"/>
          </Head>
          <main>
              <Component {...pageProps} />
          </main>
      </Layout>
  )
}

export default MyApp
