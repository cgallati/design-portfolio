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
    pathname === "/" ||
    pathname.split("/")[1] === "project" ||
    pathname === "/current";

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
            <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
      <DefaultSeo
        title={"Steven Vasil"}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://stevenvasil.com/",
          siteName: "Steven Vasil",
          description: "Portfolio",
          images: [
            {
              url: "/assets/startup25.png",
              width: 800,
              height: 600,
              alt: "Steven Vasil",
              type: "image/png",
            },
          ],
        }}
      />
      <Layout navLinks={linksWithState}>
        {pageProps.preview && (
          // API route needs a full navigation, not a client-side <Link>
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            href="/api/exit-preview"
            style={{
              position: "fixed",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1000,
              background: "#151515",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 999,
              fontFamily: "Poppins, sans-serif",
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,.2)",
              whiteSpace: "nowrap",
            }}
          >
            Previewing drafts · Exit preview
          </a>
        )}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
