import styled from "@emotion/styled";
import { responsiveValues, tokens } from "../../lib/theme";

export const PageWrapper = styled.div`
  position: relative;
  ${responsiveValues("padding", {
    s: "0 2rem",
    m: "0 3rem",
    l: "0 4rem",
    xl: "0 5rem",
  })};
  max-width: 1450px;
  margin: 0 auto;
  box-sizing: content-box;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.interactive.family};
  ${({ theme }) =>
    responsiveValues("font-size", theme.typography.interactive.size)};
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 0.75rem;

  &::before {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #ffae3b;
    flex-shrink: 0;
  }
`;

export const HeroSection = styled.section`
  ${responsiveValues("max-width", {
    s: "none",
    m: "none",
    l: "28rem",
    xl: "47.5rem",
  })};
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.display.family};
  ${({ theme }) => responsiveValues("font-size", theme.typography.display.size)};
  font-weight: ${({ theme }) => theme.typography.display.weight};
  color: ${({ theme }) => theme.color.primary};
  margin: 0 0 0.75rem;
  line-height: 1.15;
`;

export const HeroIntro = styled.p`
  font-family: ${({ theme }) => theme.typography.display.family};
  ${responsiveValues("font-size", {
    s: "1rem",
    m: "1rem",
    l: "1.15rem",
    xl: "1.4rem",
  })};
  font-weight: ${({ theme }) => theme.typography.subheading.weight};
  color: ${({ theme }) => theme.color.secondary};
  margin: 0;
  line-height: 1.5;
`;

export const DemoCtaWrapper = styled.div`
  ${responsiveValues("margin-top", {
    s: "1.75rem",
    m: "2rem",
    l: "2.25rem",
    xl: "2.5rem",
  })};
`;

export const DemoCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  ${responsiveValues("padding", {
    s: "14px 24px",
    m: "16px 28px",
    l: "18px 32px",
    xl: "18px 32px",
  })};
  background: ${tokens.color[6]};
  color: ${tokens.color[0]};
  text-decoration: none;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.typography.display.family};
  font-weight: 400;
  ${responsiveValues("font-size", {
    s: "16px",
    m: "18px",
    l: "20px",
    xl: "22px",
  })};
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: ${tokens.color[9]};
    transform: translateY(-2px);
  }

  & > span {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover > span {
    transform: translateX(6px);
  }
`;

export const DemoNote = styled.p`
  margin: 1.25rem 0 0;
  font-family: ${({ theme }) => theme.typography.body.family};
  ${responsiveValues("font-size", {
    s: "0.825rem",
    m: "0.9rem",
    l: "1rem",
    xl: "1.1rem",
  })};
  color: ${tokens.color[4]};
  font-style: italic;
`;
