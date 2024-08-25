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
