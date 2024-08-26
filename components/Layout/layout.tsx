import { FC, ReactNode } from "react";
import {
  PageContainer,
  Header,
  NavBar,
  Logo,
  NavLink,
  PageContent,
} from "./layout.styles";
import { UrlObject } from "url";
import Link from "next/link";

interface NavLinkProps {
  display: string;
  href: string | UrlObject;
  active: boolean;
}

export const Layout: FC<{ navLinks: NavLinkProps[]; children: ReactNode }> = ({
  navLinks,
  children,
}) => {
  return (
    <PageContainer>
      <Header>
        <Link href={"/"}>
          <Logo src={"/logo.svg"} />
        </Link>
        <NavBar>
          {navLinks.map(({ href, display, active }) => (
            <NavLink key={display} href={href}>
              {display}
            </NavLink>
          ))}
        </NavBar>
      </Header>
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};
