import styled from "@emotion/styled";
import Link from "next/link";
import { mq, responsiveValues, tokens } from "../../lib/theme";
import { animationFade } from "../ProjectCard/project-card.styles";

export const PageContainer = styled.div`
  margin: auto;
  ${({ theme }) => responsiveValues("padding", theme.spacing.frame)}
  ${({ theme }) => responsiveValues("max-width", theme.spacing.content)}
`;

export const PageContent = styled.div`
  font-family: ${({ theme }) => theme.typography.body.family};
  ${({ theme }) => responsiveValues("padding-top", theme.spacing.breathing)}
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
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavLink = styled(Link)<{ current: boolean }>`
  flex: 1;
  padding: 0 1rem;
  text-decoration: none;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: black;
  ::after {
    content: "";
    position: absolute;
    bottom: -5px;
    height: 2px;
    width: 80%;
    margin-left: -10%;
    transition: all 300ms cubic-bezier(0.04, 0.1, 0.98, 0.88);
    background-color: ${({ current }) => (current ? "black" : "white")};
  }
  :hover {
    ::after {
      background-color: ${({ current }) => (current ? "black" : "darkgray")};
    }
  }
`;

export const Logo = styled.img`
  width: ${tokens.spacing[4]};

  ${mq[0]} {
    width: ${tokens.spacing[6]};
  }
  ${mq[1]} {
    width: ${tokens.spacing[6]};
  }
  ${mq[2]} {
    width: ${tokens.spacing[6]};
  }
  cursor: pointer;
`;
