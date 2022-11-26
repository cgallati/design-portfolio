import styled from "@emotion/styled";
import Link from "next/link";

export const TopRule = styled.hr`
  margin-top: -2rem;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 18px;
`;

export const BottomRule = styled.hr`
  margin-top: 2rem;
`;

export const BottomNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: default;
  margin: 2rem 0 5rem;
`;

export const BottomNavLink = styled(Link)<{ disabled: boolean }>`
  color: black;
  text-decoration: none;
  ${({ disabled }) => {
    if (disabled)
      return `
        color: lightgrey;
        cursor: default;
        pointer-events: none;
    `;
  }}
`;
