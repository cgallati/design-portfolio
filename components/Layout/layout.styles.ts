import styled from "@emotion/styled";
import Link from "next/link";
import { css } from "@emotion/react";

export const PageContainer = styled.div`
  margin: 3rem 15rem 0;
  overflow: hidden;
`;

export const PageContent = styled.div`
  max-width: 800px;
  margin: auto;
  padding-top: 3rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const afterUnderline = css`
  ::after {
    content: "";
    position: absolute;
    bottom: -5px;
    height: 2px;
    width: 120%;
    margin-left: -10%;
    background-color: black;
  }
`;

export const NavLink = styled(Link)<{ current: string }>`
  flex: 1;
  margin-left: 2rem;
  color: black;
  text-decoration: none;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :hover {
    ${afterUnderline}
    ::after {
      background-color: ${({ current }) =>
        current == "true" ? "black" : "darkgray"};
    }
  }

  ${({ current }) => {
    if (current == "true") return afterUnderline;
  }}
`;

export const Logo = styled.img`
  width: 40px;
  cursor: pointer;
`;
