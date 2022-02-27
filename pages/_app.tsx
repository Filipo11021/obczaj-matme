import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>obczaj matme</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Obczaj Matme to skuteczne kursy i korepetycje z matematyki. Kompleksowe  egzaminu ósmoklasisty z wspaniale przygotowanym i zaangażowanym prowadzącym."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
