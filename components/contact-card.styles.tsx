import styled from "@emotion/styled";
import { tokens } from "../lib/theme";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  justify-content: center;
`;

export const ContactCard = styled.section`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.interactive.family};
  line-height: ${tokens.spacing[4]};
  letter-spacing: 2px;
  a {
    text-decoration: none;
    color: black;
  }
`;
