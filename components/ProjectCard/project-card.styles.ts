import styled from "@emotion/styled";
import Image from "next/image";
import { responsiveValues } from "../../lib/theme";
import { keyframes } from "@emotion/react";

export const ProjectListSection = styled.section`
  margin: auto;
`;

export const animationFade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ProjectCardArticle = styled.article<{ index: number }>`
  height: max-content;
  box-sizing: border-box;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  animation-duration: 0.5s;
  animation-name: ${animationFade};
  animation-fill-mode: backwards;

  div {
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
    h2 {
      font-family: ${({ theme }) => theme.typography.display.family};
      ${({ theme }) =>
        responsiveValues("font-size", theme.typography.display.size)};
    }

    h3 {
      font-size: 16px;
    }
  }

  :hover {
    div {
      opacity: 1;
    }
  }
`;

export const ProjectCardImage = styled(Image)`
  display: block;
  transition: all 0.5s ease;
  object-fit: cover;
  :hover {
    filter: brightness(40%);
  }
`;
