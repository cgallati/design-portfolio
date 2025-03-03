import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";

export const BannerWrapper = styled.div`
  width: 100%; /* Full width of the screen */
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  margin: 0;
  padding: 150px 20px;
`;

export const Title = styled.h2`
  font-size: 46px; /* Large font size for the title */
  font-weight: 400;
  margin: 0;
  flex-shrink: 0;
  padding-right: 8rem; /* Space between title and text */
`;

export const TextWrapper = styled.div`
  flex-grow: 1; /* Let the text grow to take remaining space */
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
`;
