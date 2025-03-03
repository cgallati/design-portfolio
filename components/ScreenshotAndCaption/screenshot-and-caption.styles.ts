import styled from "@emotion/styled";
import { mq, responsiveValues } from "../../lib/theme";

export const Container = styled.div`
  padding: 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${responsiveValues("margin-bottom", {
    s: "4rem",
    m: "6rem",
    l: "7rem",
    xl: "8rem",
  })};
  ${mq[1]} {
    flex-direction: row;
  }
`;

export const ScreenshotWrapper = styled.div`
  position: relative;
  width: 100%;
  ${responsiveValues("height", {
    s: "250px",
    m: "300px",
    l: "250px",
    xl: "350px",
  })};
  ${responsiveValues("margin-bottom", {
    s: "1.5rem",
    m: "2rem",
    l: "0",
    xl: "0",
  })};
  
  ${mq[1]} {
    width: 50%;
  }
`;

export const CaptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  ${mq[1]} {
    width: 50%;
  }
`;

export const Caption = styled.p`
  ${({ theme }) => responsiveValues("font-size", theme.typography.body.size)}
  line-height: 1.6;
  color: #636363;
`;
