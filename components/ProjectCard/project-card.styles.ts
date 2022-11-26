import styled from "@emotion/styled";
import Image from "next/image";

export const ProjectListSection = styled.section`
  margin: auto;
`;

export const ProjectCardArticle = styled.article<{
  width: number;
  height: number;
  ratio: number;
}>`
  height: max-content;
  box-sizing: border-box;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
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

    h2 {
      font-size: 20px;
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

export const Title = styled.h2``;
