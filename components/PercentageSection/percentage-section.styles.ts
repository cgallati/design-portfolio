import styled from '@emotion/styled';
import { mq, responsiveValues } from '../../lib/theme/util';
import { tokens } from '../../lib/theme';

export const PercentageSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${({ theme }) => responsiveValues("margin", theme.spacing.breathing)};
  align-items: center;
  
  ${mq[1]} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
`;

export const DialContainer = styled.div`
  position: relative;
  margin: 0 auto;
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
  transform: rotate(-90deg);
  ${responsiveValues("max-width", {
    s: "320px",
    m: "340px",
    l: "240px",
    xl: "340px"
  })};
`;

export const PercentageCircle = styled.circle<{ percentage: number }>`
  fill: none;
  stroke: #AEAEAE;
  stroke-width: 2;
  stroke-linecap: butt;
  transform-origin: center;
  transition: stroke-dashoffset 1.5s ease;
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
  max-width: 380px;
`;