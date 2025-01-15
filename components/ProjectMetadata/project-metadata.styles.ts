import styled from "@emotion/styled";
import { mq, responsiveValues } from "../../lib/theme";

export const MetadataWrapper = styled.section`
  ${responsiveValues("margin", {
    s: "0 0 52px",
    m: "55px 0",
    l: "65px 0",
    xl: "73px 0",
  })};
  border-top: solid rgba(0, 0, 0, 0.3) 1px;
  display: flex;
  flex-direction: column;
  ${mq[0]} {
    flex-direction: row;
  }
`;

export const MetadataDescriptionWrapper = styled.div`
  ${mq[0]} {
    width: 50%;
  }
  ${responsiveValues("margin", {
    s: "2rem 0",
    m: "1rem",
    l: "1rem",
    xl: "1rem",
  })};
`;

export const MetadataDescription = styled.h3`
  max-width: 660px;
  color: #636363;
  font-family: Poppins, sans-serif;
  ${responsiveValues("font-size", {
    s: "20px",
    m: "22px",
    l: "24px",
    xl: "28px",
  })};
  font-style: normal;
  font-weight: 300;
  line-height: 175%;
`;

export const MetadataItemsWrapper = styled.div`
  ${mq[0]} {
    width: 50%;
  }
  ${responsiveValues("font-size", {
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
  })};
`;

export const MetadataItemsKey = styled.p`
  margin-top: 25px;
  color: #b0b0b0;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
`;

export const MetadataItemsValue = styled.p`
  color: #404040;
  margin-top: 11px;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
`;

export const MetadataItemDivider = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
`;

export const MobileOnlyMetadataItemDivider = styled(MetadataItemDivider)`
  display: block;
  ${mq[0]} {
    display: none;
  }
  margin: 0;
`;