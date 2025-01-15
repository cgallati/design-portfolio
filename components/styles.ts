import styled from "@emotion/styled";

export const HorizontalLine = styled.div<{ inView: boolean }>`
  width: ${({ inView }) => (inView ? "100%" : "0%")};
  height: 1px;
  background: rgba(0, 0, 0, 0.3);
  transition: width 2s ease-out .3s;
`;
