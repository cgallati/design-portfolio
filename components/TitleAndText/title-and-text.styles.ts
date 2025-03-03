import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  ${responsiveValues("margin-bottom", {
    s: "3rem",
    m: "4rem",
    l: "20rem",
    xl: "25rem",
  })};
`;

export const TextWrapper = styled.div`
  ${responsiveValues("max-width", {
    s: "100%",
    m: "75%",
    l: "70%",
    xl: "70%",
  })}
  ${responsiveValues("margin", {
    s: "2rem 0 1rem 0",
    m: "2.5rem 0 1.5rem 0",
    l: "20rem 0 2rem 10rem",
    xl: "25rem 0 2.5rem 15rem",
  })};
`;

export const Title = styled.h2`
  font-weight: 500;
  color: #232323;
  ${responsiveValues("font-size", {
    s: "20px",
    m: "24px",
    l: "28px",
    xl: "40px",
  })};
  ${responsiveValues("margin-bottom", {
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "2.5rem",
  })};
`;

export const Text = styled.p`
  ${responsiveValues("font-size", {
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
  })};
  color: #636363;
  line-height: 1.6;
  white-space: pre-wrap;
`;
