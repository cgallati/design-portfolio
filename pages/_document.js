import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
          <meta property="og:url" content="https://stevenvasil.com/" />
          <meta property="og:title" content="Steven Vasil" />
          <meta property="og:description" content="UX Designer" />
          <meta property="og:image" content="/assets/startup25.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://stevenvasil.com/" />
          <meta property="twitter:title" content="Steven Vasil" />
          <meta property="twitter:description" content="UX Designer" />
          <meta property="twitter:image" content="/assets/startup25.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </Html>
  );
}
