import { FC, ReactNode } from "react";
import {
  PageContainer,
  Header,
  NavBar,
  Logo,
  NavLink,
  PageContent,
  HamburgerWrapper,
  OverlayMenu,
  OverlayNavLink,
  OverlayNav,
} from "./layout.styles";
import { UrlObject } from "url";
import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import { useState } from "react";

interface NavLinkProps {
  display: string;
  href: string | UrlObject;
  active: boolean;
}

export const Layout: FC<{ navLinks: NavLinkProps[]; children: ReactNode }> = ({
  navLinks,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <PageContainer>
      <Header>
        <Link href={"/"}>
          <Logo src={"/logo.svg"} alt="Logo" width={32} height={32} />
        </Link>
        <NavBar>
          {navLinks.map(({ href, display, active }) => (
            <NavLink key={display} href={href} active={active}>
              {display}
            </NavLink>
          ))}
        </NavBar>
        <HamburgerWrapper>
          <MenuIcon 
            isOpen={isMenuOpen}
            onClick={toggleMenu}
          />
        </HamburgerWrapper>
      </Header>
      <OverlayMenu isOpen={isMenuOpen}>
        <OverlayNav>
          {navLinks.map(({ href, display, active }) => (
            <OverlayNavLink 
              key={display} 
              href={href} 
              active={active}
              onClick={() => setIsMenuOpen(false)}
            >
              {display}
            </OverlayNavLink>
          ))}
        </OverlayNav>
      </OverlayMenu>
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};
