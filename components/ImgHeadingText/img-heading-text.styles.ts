import styled from "@emotion/styled";
import Image from "next/image";
import { mq, responsiveValues, tokens } from "../../lib/theme";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${responsiveValues("margin", {
    s: "3rem 0",
    m: "5rem 0",
    l: "6rem 0",
    xl: "7rem 0",
  })};
  ${mq[1]} {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  height: auto;
  ${responsiveValues("margin-right", {
    s: "1rem",
    m: "2rem",
    l: "3rem",
    xl: "4rem",
  })};

  ${responsiveValues("margin-bottom", {
    s: "2rem",
    m: "3rem",
    l: "0",
    xl: " 0",
  })};
  ${responsiveValues("min-height", {
    s: "200px",
    m: "150px",
    l: "250px",
    xl: "300px",
  })};
`;


export const ContentWrapper = styled.div`
  flex: 1;
  ${mq[1]} {
    width: 50%;
  }
`;

export const Heading = styled.h3`
  ${({ theme }) => responsiveValues("font-size", {
    s: tokens.typography.size[2],
    m: tokens.typography.size[3],
    l: tokens.typography.size[3],
    xl: tokens.typography.size[4]
  })}
  font-weight: 400;
  ${({ theme }) => responsiveValues("margin-bottom", theme.spacing.breathing)}
  color: ${({ theme }) => theme.color.primary};
`;

export const TextContent = styled.p`
  ${({ theme }) => responsiveValues("font-size", theme.typography.body.size)}
  color: #636363;
  line-height: 1.6;
  font-weight: 400;
`;
