import styled from "@emotion/styled";
import Link from "next/link";
import { mq, responsiveValues, tokens } from "../../lib/theme";
import { animationFade } from "../ProjectCard/project-card.styles";

export const PageContainer = styled.div`
  margin: auto;
  background-color: ${({ theme }) => theme.color.background};
`;

export const PageContent = styled.div`
  font-family: ${({ theme }) => theme.typography.body.family};
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
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
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
  width: ${tokens.spacing[3]};

  ${mq[0]} {
    width: ${tokens.spacing[4]};
  }

  ${mq[1]} {
    width: ${tokens.spacing[5]};
  }

  ${mq[2]} {
    width: ${tokens.spacing[6]};
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
