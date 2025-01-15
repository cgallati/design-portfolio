import { FC, ReactNode } from "react";
import Image from "next/image";
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
import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";

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
      <Footer>
        <MaxWidthWrapper>
          <StyledLink href="mailto:steven@stevenvasil.com">
          <ConnectWrapper>
            <ConnectText>Let&apos;s Connect</ConnectText>
            <Image src="/assets/Vector.svg" alt="Connect arrow" width={20} height={20} />
          </ConnectWrapper>
          <EmailText>Shoot me an email</EmailText>
          </StyledLink>
        </MaxWidthWrapper>
      </Footer>
    </PageContainer>
  );
};


const Footer = styled.footer`
  height: 350px;
  background: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MaxWidthWrapper = styled.div`
  width: 100%;
  ${responsiveValues("padding", {
    s: "0 2rem 6rem",
    m: "0 3rem 4rem",
    l: "0 4rem 4rem",
    xl: "0 5rem 4rem",
  })};
  max-width: 1450px;
  margin: 0 auto;
  box-sizing: content-box;
`;

const ConnectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

const ConnectText = styled.p`
color: #151515;
font-family: Poppins;
${responsiveValues("font-size", {
  s: "24px",
  m: "26px",
  l: "28px",
  xl: "32px",
})};
font-style: normal;
font-weight: 400;
line-height: 130%; 
`;

const EmailText = styled.p`
  color: #969696;
font-family: Poppins;
${responsiveValues("font-size", {
  s: "24px",
  m: "26px",
  l: "28px",
  xl: "32px",
})};
font-style: normal;
font-weight: 300;
line-height: 180%; 
`;