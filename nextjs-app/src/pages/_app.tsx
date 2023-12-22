import "@styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

   return (
      <main>
         <Head>
            <title>
               {router.pathname === "/friends" ? "Bạn bè | " : ""} Mini Facebook
            </title>
            <link rel="icon" href="/facebook-logo.png" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
         </Head>

         <Layout>
            <Component {...pageProps} />;
         </Layout>
      </main>
   );
}

export default App;
