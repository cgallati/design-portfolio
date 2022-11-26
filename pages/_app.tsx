import { Layout } from "../components/";
import { NAV_LINKS } from "../lib/constants";
import { useRouter } from "next/router";

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
    <Layout navLinks={linksWithState}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
