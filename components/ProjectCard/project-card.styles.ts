import styled from "@emotion/styled";
import Image from "next/image";
import { responsiveValues, tokens } from "../../lib/theme";
import { keyframes } from "@emotion/react";

export const ProjectListSection = styled.section`
    margin: auto;
    ${({ theme }) => responsiveValues("padding", theme.spacing.frame)}
`;

export const animationFade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ProjectCardArticle = styled.article<{ index: number }>`
  border-radius: 1rem;
  height: max-content;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  animation-duration: 0.5s;
  animation-name: ${animationFade};
  animation-fill-mode: backwards;

  :hover {       
      div {
          opacity: 1;
      }
  }
  div {
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
    h2,h3 {
          font-family: ${({ theme }) => theme.typography.display.family};
          font-weight: ${({ theme }) => theme.typography.cover.weight};
    }
    h2 {
        ${({ theme }) =>
        responsiveValues("font-size", theme.typography.cover.size)};
    }

    h3 {
      ${({ theme }) => responsiveValues("font-size", theme.typography.subheading.size)}
      ${({ theme }) =>responsiveValues("margin-top", theme.spacing.breathing)}};
    } 
  }
`;

export const ProjectCardImage = styled(Image)`
  display: block;
  transition: all 0.5s ease;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.l};
  :hover {
    filter: brightness(40%);
  }
`;
