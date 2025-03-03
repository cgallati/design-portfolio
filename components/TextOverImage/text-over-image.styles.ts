import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  align-items: center;
  ${responsiveValues("margin-bottom", {
    s: "4rem",
    m: "5rem",
    l: "8rem",
    xl: "10rem",
  })};
`;

export const TextWrapper = styled.div`
  ${responsiveValues("max-width", {
    s: "80%",
    m: "80%",
    l: "50%",
    xl: "50%",
  })};
  ${responsiveValues("margin-bottom", {
    s: "2rem",
    m: "2.5rem",
    l: "5rem",
    xl: "7rem",
  })};
   ${responsiveValues("margin-top", {
    s: "2rem",
    m: "2.5rem",
    l: "6rem",
    xl: "8rem",
  })};
`;

export const Text = styled.p`
  ${({ theme }) => responsiveValues("font-size", theme.typography.body.size)}
  line-height: 1.6;
  color: #636363;
  font-weight: 400;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  ${responsiveValues("height", {
    s: "250px",
    m: "350px",
    l: "450px",
    xl: "500px",
  })};
`;
