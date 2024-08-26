import { Layout } from "../components/";
import { NAV_LINKS } from "../lib/constants";
import { useRouter } from "next/router";
import {Global, ThemeProvider} from "@emotion/react";
import { lightTheme } from "../lib/theme";
import { DefaultSeo } from "next-seo";

import Head from "next/head";
import {globalStyles} from "../lib/theme/globalStyles";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isHomeOrProject =
    pathname === "/" || pathname.split("/")[1] === "project";

  const isRoot = (route: string) => route === "/";
  const isActive = (link: { href: string; display: string }) =>
    link.href === pathname;

  const linksWithState = NAV_LINKS.map((link) => ({
    ...link,
    active: isRoot(link.href) ? isHomeOrProject : isActive(link),
  }));

  return (
    <ThemeProvider theme={lightTheme} >
        <Global styles={globalStyles(lightTheme)} />
        <Head>
            <title>STEVEN VASIL</title>
        </Head>
      <DefaultSeo
        title={"Steven Vasil"}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://stevenvasil.com/",
          siteName: "STEVEN VASIL",
          description: "Portfolio",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Layout navLinks={linksWithState}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
