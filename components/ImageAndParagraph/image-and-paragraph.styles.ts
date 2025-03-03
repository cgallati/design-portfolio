import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";
import { mq } from "../../lib/theme/util";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${responsiveValues("padding", {
    s: "0 2rem",
    m: "0 3rem",
    l: "0 3rem",
    xl: "0 8rem",
  })};
  
  ${mq[1]} {
    flex-direction: row;
    align-items: flex-start;
  }
  
  ${responsiveValues("margin-bottom", {
    s: "4rem",
    m: "5rem",
    l: "6rem",
    xl: "7rem",
  })};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  ${responsiveValues("height", {
    s: "300px",
    m: "400px",
    l: "650px",
    xl: "700px",
  })};
  margin-bottom: 2rem;
  
  ${mq[1]} {
    width: 50%;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ${mq[1]} {
    width: 50%;
  }
`;

export const Paragraph = styled.div`
  ${responsiveValues("font-size", {
    s: "14px",
    m: "18px",
    l: "20px",
    xl: "24px",
  })};
  color: #636363;
  line-height: 1.6;
  white-space: pre-wrap;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;
