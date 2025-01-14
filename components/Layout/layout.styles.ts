import styled from "@emotion/styled";
import Link from "next/link";
import { mq, responsiveValues, tokens } from "../../lib/theme";
import { animationFade } from "../ProjectCard/project-card.styles";

export const PageContainer = styled.div`
  margin: auto;
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PageContent = styled.div`
  font-family: ${({ theme }) => theme.typography.body.family};
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.typography.display.family};
  ${({ theme }) => responsiveValues("font-size", theme.typography.nav.size)}
  animation-duration: 0.5s;
  animation-name: ${animationFade};
  animation-fill-mode: backwards;
  ${({ theme }) => responsiveValues("padding", theme.spacing.frame)}
  padding-bottom: 0 !important;
  position: relative;
  z-index: 1000;
`;

export const NavBar = styled.nav`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  display: none;
  ${mq[0]} {
    display: flex;
  }
`;

export const NavLink = styled(Link)<{ active: boolean }>`
  flex: 1;
  text-decoration: none;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};
  opacity: 0.3;
  margin-right: 1rem;

  :hover {
  }

  :last-of-type {
    margin-right: 0;
  }

  ${({ active, theme }) =>
    active &&
    `
    opacity: 1;
  `}
`;

export const Logo = styled.img`
  width: ${tokens.spacing[5]};
  height: ${tokens.spacing[5]};
  aspect-ratio: 1;

  ${mq[0]} {
    width: ${tokens.spacing[5]};
    height: ${tokens.spacing[5]};
  }

  ${mq[1]} {
    width: ${tokens.spacing[6]};
    height: ${tokens.spacing[6]};
  }

  ${mq[2]} {
    width: ${tokens.spacing[6]};
    height: ${tokens.spacing[6]};
  }
  cursor: pointer;
`;

export const SlideFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: calc(50vw * 1.12);
`;

export const HamburgerWrapper = styled.div`
  display: block;
  ${mq[0]} {
    display: none;
  }
`;

export const OverlayMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 8rem 2rem 2rem;
  overflow-y: auto;
`;

export const OverlayNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

export const OverlayNavLink = styled(NavLink)`
  font-size: 2rem;
  color: ${({ active }) => (active ? "#000" : "#999")};
  
  &:hover {
    color: #000;
  }
`;