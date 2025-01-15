import styled from "@emotion/styled";
import { mq } from "../../lib/theme/util";
import Image from "next/image";
import { tokens, responsiveValues } from "../../lib/theme";

export const AssetGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${responsiveValues("gap", {
    s: "10px",
    m: "15px",
    l: "25px",
    xl: "60px",
  })};
  ${responsiveValues("padding", {
    s: "0 " + tokens.spacing[2],
    m: "0 " + tokens.spacing[4],
    l: "0 " + tokens.spacing[7],
    xl: "0 " + tokens.spacing[10],
  })};
  ${responsiveValues("margin-bottom", {
    s: "4rem",
    m: "6rem",
    l: "12rem",
    xl: "16rem",
  })};

  img {
    ${({ theme }) => responsiveValues("border-radius", theme.radius)};
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${responsiveValues("gap", {
    s: "10px",
    m: "15px",
    l: "25px",
    xl: "60px",
  })};
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${responsiveValues("gap", {
    s: "10px",
    m: "15px",
    l: "25px",
    xl: "60px",
  })};
  flex-basis: 50%;
`;

export const AssetImage = styled(Image)`
`;

export const FullWidthImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

export const TallImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 10;
  flex-basis: 50%;
`;