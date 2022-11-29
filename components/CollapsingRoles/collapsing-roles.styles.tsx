import styled from "@emotion/styled";
import { responsiveValues } from "../../lib/theme";

interface ToggleProps {
  readonly isActive: boolean;
  readonly maxHeight?: number;
}

export const Frame = styled.section<ToggleProps>`
  max-height: ${(props) => props.maxHeight}px;
  transition: max-height 0.5s ease;
  margin-bottom: 1rem;
`;

export const Header = styled.header`
  cursor: pointer;
  align-items: center;
  margin-bottom: 1rem;
  display: inline;
`;

export const RolesHeading = styled.h2`
  font-family: ${({ theme }) => theme.typography.interactive.family};
  font-weight: ${({ theme }) => theme.typography.body.weight};
  ${({ theme }) =>
    responsiveValues("font-size", theme.typography.interactive.size)}
  letter-spacing: 2.6px;
  margin: 0;
  display: inline;
`;

export const Roles = styled.ul`
  font-family: ${({ theme }) => theme.typography.interactive.family};
  letter-spacing: 0.65px;
  font-size: 18px;

  li {
    list-style-position: outside;
    list-style-type: "—";
    padding-left: 1rem;
    ::marker {
      margin-right: 2rem;
    }
  }
`;
