import styled from "@emotion/styled";
import Link from "next/link";
import { mq, responsiveValues, tokens } from "../../lib/theme";

export const TopRule = styled.hr`
  display: block;
  border: solid 0.5px ${tokens.color[9]};
  ${mq[0]} {
    border-width: 1px;
  }
  margin: 0;
`;


export const BodyParagraph = styled.p`
  margin-bottom: ${tokens.spacing[2]};
  font-weight: ${({ theme }) => theme.typography.body.weight};
  ${({ theme }) => responsiveValues("font-size", theme.typography.body.size)}
  letter-spacing: 2px;
  line-height: 1.8;
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
  ${({ theme }) =>
    responsiveValues("font-size", theme.typography.interactive.size)}
  text-decoration: none;
  letter-spacing: 2px;
  ${({ disabled }) => {
    if (disabled)
      return `
        color: lightgrey;
        cursor: default;
        pointer-events: none;
    `;
  }}
`;

export const NextPreviousIcon = styled.img<{ orientation: string }>`
  width: 15px;
  ${({ orientation }) =>
    orientation === "left" ? "margin-right" : "margin-left"}: 10px;

  display: inline;
  transform: rotate(
    ${({ orientation }) => (orientation === "left" ? 270 : 90)}deg
  );
`;
