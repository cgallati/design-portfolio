import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${responsiveValues("padding", {
    s: "2rem",
    m: "3rem",
    l: "4rem",
    xl: "5rem",
  })};
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
