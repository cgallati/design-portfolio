import styled from "@emotion/styled";
import { mq, responsiveValues } from "../../lib/theme";

export const QuoteSectionWrapper = styled.section`
  padding: 0 2rem;
`;

export const QuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  ${mq[1]} {
    flex-direction: row;
    
    align-items: center;
  }
  ${responsiveValues("padding", {
    s: "2rem 2rem",
    m: "3rem 1rem",
    l: "4rem 2rem",
    xl: "4rem 2rem",
  })};
  gap: 3rem;
  justify-content: space-between;
  
`;

export const QuoteBlurb = styled.p`
  font-family: Poppins, sans-serif;
  color: #151515;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  flex: 1;
  ${responsiveValues("max-width", {
    s: "100%",
    m: "100%",
    l: "500px",
    xl: "500px",
  })};
`;

export const QuotesContainer = styled.div`
  display: flex;
  // flex-direction: row;
  // ${mq[1]} {
    flex-direction: column;
  // }
  flex: 1;
  gap: 2rem;
`;

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${responsiveValues("max-width", {
    s: "100%",
    m: "100%",
    l: "100%",
    xl: "75%",
  })};
  gap: 1rem;
`;

export const QuoteLabel = styled.h3`
  color: #b0b0b0;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const QuoteText = styled.p`
  color: #404040;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
`;
