import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <main className="bg-light dark:bg-dark ">
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
