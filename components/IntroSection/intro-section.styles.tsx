import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";

export const IntroSectionFrame = styled.section`
  display: flex;
  padding-left: 270px;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vw * 0.45);
  background-color: ${({ theme }) => theme.color.background};
`;

export const IntroSectionTextContainer = styled.div`
  text-align: left;
  ${({ theme }) =>
    responsiveValues("max-width", theme.spacing.content)}//margin-left: 14%;
          //margin-right: 10%;
`;

export const IntroSectionTitle = styled.h1`
  font-style: normal;
  font-family: ${({ theme }) => theme.typography.display.family};
  ${({ theme }) => responsiveValues("font-size", theme.typography.display.size)}
  font-weight: ${({ theme }) => theme.typography.display.weight};
  color: ${({ theme }) => theme.color.primary};
`;

export const IntroSectionSubtitle = styled.p`
  font-style: normal;
  font-family: ${({ theme }) => theme.typography.display.family};
  ${({ theme }) => responsiveValues("font-size", theme.typography.display.size)}
  font-weight: ${({ theme }) => theme.typography.subheading.weight};
  color: ${({ theme }) => theme.color.secondary};
`;
