import styled from "@emotion/styled";
import { responsiveValues, mq } from "../../lib/theme";

export const BannerWrapper = styled.div`
  width: 100%; /* Full width of the screen */
  ${responsiveValues("padding", {
    s: "0 2rem",
    m: "0 3rem",
    l: "0 4rem",
    xl: "0 5rem",
  })};
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${mq[1]} {
    flex-direction: row;
    align-items: center;
  }
  justify-content: space-between;
  text-align: left;
  margin: 0;
  padding: 150px 20px;
`;

export const Title = styled.h2`
  font-size: 46px; /* Large font size for the title */
  font-weight: 300;
  margin: 0;
  flex: 1;
`;

export const TextWrapper = styled.div`
  flex: 1;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  line-height: 1.6;
    ${responsiveValues("max-width", {
    s: "100%",
    m: "100%",
    l: "500px",
    xl: "500px",
  })};
`;
