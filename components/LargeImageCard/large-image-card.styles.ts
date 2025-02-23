import styled from "@emotion/styled";
import Image from "next/image";
import { tokens, responsiveValues } from "../../lib/theme";

export const LargeImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  ${responsiveValues("margin", {
    s: tokens.spacing[12] + " " + tokens.spacing[4],
    m: tokens.spacing[15] + " " + tokens.spacing[4],
    l: tokens.spacing[15] + " " + tokens.spacing[7],
    xl:tokens.spacing[15] + " " + tokens.spacing[15],
  })};
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  ${({ theme }) => responsiveValues("border-radius", theme.radius)};
`;
