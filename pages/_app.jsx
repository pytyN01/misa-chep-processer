import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Misa California Chep Processer</title>

        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Chep Processer for Misa California" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link
          rel="canonical"
          href="https://getbootstrap.com/docs/5.0/examples/sign-in/"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          sizes="16x16"
          type="image/png"
          href="/icons/icon-16x16.png"
        />
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="/icons/icon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png"></link>
        <link
          href="/icons/icon-152x152.png"
          rel="apple-touch-icon-precomposed"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
