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
  }) => responsiveValues("font-size", {
    s: "21px",
    m: "26px",
    l: "36px",
    xl: "48px",
  })};
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
    s: "3rem",
    m: "5rem",
    l: "8rem",
    xl: "12rem",
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
    s: "12px",
    m: "16px",
    l: "20px",
    xl: "24px",
  })};
  font-style: normal;
  font-weight: 300;
  line-height: 175%;
`;
