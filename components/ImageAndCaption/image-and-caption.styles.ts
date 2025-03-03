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
    l: "0 4rem",
    xl: "0 8rem",
  })};
  justify-content: space-around;
  
  ${mq[1]} {
    flex-direction: row;
    align-items: center;
  }
  
  ${responsiveValues("margin-bottom", {
    s: "3rem",
    m: "4rem",
    l: "5rem",
    xl: "6rem",
  })};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  ${responsiveValues("height", {
    s: "250px",
    m: "300px",
    l: "350px",
    xl: "400px",
  })};
  margin-bottom: 1.5rem;
  
  ${mq[1]} {
    width: 60%;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

export const Caption = styled.div`
  ${responsiveValues("font-size", {
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
  })};
  color: #636363;
  line-height: 1.6;
  
  ${mq[1]} {
    width: 40%;
  }
`;
