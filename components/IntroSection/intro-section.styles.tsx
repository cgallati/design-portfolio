import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";

export const IntroSectionFrame = styled.section`
  display: flex;
  ${responsiveValues("padding-left", {
    s: "0",
    m: "0",
    l: "1.5rem",
    xl: "1.5rem",
  })};
  flex-direction: column;
  justify-content: center;
  ${responsiveValues("min-height", {
    s: "none",
    m: "calc(100vw * 0.45)",
    l: "calc(100vw * 0.45)",
    xl: "calc(100vw * 0.45)",
  })};
  ${responsiveValues("margin", {
    s: "5rem 0",
    m: "8rem 0",
    l: "0",
    xl: "0",
  })};

  background-color: ${({ theme }) => theme.color.background};
`;

export const IntroSectionTextContainer = styled.div`
  text-align: left;
  ${({ theme }) =>
    responsiveValues("max-width", theme.spacing.content)}
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
