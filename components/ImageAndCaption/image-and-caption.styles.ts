import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";
import { mq } from "../../lib/theme/util";

export const Container = styled.div<{ biggerImageAndGreyBg?: boolean }>`
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
  
  ${props => props.biggerImageAndGreyBg && `
    background-color: #f5f5f5;
    padding: 2rem;
    
    ${mq[1]} {
      padding: 3rem;
    }
  `}
`;

export const ImageContainer = styled.div<{ biggerImageAndGreyBg?: boolean }>`
  position: relative;
  width: 100%;
  ${responsiveValues("min-height", {
    s: "250px",
    m: "300px",
    l: "350px",
    xl: "400px",
  })};

  ${props => props.biggerImageAndGreyBg && responsiveValues("min-height", {
    s: "250px",
    m: "300px",
    l: "350px",
    xl: "600px",
  })};
  margin-bottom: 1.5rem;
  
  ${mq[1]} {
    width: ${props => props.biggerImageAndGreyBg ? '60%' : '50%'};
    margin-bottom: 0;
    margin-right: 2rem;
  }

  ${props => props.biggerImageAndGreyBg && responsiveValues("margin-bottom", {
    s: "1rem",
    m: "1rem",
    l: "2rem",
    xl: "3rem",
  })};
`;

export const Caption = styled.div<{ biggerImageAndGreyBg?: boolean }>`
  ${responsiveValues("font-size", {
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
  })};

  ${props => props.biggerImageAndGreyBg &&responsiveValues("font-size", {
    s: "14px",
    m: "14px",
    l: "14px",
    xl: "15px",
  })};

  ${props => props.biggerImageAndGreyBg &&responsiveValues("margin", {
    s: "2rem 0",
    m: "2.5rem 0",
    l: "0",
    xl: "0",
  })};
  color: #636363;
  line-height: 1.6;
  
  ${mq[1]} {
    width: ${props => props.biggerImageAndGreyBg ? '40%' : '50%'};
  }
`;
