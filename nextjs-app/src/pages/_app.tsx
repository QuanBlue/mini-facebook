import "@styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Layout from "@components/Layout";

const roboto = Roboto({
   weight: "400",
   subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
   return (
      <main className={roboto.className}>
         <Head>
            <title>Mini Facebook</title>
            <link rel="icon" href="/facebook-logo.png" />
         </Head>

         <Layout>
            <Component {...pageProps} />;
         </Layout>
      </main>
   );
}

export default App;
