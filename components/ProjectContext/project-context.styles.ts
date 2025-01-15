import styled from "@emotion/styled";
import { mq, responsiveValues } from "../../lib/theme";

export const ContextSection = styled.section`
  display: flex;
  flex-direction: column;
  ${mq[0]} {
    flex-direction: row;
  }
  justify-content: space-between;
`;

export const ContextTitle = styled.h2`
  color: #131313;
  font-family: Poppins, sans-serif;
  ${({
    theme,
  }) => responsiveValues("font-size", theme.typography.display.size)};
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  margin: 20px 0 24px;
`;

export const ParagraphsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mq[0]} {
    flex-basis: 50%;
  }
  width: 100%;
  gap: 62px;
  ${responsiveValues("margin-bottom", {
    s: "10rem",
    m: "12rem",
    l: "12rem",
    xl: "16rem",
  })};
  ${responsiveValues("margin-top", {
    s: "0",
    m: "1.5rem",
    l: "1.5rem",
    xl: "1.5rem",
  })};
`;
export const ContextParagraph = styled.p`
  color: #636363;
  font-family: Poppins, sans-serif;
  ${({
    theme,
  }) => responsiveValues("font-size", {
    s: "15px",
    m: "18px",
    l: "20px",
    xl: "24px",
  })};
  font-style: normal;
  font-weight: 300;
  line-height: 175%;
`;
