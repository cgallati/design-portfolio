import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { responsiveValues, tokens, mq } from "../../lib/theme";

const teaserEnter = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TeaserCard = styled.article`
  background: ${tokens.color[6]};
  color: ${tokens.color[0]};
  ${({ theme }) => responsiveValues("border-radius", theme.radius)};
  ${responsiveValues("padding", {
    s: "1.5rem",
    m: "2rem",
    l: "2.5rem 3rem",
    xl: "2.75rem 3.5rem",
  })};
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  transition: transform 0.3s ease, background 0.3s ease;
  animation: ${teaserEnter} 800ms cubic-bezier(0.25, 0.1, 0.25, 1) 400ms both;

  ${mq[1]} {
    &:hover {
      transform: translateY(-2px);
      background: ${tokens.color[9]};
    }
    &:hover .teaser-arrow {
      transform: translateX(8px);
    }
  }
`;

export const TeaserContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TeaserEyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.875rem;
`;

export const TeaserPulse = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #ffae3b;
  flex-shrink: 0;
`;

export const TeaserEyebrow = styled.span`
  font-family: ${({ theme }) => theme.typography.interactive.family};
  ${({ theme }) =>
    responsiveValues("font-size", theme.typography.interactive.size)};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${tokens.color[0]};
  opacity: 0.72;
`;

export const TeaserTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.display.family};
  ${responsiveValues("font-size", {
    s: "1.5rem",
    m: "1.75rem",
    l: "2.125rem",
    xl: "2.5rem",
  })};
  font-weight: ${({ theme }) => theme.typography.cover.weight};
  margin: 0 0 0.5rem;
  line-height: 1.15;
`;

export const TeaserStatus = styled.p`
  font-family: ${({ theme }) => theme.typography.body.family};
  ${responsiveValues("font-size", {
    s: "0.95rem",
    m: "1.05rem",
    l: "1.15rem",
    xl: "1.25rem",
  })};
  font-weight: ${({ theme }) => theme.typography.body.weight};
  margin: 0;
  opacity: 0.82;
  ${responsiveValues("max-width", {
    s: "100%",
    m: "100%",
    l: "44rem",
    xl: "52rem",
  })};
  line-height: 1.5;
`;

export const TeaserArrow = styled.span`
  ${responsiveValues("font-size", {
    s: "1.5rem",
    m: "1.75rem",
    l: "2rem",
    xl: "2.25rem",
  })};
  transition: transform 0.3s ease;
  flex-shrink: 0;
  line-height: 1;
`;
