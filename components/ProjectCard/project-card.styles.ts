import styled from "@emotion/styled";
import Image from "next/image";
import { responsiveValues, tokens, mq } from "../../lib/theme";
import { keyframes } from "@emotion/react";

export const ProjectListSection = styled.section`
  margin: 0 auto;
`;

export const animationFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HoverProjectInfo = styled.div`
  padding: 0 ${tokens.spacing[2]};
  position: absolute;
  pointer-events: none;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  opacity: 0;
  color: white;
  width: 100%;
  line-height: 1;
`;

export const HoverProjectTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.display.family};
  font-weight: ${({ theme }) => theme.typography.cover.weight};
  ${({ theme }) => responsiveValues("font-size", theme.typography.cover.size)};
`;

export const HoverProjectSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.display.family};
  font-weight: ${({ theme }) => theme.typography.cover.weight};
  ${({ theme }) => responsiveValues("font-size", {
    s: "16px",
    m: "18px",
    l: "20px",
    xl: "22px"
  })};
  ${({ theme }) => responsiveValues("margin-top", theme.spacing.breathing)};
`;

export const ProjectCardArticle = styled.article<{ index: number }>`
  border-radius: 1rem;
  height: max-content;
  box-sizing: border-box;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  animation-duration: 0.5s;
  animation-name: ${animationFade};
  animation-fill-mode: backwards;

  ${mq[1]} {
    :hover {
      .hover-info {
        opacity: 1;
      }
    }
  }
`;

export const ProjectCardImage = styled(Image)`
  display: block;
  transition: all 0.5s ease;
  object-fit: cover;
${({ theme }) => responsiveValues("border-radius", theme.radius)};

  ${mq[1]} {
    :hover {
      filter: brightness(40%);
    }
  }
`;

export const MobileProjectInfo = styled.div`
  display: block;
  margin-top: ${tokens.spacing[3]};

  ${mq[1]} {
    display: none;
  }
`;

export const MobileProjectTitle = styled.h2`
  display: flex;
  align-items: top;
  font-family: ${({ theme }) => theme.typography.display.family};
  font-weight: ${({ theme }) => theme.typography.cover.weight};
  ${({ theme }) => responsiveValues("font-size", {
    s: "24px",
    m: "32px",
    l: "36px",
    xl: "40px"
  })};
  line-height: 150%;
`;

export const MobileProjectSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.display.family};
  font-weight: ${({ theme }) => theme.typography.cover.weight};
  ${({ theme }) => responsiveValues("font-size", {
    s: "16px",
    m: "20px",
    l: "24px",
    xl: "30px"
  })};
  color: ${tokens.color[4]};
  ${({ theme }) => responsiveValues("padding-right", {
    s: "2.2rem",
    m: "0",
    l: "0",
    xl: "0"
  })};

`;
