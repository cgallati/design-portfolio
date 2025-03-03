import styled from "@emotion/styled";
import { mq, responsiveValues } from "../../lib/theme";

export const ContextSection = styled.section`
  display: flex;
  flex-direction: column;
  ${mq[0]} {
    flex-direction: row;
  }
  justify-content: space-between;
  padding: 2rem 0;
`;

export const Wrapper = styled.div`
${responsiveValues("padding", {
    s: "0 2rem",
    m: "0 3rem",
    l: "0 4rem",
    xl: "0 5rem",
  })};
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
    s: "2rem",
    m: "2rem",
    l: "5rem",
    xl: "8rem",
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
