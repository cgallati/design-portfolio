import styled from "@emotion/styled";
import { mq, responsiveValues } from "../../lib/theme";

export const Wrapper = styled.div`
  width: 100%;
  ${responsiveValues("padding", {
    s: "0 2rem",
    m: "0 3rem",
    l: "0 4rem",
    xl: "0 5rem",
  })};
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  ${mq[1]} {
    flex-direction: row;
  }
  justify-content: space-between;
  padding: 2rem 0;
`;

export const LeftContent = styled.div`
  ${mq[1]} {
    flex-basis: 45%;
    padding-right: 3rem;
  }
  ${responsiveValues("max-width", {
    s: "100%",
    m: "100%",
    l: "50%",
    xl: "35%",
  })};

`;

export const RightContent = styled.div`
  ${mq[1]} {
    flex-basis: 55%;
  }
  margin-top: 2rem;
  ${mq[1]} {
    margin-top: 0;
  }
`;

export const Heading = styled.h2`
  color: #131313;
  font-family: Poppins;
  ${({
    theme,
  }) => responsiveValues("font-size", {
    s: "26px",
    m: "28px",
    l: "32px",
    xl: "36px",
  })};
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  ${responsiveValues("margin", {
    s: "0 0 1rem",
    m: "0 0 2rem",
    l: "0 0 3rem",
    xl: "0 0 4rem",
  })};
`;

export const Subheading = styled.h3`
  color: #151515;
  font-family: Poppins;
  ${({
    theme,
  }) => responsiveValues("font-size", {
    s: "20px",
    m: "24px",
    l: "26px",
    xl: "28px",
  })};
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

export const TextContent = styled.p`
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
    ${responsiveValues("max-width", {
    s: "100%",
    m: "100%",
    l: "95%",
    xl: "90%",
  })};
`;

export const AssetContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
`;
