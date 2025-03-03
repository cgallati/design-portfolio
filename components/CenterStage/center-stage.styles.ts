import styled from "@emotion/styled";
import { responsiveValues, tokens } from "../../lib/theme";

export const SlideFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: left;
`;

export const Text = styled.p<{ inView: boolean }>`
  ${({ theme }) =>
    responsiveValues("font-size", {
      s: tokens.typography.size[2],
      m: tokens.typography.size[3],
      l: tokens.typography.size[4],
      xl: tokens.typography.size[5],
    })
  }
  font-weight: ${({ theme }) => theme.typography.subheading.weight};
  ${({ theme }) => responsiveValues("max-width", theme.spacing.centerStage)}
  opacity: 0;
  transform: translateX(100px);
  ${({ inView }) => inView && "opacity: 1; transform: translateX(0);"};
  transition: all 2s;
`;
