import styled from "@emotion/styled";
import Link from "next/link";
import { mq, responsiveValues, tokens } from "../../lib/theme";

export const TopRule = styled.hr`
  display: block;
  border: solid 0.5px ${tokens.color[9]};
  ${mq[0]} {
    border-width: 1px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.display.family};
  ${({ theme }) =>
    responsiveValues("font-size", theme.typography.display.size)};
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 18px;
  ${({ theme }) => responsiveValues("margin-bottom", theme.spacing.breathing)};
`;

export const BodyParagraph = styled.p`
  margin-bottom: ${tokens.spacing[2]};
`;

export const BottomRule = styled(TopRule)`
  ${({ theme }) => responsiveValues("margin-top", theme.spacing.breathing)};
`;

export const BottomNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: default;
  margin: 2rem 0 0;
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
