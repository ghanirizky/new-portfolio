import "../styles/globals.css";
import "../public/css/bootstrap.min.css";
import "../public/css/unicons.css";
import "../public/css/tooplate-style.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
