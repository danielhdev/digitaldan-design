import Head from "next/head";
import Hero from "@components/Hero";


export default function Home() {
  <Head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="digital design brand design web design brands branding" />
    <meta http-equiv="X-UA-Compatible" content="IE=7" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>Digitaldan Agency, digital design, brand design, creating digital values</title>
  </Head>


  return (
    <div>

      <Hero />
    </div>
  );
}
