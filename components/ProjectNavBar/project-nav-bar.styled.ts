import styled from "@emotion/styled";
import { responsiveValues, tokens } from "../../lib/theme";

export const StickyNavBar = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 1000;
  border-bottom: 1px solid rgba(19, 19, 19, 0.1);
  // padding-left: ${tokens.spacing[9]};
  ${({ theme }) =>
    responsiveValues("padding-left", {
      s: tokens.spacing[2],
      m: tokens.spacing[4],
      l: tokens.spacing[7],
      xl: tokens.spacing[9],
    })};
`;

export const ProjectTitle = styled.h1`
  ${({ theme }) => responsiveValues("font-size", theme.typography.nav.size)};
  font-weight: ${({ theme }) => theme.typography.nav.weight};
  line-height: 1;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  ${({ theme }) => responsiveValues("margin-right", theme.spacing.padding)};
  ${({ theme }) =>
    responsiveValues("padding-top", {
      s: tokens.spacing[1],
      m: tokens.spacing[2],
      l: tokens.spacing[3],
      xl: tokens.spacing[3],
    })};
  ${({ theme }) =>
    responsiveValues("padding-bottom", {
      s: tokens.spacing[1],
      m: tokens.spacing[2],
      l: tokens.spacing[3],
      xl: tokens.spacing[3],
    })};
`;

export const ProjectNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: start;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const ProjectNavItem = styled.li<{ active: boolean }>`
  cursor: pointer;
  ${({ theme }) =>
    responsiveValues("padding-top", {
      s: tokens.spacing[1],
      m: tokens.spacing[2],
      l: tokens.spacing[3],
      xl: tokens.spacing[3],
    })};
  ${({ theme }) =>
    responsiveValues("padding-bottom", {
      s: tokens.spacing[1],
      m: tokens.spacing[2],
      l: tokens.spacing[3],
      xl: tokens.spacing[3],
    })};
  ${({ theme }) => responsiveValues("margin-right", theme.spacing.breathing)};
  ${({ theme }) => responsiveValues("font-size", theme.typography.nav.size)};
  font-weight: ${({ theme }) => theme.typography.nav.weight};
  color: ${({ theme, active }) =>
    active ? theme.color.primary : theme.color.secondary};
  line-height: 1;

  ::after {
    content: "";
    display: block;
    ${({ theme }) =>
      responsiveValues("transform", {
        s: `translate(-10%, ${tokens.spacing[1]})`,
        m: `translate(-10%, ${tokens.spacing[2]})`,
        l: `translate(-10%, ${tokens.spacing[3]})`,
        xl: `translate(-10%, ${tokens.spacing[3]})`,
      })}
    border-radius: 2px;
    width: 130%;
    height: 3px;
    background-color: ${({ theme, active }) =>
      active ? theme.color.primary : "transparent"};
    transition: background-color 0.3s;
  }

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
