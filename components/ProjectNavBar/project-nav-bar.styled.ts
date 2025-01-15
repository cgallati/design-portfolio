import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq, responsiveValues, tokens } from "../../lib/theme";

export const StickyNavBar = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 1000;
  border-top: 1px solid rgba(19, 19, 19, 0.1);
  border-bottom: 1px solid rgba(19, 19, 19, 0.1);
`;

export const ProjectNav = styled.nav`
  width: 100%;
  position: relative;
`;

export const NavList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.color.background};
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  opacity: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 500px; /* Adjust based on content size */
      opacity: 1;
    `}

  ${mq[0]} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-height: none;
    opacity: 1;
  }
`;

export const MobileNavToggle = styled.button<{ isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: ${tokens.spacing[3]} ${tokens.spacing[2]};
  cursor: pointer;
  ${({ theme }) => responsiveValues("font-size", theme.typography.nav.size)};
  font-weight: ${({ theme }) => theme.typography.nav.weight};
  color: ${({ theme }) => theme.color.primary};

  ${mq[0]} {
    display: none;
  }
`;

export const ChevronIcon = styled.span<{ isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  margin-left: ${tokens.spacing[2]};
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transition: transform 0.2s ease;

  img {
    transition: transform 0.2s ease;
  }
`;

export const ProjectNavItem = styled.li<{ active: boolean }>`
  cursor: pointer;
  padding: ${tokens.spacing[2]} ${tokens.spacing[3]};
  ${({ theme }) => responsiveValues("font-size", theme.typography.nav.size)};
  font-weight: ${({ theme, active }) => 
    active ? 700 : theme.typography.nav.weight
  };
  color: ${({ theme, active }) =>
    active ? theme.color.primary : theme.color.secondary};
  transition: color 0.2s ease;

  ${mq[0]} {
    ${({ theme }) =>
      responsiveValues("padding-top", {
        s: tokens.spacing[2],
        m: tokens.spacing[2],
        l: tokens.spacing[3],
        xl: tokens.spacing[3],
      })};
    ${({ theme }) =>
      responsiveValues("padding-bottom", {
        s: tokens.spacing[2],
        m: tokens.spacing[2],
        l: tokens.spacing[3],
        xl: tokens.spacing[3],
      })};
  }

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
