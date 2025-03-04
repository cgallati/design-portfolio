import styled from '@emotion/styled';
import { mq, responsiveValues } from '../../lib/theme/util';
import { tokens } from '../../lib/theme';

export const PercentageSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  ${({ theme }) => responsiveValues("margin", {
    s: "6rem 0",
    m: "64px 0",
    l: " 0",
    xl: "3rem 0"
  })};
  ${mq[1]} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
`;

export const DialContainer = styled.div`
  position: relative;
  margin: 2rem auto 0;
  width: 320px;
  height: 320px;
  
  ${mq[1]} {
    margin: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: ${({ theme }) => theme.spacing[8]};
  }
`;

export const PercentageCircleSVG = styled.svg`
  height: 100%;
  width: 100%; /* Add explicit width */
  transform: rotate(-90deg);
  ${responsiveValues("max-width", {
    s: "320px",
    m: "340px",
    l: "240px",
    xl: "340px"
  })};
  ${responsiveValues("max-height", { /* Add explicit max-height */
    s: "320px",
    m: "340px",
    l: "240px",
    xl: "340px"
  })};
  viewBox="0 0 340 340"; /* Add viewBox attribute */
`;

export const PercentageCircle = styled.circle<{ percentage: number }>`
  fill: none;
  stroke: #AEAEAE;
  stroke-width: 2;
  stroke-linecap: butt;
  transform-origin: center;
  transition: stroke-dashoffset 1.5s ease;
  /* Safari requires explicit dimensions for SVG elements */
  width: 100%;
  height: 100%;
  cx="170"; /* Add cx attribute */
  cy="170"; /* Add cy attribute */
  r="160"; /* Add r attribute */
`;

export const PercentageValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${responsiveValues("font-size", {
    s: tokens.typography.size[5],
    m: tokens.typography.size[5],
    l: tokens.typography.size[4],
    xl: tokens.typography.size[6]
  })};
  color: ${({ theme }) => theme.color.primary};
`;

export const BlurbContainer = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  font-weight: 300;
  ${mq[1]} {
    margin: 0;
    text-align: left;
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: ${({ theme }) => theme.spacing[8]};
    justify-content: flex-start;
  }
`;

export const Blurb = styled.p`
  ${responsiveValues("font-size", {
    s: tokens.typography.size[2],
    m: tokens.typography.size[2],
    l: tokens.typography.size[2],
    xl: tokens.typography.size[3]
  })};
  line-height: 1.6;
  margin: 0;
  ${responsiveValues("max-width", {
    s: "380px",
    m: "420px",
    l: "460px",
    xl: "550px"
  })};
`;