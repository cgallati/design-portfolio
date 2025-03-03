import styled from "@emotion/styled";
import { mq, responsiveValues, tokens } from "../../lib/theme";

export const Wrapper = styled.div`
  width: 100%;
  ${responsiveValues("padding", {
    s: "0 2rem",
    m: "0 3rem",
    l: "0 4rem",
    xl: "0 5rem",
  })};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${responsiveValues("margin", {
    s: "1rem 0",
    m: "1rem 0",
    l: "2rem 0 10rem",
    xl: "3rem 0 15rem",
  })};
  ${mq[1]} {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  flex-basis: 50%;
  height: auto;


  ${responsiveValues("margin-bottom", {
    s: "2rem",
    m: "3rem",
    l: "0",
    xl: " 0",
  })};
  ${responsiveValues("min-height", {
    s: "200px",
    m: "250px",
    l: "250px",
    xl: "300px",
  })};
`;

export const ContentWrapper = styled.div`
  flex-basis: 50%;
  ${mq[1]} {
    width: 50%;
    max-width: 500px;
  }
  ${responsiveValues("margin-bottom", {
    s: "2rem",
    m: "3rem",
    l: "0",
    xl: " 0",
  })};
`;

export const Heading = styled.h3`
  ${({ theme }) => responsiveValues("font-size", {
    s: '20px',
    m: '24px',
    l: '26px',
    xl: '28px'
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
